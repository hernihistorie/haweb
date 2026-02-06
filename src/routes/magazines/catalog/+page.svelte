<script lang="ts">
	import Box from '$src/lib/components/Box.svelte';
	import Meta from '$src/lib/components/layout/Meta.svelte';
import Loc from '$src/lib/components/Loc.svelte';
	import MagazineBlock from '$src/lib/components/magazines/MagazineBlock.svelte';
	import MagazineLogo from '$src/lib/components/magazines/MagazineLogo.svelte';
	import MagazinesMenu from '$src/lib/components/magazines/MagazinesMenu.svelte';
	import { localizeHref } from '$src/lib/paraglide/runtime';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Meta title={{
    cs: "Přehled časopisů - Databáze časopisů",
    en: "Overview of magazines - Magazines Database"
}} />

<MagazinesMenu />

<h2>
    <Loc
        cs="Přehled časopisů"
        en="Overview of magazines"
    />
</h2>

<div class="magazines">
    {#each data.magazines as magazine}
        <MagazineBlock {magazine} />
    {/each}
</div>

<style>
    .magazines {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: flex-start;
    }
</style>