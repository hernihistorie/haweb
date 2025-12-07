<script lang="ts">
    import { localizeHref } from '$lib/paraglide/runtime';
    let {
        href,
        text = undefined,
        children
    }:{
        href: string,
        text?: string,
        children?: import('svelte').Snippet
    }= $props();

    // Localize internal links (starting with /), but not external links or anchor links
    let localizedHref = $derived(href.startsWith('/') && !href.startsWith('//') ? localizeHref(href) : href);
</script>

<a class="arrow" href="{localizedHref}">
    <img src="/ico/ico_arrow.svg" alt="→">
    {#if text}
        {text}
    {/if}
    {@render children?.()}
</a>

<style>
    .arrow {
        display: inline-block;
        text-decoration: none;
        font-size: 24px;
        user-select: none;
    }

    .arrow img {
        width: 30px;
        height: 30px;
        padding-bottom: 4px;
        padding-right: 4px;
        vertical-align: middle;
    }

    .arrow {
    }
</style>