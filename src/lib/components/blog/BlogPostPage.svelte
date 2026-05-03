<script lang="ts">
	import Post from "../Post.svelte";
    import Loc from "../Loc.svelte";
    import type { BlogPost, BlogPostSeries } from "$src/types";
	import { getContext, setContext, type Snippet } from "svelte";
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
    import { FootnoteHolder, setFootnoteContext } from '../footnote/context';
	import Footnotes from "../footnote/Footnotes.svelte";
	import AuthorMedaillon from "./AuthorMedaillon.svelte";
	import BulletPoint from "../BulletPoint.svelte";
	import AuthorBio from "./AuthorBio.svelte";
	import CircleAlertIcon from "@lucide/svelte/icons/circle-alert";
	import { Temporal } from '@js-temporal/polyfill';
	import { loc } from "$src/lib/loc";

    const footnotes = setFootnoteContext(new FootnoteHolder());

	setContext('article', {footnotes: []});
    const articleContext = getContext('article');

    interface Props {
        post: BlogPost;
        series: BlogPostSeries[] | null;
        children?: Snippet;
    }

    let {
        post,
        series,
        children
    }: Props = $props();

    const postYear = $derived(post.date?.year);
    const isOlderThanAYear = $derived(post.date
        ? Temporal.PlainDate.from(post.date).until(Temporal.Now.plainDateISO()).total('days') > 365
        : false);
    const blogHref = $derived(isOlderThanAYear && postYear
        ? localizeHref(`/blog/${postYear}`)
        : localizeHref('/blog'));
</script>

{#snippet backlinks()}
    <a href={blogHref} class="backlink" data-pagefind-ignore>
        <Loc cs="Blog Herního archivu" en="Czechoslovak Game Archive Blog" />{#if isOlderThanAYear}&nbsp;({postYear}){/if}
    </a>
    {#if !post.author.isDefault }
        <BulletPoint />
        <a href={localizeHref(`/blog/authors/${post.author.slug}`)} class="backlink" data-pagefind-ignore>
            <Loc
                cs={`Blogové příspěvky od ${post.author.nameGenitive}`}
                en={`Blog posts from ${post.author.name}`}
            />
        </a>
    {/if}
{/snippet}

<svelte:head>
    <meta property="og:title" content="{loc(post.title)}" />
    <meta property="og:type" content="article" />
    <meta property="og:article:author" content="{loc(post.author.name)}" />
    {#if post.date}
        <meta property="og:article:published_time" content="{post.date.toString()}" />
    {/if}
    {#if post.description_html}
        <meta property="og:description" content="{loc(post.description_html)}" />
    {/if}
    <meta property="og:locale" content="{getLocale()}" />
</svelte:head>

<Post title={post.title} published={post.published}>
    {#snippet side()}
        <div class="side">
            <div class="author-date">
                <AuthorMedaillon author={post.author} />
                {#if post.date}
                    <date>
                        {post.date.day}.&nbsp;{post.date.month}.&nbsp;{post.date.year}
                    </date>
                {/if}
                {#if getLocale() == 'en' && post.english_translation_date}
                    <br />
                    Translation:<br>
                    {post.english_translation_date.day}.&nbsp;{post.english_translation_date.month}.&nbsp;{post.english_translation_date.year}
                {/if}
            </div>
        </div>
    {/snippet}
    {#snippet content()}
        <div>
            {@render backlinks() }
            {#if !post.published || (post.date && Temporal.PlainDateTime.compare(post.date, Temporal.Now.plainDateTimeISO()) > 0)}
                <div class="unpublished-notice">
                    <CircleAlertIcon />
                    <Loc cs="Tento příspěvek zatím není publikován." en="This post is not published yet." />
                </div>
            {/if}
            <h2>
                <Loc text={post.title} />
            </h2>
            <div class="inline-author">
                <AuthorMedaillon author={post.author} date={post.date} inline />
            </div>
            {@render children?.()}
            {#each series as s (s.slug)}
                <div class="series-info">
                    <span class="backlink">
                        <Loc cs="Série příspěvků" en="Blog post series" />
                    </span>
                    <h3 class="text-uppercase"><Loc text={s.title} /></h3>
                    {#if s.description}
                        <p>
                            <Loc text={s.description} />
                        </p>
                    {/if}
                    <ol>
                        {#each s.blogPosts as blogPost (blogPost.id)}
                            <li>
                                {#if blogPost.id === post.id}
                                    <strong>
                                        <Loc text={post.title} />
                                    </strong>
                                {:else}
                                    <a href={localizeHref(`/blog/${blogPost.id}-${blogPost.slug}`)}>
                                        <Loc text={blogPost.title} />
                                    </a>
                                {/if}
                            </li>
                        {/each}
                    </ol>
                </div>
            {/each}
            {#if footnotes.footnotes.length > 0}
                <hr>
                <Footnotes />
            {/if}
        </div>
        <hr style="margin: 2em 0;">
        {#if !post.author.isDefault }
            <AuthorBio author={post.author} secondary />
        {:else}
            {@render backlinks() }
        {/if}
    {/snippet}
</Post>

<style>
    h2 {
        margin-top: 0.2em;
        margin-bottom: 0.4em;
    }

    .inline-author {
        display: none;
    }

    .series-info {
        border: 2px solid var(--color-secondary);
        padding: 1em;
        margin: 2em 0;
    }

    .series-info h3 {
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

    @media (max-width: 1200px) {
        .side {
            display: none;
        }

        .inline-author {
            display: block;
        }

        .author-date {
            width: 12em;
        }
    }

    .unpublished-notice {
        border: 2px solid var(--color-text);
        padding: 0.5em 1em;
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: bold;
    }
</style>