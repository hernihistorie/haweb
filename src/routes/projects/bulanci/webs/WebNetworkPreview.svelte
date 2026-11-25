<script lang="ts">
    import "./webGraph.css";
    import type { BulanciWebGraph, BulanciWebLink } from "$src/data/bulanci/webGraph.server";
    import type { BulanciHostingType } from "$src/data/bulanci/webs.server";
    import { hostingColor, networkLinkPath } from "./webGraph";
    import WebLinks from "./WebLinks.svelte";

    interface Props {
        graph: BulanciWebGraph;
        /** What's shown of each website, by its id */
        webs: Record<number, { hostingType: BulanciHostingType | null; screenshot: string | null }>;
    }

    let { graph, webs }: Props = $props();

    const nodesById = $derived(new Map(graph.nodes.map((node) => [node.id, node])));
    const fanLinks = $derived(graph.links.filter((link) => !link.official));

    const path = (link: BulanciWebLink) =>
        networkLinkPath(nodesById.get(link.source)!, nodesById.get(link.target)!);

    const percent = (value: number, total: number) => `${(value / total) * 100}%`;
</script>

<!--
    A picture of the network of websites (WebNetwork) scaled to the available width, without labels,
    which would be too small to read
-->
<div class="preview" style:aspect-ratio="{graph.width} / {graph.height}" aria-hidden="true">
    <svg viewBox="0 0 {graph.width} {graph.height}">
        {#each graph.columns as column (column.year)}
            <line x1={column.x} x2={column.x} y1="0" y2={graph.height} />
            <text x={column.x + 8} y="28">{column.year}</text>
        {/each}
        <WebLinks links={fanLinks} highlight={null} matching={null} {path} />
    </svg>
    {#each graph.nodes as node (node.id)}
        {@const { hostingType, screenshot } = webs[node.id]}
        <span
            class="window"
            class:unknown={!hostingType}
            style:left={percent(node.x - node.width / 2, graph.width)}
            style:top={percent(node.y - node.height / 2, graph.height)}
            style:width={percent(node.width, graph.width)}
            style:--hosting={hostingColor(hostingType)}>
            {#if screenshot}
                <img
                    src={screenshot}
                    alt=""
                    width="400"
                    height="300"
                    loading="lazy"
                    decoding="async" />
            {/if}
        </span>
    {/each}
</div>

<style>
    .preview {
        position: relative;
    }

    svg {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
    }

    line {
        stroke: var(--color-secondary);
        opacity: 0.35;
    }

    text {
        fill: var(--color-text-muted);
        font-size: 24px;
        font-weight: 700;
    }

    .window {
        position: absolute;
        box-sizing: border-box;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        border: 1px solid var(--hosting);
        border-top-width: 4px;
        background: var(--color-surface);
    }

    .window.unknown {
        border-top-width: 1px;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    @media (max-width: 600px) {
        text {
            display: none;
        }

        .window {
            border-top-width: 2px;
        }
    }
</style>
