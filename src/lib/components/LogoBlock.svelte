<script lang="ts">
	import type { Logo as LogoType } from "$src/lib/logo";
	import { localizeHref } from "$src/lib/paraglide/runtime";
	import Logo from "./Logo.svelte";

    const {
        entity,
        href,
        makeLinkProminent = true,
        withTitle = true
    }: {
        entity: {title: string, logos?: LogoType[], logo?: LogoType, url?: string},
        href?: string,
        makeLinkProminent?: boolean,
        withTitle?: boolean
    } = $props();
</script>

<a
    class="block"
    class:makeLinkProminent
    href={href ? localizeHref(href) : entity.url ? entity.url : undefined}
>
    {#if withTitle}
        <h3 class="title">{entity.title}</h3>
    {/if}
    <div class="logo-wrapper">
        {#if entity.logos && entity.logos.length > 0}
            <Logo logo={entity.logos[0]} title={entity.title} />
        {:else if entity.logo}
            <Logo logo={entity.logo} title={entity.title} />
        {:else}
            <div class="logo-placeholder">{entity.title}</div>
        {/if}
    </div>
    <!-- TODO year range -->
    <!-- <p>{magazine.description}</p> -->
</a>

<style>
    .block {
        width: 200px;
        padding: 0 1em 1em 1em;
        border: 2px solid var(--color-bg);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        transition: border-color 0.3s;
    }

    .block.makeLinkProminent:hover {
        border: 2px solid var(--color-primary);
    }

    .title {
        font-size: 0.8em;
        text-align: center;
        color: var(--color-secondary);
    }

    .logo-wrapper {
        height: 100px;
        /* width: 160px; */
        display: flex;
        align-items: center;
    }

    .logo-placeholder {
        color: var(--color-text);
        font-weight: bold;
        font-size: 1.2em;
    }
</style>