<script lang="ts">
    import type { Snippet } from "svelte";
    import type { PlaceholderPicture } from "$src/types";
    import { placeholderStyle } from "$src/lib/placeholder";

    interface Props {
        image: PlaceholderPicture;
        alt?: string;
        /** Heading level of the title */
        level?: 2 | 3;
        /** Shape which the image is cropped to */
        aspectRatio?: number;
        /** Show the image whole, however tall or short it gets */
        uncropped?: boolean;
        /** How wide the component is: the first size whose media query matches, as in `<img sizes>` */
        sizes: { media?: string; width: string }[];
        /** For images which might not be scrolled to */
        lazy?: boolean;
        /** The title, shown over the bottom of the image */
        children: Snippet;
    }

    let {
        image,
        alt = "",
        level = 3,
        aspectRatio = 4 / 3,
        uncropped = false,
        sizes,
        lazy = false,
        children,
    }: Props = $props();

    const imageRatio = $derived(image.img.w / image.img.h);
    // Images wider than the crop are scaled to its height, so they need more pixels than it's wide
    const scale = $derived(uncropped ? 1 : Math.max(1, imageRatio / aspectRatio));
    const imageSizes = $derived(
        sizes
            .map(({ media, width }) => `${media ?? ""} calc(${width} * ${scale.toFixed(2)})`.trim())
            .join(", "),
    );
</script>

<div
    class="image-title"
    class:uncropped
    style:--aspect-ratio={uncropped ? imageRatio : aspectRatio}>
    <enhanced:img
        src={image}
        sizes={imageSizes}
        {alt}
        style={placeholderStyle(image)}
        loading={lazy ? "lazy" : undefined}
        decoding="async" />
    <svelte:element this={`h${level}`} class="title">
        {@render children()}
    </svelte:element>
</div>

<style>
    .image-title {
        position: relative;
    }

    img {
        display: block;
        width: 100%;
        /* enhanced:img sets width/height attributes */
        height: auto;
        max-height: 24em;
        aspect-ratio: var(--aspect-ratio);
        object-fit: cover;
    }

    .uncropped img {
        max-height: none;
    }

    .title {
        position: absolute;
        inset: auto 0 0 0;
        margin: 0;
        padding: 2em 16px 12px;
        background: linear-gradient(transparent, rgb(0 0 0 / 0.8));
        color: white;
        line-height: 1.15;
        text-transform: uppercase;
    }

    h3.title {
        font-size: 24px;
    }

    h2.title {
        padding: 3em 24px 16px;
    }

    /* Make sure there's room for a title that wraps */
    @media screen and (max-width: 700px) {
        img {
            min-height: 12em;
        }

        .uncropped img {
            min-height: 0;
        }

        h2.title {
            font-size: 28px;
            padding: 2em 16px 12px;
        }
    }
</style>
