<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        src: string;
        alt?: string;
        /** Heading level of the title */
        level?: 2 | 3;
        aspectRatio?: string;
        /** The title, shown over the bottom of the image */
        children: Snippet;
    }

    let { src, alt = "", level = 3, aspectRatio = "4/3", children }: Props = $props();
</script>

<div class="image-title" style:--aspect-ratio={aspectRatio}>
    <img {src} {alt} />
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
        max-height: 24em;
        aspect-ratio: var(--aspect-ratio);
        object-fit: cover;
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

        h2.title {
            font-size: 28px;
            padding: 2em 16px 12px;
        }
    }
</style>
