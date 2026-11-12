<script lang="ts">
    import type { BulanciAuthor } from "$src/data/bulanci";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import type { LocalizedString } from "$src/types";
    import IconArrowUp from "@lucide/svelte/icons/arrow-up";
    import IconArrowDown from "@lucide/svelte/icons/arrow-down";
    import BulanciWebLink from "../BulanciWebLink.svelte";
    import AuthorMosaic from "./AuthorMosaic.svelte";
    import {
        authorHref,
        formatYears,
        isDescendingFirst,
        REACH_EXPLANATION,
        type AuthorSort,
        type AuthorSortKey,
    } from "./authorList";

    interface Props {
        authors: BulanciAuthor[];
        sort: AuthorSort;
        onsort: (sort: AuthorSort) => void;
    }

    let { authors, sort, onsort }: Props = $props();

    function toggleSort(key: AuthorSortKey) {
        onsort({ key, desc: sort.key === key ? !sort.desc : isDescendingFirst(key) });
    }
</script>

{#snippet sortableHeader(key: AuthorSortKey, label: LocalizedString, title?: LocalizedString)}
    <th
        aria-sort={sort.key === key ? (sort.desc ? "descending" : "ascending") : undefined}
        title={title && loc(title)}>
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
                <th><Loc cs="Mapy" en="Maps" /></th>
                {@render sortableHeader("name", { cs: "Autor", en: "Author" })}
                {@render sortableHeader("maps", { cs: "Počet map", en: "Map count" })}
                {@render sortableHeader("year", { cs: "Roky", en: "Years" })}
                {@render sortableHeader("reach", { cs: "Dosah", en: "Reach" }, REACH_EXPLANATION)}
                <th><Loc cs="Weby" en="Websites" /></th>
                <th><Loc cs="Klany" en="Clans" /></th>
            </tr>
        </thead>
        <tbody>
            {#each authors as author (author.slug)}
                <tr>
                    <td class="thumb">
                        <a href={authorHref(author.name)} tabindex="-1" aria-hidden="true">
                            <AuthorMosaic
                                maps={author.topMaps}
                                isClan={author.isClan}
                                width={160} />
                        </a>
                    </td>
                    <td class="name">
                        <a href={authorHref(author.name)}>{author.name}</a>
                        {#if author.aliases.length}
                            <span class="aliases">{author.aliases.join(", ")}</span>
                        {/if}
                    </td>
                    <td class="number">{author.mapCount}</td>
                    <td class="years">{formatYears(author.mapYears)}</td>
                    <td class="number">{author.reach}</td>
                    <td class="webs">
                        {#each author.webs as web (web.domain)}
                            <span><BulanciWebLink {...web} showName={false} /></span>
                        {/each}
                    </td>
                    <td>
                        {#each author.clans as clan, i (clan)}
                            {#if i > 0},{" "}{/if}<a href={authorHref(clan)}>{clan}</a>
                        {/each}
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

    th[title] {
        cursor: help;
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
        width: 120px;
        min-width: 100px;
    }

    .thumb a {
        display: block;
    }

    .name a {
        font-weight: 600;
    }

    .aliases {
        display: block;
        color: var(--color-text-muted);
        font-size: 0.85em;
    }

    .number {
        text-align: right;
    }

    .years {
        white-space: nowrap;
    }

    .webs span {
        display: block;
        font-size: 0.9em;
    }
</style>
