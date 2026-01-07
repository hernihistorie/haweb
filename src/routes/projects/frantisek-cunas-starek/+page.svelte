<script lang="ts">
	import ProjectPage from "$src/lib/components/project/ProjectPage.svelte";
    import type { InterviewData } from "$src/types";
    import InterviewBox from "$src/lib/components/interviews/InterviewBox.svelte";
    import { data as cunas_data } from '$src/routes/interviews/frantisek-cunas-starek/interview';
	import AssetList from "$src/lib/components/asset/AssetList.svelte";
    import Loc from "$lib/components/Loc.svelte";
    import { projectFrantisekCunasStarek } from './project';
	import { loc } from "$src/lib/loc";
	import LucideDownload from "@lucide/svelte/icons/download";

    let interviews: InterviewData[] = [cunas_data];
</script>

<ProjectPage project={projectFrantisekCunasStarek}>
    <div><Loc
            cs='<p><strong>Název fondu</strong>: František Stárek Čuňas
                <p><strong>Jména zpracovatelů</strong>: Rudolf Jan Suchý, Jaroslav Švelch
                <p><strong>Rok dokončení projektu</strong>: 2026'
            en='<p><strong>Collection name</strong>: František Stárek Čuňas
                <p><strong>Names of the involved archivists</strong>: Rudolf Jan Suchý, Jaroslav Švelch
                <p><strong>Year of project completion</strong>: 2026'
        />
        <hr>
    </div>
    <div class="picture-cite">
        <p><img src="/photos/frantisek-starek/frantisek_starek_1.jpg" alt="Pavel Lašák u počítače ZX Spectrum+">
        <cite><Loc
            cs="Pavel Lašák u počítače ZX Spectrum+ (Zdroj: František Stárek)"
            en="Pavel Lašák working on a ZX Spectrum+ (Source: František Stárek)"/>
        </cite>
    </div>
    <Loc>
        {#snippet cs()}
            <p>Československá počítačová kultura 80. let je zejména spojovaná s aktivitami hobbyistů a počítačových klubů. Tyto aktivity byly státem podporované, tolerované nebo alespoň ignorované, nicméně osobní počítače se dostaly i mezi takové, kteří byli režimem aktivně stíháni. Mezi ně patřila i redakce časopisu <strong><i>Vokno</i></strong>, zejména pak neformální uskupení „výzkumný ústav samizdatový“, složený z programátorů <strong>Jiřího Včeláka</strong> a <strong>Pavla Lašáka</strong> a šéfredaktora <i>Vokna</i> <strong>Františka Stárka</strong>. (<a href="https://eshop.akropolis.info/literarni-veda/jak-obehrat-zeleznou-oponu/"><i>Jak obehrát železnou oponu</i></a>, Jaroslav Švelch, 2021)</p>
            <p>Stárek, Lašák i Včelák byli majitelé osobního počítače ZX Spectrum, které používali od druhé poloviny 80. let zejména k tvorbě cyklostylových šablon, které měly usnadnit tisk samizdatového časopisu. Počítač také sloužil k výrobě grafiky pro <i>Videomagazín Vokna</i>, který byl šířen od roku 1988 na videokazetách. Stárkovi Spectrum také sloužilo jako forma bezpečného uchovávání citlivé databáze odběratelů Vokna – jména předplatitelů napsal v <i>D-Textu</i>, tato data uložil na kazetu a pískávý signál schoval mezi hudební skladby. „Výzkumný ústav“ měl také ambice vyvinout program, který by se dnes dal přirovnat k současným elektronickým čtečkám. Program, který se jmenoval <i>Kniha</i>, byl „ústavem“ vyvinut na konci 80. let pro účely šíření samizdatové literatury, nicméně kvůli Stárkově uvěznění v roce 1989 a Sametové revoluci pro program nikdy nevznikl žádný obsah a nikdy se nedostal do oběhu. (<a href="https://eshop.akropolis.info/literarni-veda/jak-obehrat-zeleznou-oponu/"><i>Jak obehrát železnou oponu</i></a>, Jaroslav Švelch, 2021)</p>
        {/snippet}
        {#snippet en()}
            <p>The Czechoslovak computer culture of the 1980s is especially associated with the activities of hobbyists and computer clubs. These activities were state-supported, tolerated, or at least ignored; however, personal computers also reached those who were actively persecuted by the regime. Among them was the editorial office of the magazine <strong><i>Vokno</i></strong>, particularly the informal group "samizdat research institute", consisting of programmers <strong>Jiří Včelák</strong> and <strong>Pavel Lašák</strong> and the editor-in-chief of <i>Vokno</i>, <strong>František Stárek</strong>. (<a href="https://ironcurtain.svelch.com/"><i>Gaming the Iron Curtain</i></a>, Jaroslav Švelch, 2021)</p>
            <p>Stárek, Lašák, and Včelák were owners of the ZX Spectrum personal computer, which they used from the mid-1980s primarily to create stencil templates that simplified the printing of the samizdat magazine. The computer was also used for the creation of graphics for the <i>Videomagazín Vokna</i>, which was distributed from 1988 on videotapes. Stárek also used the Spectrum as a form of secure storage for the sensitive database of Vokno subscribers – he wrote the names of subscribers in <i>D-Text</i>, saved this data to tape, and hid the beeping signal among musical tracks. The "research institute" also had ambitions to develop a program that could be compared to modern e-readers. The program, called <i>Kniha</i> (Book), was developed by the "institute" at the end of the 1980s for the purpose of disseminating samizdat literature; however, due to Stárek's imprisonment in 1989 and the Velvet Revolution, no content was ever created for the program, and it was never published. (<a href="https://ironcurtain.svelch.com/"><i>Gaming the Iron Curtain</i></a>, Jaroslav Švelch, 2021)</p>
        {/snippet}
    </Loc>
	<div class="picture-cite">
        <p>
            <img
                src="/photos/frantisek-starek/videomagazin_vokno.png"
                alt={loc({cs: "Grafika z Videomagazínu Vokna", en: "Graphics from Videomagazín Vokna"})}
            >
        <cite><Loc
            cs="Grafika z <i>Videomagazínu Vokna</i> (Zdroj: František Stárek)"
            en="Graphics from <i>Videomagazín Vokno</i> (Source: František Stárek)"/>
        </cite>
    </div>
    <p>
        <Loc>
            {#snippet cs()}
                V roce 2024 Herní archiv převzal od Jaroslava Švelcha na digitalizaci kazety Fratiška Stárka s programy pro ZX Spectrum. Z těchto kazet se kromě cizí tvorby podařilo zdigitalizovat program <i>Kniha</i>, grafiku k <i>Videomagazínu Vokna</i>, soubory s adresami odběratelů <i>Vokna</i> a program pro jejich tisk. Obsah některých kazet stejně jako rozhovor s Františkem Stárkem byl zveřejněn roku 2026.
            {/snippet}
            {#snippet en()}
                In 2024, the Game Archive received František Stárek's ZX Spectrum program tapes from Jaroslav Švelch for the purpose of digitization. From these tapes, in addition to creations from others, it was possible to digitize the program <i>Kniha</i> (Book), graphics for <i>Videomagazín Vokno</i>, files with the addresses of <i>Vokno</i> subscribers, and a program for their printing. The content of some of the tapes, as well as the interview with František Stárek, was published in 2026.
            {/snippet}
        </Loc>
    </p>
    <h3>
        <a href="/files/starek/archiv_starek.zip" class="download">
            <LucideDownload/>
            <Loc cs="Archiv originálních programů" en="Archive of original programs" />
        </a>
    </h3>
    <p>Zde můžete stáhnout vybrané programy od kolektivu samizdatového časopisu <i>Vokno</i>. Archiv obsahuje program <i>Kniha</i> a k němu doprovodný program <i>K-Úvod</i>, program na tisk adres, program na tisk a kopírování screen filů a několik animací a obrázků vyrobených zejména pro <i>Videomagazín Vokna</i>.</p>
    <h3><Loc cs="Rozhovory" en="Interviews" /></h3>
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
    
    <AssetList assetTagId={22} withHeading />

</ProjectPage>

<style>
    .download {
        text-decoration: none;
    }

    .download:hover {
        text-decoration: underline;
    }
</style>