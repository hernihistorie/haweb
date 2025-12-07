<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset08385_data } from '$src/routes/assets/asset_08385';
    import { data as asset08387_data } from '$src/routes/assets/asset_08387';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset08385_data, asset08387_data];
</script>

<PageLang cs />

<BlogPostPage
    author_name="Herní historie"
    date="30. září 2024"
    title="PROJEKT CÍTOV - Kazety s výukovýmy programy na Atari 800XL/XE, 130XE"
>

    <p>Minulé pondělí jsme sdíleli naše plody digitalizace kazet na ZX Spectrum ke kterým jsme se dostali díky Cítovskému počítačovému klubu. Jestli naší snahu sledujete dlouhodobě, tak jste asi zaznamenali, že většina programů, jenž jsme zachraňovali a zveřejňovali, je právě na Spectrum. Ačkoliv máme ve sbírce i mnoho kazet na jiné platformy (nejvíce asi na Atari), tak pravdou zkrátka je, že Spectrum je z pohledu digitalizace kazet nejvíce přátelská platforma a zároveň s nim máme zdaleka nejvíce zkušeností. Proto jsme velice rádi, že nám s digitalizací posledních dvou Cítovských kazet, jenž byli na počítač Atari 800XL/XE, 130XE pomohl a poradil úžasný baktra na fóru <a href="https://www.oldcomp.cz">OldComp.cz</a>. Dumpy kazet se objeví (v upravené podobě) na <a href="https://a8.fandal.cz/">a8.fandal.cz</a> nebo je můžete již nyní stáhnout z našeho inventáře:
    
    {#each assets as data}
        <AssetBox {data} />
    {/each}

    <p>Vzhledem k tomu, že je celý program nahraný v nestadardním Turbu, tak je možné, že se Vám ho (zejména v emulátoru) napovede spustit na první dobrou. Pokud se tak stane, tak si projděte <a href="http://oldcomp.cz/viewtopic.php?f=25&t=12937">samotné vlákno</a> ve kterém je jeho digitalizace probíraná
</BlogPostPage>