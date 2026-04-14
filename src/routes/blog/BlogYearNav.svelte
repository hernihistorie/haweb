<script lang="ts">
	import PipeList from '$src/lib/components/PipeList.svelte';
	import Loc from '$src/lib/components/Loc.svelte';
	import { localizeHref } from '$src/lib/paraglide/runtime';

	let { years, activeYear }: { years: number[], activeYear: number | null } = $props();
</script>

<nav>
	<PipeList>
		<li class:active={activeYear === null}>
			<a href={localizeHref('/blog')}>
				<Loc cs="Nejnovější" en="Latest" />
			</a>
		</li>
		{#each years as year (year)}
			<li class:active={activeYear === year}>
				<a href={localizeHref(`/blog/${year}`)}>{year}</a>
			</li>
		{/each}
	</PipeList>
</nav>

<style>
	nav {
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>