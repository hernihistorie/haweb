<script lang="ts">
	import Post from "../Post.svelte";
    import Loc from "../Loc.svelte";
    import type { BlogPost } from "$src/types";
	import { getContext, setContext, type Snippet } from "svelte";
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
    import { FootnoteHolder, getFootnoteContext, setFootnoteContext } from '../footnote/context';
	import Footnotes from "../footnote/Footnotes.svelte";
	import AuthorMedaillon from "./AuthorMedaillon.svelte";
	import BulletPoint from "../BulletPoint.svelte";

    const footnotes = setFootnoteContext(new FootnoteHolder());

	setContext('article', {footnotes: []});
    const articleContext = getContext('article');

    interface Props {
        post: BlogPost;
        children?: Snippet;
    }

    let {
        post,
        children
    }: Props = $props();
</script>

{#snippet backlinks()}
    <a href={localizeHref("/blog")} class="backlink">
        <Loc cs="Blog Herního archivu" en="Czechoslovak Game Archive Blog" />
    </a>
    {#if !post.author.noBacklink }
        <BulletPoint />
        <a href={localizeHref(`/blog/authors/${post.author.slug}`)} class="backlink">
            <Loc
                cs={`Blogové příspěvky od ${post.author.nameGenitive}`}
                en={`Blog posts from ${post.author.name}`}
            />
        </a>
    {/if}
{/snippet}

<Post title={post.title}>
    {#snippet side()}
        <div class="side">
            <!--
                <img src="" alt="Profilový obrázek" />
            -->
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
            <h2>
                <Loc text={post.title} />
            </h2>
            {@render children?.()}
            {#if footnotes.footnotes.length > 0}
                <hr>
                <Footnotes />
            {/if}
        </div>
        <hr>
        {@render backlinks() }
    {/snippet}
</Post>

<style>
    .profile-photo-standin {
        height: 6em;
        width: 6em;
        padding: 1em;
    }
    .backlink {
        text-decoration: none; 
    }
    h2 {
        margin-top: 0.2em;
    }

    @media (max-width: 1200px) {
        .side {
            display: flex;
            flex-direction: row;
            gap: 16px;
            align-items: center;
        }

        .profile-photo-standin {
            padding: 0.1em;
        }

        .author-date {
            width: 12em;
        }
    }
</style>