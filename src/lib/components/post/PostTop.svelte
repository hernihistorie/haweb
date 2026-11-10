<script lang="ts">
    import Loc from "../Loc.svelte";
    import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
    import CircleAlertIcon from "@lucide/svelte/icons/circle-alert";
    import { Temporal } from "@js-temporal/polyfill";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { isPostPublished } from "$src/lib/datetime";
    import { postHref, postKindHref, postKinds } from "$src/lib/posts";
    import type { Post, StreamPost } from "$src/types";

    /** The backlink at the top of a post, and a notice if the post isn't published */
    let { post, stream = null }: { post: Post; stream?: StreamPost | null } = $props();

    const kindInfo = $derived(postKinds[post.kind]);
    const postYear = $derived(post.date?.year);
    const isOlderThanAYear = $derived(
        post.date
            ? Temporal.PlainDate.from(post.date).until(Temporal.Now.plainDateISO()).total("days") >
                  365
            : false,
    );
    // Link to the year page if the post would no longer be among the latest ones
    const backlinkYear = $derived(
        kindInfo.hasYears && isOlderThanAYear && postYear ? postYear : null,
    );
    const backlinkHref = $derived(
        localizeHref(
            stream
                ? postHref(stream)
                : backlinkYear
                  ? `${postKindHref(post.kind)}/${backlinkYear}`
                  : postKindHref(post.kind),
        ),
    );
    const unpublished = $derived(!isPostPublished(post));
</script>

<a href={backlinkHref} class="backlink" data-pagefind-ignore>
    <ArrowLeftIcon size={18} />
    {#if stream}
        <Loc text={stream.title} />
    {:else}
        <Loc text={kindInfo.longTitle} />{#if backlinkYear}&nbsp;({backlinkYear}){/if}
    {/if}
</a>
{#if unpublished}
    <div class="unpublished-notice">
        <CircleAlertIcon />
        <Loc cs="Tento příspěvek zatím není publikován." en="This post is not published yet." />
    </div>
{/if}

<style>
    .backlink {
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .backlink :global(.lucide-icon) {
        margin-bottom: 0;
    }

    .unpublished-notice {
        border: 2px solid var(--color-text);
        padding: 0.5em 1em;
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: bold;
    }
</style>
