<script lang="ts">
    import { type AssetData } from "$src/types";
	import AssetBox from "$src/lib/AssetBox.svelte";
	import { loadRHInventoryAssetData } from '$src/lib/rhinventory_api';

    let props: { assetTagId: number } = $props();

    let assetPage = $state(0);
    let assetsPromise: Promise<AssetData[]> = $derived(loadRHInventoryAssetData({tagId: props.assetTagId, page: assetPage}))
</script>

{#await assetsPromise }
    <p><em>Načítá se...</em></p>
{:then assets}
{#each assets as asset }
    <AssetBox data={asset} />
{/each}
{:catch error}
    <p><em>Chyba při načítání předmětů: {error.message}</em></p>
{/await}