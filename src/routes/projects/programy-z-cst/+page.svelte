<script lang="ts">
	import ProjectPage from "$src/lib/components/project/ProjectPage.svelte";
	import LucideDownload from "@lucide/svelte/icons/download";
    import Loc from "$lib/components/Loc.svelte";
    import { projectProgramyZCST } from './project';

    let krc = [{id: 1, text: "Program z 1. dílu seriálu generuje n-tice čísel, která se krátce objeví na obrazovce. Na hráčstvu je, aby tato čísla stihlo přečíst.", text_en: "The program from episode 1 of the series generates n-tuples of numbers that briefly appear on the screen. It is up to the player to read these numbers in time."},
               {id: 2, text: "Program z 2. dílu seriálu generuje n-tice znaků, které se krátce objeví na obrazovce. Na hráčstvu je, aby tyto znaky stihlo přečíst.", text_en: "The program from episode 2 of the series generates n-tuples of characters that briefly appear on the screen. It is up to the player to read these characters in time."},
               {id: 3, text: "Program z 3. dílu seriálu generuje n-tice znaků, které se krátce objeví na obrazovce. Na hráčstvu je, aby tato čísla a písmena stihlo přečíst.", text_en: "The program from episode 3 of the series generates n-tuples of characters that briefly appear on the screen. It is up to the player to read these characters in time."},
               {id: 4, text: "Program z 4. dílu seriálu zobrazuje krátké texty, které se krátce objeví na obrazovce. Na hráčstvu je, aby tyto texty stihlo přečíst.", text_en: "The program from episode 4 of the series displays short texts that briefly appear on the screen. It is up to the player to read these texts in time."},
               {id: 5, text: "Program z 5. dílu seriálu generuje dvojskupiny po třech znacích, mezi kterými musí hráčstvo najít co nejrychleji všechny rozdíly.", text_en: "The program from episode 5 of the series generates pairs of three-character groups, in which the player must quickly find all the differences."},
               {id: 7, text: "Program z 7. dílu seriálu zobrazí dva sloupce slov, které musí hráčstvo přečíst co nejrychleji.", text_en: "The program from episode 7 of the series displays two columns of words that the player must read as quickly as possible."},
               {id: 8, text: "Program z 8. dílu seriálu trénuje diváctvo v selektivním čtení – hráčstvo si má všímat všech čísel v textu a zapamtovat si je.", text_en: "The program from episode 8 of the series trains viewers in selective reading — the player must notice all numbers in the text and remember them."},
               {id: 10, text: "Program z 10. dílu vypíše na obrazovce text, který musí hráčstvo v omezeném čase přečíst a pak odpovědět na otázky, vztahující se k tomuto textu.", text_en: "The program from last episode displays a text on the screen that the player must read within a limited time and then answer questions related to the text."}
            ]
    let pd = [{id: 1, program: "Hlavní část programu", program_en: "The main part of the program", text: "Část programu z 1. epizody tvoří základ pro celý program – díky němu celý program drží pohromadě a zároveň mu dodává hlavní menu.", text_en: "The program part from episode 1 serves as the foundation for the entire program — it holds everything together and also provides the main menu."},
              {id: 2, program: "Program Adresář", program_en: "'Adress book' program", text: "Část programu z 2. epizody umožňuje uživatelstvu vést si seznam lidí, včetně jejich data narození, adresy a telefoního čísla.", text_en: "The program part from episode 2 allows users to keep a list of people, including their date of birth, address, and phone number."},
              {id: 3, program: "Program Mám půjčeno", program_en: "'I have borrowed' program", text: "Tato část programu ze 3. epizody pořadu umožňuje uživatelstvu vést si seznam půjčených věcí a propojit ho s konkrétní osobou z Adresáře.", text_en: "This program part from episode 3 of the show allows users to keep a list of borrowed items and link them to a specific person from the Address Book."},
              {id: 4, program: "Program Půjčil jsem", program_en: "'I have lent' program", text: "Část programu ze 4. epizody pořadu umožňuje vést si seznam uživatelstvem půjčených věcí a propojit ho s konkrétní osobou z Adresáře.", text_en: "This program part from episode 4 of the show allows users to keep a list of borrowed items and link them to a specific person from the Address Book."},
              {id: 5, program: "Program Seznam událostí", program_en: "'List of Events' program", text: "Část programu z 5. epizody umožňuje uživatelstvu vést si seznam všech událostí které proběhly nebo mají proběhnout.", text_en: "The program part from episode 5 allows users to keep a list of all events that have taken place or are about to take place."},
              {id: 6, program: "Program Jmeniny", program_en: "'Name day' program ", text: "Tato část programu ze 6. epizody funguje jako kalendář všech svátků – uživatelstvo zadá datum a program mu napíš, kdo má v dané datum svátek.", text_en: "This program part from episode 6 functions as a calendar of all holidays — users enter a date, and the program tells them whose name day it is on that date."},
              {id: 7, program: "Program Východy a západy slunce", program_en: "Sunrises and Sunsets' program", text: "Část programu ze 7. epizody umožňuje uživatelstvu spočítat na základě data a polohy v kolik hodin výjde a zapadne slunce.", text_en: "The program part from episode 7 allows users to calculate the time of sunrise and sunset based on the date and location."},
              {id: 8, program: "Program Zásoby doma", program_en: "'Home supplies' program", text: "Tato část programu z 8. epizody umožňuje uživatesltvu vést seznam všech zásob u nich doma.", text_en: "This program part from episode 8 allows users to maintain a list of all their home supplies."},
              {id: 9, program: "Program Poznámky", program_en: "'Notes' program", text: "Část programu z 9. epizody umožňuje uživatesltvu vést si vlastní poznámky.", text_en: "The program part from episode 9 allows users to take their own notes."},
              {id: 10, program: "Hlavní část programu", program_en: "The main part of the program", text: "Část programu z 10. epizody je stejná jako část vysílaná v první epizodě.", text_en: "The program part from last episode serves as the foundation for the entire program — it holds everything together and also provides the main menu."}
            ]
