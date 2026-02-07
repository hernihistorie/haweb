<script lang="ts">
	import Meta from '$src/lib/components/layout/Meta.svelte';
    import Loc from '$src/lib/components/Loc.svelte';
	import MagazinesMenu from '$src/lib/components/magazines/MagazinesMenu.svelte';
	import MissListMagazineBox from '$src/lib/components/magazines/MissListMagazineBox.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Meta title={{
    cs: "Chybí nám z časopisů",
    en: "Magazine Miss List"
}} />

<MagazinesMenu />

<section class="thin">
    <h2>
        <Loc
            cs="Chybí nám z časopisů"
            en="Magazine Miss List"
        />
    </h2>
    <p>
        <Loc
            cs="TODO TODO TODO TODO máte tento časopis pošlete nám ho"
            en="TODO"
        />
    </p>

    <div class="magazines">
        {#each data.magazines as magazine}
            <MissListMagazineBox {magazine} />
        {/each}
    </div>
</section>