<script lang="ts">
	import Arrow from '$src/lib/components/Arrow.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
    let { href = undefined, title = undefined, children, show_arrow=true, img=undefined, project=false } = $props();

    let localizedHref = $derived(href && href.startsWith('/') && !href.startsWith('//') ? localizeHref(href) : href);
</script>

<div class="project">
    {#if img}
        <a href="{localizedHref}">
            <img src={img} alt={title} />
        </a>
    {/if}
    {#if title}
        <h3>
            <a href="{localizedHref}">
                {title}
            </a>
        </h3>
    {/if}
    {@render children?.()}
    {#if show_arrow}
        <div style="margin-top: 16px;">
            <Arrow href={href} />
        </div>
    {/if}
</div>

<style>
    img {
        width: 100%;
        aspect-ratio: 4/3;
    }

    .project {
        width: calc(25% - 19px);
    }

    .project :global(h3) {
        margin-top: 0;
    }

    .project :global(h3 a) {
        color: var(--color-black);
        text-decoration-color: var(--color-secondary);
        text-decoration-thickness: 3px;
        text-transform: uppercase;
    }

    @media screen and (max-width: 800px) {
		.project {
			width: 100%;
		}
	}
    @media screen and (max-width: 470px) {
		img {
			width: 10%;
		}
	}
</style>