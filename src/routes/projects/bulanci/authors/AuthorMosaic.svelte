<script lang="ts">
    import type { BulanciMapThumbnail } from "$src/data/bulanci";
    import IconUser from "@lucide/svelte/icons/user";
    import IconUsers from "@lucide/svelte/icons/users";

    interface Props {
        /** Up to 4 maps; the first one is the largest when there are 3 */
        maps: BulanciMapThumbnail[];
        isClan?: boolean;
        /** The largest width at which the mosaic is shown, in CSS pixels */
        width: number;
    }

    let { maps, isClan = false, width }: Props = $props();

    const tiles = $derived(maps.slice(0, 4));

    /** Tiles of 2×2 and side-by-side mosaics are half as wide */
    const tileSizes = (index: number): string =>
        tiles.length === 1 || (tiles.length === 3 && index === 0)
            ? `${width}px`
            : `${Math.ceil(width / 2)}px`;
</script>

<!--
    Screenshots are 800×600, but the bottom ~105px is the game's HUD, so the mosaic
    has the aspect ratio of the top 800×495 and each tile cuts the HUD off.
-->
<div class="mosaic tiles-{tiles.length}" aria-hidden="true">
    {#each tiles as map, i (map.id)}
        <div class="tile">
            {#if map.screenshot}
                <img
                    src={map.screenshot.src}
                    srcset={map.screenshot.srcset}
                    sizes={tileSizes(i)}
                    alt=""
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async" />
            {/if}
        </div>
    {:else}
        <div class="placeholder">
            {#if isClan}<IconUsers size="2.5em" />{:else}<IconUser size="2.5em" />{/if}
        </div>
    {/each}
</div>

<style>
    .mosaic {
        display: grid;
        gap: 2px;
        aspect-ratio: 800 / 495;
        overflow: hidden;
        background: var(--color-secondary-transparent);
    }

    .tiles-2 {
        grid-template-columns: 1fr 1fr;
    }

    .tiles-3 {
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .tiles-3 .tile:first-child {
        grid-row: span 2;
    }

    .tiles-4 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .tile {
        position: relative;
        overflow: hidden;
        min-width: 0;
        min-height: 0;
    }

    /* Taller than the tile by the HUD's share of the screenshot, which overflows at the bottom */
    img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: calc(100% * 600 / 495);
        object-fit: cover;
        object-position: top;
    }

    .placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-muted);
    }
</style>
