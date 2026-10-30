<script lang="ts">
    import Loc from "../Loc.svelte";
    import Avatar from "../Avatar.svelte";
    import BulletPoint from "../BulletPoint.svelte";
    import Meta from "../layout/Meta.svelte";
    import AuthorBio from "../blog/AuthorBio.svelte";
    import Footnotes from "../footnote/Footnotes.svelte";
    import PostAdjacentNav from "./PostAdjacentNav.svelte";
    import ArticleKicker from "./ArticleKicker.svelte";
    import type { Post as PostType, PostSeries } from "$src/types";
    import type { Snippet } from "svelte";
    import { getLocale, localizeHref } from "#lib/paraglide/runtime.js";
    import { FootnoteHolder, setFootnoteContext } from "../footnote/context";
    import CircleAlertIcon from "@lucide/svelte/icons/circle-alert";
    import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
    import LinkIcon from "@lucide/svelte/icons/link";
    import CheckIcon from "@lucide/svelte/icons/check";
    import copy from "copy-to-clipboard";
    import { Temporal } from "@js-temporal/polyfill";
    import { loc } from "$src/lib/loc";
    import { formatPostDate, isPostPublished } from "$src/lib/datetime";
    import { authorHref, postHref, postKindHref, postKinds } from "$src/lib/posts";

    const footnotes = setFootnoteContext(new FootnoteHolder());

    type PostLink = Pick<PostType, "id" | "slug" | "kind" | "title">;

    interface Props {
        post: PostType;
        series: PostSeries[] | null;
        newer?: PostLink;
        older?: PostLink;
        children?: Snippet;
    }

    let { post, series, newer, older, children }: Props = $props();

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
            backlinkYear ? `${postKindHref(post.kind)}/${backlinkYear}` : postKindHref(post.kind),
        ),
    );
    const authorUrl = $derived(localizeHref(authorHref(post.author)));
    const unpublished = $derived(!isPostPublished(post));
    const translationDate = $derived(
        getLocale() === "en" ? post.english_translation_date : undefined,
    );

    let linkCopied = $state(false);
    function copyLink() {
        copy(window.location.href);
        linkCopied = true;
        setTimeout(() => (linkCopied = false), 2000);
    }
</script>

