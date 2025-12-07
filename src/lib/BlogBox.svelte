<script lang="ts">
	import Arrow from '$lib/Arrow.svelte';
	import type { BlogPost } from '$src/types';
	import type { Snippet } from 'svelte';
	import Loc from './Loc.svelte';
    let { blogPost, children, show_arrow=true }: { blogPost: BlogPost, children?: Snippet, show_arrow?: boolean } = $props();

    let url = `/blog/${blogPost.id}-${blogPost.slug}`;
</script>

<div class="blog-box">
    <a href="{url}">
        {#if blogPost.image}
            <img src={blogPost.image} />
        {:else}
            <!-- <div class="img-placeholder">
            </div> -->
        {/if}
    </a>
    {#if blogPost.title}
        <h3>
            <a href="{url}">
                <Loc text={blogPost.title} />
            </a>
        </h3>
    {/if}
    {#if children}
        {@render children?.()}
    {:else if blogPost.description_html}
        {@html blogPost.description_html}
    {/if}
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;">
        <div>
            {#if show_arrow}
                <Arrow href={url} />
            {/if}
        </div>
        <div>
            <author>
                {blogPost.author_name ?? ''}
            </author>
            <span style="padding: 0 0.2em;">&bull;</span>
            <date>
                {#if blogPost.date}
                    {blogPost.date.getDate()}. {blogPost.date.getMonth() + 1}. {blogPost.date.getFullYear()}
                {/if}
            </date>
        </div>
    </div>
</div>

<style>
    img, .img-placeholder {
        /* width: 100%; */
        /* aspect-ratio: 10/3; */
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


	@media screen and (max-width: 1200px) {
		.blog-box {
			width: 100%;
		}
	}

    @media screen and (max-width: 470px) {
		img {
			width: 10%;
		}
	}
</style>