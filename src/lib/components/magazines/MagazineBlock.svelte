<script lang="ts">
	import type { CatalogMagazine, MagazineInfo, MissListMagazine } from "$src/lib/magdb";
	import { localizeHref } from "$src/lib/paraglide/runtime";
	import Logo from "../Logo.svelte";
	import LogoBlock from "../LogoBlock.svelte";

    const {
        magazine,
        ...restProps
    }: {
        magazine: CatalogMagazine | MagazineInfo | MissListMagazine,
    } = $props();

    $effect(() => {
        magazine.logos?.forEach(logo => {
            logo.url = `https://casopisy.herniarchiv.cz/${logo.url}`;
        });
    });
</script>

<LogoBlock
    entity={magazine}
    href={localizeHref(`/magazines/catalog/${magazine.slug}`)}
    {...restProps}
/>