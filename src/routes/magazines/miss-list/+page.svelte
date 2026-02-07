<script lang="ts">
	import Box from '$src/lib/components/Box.svelte';
	import BulletPoint from '$src/lib/components/BulletPoint.svelte';
	import Meta from '$src/lib/components/layout/Meta.svelte';
import Loc from '$src/lib/components/Loc.svelte';
	import IssueStatus from '$src/lib/components/magazines/IssueStatus.svelte';
	import MagazineBlock from '$src/lib/components/magazines/MagazineBlock.svelte';
	import MagazineIssueVersionNameSuffix from '$src/lib/components/magazines/MagazineIssueVersionNameSuffix.svelte';
	import MagazineLogo from '$src/lib/components/magazines/MagazineLogo.svelte';
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