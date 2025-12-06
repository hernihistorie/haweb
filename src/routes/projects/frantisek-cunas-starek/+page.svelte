<script lang="ts">
	import Meta from "$lib/Meta.svelte";
    import type { InterviewData } from "$src/types";
    import InterviewBox from "$lib/InterviewBox.svelte";
    import { data as cunas_data } from '$src/routes/interviews/frantisek-cunas-starek/interview';
	import AssetList from "$src/lib/AssetList.svelte";
    import Loc from "$src/lib/Loc.svelte";

    let interviews: InterviewData[] = [cunas_data];
</script>

<Meta title='Fond Františka „Čuňase“ Stárka' />

<article class="thin">
    <h2><Loc
        cs='Fond Františka „Čuňase“ Stárka'
        en='František „Čuňas“ Stárek Collection'
        /></h2>
    <div><Loc
            cs='<p><strong>Název projektu</strong>: František „Čuňas“ Stárek
                <p><strong>Jména zpracovatelů</strong>: Jaroslav Švelch, Rudolf Jan Suchý
                <p><strong>Rok dokončení projektu</strong>: 2025'
            en='<p><strong>Project name</strong>: František „Čuňas“ Stárek
                <p><strong>Names of the involved archivists</strong>: Jaroslav Švelch, Rudolf Jan Suchý
                <p><strong>Year of project completion</strong>: 2025'
        />
        <p><Loc
            cs="V případě otázek či nejasností se nám ozvěte na <a href='mailto:info@herniarchiv.cz'>info@herniarchiv.cz</a>"
            en="If you have any questions, feel free to contact us at <a href='mailto:info@herniarchiv.cz'>info@herniarchiv.cz</a>"
            />
        <hr>
    </div>
    <div class="picture-cite">
        <p><img src="/photos/frantisek-starek/frantisek_starek_1.jpg" alt="Pavel Lašák u počítače ZX Spectrum+">
        <cite><Loc
            cs="Pavel Lašák u počítače ZX Spectrum+ (Zdroj: František Stárek)"
            en="Pavel Lašák working on ZX Spectrum+ (Source: František Stárek)"/>
        </cite>
    </div>
    <p>Československá počítačová kultura 80. let je zejména spojovaná s aktivitami hobbyistů a počítačových klubů. Tyto aktivity byly státem podporované, tolerované nebo alespoň ignorované, nicméně osobní počítače se dostaly i mezi takové, kteří byli režimem aktivně stíháni. Mezi ně patřila i redakce časopisu <strong><i>Vokno</i></strong>, zejména pak neformální uskupení „výzkumný ústav samizdatový“, složený z programátorů <strong>Jiřího Včeláka</strong> a <strong>Pavla Lašáka</strong> a šéfredaktora <i>Vokna</i> <strong>Františka „Čuňase“ Stárka</strong>. (<i>Jak obehrát železnou oponu</i>, Jaroslav Švelch, 2021)
    <p>Stárek, Lašák i Včelák byli majitelé osobního počítače ZX Spectrum, které používali od druhé poloviny 80. let zejména k tvorbě cyklostylových šablon, které měly usnadnit tisk samizdatového časopisu. Počítač také sloužil k výrobě grafiky pro <i>Videomagazín Vokna</i>, který byl šířen od roku 1988 na videokazetách. Stárkovi Spectrum také sloužilo jako forma bezpečného uchovávání citlivé databáze odběratelů Vokna – jména předplatitelů napsal v <i>D-Textu</i>, tato data uložil na kazetu a pískávý signál schoval mezi hudební skladby. „Výzkumný ústav“ měl také ambice vyvinout program, který by se dnes dal přirovnat k současným čtečkám. Program, který se jmenoval <i>Kniha</i>, byl „ústavem“ vyvinut na konci 80. let pro účely šíření semizdatové literatury, nicméně kvůli Stárkově uvěznění v roce 1989 a Sametové revoluci, pro program nikdy nevznikl žádný obsah a nikdy se nedostal do oběhu. (<i>Jak obehrát železnou oponu</i>, Jaroslav Švelch, 2021)
	<div class="picture-cite">
        <p><img src="/photos/frantisek-starek/videomagazin_vokno.png" alt="Grafika z Videomagazínu Vokna">
        <cite><Loc
            cs="Grafika z <i>Videomagazínu Vokna</i> (Zdroj: František Stárek)"
            en="Grafick from <i>Videomagazín Vokno</i> (Source: František Stárek)"/>
        </cite>
    </div>
    <p>V roce 2024 Herní archiv převzal od Jaroslava Švelcha na digitalizaci kazety Fratiška Stárka s programy pro ZX Spectrum. Z těchto kazet se kromě cizí tvorby podařilo zdigitalizovat program <i>Kniha</i>, grafiku k <i>Videomagazínu Vokna</i>, soubory s adresami odběratelů <i>Vokna</i> a program pro jejich tisk. Obsah kazet stejně jako rozhovor s Františkem Stárkem byl zveřejněn roku 2025.

    <h3>Rozhovory</h3>
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
    
    <AssetList assetTagId={22} withHeading />

</article>
