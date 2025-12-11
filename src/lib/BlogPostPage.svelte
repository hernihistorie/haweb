<script lang="ts">
	import Post from "./Post.svelte";
    import Loc from "./Loc.svelte";
    import type { BlogPost } from "$src/types";
	import type { Snippet } from "svelte";
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

    interface Props {
        post: BlogPost;
        children?: Snippet;
    }

    let {
        post,
        children
    }: Props = $props();
</script>

<Post title={post.title}>
    {#snippet side()}
        <div class="side">
            <!--
                <img src="" alt="Profilový obrázek" />
            -->
            <img src="/images/ha_logo.png" alt="Logo Herního archivu" class="profile-photo-standin">
            <div class="author-date">
                <author>
                    <strong>{post.author_name ?? ''}</strong>
                </author>
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
            <a href={localizeHref("/blog")} class="backlink">
                <Loc cs="Blog Herního archivu" en="Czechoslovak Game Archive Blog" />
            </a>
            <h2>
                <Loc text={post.title} />
            </h2>
            {@render children?.()}
        </div>
    {/snippet}
</Post>

<style>
    .profile-photo-standin {
        height: 6em;
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