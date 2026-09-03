<script lang="ts">
	import type { CatalogMagazine, MagazineInfo, MissListMagazine } from "$src/lib/magdb";
    import { MAGDB_ORIGIN } from "$src/lib/magdb";
	import { localizeHref } from "$src/lib/paraglide/runtime";
	import LogoBlock from "../LogoBlock.svelte";

    const {
        magazine,
        ...restProps
    }: {
        magazine: CatalogMagazine | MagazineInfo | MissListMagazine,
    } = $props();
</script>

<LogoBlock
    entity={magazine}
    href={localizeHref(`/magazines/catalog/${magazine.slug}`)}
    origin={MAGDB_ORIGIN}
    {...restProps}
/>