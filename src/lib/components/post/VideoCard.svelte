<script lang="ts">
    import Capsule from "../Capsule.svelte";
    import BulletPoint from "../BulletPoint.svelte";
    import Loc from "../Loc.svelte";
    import PlayIcon from "@lucide/svelte/icons/play";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { postHref, postImage } from "#lib/posts.js";
    import { formatPostDate, isPostPublished } from "$src/lib/datetime";
    import type { Post } from "$src/types";

    /**
     * A video thumbnail with the title below, in the style of YouTube.
     * Compact cards have the title beside the thumbnail, for sidebars.
     */
    let { post, compact = false }: { post: Post; compact?: boolean } = $props();

    const href = $derived(localizeHref(postHref(post)));
    const event = $derived(post.talk?.event);
    // Unpublished posts are only listed in dev
    const unpublished = $derived(!isPostPublished(post));
</script>

<a {href} class="video-card" class:compact>
    <div class="thumbnail">
        <img src={postImage(post)} alt="" loading="lazy" decoding="async" />
        <span class="play"><PlayIcon fill="currentColor" /></span>
    </div>
    <div class="text">
        <h3><Loc text={post.title} /></h3>
        {#if unpublished}
            <Capsule><Loc cs="nepublikováno" en="unpublished" /></Capsule>
        {/if}
        <div class="meta">
            {#if event}
                <div>
                    <Loc cs="Přednáška" en="Talk" />
                    <BulletPoint />
                    <Loc text={event.shortName ?? event.name} />
                </div>
            {/if}
            <div>
                {#if !post.author.isDefault}
                    <span class="author"><Loc text={post.author.name} /></span>
                {/if}
                {#if post.date}
                    <!-- Keep the bullet with the date when the line wraps -->
                    <span class="date">
                        {#if !post.author.isDefault}<BulletPoint />{/if}
                        <time datetime={post.date.toString()}>{formatPostDate(post.date)}</time>
                    </span>
                {/if}
            </div>
        </div>
    </div>
</a>

<style>
    .video-card {
        display: block;
        color: var(--color-text);
        text-decoration: none;
    }

    .thumbnail {
        position: relative;
        display: block;
    }

    .thumbnail img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 12px;
        background: var(--color-secondary-transparent);
    }

    .play {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background: var(--color-primary);
        color: var(--color-primary-contrast);
        box-shadow: 0 2px 8px rgb(0 0 0 / 0.3);
    }

    .play :global(.lucide-icon) {
        margin: 0 0 0 0.15em;
    }

    h3 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 18px;
        line-height: 1.3;
        margin: 0.6em 0 0.3em;
    }

    .video-card:hover h3 {
        color: var(--color-primary);
    }

    .text > :global(.capsule) {
        margin-bottom: 0.3em;
    }

    .compact {
        display: grid;
        grid-template-columns: 168px minmax(0, 1fr);
        gap: 8px;
        align-items: start;
    }

    .compact .thumbnail img {
        border-radius: 8px;
    }

    .compact .play {
        width: 28px;
        height: 28px;
    }

    .compact .play :global(svg) {
        width: 14px;
        height: 14px;
    }

    .compact h3 {
        font-size: 15px;
        margin: 0 0 0.2em;
    }

    .compact .meta {
        font-size: 0.8em;
    }

    .meta {
        color: var(--color-text-muted);
        font-size: 0.9em;
        line-height: 1.4;
    }

    .author {
        font-weight: bold;
    }

    .date {
        white-space: nowrap;
    }
</style>
