<script lang="ts">
    import type { BulanciMap } from "$src/data/bulanci";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import type { LocalizedString } from "$src/types";
    import IconArrowUp from "@lucide/svelte/icons/arrow-up";
    import IconArrowDown from "@lucide/svelte/icons/arrow-down";
    import MapImage from "./MapImage.svelte";
    import { mapHref, type Sort, type SortKey } from "./mapList";

    interface Props {
        maps: BulanciMap[];
        sort: Sort;
        onsort: (sort: Sort) => void;
    }

    let { maps, sort, onsort }: Props = $props();

    function toggleSort(key: SortKey) {
        onsort({ key, desc: sort.key === key ? !sort.desc : false });
    }
</script>

{#snippet sortableHeader(key: SortKey, label: LocalizedString)}
    <th aria-sort={sort.key === key ? (sort.desc ? "descending" : "ascending") : undefined}>
        <button class="link sort" onclick={() => toggleSort(key)}>
            {loc(label)}
            {#if sort.key === key}
                {#if sort.desc}<IconArrowDown size="1em" />{:else}<IconArrowUp size="1em" />{/if}
            {/if}
        </button>
    </th>
{/snippet}

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th><Loc cs="Náhled" en="Preview" /></th>
                <th><Loc cs="Načítací obrazovka" en="Loading screen" /></th>
                {@render sortableHeader("name", { cs: "Název", en: "Name" })}
                {@render sortableHeader("author", { cs: "Autor", en: "Author" })}
                {@render sortableHeader("year", { cs: "Rok", en: "Year" })}
                <th><Loc cs="Hudba" en="Music" /></th>
                <th><Loc cs="Výskyty" en="Found in" /></th>
            </tr>
        </thead>
        <tbody>
            {#each maps as map (map.filename)}
                <tr>
                    <td class="thumb">
                        <a href={mapHref(map)} tabindex="-1" aria-hidden="true">
                            <MapImage
                                image={map.screenshot}
                                nsfw={map.nsfw}
                                revealable={false}
                                sizes="160px" />
                        </a>
                    </td>
                    <td class="thumb">
                        <a href={mapHref(map)} tabindex="-1" aria-hidden="true">
                            <MapImage
                                image={map.loadingScreen}
                                nsfw={map.nsfw}
                                revealable={false}
                                sizes="160px" />
                        </a>
                    </td>
                    <td class="name"><a href={mapHref(map)}>{map.name}</a></td>
                    <td>
                        {#if map.authors.length}
                            {map.authors.join(", ")}
                        {:else}
                            <span class="unknown"><Loc cs="neznámý" en="unknown" /></span>
                        {/if}
                    </td>
                    <td>{map.year ?? ""}</td>
                    <td class="music">{map.music ?? ""}</td>
                    <td class="places" title={map.placesOfOccurrence.join("\n")}>
                        {map.placesOfOccurrence.length}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .table-wrapper {
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        padding: 0.4em 0.6em;
        text-align: left;
        vertical-align: middle;
        border-bottom: 1px solid var(--color-secondary-transparent);
    }

    th {
        white-space: nowrap;
        border-bottom: 2px solid var(--color-secondary);
    }

    .sort {
        display: inline-flex;
        align-items: center;
        gap: 0.2em;
        font-weight: inherit;
        color: inherit;
    }

    tbody tr:hover {
        background: var(--color-secondary-transparent);
    }

    .thumb {
        width: 160px;
        min-width: 120px;
    }

    .thumb a {
        display: block;
    }

    .name {
        font-weight: 600;
    }

    .music {
        font-size: 0.9em;
    }

    .places {
        text-align: right;
        cursor: help;
    }

    .unknown {
        color: var(--color-text-muted);
    }
</style>
