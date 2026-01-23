<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
    import type { AssetData } from "$src/types";
    import { data as asset07859_data } from '$src/routes/assets/asset_07859';
    import { data as asset07860_data } from '$src/routes/assets/asset_07860';
    import AssetBox from "$src/lib/components/asset/AssetBox.svelte";

    let assets: AssetData[] = [asset07859_data, asset07860_data];
</script>

<PageLang cs />

<BlogPostPage post={blogPost}>

    <p>Jak jsme slíbili, tak jsme konečně zdigitalizovali a zveřejnili originální hru z pořadu Videostop. Hra původně neměla být vůbec veřejně distribuovaná a její spuštění a zapojení tedy není úplně triviální. Z tohoto důvodu jsme pro vás připravili stručný <a href="https://herniarchiv.cz/projects/videostop/">návod</a>, který by vás měl seznámit s tím, co vše k hraní potřebujete a jak hru zapnout a ovládat. Na tomto odkazu budeme později doplňovat i další věci týkající se tohoto projektu (jako jsou rozhovory, další předměty apod.).
    <p><img src="/photos/videostop_screenshot.jpg" alt="Videostop"></p>
    <p>Pro ty, kteří se nechtějí babrat se stahováním Basicových interpreterů a zapojováním joysticků si doporučujeme stáhnout upravenou verzi programu z <a href="https://cs.speccy.cz/games/Videostop_Vodak.zip">cs.speccy</a> (za jejíž přípravu převelice děkujeme Romanu Bórikovi). Na cs.speccy zároveň můžete s upravenou hrou stáhnout i její dvě originální neupravené verze (upravená verze programu je pojmenována "Videostop_v1_fixed.tap" nebo "Videostop_v1_fixed_kemp.tap").
    <p>Na kazteách od pan Ing. Vodáka jsme však nenašli jen dvě verze Videostopu – verzí hry lze nalézt na kazetách hned deset a je na nich i rozpracovaný font ze hry a jiné autorovy programy, které se používaly v rámci vysílání v ČST. Pokud by tedy někoho zajímalo, jak se jednotlivé verze lišily a co jiného pan Vodák dělal, tak si kompletní dump obou kazet můžete stáhnout zde:
    {#each assets as data}
        <AssetBox {data} />
    {/each}
    <p>Pokud byste si nevěděli s čímkoliv rady tak se nesotýchejte ozvat.
</BlogPostPage>