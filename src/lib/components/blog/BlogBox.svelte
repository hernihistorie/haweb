<script lang="ts">
    import Lazy from "svelte-lazy";
    import Arrow from "$src/lib/components/Arrow.svelte";
    import type { Post } from "$src/types";
    import type { Snippet } from "svelte";
    import Loc from "../Loc.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import BulletPoint from "../BulletPoint.svelte";
    import { postHref } from "#lib/posts.js";
    let {
        blogPost,
        children,
        show_arrow = true,
    }: { blogPost: Post; children?: Snippet; show_arrow?: boolean } = $props();

    let url = $derived(postHref(blogPost));
    let localizedUrl = $derived(localizeHref(url));
    // Articles are shown as wide boxes with the image next to the text
    let horizontal = $derived(blogPost.kind === "article");
</script>

<div class="blog-box" class:horizontal>
    <a href={localizedUrl} class="image">
        {#if blogPost.image}
            <Lazy height={horizontal ? "calc(9em + 4px)" : "calc(6em + 4px)"} keep={true}>
                <img src={blogPost.image} alt="" />
            </Lazy>
        {:else}
            <!-- <div class="img-placeholder">
            </div> -->
        {/if}
    </a>
    <div class="text">
        {#if blogPost.title}
            <h3>
                <a href={localizedUrl}>
                    <Loc text={blogPost.title} />
                </a>
            </h3>
        {/if}
        {#if children}
            {@render children?.()}
        {:else if blogPost.description_html}
            <Loc text={blogPost.description_html} />
        {/if}
        <div
            style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;"
        >
            <div>
                {#if show_arrow}
                    <Arrow href={url} />
                {/if}
            </div>
            <div class="author-date">
                <author>
                    <Loc text={blogPost.author.name} />
                </author>
                <BulletPoint />
                <date>
                    {#if blogPost.date}
                        {blogPost.date.day}.&nbsp;{blogPost.date.month}.&nbsp;{blogPost.date.year}
                    {/if}
                </date>
            </div>
        </div>
    </div>
</div>

<style>
    img {
        /* width: 100%; */
        /* aspect-ratio: 10/3; */
        box-sizing: border-box;
        width: 100%;
        height: 6em;
        object-fit: cover;
        border: 2px solid var(--color-secondary);
    }

    /* .img-placeholder {
        border: 2px solid var(--color-secondary);
    } */

    .blog-box {
        width: calc(32% - 24px);
    }

    .blog-box.horizontal {
        width: 100%;
        max-width: 60em;
        display: flex;
        gap: 24px;
    }

    .horizontal .image {
        flex: 0 0 14em;
    }

    .horizontal img {
        height: 9em;
    }

    .horizontal .text {
        flex: 1;
        min-width: 0;
    }

    .blog-box h3 {
        margin-top: 0;
    }

    /* News cards are kept compact, so they're easy to tell apart from projects and articles */
    .blog-box:not(.horizontal) h3 {
        font-size: 22px;
        margin-bottom: 0.6em;
    }

    .blog-box h3 a {
        color: var(--color-black);
        text-decoration-color: var(--color-secondary);
        text-decoration-thickness: 3px;
        text-transform: uppercase;
    }

    .author-date {
        margin-left: 8px;
    }

    @media screen and (max-width: 1200px) {
        .blog-box {
            width: 100%;
        }
    }

    @media screen and (max-width: 700px) {
        .blog-box.horizontal {
            flex-direction: column;
            gap: 0;
        }

        .horizontal .image {
            flex-basis: auto;
        }

        .horizontal img {
            height: 8em;
        }
    }
</style>
