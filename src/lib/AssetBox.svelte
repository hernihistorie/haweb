<script lang="ts">
    import type { AssetData } from "$src/types";
	import Box from "./Box.svelte";

    interface Props {
        data: AssetData;
    }

    let { data }: Props = $props();
</script>
<Box>
    <div class="asset">
        <div>
            <div class="asset-name">
                <a href="{ data.inventory_url }"> { data.name }</a>
            </div>
            <p>{@html data.description}</p>
        </div>
        {#if data.picture.url}
            <div class="asset-photo">
                <img src="{ data.picture.url }" class="asset-img" alt="">
            </div>
        {/if}
    </div>
</Box>

<style>
    .asset-name {
       font-size: 25px;
       font-weight: bold; 
    }
    .asset {
        display: flex;
        justify-content: space-between;
        gap: 12px;
    }

    .asset-photo {
        width: 350px;
        margin-right: 4px;
        margin-left: 16px;
        flex-shrink: 0;
    }

    .asset-img {
        margin-left: 32px;
        margin-bottom: 12px;
        border-radius: 8px;
        width: 334px;
        height: 200px;
        object-fit: cover;
    }    

    @media only screen and (max-width: 600px) {
        .asset {
            flex-direction: column-reverse;
        }
        .asset-photo {
            margin-left: 0;
            margin-bottom: 16px;
        }
    }
</style>