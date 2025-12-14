<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost27 } from "./blog_post";
    import type { AssetData } from "$src/types";
    import { data as asset08395_data } from '$src/routes/assets/asset_08395';
    import AssetBox from "$src/lib/components/asset/AssetBox.svelte";

    let assets: AssetData[] = [asset08395_data];
</script>

<PageLang cs />

<BlogPostPage post={blogPost27}>

    <p>Nedávno se nám dostala do rukou sbírka návodů (a jiné literatury) pro ZX Spectrum. Mezi těmito návody byl i drobný sešítek nadepsaný "Nabídkový katalog pro počítače ZX SPECTRUM a kompatibilní" z konce roku roku 1990. Toto je zvlášť zajímavé proto, že v této době (tedy těsně po Sametové revoluci) byla jakákoliv forma takovéto distribuce ještě v plenkách. Toto mimojiné zaujalo i Jaroslava Švelcha, který nás požádal, abychom mu zmíněný katalog oskenovali a poslali.
    {#each assets as data}
        <AssetBox {data} />
    {/each}
</BlogPostPage>