<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset08411_data } from '$src/routes/assets/asset_08411';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset08411_data];
</script>

<BlogPost
    author_name="Herní historie"
    date="1. listopadu 2024"
    title="Na ByteFestu jsme zachránili hru na ZX Spectrum (mimojiné)"
>

    <p>Podobně jako na minulém ByteFestu, tak i na tomto nám byla donesena kazety s nezazálohovanou hrou na ZX Spectru. Tu nám přinesl Martin Kadlcik a z ni se nám povedlo zdigitalizovat hru jménem "das ALDERNEST". Tu najdete již tradičně na <a href="https://cs.speccy.cz">cs.speccy.cz</a> a a nebo v našem Inventáři:
    {#each assets as data}
        <AssetBox {data} />
    {/each}
    <p>Také jsme měli na ByteFestu přednášku o dějinách a záchraně původní hry z pořadu Videostop, kterou jste si u nás mohli i zahrát. Moc děkujeme za všechny pozitivní reakce a zvídavé otázky které jste kladli - moc nás těší Váš zájem, kterým jste naší snahu hru záchranit zahrnuli. Pokud byste chtěli podobnou činnost podpořit, tak můžete skrze naše <a href="https://herohero.co/hernihistorie">HeroHero</a>.
    <p><img src="/photos/prednaska.jpg" alt="Přednáška"></p>
    <p><img src="/photos/videostop_photo.jpg" alt="Videostop"></p>
</BlogPost>