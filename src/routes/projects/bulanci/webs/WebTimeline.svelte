<script lang="ts">
    import type { BulanciWebLink } from "$src/data/bulanci/webGraph.server";
    import WebLinks from "./WebLinks.svelte";
    import { hostingColor, isWebDimmed, webHostingType, type WebGraphViewProps } from "./webGraph";
    import { webName } from "./webList";

    let { webs, links, inboundCounts, highlight, matching, nodeProps }: WebGraphViewProps =
        $props();

    const ROW_HEIGHT = 24;
    const HEADER_HEIGHT = 30;
    /** Space for the dots the arcs lead to */
    const DOT_SLOT = 24;

    let width = $state(0);

    const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

    const height = $derived(HEADER_HEIGHT + webs.length * ROW_HEIGHT + 8);
    const labelWidth = $derived(clamp(width * 0.21, 120, 280));
    const arcsWidth = $derived(clamp(width * 0.24, 70, 320));
    const barsLeft = $derived(labelWidth + 12);
    const barsWidth = $derived(Math.max(0, width - barsLeft - DOT_SLOT - arcsWidth));
    const dotX = $derived(barsLeft + barsWidth + DOT_SLOT / 2);

    const firstYear = $derived(Math.min(...webs.map((web) => web.startYear.year)));
    const lastYear = $derived(
        Math.max(...webs.map((web) => web.endYear?.year ?? web.startYear.year)),
    );
    const years = $derived(
        Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i),
    );
    const yearWidth = $derived(barsWidth / years.length);
    /** Label only as many years as fit */
    const labelStep = $derived([1, 2, 4, 8].find((step) => step * yearWidth >= 44) ?? 8);

    const yearX = (year: number) => barsLeft + (year - firstYear) * yearWidth;

    const rowY = $derived(
        new Map(webs.map((web, i) => [web.id, HEADER_HEIGHT + (i + 0.5) * ROW_HEIGHT])),
    );
    const span = ({ source, target }: BulanciWebLink) =>
        Math.abs(rowY.get(source)! - rowY.get(target)!);
    const maxSpan = $derived(Math.max(1, ...links.map(span)));

    /** Arcs reach further the further apart the websites are; mutual ones don't overlap */
    function path(link: BulanciWebLink): string {
        const a = rowY.get(link.source)!;
        const b = rowY.get(link.target)!;
        const reach = (10 + (span(link) / maxSpan) * (arcsWidth / 1.16 - 20)) * (a > b ? 1 : 1.16);
        // A cubic curve only gets to 3/4 of the way to its control points
        const controlX = dotX + reach / 0.75;
        return `M${dotX},${a}C${controlX},${a} ${controlX},${b} ${dotX},${b}`;
    }

    const dotRadius = (id: number) => 2 + Math.sqrt(inboundCounts.get(id) ?? 0) * 2.1;
</script>

<!-- Websites as rows with bars spanning the years they were active, with links as arcs -->
<div class="timeline" style:height="{height}px" bind:clientWidth={width}>
    {#if width}
        <svg {width} {height} aria-hidden="true">
            {#each years as year, i (year)}
                <line x1={yearX(year)} x2={yearX(year)} y1={HEADER_HEIGHT - 6} y2={height} />
                {#if i % labelStep === 0}
                    <text x={yearX(year) + 2} y="18">{year}</text>
                {/if}
            {/each}
            <WebLinks {links} {highlight} {matching} {path} />
        </svg>
        <ul>
            {#each webs as web (web.id)}
                {@const type = webHostingType(web)}
                {@const radius = dotRadius(web.id)}
                <li
                    class:dimmed={isWebDimmed(web.id, { highlight, matching })}
                    class:highlighted={highlight?.id === web.id}
                    class:unknown={!type}
                    style:top="{rowY.get(web.id)! - ROW_HEIGHT / 2}px"
                    style:width="{dotX + DOT_SLOT / 2}px"
                    style:height="{ROW_HEIGHT}px"
                    style:--hosting={hostingColor(type)}>
                    <a {...nodeProps(web)}>
                        <span
                            class="label"
                            style:width="{labelWidth}px"
                            lang={web.shownName ? "cs" : undefined}>{webName(web)}</span>
                        <span
                            class="bar"
                            class:open={!web.endYear}
                            style:left="{yearX(web.startYear.year)}px"
                            style:width="{((web.endYear?.year ?? lastYear) -
                                web.startYear.year +
                                1) *
                                yearWidth -
                                2}px"></span>
                        <span
                            class="dot"
                            style:left="{dotX - radius}px"
                            style:width="{radius * 2}px"
                            style:height="{radius * 2}px"></span>
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .timeline {
        position: relative;
    }

    svg {
        position: absolute;
        display: block;
    }

    line {
        stroke: var(--color-secondary);
        opacity: 0.35;
    }

    text {
        fill: var(--color-text-muted);
        font-size: 14px;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        position: absolute;
        left: 0;
        transition: opacity 0.15s;
    }

    li.dimmed {
        opacity: 0.22;
    }

    a {
        display: block;
        position: relative;
        height: 100%;
        color: inherit;
        text-decoration: none;
    }

    a:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: -2px;
    }

    .label {
        display: block;
        overflow: hidden;
        font-size: 15.5px;
        line-height: 24px;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .highlighted .label {
        font-weight: 700;
    }

    .bar,
    .dot {
        position: absolute;
        top: 50%;
        box-sizing: border-box;
        transform: translateY(-50%);
        border: 1.5px solid var(--hosting);
        background: var(--hosting);
    }

    .bar {
        min-width: 4px;
        height: 10px;
    }

    /* Still active */
    .bar.open {
        border-right: none;
        mask-image: linear-gradient(to right, #000 80%, transparent);
    }

    .dot {
        border-radius: 50%;
    }

    .unknown .bar {
        background: none;
    }

    .unknown .dot {
        background: var(--color-bg);
    }

    @media (max-width: 700px) {
        .label {
            font-size: 13px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        li {
            transition: none;
        }
    }
</style>
