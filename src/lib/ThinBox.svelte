<script lang="ts">
	import Arrow from '$lib/Arrow.svelte';
    let { href = undefined, title = undefined, children, show_arrow=true, img=undefined, project=false } = $props();
</script>

<div class={project ? "project": "blog-box"}>
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
    img {
        width: 100%;
        aspect-ratio: 4/3;
    }
    .blog-box {
        width: calc(32% - 24px);
    }

    .project {
        width: calc(25% - 19px);
    }

    .blog-box :global(h3), .project :global(h3) {
        margin-top: 0;
    }

    .blog-box :global(h3 a),.project :global(h3 a) {
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

    @media screen and (max-width: 800px) {
		.project {
			width: 100%;
		}
	}
</style>