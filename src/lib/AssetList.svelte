<script lang="ts">
	import AssetBox from "$src/lib/AssetBox.svelte";
	import { loadRHInventoryAssetData } from '$src/lib/rhinventory_api';
	import AssetListPagination from "./AssetListPagination.svelte";

    let props: { withHeading?: boolean, assetTagId: number } = $props();

    let assetPage = $state(1);
    let assetsDataPromise = $derived(loadRHInventoryAssetData({tagId: props.assetTagId, page: assetPage}))
    // We track assetCount separately because we want the pagination to stay
    // while the assets are loading
    let assetCount: number | null = $state(null);
    $effect(() => {
        assetsDataPromise.then((assetData) => {
            assetCount = assetData.assetCount;
        })
    })
</script>

<div id="assetList" class="assets">
    <div style="display: flex; justify-content: space-between;">
        {#if props.withHeading}
            <h3 id="Predmety">Předměty</h3>
        {/if}
        <AssetListPagination bind:assetPage bind:assetCount />
    </div>
    {#await assetsDataPromise }
        <!-- TODO placeholder AssetBoxes -->
        <p><em>Načítá se...</em></p>
    {:then assetsData}
        {#each assetsData.assets as asset }
            <AssetBox data={asset} />
        {/each}
    {:catch error}
        <p><em>Chyba při načítání předmětů: {error.message}</em></p>
    {/await}
    <AssetListPagination bind:assetPage bind:assetCount />
</div>


<style>
    .assets {
        min-height: 100vh;
    }
</style>