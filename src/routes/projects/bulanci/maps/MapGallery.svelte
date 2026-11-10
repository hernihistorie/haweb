<script lang="ts">
    import type { BulanciMap } from "$src/data/bulanci";
    import { loc } from "$src/lib/loc";
    import MapImage from "./MapImage.svelte";

    let { maps }: { maps: BulanciMap[] } = $props();
</script>

<ul class="gallery">
    {#each maps as map (map.filename)}
        <li>
            <figure>
                <MapImage
                    image={map.screenshot}
                    nsfw={map.nsfw}
                    sizes="(max-width: 520px) calc(100vw - 2em), 320px" />
                <figcaption>
                    <span class="name">{map.name}</span>
                    <span class="meta">
                        {map.authors.join(", ") || loc({ cs: "neznámý autor", en: "unknown author" })}
                        {#if map.year}· {map.year}{/if}
                    </span>
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
        margin: 0;
        text-align: left;
    }

    figcaption {
        display: flex;
        flex-direction: column;
        padding-top: 0.35em;
        line-height: 1.25;
        text-align: left;
        font-style: normal;
        font-size: 1em;
    }

    .name {
        font-weight: 600;
        overflow-wrap: anywhere;
    }

    .meta {
        color: var(--color-text-muted);
        font-size: 0.9em;
    }
</style>
