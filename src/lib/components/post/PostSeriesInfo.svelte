<script lang="ts">
    import Loc from "../Loc.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { postHref } from "$src/lib/posts";
    import type { Post, PostSeries } from "$src/types";

    /** A box listing the posts of a series, with the current one highlighted */
    let { series, post }: { series: PostSeries; post: Post } = $props();
</script>

<div class="series-info" id="series-{series.slug}">
    <span class="series-label">
        <Loc cs="Série příspěvků" en="Post series" />
    </span>
    <h3 class="text-uppercase"><Loc text={series.title} /></h3>
    {#if series.description}
        <p>
            <Loc text={series.description} />
        </p>
    {/if}
    <ol>
        {#each series.posts as blogPost (blogPost.id)}
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

<style>
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
</style>
