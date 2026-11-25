<!-- The links between websites in a graph, to be used within an <svg> -->
<svelte:options namespace="svg" />

<script lang="ts">
    import type { BulanciWebLink } from "$src/data/bulanci/webGraph.server";
    import { webLinkClasses, type WebHighlight } from "./webGraph";

    interface Props {
        links: BulanciWebLink[];
        highlight: WebHighlight | null;
        matching: Set<number> | null;
        /** The SVG path to draw a link along */
        path: (link: BulanciWebLink) => string;
    }

    let { links, highlight, matching, path }: Props = $props();
</script>

<g fill="none">
    {#each links as link (`${link.source}-${link.target}`)}
        <path d={path(link)} class={webLinkClasses(link, { highlight, matching })} />
    {/each}
</g>

<style>
    path {
        stroke: var(--web-link);
        stroke-width: 1.3;
        opacity: 0.6;
        transition: opacity 0.15s;
    }

    .defunct {
        stroke-dasharray: 4 4;
    }

    .dimmed {
        opacity: 0.07;
    }

    .inbound {
        stroke: var(--web-link-in);
        stroke-width: 1.8;
        opacity: 0.85;
    }

    .outbound {
        stroke: var(--web-link-out);
        stroke-width: 2.2;
        opacity: 1;
    }
</style>
