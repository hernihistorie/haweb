<script lang="ts">
    import { page } from "$app/state";
    import { afterNavigate, goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { useDebounce } from "runed";
    import type { BulanciMap } from "$src/data/bulanci";
    import Loc from "#lib/components/Loc.svelte";
    import Pagination from "#lib/components/Pagination.svelte";
    import { loc } from "$src/lib/loc";
    import IconLayoutGrid from "@lucide/svelte/icons/layout-grid";
    import IconTable from "@lucide/svelte/icons/table";
    import MapGallery from "./MapGallery.svelte";
    import MapTable from "./MapTable.svelte";
    import {
        compareMaps,
        compareStrings,
        DEFAULT_SORT,
        formatSort,
        normalizeForSearch,
        PAGE_SIZE,
        parseSort,
        UNKNOWN,
        type Sort,
        type View,
    } from "./mapList";

    let { maps }: { maps: BulanciMap[] } = $props();

    // The page is prerendered without any query, so the URL is only read once
    // mounted, so that hydration matches the prerendered HTML
    let mounted = $state(false);
    onMount(() => (mounted = true));

    const params = $derived(mounted ? page.url.searchParams : new URLSearchParams());

    const view: View = $derived(params.get("view") === "table" ? "table" : "gallery");
    const sort = $derived(parseSort(params.get("sort")));
    const author = $derived(params.get("author") ?? "");
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

    function setParams(changes: Record<string, string | null>, { replace = false } = {}) {
        const url = new URL(page.url.href);
        for (const [key, value] of Object.entries(changes)) {
            if (value) {
                url.searchParams.set(key, value);
            } else {
                url.searchParams.delete(key);
            }
        }
        goto(url, { replace, reset: false, state: page.state });
    }

    /** Sets a filter, going back to the first page */
    function setFilter(changes: Record<string, string | null>, options?: { replace?: boolean }) {
        setParams({ ...changes, page: null }, options);
    }

    const updateQueryParam = useDebounce(
        () => setFilter({ q: query.trim() }, { replace: true }),
        300,
    );

    const searchIndex = $derived(
        new Map(
            maps.map((map) => [
                map,
                normalizeForSearch(
                    [map.name, map.filename, ...map.authors, map.music ?? ""].join("\n"),
                ),
            ]),
        ),
    );

    const authorOptions = $derived(
        [...new Set(maps.flatMap((map) => map.authors))]
            .map((name) => ({
                name,
                count: maps.filter((map) => map.authors.includes(name)).length,
            }))
            .sort((a, b) => compareStrings(a.name, b.name)),
    );
    const unknownAuthorCount = $derived(maps.filter((map) => map.authors.length === 0).length);

    const yearOptions = $derived(
        [...new Set(maps.map((map) => map.year).filter((year) => year !== null))]
            .sort((a, b) => a - b)
            .map((year) => ({ year, count: maps.filter((map) => map.year === year).length })),
    );
    const unknownYearCount = $derived(maps.filter((map) => map.year === null).length);

    const filteredMaps = $derived.by(() => {
        const terms = normalizeForSearch(query).split(/\s+/).filter(Boolean);
        return maps
            .filter((map) => {
                if (
                    author === UNKNOWN
                        ? map.authors.length > 0
                        : author && !map.authors.includes(author)
                ) {
                    return false;
                }
                if (
                    year === UNKNOWN ? map.year !== null : year && map.year !== parseInt(year, 10)
                ) {
                    return false;
                }
                const text = searchIndex.get(map)!;
                return terms.every((term) => text.includes(term));
            })
            .sort((a, b) => compareMaps(a, b, sort));
    });

    const pageSize = $derived(PAGE_SIZE[view]);
    const pageCount = $derived(Math.max(1, Math.ceil(filteredMaps.length / pageSize)));
    // While the search is being typed, the page param is about to be reset
    const currentPage = $derived(
        query.trim() === (params.get("q") ?? "") ? Math.min(urlPage, pageCount) : 1,
    );
    const pageStart = $derived((currentPage - 1) * pageSize);
    const pageMaps = $derived(filteredMaps.slice(pageStart, pageStart + pageSize));

    function setPage(pageNum: number) {
        setParams({ page: pageNum > 1 ? String(pageNum) : null });
    }

    function setSort(newSort: Sort) {
        const value = formatSort(newSort);
        setFilter({ sort: value === formatSort(DEFAULT_SORT) ? null : value });
    }

    function setView(newView: View) {
        // Keep the first visible map on screen when page sizes differ
        const newPage = Math.floor(pageStart / PAGE_SIZE[newView]) + 1;
        setParams({
            view: newView === "gallery" ? null : newView,
            page: newPage > 1 ? String(newPage) : null,
        });
    }

    const sortOptions: { value: string; label: { cs: string; en: string } }[] = [
        { value: "name", label: { cs: "Název A–Z", en: "Name A–Z" } },
        { value: "-name", label: { cs: "Název Z–A", en: "Name Z–A" } },
        { value: "year", label: { cs: "Nejstarší", en: "Oldest" } },
        { value: "-year", label: { cs: "Nejnovější", en: "Newest" } },
        { value: "author", label: { cs: "Autor A–Z", en: "Author A–Z" } },
        { value: "-author", label: { cs: "Autor Z–A", en: "Author Z–A" } },
    ];
</script>

<section id="maps" class="map-list">
    <div class="toolbar">
        <input
            type="search"
            class="search"
            placeholder={loc({
                cs: "Hledat název, autora, hudbu…",
                en: "Search name, author, music…",
            })}
            aria-label={loc({ cs: "Hledat mapy", en: "Search maps" })}
            bind:value={query}
            oninput={updateQueryParam}
        />

        <select
            aria-label={loc({ cs: "Autor", en: "Author" })}
            value={author}
            onchange={(e) => setFilter({ author: e.currentTarget.value })}
        >
            <option value="">{loc({ cs: "Všichni autoři", en: "All authors" })}</option>
            <option value={UNKNOWN}>
                {loc({ cs: "Neznámý autor", en: "Unknown author" })} ({unknownAuthorCount})
            </option>
            {#each authorOptions as option (option.name)}
                <option value={option.name}>{option.name} ({option.count})</option>
            {/each}
        </select>

        <select
            aria-label={loc({ cs: "Rok", en: "Year" })}
            value={year}
            onchange={(e) => setFilter({ year: e.currentTarget.value })}
        >
            <option value="">{loc({ cs: "Všechny roky", en: "All years" })}</option>
            {#each yearOptions as option (option.year)}
                <option value={String(option.year)}>{option.year} ({option.count})</option>
            {/each}
            <option value={UNKNOWN}>
                {loc({ cs: "Neznámý rok", en: "Unknown year" })} ({unknownYearCount})
            </option>
        </select>

        <select
            aria-label={loc({ cs: "Řazení", en: "Sort by" })}
            value={formatSort(sort)}
            onchange={(e) => setSort(parseSort(e.currentTarget.value))}
        >
            {#each sortOptions as option (option.value)}
                <option value={option.value}>{loc(option.label)}</option>
            {/each}
        </select>

        <div class="view-toggle" role="group" aria-label={loc({ cs: "Zobrazení", en: "View" })}>
            <button
                class:active={view === "gallery"}
                aria-pressed={view === "gallery"}
                title={loc({ cs: "Galerie", en: "Gallery" })}
                onclick={() => setView("gallery")}
            >
                <IconLayoutGrid size="1em" />
                <span><Loc cs="Galerie" en="Gallery" /></span>
            </button>
            <button
                class:active={view === "table"}
                aria-pressed={view === "table"}
                title={loc({ cs: "Tabulka", en: "Table" })}
                onclick={() => setView("table")}
            >
                <IconTable size="1em" />
                <span><Loc cs="Tabulka" en="Table" /></span>
            </button>
        </div>
    </div>

    <div class="count-pagination">
        <p class="summary" aria-live="polite">
            {#if filteredMaps.length === 0}
                <Loc
                    cs="Žádné mapy neodpovídají zadaným filtrům."
                    en="No maps match the filters."
                />
            {:else}
                <Loc cs="Mapy" en="Maps" />
                {pageStart + 1}–{pageStart + pageMaps.length}
                <Loc cs="z" en="of" />
                {filteredMaps.length}
            {/if}
        </p>
        <Pagination bind:page={() => currentPage, setPage} {pageCount} scrollTarget="#maps" />
    </div>

    {#if view === "gallery"}
        <MapGallery maps={pageMaps} />
    {:else}
        <MapTable maps={pageMaps} {sort} onsort={setSort} />
    {/if}

    <Pagination bind:page={() => currentPage, setPage} {pageCount} scrollTarget="#maps" />
</section>

<style>
    .map-list {
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

    select {
        border: 2px solid var(--color-primary);
        background: var(--color-bg);
        color: inherit;
        font-family: inherit;
        max-width: 100%;
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
