<script lang="ts">
	import BulanciMenu from '../BulanciMenu.svelte';

	const { data } = $props();
</script>

<BulanciMenu />

<h2>Mapy</h2>

<ul>
	{#each data.bulanciMaps as bulanciMap}
		<li>
			{bulanciMap.name}
		</li>
	{/each}
</ul>

<style>
</style>