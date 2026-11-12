<script lang="ts">
    import { page } from "$app/state";
    import { afterNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import { useDebounce } from "runed";
    import type { BulanciAuthor } from "$src/data/bulanci";
    import { bulanciSlug } from "$src/data/bulanciSlug";
    import Loc from "#lib/components/Loc.svelte";
    import Pagination from "#lib/components/Pagination.svelte";
    import { loc } from "$src/lib/loc";
    import IconLayoutGrid from "@lucide/svelte/icons/layout-grid";
    import IconTable from "@lucide/svelte/icons/table";
    import { setUrlParams } from "../listParams";
    import { normalizeForSearch, PAGE_SIZE, type View } from "../maps/mapList";
    import AuthorGallery from "./AuthorGallery.svelte";
    import AuthorTable from "./AuthorTable.svelte";
    import {
        compareAuthors,
        DEFAULT_AUTHOR_SORT,
        formatAuthorSort,
        parseAuthorSort,
        type AuthorSort,
    } from "./authorList";

    interface Props {
        authors: BulanciAuthor[];
        /** Clans, for filtering by membership */
        clans: BulanciAuthor[];
    }

    let { authors, clans }: Props = $props();

    // The page is prerendered without any query, so the URL is only read once
    // mounted, so that hydration matches the prerendered HTML
    let mounted = $state(false);
    onMount(() => (mounted = true));

    const params = $derived(mounted ? page.url.searchParams : new URLSearchParams());

    const view: View = $derived(params.get("view") === "table" ? "table" : "gallery");
    const sort = $derived(parseAuthorSort(params.get("sort")));
    const has = $derived(params.get("has") ?? "");
    const clan = $derived(params.get("clan") ?? "");
    const year = $derived(params.get("year") ?? "");
    const urlPage = $derived(Math.max(1, parseInt(params.get("page") ?? "", 10) || 1));

    // The search is kept locally so that typing isn't disrupted by URL updates.
    // It's synced from the URL when navigating, e.g. with the back button.
    let query = $state("");
    afterNavigate((navigation) => {
        if (navigation.type !== "goto") {
            query = page.url.searchParams.get("q") ?? "";
        }
    });

    /** Sets a filter, going back to the first page */
    function setFilter(changes: Record<string, string | null>, options?: { replace?: boolean }) {
        setUrlParams({ ...changes, page: null }, options);
    }

    const updateQueryParam = useDebounce(
        () => setFilter({ q: query.trim() }, { replace: true }),
        300,
    );

    const searchIndex = $derived(
        new Map(
            authors.map((author) => [
                author,
                normalizeForSearch([author.name, ...author.aliases].join("\n")),
            ]),
        ),
    );

    const hasOptions = [
        { value: "web", label: { cs: "S vlastním webem", en: "With a website" } },
        { value: "bio", label: { cs: "S medailonkem", en: "With a profile" } },
        { value: "maps", label: { cs: "S mapami", en: "With maps" } },
    ];

    const matchesHas = (author: BulanciAuthor, value: string): boolean =>
        value === "web"
            ? author.webs.length > 0
            : value === "bio"
              ? author.description !== null
              : value === "maps"
                ? author.mapCount > 0
                : true;

    const clanOptions = $derived(
        clans.map((clan) => ({
            slug: clan.slug,
            name: clan.name,
            count: authors.filter((author) => author.clans.includes(clan.name)).length,
        })),
    );

    const yearOptions = $derived(
        [...new Set(authors.flatMap((author) => author.mapYears))]
            .sort((a, b) => a - b)
            .map((year) => ({
                year,
                count: authors.filter((author) => author.mapYears.includes(year)).length,
            })),
    );

    const filteredAuthors = $derived.by(() => {
        const terms = normalizeForSearch(query).split(/\s+/).filter(Boolean);
        return authors
            .filter((author) => {
                if (!matchesHas(author, has)) return false;
                if (clan && !author.clans.some((name) => bulanciSlug(name) === clan)) return false;
                if (year && !author.mapYears.includes(parseInt(year, 10))) return false;
                const text = searchIndex.get(author)!;
                return terms.every((term) => text.includes(term));
            })
            .sort((a, b) => compareAuthors(a, b, sort));
    });

    const pageCount = $derived(Math.max(1, Math.ceil(filteredAuthors.length / PAGE_SIZE)));
    // While the search is being typed, the page param is about to be reset
    const currentPage = $derived(
        query.trim() === (params.get("q") ?? "") ? Math.min(urlPage, pageCount) : 1,
    );
    const pageStart = $derived((currentPage - 1) * PAGE_SIZE);
    const pageAuthors = $derived(filteredAuthors.slice(pageStart, pageStart + PAGE_SIZE));

    function setPage(pageNum: number) {
        setUrlParams({ page: pageNum > 1 ? String(pageNum) : null });
    }

    function setSort(newSort: AuthorSort) {
        const value = formatAuthorSort(newSort);
        setFilter({ sort: value === formatAuthorSort(DEFAULT_AUTHOR_SORT) ? null : value });
    }

    function setView(newView: View) {
        setUrlParams({ view: newView === "gallery" ? null : newView });
    }

    const sortOptions: { value: string; label: { cs: string; en: string } }[] = [
        { value: "-reach", label: { cs: "Největší dosah", en: "Widest reach" } },
        { value: "reach", label: { cs: "Nejmenší dosah", en: "Narrowest reach" } },
        { value: "-maps", label: { cs: "Nejvíce map", en: "Most maps" } },
        { value: "maps", label: { cs: "Nejméně map", en: "Fewest maps" } },
        { value: "name", label: { cs: "Jméno A–Z", en: "Name A–Z" } },
        { value: "-name", label: { cs: "Jméno Z–A", en: "Name Z–A" } },
        { value: "year", label: { cs: "Nejdříve aktivní", en: "Earliest active" } },
        { value: "-year", label: { cs: "Nejpozději aktivní", en: "Latest active" } },
    ];
</script>

<section id="authors" class="author-list">
    <div class="toolbar">
        <input
            type="search"
            class="search"
            placeholder={loc({ cs: "Hledat jméno nebo přezdívku…", en: "Search names…" })}
            aria-label={loc({ cs: "Hledat autory", en: "Search authors" })}
            bind:value={query}
            oninput={updateQueryParam} />

        <select
            aria-label={loc({ cs: "Typ autora", en: "Kind of author" })}
            value={has}
            onchange={(e) => setFilter({ has: e.currentTarget.value })}>
            <option value="">{loc({ cs: "Všichni autoři", en: "All authors" })}</option>
            {#each hasOptions as option (option.value)}
                <option value={option.value}>
                    {loc(option.label)}
                    <span class="count"
                        >({authors.filter((author) => matchesHas(author, option.value))
                            .length})</span>
                </option>
            {/each}
        </select>

        <select
            aria-label={loc({ cs: "Klan", en: "Clan" })}
            value={clan}
            onchange={(e) => setFilter({ clan: e.currentTarget.value })}>
            <option value="">{loc({ cs: "Všechny klany", en: "All clans" })}</option>
            {#each clanOptions as option (option.slug)}
                <option value={option.slug} disabled={option.count === 0}>
                    {option.name} <span class="count">({option.count})</span>
                </option>
            {/each}
        </select>

        <select
            aria-label={loc({ cs: "Aktivní v roce", en: "Active in" })}
            value={year}
            onchange={(e) => setFilter({ year: e.currentTarget.value })}>
            <option value="">{loc({ cs: "Všechny roky", en: "All years" })}</option>
            {#each yearOptions as option (option.year)}
                <option value={String(option.year)}>
                    {option.year} <span class="count">({option.count})</span>
                </option>
            {/each}
        </select>

        <select
            aria-label={loc({ cs: "Řazení", en: "Sort by" })}
            value={formatAuthorSort(sort)}
            onchange={(e) => setSort(parseAuthorSort(e.currentTarget.value))}>
            {#each sortOptions as option (option.value)}
                <option value={option.value}>{loc(option.label)}</option>
            {/each}
        </select>

        <div class="view-toggle" role="group" aria-label={loc({ cs: "Zobrazení", en: "View" })}>
            <button
                class:active={view === "gallery"}
                aria-pressed={view === "gallery"}
                title={loc({ cs: "Galerie", en: "Gallery" })}
                onclick={() => setView("gallery")}>
                <IconLayoutGrid size="1em" />
                <span><Loc cs="Galerie" en="Gallery" /></span>
            </button>
            <button
                class:active={view === "table"}
                aria-pressed={view === "table"}
                title={loc({ cs: "Tabulka", en: "Table" })}
                onclick={() => setView("table")}>
                <IconTable size="1em" />
                <span><Loc cs="Tabulka" en="Table" /></span>
            </button>
        </div>
    </div>

    <div class="count-pagination">
        <p class="summary" aria-live="polite">
            {#if filteredAuthors.length === 0}
                <Loc
                    cs="Žádní autoři neodpovídají zadaným filtrům."
                    en="No authors match the filters." />
            {:else}
                <Loc cs="Autoři" en="Authors" />
                {pageStart + 1}–{pageStart + pageAuthors.length}
                <Loc cs="z" en="of" />
                {filteredAuthors.length}
            {/if}
        </p>
        <Pagination bind:page={() => currentPage, setPage} {pageCount} scrollTarget="#authors" />
    </div>

    {#if view === "gallery"}
        <AuthorGallery authors={pageAuthors} />
    {:else}
        <AuthorTable authors={pageAuthors} {sort} onsort={setSort} />
    {/if}

    <Pagination bind:page={() => currentPage, setPage} {pageCount} scrollTarget="#authors" />
</section>

<style>
    .author-list {
        scroll-margin-top: 1em;
    }

    .count-pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
    }

    .toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5em;
        margin: 1.5em 0 0.5em;
    }

    .toolbar input,
    .toolbar select,
    .toolbar button {
        margin: 0;
        font-size: 1rem;
        padding: 0.4em 0.6em;
    }

    .search {
        flex: 1 1 16em;
        min-width: 0;
    }

    .count {
        color: var(--color-text-muted);
        font-weight: normal;
    }

    .view-toggle {
        display: flex;
        margin-left: auto;
    }

    .view-toggle button {
        display: inline-flex;
        align-items: center;
        gap: 0.35em;
    }

    .view-toggle button + button {
        border-left: none;
    }

    .summary {
        color: var(--color-text-muted);
        margin: 0 0 0.75em;
    }

    @media (max-width: 600px) {
        .toolbar select {
            flex: 1 1 auto;
        }

        .view-toggle {
            margin-left: 0;
        }
    }
</style>
