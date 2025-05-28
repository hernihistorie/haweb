<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset07758_data } from '$src/routes/assets/asset_07758';
    import { data as asset07821_data } from '$src/routes/assets/asset_07821';
    import { data as asset07822_data } from '$src/routes/assets/asset_07822';
    import { data as asset07823_data } from '$src/routes/assets/asset_07823';
    import { data as asset07824_data } from '$src/routes/assets/asset_07824';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset07758_data, asset07821_data, asset07822_data, asset07823_data, asset07824_data];
</script>

<PageLang cs />

<BlogPost
    author_name="Herní historie"
    date="20. dubna 2024"
    title="Nově zachráněné hry od firmy Mael"
>

    <p>Tento pátek (20.4.2024) jsme byli na základě iniciativy ze strany <a href="https://www.facebook.com/karel.ondracek.5">Karla Ondráčka</a> (aka Solarise z Česko-Slovenského Speccy Archivu) u sběratele Filip Reichert zdigitalizovat některé předměty z jeho sbírky. Nejdůležitějším předmětem co jsme zdigitalizovali byly do teď nezachráněné hry (a jeden "propagační prográmek") na ZX Spectrum od firmy MAEL. Jedná se o hry: Defender of the Gold, Bomba a Katastrofa. Hry si budete moct za nedlouhou stáhnout ze <a href="https://cs.speccy.cz/">https://cs.speccy.cz/</a> nebo z našeho inventáře kde najdete i skeny obalu a návodů k těmto hrám:

    {#each assets as data}
        <AssetBox {data} />
    {/each}
        
    <p>Chceme moc poděkovat jak Filipovi za jeho vlídnost a pohostinnost tak i Karlovi (Solarisovi) za to, že celou tuto akci domluvil a že nás před ní pořádně nainstruoval. Je potěšení s Vámi spolupracovat ♥♥

    <p><small>(Foto od: Tomáš "Čápa" Čapek)</small>

    <p><img src="/photos/mael/mael1.jpg" alt="Kazeta MAEL GAMES 1"></p>

    <p><img src="/photos/mael/mael2.jpg" alt="Převod kazety"></p>

    <p><img src="/photos/mael/mael3.jpg" alt="Kazeta MAEL 01 zezadu"></p>

</BlogPost>