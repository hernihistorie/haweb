<script lang="ts">
    import Lazy from 'svelte-lazy';
	import Arrow from '$src/lib/components/Arrow.svelte';
	import type { BlogPost } from '$src/types';
	import type { Snippet } from 'svelte';
	import Loc from '../Loc.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import BulletPoint from '../BulletPoint.svelte';
    let { blogPost, children, show_arrow=true }: { blogPost: BlogPost, children?: Snippet, show_arrow?: boolean } = $props();

    let url = `/blog/${blogPost.id}-${blogPost.slug}`;
    let localizedUrl = $derived(localizeHref(url));
</script>

<div class="blog-box">
    <a href="{localizedUrl}">
        {#if blogPost.image}
            <Lazy height={"calc(8em + 4px)"} keep={true}>
                <img src={blogPost.image} />
            </Lazy>
        {:else}
            <!-- <div class="img-placeholder">
            </div> -->
        {/if}
    </a>
    {#if blogPost.title}
        <h3>
            <a href="{localizedUrl}">
                <Loc text={blogPost.title} />
            </a>
        </h3>
    {/if}
    {#if children}
        {@render children?.()}
    {:else if blogPost.description_html}
        <Loc text={blogPost.description_html} />
    {/if}
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;">
        <div>
            {#if show_arrow}
                <Arrow href={url} />
            {/if}
        </div>
        <div class="author-date">
            <author>
                <Loc text={blogPost.author_name ?? ''} />
            </author>
            <BulletPoint />
            <date>
                {#if blogPost.date}
                    {blogPost.date.day}.&nbsp;{blogPost.date.month}.&nbsp;{blogPost.date.year}
                {/if}
            </date>
        </div>
    </div>
</div>

<style>
    img, .img-placeholder {
        /* width: 100%; */
        /* aspect-ratio: 10/3; */
        box-sizing: border-box;
        width: 100%;
        height: 8em;
        object-fit: cover;
        border: 2px solid var(--color-secondary);
    }

    /* .img-placeholder {
        border: 2px solid var(--color-secondary);
    } */

    .blog-box {
        width: calc(32% - 24px);
    }

    .blog-box h3 {
        margin-top: 0;
    }

    .blog-box h3 a {
        color: var(--color-black);
        text-decoration-color: var(--color-secondary);
        text-decoration-thickness: 3px;
        text-transform: uppercase;
    }

    .author-date {
        margin-left: 8px;
    }

	@media screen and (max-width: 1200px) {
		.blog-box {
			width: 100%;
		}
	}

</style>