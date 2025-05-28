<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset_08495_data } from '$src/routes/assets/asset_08495';
    import { data as asset_08496_data } from '$src/routes/assets/asset_08496';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset_08495_data, asset_08496_data];
</script>

<PageLang cs />

<BlogPost
    author_name="Herní historie"
    date="16. prosince 2024"
    title="PROJEKT CÍTOV - Další kazety s výukovými programy na ZX Spectrum"
>

    <p>Pod posledním příspěvkem, kde jsme ohlašovali zdárné zdigitalizování kazet z Cítova na ZX Spectrum, se nám ozval Václav Cymorek, který nám nabídnul, že nám věnuje na zdigitalizovaní dvě výukové Cítovské kazety, které nám ve sbírce chyběli. Navzdory názvu na samotném obalu (tedy Slovníček pro nejmenší) se však jednalo jen o novější verzi "zábavné STŘELNICE" která se liší zejména počtem slovíček, které se může uživatel naučit. Ačkoliv se nejdná o zcela nový program, tak jde stále o zajímavý přírůstek, za který moc děkujeme!
    {#each assets as data}
        <AssetBox {data} />
    {/each}
</BlogPost>