<!--
    Based on skeletonlabs/skeleton
    License: MIT
    URL: https://github.com/skeletonlabs/skeleton/blob/1e3d182fefbaefb89912d57213a2320daf7a87dc/packages/skeleton/src/lib/utilities/TableOfContents/TableOfContents.svelte
-->

<script lang="ts">
	import { tocStore, tocActiveId } from './stores.ts';
    
	/** Set the active permalink ID on load. */
	export let activeId = '';
    
    $: reactiveActiveId = $tocActiveId ? $tocActiveId : activeId.replace('#', '');
</script>

<div class="table-of-contents">
	{#if $tocStore.length}
		<div style="text-align: center; margin-bottom: 6px;"><strong>Obsah</strong></div>
		<ul>
			{#each $tocStore as tocHeading}
				<li>
					<a
						href="#{tocHeading.id}"
						class="{tocHeading.id === reactiveActiveId
							? 'active'
							: 'inactive'}"
						on:click={() => {
							//reactiveActiveId = tocHeading.id;
						}}
					>
						{tocHeading.text}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.table-of-contents {
		text-align: left;
	}
	.table-of-contents :global(ul) {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.table-of-contents :global(li) {
		margin-bottom: 0.35em;
		padding-left: 1em;
		text-indent: -1em;
		font-size: 95%;
	}
	.table-of-contents :global(a) {
		text-decoration: none;
	}
	.table-of-contents :global(a:hover) {
		text-decoration: underline;
	}

    .active {
        font-weight: bold;
    }
</style>
