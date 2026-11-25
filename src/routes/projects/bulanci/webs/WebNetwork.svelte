<script lang="ts">
    import type { BulanciWebLink } from "$src/data/bulanci/webGraph.server";
    import DomainText from "./DomainText.svelte";
    import WebLinks from "./WebLinks.svelte";
    import {
        hostingColor,
        isWebDimmed,
        networkLinkPath,
        webHostingType,
        type WebGraphViewProps,
    } from "./webGraph";

    let { webs, graph, links, highlight, matching, nodeProps }: WebGraphViewProps = $props();

    const nodesById = $derived(new Map(graph.nodes.map((node) => [node.id, node])));

    const path = (link: BulanciWebLink) =>
        networkLinkPath(nodesById.get(link.source)!, nodesById.get(link.target)!);
</script>

<!--
    Websites as browser windows, in columns by the year they were started. The layout is in pixels
    and computed in advance (webGraph.server.ts); narrow screens scroll it horizontally.
-->
<div class="network" style:width="{graph.width}px" style:height="{graph.height}px">
    <svg width={graph.width} height={graph.height} aria-hidden="true">
        {#each graph.columns as column (column.year)}
            <line x1={column.x} x2={column.x} y1="0" y2={graph.height} class="grid" />
            <text x={column.x + 8} y="24">{column.year}</text>
        {/each}
        <WebLinks {links} {highlight} {matching} {path} />
    </svg>
    <ul>
        {#each webs as web (web.id)}
            {@const node = nodesById.get(web.id)!}
            {@const type = webHostingType(web)}
            <li
                class:dimmed={isWebDimmed(web.id, { highlight, matching })}
                class:highlighted={highlight?.id === web.id}
                style:left="{node.x - node.width / 2}px"
                style:top="{node.y - node.height / 2}px"
                style:width="{node.width}px"
                style:--hosting={hostingColor(type)}>
                <a {...nodeProps(web)}>
                    <span class="window">
                        <span class="title-bar" class:unknown={!type}></span>
                        {#if web.screenshot}
                            <img
                                src={web.screenshot.src}
                                alt=""
                                width="400"
                                height="300"
                                loading="lazy"
                                decoding="async" />
                        {/if}
                    </span>
                    <span class="label" lang={web.shownName ? "cs" : undefined}
                        >{#if web.shownName}{web.shownName}{:else}<DomainText
                                domain={web.domain} />{/if}</span>
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .network {
        position: relative;
    }

    svg {
        position: absolute;
        display: block;
    }

    .grid {
        stroke: var(--color-secondary);
        opacity: 0.35;
    }

    text {
        fill: var(--color-text-muted);
        font-size: 20px;
        font-weight: 700;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        position: absolute;
        transition: opacity 0.15s;
    }

    li.dimmed {
        opacity: 0.22;
    }

    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    a:focus-visible {
        outline: none;
    }

    a:focus-visible .window {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }

    .window {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        border: 2px solid var(--hosting);
        background: var(--color-surface);
    }

    .title-bar {
        flex: 0 0 max(5px, 8%);
        background: var(--hosting);
    }

    .title-bar.unknown {
        background: none;
        border-bottom: 1px solid var(--hosting);
    }

    img {
        flex: 1 1 0;
        min-height: 0;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }

    .label {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        overflow: hidden;
        position: relative;
        left: 50%;
        width: max(100% + 10px, 88px);
        margin-top: 3px;
        transform: translateX(-50%);
        font-size: 12.5px;
        line-height: 14px;
        text-align: center;
        overflow-wrap: anywhere;
        /* Keeps the label readable over links */
        text-shadow:
            0 0 2px var(--color-bg),
            0 0 2px var(--color-bg),
            0 0 3px var(--color-bg),
            0 0 4px var(--color-bg);
    }

    .highlighted .label {
        font-weight: 700;
    }

    @media (prefers-reduced-motion: reduce) {
        li {
            transition: none;
        }
    }
</style>
