<script lang="ts">
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import type { BulanciWebGraph } from "$src/data/bulanci/webGraph.server";
    import type { HTMLAnchorAttributes } from "svelte/elements";
    import type { WebGraphViewProps } from "./webGraph";
    import WebGraphLegend from "./WebGraphLegend.svelte";
    import {
        activeYearsLabel,
        webHref,
        webName,
        type BulanciWebListItem,
        type WebView,
    } from "./webList";
    import WebNetwork from "./WebNetwork.svelte";
    import WebTimeline from "./WebTimeline.svelte";

    interface Props {
        /** All websites, including those that don't match the filters */
        webs: BulanciWebListItem[];
        graph: BulanciWebGraph;
        view: Exclude<WebView, "table">;
        /** Websites that match the filters; null if there aren't any filters */
        matching: Set<number> | null;
    }

    let { webs, graph, view, matching }: Props = $props();

    const TOOLTIP_WIDTH = 264;
    const TOOLTIP_OFFSET = 16;

    /** The website being pointed at, with the point in the viewport its tooltip goes next to */
    let active = $state<{
        web: BulanciWebListItem;
        touch: boolean;
        x: number;
        y: number;
    } | null>(null);

    let container: HTMLElement;
    let tooltipHeight = $state(0);
    /** How the last click started; `click` events only tell in some browsers */
    let lastPointerType = "";

    const websById = $derived(new Map(webs.map((web) => [web.id, web])));
    const orderedWebs = $derived(graph.nodes.map((node) => websById.get(node.id)!));

    // Almost every website links to the official one, which would drown out the links between
    // fan websites, so those are only shown when pointing at the official website
    const links = $derived(
        graph.links.filter((link) => !link.official || active?.web.id === graph.officialId),
    );

    const inboundCounts = $derived.by(() => {
        const counts = new Map<number, number>();
        for (const link of graph.links) {
            if (!link.official) counts.set(link.target, (counts.get(link.target) ?? 0) + 1);
        }
        return counts;
    });

    const activeLinks = $derived.by(() => {
        const id = active?.web.id;
        return {
            outbound: links.filter((link) => link.source === id).map((link) => link.target),
            inbound: links.filter((link) => link.target === id).map((link) => link.source),
        };
    });

    const highlight = $derived(
        active && {
            id: active.web.id,
            related: new Set([...activeLinks.outbound, ...activeLinks.inbound]),
        },
    );

    /** Position of the tooltip within the graph, so that it fits in the viewport */
    const tooltipPosition = $derived.by(() => {
        // On touchscreens, it's at the bottom of the screen instead
        if (!active || active.touch) return null;
        const { x, y } = active;
        const bounds = container.getBoundingClientRect();
        const left = Math.min(x + TOOLTIP_OFFSET, bounds.right - TOOLTIP_WIDTH);
        const fitsBelow = y + TOOLTIP_OFFSET + tooltipHeight <= window.innerHeight;
        const top = fitsBelow
            ? y + TOOLTIP_OFFSET
            : Math.max(0, window.innerHeight - tooltipHeight - 8);
        return { left: Math.max(0, left - bounds.left), top: top - bounds.top };
    });

    function activate(web: BulanciWebListItem, element: Element, touch: boolean) {
        const bounds = element.getBoundingClientRect();
        active = { web, touch, x: bounds.left + bounds.width / 2, y: bounds.bottom };
    }

    const nodeProps = (web: BulanciWebListItem): HTMLAnchorAttributes => ({
        href: webHref(web),
        onpointerdown: (event) => (lastPointerType = event.pointerType),
        onpointermove: (event) => {
            if (event.pointerType === "touch") return;
            active = { web, touch: false, x: event.clientX, y: event.clientY };
        },
        onpointerleave: (event) => {
            if (event.pointerType !== "touch") active = null;
        },
        onfocus: (event) => {
            if (event.currentTarget.matches(":focus-visible")) {
                activate(web, event.currentTarget, false);
            }
        },
        onblur: () => (active = null),
        onclick: (event) => {
            // There's no hovering on touchscreens, so the first tap highlights the website and
            // the second one opens it. Pressing Enter is a click with no detail.
            const touch = event.detail > 0 && lastPointerType === "touch";
            if (touch && active?.web.id !== web.id) {
                event.preventDefault();
                activate(web, event.currentTarget, true);
            }
        },
    });

    const viewProps: WebGraphViewProps = $derived({
        webs: orderedWebs,
        graph,
        links,
        inboundCounts,
        highlight,
        matching,
        nodeProps,
    });
</script>

<svelte:window
    onkeydown={(event) => {
        if (event.key === "Escape") active = null;
    }}
    onpointerdown={(event) => {
        // Tapping elsewhere
        if (active?.touch && !(event.target as Element).closest(".web-graph li a")) active = null;
    }} />

<div class="web-graph" bind:this={container}>
    <div class="scroll" onscroll={() => (active = null)}>
        {#if view === "network"}
            <WebNetwork {...viewProps} />
        {:else}
            <WebTimeline {...viewProps} />
        {/if}
    </div>

    {#if active}
        {@const web = active.web}
        <div
            class="web-tooltip"
            class:touch={active.touch}
            role="status"
            style:width={tooltipPosition && `${TOOLTIP_WIDTH}px`}
            style:left={tooltipPosition && `${tooltipPosition.left}px`}
            style:top={tooltipPosition && `${tooltipPosition.top}px`}
            bind:offsetHeight={tooltipHeight}>
            {#if web.screenshot}
                <img src={web.screenshot.src} alt="" width="400" height="300" />
            {/if}
            <div>
                <strong lang={web.shownName ? "cs" : undefined}>{webName(web)}</strong>
                {#if web.shownName}<span class="muted">{web.domain}</span>{/if}
                <span>
                    {loc(activeYearsLabel(web))}{#if web.services.length}{" · "}{web.services
                            .map((service) => service.name)
                            .join(", ")}{/if}
                </span>
                <span>
                    <Loc cs="odkazuje na" en="links to" />
                    {activeLinks.outbound.length} ·
                    <Loc cs="odkazuje sem" en="linked from" />
                    {activeLinks.inbound.length}
                </span>
                {#if active.touch}
                    <span class="muted">
                        <Loc
                            cs="Dalším klepnutím web otevřete"
                            en="Tap again to open the website" />
                    </span>
                {/if}
            </div>
        </div>
    {/if}
</div>

<WebGraphLegend {webs} {view} />

<style>
    .web-graph {
        position: relative;
        margin-top: 1em;
    }

    .scroll {
        overflow-x: auto;
    }

    .muted {
        color: var(--color-text-muted);
    }

    .web-tooltip {
        position: absolute;
        z-index: 2;
        box-sizing: border-box;
        padding: 8px 10px;
        border: 2px solid var(--color-secondary);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 15px;
        line-height: 1.3;
        pointer-events: none;
    }

    .web-tooltip img {
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 6px;
    }

    .web-tooltip div > span,
    .web-tooltip strong {
        display: block;
        overflow-wrap: anywhere;
    }

    /* Out of the way of the highlighted websites */
    .web-tooltip.touch {
        position: fixed;
        z-index: 10;
        right: 12px;
        bottom: 12px;
        left: 12px;
        display: flex;
        gap: 10px;
    }

    .web-tooltip.touch img {
        flex: none;
        align-self: start;
        width: 112px;
        margin: 0;
    }
</style>
