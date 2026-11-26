<script lang="ts">
    import type { BulanciAuthor } from "$src/data/bulanci/authors.server";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import type { LocalizedString } from "$src/types";
    import IconArrowUp from "@lucide/svelte/icons/arrow-up";
    import IconArrowDown from "@lucide/svelte/icons/arrow-down";
    import BulanciWebLink from "../BulanciWebLink.svelte";
    import NoValue from "../NoValue.svelte";
    import {
        authorHref,
        formatInlineHtml,
        isDescendingFirst,
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

{#snippet sortableHeader(key: AuthorSortKey, label: LocalizedString, className = "")}
    <th
        class={className}
        aria-sort={sort.key === key ? (sort.desc ? "descending" : "ascending") : undefined}>
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
                {@render sortableHeader("name", { cs: "Autor", en: "Author" })}
                {@render sortableHeader("maps", { cs: "Mapy", en: "Maps" }, "number")}
                <th><Loc cs="Weby" en="Websites" /></th>
                <th><Loc cs="Klany" en="Clans" /></th>
                <th><Loc cs="Popis" en="Description" /></th>
            </tr>
        </thead>
        <tbody>
            {#each authors as author (author.slug)}
                {@const description = author.description && loc(author.description)}
                <tr>
                    <td class="name">
                        <a href={authorHref(author.name)}>{author.name}</a>
                        {#if author.aliases.length}
                            <span class="aliases">{author.aliases.join(", ")}</span>
                        {/if}
                    </td>
                    <td class="number">
                        {#if author.mapCount}{author.mapCount}{:else}<NoValue />{/if}
                    </td>
                    <td class="webs">
                        {#each author.webs as web (web.domain)}
                            <span><BulanciWebLink {...web} showName={false} /></span>
                        {:else}
                            <NoValue />
                        {/each}
                    </td>
                    <td>
                        {#each author.clans as clan, i (clan)}
                            {#if i > 0},{" "}{/if}<a href={authorHref(clan)}>{clan}</a>
                        {:else}
                            <NoValue />
                        {/each}
                    </td>
                    <td class="description">
                        {#if description}
                            <!-- Cut off after two lines; the whole text is on the author's page -->
                            <span class="clamped" title={description.replace(/<[^>]*>/g, "")}
                                >{@html formatInlineHtml(description)}</span>
                        {:else}
                            <NoValue />
                        {/if}
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
        vertical-align: top;
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

    .name {
        min-width: 8em;
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

    .webs span {
        display: block;
        font-size: 0.9em;
    }

    .description {
        min-width: 16em;
        font-size: 0.9em;
    }

    .clamped {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-clamp: 2;
    }
</style>
