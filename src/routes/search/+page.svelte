<script lang="ts">
    import { page } from "$app/state";
    import type { Pagefind, PagefindIndexOptions } from "vite-plugin-pagefind/types";
    import { onMount } from "svelte";
    import { Temporal } from "@js-temporal/polyfill";
    import Loc from "$src/lib/components/Loc.svelte";
    import Box from "$src/lib/components/Box.svelte";
    import IconSearch from "@lucide/svelte/icons/search";
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import { getLocale, locales } from "$src/lib/paraglide/runtime";
    import { formatPostDate, SITE_TIME_ZONE } from "$src/lib/datetime";

    type Language = (typeof locales)[number];
    // createInstance exists since Pagefind 1.5, but vite-plugin-pagefind's types don't include it yet
    type PagefindModule = Pagefind & {
        createInstance: (options?: PagefindIndexOptions) => Pagefind;
    };

    const languageNames: Record<Language, { cs: string; en: string }> = {
        cs: { cs: "češtině", en: "Czech" },
        en: { cs: "angličtině", en: "English" },
    };

    // The user's language comes first
    const languages = [getLocale(), ...locales.filter((l) => l !== getLocale())];

    let pagefind: PagefindModule | undefined = $state();
    const instances: Partial<Record<Language, Pagefind>> = {};

    let pageCounts: Partial<Record<Language, number>> = $state({});
    let builtAt: Temporal.ZonedDateTime | null = $state(null);

    onMount(async () => {
        pagefind = await import(
            // WORKAROUND: we need this templating trick to stop vite from statically analyzing this import
            /* @vite-ignore */
            `${"/"}pagefind/pagefind.js`
        );
        searchValue = page.url.searchParams.get("q") || "";

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

    async function fetchSearchResults(val: string, searchedLanguages: Language[]) {
        if (!pagefind) return [];

        const searches = await Promise.all(
            searchedLanguages.map(async (lang) => {
                const search = await getInstance(pagefind!, lang).debouncedSearch(val);
                return (search?.results ?? []).map((result) => ({ result, lang }));
            }),
        );
        const results = searches.flat().sort((a, b) => b.result.score - a.result.score);
        return await Promise.all(
            results.map(async ({ result, lang }) => ({ ...(await result.data()), lang })),
        );
    }

    function stripTitle(title: string) {
        return title.replace(/ - (Herní archiv|Czechoslovak Game Archive)$/, "");
    }

    let searchValue = $state("");
    let searchedLanguages: Language[] = $state([getLocale()]);
    let searchResults = $derived(fetchSearchResults(searchValue, searchedLanguages));
    let searchedPageCount = $derived(
        searchedLanguages.reduce((sum, lang) => sum + (pageCounts[lang] ?? 0), 0),
    );
</script>

<Meta title={{ cs: "Vyhledávání", en: "Search" }} />

<div class="thin">
    <h2><Loc cs="Vyhledávání" en="Search" /></h2>

    <div>
        <div class="search-input">
            <IconSearch />
            <input type="text" autofocus bind:value={searchValue} />
        </div>

        <div class="search-info">
            <fieldset class="languages">
                <legend><Loc cs="Hledat v:" en="Search in:" /></legend>
                {#each languages as lang (lang)}
                    <label>
                        <input type="checkbox" value={lang} bind:group={searchedLanguages} />
                        <Loc text={languageNames[lang]} />
                    </label>
                {/each}
            </fieldset>
            {#if pagefind}
                <div class="index-stats">
                    <Loc cs="Prohledávaných stránek:" en="Pages searched:" />
                    {searchedPageCount}
                    {#if builtAt}
                        · <Loc cs="Index aktualizován" en="Index updated" />
                        {formatPostDate(builtAt.toPlainDate())}
                        {builtAt.toPlainTime().toString({ smallestUnit: "minute" })}
                    {/if}
                </div>
            {/if}
        </div>

        {#await searchResults}
            <div class="loading">
                <Loc cs="Načítání..." en="Loading..." />
            </div>
        {:then results}
            {#each results as result (result.url)}
                <Box>
                    <div class="result">
                        {#if result.meta.image}
                            <img
                                src={result.meta.image}
                                alt={result.meta.image_alt ?? ""}
                                class="result-image"
                                loading="lazy"
                            />
                        {/if}
                        <a href={result.url.replace(".html", "")} class="result-link">
                            <strong>{stripTitle(result.meta.title)}</strong>
                            {#if searchedLanguages.length > 1}
                                <span class="result-lang">{result.lang}</span>
                            {/if}
                        </a>
                        {@html result.excerpt}
                    </div>
                </Box>
            {/each}
        {/await}
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
    .languages {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        border: none;
        margin: 0;
        padding: 0;
    }
    .languages legend {
        float: left;
        padding: 0;
        margin-top: 2px;
    }
    .languages label {
        align-items: center;
        gap: 4px;
        cursor: pointer;
    }
    .index-stats {
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
    .result-link:hover {
        text-decoration: underline;
    }
    .result-lang {
        font-size: 0.7em;
        font-weight: normal;
        text-transform: uppercase;
        opacity: 0.6;
        vertical-align: middle;
    }
</style>
