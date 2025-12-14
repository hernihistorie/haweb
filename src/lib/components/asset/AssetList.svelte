<script lang="ts">
	import AssetBox from "$src/lib/components/asset/AssetBox.svelte";
	import { loadRHInventoryAssetData } from '$src/lib/rhinventory_api';
	import AssetListPagination from "./AssetListPagination.svelte";
	import Loc from "../Loc.svelte";

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
    <div class="heading-pagination" style="display: flex; justify-content: space-between;">
        {#if props.withHeading}
            <h3 id="Predmety"><Loc cs="Předměty" en="Items" /></h3>
        {:else}
            <div></div>
        {/if}
        <AssetListPagination bind:assetPage bind:assetCount />
    </div>
    {#await assetsDataPromise }
        <!-- TODO placeholder AssetBoxes -->
        <p><em><Loc cs="Načítá se..." en="Loading..." /></em></p>
    {:then assetsData}
        {#each assetsData.assets as asset }
            <AssetBox data={asset} />
        {/each}
    {:catch error}
        <p><em><Loc cs="Chyba při načítání předmětů: {error.message}" en="Error loading items: {error.message}" /></em></p>
    {/await}
    <AssetListPagination bind:assetPage bind:assetCount />
</div>


<style>
    .assets {
        min-height: 100vh;
    }

    @media (max-width: 800px) {
        .heading-pagination {
            flex-direction: column;
        }
    }
</style>