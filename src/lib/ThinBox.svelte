<script lang="ts">
	import Arrow from '$lib/Arrow.svelte';
    let { href = undefined, title, children, show_arrow=true } = $props();
</script>

<div class="blog-box">
    <h3>
        <a href="{href}">
            {title}
        </a>
    </h3>
    <p>
        {@render children?.()}
    </p>
    {#if show_arrow}
        <Arrow {href} />
    {/if}
</div>

<style>
    .blog-box {
        width: calc(30% - 32px);
    }

    a {
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