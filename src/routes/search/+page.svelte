<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import type {
        Pagefind,
        PagefindIndexOptions,
        PagefindSearchFragment,
        PagefindSearchResult,
    } from "vite-plugin-pagefind/types";
    import { onMount } from "svelte";
    import { useDebounce } from "runed";
    import { Temporal } from "@js-temporal/polyfill";
    import Loc from "$src/lib/components/Loc.svelte";
    import Box from "$src/lib/components/Box.svelte";
    import Capsule from "$src/lib/components/Capsule.svelte";
    import IconSearch from "@lucide/svelte/icons/search";
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import { getLocale, localizeHref, locales } from "$src/lib/paraglide/runtime";
    import { formatPostDate, SITE_TIME_ZONE } from "$src/lib/datetime";

    type Language = (typeof locales)[number];
    // createInstance exists since Pagefind 1.5, but vite-plugin-pagefind's types don't include it yet
    type PagefindModule = Pagefind & {
        createInstance: (options?: PagefindIndexOptions) => Pagefind;
    };

    /** The index of the collection, rebuilt on its own by scripts/build_asset_index.ts */
    type AssetIndex = {
        instance: Pagefind;
        assetCount: number;
        builtAt: Temporal.ZonedDateTime;
    };

    type Hit = { result: PagefindSearchResult; score: number; lang?: Language };

    const RESULTS_PER_PAGE = 20;
    const URL_UPDATE_DELAY_MS = 300;
    // Items of the collection have short texts, which score several times higher than pages.
    // Tuned on real queries, so that pages lead without pushing the collection out of the top.
    const ASSET_SCORE_WEIGHT = 0.2;
    // Letters and digits, as a number alone is more likely to be a year or a model
    const CODE_QUERY = /^(?=\S*\p{L})(?=\S*\d)\S+$/u;
    // An exact code ranks high among the assets, so there's no need to load all of them
    const CODE_CHECKED_RESULTS = 5;
    const CODE_SEPARATOR = " | ";
    // How much of a search term a matched word has to start with to count as a match
    const MIN_MATCHED_PART = 0.4;

    const languageNames: Record<Language, { cs: string; en: string }> = {
        cs: { cs: "čeština", en: "Czech" },
        en: { cs: "angličtina", en: "English" },
    };

    // The user's language comes first
    const languages = [getLocale(), ...locales.filter((l) => l !== getLocale())];

    let pagefind: PagefindModule | undefined = $state();
    let assetIndex: AssetIndex | undefined = $state.raw();
    const instances: Partial<Record<Language, Pagefind>> = {};

    let pageCounts: Partial<Record<Language, number>> = $state({});
    let builtAt: Temporal.ZonedDateTime | null = $state(null);

    function importPagefind(bundle: string): Promise<PagefindModule> {
        return import(
            // WORKAROUND: we need this templating trick to stop vite from statically analyzing this import
            /* @vite-ignore */
            `${"/"}${bundle}/pagefind.js`
        );
    }

    async function loadAssetIndex(): Promise<AssetIndex | undefined> {
        try {
            const [assetPagefind, buildInfo] = await Promise.all([
                importPagefind("pagefind-assets"),
                fetch("/pagefind-assets/build-info.json").then((r) => r.json()),
            ]);
            return {
                instance: assetPagefind.createInstance(),
                assetCount: buildInfo.assetCount,
                builtAt: Temporal.Instant.from(buildInfo.builtAt).toZonedDateTimeISO(
                    SITE_TIME_ZONE,
                ),
            };
        } catch (e) {
            console.error("Failed to load the index of the collection:", e);
        }
    }

    onMount(async () => {
        [pagefind, assetIndex] = await Promise.all([importPagefind("pagefind"), loadAssetIndex()]);
        // The query is kept in the URL through shallow navigation
        searchValue = (page.shallow?.url ?? page.url).searchParams.get("q") || "";

        const [entry, buildInfo] = await Promise.all([
            fetch("/pagefind/pagefind-entry.json").then((r) => r.json()),
            fetch("/pagefind/build-info.json")
                .then((r) => (r.ok ? r.json() : null))
                .catch(() => null),
        ]);
        for (const lang of languages) {
            pageCounts[lang] = entry.languages[lang]?.page_count ?? 0;
        }
        if (buildInfo?.builtAt) {
            builtAt = Temporal.Instant.from(buildInfo.builtAt).toZonedDateTimeISO(SITE_TIME_ZONE);
        }
    });

    function getInstance(pagefind: PagefindModule, lang: Language): Pagefind {
        // Pagefind picks the index language from <html lang> when creating an instance,
        // so swap it briefly to get an instance for a language other than the page's.
        // (mergeIndex can't be used instead, as it would stem queries using the primary language.)
        if (!instances[lang]) {
            const html = document.documentElement;
            const originalLang = html.lang;
            html.lang = lang;
            try {
                instances[lang] = pagefind.createInstance();
            } finally {
                html.lang = originalLang;
            }
        }
        return instances[lang];
    }

    /** Pagefind ignores case, diacritics and punctuation when matching words. */
    function normalizeWord(word: string) {
        return word
            .normalize("NFD")
            .replace(/[^\p{L}\p{N}]/gu, "")
            .toLowerCase();
    }

    function matchesTerm(word: string, term: string) {
        let commonLength = 0;
        while (commonLength < term.length && word[commonLength] === term[commonLength]) {
            commonLength++;
        }
        return commonLength >= term.length * MIN_MATCHED_PART;
    }

    /**
     * When an index has no word for a search term, Pagefind falls back to the longest word
     * that the term starts with, so "Vochozka" finds every page with the word "v".  All the
     * results of that index are then like this, so it's enough to look at the first one.
     */
    async function withoutFallbackMatches(results: PagefindSearchResult[], val: string) {
        if (!results.length) return results;

        const { content, locations, meta } = await results[0].data();
        const terms = val.split(/\s+/).map(normalizeWord);

        // Matches in metadata have no location, for the collection that means its codes
        if (!locations.length) {
            if (!meta.codes) return results;
            const codes = meta.codes.split(CODE_SEPARATOR).map(normalizeWord);
            const matched = codes.some((code) => terms.some((term) => code.startsWith(term)));
            return matched ? results : [];
        }

        const words = content.split(/\s+/);
        const matched = locations.some((location) =>
            terms.some((term) => matchesTerm(normalizeWord(words[location] ?? ""), term)),
        );
        return matched ? results : [];
    }

    async function hasCode(result: PagefindSearchResult, code: string) {
        const { meta } = await result.data();
        return meta.codes?.toLowerCase().split(CODE_SEPARATOR).includes(code.toLowerCase());
    }

    async function searchAssets(val: string): Promise<Hit[]> {
        if (!assetIndex) return [];

        try {
            const search = await assetIndex.instance.debouncedSearch(val);
            const results = await withoutFallbackMatches(search?.results ?? [], val);
            const code = val.trim();
            const exactMatches = CODE_QUERY.test(code)
                ? await Promise.all(
                      results.slice(0, CODE_CHECKED_RESULTS).map((r) => hasCode(r, code)),
                  )
                : [];
            return results.map((result, i) => ({
                result,
                // Someone looking for an inventory code wants that item, not similar text
                score: exactMatches[i] ? Number.MAX_VALUE : result.score * ASSET_SCORE_WEIGHT,
            }));
        } catch (e) {
            console.error("Failed to search the collection:", e);
            assetIndex = undefined;
            return [];
        }
    }

    async function fetchHits(
        val: string,
        searchedLanguages: Language[],
        searchCollection: boolean,
    ): Promise<Hit[]> {
        if (!pagefind) return [];

        const searches = await Promise.all([
            ...searchedLanguages.map(async (lang) => {
                const search = await getInstance(pagefind!, lang).debouncedSearch(val);
                const results = await withoutFallbackMatches(search?.results ?? [], val);
                return results.map((result) => ({ result, score: result.score, lang }));
            }),
            // The collection is in Czech, but it's searched whatever the chosen languages are
            searchCollection ? searchAssets(val) : [],
        ]);
        return searches.flat().sort((a, b) => b.score - a.score);
    }

    function resultHref(hit: Hit, result: PagefindSearchFragment) {
        // Pages of the website are indexed in their language, unlike the collection
        return hit.lang ? result.url.replace(".html", "") : localizeHref(result.url);
    }

    function stripTitle(title: string) {
        return title.replace(/ - (Herní archiv|Czechoslovak Game Archive)$/, "");
    }

    let searchValue = $state("");

    // Replaces the history entry, so that going back doesn't step through every typed letter
    const updateUrl = useDebounce(() => {
        const url = new URL(location.href);
        if (searchValue) {
            url.searchParams.set("q", searchValue);
        } else {
            url.searchParams.delete("q");
        }
        goto(url, { shallow: true, replace: true, state: page.state });
    }, URL_UPDATE_DELAY_MS);

    function setSearchValue(value: string) {
        searchValue = value;
        updateUrl();
    }

    let searchedLanguages: Language[] = $state([getLocale()]);
    let searchWebsite = $state(true);
    let searchCollection = $state(true);
    let websiteLanguages = $derived(searchWebsite ? searchedLanguages : []);
    let searchHits = $derived(fetchHits(searchValue, websiteLanguages, searchCollection));
    let shownCount = $derived.by(() => {
        searchHits; // Start over with every search
        return RESULTS_PER_PAGE;
    });
    let searchedPageCount = $derived(
        searchedLanguages.reduce((sum, lang) => sum + (pageCounts[lang] ?? 0), 0),
    );
