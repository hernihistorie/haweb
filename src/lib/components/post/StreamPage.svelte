<script lang="ts">
    import Loc from "../Loc.svelte";
    import BulletPoint from "../BulletPoint.svelte";
    import StreamParts from "./StreamParts.svelte";
    import PlayIcon from "@lucide/svelte/icons/play";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { formatPostDate, formatTotalDuration } from "$src/lib/datetime";
    import { czechPlural, englishPlural } from "$src/lib/loc";
    import { postHref, streamDuration } from "$src/lib/posts";
    import type { Post } from "$src/types";
    import type { Stream } from "$src/data/video";
    import type { Snippet } from "svelte";

    /** A stream post, listing the videos it's made up of */
    interface Props {
        post: Post;
        stream: Stream;
        /** Shown above the title, e.g. the backlink */
        top?: Snippet;
        /** The description */
        children?: Snippet;
    }

    let { post, stream, top, children }: Props = $props();

    const count = $derived(stream.parts.length);
    const firstPart = $derived(stream.parts[0]);
</script>

<div class="stream">
    {@render top?.()}
    <h2 class="title"><Loc text={post.title} /></h2>
    <div class="facts">
        <time datetime={stream.event.date.toString()}>{formatPostDate(stream.event.date)}</time>
        {#if stream.event.place}
            <BulletPoint />
            <Loc text={stream.event.place} />
        {/if}
        <BulletPoint />
        <Loc
            cs={`${count} ${czechPlural(count, "video", "videa", "videí")}`}
            en={`${count} ${englishPlural(count, "video", "videos")}`} />
        <BulletPoint />
        {formatTotalDuration(streamDuration(stream))}
    </div>
    <div class="description">
        {@render children?.()}
    </div>
    {#if firstPart}
        <a href={localizeHref(postHref(firstPart))} class="play-all" data-pagefind-ignore>
            <PlayIcon size={18} fill="currentColor" />
            <Loc cs="Přehrát od začátku" en="Play from the start" />
        </a>
    {/if}
    <div class="parts" data-pagefind-ignore>
        <StreamParts parts={stream.parts} large />
    </div>
</div>

<style>
    .stream {
        max-width: 900px;
        margin: 0 auto;
    }

    .title {
        font-size: 32px;
        line-height: 1.2;
        text-transform: none;
        margin: 12px 0 4px;
    }

    .facts {
        color: var(--color-text-muted);
        font-weight: bold;
    }

    .description {
        line-height: 1.5;
    }

    .play-all {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        border-radius: 999px;
        background: var(--color-primary);
        color: var(--color-primary-contrast);
        font-weight: bold;
        text-decoration: none;
    }

    .play-all :global(.lucide-icon) {
        margin-bottom: 0;
    }

    .parts {
        margin-top: 24px;
    }
</style>
