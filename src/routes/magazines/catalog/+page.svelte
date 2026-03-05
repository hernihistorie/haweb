<script lang="ts">
    import IconInfo from '@lucide/svelte/icons/info';
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
    cs: "Katalog časopisů",
    en: "Magazine Catalog"
}} />

<MagazinesMenu />

<h2>
    <Loc
        cs="Katalog časopisů"
        en="Magazine Catalog"
    />
</h2>

<div class="magazines">
    {#each data.magazines as magazine}
        <MagazineBlock {magazine} />
    {/each}
</div>

<section>
    <p>
        <IconInfo />
        <strong>
            <Loc
                cs="Katalog časopisů zatím není kompletní."
                en="This magazine catalog is not yet complete."
            />
        </strong>
    </p>
    <p>
        <Loc>
            {#snippet cs()}
                Časopisy většinou přidáváme soustavně s uveřejněním jejich skenů.<br>
                V případě že chcete pomoct databázi rozšířit, můžete se <a href={localizeHref('/contact')}>nám ozvat</a>.
            {/snippet}
            {#snippet en()}
                We usually add magazines continuously with the publication of their scans.<br>
                If you want to help expand the database, you can <a href={localizeHref('/contact')}>contact us</a>.
            {/snippet}
        </Loc>
    </p>
</section>

<style>
    .magazines {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: flex-start;
    }
</style>