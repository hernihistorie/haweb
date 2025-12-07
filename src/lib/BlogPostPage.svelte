<script lang="ts">
	import Post from "./Post.svelte";
    import Loc from "./Loc.svelte";
    import type { BlogPost } from "$src/types";
	import type { Snippet } from "svelte";
	import { localizeHref } from '$lib/paraglide/runtime';

    interface Props {
        post: BlogPost;
        children?: Snippet;
    }

    let {
        post,
        children
    }: Props = $props();

    function formatDate(date: Date | undefined): string {
        if (!date) return '';
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}. ${month}. ${year}`;
    }
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
                <date>
                    {formatDate(post.date)}
                </date>
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