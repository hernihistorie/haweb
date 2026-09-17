<script lang="ts">
    import Lazy from 'svelte-lazy';
    import type { AssetData } from "$src/types";
	import Box from "../Box.svelte";
    import SvelteMarkdown, { defaultRenderers, allowHtmlOnly } from '@humanspeak/svelte-markdown'
	import Capsule from "../Capsule.svelte";
	import Loc from '../Loc.svelte';
	import DownloadLink from '../DownloadLink.svelte';

    interface Props {
        data: AssetData | Promise<AssetData | undefined>;
    }

    let { data }: Props = $props();

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
                        <DownloadLink
                            title={{cs: 'dump', en: 'dump'}}
                            url={data.primary_dump_path}
                            filesize={data.primary_dump_size}
                        />
                    {/if}
                    {#if data.primary_document_path}
                        <DownloadLink
                            title={{cs: 'dokument', en: 'document'}}
                            url={data.primary_document_path}
                        />
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

    @media screen and (max-width: 470px) {
		.asset-photo {
			width: 90%;
		}
	}
</style>