<script lang="ts">
	import type { LocalizedString } from "$src/types";
	import type { ArticleImage } from "$src/lib/articleImages";
	import { loc } from "../loc";

    interface Props {
        /** A plain image URL */
        src?: string;
        /** An image from `articleImages()`: shows build-time thumbnails, links to the original */
        image?: ArticleImage;
        caption?: LocalizedString;
        alt?: LocalizedString;
        href?: string;
    }

    const props: Props = $props();
    const alt = props.alt ?? props.caption ?? "";
    const href = $derived(props.href ?? props.image?.original);

</script>

{#snippet img()}
    {#if props.image}
        <enhanced:img src={props.image.picture} sizes="(min-width: 1400px) 1400px, 100vw" alt={loc(alt)} />
    {:else}
        <img src={props.src} alt={loc(alt)} />
    {/if}
{/snippet}

<figure>
    {#if href}
        <a href={href} target="_blank">
            {@render img()}
        </a>
    {:else}
        {@render img()}
    {/if}
    {#if props.caption}
        <figcaption>
            {#if href}
                <a href={href} target="_blank">{loc(props.caption)}</a>
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
