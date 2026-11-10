<script lang="ts">
    import { PAGE_SIZE } from "$src/lib/rhinventory_api";
    import Pagination from "$src/lib/components/Pagination.svelte";

    let { assetPage = $bindable<number>(), assetCount = $bindable<number | null>() } = $props();
</script>

<Pagination
    bind:page={assetPage}
    pageCount={assetCount ? Math.ceil(assetCount / PAGE_SIZE) : 0}
    scrollTarget="#assetList" />
