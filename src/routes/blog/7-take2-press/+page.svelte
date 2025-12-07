<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset07392_data } from '$src/routes/assets/asset_07392';
    import { data as asset07393_data } from '$src/routes/assets/asset_07393';
    import { data as asset07394_data } from '$src/routes/assets/asset_07394';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset07392_data, asset07393_data, asset07394_data];
</script>

<PageLang cs />

<BlogPostPage
    author_name="Herní historie"
    date="1. dubna 2024"
    title="Dumpy press CD firmy Take2"
>

    <p>Nedávno jsme se dostali k CDčkám z daleké Austrálie s press materiály firmy Take 2. Kromě materiálů k hrám jako je např. Tropico mezi nima byly věci k českým klasikám Mafia a Vietcong!
    <p>Kromě screenshotů z her lze v rámci těchto materiálů nalézt i concept arty, přebaly her, doprovodné texty, powerpoint prezentace apod.
    <p>Kompletní dumpy těchto CDček naleznete zde: 
    
    {#each assets as data}
        <AssetBox {data} />
    {/each}

    <p><small>(Obrázky pochází z Take 2 press materiálů)</small>

    <p><img src="/photos/mafia_poster.jpg" alt="Plakát ke hře Mafia"></p>
    <p><img src="/photos/mafia_cd.jpg" alt="Grafika k Mafii"></p>
    <p><img src="/photos/vietcong_doc.jpg" alt="Press dokument ke hře Vietcong"></p>
</BlogPostPage>