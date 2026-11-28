<script lang="ts">
    import type { BulanciGalleryMap } from "$src/data/bulanci/maps.server";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import IconPlay from "@lucide/svelte/icons/play";
    import MapImage from "./MapImage.svelte";
    import MapMonitor from "./MapMonitor.svelte";
    import { mapHref } from "./mapList";
    import { authorHref } from "../authors/authorList";

    interface Props {
        maps: BulanciGalleryMap[];
        /** Adds a button to play each map, which calls this */
        onplay?: (map: BulanciGalleryMap) => void;
    }

    let { maps, onplay }: Props = $props();
</script>

<ul class="gallery">
    {#each maps as map (map.filename)}
        <li>
            <figure>
                <a href={mapHref(map)} class="map-link">
                    <MapMonitor>
                        <MapImage
                            image={map.screenshot}
                            nsfw={map.nsfw}
                            revealable={false}
                            sizes="(max-width: 520px) calc(100vw - 2em), 320px" />
                    </MapMonitor>
                    <span class="name">{map.name}</span>
                </a>
                {#if onplay}
                    <button
                        class="play"
                        onclick={() => onplay(map)}
                        title={loc({ cs: "Hrát tuto mapu", en: "Play this map" })}
                        aria-label={loc({ cs: `Hrát mapu ${map.name}`, en: `Play ${map.name}` })}>
                        <IconPlay size="1.2em" />
                    </button>
                {/if}
                <figcaption class="meta">
                    {#each map.authors as author, i (author)}
                        {#if i > 0},{" "}{/if}<a href={authorHref(author)}>{author}</a>
                    {:else}
                        <Loc cs="neznámý autor" en="unknown author" />
                    {/each}
                    {#if map.year}· {map.year}{/if}
                </figcaption>
            </figure>
        </li>
    {/each}
</ul>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
        gap: 1.25em 1em;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    figure {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0;
        line-height: 1.25;
        text-align: left;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .map-link {
        display: block;
    }

    .map-link:hover .name,
    .map-link:focus-visible .name,
    .meta a:hover,
    .meta a:focus-visible {
        text-decoration: underline;
    }

    .name {
        display: block;
        padding-top: 0.35em;
        font-weight: 600;
        overflow-wrap: anywhere;
    }

    figcaption {
        padding: 0;
        font-style: normal;
        text-align: left;
    }

    .meta {
        color: var(--color-text-muted);
        font-size: 0.9em;
        overflow-wrap: anywhere;
    }

    /* In the screenshot's top right corner, inside the monitor's bezel */
    .play {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.4em;
        height: 2.4em;
        margin: 0;
        padding: 0 0 0 0.15em;
        border: 2px solid #fffc;
        border-radius: 50%;
        background: var(--color-primary);
        color: var(--color-primary-contrast);
        box-shadow: 0 2px 6px #0006;
        cursor: pointer;
        transition: transform 0.15s;
    }

    .play:hover,
    .play:focus-visible {
        transform: scale(1.1);
    }

    .play :global(.lucide-icon) {
        margin: 0;
    }
</style>
