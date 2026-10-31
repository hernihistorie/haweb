<script lang="ts">
    import Youtube from "svelte-youtube-embed";
    import Loc from "../Loc.svelte";
    import Avatar from "../Avatar.svelte";
    import BulletPoint from "../BulletPoint.svelte";
    import VideoCard from "./VideoCard.svelte";
    import PresentationIcon from "@lucide/svelte/icons/presentation";
    import DownloadIcon from "@lucide/svelte/icons/download";
    import YoutubeIcon from "@lucide/svelte/icons/youtube";
    import VideoOffIcon from "@lucide/svelte/icons/video-off";
    import LinkIcon from "@lucide/svelte/icons/link";
    import CheckIcon from "@lucide/svelte/icons/check";
    import copy from "copy-to-clipboard";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { formatPostDate } from "$src/lib/datetime";
    import { loc } from "$src/lib/loc";
    import { authorHref, eventHref, hasSlidesViewer, postImage, slidesHref } from "$src/lib/posts";
    import type { Post } from "$src/types";
    import type { Video } from "$src/data/video";
    import type { Snippet } from "svelte";

    /** A video post laid out like a YouTube watch page */
    interface Props {
        post: Post;
        video: Video;
        /** Other videos for the sidebar */
        related: Post[];
        /** Shown above the player, e.g. the backlink */
        top?: Snippet;
        /** The description */
        children?: Snippet;
    }

    let { post, video, related, top, children }: Props = $props();

    const authorUrl = $derived(localizeHref(authorHref(post.author)));
    const presentation = $derived(post.talk);
    const event = $derived(presentation?.event);
    const slides = $derived(presentation?.slides);
    // Shown behind the notice when the recording is missing
    const image = $derived(postImage(post));

    let linkCopied = $state(false);
    function copyLink() {
        copy(window.location.href);
        linkCopied = true;
        setTimeout(() => (linkCopied = false), 2000);
    }
</script>

<div class="watch">
    <div class="primary">
        {@render top?.()}
        <div class="player">
            <!-- Recreate the embed when navigating between videos, so the previous
                 thumbnail or player doesn't linger while the new one loads -->
            {#if video.youtubeId}
                {#key video.youtubeId}
                    <Youtube id={video.youtubeId} />
                {/key}
            {:else}
                <div class="missing" class:with-image={image}>
                    {#if image}
                        <img src={image} alt="" />
                    {/if}
                    <VideoOffIcon size={48} />
                    <span><Loc cs="Záznam chybí" en="Recording missing" /></span>
                </div>
            {/if}
        </div>
        <h2 class="title"><Loc text={post.title} /></h2>

        <div class="owner-row">
            <div class="owner">
                {#key post.author.slug}
                    <Avatar
                        href={authorUrl}
                        img={post.author.image}
                        imgDefault={{ alt: "Autor bez obrázku" }}
                        size={40}
                    />
                {/key}
                <div>
                    <a href={authorUrl} class="author"><Loc text={post.author.name} /></a>
                    <!-- Not when the author is the channel itself -->
                    {#if video.channel && video.channel.name !== loc(post.author.name)}
                        <div class="channel">
                            <Loc cs="Kanál" en="Channel" />
                            <a href={video.channel.url}>{video.channel.name}</a>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="actions" data-pagefind-ignore>
                {#if slides && hasSlidesViewer(presentation)}
                    <a href={localizeHref(slidesHref(post))} class="pill">
                        <PresentationIcon size={18} />
                        <Loc cs="Slajdy" en="Slides" />
                    </a>
                    <a href={slides.url} class="pill" download>
                        <DownloadIcon size={18} />
                        PDF
                    </a>
                {:else if slides}
                    <a href={slides.url} class="pill">
                        <PresentationIcon size={18} />
                        <Loc cs="Slajdy" en="Slides" />
                    </a>
                {/if}
                {#if video.youtubeId}
                    <a href="https://www.youtube.com/watch?v={video.youtubeId}" class="pill">
                        <YoutubeIcon size={18} />
                        YouTube
                    </a>
                {/if}
                <button class="link pill" onclick={copyLink}>
                    {#if linkCopied}
                        <CheckIcon size={18} />
                        <Loc cs="Zkopírováno" en="Copied" />
                    {:else}
                        <LinkIcon size={18} />
                        <Loc cs="Odkaz" en="Link" />
                    {/if}
                </button>
            </div>
        </div>

        <div class="description">
            <div class="facts">
                {#if post.date}
                    <time datetime={post.date.toString()}>{formatPostDate(post.date)}</time>
                {/if}
                {#if event}
                    <BulletPoint />
                    <Loc cs="Přednáška na události" en="Talk at" />
                    <a href={localizeHref(eventHref(event))}><Loc text={event.name} /></a>
                    {#if event.place}
                        <BulletPoint />
                        <Loc text={event.place} />
                    {/if}
                {/if}
            </div>
            {@render children?.()}
        </div>
    </div>

    {#if related.length}
        <aside class="secondary" data-pagefind-ignore>
            <h3><Loc cs="Další videa" en="More videos" /></h3>
            <div class="related">
                {#each related as relatedPost (relatedPost.id)}
                    <VideoCard post={relatedPost} compact />
                {/each}
            </div>
        </aside>
    {/if}
</div>

<style>
    .watch {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 400px;
        gap: 24px;
        align-items: start;
    }

    .player {
        margin-top: 12px;
        border-radius: 12px;
        overflow: hidden;
    }

    .missing {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        aspect-ratio: 16 / 9;
        background: var(--color-secondary-transparent);
        color: var(--color-text-muted);
        font-size: 1.2em;
        font-weight: bold;
    }

    .missing :global(.lucide-icon) {
        margin: 0;
    }

    .missing.with-image {
        position: relative;
        background: black;
        color: white;
        text-shadow: 0 1px 4px black;
    }

    .missing img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.35;
    }

    /* Above the image */
    .missing.with-image > :not(img) {
        position: relative;
    }

    .title {
        font-size: 26px;
        line-height: 1.25;
        text-transform: none;
        margin: 12px 0 8px;
    }

    .owner-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
    }

    .owner {
        display: flex;
        align-items: center;
        gap: 12px;
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

    .channel {
        color: var(--color-text-muted);
        font-size: 0.85em;
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin: 0;
        padding: 6px 14px;
        border: none;
        border-radius: 999px;
        background: color-mix(in srgb, var(--color-secondary) 20%, transparent);
        color: var(--color-text);
        font-size: 0.95em;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
    }

    .pill:hover {
        background: color-mix(in srgb, var(--color-secondary) 35%, transparent);
        text-decoration: none;
    }

    .pill :global(.lucide-icon) {
        margin-bottom: 0;
    }

    .description {
        margin-top: 12px;
        padding: 12px 16px;
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-secondary) 15%, transparent);
        line-height: 1.5;
    }

    .description :global(p:first-of-type) {
        margin-top: 0.5em;
    }

    .description :global(p:last-child) {
        margin-bottom: 0;
    }

    .facts {
        font-weight: bold;
    }

    .facts a {
        color: inherit;
    }

    .secondary h3 {
        font-size: 18px;
        margin: 0 0 12px;
    }

    .related {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    @media screen and (max-width: 1000px) {
        .watch {
            grid-template-columns: minmax(0, 1fr);
        }
    }

    @media only screen and (max-width: 600px) {
        .title {
            font-size: 22px;
        }
    }
</style>
