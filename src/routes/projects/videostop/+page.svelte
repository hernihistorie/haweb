<script lang="ts">
	import ProjectPage from "$lib/ProjectPage.svelte";
    import type { InterviewData } from "$src/types";
    import InterviewBox from "$lib/InterviewBox.svelte";
    import { data as vodak_data } from '$src/routes/interviews/zdenek-vodak/interview';
    import { data as bezdek_data } from '$src/routes/interviews/vladimir-bezdek/interview';
	import AssetList from "$src/lib/AssetList.svelte";
    import { projectVideostop } from './project';
	import PageLang from "$src/lib/PageLang.svelte";

    let interviews: InterviewData[] = [vodak_data, bezdek_data];
</script>

<ProjectPage project={projectVideostop}>
    <PageLang cs />
    <div>
        <p><strong>Název projektu</strong>: Videostop
        <p><strong>Jména zpracovatelů</strong>: Rudolf Jan Suchý, Karel Ondráček, Vojtěch Straka, Roman Bórik
        <p><strong>Rok dokončení projektu</strong>: 2024
    </div>
    <div class="picture-cite">
        <p><img src="/photos/videostop_porad.jpg" alt="Záběr hry v samotném pořadu">
        <cite><i>Videostop</i> (Ivo Paukert, Česká televize 1996)</cite>
    </div>
    <p>
        Původní verze zábavného pořadu <em>Videostop</em> byla vysílaná mezi lety 1985 a 2000. Pořad testoval soutěžící v jejich znalostech Československé (a od roku 1989 i světové) filmové a televizní tvorby – byl jim vždy puštěn úryvek z nějakého filmu, podle kterého měli poznat, o jaký film/seriál se jedná. Po té, co jeden ze čtyř (později tří) soutěžících správně uhodl, z čeho byla zmíněná ukázka, mu byla položena druhá otázka, se kterou mu radil jeden z VIP hostů, který buď mohl radit soutěžícímu správně, nebo ,,blafovat”. Pokud soutěžící správně odhadl, jestli mu host lže nebo říká pravdu, tak dostal ještě bod navíc. Vítěz s nejvíce body měl nakonec možnost si zahrát elektronické kostky (dále jen <em>Hra Videostop</em>), díky čemuž mohl následně vyhrát různé ceny – pokud nahrál jen málo bodů, tak dostal bačkory, pokud se mu naopak ve hře dařilo, tak mohl vyhrát třeba televizor.
    </p>
    <p>
        Zejména v 80. letech byl tento pořad, s jehož konceptem přišel televizní technik Vladimír Bezděk st., fenoménem, který se těšil velké popularitě jak v Česku tak na Slovensku. Do značné míry mohla za popularitu tohoto pořadu moderátorská dvojice (která pořad uváděla od roku 1987) Jana Rosáka a filmového historika Karla Čáslavského. Atraktivní byl pořad i kvůli samotné koncepci – VIP hosté zde nebyli jen proto, aby radili soutěžícím, ale také se podíleli o různé historky z natáčení nebo z jejich životů. Nicméně, čím se <em>Videostop</em> výrazně lišil od jiných tuzemských soutěžních pořadů z této doby, byla snaha o zapojení nových médií do jeho fungování. Toto je zejména patrné pokud <em>Videostop</em> porovnáváte s např. <em>Šesti rany do klobouku</em>. V <em>Klobouku</em> byli soutěžící před zodpovídáním otázek vybírání moderátorem, body byly počítané za pomocí fyzických míčků a hra na konci spočívala v házení těchto míčků do velkého klobouku. Naopak ve <em>Videostopu</em> se soutěžící pro odpovídání na otázku předháněli v tom, kdo dříve zmáčkne tlačítko, body byly počítané a vykreslované za pomocí počítače a hra na konci byla jednoduchá (avšak napínavá) videohra.
    </p>
    <p><img src="/photos/videostop_kazeta.jpg" alt="Původní kazety s programem Videostop"></p>
    <p>
        Tato fascinace interaktivností <em>Videostopu</em> byla ve své době do velké míry reflektovaná i v rámci Slovenské a České herní kultury. Během 80. a 90. let vznikla celá řada klonů hry <em>Videostop</em> téměř na každý počítač, který zde byl dostupný.
    </p>
    <p>
        Původní program od Ing. Zdeňka Vodáka však získal a zpřístupnil Herní archiv až v roce 2024 a to díky jeho autorovi. Součástí fondu jsou kromě samotných kazetových pásek s <em>Hrou Videostop</em>, dumpy těchto pásek, scénáře k Videostopu a jejich skeny nebo rozhovory se Zdeňkem Vodákem a Vladimírem Bezděkem st.
    </p>

    <h3>Články a přednášky</h3>
    <ul><li><b>Přednáška z ByteFESTu 2024</b> s názvem <i>„Historie a prezentace hry z pořadu Videostop"</i> od Rudolfa Jana Suchého (<a href="https://www.youtube.com/watch?v=Ce_lJMa0X6s">ZÁZNAM ZDE</a>)</ul>

    <h3 id="Navody">Návody</h3>
    <h4>Návod na spuštění hry Videostop</h4>
    <p>
        Pokud si chcete hru z pořadu <em>Videostop</em> jen zahrát a chcete se vyhnout složitému nastavováním, tak doporučujeme hru stáhnout z <a href="https://cs.speccy.cz/games/Videostop_Vodak.zip">cs.speccy</a>. Zde kromě originální verze naleznete i verzi upravenou, kterou lze nahrát samu o sobě a také je hratelná jen za pomocí klávesnice. Tato upravená verze je pojmenovaná <code>Videostop_v1_fixed.tap</code>. V menu této verze se pohybujete za pomocí čísel a hru ovládáte klávesou <code>7</code>. Pokud byste si naopak chtěli zahrát hru s ovladačem/joystickem, tak spusťte verzi s názvem <code>Videostop_v1_fixed_kemp.tap</code>. I zde menu ovládáte za pomocí čísel, ale hru zde ovládáte pomocí Kempston joysticku. (Autor upraveného programu: Roman Bórik)
    </p>
    <p>
        Pro spuštění originální hry z pořadu <em>Videostop</em> budete potřebovat samozřejmě ZX Spectrum (nebo kompatibilní), Kempston interface s ovladačem/joystickem a Basicový interpreter <em><a href="https://spectrumcomputing.co.uk/entry/8997/ZX-Spectrum/YS_MegaBasic">YS MegaBasic</a></em>. Pokud si chcete zahrát hru v emulovaném prostředí, tak budete potřebovat emulátor jenž podporuje i emulaci Kempston Joysticku (např. emulátor <em><a href="https://www.spectaculator.com/">Spectaculator</a></em>) a zmíněný <em>YS MegaBasic</em>. Nakonec budete potřebovat samotnou hru, kterou je možné stáhnout na <a href="https://cs.speccy.cz/index.php">cs.speccy.cz</a> a nebo z našeho inventáře (viz. <a href="#Predmety">Předměty</a>).
    </p>

    <p>
        <strong>Nahrávání hry:</strong>
    </p>
    <ol>
        <li>Spusťte počítač/emulátor. V případě, že hrajete hru na původním hardwaru, tak předtím zapojte periferie a naopak poklud používáte emulátor, tak zapněte ovládání pomocí Kempston joystick.
        </li><li>Po spuštění nahrajte program YS MegaBasic za pomocí příkazu <code>LOAD ""</code>.
        </li><li>Po nahrání YS MegaBasic stiskněte jakékoliv tlačítko kromě písmena <code>m</code>.
        </li><li>Nyní v YS MegaBasic nahrajte program Videostop za pomocí příkazu <code>LOAD ""</code>.
        </li><li>Po nahrání hry by se vám mělo zobrazit menu hry. Vyberte pomocí čísel jednu z možností – pro samotnou hru vyberte ZAVERECNE LOSOVANI.
        </li><li>Nyní by se vám měla zobrazit samotná hra. Ovládáte ji pomocí joysticku zapojeného do Kempston interface. Vzhledem k tomu, že hra se ovládal jen pomocí jednoho velkého tlačítka, tak by měla jakýkoliv input vždy interpretovat, jako zmáčknutí tohoto tlačítka.
    </ol>
    
    <h3>Rozhovory</h3>
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
    
    <h3 id="Predmety">Předměty</h3>
    <AssetList assetTagId={8} />

</ProjectPage>
