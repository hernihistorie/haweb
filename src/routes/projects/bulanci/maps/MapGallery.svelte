<script lang="ts">
    import type { BulanciMap } from "$src/data/bulanci";
    import Loc from "#lib/components/Loc.svelte";
    import MapImage from "./MapImage.svelte";
    import { mapHref } from "./mapList";
    import { authorHref } from "../authors/authorList";

    let { maps }: { maps: BulanciMap[] } = $props();
</script>

<ul class="gallery">
    {#each maps as map (map.filename)}
        <li>
            <figure>
                <a href={mapHref(map)} class="map-link">
                    <MapImage
                        image={map.screenshot}
                        nsfw={map.nsfw}
                        revealable={false}
                        sizes="(max-width: 520px) calc(100vw - 2em), 320px" />
                    <span class="name">{map.name}</span>
                </a>
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
</style>
