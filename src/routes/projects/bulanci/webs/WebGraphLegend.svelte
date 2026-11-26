<script lang="ts">
    import "./webGraph.css";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import IconCircleHelp from "@lucide/svelte/icons/circle-help";
    import IconX from "@lucide/svelte/icons/x";
    import {
        HOSTING_GROUPS,
        hostingColor,
        OTHER_HOSTING_LABEL,
        UNKNOWN_HOSTING_LABEL,
        webHostingGroup,
        type HostingGroup,
    } from "./webGraph";
    import type { BulanciWebListItem, WebView } from "./webList";

    interface Props {
        /** To name the services in each group of hosting, most used first */
        webs: BulanciWebListItem[];
        view: Exclude<WebView, "table">;
    }

    let { webs, view }: Props = $props();

    const id = $props.id();
    let open = $state(false);
    let toggle: HTMLElement;

    const servicesByGroup = $derived(
        new Map(
            HOSTING_GROUPS.map((group): [HostingGroup, string[]] => {
                const counts = new Map<string, number>();
                for (const web of webs.filter((web) => webHostingGroup(web) === group)) {
                    const { name } = web.services[0];
                    counts.set(name, (counts.get(name) ?? 0) + 1);
                }
                return [group, [...counts].sort((a, b) => b[1] - a[1]).map(([name]) => name)];
            }),
        ),
    );
</script>

<svelte:window
    onkeydown={(event) => {
        if (event.key === "Escape") open = false;
    }}
    onpointerdown={(event) => {
        if (open && !toggle.contains(event.target as Node)) open = false;
    }} />

<!-- Above the graph's top right corner, with the legend opening over the graph -->
<div class="legend-toggle" bind:this={toggle}>
    <button
        type="button"
        class="link"
        aria-expanded={open}
        aria-controls={id}
        onclick={() => (open = !open)}>
        {#if open}<IconX size="1em" />{:else}<IconCircleHelp size="1em" />{/if}
        <Loc cs="Legenda" en="Legend" />
    </button>

    <ul class="legend" {id} hidden={!open} aria-label={loc({ cs: "Legenda", en: "Legend" })}>
        {#each HOSTING_GROUPS as group (group)}
            {@const services = servicesByGroup.get(group) ?? []}
            <li>
                <span class="symbol"
                    ><span class="swatch" style:--hosting={hostingColor(group)}></span></span>
                {#if group === "other"}
                    <span>
                        {loc(OTHER_HOSTING_LABEL)}
                        {#if services.length}
                            <span class="services">({services.join(", ")})</span>
                        {/if}
                    </span>
                {:else}
                    <span>{services[0]}</span>
                {/if}
            </li>
        {/each}
        <li>
            <span class="symbol"
                ><span class="swatch unknown" style:--hosting={hostingColor(null)}></span></span>
            {loc(UNKNOWN_HOSTING_LABEL)}
        </li>
        <li>
            <span class="symbol"><span class="line"></span></span>
            <Loc cs="Odkazy z vybraného webu" en="Links from the selected website" />
        </li>
        <li>
            <span class="symbol"><span class="line inbound"></span></span>
            <Loc cs="Odkazy na vybraný web" en="Links to the selected website" />
        </li>
        <li>
            <span class="symbol sizes" class:dots={view === "timeline"}
                ><span></span><span></span></span>
            {#if view === "network"}
                <Loc
                    cs="Velikost okna: počet odkazů z jiných fanouškovských webů"
                    en="Window size: number of links from other fan websites" />
            {:else}
                <Loc
                    cs="Velikost tečky: počet odkazů z jiných fanouškovských webů"
                    en="Dot size: number of links from other fan websites" />
            {/if}
        </li>
    </ul>
</div>

<style>
    .legend-toggle {
        position: absolute;
        z-index: 3;
        right: 0;
        bottom: 100%;
        /* In line with the number of websites above the graph */
        margin-bottom: 0.9em;
    }

    button {
        display: inline-flex;
        align-items: center;
        gap: 0.3em;
        color: var(--color-text-muted);
    }

    /* Overrides the global icon margin, which would push it above the middle of the text */
    button :global(.lucide-icon) {
        margin: 0;
    }

    button:hover,
    button:focus-visible,
    button[aria-expanded="true"] {
        color: var(--color-primary);
    }

    .legend {
        position: absolute;
        top: calc(100% + 0.4em);
        right: 0;
        box-sizing: border-box;
        width: max-content;
        max-width: min(32em, calc(100vw - 2em));
        margin: 0;
        padding: 0.8em 1em;
        border: 2px solid var(--color-secondary);
        background: var(--color-surface);
        box-shadow: 0 4px 12px #0002;
        font-size: 0.85em;
        line-height: 1.35;
        list-style: none;
    }

    .legend[hidden] {
        display: none;
    }

    li {
        display: grid;
        grid-template-columns: 24px 1fr;
        gap: 0.7em;
    }

    li + li {
        margin-top: 0.35em;
    }

    /* Centered on the first line of the text */
    .symbol {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        height: 1.35em;
    }

    .swatch {
        box-sizing: border-box;
        width: 12px;
        height: 12px;
        border: 2px solid var(--hosting);
        background: var(--hosting);
    }

    .swatch.unknown {
        background: none;
    }

    .services {
        color: var(--color-text-muted);
    }

    .line {
        width: 100%;
        border-top: 2px solid var(--web-link-out);
    }

    .line.inbound {
        border-color: var(--web-link-in);
    }

    .sizes span {
        width: 5px;
        aspect-ratio: 4 / 3;
        border: 1.5px solid var(--color-text-muted);
    }

    .sizes span + span {
        width: 11px;
    }

    .sizes.dots span {
        aspect-ratio: 1;
        border-radius: 50%;
    }
</style>
