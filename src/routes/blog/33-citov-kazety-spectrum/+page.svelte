<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost33 } from "./blog_post";
    import type { AssetData } from "$src/types";
    import { data as asset_08495_data } from '$src/routes/assets/asset_08495';
    import { data as asset_08496_data } from '$src/routes/assets/asset_08496';
    import AssetBox from "$src/lib/components/asset/AssetBox.svelte";

    let assets: AssetData[] = [asset_08495_data, asset_08496_data];
</script>

<PageLang cs />

<BlogPostPage post={blogPost33}>

    <p>Pod posledním příspěvkem, kde jsme ohlašovali zdárné zdigitalizování kazet z Cítova na ZX Spectrum, se nám ozval Václav Cymorek, který nám nabídnul, že nám věnuje na zdigitalizovaní dvě výukové Cítovské kazety, které nám ve sbírce chyběli. Navzdory názvu na samotném obalu (tedy Slovníček pro nejmenší) se však jednalo jen o novější verzi "zábavné STŘELNICE" která se liší zejména počtem slovíček, které se může uživatel naučit. Ačkoliv se nejdná o zcela nový program, tak jde stále o zajímavý přírůstek, za který moc děkujeme!
    {#each assets as data}
        <AssetBox {data} />
    {/each}
</BlogPostPage>