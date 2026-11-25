<script lang="ts">
    import { page } from "$app/state";
    import { afterNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import { useDebounce } from "runed";
    import Loc from "#lib/components/Loc.svelte";
    import { czechPlural, englishPlural, loc } from "$src/lib/loc";
    import { setUrlParams } from "../listParams";
    import { compareStrings, normalizeForSearch } from "../maps/mapList";
    import type { BulanciWebGraph } from "$src/data/bulanci/webGraph.server";
    import IconChartGantt from "@lucide/svelte/icons/chart-gantt";
    import IconTable from "@lucide/svelte/icons/table";
    import IconWaypoints from "@lucide/svelte/icons/waypoints";
    import WebGraph from "./WebGraph.svelte";
    import WebTable from "./WebTable.svelte";
    import {
        compareWebs,
        DEFAULT_WEB_SORT,
        formatWebSort,
        parseWebSort,
        UNKNOWN_HOSTING,
        WEB_VIEWS,
        type BulanciWebListItem,
        type WebSort,
        type WebView,
    } from "./webList";

    interface Props {
        webs: BulanciWebListItem[];
        graph: BulanciWebGraph;
    }

    let { webs, graph }: Props = $props();

    // The page is prerendered without any query, so the URL is only read once
    // mounted, so that hydration matches the prerendered HTML
    let mounted = $state(false);
    onMount(() => (mounted = true));

    const params = $derived(mounted ? page.url.searchParams : new URLSearchParams());

    const view: WebView = $derived(
        WEB_VIEWS.find((view) => view === params.get("view")) ?? WEB_VIEWS[0],
    );
    const sort = $derived(parseWebSort(params.get("sort")));
    const hosting = $derived(params.get("hosting") ?? "");

    // The search is kept locally so that typing isn't disrupted by URL updates.
    // It's synced from the URL when navigating, e.g. with the back button.
    let query = $state("");
    afterNavigate((navigation) => {
        if (navigation.type !== "goto") {
            query = page.url.searchParams.get("q") ?? "";
        }
    });

    const updateQueryParam = useDebounce(
        () => setUrlParams({ q: query.trim() }, { replace: true }),
        300,
    );

    /** Both languages of the description, so that either finds the website */
    const searchIndex = $derived(
        new Map(
            webs.map((web) => [
                web,
                normalizeForSearch(
                    [
                        web.shownName ?? "",
                        web.domain,
                        ...web.authors,
                        web.description.cs,
                        web.description.en,
                    ]
                        .join("\n")
                        .replace(/<[^>]*>/g, ""),
                ),
            ]),
        ),
    );

    const hostingOptions = $derived.by(() => {
        const options = new Map<string, { key: string; name: string; count: number }>();
        for (const service of webs.flatMap((web) => web.services)) {
            const option = options.get(service.key) ?? { ...service, count: 0 };
            option.count++;
            options.set(service.key, option);
        }
        return [...options.values()].sort(
            (a, b) => b.count - a.count || compareStrings(a.name, b.name),
        );
    });
    const unknownHostingCount = $derived(webs.filter((web) => !web.services.length).length);

    const filteredWebs = $derived.by(() => {
        const terms = normalizeForSearch(query).split(/\s+/).filter(Boolean);
        return webs
            .filter((web) => {
                if (
                    hosting === UNKNOWN_HOSTING
                        ? web.services.length > 0
                        : hosting && !web.services.some((service) => service.key === hosting)
                ) {
                    return false;
                }
                const text = searchIndex.get(web)!;
                return terms.every((term) => text.includes(term));
            })
            .sort((a, b) => compareWebs(a, b, sort));
    });

    function setSort(newSort: WebSort) {
        const value = formatWebSort(newSort);
        setUrlParams({ sort: value === formatWebSort(DEFAULT_WEB_SORT) ? null : value });
    }

    /** In the graphs, websites that don't match the filters are only dimmed */
    const matching = $derived(
        filteredWebs.length < webs.length ? new Set(filteredWebs.map((web) => web.id)) : null,
    );

    function setView(newView: WebView) {
        setUrlParams({ view: newView === WEB_VIEWS[0] ? null : newView });
    }

    const viewOptions: {
        value: WebView;
        label: { cs: string; en: string };
        Icon: typeof IconTable;
    }[] = [
        { value: "network", label: { cs: "Síť", en: "Network" }, Icon: IconWaypoints },
        { value: "timeline", label: { cs: "Časová osa", en: "Timeline" }, Icon: IconChartGantt },
        { value: "table", label: { cs: "Tabulka", en: "Table" }, Icon: IconTable },
    ];

    const sortOptions: { value: string; label: { cs: string; en: string } }[] = [
        { value: "year", label: { cs: "Nejstarší", en: "Oldest" } },
        { value: "-year", label: { cs: "Nejnovější", en: "Newest" } },
        { value: "name", label: { cs: "Název A–Z", en: "Name A–Z" } },
        { value: "-name", label: { cs: "Název Z–A", en: "Name Z–A" } },
        { value: "-maps", label: { cs: "Nejvíce map", en: "Most maps" } },
        { value: "maps", label: { cs: "Nejméně map", en: "Fewest maps" } },
    ];

    const countLabel = $derived({
        cs: `${filteredWebs.length} ${czechPlural(filteredWebs.length, "web", "weby", "webů")}`,
        en: `${filteredWebs.length} ${englishPlural(filteredWebs.length, "website", "websites")}`,
    });
</script>

<section id="webs" class="web-list">
    <div class="toolbar">
        <input
            type="search"
            class="search"
            placeholder={loc({
                cs: "Hledat název, adresu, autora, popis…",
                en: "Search name, address, author, description…",
            })}
            aria-label={loc({ cs: "Hledat weby", en: "Search websites" })}
            bind:value={query}
            oninput={updateQueryParam} />

        <select
            aria-label={loc({ cs: "Hosting", en: "Hosting" })}
            value={hosting}
            onchange={(e) => setUrlParams({ hosting: e.currentTarget.value })}>
            <option value="">{loc({ cs: "Všechny hostingy", en: "All hosting" })}</option>
            {#each hostingOptions as option (option.key)}
                <option value={option.key}>
                    {option.name} <span class="count">({option.count})</span>
                </option>
            {/each}
            {#if unknownHostingCount}
                <option value={UNKNOWN_HOSTING}>
                    {loc({ cs: "Neznámý / vlastní", en: "Unknown / own" })}
                    <span class="count">({unknownHostingCount})</span>
                </option>
            {/if}
        </select>

        {#if view === "table"}
            <select
                aria-label={loc({ cs: "Řazení", en: "Sort by" })}
                value={formatWebSort(sort)}
                onchange={(e) => setSort(parseWebSort(e.currentTarget.value))}>
                {#each sortOptions as option (option.value)}
                    <option value={option.value}>{loc(option.label)}</option>
                {/each}
            </select>
        {/if}

        <div class="view-toggle" role="group" aria-label={loc({ cs: "Zobrazení", en: "View" })}>
            {#each viewOptions as { value, label, Icon } (value)}
                <button
                    class:active={view === value}
                    aria-pressed={view === value}
                    title={loc(label)}
                    onclick={() => setView(value)}>
                    <Icon size="1em" />
                    <span>{loc(label)}</span>
                </button>
            {/each}
        </div>
    </div>

    <p class="summary" aria-live="polite">
        {#if filteredWebs.length === 0}
            <Loc
                cs="Žádné weby neodpovídají zadaným filtrům."
                en="No websites match the filters." />
        {:else if filteredWebs.length < webs.length}
            {loc(countLabel)}
            <Loc cs="z" en="of" />
            {webs.length}
        {:else}
            {loc(countLabel)}
        {/if}
    </p>

    {#if view !== "table"}
        <WebGraph {webs} {graph} {view} {matching} />
    {:else if filteredWebs.length}
        <WebTable webs={filteredWebs} {sort} onsort={setSort} />
    {/if}
</section>

<style>
    .web-list {
        scroll-margin-top: 1em;
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
