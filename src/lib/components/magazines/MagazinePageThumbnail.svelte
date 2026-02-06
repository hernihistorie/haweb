<script lang="ts">
    import Lazy from 'svelte-lazy';
	import type { MagDBFile } from "$src/lib/magdb";
	import { loc } from '$src/lib/loc';

    const { page }: {page?: MagDBFile} = $props();
</script>



<div class="page-wrapper">
    {#if page}
        <Lazy keep={true} height="204px">
            <a href={"https://casopisy.herniarchiv.cz/" + page.path} target="_blank" >
                <img src={"https://casopisy.herniarchiv.cz/" + page.thumbnail_path} alt="" />
            </a>
        </Lazy>
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
    }
    img {
        box-sizing: border-box;
        height: 200px;
        border: 2px solid var(--color-secondary);
    }

    :global(html[data-theme="dark"]) .missing-scan {
        opacity: 0.5;
    }
</style>