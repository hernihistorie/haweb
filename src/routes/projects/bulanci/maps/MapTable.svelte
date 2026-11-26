<script lang="ts">
    import type { BulanciMap, BulanciMapImage } from "$src/data/bulanci/maps.server";
    import InfoTip from "#lib/components/InfoTip.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import type { LocalizedString } from "$src/types";
    import IconArrowUp from "@lucide/svelte/icons/arrow-up";
    import IconArrowDown from "@lucide/svelte/icons/arrow-down";
    import NoValue from "../NoValue.svelte";
    import MapImage from "./MapImage.svelte";
    import MapMonitor from "./MapMonitor.svelte";
    import { isDescendingFirst, mapHref, type Sort, type SortKey } from "./mapList";
    import { authorHref } from "../authors/authorList";

    interface Props {
        maps: BulanciMap[];
        sort: Sort;
        onsort: (sort: Sort) => void;
    }

    let { maps, sort, onsort }: Props = $props();

    function toggleSort(key: SortKey) {
        onsort({ key, desc: sort.key === key ? !sort.desc : isDescendingFirst(key) });
    }
</script>

{#snippet arrow(key: SortKey)}
    {#if sort.key === key}
        {#if sort.desc}<IconArrowDown size="1em" />{:else}<IconArrowUp size="1em" />{/if}
    {/if}
{/snippet}

{#snippet sortableHeader(key: SortKey, label: LocalizedString, hint?: LocalizedString)}
    <th aria-sort={sort.key === key ? (sort.desc ? "descending" : "ascending") : undefined}>
        <!--
            A hint goes between the label and the arrow. It's a button of its own, so the arrow
            becomes another one that sorts too, hidden from assistive technology (see aria-sort).
        -->
        <button class="link sort" onclick={() => toggleSort(key)}>
            {loc(label)}
            {#if !hint}{@render arrow(key)}{/if}
        </button>
        {#if hint}
            <InfoTip text={hint} />
            {#if sort.key === key}
                <button
                    class="link sort"
                    tabindex="-1"
                    aria-hidden="true"
                    onclick={() => toggleSort(key)}>{@render arrow(key)}</button>
            {/if}
        {/if}
    </th>
{/snippet}

{#snippet thumb(map: BulanciMap, image: BulanciMapImage | null)}
    <td class="thumb">
        {#if image}
            <a href={mapHref(map)} tabindex="-1" aria-hidden="true">
                <MapMonitor>
                    <MapImage {image} nsfw={map.nsfw} revealable={false} sizes="160px" />
                </MapMonitor>
            </a>
        {:else}
            <NoValue />
        {/if}
    </td>
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
                {@render sortableHeader(
                    "places",
                    { cs: "Výskyty", en: "Found in" },
                    {
                        cs: "Počet webů a balíčků šířených na cloudových úložištích, ve kterých se mapa nacházela.",
                        en: "Number of websites, and of packages shared on cloud storage services, that the map was found in.",
                    },
                )}
            </tr>
        </thead>
        <tbody>
            {#each maps as map (map.filename)}
                <tr>
                    {@render thumb(map, map.screenshot)}
                    {@render thumb(map, map.loadingScreen)}
                    <td class="name"><a href={mapHref(map)}>{map.name}</a></td>
                    <td>
                        {#each map.authors as author, i (author)}
                            {#if i > 0},{" "}{/if}<a href={authorHref(author)}>{author}</a>
                        {:else}
                            <span class="unknown"><Loc cs="neznámý" en="unknown" /></span>
                        {/each}
                    </td>
                    <td>{#if map.year}{map.year}{:else}<NoValue />{/if}</td>
                    <td class="music">{#if map.music}{map.music}{:else}<NoValue />{/if}</td>
                    <td class="places" title={map.placesOfOccurrence.join("\n")}>
                        {#if map.placesOfOccurrence.length}{map.placesOfOccurrence.length}{:else}<NoValue
                            />{/if}
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
        text-align: center;
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
