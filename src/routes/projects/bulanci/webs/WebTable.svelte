<script lang="ts">
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import type { LocalizedString } from "$src/types";
    import IconArrowDown from "@lucide/svelte/icons/arrow-down";
    import IconArrowUp from "@lucide/svelte/icons/arrow-up";
    import IconUser from "@lucide/svelte/icons/user";
    import IconUsers from "@lucide/svelte/icons/users";
    import { authorHref, formatInlineHtml, mapCountLabel } from "../authors/authorList";
    import {
        activeYearsLabel,
        isDescendingFirst,
        webHref,
        webName,
        type BulanciWebListItem,
        type WebSort,
        type WebSortKey,
    } from "./webList";

    interface Props {
        webs: BulanciWebListItem[];
        sort: WebSort;
        onsort: (sort: WebSort) => void;
    }

    let { webs, sort, onsort }: Props = $props();

    function toggleSort(key: WebSortKey) {
        onsort({ key, desc: sort.key === key ? !sort.desc : isDescendingFirst(key) });
    }
</script>

{#snippet sortableHeader(key: WebSortKey, label: LocalizedString, className = "")}
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

<!-- Long domains break after a dot or a slash rather than anywhere -->
{#snippet domainText(domain: string)}
    {#each domain.split(/(?<=[./])/) as part, i (i)}{#if i > 0}<wbr />{/if}{part}{/each}
{/snippet}

<table class="web-table">
    <thead>
        <tr>
            <th><Loc cs="Náhled" en="Preview" /></th>
            {@render sortableHeader("name", { cs: "Web", en: "Website" })}
            <th><Loc cs="Popis" en="Description" /></th>
            {@render sortableHeader("year", { cs: "Aktivní", en: "Active" })}
            <th><Loc cs="Hosting" en="Hosting" /></th>
            {@render sortableHeader("maps", { cs: "Mapy", en: "Maps" }, "number")}
        </tr>
    </thead>
    <tbody>
        {#each webs as web (web.id)}
            <tr>
                <td class="thumb">
                    <a href={webHref(web)} tabindex="-1" aria-hidden="true" class="browser">
                        <span class="title-bar">
                            <span class="title"></span>
                            <span class="window-button"></span>
                            <span class="window-button"></span>
                            <span class="window-button"></span>
                        </span>
                        <span class="address-bar"><span class="address"></span></span>
                        {#if web.screenshot}
                            <img
                                src={web.screenshot.src}
                                srcset={web.screenshot.srcset}
                                sizes="160px"
                                alt=""
                                width="800"
                                height="600"
                                loading="lazy"
                                decoding="async" />
                        {:else}
                            <span class="no-screenshot"></span>
                        {/if}
                    </a>
                </td>
                <td class="site">
                    {#if web.shownName}
                        <a href={webHref(web)} class="name" lang="cs">{web.shownName}</a>
                        <span class="domain">{@render domainText(web.domain)}</span>
                    {:else}
                        <a href={webHref(web)} class="name">{@render domainText(web.domain)}</a>
                    {/if}
                    {#if web.authors.length}
                        <span class="authors">
                            {#if web.authors.length > 1}<IconUsers size="1em" />{:else}<IconUser
                                    size="1em" />{/if}
                            {#each web.authors as author, i (author)}
                                {#if i > 0},{" "}{/if}<a href={authorHref(author)}>{author}</a>
                            {/each}
                        </span>
                    {/if}
                </td>
                <td class="description">{@html formatInlineHtml(loc(web.description))}</td>
                <td class="years">{loc(activeYearsLabel(web))}</td>
                <td class="hosting"
                    >{#if web.services.length}{web.services
                            .map((service) => service.name)
                            .join(", ")}{/if}</td>
                <td class="number maps"
                    >{#if web.mapCount}<span class="wide">{web.mapCount}</span><span class="narrow"
                            >{loc(mapCountLabel(web.mapCount))}</span
                        >{/if}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        padding: 0.5em 0.6em;
        text-align: left;
        vertical-align: top;
        border-bottom: 1px solid var(--color-secondary-transparent);
    }

    th {
        vertical-align: bottom;
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
    }

    /*
     * A miniature of the browser window around the screenshot on the website's own page
     * (BrowserWindow), reduced to the title bar with a hint of the title, its buttons and the
     * address bar
     */
    .browser {
        display: block;
        width: 160px;
        overflow: hidden;
        border: 1px solid var(--color-secondary);
        border-radius: 3px 3px 0 0;
        background: var(--color-surface);
    }

    .title-bar {
        display: flex;
        align-items: center;
        gap: 2px;
        height: 8px;
        padding: 0 2px 0 4px;
        background: var(--color-secondary);
    }

    .window-button {
        width: 4px;
        height: 4px;
        border: 1px solid var(--color-secondary-contrast);
        border-radius: 1px;
    }

    .title {
        width: 40%;
        height: 2px;
        margin-right: auto;
        border-radius: 1px;
        background: var(--color-secondary-contrast);
    }

    .address-bar {
        display: block;
        padding: 2px 4px;
        border-bottom: 1px solid var(--color-secondary-transparent);
    }

    .address {
        display: block;
        height: 3px;
        border: 1px solid var(--color-secondary-transparent);
        background: var(--color-bg);
    }

    .browser img,
    .no-screenshot {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
    }

    .site {
        min-width: 10em;
        max-width: 16em;
        overflow-wrap: break-word;
    }

    .site > * {
        display: block;
    }

    .name {
        font-weight: 600;
    }

    .domain,
    .authors {
        color: var(--color-text-muted);
        font-size: 0.85em;
    }

    .authors {
        margin-top: 0.3em;
    }

    .authors :global(.lucide-icon) {
        margin: 0 0.2em 0 0;
        vertical-align: -0.15em;
    }

    .description {
        min-width: 14em;
        max-width: 40em;
    }

    .years {
        white-space: nowrap;
    }

    .number {
        text-align: right;
    }

    .narrow {
        display: none;
    }

    /*
     * Narrower, a paragraph in a horizontally scrolled table would be hard to read, so each row
     * turns into a card: the thumbnail on the left, and next to it the name, the description,
     * and a line with the years, hosting and map count
     */
    @media (max-width: 1100px) {
        thead {
            /* Sorting is still available in the toolbar */
            display: none;
        }

        table,
        tbody {
            display: block;
        }

        tbody tr {
            display: grid;
            grid-template-columns: 160px auto auto minmax(0, 1fr);
            grid-template-rows: auto auto 1fr;
            gap: 0.4em 0.75em;
            padding: 0.75em 0;
            border-bottom: 1px solid var(--color-secondary-transparent);
        }

        tbody tr:hover {
            background: none;
        }

        td {
            padding: 0;
            border: none;
        }

        .thumb {
            grid-row: 1 / -1;
            grid-column: 1;
            width: auto;
        }

        .site {
            grid-row: 1;
            grid-column: 2 / -1;
            max-width: none;
        }

        .description {
            grid-row: 2;
            grid-column: 2 / -1;
            min-width: 0;
        }

        .years,
        .hosting,
        .maps {
            grid-row: 3;
            color: var(--color-text-muted);
            font-size: 0.85em;
            text-align: left;
        }

        .years {
            grid-column: 2;
        }

        .hosting {
            grid-column: 3;
        }

        .maps {
            grid-column: 4;
        }

        .hosting:empty,
        .maps:empty {
            display: none;
        }

        .hosting::before,
        .maps::before {
            content: "·";
            margin-right: 0.75em;
        }

        .wide {
            display: none;
        }

        .narrow {
            display: inline;
        }
    }

    /* On phones, the description goes below the thumbnail, at the full width */
    @media (max-width: 560px) {
        tbody tr {
            display: flex;
            flex-wrap: wrap;
            align-items: start;
            gap: 0.5em 0.75em;
        }

        .thumb {
            flex: none;
        }

        .browser {
            width: 120px;
        }

        .site {
            flex: 1 1 0;
            min-width: 0;
        }

        .description {
            flex: 1 0 100%;
            max-width: none;
        }
    }
</style>
