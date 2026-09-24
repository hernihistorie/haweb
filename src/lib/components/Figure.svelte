<script lang="ts">
	import type { LocalizedString } from "$src/types";
	import type { ArticleImage } from "$src/lib/articleImages";
	import { openLightbox } from "$src/lib/lightbox";
	import { loc } from "../loc";

    interface Props {
        /** A plain image URL */
        src?: string;
        /** An image from `articleImages()`: shows build-time thumbnails, opens the original in a lightbox */
        image?: ArticleImage;
        caption?: LocalizedString;
        alt?: LocalizedString;
        href?: string;
    }

    const props: Props = $props();
    const alt = props.alt ?? props.caption ?? "";

</script>

<figure>
    {#if props.image}
        <a
            href={props.image.original}
            target="_blank"
            aria-label={loc(alt) || loc({ cs: "Zvětšit obrázek", en: "Enlarge image" })}
            data-pswp-width={props.image.width}
            data-pswp-height={props.image.height}
            onclick={openLightbox}
        >
            <enhanced:img src={props.image.picture} sizes="(min-width: 1400px) 1400px, 100vw" alt={loc(alt)} />
        </a>
    {:else if props.href}
        <a href={props.href} target="_blank">
            <img src={props.src} alt={loc(alt)} />
        </a>
    {:else}
        <img src={props.src} alt={loc(alt)} />
    {/if}
    {#if props.caption}
        <figcaption>
            {#if props.href}
                <a href={props.href} target="_blank">{loc(props.caption)}</a>
            {:else}
                {loc(props.caption)}
            {/if}
        </figcaption>
    {/if}
</figure>

<style>
    /* enhanced:img sets width/height attributes; keep the aspect ratio when max-width scales it down */
    img {
        height: auto;
    }
</style>
