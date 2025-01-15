<script lang="ts">
	import { PAGE_SIZE } from '$src/lib/rhinventory_api';

    let {
        assetPage = $bindable<number>(),
        assetCount = $bindable<number | null>()
    } = $props();
</script>

<div class="pagination">
    {#if assetCount && assetCount > PAGE_SIZE}
        <!-- Strana {assetPage} z {assetsData.assetCount / PAGE_SIZE} -->
        {#each {length: (assetCount + PAGE_SIZE-1) / PAGE_SIZE}, i}
            <button
                class={{'active': assetPage==i+1}}
                onclick={() => {
                    assetPage = i+1;
                    document.querySelector('#assetList')?.scrollIntoView({block: 'start', behavior: 'instant'});
                }}
            >
                {i+1}
            </button>
        {/each}
    {/if}
</div>

<style>
    .pagination {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    button {
        height: auto;
    }
</style>