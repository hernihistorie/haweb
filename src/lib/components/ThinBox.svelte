<script lang="ts">
    import Arrow from "$src/lib/components/Arrow.svelte";
    import ImageTitle from "$src/lib/components/ImageTitle.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import type { Snippet } from "svelte";
    let {
        href = undefined,
        title = undefined,
        /** Title shown over the bottom of the image */
        heading = undefined,
        children,
        show_arrow = true,
        img = undefined,
        project = false,
    }: {
        href?: string;
        title?: string;
        heading?: Snippet;
        children?: Snippet;
        show_arrow?: boolean;
        img?: string;
        project?: boolean;
    } = $props();

    let localizedHref = $derived(
        href && href.startsWith("/") && !href.startsWith("//") ? localizeHref(href) : href,
    );
</script>

<div class="project">
    {#if img && heading}
        <a href={localizedHref} class="image">
            <ImageTitle src={img} alt={title}>{@render heading()}</ImageTitle>
        </a>
    {:else if img}
        <a href={localizedHref}>
            <img src={img} alt={title} />
        </a>
    {:else if heading}
        <h3><a href={localizedHref}>{@render heading()}</a></h3>
    {/if}
    {#if title}
        <h3>
            <a href={localizedHref}>
                {title}
            </a>
        </h3>
    {/if}
    {@render children?.()}
    {#if show_arrow && href}
        <div style="margin-top: 16px;">
            <Arrow {href} />
        </div>
    {/if}
</div>

<style>
    img {
        width: 100%;
        aspect-ratio: 4/3;
    }

    .project {
        width: calc(25% - 19px);
    }

    .project :global(h3) {
        margin-top: 0;
    }

    .image {
        display: block;
        text-decoration: none;
    }

    .project :global(h3 a) {
        color: var(--color-black);
        text-decoration-color: var(--color-secondary);
        text-decoration-thickness: 3px;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1300px) {
        .project {
            width: calc(33% - 13px);
        }
    }
    @media screen and (max-width: 1145px) {
        .project {
            width: calc(50% - 13px);
        }
    }

    @media screen and (max-width: 850px) {
        .project {
            width: 100%;
        }
    }
    @media screen and (max-width: 470px) {
        img {
            width: 10%;
        }
    }
</style>
