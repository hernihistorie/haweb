<script lang="ts">
    import Lazy from 'svelte-lazy';
    import IconExternalLink from "@lucide/svelte/icons/external-link";
    import { Lightbox } from 'svelte-lightbox';
	import type { MagDBFile } from "$src/lib/magdb";
	import { loc } from '$src/lib/loc';
	import Loc from '../Loc.svelte';

    const { page }: {page?: MagDBFile} = $props();
</script>



<div class="page-wrapper">
    {#if page}
        <Lightbox>
            {#snippet thumbnail()}
                <Lazy keep={true} height="204px">
                    <img class="thumb" src={"https://casopisy.herniarchiv.cz/" + page.thumbnail_path} alt="" />
                </Lazy>
            {/snippet}
            <img src={"https://casopisy.herniarchiv.cz/" + page.path} alt="" />
            <a class="open-in-new-window" href={"https://casopisy.herniarchiv.cz/" + page.path} target="_blank" >
                <IconExternalLink />
            </a>
        </Lightbox>
        <!--
            <a href={"https://casopisy.herniarchiv.cz/" + page.path} target="_blank" >
                <img src={"https://casopisy.herniarchiv.cz/" + page.thumbnail_path} alt="" />
            </a>
        -->
    {:else}
        <img
            src="https://casopisy.herniarchiv.cz/static/magdb/missing-a4.png"
            class="missing-scan"
            alt={loc({cs:"nemáme sken", en:"no scan"})}
        />
    {/if}
</div>

<style>
    .page-wrapper {
        min-width: 160px;
        display: flex;
        justify-content: center;
        flex-shrink: 0;
    }
    .thumb {
        box-sizing: border-box;
        height: 200px;
        border: 2px solid var(--color-secondary);
    }

    .open-in-new-window {
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
        z-index: 10;
        position: absolute;
        bottom: 0;
        right: -3em;
        padding: 0.2em;
        width: 1.5em;
        height: 1.5em;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    :global(html[data-theme="dark"]) .missing-scan {
        opacity: 0.5;
    }
</style>