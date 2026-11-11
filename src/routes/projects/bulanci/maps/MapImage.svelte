<script lang="ts">
    import type { BulanciMapImage } from "$src/data/bulanci";
    import { loc } from "$src/lib/loc";
    import { openLightbox } from "$src/lib/lightbox";
    import IconEyeOff from "@lucide/svelte/icons/eye-off";

    interface Props {
        image: BulanciMapImage | null;
        /** Value of the `sizes` attribute */
        sizes: string;
        nsfw?: boolean;
        /** Cut off the game's HUD at the bottom */
        crop?: boolean;
        /** Whether a NSFW image can be unblurred here, rather than only on the map's page */
        revealable?: boolean;
        /** Open the full image in a lightbox on click */
        zoomable?: boolean;
        alt?: string;
        /** Load the image right away, for images at the top of the page */
        eager?: boolean;
    }

    let {
        image,
        sizes,
        nsfw = false,
        crop = true,
        revealable = true,
        zoomable = false,
        alt = "",
        eager = false,
    }: Props = $props();

    let revealed = $state(false);
    const blurred = $derived(nsfw && !revealed);
    const nsfwLabel = $derived(
        loc({ cs: "Nevhodné pro mladistvé", en: "Not safe for work" }) +
            (revealable ? loc({ cs: " – zobrazit", en: " – show" }) : ""),
    );
</script>

{#snippet img(image: BulanciMapImage)}
    <img
        src={image.src}
        srcset={image.srcset}
        {sizes}
        {alt}
        width="800"
        height="600"
        loading={eager ? "eager" : "lazy"}
        decoding="async" />
{/snippet}

<!--
    Screenshots are 800×600, but the bottom ~105px is the game's HUD (or the
    loading indicator on loading screens), so cropped images only show the top 800×495.
-->
<div class="map-image" class:crop class:blurred>
    {#if image}
        {#if zoomable && !blurred}
            <a
                href={image.large}
                target="_blank"
                aria-label={loc({ cs: "Zvětšit obrázek", en: "Enlarge image" })}
                data-pswp
                data-pswp-width="800"
                data-pswp-height="600"
                onclick={openLightbox}>
                {@render img(image)}
            </a>
        {:else}
            {@render img(image)}
        {/if}
    {/if}
    {#if blurred}
        {#if revealable}
            <button class="link nsfw" onclick={() => (revealed = true)}>
                <IconEyeOff size="1.25em" />
                <span>{nsfwLabel}</span>
            </button>
        {:else}
            <span class="nsfw">
                <IconEyeOff size="1.25em" />
                <span>{nsfwLabel}</span>
            </span>
        {/if}
    {/if}
</div>

<style>
    .map-image {
        position: relative;
        aspect-ratio: 800 / 600;
        overflow: hidden;
        background: var(--color-secondary-transparent);
    }

    .map-image.crop {
        aspect-ratio: 800 / 495;
    }

    a {
        display: block;
        height: 100%;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    .blurred img {
        filter: blur(16px);
        transform: scale(1.1);
    }

    .nsfw {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.25em;
        padding: 0.5em;
        color: #fff;
        background: #0006;
        font-size: 0.9em;
        text-align: center;
    }
</style>