</script>

{#snippet indexUpdated(builtAt: Temporal.ZonedDateTime)}
    · <Loc cs="Index aktualizován" en="Index updated" />
    {formatPostDate(builtAt.toPlainDate())}
    {builtAt.toPlainTime().toString({ smallestUnit: "minute" })}
{/snippet}

<Meta title={{ cs: "Vyhledávání", en: "Search" }} />

<div class="thin">
    <h2><Loc cs="Vyhledávání" en="Search" /></h2>

    <div>
        <div class="search-input">
            <IconSearch />
            <input type="text" autofocus bind:value={() => searchValue, setSearchValue} />
        </div>

        <div class="search-info">
            <fieldset class="options">
                <legend><Loc cs="Vyhledávat:" en="Search in:" /></legend>
                <label>
                    <input type="checkbox" bind:checked={searchWebsite} />
                    <Loc cs="na webu" en="Website" />
                </label>
                <label>
                    <input type="checkbox" bind:checked={searchCollection} />
                    <Loc cs="ve sbírce" en="Collection" />
                </label>
            </fieldset>
            <fieldset class="options" disabled={!searchWebsite}>
                <legend><Loc cs="Jazyky:" en="Languages:" /></legend>
                {#each languages as lang (lang)}
                    <label>
                        <input type="checkbox" value={lang} bind:group={searchedLanguages} />
                        <Loc text={languageNames[lang]} />
                    </label>
                {/each}
            </fieldset>
            {#if pagefind}{/if}
        </div>

        {#await searchHits}
            <div class="loading">
                <Loc cs="Načítání..." en="Loading..." />
            </div>
        {:then hits}
            {#each hits.slice(0, shownCount) as hit (`${hit.lang}-${hit.result.id}`)}
                {#await hit.result.data() then result}
                    {@const image = result.filters.image?.[0] ?? result.meta.image}
                    <Box>
                        <div class="result">
                            {#if image}
                                <img
                                    src={image}
                                    alt={result.meta.image_alt ?? ""}
                                    class="result-image"
                                    loading="lazy" />
                            {/if}
                            <a href={resultHref(hit, result)} class="result-link">
                                {#if !hit.lang}
                                    <Capsule>{result.meta.codes.split(CODE_SEPARATOR)[0]}</Capsule>
                                {/if}
                                <strong>{stripTitle(result.meta.title)}</strong>
                                {#if !hit.lang}
                                    <span class="result-kind">
                                        <Loc cs="Sbírka" en="Collection" />
                                    </span>
                                {:else if searchedLanguages.length > 1}
                                    <span class="result-lang">{hit.lang}</span>
                                {/if}
                            </a>
                            {@html result.excerpt}
                        </div>
                    </Box>
                {/await}
            {/each}
            {#if hits.length > shownCount}
                <button class="more" onclick={() => (shownCount += RESULTS_PER_PAGE)}>
                    <Loc cs="Zobrazit další" en="Show more" />
                </button>
            {/if}
        {/await}
        <div class="index-stats">
            {#if searchWebsite}
                <div>
                    <Loc cs="Prohledávaných stránek:" en="Pages searched:" />
                    {searchedPageCount}
                    {#if builtAt}
                        {@render indexUpdated(builtAt)}
                    {/if}
                </div>
            {/if}
            {#if searchCollection}
                <div>
                    {#if assetIndex}
                        <Loc
                            cs="Prohledávaných předmětů ve sbírce:"
                            en="Collection items searched:" />
                        {assetIndex.assetCount}
                        {@render indexUpdated(assetIndex.builtAt)}
                    {:else}
                        <Loc
                            cs="Vyhledávání ve sbírce je momentálně nedostupné."
                            en="Searching the collection is currently unavailable." />
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .search-input {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
    }
    .search-info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 4px 16px;
        margin-bottom: 20px;
        font-size: 0.9em;
    }
    .options {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        border: none;
        margin: 0;
        padding: 0;
    }
    .options legend {
        float: left;
        padding: 0;
        margin-top: 2px;
    }
    .options label {
        align-items: center;
        gap: 4px;
        cursor: pointer;
    }
    .index-stats {
        margin-top: 2em;
        opacity: 0.7;
    }
    .loading {
        margin-top: 20px;
        font-style: italic;
    }

    input[type="text"] {
        width: 100%;
    }
    input[type="text"]:focus {
        outline: none;
    }

    .result {
        display: flow-root;
    }
    .result-image {
        float: right;
        width: 96px;
        height: 96px;
        object-fit: cover;
        margin: 0 0 8px 12px;
    }

    .result-link {
        display: block;
        text-decoration: none;
        font-size: 1.2em;
        margin-bottom: 8px;
    }
    .result-link:hover strong {
        text-decoration: underline;
    }
    .result-kind {
        /* Like Capsule, which also keeps the underline of the link off it */
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 3px;
        font-size: 0.7em;
        font-weight: normal;
        padding: 1px 6px;
        border: 1px solid currentColor;
        border-radius: 4px;
    }
    .result-lang {
        font-size: 0.7em;
        font-weight: normal;
        text-transform: uppercase;
        opacity: 0.6;
        vertical-align: middle;
    }
    .more {
        display: block;
        margin: 20px auto;
    }
</style>
