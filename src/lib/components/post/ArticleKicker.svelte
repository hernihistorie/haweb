<script lang="ts">
    import BulletPoint from "../BulletPoint.svelte";
    import Loc from "../Loc.svelte";
    import { seriesByBlogPostId } from "$src/data/series";
    import type { Post, PostSeries } from "$src/types";

    let {
        post,
        featured = false,
        seriesHref,
    }: { post: Post; featured?: boolean; seriesHref?: string } = $props();

    const series = $derived(seriesByBlogPostId[post.id]?.[0]);
    const seriesPart = $derived(series ? series.posts.findIndex((p) => p.id === post.id) + 1 : 0);
</script>

{#if featured || series}
    <div class="kicker">
        {#if featured}
            <Loc cs="Nejnovější článek" en="Newest article" />
        {/if}
        {#if featured && series}
            <BulletPoint />
        {/if}
        {#if series}
            {#if seriesHref}
                <a href={seriesHref}>{@render seriesInfo(series)}</a>
            {:else}
                {@render seriesInfo(series)}
            {/if}
        {/if}
    </div>
{/if}

{#snippet seriesInfo(series: PostSeries)}
    <Loc text={series.title} />
    <BulletPoint />
    <Loc
        cs={`díl ${seriesPart}/${series.posts.length}`}
        en={`part ${seriesPart}/${series.posts.length}`}
    />
{/snippet}

<style>
    .kicker {
        color: var(--color-primary);
        font-size: 0.8em;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin-bottom: 0.4em;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }
</style>