{#if post.published}
    <Meta title={post.title} />
{:else}
    <Meta title={""} noindex={true} />
{/if}

<svelte:head>
    <meta property="og:title" content={loc(post.title)} />
    <meta property="og:type" content="article" />
    <meta property="og:article:author" content={loc(post.author.name)} />
    {#if post.date}
        <meta property="og:article:published_time" content={post.date.toString()} />
    {/if}
    {#if post.description_html}
        <meta property="og:description" content={loc(post.description_html)} />
    {/if}
    {#if post.image}
        <meta property="og:image" content={post.image} data-pagefind-meta="image[content]" />
    {/if}
    <meta property="og:locale" content={getLocale()} />
</svelte:head>

{#snippet backlink()}
    <a href={backlinkHref} class="backlink" data-pagefind-ignore>
        <ArrowLeftIcon size={18} />
        <Loc text={kindInfo.longTitle} />{#if backlinkYear}&nbsp;({backlinkYear}){/if}
    </a>
{/snippet}

{#snippet unpublishedNotice()}
    {#if unpublished}
        <div class="unpublished-notice">
            <CircleAlertIcon />
            <Loc cs="Tento příspěvek zatím není publikován." en="This post is not published yet." />
        </div>
    {/if}
{/snippet}

{#snippet translationNote()}
    {#if translationDate}
        <BulletPoint />
        Translation:
        <time datetime={translationDate.toString()}>{formatPostDate(translationDate)}</time>
    {/if}
{/snippet}

{#snippet seriesAndFootnotes()}
    {#each series ?? [] as s (s.slug)}
        <div class="series-info" id="series-{s.slug}">
            <span class="series-label">
                <Loc cs="Série příspěvků" en="Post series" />
            </span>
            <h3 class="text-uppercase"><Loc text={s.title} /></h3>
            {#if s.description}
                <p>
                    <Loc text={s.description} />
                </p>
            {/if}
            <ol>
                {#each s.posts as blogPost (blogPost.id)}
                    <li>
                        {#if blogPost.id === post.id}
                            <strong>
                                <Loc text={post.title} />
                            </strong>
                        {:else}
                            <a href={localizeHref(postHref(blogPost))}>
                                <Loc text={blogPost.title} />
                            </a>
                        {/if}
                    </li>
                {/each}
            </ol>
        </div>
    {/each}
    {#if footnotes.footnotes.length > 0}
        <hr />
        <Footnotes />
    {/if}
{/snippet}

<article class="post-page {post.kind}" data-pagefind-ignore={post.published ? undefined : "true"}>
    {#if post.kind === "news"}
        {@render backlink()}
        {@render unpublishedNotice()}
        <div class="status">
            <header class="status-author">
                <Avatar
                    href={authorUrl}
                    img={post.author.image}
                    imgDefault={{ alt: "Autor bez obrázku" }}
                    size={48}
                />
                <a href={authorUrl} class="author"><Loc text={post.author.name} /></a>
            </header>
            <h2 class="news-title">
                <Loc text={post.title} />
            </h2>
            <div class="news-body">
                {@render children?.()}
                {@render seriesAndFootnotes()}
            </div>
            <footer class="status-footer">
                <span>
                    {#if post.date}
                        <time datetime={post.date.toString()}>{formatPostDate(post.date)}</time>
                    {/if}
                    {@render translationNote()}
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
    {:else}
        <header class="article-header">
            {@render backlink()}
            {@render unpublishedNotice()}
            <div class="article-kicker">
                <ArticleKicker
                    {post}
                    seriesHref={series?.[0] ? `#series-${series[0].slug}` : undefined}
                />
            </div>
            <h2 class="article-title">
                <Loc text={post.title} />
            </h2>
            <div class="byline">
                <Avatar
                    href={authorUrl}
                    img={post.author.image}
                    imgDefault={{ alt: "Autor bez obrázku" }}
                    size={48}
                />
                <div>
                    <a href={authorUrl} class="author"><Loc text={post.author.name} /></a>
                    <div class="byline-date">
                        {#if post.date}
                            <time datetime={post.date.toString()}>{formatPostDate(post.date)}</time>
                        {/if}
                        {@render translationNote()}
                    </div>
                </div>
            </div>
        </header>
        <div class="article-body">
            {@render children?.()}
            {@render seriesAndFootnotes()}
        </div>
        <hr />
        {#if !post.author.isDefault}
            <AuthorBio author={post.author} kind={post.kind} secondary />
        {/if}
    {/if}
    <PostAdjacentNav kind={post.kind} {newer} {older} />
</article>

<style>
    .post-page {
        margin: 2em auto 0;
    }

    .post-page.news {
        max-width: 640px;
    }

    .post-page.article {
        max-width: 720px;
    }

    .backlink {
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .backlink :global(.lucide-icon) {
        margin-bottom: 0;
    }

    .author {
        color: inherit;
        font-weight: bold;
        text-decoration: none;
    }

    .author:hover {
        text-decoration: underline;
    }

    /* News: a single expanded "status" card */

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

    /* Articles: an editorial header followed by comfortable long-form text */

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

    .post-page :global(img) {
        max-width: 100%;
    }

    hr {
        margin: 2em 0;
    }

    .series-info {
        border: 2px solid var(--color-secondary);
        padding: 1em;
        margin: 2em 0;
        line-height: normal;
    }

    .series-label {
        color: var(--color-primary);
    }

    .series-info h3 {
        margin-top: 0.2em;
        margin-bottom: 0.5em;
    }

    .series-info ol {
        margin: 0.5em 0;
    }

    .series-info ol li {
        margin-bottom: 0.5em;
    }

    .series-info a {
        text-decoration: none;
    }

    .unpublished-notice {
        border: 2px solid var(--color-text);
        padding: 0.5em 1em;
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: bold;
    }

    @media only screen and (max-width: 600px) {
        .status {
            padding: 16px;
        }

        .news-title {
            font-size: 24px;
        }

        .article-title {
            font-size: 32px;
        }
    }
</style>
