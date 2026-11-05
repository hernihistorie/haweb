<script lang="ts">
    import Loc from "../Loc.svelte";
    import Footnotes from "../footnote/Footnotes.svelte";
    import ArticlePage from "./ArticlePage.svelte";
    import NewsPage from "./NewsPage.svelte";
    import PostHead from "./PostHead.svelte";
    import PostSeriesInfo from "./PostSeriesInfo.svelte";
    import PostTop from "./PostTop.svelte";
    import StreamPage from "./StreamPage.svelte";
    import VideoWatch from "./VideoWatch.svelte";
    import type { Post, PostOfKind, PostSeries, StreamPost } from "$src/types";
    import type { Snippet } from "svelte";
    import { FootnoteHolder, setFootnoteContext } from "../footnote/context";

    const footnotes = setFootnoteContext(new FootnoteHolder());

    type PostLink = Pick<Post, "id" | "slug" | "kind" | "title">;

    /** What all posts have in common, around the layout of the post's kind */
    interface Props {
        post: Post;
        series: PostSeries[] | null;
        newer?: PostLink;
        older?: PostLink;
        /** Other videos, for the sidebar of a video post */
        related?: PostOfKind<"video">[];
        /** The stream a video post is a part of */
        stream?: StreamPost | null;
        children?: Snippet;
        /** Transcript of a presentation, shown collapsed after the body */
        transcript?: Snippet;
    }

    let {
        post,
        series,
        newer,
        older,
        related = [],
        stream = null,
        children,
        transcript,
    }: Props = $props();
</script>

<PostHead {post} {stream} />

{#snippet top()}
    <PostTop {post} {stream} />
{/snippet}

{#snippet body()}
    {@render children?.()}
    {#if transcript}
        <details class="transcript">
            <summary>
                <h2><Loc cs="Přepis přednášky" en="Transcript" /></h2>
            </summary>
            {@render transcript()}
        </details>
    {/if}
    {#each series ?? [] as s (s.slug)}
        <PostSeriesInfo series={s} {post} />
    {/each}
    {#if footnotes.footnotes.length > 0}
        <hr />
        <Footnotes />
    {/if}
{/snippet}

<article class="post-page" data-pagefind-ignore={post.published ? undefined : "true"}>
    {#if post.kind === "news"}
        <NewsPage {post} {newer} {older} {top} children={body} />
    {:else if post.kind === "article"}
        <ArticlePage {post} {series} {newer} {older} {top} children={body} />
    {:else if post.stream}
        <StreamPage {post} {top} children={body} />
    {:else}
        <VideoWatch {post} {related} {stream} {top} children={body} />
    {/if}
</article>

<style>
    .transcript {
        margin: 2em 0;
    }

    .transcript summary {
        cursor: pointer;
    }

    .transcript summary h2 {
        display: inline;
    }

    .post-page :global(img) {
        max-width: 100%;
    }

    hr {
        margin: 2em 0;
    }
</style>
