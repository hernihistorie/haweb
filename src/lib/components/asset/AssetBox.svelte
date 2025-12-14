<script lang="ts">
    import Lazy from 'svelte-lazy';
    import type { AssetData } from "$src/types";
	import Box from "../Box.svelte";
    import SvelteMarkdown, { defaultRenderers, allowHtmlOnly } from '@humanspeak/svelte-markdown'
	import Capsule from "../Capsule.svelte";
	import LucideDownload from "@lucide/svelte/icons/download";
	import Loc from '../Loc.svelte';

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

    const markdownRenderers =  {
        ...defaultRenderers,
        html: allowHtmlOnly(['strong', 'em', 'a', 'b', 'i', 'u', 'br', 'p', 'ul', 'ol', 'li'] )
    }
</script>

<Box>
    <div class="asset">
        {#await data}
            <em><Loc cs="Načítá se předmět..." en="Loading item..." /></em>
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
                        {#if data.description}
                            <SvelteMarkdown source={data.description} renderers={markdownRenderers}/>
                        {/if}
                    </p>
                    {#if data.primary_dump_path}
                        <a href="{data.primary_dump_path}" class="download">
                            <LucideDownload style="vertical-align: top;" />
                            <Loc cs="Stáhnout dump" en="Download dump" />
                            {#if data.primary_dump_size}
                                ({formatFileSize(data.primary_dump_size)})
                            {/if}
                        </a>
                    {/if}
                    {#if data.primary_document_path}
                        <a href="{data.primary_document_path}" class="download">
                            <LucideDownload style="vertical-align: top;" />
                            <Loc cs="Stáhnout dokument" en="Download document" />
                        </a>
                    {/if}
                </div>
                {#if data.picture.url}
                    <a href="{ data.inventory_url }" class="asset-photo">
                        <Lazy height={200} width={334} keep={true}>
                            <img src="{ data.picture.url }" class="asset-img" alt="">
                        </Lazy>
                    </a>
                {/if}
            {:else}
                <em><Loc cs="Chyba: předmět nebyl dodán." en="Error: item was not provided." /></em>
            {/if}
        {:catch error}
            <div>
                <em><Loc cs="Chyba při načítání předmětu." en="Error loading item." /></em>
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
        width: 334px;
        height: 200px;
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