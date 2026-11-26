<script lang="ts">
    import Arrow from "$src/lib/components/Arrow.svelte";
    import ImageTitle from "$src/lib/components/ImageTitle.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import type { Snippet } from "svelte";
    import type { PlaceholderPicture } from "$src/types";
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
        /** Shown along with the heading */
        img?: PlaceholderPicture;
        project?: boolean;
    } = $props();

    // Follows the widths of .project
    const sizes = [
        { media: "(min-width: 1301px)", width: "min(25vw, 330px)" },
        { media: "(min-width: 1146px)", width: "33vw" },
        { media: "(min-width: 851px)", width: "50vw" },
        { width: "100vw" },
    ];

    let localizedHref = $derived(
        href && href.startsWith("/") && !href.startsWith("//") ? localizeHref(href) : href,
    );
</script>

<div class="project">
    {#if img && heading}
        <a href={localizedHref} class="image">
            <ImageTitle image={img} alt={title} {sizes} lazy>{@render heading()}</ImageTitle>
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
        color: var(--color-text);
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
</style>
