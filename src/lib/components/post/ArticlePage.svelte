<script lang="ts">
    import Loc from "../Loc.svelte";
    import Avatar from "../Avatar.svelte";
    import AuthorBio from "../blog/AuthorBio.svelte";
    import ArticleKicker from "./ArticleKicker.svelte";
    import PostAdjacentNav from "./PostAdjacentNav.svelte";
    import PostTranslationNote from "./PostTranslationNote.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { formatPostDate } from "$src/lib/datetime";
    import { authorHref } from "$src/lib/posts";
    import type { ArticlePost, Post, PostSeries } from "$src/types";
    import type { Snippet } from "svelte";

    type PostLink = Pick<Post, "id" | "slug" | "kind" | "title">;

    /** An article with an editorial header followed by comfortable long-form text */
    interface Props {
        post: ArticlePost;
        series: PostSeries[] | null;
        newer?: PostLink;
        older?: PostLink;
        /** Shown above the kicker, e.g. the backlink */
        top?: Snippet;
        /** The body of the article */
        children?: Snippet;
    }

    let { post, series, newer, older, top, children }: Props = $props();

    const authorUrl = $derived(localizeHref(authorHref(post.author)));
</script>

<div class="article-page">
    <header class="article-header">
        {@render top?.()}
        <div class="article-kicker">
            <ArticleKicker
                {post}
                seriesHref={series?.[0] ? `#series-${series[0].slug}` : undefined} />
        </div>
        <h2 class="article-title">
            <Loc text={post.title} />
        </h2>
        <div class="byline">
            <Avatar
                href={authorUrl}
                img={post.author.image}
                imgDefault={{ alt: "Autor bez obrázku" }}
                size={48} />
            <div>
                <a href={authorUrl} class="author"><Loc text={post.author.name} /></a>
                <div class="byline-date">
                    {#if post.date}
                        <time datetime={post.date.toString()}>{formatPostDate(post.date)}</time>
                    {/if}
                    <PostTranslationNote {post} />
                </div>
            </div>
        </div>
    </header>
    <div class="article-body">
        {@render children?.()}
    </div>
    <hr />
    {#if !post.author.isDefault}
        <AuthorBio author={post.author} kind={post.kind} secondary />
    {/if}
    <PostAdjacentNav kind={post.kind} {newer} {older} />
</div>

<style>
    .article-page {
        max-width: 720px;
        margin: 2em auto 0;
    }

    .article-header {
        margin-bottom: 2em;
    }

    .article-kicker {
        margin-top: 0.6em;
    }

    .article-title {
        font-size: 44px;
        line-height: 1.1;
        margin: 0em 0 0.5em;
    }

    .byline {
        display: flex;
        align-items: center;
        gap: 8px;
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

    .byline-date {
        color: var(--color-text-muted);
        font-size: 0.9em;
    }

    .article-body {
        line-height: 1.6;
    }

    .article-body :global(h2),
    .article-body :global(h3),
    .article-body :global(h4) {
        line-height: 1.25;
    }

    hr {
        margin: 2em 0;
    }

    @media only screen and (max-width: 600px) {
        .article-title {
            font-size: 32px;
        }
    }
</style>
