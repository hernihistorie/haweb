<script lang="ts">
	import Arrow from '$lib/Arrow.svelte';
	import type { BlogPost } from '$src/types';
	import type { Snippet } from 'svelte';
	import Loc from './Loc.svelte';
    let { blogPost, children, show_arrow=true }: { blogPost: BlogPost, children?: Snippet, show_arrow?: boolean } = $props();

    let url = `/blog/${blogPost.id}-${blogPost.slug}`;
</script>

<div class="blog-box">
    {#if blogPost.image}
        <a href="{url}">
            <img src={blogPost.image} />
        </a>
    {/if}
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
    img {
        width: 100%;
        aspect-ratio: 4/3;
    }
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