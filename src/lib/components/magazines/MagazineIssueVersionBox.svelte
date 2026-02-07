<script lang="ts">
    import Lazy from 'svelte-lazy';
	import type { MagazineVersion } from "$src/lib/magdb";
	import Box from "../Box.svelte";
    import MagazineIssueVersionNameSuffix from "./MagazineIssueVersionNameSuffix.svelte";
	import Price from "./Price.svelte";
	import Loc from '../Loc.svelte';
	import MagazinePageThumbnail from './MagazinePageThumbnail.svelte';
	import IssueStatus from './IssueStatus.svelte';

    const { version, sole }: {version: MagazineVersion, sole: boolean} = $props();
</script>

<Box class="no-margin" decoration={sole ? 'hidden' : true}>
    <div class="version">
        <div class="name-price">
            {#if version.name_suffix}
                <h5>
                    <MagazineIssueVersionNameSuffix nameSuffix={version.name_suffix} />
                </h5>
            {:else}
                <div style="height: 0.35em;"></div>
            {/if}
            <div class="prices">
                {#if version.prices && version.prices.length > 0}
                    <ul class="unstyled prices">
                        {#each version.prices as price}
                            <li>
                                <Price {price} />
                            </li>
                        {/each}
                    </ul>
                {:else}
                    <small class="text-secondary"><Loc cs="cena neznámá" en="price unknown" /></small>
                {/if}
            </div>
            <IssueStatus status={version.status} />
        </div>
        <div class="pages">
            {#if version.cover_pages.length }
                {#each version.cover_pages as cover_page}
                    <MagazinePageThumbnail page={cover_page} />
                {/each}
            {:else}
                <MagazinePageThumbnail />
            {/if}
            {#if version.index_pages.length }
                {#each version.index_pages as index_page}
                    <MagazinePageThumbnail page={index_page} />
                {/each}
            {:else}
                <MagazinePageThumbnail />
            {/if}
        </div>
    </div>
</Box>

<style>
    .version {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1em;
        margin-bottom: 0.1em;
    }

    h5 {
        margin-bottom: 0.2em;
    }

    .prices {
        display: flex;
        gap: 0.4em;
    }
    
    .prices li::before {
        content: "•";
        color: var(--color-secondary);
        margin-right: 0.4em;
    }

    .prices li:first-child::before {
        content: "";
        margin-right: 0;
    }

    .pages {
        display: flex;
        gap: 1em;
    }

    .prices {
        margin: 0.2em 0;
        font-size: 0.95em;
    }

    @media (max-width: 620px) {
        .version {
            grid-template-columns: 1fr;
        }
        .pages {
            overflow-x: scroll;
        }
    }

    @media (max-width: 500px) {
        .pages {
            gap: 0.1em;
        }
    }
</style>