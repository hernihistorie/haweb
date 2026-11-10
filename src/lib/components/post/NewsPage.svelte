<script lang="ts">
    import Loc from "../Loc.svelte";
    import Avatar from "../Avatar.svelte";
    import AuthorBio from "../blog/AuthorBio.svelte";
    import PostAdjacentNav from "./PostAdjacentNav.svelte";
    import PostTranslationNote from "./PostTranslationNote.svelte";
    import LinkIcon from "@lucide/svelte/icons/link";
    import CheckIcon from "@lucide/svelte/icons/check";
    import copy from "copy-to-clipboard";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { formatPostDate } from "$src/lib/datetime";
    import { authorHref } from "$src/lib/posts";
    import type { NewsPost, Post } from "$src/types";
    import type { Snippet } from "svelte";

    type PostLink = Pick<Post, "id" | "slug" | "kind" | "title">;

    /** A news post laid out as a single expanded "status" card */
    interface Props {
        post: NewsPost;
        newer?: PostLink;
        older?: PostLink;
        /** Shown above the card, e.g. the backlink */
        top?: Snippet;
        /** The body of the post */
        children?: Snippet;
    }

    let { post, newer, older, top, children }: Props = $props();

    const authorUrl = $derived(localizeHref(authorHref(post.author)));

    let linkCopied = $state(false);
    function copyLink() {
        copy(window.location.href);
        linkCopied = true;
        setTimeout(() => (linkCopied = false), 2000);
    }
</script>

<div class="news-page">
    {@render top?.()}
    <div class="status">
        <header class="status-author">
            <Avatar
                href={authorUrl}
                img={post.author.image}
                imgDefault={{ alt: "Autor bez obrázku" }}
                size={48} />
            <a href={authorUrl} class="author"><Loc text={post.author.name} /></a>
        </header>
        <h2 class="news-title">
            <Loc text={post.title} />
        </h2>
        <div class="news-body">
            {@render children?.()}
        </div>
        <footer class="status-footer">
            <span>
                {#if post.date}
                    <time datetime={post.date.toString()}>{formatPostDate(post.date)}</time>
                {/if}
                <PostTranslationNote {post} />
            </span>
            <button class="link copy-link" onclick={copyLink} data-pagefind-ignore>
                {#if linkCopied}
                    <CheckIcon size={18} />
                    <Loc cs="Odkaz zkopírován" en="Link copied" />
                {:else}
                    <LinkIcon size={18} />
                    <Loc cs="Kopírovat odkaz" en="Copy link" />
                {/if}
            </button>
        </footer>
    </div>
    {#if !post.author.isDefault}
        <div class="author-bio">
            <AuthorBio author={post.author} kind={post.kind} secondary />
        </div>
    {/if}
    <PostAdjacentNav kind={post.kind} {newer} {older} />
</div>

<style>
    .news-page {
        max-width: 640px;
        margin: 2em auto 0;
    }

    .status {
        margin-top: 12px;
        padding: 20px 24px;
        background: var(--color-surface);
        border: 2px solid var(--color-secondary-transparent);
        border-radius: 16px;
    }

    .status-author {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .author {
        color: inherit;
        font-weight: bold;
        text-decoration: none;
    }

    .author:hover {
        text-decoration: underline;
    }

    .news-title {
        font-size: 28px;
        line-height: 1.25;
        text-transform: none;
        margin: 16px 0 8px;
    }

    .news-body {
        line-height: 1.45;
    }

    /* Only photos, not icons such as the one in <Arrow> */
    .news-body :global(figure img),
    .news-body :global(p > img) {
        border-radius: 12px;
    }

    .news-body :global(figure) {
        margin: 1em 0;
    }

    .status-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid var(--color-secondary-transparent);
        color: var(--color-text-muted);
    }

    .copy-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--color-primary);
        font-size: 0.9em;
    }

    .copy-link :global(.lucide-icon) {
        margin-bottom: 0;
    }

    .author-bio {
        margin-top: 2em;
    }

    @media only screen and (max-width: 600px) {
        .status {
            padding: 16px;
        }

        .news-title {
            font-size: 24px;
        }
    }
</style>
