<script lang="ts">
    import "./webGraph.css";
    import { loc } from "$src/lib/loc";
    import type { BulanciLinkedWeb, BulanciWebDetails } from "$src/data/bulanci/webDetails.server";
    import type { LocalizedString } from "$src/types";
    import IconArrowLeftRight from "@lucide/svelte/icons/arrow-left-right";
    import { hostingColor, hostingGroup, webHostingGroup } from "./webGraph";
    import { webHref, webName } from "./webList";

    interface Props {
        web: Pick<
            BulanciWebDetails,
            "domain" | "shownName" | "services" | "screenshot" | "linksTo" | "linkedFrom"
        >;
    }

    let { web }: Props = $props();

    /** Short lists are easy to count at a glance, so only longer ones show their length */
    const SHOWN_COUNT_MIN = 6;

    /** Rows have a fixed height, so that the connectors can be drawn without measuring them */
    const ROW_HEIGHT = 30;
    const MIN_HEIGHT = 240;

    const height = $derived(
        Math.max(MIN_HEIGHT, Math.max(web.linksTo.length, web.linkedFrom.length) * ROW_HEIGHT),
    );
    const group = $derived(webHostingGroup(web));
    const mutualIds = $derived.by(() => {
        const linkedFromIds = new Set(web.linkedFrom.map((other) => other.id));
        return new Set(web.linksTo.map((other) => other.id).filter((id) => linkedFromIds.has(id)));
    });

    /** The website being pointed at, possibly on both sides */
    let activeId = $state<number | null>(null);

    /** From the row to the middle of the window, in a 100 units wide box stretched to fit */
    function connector(index: number, count: number, side: "in" | "out"): string {
        const middle = height / 2;
        const y = middle + (index - (count - 1) / 2) * ROW_HEIGHT;
        return side === "in"
            ? `M0,${y}C50,${y} 50,${middle} 100,${middle}`
            : `M100,${y}C50,${y} 50,${middle} 0,${middle}`;
    }
</script>

