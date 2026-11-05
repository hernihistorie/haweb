<script lang="ts">
    import ArticleCard from "./ArticleCard.svelte";
    import NewsCard from "./NewsCard.svelte";
    import VideoCard from "./VideoCard.svelte";
    import Loc from "../Loc.svelte";
    import { postKinds } from "$src/lib/posts";
    import type { Post, PostKind } from "$src/types";

    interface Props {
        posts: Post[];
        /** News are shown as a grid of cards, or as a single-column feed */
        newsLayout?: "grid" | "feed";
    }

    let { posts, newsLayout = "grid" }: Props = $props();

    const news = $derived(posts.filter((post) => post.kind === "news"));
    const articles = $derived(posts.filter((post) => post.kind === "article"));
    const videos = $derived(posts.filter((post) => post.kind === "video"));

    const mixed = $derived([news, articles, videos].filter((group) => group.length > 0).length > 1);
</script>

{#snippet heading(kind: PostKind)}
    {#if mixed}
        <h3><Loc text={postKinds[kind].title} /></h3>
    {/if}
{/snippet}

<div data-pagefind-ignore>
    {#if news.length > 0}
        {@render heading("news")}
        <div class="news-cards {newsLayout}">
            {#each news as post (post.id)}
                <NewsCard {post} />
            {/each}
        </div>
    {/if}
    {#if articles.length > 0}
        {@render heading("article")}
        <div class="article-cards">
            {#each articles as post (post.id)}
                <ArticleCard {post} />
            {/each}
        </div>
    {/if}
    {#if videos.length > 0}
        {@render heading("video")}
        <div class="video-cards">
            {#each videos as post (post.id)}
                <VideoCard {post} />
            {/each}
        </div>
    {/if}
</div>

<style>
    h3 {
        margin-top: 1.5em;
    }

    .news-cards {
        display: grid;
        gap: 24px;
    }

    .news-cards.grid {
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
        align-items: start;
    }

    .news-cards.feed {
        gap: 16px;
    }

    /* 4-5 per row at full width, like a YouTube channel page */
    .video-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr));
        gap: 32px 20px;
        align-items: start;
    }

    .article-cards {
        display: flex;
        flex-direction: column;
        gap: 48px;
        max-width: 60em;
    }
</style>
