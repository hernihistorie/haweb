<script lang="ts">
    import Capsule from "../Capsule.svelte";
    import BulletPoint from "../BulletPoint.svelte";
    import Loc from "../Loc.svelte";
    import PlayIcon from "@lucide/svelte/icons/play";
    import VideoOffIcon from "@lucide/svelte/icons/video-off";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { postHref, postImage } from "#lib/posts.js";
    import { formatPostDate, isPostPublished } from "$src/lib/datetime";
    import type { Post } from "$src/types";

    /**
     * A video thumbnail with the title below, in the style of YouTube.
     * Compact cards have the title beside the thumbnail, for sidebars.
     * Large compact cards have bigger text, for listing videos in page content.
     */
    let {
        post,
        compact = false,
        large = false,
    }: { post: Post; compact?: boolean; large?: boolean } = $props();

    const href = $derived(localizeHref(postHref(post)));
    const image = $derived(postImage(post));
    const event = $derived(post.talk?.event);
    // Unpublished posts are only listed in dev
    const unpublished = $derived(!isPostPublished(post));
</script>

<a {href} class="video-card" class:compact class:large>
    <div class="thumbnail">
        {#if image}
            <img src={image} alt="" loading="lazy" decoding="async" />
        {/if}
        {#if post.video?.youtubeId}
            <span class="play"><PlayIcon fill="currentColor" /></span>
        {:else if image}
            <!-- e.g. a slide standing in for the recording -->
            <span class="missing-badge">
                <VideoOffIcon size={14} />
                <Loc cs="Záznam chybí" en="Recording missing" />
            </span>
        {:else}
            <div class="missing">
                <VideoOffIcon />
                <Loc cs="Záznam chybí" en="Recording missing" />
            </div>
        {/if}
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

    .thumbnail img,
    .missing {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 12px;
        background: var(--color-secondary-transparent);
    }

    .missing {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.3em;
        color: var(--color-text-muted);
        font-size: 0.9em;
        font-weight: bold;
    }

    .missing-badge {
        position: absolute;
        right: 6px;
        bottom: 6px;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 2px 6px;
        border-radius: 4px;
        background: rgb(0 0 0 / 0.8);
        color: white;
        font-size: 0.8em;
        font-weight: bold;
    }

    .missing :global(.lucide-icon),
    .missing-badge :global(.lucide-icon) {
        margin: 0;
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

    .compact .thumbnail img,
    .compact .missing {
        border-radius: 8px;
    }

    .compact .missing,
    .compact .missing-badge {
        font-size: 0.7em;
    }

    .compact .missing-badge {
        right: 4px;
        bottom: 4px;
    }

    .compact .missing :global(svg) {
        width: 18px;
        height: 18px;
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

    /* Sized so the text is about as tall as the thumbnail */
    .compact.large {
        gap: 12px;
    }

    .compact.large h3 {
        font-size: 22px;
        margin-bottom: 0.4em;
    }

    .compact.large .meta {
        font-size: 1em;
    }

    /* Too narrow for the text beside the thumbnail, so stack them like a regular card */
    @media screen and (max-width: 600px) {
        .compact.large {
            display: block;
        }

        .compact.large .thumbnail img,
        .compact.large .missing {
            border-radius: 12px;
        }

        .compact.large .play {
            width: 3em;
            height: 3em;
        }

        .compact.large .play :global(svg) {
            width: 24px;
            height: 24px;
        }

        .compact.large h3 {
            margin-top: 0.6em;
        }
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
