<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset08376_data } from '$src/routes/assets/asset_08376';
    import { data as asset08378_data } from '$src/routes/assets/asset_08378';
    import { data as asset08379_data } from '$src/routes/assets/asset_08379';
    import { data as asset08380_data } from '$src/routes/assets/asset_08380';
    import { data as asset08381_data } from '$src/routes/assets/asset_08381';
    import { data as asset08382_data } from '$src/routes/assets/asset_08382';
    import { data as asset08383_data } from '$src/routes/assets/asset_08383';
    import { data as asset08384_data } from '$src/routes/assets/asset_08384';
    import { data as asset08388_data } from '$src/routes/assets/asset_08388';
    import { data as asset08389_data } from '$src/routes/assets/asset_08389';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset08376_data, asset08378_data, asset08379_data, asset08380_data, asset08381_data, asset08382_data, asset08383_data, asset08384_data, asset08388_data, asset08389_data];
</script>

<PageLang cs />

<BlogPostPage
    author_name="Herní historie"
    date="23. září 2024"
    title="PROJEKT CÍTOV - Kazety s výukovými hrami na ZX Spectrum"
>

    <p>Po trapně dlouhé odmlce (za kterou se velice omlouváme všem, jenž čekali jak tento projekt pokročí) konečně přinášíme nějaké první prezentovatelné výsledky týkající se Projektu Cítov. Pro ty co náš původní příspěvek nepostřehli, zapomněli na něj, nebo si potřebují osvěžit paměť, tak Cítov je obec ve Středočeském kraji, ve které pod JZD v 80. letech fungoval počítačový klub zaměřující se primárně na počítače Atari. V rámci činnosti tohoto klubu pak dokonce začal v 90. letech vznikat komerčně distribuovaný výukový software, který právě v současnosti digitalizujeme. První várka tohoto softwaru, kterou se nám povedlo zachránit, je 10 výukových her na ZX Spectrum distribuovaných na kazetách. Těmito hrami jsou jazykové programy Člověče nezlob se, Kouzelný svět pohádek a Zábavná střelnice, které všechny vyšly v několika jazykových mutacích (např. Angličtina, Španělština apod.). Všechny tyto programy samozřejmě najdete na <a href="https://cs.speccy.cz">cs.speccy.cz</a> mezi "Programy" nebo v našem inventáři:
    {#each assets as data}
        <AssetBox {data} />
    {/each}
    <p>K dumpům kazet postupně přibudou i skeny veškerých materiálů, které byli ke kazetám přibaleny (tzn. návodů, obalů apod.).
</BlogPostPage>