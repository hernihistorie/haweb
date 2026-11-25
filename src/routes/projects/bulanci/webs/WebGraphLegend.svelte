<script lang="ts">
    import "./webGraph.css";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import {
        HOSTING_TYPE_LABELS,
        HOSTING_TYPES,
        hostingColor,
        UNKNOWN_HOSTING_LABEL,
        webHostingType,
    } from "./webGraph";
    import type { BulanciWebListItem, WebView } from "./webList";

    interface Props {
        /** To list the services of each type of hosting, most used first */
        webs: BulanciWebListItem[];
        view: Exclude<WebView, "table">;
    }

    let { webs, view }: Props = $props();

    const servicesByType = $derived(
        new Map(
            HOSTING_TYPES.map((type) => {
                const counts = new Map<string, number>();
                for (const web of webs.filter((web) => webHostingType(web) === type)) {
                    const { name } = web.services[0];
                    counts.set(name, (counts.get(name) ?? 0) + 1);
                }
                const names = [...counts].sort((a, b) => b[1] - a[1]).map(([name]) => name);
                return [type, names.join(", ")];
            }),
        ),
    );
</script>

<ul class="legend" aria-label={loc({ cs: "Legenda", en: "Legend" })}>
    {#each HOSTING_TYPES as type (type)}
        <li>
            <span class="symbol"
                ><span class="swatch" style:--hosting={hostingColor(type)}></span></span>
            <span>
                {loc(HOSTING_TYPE_LABELS[type])}
                {#if servicesByType.get(type)}
                    <span class="services">({servicesByType.get(type)})</span>
                {/if}
            </span>
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
        <span class="symbol"><span class="line defunct"></span></span>
        <Loc
            cs="Odkazovaný web už zřejmě nebyl aktivní"
            en="Linked website was probably no longer active" />
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

<style>
    .legend {
        box-sizing: border-box;
        width: fit-content;
        max-width: 100%;
        margin: 1.5em 0 0 auto;
        padding: 0.8em 1em;
        border: 2px solid var(--color-secondary);
        font-size: 0.85em;
        line-height: 1.35;
        list-style: none;
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

    .line.defunct {
        border-top-style: dashed;
        border-color: var(--web-link);
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
