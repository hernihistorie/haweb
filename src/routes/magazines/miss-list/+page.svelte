<script lang="ts">
	import Meta from '$src/lib/components/layout/Meta.svelte';
    import Loc from '$src/lib/components/Loc.svelte';
	import MagazinesMenu from '$src/lib/components/magazines/MagazinesMenu.svelte';
	import MissListMagazineBox from '$src/lib/components/magazines/MissListMagazineBox.svelte';
	import { localizeHref } from '$src/lib/paraglide/runtime';
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
        <Loc>
            {#snippet cs()}
                V tomto seznamu naleznete vydání časopisů, od kterých nemáme v archivu dobrou kopii.  Pokud máte zájem nám do archivu přispět, ať už těmito čísly nebo jinými publikacemi, budeme rádi když nás <a href={localizeHref("/contact")}>kontaktujete</a>. 
            {/snippet}
            {#snippet en()}
                In this list you will find issues of magazines of which we do not have a good copy in the archive.  Should you be interested in contributing to the archive, be it with these issues or other publications, we will be glad if you <a href={localizeHref("/contact")}>contact us</a>.
            {/snippet}
        </Loc>
    </p>

    <div class="magazines">
        {#each data.magazines as magazine}
            <MissListMagazineBox {magazine} />
        {/each}
    </div>
</section>