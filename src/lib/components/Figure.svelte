<script lang="ts">
    import type { LocalizedString } from "$src/types";
    import type { Snippet } from "svelte";
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
        /** Float the figure as a thumbnail beside the text (full width on narrow screens) */
        float?: "left" | "right";
        /** Caption with markup; takes precedence over `caption` */
        children?: Snippet;
    }

    const props: Props = $props();
    const alt = $derived(props.alt ?? props.caption ?? "");
    const sizes = $derived(
        props.float ? "(max-width: 600px) 100vw, 340px" : "(min-width: 1400px) 1400px, 100vw",
    );
</script>

<figure class={props.float ? `float-${props.float}` : undefined}>
    {#if props.image}
        <a
            href={props.image.original}
            target="_blank"
            aria-label={loc(alt) || loc({ cs: "Zvětšit obrázek", en: "Enlarge image" })}
            data-pswp
            data-pswp-width={props.image.width}
            data-pswp-height={props.image.height}
            onclick={openLightbox}>
            <enhanced:img
                src={props.image.picture}
                {sizes}
                alt={loc(alt)}
                loading="lazy"
                decoding="async" />
        </a>
    {:else if props.href}
        <a href={props.href} target="_blank">
            <img src={props.src} alt={loc(alt)} loading="lazy" decoding="async" />
        </a>
    {:else}
        <img src={props.src} alt={loc(alt)} loading="lazy" decoding="async" />
    {/if}
    {#if props.children || props.caption}
        <figcaption>
            {#if props.href}
                <a href={props.href} target="_blank">{@render captionContent()}</a>
            {:else}
                {@render captionContent()}
            {/if}
        </figcaption>
    {/if}
</figure>

{#snippet captionContent()}
    {#if props.children}
        {@render props.children()}
    {:else}
        {loc(props.caption ?? "")}
    {/if}
{/snippet}

<style>
    /* enhanced:img sets width/height attributes; keep the aspect ratio when max-width scales it down */
    img {
        height: auto;
    }

    .float-left,
    .float-right {
        width: 340px;
        margin-top: 0.25em;
        margin-bottom: 1em;
    }

    .float-left {
        float: left;
        margin-right: 1.5em;
    }

    .float-right {
        float: right;
        margin-left: 1.5em;
    }

    @media only screen and (max-width: 600px) {
        .float-left,
        .float-right {
            float: none;
            width: auto;
            margin: 1.25em 0;
        }
    }
</style>
