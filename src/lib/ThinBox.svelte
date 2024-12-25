<script lang="ts">
	import Arrow from '$lib/Arrow.svelte';
    let { href = undefined, title = undefined, children, show_arrow=true, img=undefined } = $props();
</script>

<div class="blog-box">
    {#if img}
        <a href="{href}">
            <img src={img} alt={title} />
        </a>
    {/if}
    {#if title}
        <h3>
            <a href="{href}">
                {title}
            </a>
        </h3>
    {/if}
    {@render children?.()}
    {#if show_arrow}
        <div style="margin-top: 16px;">
            <Arrow {href} />
        </div>
    {/if}
</div>

<style>
    .blog-box {
        width: calc(32% - 24px);
    }

    .blog-box :global(h3) {
        margin-top: 0;
    }

    .blog-box :global(h3 a) {
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
</style>