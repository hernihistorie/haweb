<script lang="ts">
    import Capsule from "../Capsule.svelte";
    import BulletPoint from "../BulletPoint.svelte";
    import Loc from "../Loc.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { authorHref, postHref } from "#lib/posts.js";
    import { formatPostDate, isPostPublished } from "$src/lib/datetime";
    import ArticleKicker from "./ArticleKicker.svelte";
    import type { Post } from "$src/types";

    let { post, featured = false }: { post: Post; featured?: boolean } = $props();

    const href = $derived(localizeHref(postHref(post)));
    // Unpublished posts are only listed in dev
    const unpublished = $derived(!isPostPublished(post));
</script>

<article class="article-card" class:featured>
    <a {href} class="image" tabindex="-1" aria-hidden="true">
        {#if post.image}
            <img src={post.image} alt="" loading="lazy" decoding="async" />
        {:else}
            <div class="placeholder">
                <img src="/images/ha_logo_secondary.png" alt="" />
            </div>
        {/if}
    </a>
    <div class="text">
        <ArticleKicker {post} {featured} />
        <h3>
            <a {href}><Loc text={post.title} /></a>
        </h3>
        {#if unpublished}
            <Capsule><Loc cs="nepublikováno" en="unpublished" /></Capsule>
        {/if}
        {#if post.description_html}
            <div class="description">
                <Loc text={post.description_html} />
            </div>
        {/if}
        <div class="byline">
            <a href={localizeHref(authorHref(post.author))} class="author">
                <Loc text={post.author.name} />
            </a>
            {#if post.date}
                <BulletPoint />
                <time datetime={post.date.toString()}>{formatPostDate(post.date)}</time>
            {/if}
        </div>
    </div>
</article>

<style>
    .article-card {
        display: grid;
        grid-template-columns: 16em minmax(0, 1fr);
        gap: 32px;
        align-items: start;
    }

    .image {
        display: block;
    }

    .image > img,
    .placeholder {
        display: block;
        box-sizing: border-box;
        width: 100%;
        aspect-ratio: 16 / 10;
        object-fit: cover;
        border: 2px solid var(--color-secondary);
    }

    .placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-secondary-transparent);
    }

    .placeholder img {
        width: 30%;
        opacity: 0.6;
    }

    h3 {
        font-size: 28px;
        margin: 0 0 0.4em 0;
        line-height: 1.2;
    }

    h3 a {
        color: var(--color-text);
        text-transform: uppercase;
        text-decoration-color: var(--color-secondary);
        text-decoration-thickness: 3px;
        text-underline-offset: 4px;
    }

    h3 a:hover {
        color: var(--color-primary);
    }

    .text > :global(.capsule) {
        margin-bottom: 0.6em;
    }

    .description {
        line-height: 1.45;
    }

    .byline {
        margin-top: 0.8em;
        color: var(--color-text-muted);
        font-size: 0.9em;
    }

    .author {
        color: inherit;
        font-weight: bold;
        text-decoration: none;
    }

    .author:hover {
        text-decoration: underline;
    }

    .featured {
        grid-template-columns: 24em minmax(0, 1fr);
        align-items: center;
    }

    .featured h3 {
        font-size: 32px;
    }

    @media screen and (max-width: 900px) {
        .featured {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
        }
    }

    @media screen and (max-width: 700px) {
        .article-card {
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
        }

        h3,
        .featured h3 {
            font-size: 26px;
        }
    }
</style>
