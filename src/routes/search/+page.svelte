<script lang="ts">
    import { page } from '$app/state'
    import type { Pagefind } from "vite-plugin-pagefind/types";
	import { onMount } from 'svelte';
	import Loc from "$src/lib/components/Loc.svelte";
	import Box from "$src/lib/components/Box.svelte";
	import IconSearch from "@lucide/svelte/icons/search";
	import Meta from '$src/lib/components/layout/Meta.svelte';
 
	let pagefind: Pagefind;
 
	onMount(async () => {
		pagefind = await import(
			// WORKAROUND: we need this templating trick to stop vite from statically analyzing this import
			/* @vite-ignore */
			`${'/'}pagefind/pagefind.js`
		);
		pagefind.init();
        searchValue = page.url.searchParams.get('q') || '';
	});
 
	async function fetchSearchResults(val: string) {
		const search = await pagefind?.debouncedSearch(val);
 
		if (search?.results?.length > 0) {
			const results = search.results;
			const data = await Promise.all(results.map(async (r) => await r.data()));
			return data;
		}
		return [];
	}

    function stripTitle(title: string) {
        return title.replace(/ - (Herní archiv|Czechoslovak Game Archive)$/, '');
    }
 
	let searchValue = $state('');
	let searchResults = $derived(fetchSearchResults(searchValue));
</script>

<Meta title={{cs: "Vyhledávání", en: "Search"}} />

<div class="thin">
    <h2><Loc cs="Vyhledávání" en="Search" /></h2>
    
    <div>
        <div class="search-input">
            <IconSearch />
            <input
                type="text"
                autofocus
                bind:value={searchValue}
            />
        </div>
    
        {#await searchResults}
            <div class="loading">
                <Loc cs="Načítání..." en="Loading..." />
            </div>
        {:then results}
            {#each results as result (result.url)}
                <Box>
                    <a href={result.url.replace('.html', '')} class="result-link">
                        <strong>{stripTitle(result.meta.title)}</strong>
                    </a>
                    {@html result.excerpt}
                </Box>
            {/each}
        {/await}
    </div>
</div>

<style>
    .search-input {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 20px;
    }
    .loading {
        margin-top: 20px;
        font-style: italic;
    }

    input {
        width: 100%;
    }
    input:focus {
        outline: none;
    }

    .result-link {
        display: block;
        text-decoration: none;
        font-size: 1.2em;
        margin-bottom: 8px;
    }
    .result-link:hover {
        text-decoration: underline;
    }
</style>