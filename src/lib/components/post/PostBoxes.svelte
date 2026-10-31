<script lang="ts">
    import ArticleCard from "./ArticleCard.svelte";
    import NewsCard from "./NewsCard.svelte";
    import VideoCard from "./VideoCard.svelte";
    import Loc from "../Loc.svelte";
    import { postKindList, postKinds } from "$src/lib/posts";
    import type { Post } from "$src/types";

    interface Props {
        posts: Post[];
        /** News are shown as a grid of cards, or as a single-column feed */
        newsLayout?: "grid" | "feed";
    }

    let { posts, newsLayout = "grid" }: Props = $props();

    const groups = $derived(
        postKindList
            .map((kind) => ({ kind, posts: posts.filter((post) => post.kind === kind) }))
            .filter((group) => group.posts.length > 0),
    );
</script>

<div data-pagefind-ignore>
    {#each groups as group (group.kind)}
        {#if groups.length > 1}
            <h3><Loc text={postKinds[group.kind].title} /></h3>
        {/if}
        {#if group.kind === "news"}
            <div class="news-cards {newsLayout}">
                {#each group.posts as post (post.id)}
                    <NewsCard {post} />
                {/each}
            </div>
        {:else if group.kind === "video"}
            <div class="video-cards">
                {#each group.posts as post (post.id)}
                    <VideoCard {post} />
                {/each}
            </div>
        {:else}
            <div class="article-cards">
                {#each group.posts as post (post.id)}
                    <ArticleCard {post} />
                {/each}
            </div>
        {/if}
    {/each}
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