{#snippet heading(label: LocalizedString, count: number)}
    <h4>
        {loc(label)}
        {#if count >= SHOWN_COUNT_MIN}<span class="count">({count})</span>{/if}
    </h4>
{/snippet}

{#snippet connectors(webs: BulanciLinkedWeb[], side: "in" | "out")}
    <svg
        class="connectors {side}"
        viewBox="0 0 100 {height}"
        preserveAspectRatio="none"
        aria-hidden="true">
        {#each webs as other, i (other.id)}
            <path
                d={connector(i, webs.length, side)}
                class:dimmed={activeId !== null && activeId !== other.id} />
        {/each}
    </svg>
{/snippet}

{#snippet list(webs: BulanciLinkedWeb[])}
    <ul>
        {#each webs as other (other.id)}
            <li
                class:dimmed={activeId !== null && activeId !== other.id}
                style:--hosting={hostingColor(hostingGroup(other.hostingService))}>
                <a
                    href={webHref(other)}
                    title={other.domain}
                    lang={other.shownName ? "cs" : undefined}
                    onpointerenter={() => (activeId = other.id)}
                    onpointerleave={() => (activeId = null)}
                    onfocus={() => (activeId = other.id)}
                    onblur={() => (activeId = null)}>{webName(other)}</a>
                {#if mutualIds.has(other.id)}
                    {@const mutual = loc({ cs: "vzájemný odkaz", en: "mutual link" })}
                    <span class="mutual" role="img" aria-label={mutual} title={mutual}>
                        <IconArrowLeftRight size="1em" />
                    </span>
                {/if}
                <span class="dot" class:unknown={!other.hostingService}></span>
            </li>
        {/each}
    </ul>
{/snippet}

<!-- The websites a website linked to and those that linked to it, on either side of it -->
<div class="neighborhood" style:--height="{height}px" style:--row-height="{ROW_HEIGHT}px">
    <div class="side in">
        {#if web.linkedFrom.length}
            {@render heading({ cs: "Odkazují sem", en: "Linked from" }, web.linkedFrom.length)}
            {@render list(web.linkedFrom)}
        {/if}
    </div>
    {@render connectors(web.linkedFrom, "in")}
    <div class="center" style:--hosting={hostingColor(group)} aria-hidden="true">
        <div class="window">
            <span class="title-bar" class:unknown={!group}></span>
            {#if web.screenshot}
                <img
                    src={web.screenshot.src}
                    alt=""
                    width="400"
                    height="300"
                    loading="lazy"
                    decoding="async" />
            {/if}
        </div>
        <span class="name">{webName(web)}</span>
    </div>
    {@render connectors(web.linksTo, "out")}
    <div class="side out">
        {#if web.linksTo.length}
            {@render heading({ cs: "Odkazuje na", en: "Links to" }, web.linksTo.length)}
            {@render list(web.linksTo)}
        {/if}
    </div>
</div>

<style>
    .neighborhood {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(40px, 130px) 200px minmax(40px, 130px) minmax(
                0,
                1fr
            );
        align-items: end;
        max-width: 1200px;
    }

    h4 {
        margin: 0 0 0.5em;
        color: var(--color-text-muted);
        font-size: 0.85em;
        font-weight: normal;
    }

    .side {
        align-self: start;
    }

    .side.in h4 {
        text-align: right;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: var(--height);
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: flex;
        align-items: center;
        gap: 0.4em;
        height: var(--row-height);
        transition: opacity 0.15s;
    }

    /* The dot goes next to the connector on either side */
    .out li {
        flex-direction: row;
    }

    .out .dot {
        order: -1;
    }

    .in li {
        justify-content: end;
    }

    li a {
        overflow: hidden;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    li a:hover,
    li a:focus-visible {
        text-decoration: underline;
    }

    .dot {
        flex: none;
        box-sizing: border-box;
        width: 12px;
        height: 12px;
        border: 2px solid var(--hosting);
        border-radius: 50%;
        background: var(--hosting);
    }

    .dot.unknown,
    .title-bar.unknown {
        background: none;
    }

    .mutual {
        display: inline-flex;
        flex: none;
        color: var(--color-text-muted);
    }

    .connectors {
        width: 100%;
        height: var(--height);
        overflow: visible;
    }

    .connectors path {
        fill: none;
        stroke-width: 1.6;
        vector-effect: non-scaling-stroke;
        transition: opacity 0.15s;
    }

    .connectors.in path {
        stroke: var(--web-link-in);
        opacity: 0.8;
    }

    .connectors.out path {
        stroke: var(--web-link-out);
    }

    li.dimmed {
        opacity: 0.4;
    }

    .connectors path.dimmed {
        opacity: 0.12;
    }

    .center {
        position: relative;
        display: flex;
        align-items: center;
        height: var(--height);
    }

    .name {
        position: absolute;
        /* Below the window */
        top: calc(50% + 80px);
        width: 100%;
        font-size: 0.9em;
        font-weight: 700;
        line-height: 1.2;
        text-align: center;
        overflow-wrap: anywhere;
    }

    .window {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        border: 2px solid var(--hosting);
        background: var(--color-surface);
    }

    .title-bar {
        flex: 0 0 8%;
        background: var(--hosting);
    }

    .title-bar.unknown {
        border-bottom: 1px solid var(--hosting);
    }

    img {
        flex: 1 1 0;
        min-height: 0;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }

    .count {
        font-variant-numeric: tabular-nums;
    }

    /* Without the room for connectors, it's just two lists */
    @media (max-width: 900px) {
        .neighborhood {
            display: flex;
            flex-wrap: wrap;
            align-items: start;
            gap: 1em 2em;
        }

        .connectors,
        .center {
            display: none;
        }

        .side {
            flex: 1 1 14em;
            min-width: 0;
        }

        .side.in h4 {
            text-align: left;
        }

        .in li {
            justify-content: start;
        }

        .in .dot {
            order: -1;
        }

        ul {
            height: auto;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        li,
        .connectors path {
            transition: none;
        }
    }
</style>
