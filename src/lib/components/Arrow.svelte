<script lang="ts">
    import { localizeHref } from '$lib/paraglide/runtime';
	import type { LocalizedString } from '$src/types';
	import { loc } from '../loc';
    let {
        href,
        text = undefined,
        children,
        small = false
    }:{
        href: string,
        text?: LocalizedString,
        children?: import('svelte').Snippet,
        small?: boolean
    }= $props();

    // Localize internal links (starting with /), but not external links or anchor links
    let localizedHref = $derived(href.startsWith('/') && !href.startsWith('//') ? localizeHref(href) : href);
</script>

<a class="arrow" class:small href="{localizedHref}">
    <img src="/ico/ico_arrow.svg" alt="→">
    <span class="text">
        {#if text}
            {loc(text)}
        {/if}
        {@render children?.()}
    </span>
</a>

<style>
    .arrow {
        display: block;
        text-decoration: none;
        font-size: 24px;
        user-select: none;
        margin-bottom: 0.3em;
    }

    .arrow:hover .text {
        text-decoration: underline;
    }

    .arrow img {
        width: 30px;
        height: 30px;
        padding-bottom: 4px;
        padding-right: 4px;
        vertical-align: middle;
    }

    .arrow.small img {
        width: 20px;
        height: 20px;
    }

    .arrow.small {
        font-size: 1em;
    }
</style>