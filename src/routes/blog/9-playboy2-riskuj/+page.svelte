<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset07760_data } from '$src/routes/assets/asset_07760';
    import { data as asset07761_data } from '$src/routes/assets/asset_07761';
    import { data as asset07762_data } from '$src/routes/assets/asset_07762';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset07760_data, asset07761_data, asset07762_data];
</script>

<PageLang cs />

<BlogPost
    author_name="Herní historie"
    date="3. května 2024"
    title="PLAYBOY2 a RISKUJ!"
>

    <p>Kromě toho, že jsme u sběratele Filip Reichert  před dvěma týdny zdigitalizovali několik kazet s hrami na ZX Spectrum, tak jsme také zvládli zdigitalizovat řadu videoher na CDčkách a Disketách (a něco jsme stihli i naskenovat!). Za zmínku stojí zejména dva tituly a to nikde nezdigitalizovaný Playboy 2 a Datadisk k riskuj. Dumpy k oběma hrám naleznete v našem inventáři zde:
    
    {#each assets as data}
        <AssetBox {data} />
    {/each}

</BlogPost>