</script>

<ProjectPage project={projectProgramyZCST}>
    <div><Loc
            cs="<p><strong>Název projektu</strong>: Programy z Československé televize
                <p><strong>Jména zpracovatelů</strong>: Rudolf Jan Suchý, Lukáš Macura, Karel Ondráček
                <p><strong>Rok dokončení projektu</strong>: 2025"
            en="<p><strong>Project name</strong>: Programs from Czechoslvak Television
                <p><strong>Names of the involved archivists</strong>: Rudolf Jan Suchý, Lukáš Macura, Karel Ondráček
                <p><strong>Year of project completion</strong>: 2025"
        />
        <hr>
    </div>
    <div class="picture-cite">
        <p><img src="/photos/cst/krc/krc_computer.png" alt="Ing. David Gruber pracuje na ZX Spectru">
        <cite><Loc
            cs="<i>Kurz rychlého čtení,</i> 7. díl (Jan Flak, Československá televize 1986)"
            en="<i>Kurz rychlého čtení,</i> episode 7 (Jan Flak, Československá televize 1986)"/>
        </cite>
    </div>
    <p><Loc
        cs="Na konci 80. let Československá televize vyprodukovala dva zdánlivě nesouvisející pořady – v roce 1986 vytvořila pořad <i>Kurz rychlého čtení</i> a v roce 1988 pak pořad <i>Počítačová dilemata</i>. <i>Kurz rychlého čtení</i> byl desetidílný vzdělávací seriál, který měl – jak název napovídá – diváctvo naučit techniky rychločtení. <i>Počítačová dilemata</i> měla také deset dílů, ale narozdíl od <i>Kurzu</i> se jednalo o popularizační pořad, který se snažil zejména neobeznámenou část diváctva seznámit s tehdejšími dostupnými osobními počítači, jejich funkcemi a možným použitím."
        en="At the end of the 1980s, Czechoslovak Television produced two seemingly unrelated programs – <i>Kurz rychlého čtení</i> (Speed Reading Course) in 1986 and <i>Počítačová dilemata</i> (Computer Dilemmas) in 1988. <i>Kurz rychlého čtení</i> was a ten-part educational series designed to teach viewers speed-reading techniques. <i>Počítačová dilemata</i> also had ten episodes, and it was a popular science program aimed at introducing unfamiliar audiences to the personal computers available at the time, their functions, and potential uses."
        />
    </p>
    <p><Loc
        cs="Navzdory různým tématům měli tyto dva pořady mnoho společného. Jak <i>Kurz rychlého čtení</i> tak <i>Počítačová dilemata</i> vznikaly v ostravských studiích ČST a na obou pořadech pracoval téměř totožný produkční tým. Oba seriály režíroval Jan Flak a autorem námětu, scénáře a moderátorem těchto pořadů byl Ing. David Gruber. U obou pořadů lze najít i stylistické podobnosti – oba například výrazně pracovaly s počítačovou grafikou a textem. Nejzajímavější však je, že jak u <i>Kurzu rychlého čtení</i> tak u <i>Počítačových dilemat</i> byly během závěrečných titulků vypískávané programy pro ZX Spectrum."
        en="Despite the different topics, these two shows had a lot in common. Both <i>Kurz rychlého čtení</i> and <i>Počítačová dilemata</i> were produced in the Ostrava studios of ČST, and nearly the same production team worked on both. Both series were directed by Jan Flak, and the concept, script, and hosting were done by Ing. David Gruber. There were also stylistic similarities between the two shows – for example, both made extensive use of computer graphics and text. However, the most interesting aspect is that during the closing credits of both <i>Kurz rychlého čtení</i> and <i>Počítačová dilemata</i>, programs for the ZX Spectrum were broadcasted."
    />
    <div class="picture-cite">
        <p><img src="/photos/cst/pd/pd_magnetofon.png" alt="Výzva k nahrvání">
        <cite>
            <Loc
            cs="<i>Počítačová dilemata,</i> 1. díl (Jan Flak, Československá televize 1988)"
            en="<i>Počítačová dilemata,</i> episode 1 (Jan Flak, Československá televize 1988)"/>
        </cite>
    </div>
    <p><Loc
        cs="V roce 2023 Herní archiv z archivu České televize zakoupil všechny dostupné kopie dílů pořadů <i>Kurz rychlého čtení</i> a <i>Počítačová dilemata</i> a v roce 2025 převedl a zveřejnil všechny programy pro ZX Spectrum z konců epizod těchto pořadů."
        en="In 2023, the Czechoslovak game archive purchased all available copies of the episodes of <i>Kurz rychlého čtení</i> and <i>Počítačová dilemata</i> from Czech Television and in 2025 converted and published all ZX Spectrum programs from the endings of these episodes."
    />
    </p>

    <h3><Loc
        cs="Programy z <i>Kurzu rychlého čtení</i>"
        en="Programs from <i>Kurzu rychlého čtení</i>"
    />
    </h3>
    <p><Loc
        cs="Programy z konců epizod <i>Kurzu rychlého čtení</i> byly drobnými herními hříčkami, které měly diváctvu pomoci s procvičováním technik rychlého čtení. Díly 6 a 9 se bohužel nedochovaly. <a href='https://www.prazskyden.cz/tento-muz-v-roce-1986-predpovedel-soucasny-internet-ted-prozradil-co-se-chysta-v-budoucnu/'>Podle Davida Grubera</a> všechny tyto hry dělal Ing. Milan Buchta."
        en="The programs from the endings of the episodes of <i>Kurz rychlého čtení</i> were small game-like exercises designed to help viewers practice speed-reading techniques. Unfortunately, episodes 6 and 9 have not been preserved. <a href='https://www.prazskyden.cz/tento-muz-v-roce-1986-predpovedel-soucasny-internet-ted-prozradil-co-se-chysta-v-budoucnu/'>According to David Gruber</a>, all these games were created by Ing. Milan Buchta."
    />
    </p>
    {#each krc as krc (krc.id)}
        <div class="file">
            <div class="row">
            <div class="file-text">
                <div class="file-name">
                    <a href="/files/programy-od-cst-krc/KRC_{ krc.id  }.tzx" download>
                        <LucideDownload style="vertical-align: bottom; width: 25px; height: 25px; margin-right: 4px;"/><Loc
                        cs="Rychlé čtení – { krc.id  }. díl"
                        en="Episode { krc.id }"
                        />
                    </a>
                </div>
                <p><Loc
                    cs="{ krc.text }"
                    en="{ krc.text_en }"
                    />
            </div>
            </div>
            <div class="file-photos">
                <div class="column">
                    <a href="/photos/cst/krc/krc_{ krc.id  }_A.png">
                        <img src="/photos/cst/krc/krc_{ krc.id  }_A.png" class="file-img" alt="">
                    </a>
                </div>
                <div class="column">
                    <a href="/photos/cst/krc/krc_{ krc.id  }_B.png" class="photo-second">
                        <img src="/photos/cst/krc/krc_{ krc.id  }_B.png" class="file-img" alt="">
                    </a>
                </div>
            </div>
        </div>
    {/each}
    <h3><Loc
        cs="Program z <i>Počítačových dilemat</i>"
        en="Program from <i>Počítačová dilemata</i>"
    />
    </h3>
    <p><Loc
        cs="<i>Počítačová dilemata</i> se lišila oproti <i>Kurzu rychlého čtení</i> v tom, že během jejich titulků nebyly vysílány krátké samospustitelné programy, nýbrž byl napříč deseti epizodami vysílán jeden velký program rozdělený na devět kusů (hlavní část programu byla vysílaná v 1. a 10. díle). To znamenalo, že pro vlastnictví kompletního programu muselo diváctvo stihnout všechny díly diskutovaného pořadu a zkopírovat si na pásku všechny části programu."
        en="<i>Počítačová dilemata</i> (Computer dilemmas) differed from <i>Kurz rychlého čtení</i> in that, instead of short self-executing programs being broadcast during its credits, a single large program was transmitted across ten episodes, divided into nine parts (the main part of the program was broadcast in episodes 1 and 10). This meant that to own the complete program, viewers had to catch all episodes of the show and copy all parts of the program onto a tape."
    />
    </p>
    <p><Loc
        cs="Program z <i>Počítačových dilemat</i> byl malou osobní databází. Ta uživatelstvu umožňovala si vést osobní poznámky, seznam kontaktů, půjčených věcí, událostí nebo zásob doma. Program také obsahoval kalendář se všemi svátky a z nějakého důvodu nabízel i možnost si spočítat v jakou hodinu vyjde slunce. Dle zdrojového kódu je autorem programu Ing. Petr Foniok."
        en="The program from <i>Počítačová dilemata</i> was a small personal database. It allowed users to keep personal notes, a list of contacts, borrowed items, events, or home supplies. The program also included a calendar with all holidays and, for some reason, even offered the option to calculate the sunrise time. Acording to the source code, the author of the program is Ing. Petr Foniok."
    />
    </p>
    <p><Loc
        cs="Program po spojení pomocí basicového příkazu <code>MERGE</code> kvůli několika chybám v kódu nefunguje. Díky Lukášovi Macurovi máme ale opravenou <a href='/files/programy-od-cst-pd/PD_final.tzx' download>funkční verzi tohoto programu</a>. Po nahrání programu a vrácení se zpět do BASICu, program znovuspouštějte pomocí příkazu <code>GOTO 10</code>."
        en="The program, after being merged using the BASIC command <code>MERGE</code> doesn't work due to several errors in the code. However, thanks to Lukáš Macura, we have a fixed, <a href='/files/programy-od-cst-pd/PD_final.tzx' download>functional version of this program</a>. After loading the program and returning to BASIC, restart the program using the command <code>GOTO 10</code>."
    />
    </p>
    {#each pd as pd (pd.id)}
        <div class="file">
            <div class="row">
            <div class="file-text">
                <div class="file-name">
                    <a href="/files/programy-od-cst-pd/PD_{ pd.id }.tzx" download>
                        <LucideDownload style="vertical-align: bottom; width: 25px; height: 25px; margin-right: 4px;"/><Loc
                        cs="Počítačová dilemata – { pd.id  }. díl ({ pd.program  })"
                        en="Episode { pd.id } ({ pd.program_en })"
                        />
                    </a>
                </div>
                <p><Loc
                    cs="{ pd.text }"
                    en="{ pd.text_en }"
                    />
                </p>
            </div>
            </div>
            <div class="file-photos">
                <div class="column">
                    <a href="/photos/cst/pd/pd_{ pd.id  }_A.png">
                        <img src="/photos/cst/pd/pd_{ pd.id  }_A.png" class="file-img" alt="">
                    </a>
                </div>
                <div class="column">
                    <a href="/photos/cst/pd/pd_{ pd.id  }_B.png" class="photo-second">
                        <img src="/photos/cst/pd/pd_{ pd.id  }_B.png" class="file-img" alt="">
                    </a>
                </div>
            </div>
        </div>
    {/each}
    <!-- <h3>Články</h3>
    <p><em>Sem přijdou případné články.</em> -->

</ProjectPage>
<style>
    .file {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        flex-direction: column;
    }
    .file-text {
        float: left;
        width: 100%;
    }
    .file-name {
       font-size: 25px;
       font-weight: bold; 
    }
    .file-photos {
        width: 100%;
        clear: both;
        display: table;
    }
    .file-photos .column {
        float: left;
        width: 47%;
    }
    .file-img {
        border-radius: 8px;
        object-fit: cover;
        width: 100%;
        aspect-ratio: 4/3;
    }
    .photo-second {
        margin-left: 16px;
    }
    @media only screen and (max-width: 680px) {
        .file-photos .column {
            width: 100%;
        }
        .photo-second {
            margin-left: 0px;
        }
    }
</style>