<script lang="ts">
    import type { AssetData } from "$src/types";
	import Box from "./Box.svelte";
    import SvelteMarkdown from '@humanspeak/svelte-markdown'
	import Capsule from "./Capsule.svelte";
	import LucideDownload from "@lucide/svelte/icons/download";

    interface Props {
        data: AssetData | Promise<AssetData | undefined>;
    }

    let { data }: Props = $props();

	function formatFileSize(bytes?: number | null): string {
		if (!bytes) return 'unknown size';
		const units = ['B', 'KiB', 'MiB', 'GiB'];
		let i = 0;
		while (bytes >= 1024 && i < units.length - 1) {
			bytes /= 1024;
			i++;
		}
		return `${bytes.toFixed(1)} ${units[i]}`;
	}
</script>

<Box>
    <div class="asset">
        {#await data}
            <em>Načítám předmět...</em>
        {:then data}
            {#if data}
                <div>
                    <div class="asset-name">
                        <a href="{ data.inventory_url }">
                            {#if data.id}
                                <Capsule>
                                    HH{data.id}
                                </Capsule>
                            {/if}
                        </a>
                        <a href="{ data.inventory_url }">
                            { data.name }
                        </a>
                    </div>
                    <p>
                        <SvelteMarkdown source={data.description} />
                    </p>
                    {#if data.primary_dump_path}
                        <a href="{data.primary_dump_path}" class="download">
                            <LucideDownload style="vertical-align: top;" />
                            Stáhnout dump
                            {#if data.primary_dump_size}
                                ({formatFileSize(data.primary_dump_size)})
                            {/if}
                        </a>
                    {/if}
                </div>
                {#if data.picture.url}
                    <a href="{ data.inventory_url }" class="asset-photo">
                        <img src="{ data.picture.url }" class="asset-img" alt="">
                    </a>
                {/if}
            {:else}
                <em>Chyba: předmět nebyl dodán.</em>
            {/if}
        {:catch error}
            <div>
                <em>Chyba při načítání předmětu.</em>
                <div style="color: #888;">{error}</div>
            </div>
        {/await}
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
        display: block;
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

    .download {
        text-decoration: none;
    }

    .download:hover {
        text-decoration: underline;
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

    @media screen and (max-width: 470px) {
		.asset-photo {
			width: 90%;
		}
	}
</style>