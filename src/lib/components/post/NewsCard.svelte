<script lang="ts">
    import Avatar from "../Avatar.svelte";
    import Capsule from "../Capsule.svelte";
    import Loc from "../Loc.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { postHref } from "#lib/posts.js";
    import { formatPostDate, isDateInPast } from "$src/lib/datetime";
    import type { Post } from "$src/types";

    let { post }: { post: Post } = $props();

    const href = $derived(localizeHref(postHref(post)));
    const authorHref = $derived(localizeHref(`/authors/${post.author.slug}`));
    // Unpublished posts are only listed in dev
    const unpublished = $derived(!post.published || (post.date && !isDateInPast(post.date)));
</script>

<article class="news-card">
    <div class="avatar">
        <Avatar
            href={authorHref}
            img={post.author.image}
            imgDefault={{ alt: "Autor bez obrázku" }}
            inline />
    </div>
    <div class="body">
        <header>
            <a href={authorHref} class="author"><Loc text={post.author.name} /></a>
            {#if post.date}
                <span class="date">
                    &middot; <time datetime={post.date.toString()}
                        >{formatPostDate(post.date)}</time>
                </span>
            {/if}
            {#if unpublished}
                <Capsule><Loc cs="nepublikováno" en="unpublished" /></Capsule>
            {/if}
        </header>
        <h3>
            <a {href}><Loc text={post.title} /></a>
        </h3>
        {#if post.description_html}
            <div class="text">
                <Loc text={post.description_html} />
            </div>
        {/if}
        {#if post.image}
            <img src={post.image} alt="" loading="lazy" decoding="async" />
        {/if}
    </div>
</article>

<style>
    .news-card {
        position: relative;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        /* The inline avatar brings its own 8px margin */
        gap: 4px;
        padding: 16px;
        background: var(--color-surface);
        border: 2px solid var(--color-secondary-transparent);
        border-radius: 16px;
        transition: border-color 0.15s ease;
    }

    .news-card:hover,
    .news-card:focus-within {
        border-color: var(--color-secondary);
    }

    /* Avatar and author links sit above the title's stretched link */
    .avatar,
    .author {
        position: relative;
        z-index: 1;
    }

    header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 6px;
        line-height: 1.3;
    }

    .author {
        color: inherit;
        font-weight: bold;
        text-decoration: none;
    }

    .author:hover {
        text-decoration: underline;
    }

    .date {
        color: var(--color-text-muted);
    }

    header :global(.capsule) {
        margin-bottom: 0;
    }

    h3 {
        font-size: 1em;
        line-height: 1.3;
        margin: 4px 0;
    }

    h3 a {
        color: inherit;
        text-decoration: none;
    }

    /* Make the whole card clickable */
    h3 a::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 16px;
    }

    .news-card:hover h3 a {
        text-decoration: underline;
        text-decoration-color: var(--color-secondary);
    }

    .text {
        line-height: 1.4;
    }

    img {
        display: block;
        box-sizing: border-box;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        margin-top: 12px;
        border: 1px solid var(--color-secondary-transparent);
        border-radius: 12px;
    }

    @media only screen and (max-width: 500px) {
        .news-card {
            padding: 12px;
        }
    }
</style>
