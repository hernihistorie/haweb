<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset08395_data } from '$src/routes/assets/asset_08395';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset08395_data];
</script>

<PageLang cs />

<BlogPostPage
    author_name="Herní historie"
    date="20. září 2024"
    title="Oskenovali jsme nabídkový katalog z počátku 90. let"
>

    <p>Nedávno se nám dostala do rukou sbírka návodů (a jiné literatury) pro ZX Spectrum. Mezi těmito návody byl i drobný sešítek nadepsaný "Nabídkový katalog pro počítače ZX SPECTRUM a kompatibilní" z konce roku roku 1990. Toto je zvlášť zajímavé proto, že v této době (tedy těsně po Sametové revoluci) byla jakákoliv forma takovéto distribuce ještě v plenkách. Toto mimojiné zaujalo i Jaroslava Švelcha, který nás požádal, abychom mu zmíněný katalog oskenovali a poslali.
    {#each assets as data}
        <AssetBox {data} />
    {/each}
</BlogPostPage>