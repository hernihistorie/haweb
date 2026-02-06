<script lang="ts">
	import type { MagazineInfo, MissListMagazine } from "$src/lib/magdb";
	import { localizeHref } from "$src/lib/paraglide/runtime";
	import MagazineLogo from "./MagazineLogo.svelte";

    const { magazine, makeLinkProminent = true }: {magazine: MagazineInfo | MissListMagazine, makeLinkProminent?: boolean} = $props();
</script>

<a
    class="magazine-block"
    class:makeLinkProminent
    href={localizeHref(`/magazines/catalog/${magazine.id}`)}
>
    <h3 class="magazine-title">{magazine.title}</h3>
    <div class="magazine-logo-wrapper">
        {#if magazine.logos && magazine.logos.length > 0}
            <MagazineLogo logo={magazine.logos[0]} {magazine} />
        {/if}
    </div>
    <!-- TODO year range -->
    <!-- <p>{magazine.description}</p> -->
</a>

<style>
    .magazine-block {
        width: 200px;
        padding: 0 1em 1em 1em;
        border: 2px solid var(--color-bg);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        transition: border-color 0.3s;
    }

    .magazine-block.makeLinkProminent:hover {
        border: 2px solid var(--color-primary);
    }

    .magazine-title {
        font-size: 0.8em;
        text-align: center;
        color: var(--color-secondary);
    }

    .magazine-logo-wrapper {
        height: 100px;
        display: flex;
        align-items: center;
    }
</style>