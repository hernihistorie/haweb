<script lang="ts">
	import Meta from "$lib/Meta.svelte";
    import type { AssetData, InterviewData } from "$src/types";
    import Box from "$lib/Box.svelte";
    import { data as vodak_data } from '$src/routes/interviews/zdenek-vodak/interview';
    import { data as asset07859_data } from '$src/routes/assets/asset_07859';
    import { data as asset07860_data } from '$src/routes/assets/asset_07860';
    import { data as asset08107_data } from '$src/routes/assets/asset_08107';

    let interviews: InterviewData[] = [vodak_data];
    let assets: AssetData[] = [asset07859_data, asset07860_data, asset08107_data];
</script>

<Meta title="Projekt Videostop" />

<article class="thin">
    <h2>Projekt Videostop</h2>
    <div>
        <p><strong>Název projektu</strong>: Videostop
        <p><strong>Jména zpracovatelů</strong>: Rudolf Jan Suchý, Karel Ondráček, Vojtěch Straka, Roman Bórik
        <p><strong>Rok dokončení projektu</strong>: 2024

        <p>V případě otázek či nejasností se nám ozvěte na info@herniarchiv.cz.
            
    </div>

    <h3>Úvod</h3>
    <p>
        Původní verze zábavného pořadu <em>Videostop</em> byla vysílaná mezi lety 1985 a 2000. Pořad testoval soutěžící v jejich znalostech Československé (a od roku 1989 i světové) filmové a televizní tvorby – byl jim vždy puštěn úryvek z nějakého filmu, podle kterého měli poznat, o jaký film/seriál se jedná. Po té, co jeden ze čtyř (později tří) soutěžících správně uhodl, z čeho byla zmíněná ukázka, mu byla položena druhá otázka, se kterou mu radil jeden z VIP hostů, který buď mohl radit soutěžícímu správně, nebo ,,blafovat”. Pokud soutěžící správně odhadl, jestli mu host lže nebo říká pravdu, tak dostal ještě bod navíc. Vítěz s nejvíce body měl nakonec možnost si zahrát elektronické kostky (dále jen <em>Hra Videostop</em>), díky čemuž mohl následně vyhrát různé ceny – pokud nahrál jen málo bodů, tak dostal bačkory, pokud se mu naopak ve hře dařilo, tak mohl vyhrát třeba televizor.
    </p><p>
        Zejména v 80. letech byl tento pořad, s jehož konceptem přišel televizní technik Vladimír Bezděk st., fenoménem, který se těšil velké popularitě jak v Česku tak na Slovensku. Do značné míry mohla za popularitu tohoto pořadu moderátorská dvojice (která pořad uváděla od roku 1987) Jana Rosáka a filmového historika Karla Čáslavského. Atraktivní byl pořad i kvůli samotné koncepci – VIP hosté zde nebyli jen proto, aby radili soutěžícím, ale také se podíleli o různé historky z natáčení nebo z jejich životů. Nicméně, čím se <em>Videostop</em> výrazně lišil od jiných tuzemských soutěžních pořadů z této doby, byla snaha o zapojení nových médií do jeho fungování. Toto je zejména patrné pokud <em>Videostop</em> porovnáváte s např. <em>Šesti rany do klobouku</em>. V <em>Klobouku</em> byli soutěžící před zodpovídáním otázek vybírání moderátorem, body byli počítané za pomocí fyzických míčků a hra na konci spočívala v házení těchto míčků do velkého klobouku. Naopak ve <em>Videostopu</em> se soutěžící pro odpovídání na otázku předháněli v tom, kdo dříve zmáčkne tlačítko, body byli počítané a vykreslované za pomocí počítače a hra na konci byla jednoduchá (avšak napínavá) videohra.
    </p><p>
        Tato fascinace interaktivností <em>Videostopu</em> byla ve své době do velké míry reflektovaná i v rámci Slovenské a České herní kultury. Během 80. a 90. let vznikla celá řada klonů hry <em>Videostop</em> téměř na každý počítač, který zde byl dostupný.
    </p><p>
        Původní program od Ing. Zdeňka Vodáka však získal a zpřístupnil Herní archiv až v roce 2024 a to díky samotnému jeho autorovi. Součástí fondu, jenž zahrnuje samotné kazetové pásky s <em>Hrou Videostop</em> je také rozhovor se Zdeňkem Vodákem apod.
    </p>

    <h3 id="Navody">Návody</h3>
    <h4>Návod na spuštění hry Videostop</h4>
    <!-- TODO prosím dej tam odkaz přímo na ten soubor -->
    <p>
        Pokud si chcete hru z pořadu <em>Videostop</em> jen zahrát a chcete se vyhnout složitému nastavováním, tak doporučujeme hru stáhnout z <a href="https://cs.speccy.cz/index.php">cs.speccy.cz</a>. Zde kromě originální verze naleznete i verzi upravenou, kterou lze nahrát samu o sobě a také je hratelná jen za pomocí klávesnice. Tato upravená verze je pojmenovaná <code>Videostop_v1_fixed.tap</code>. V menu této verze se pohybujete za pomocí čísel a hru ovládáte klávesou <code>7</code>. Pokud byste si naopak chtěli zahrát hru s ovladačem/joystickem, tak spusťte verzi s názvem <code>Videostop_v1_fixed_kemp.tap</code>. I zde menu ovládáte za pomocí čísel, ale hru zde ovládáte pomocí Kempston joysticku. (Autor upraveného programu: Roman Bórik)
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

    <h3 id="Predmety">Předměty</h3>
    <p>
        {#each assets as data}
        <Box>
            <div class="asset">
                <div>
                    <div class="asset-name">
                        <a href="{ data.inventory_url }"> { data.name }</a>
                    </div>
                        <p>{@html data.description }</p>
                    </div>
                    <div class="asset-photo">
                        <img src="{ data.picture.url }" class="asset-img" alt="">
                    </div>
                </div>
            </Box>
        {/each}

    <style>
        .asset-name {
           font-size: 25px;
           font-weight: bold; 
        }
        .asset {
            display: flex;
            justify-content: center;
            gap: 12px;
        }
    
        .asset-photo {
            width: 350px;
            margin-right: 4px;
            margin-left: 16px;
            flex-shrink: 0;
        }
        
        .asset-photo a {
            display: block;
        }
    
        .asset-img {
            margin-left: 32px;
            margin-bottom: 12px;
            border-radius: 8px;
            width: 334px;
            height: 200px;
            object-fit: cover;
        }    
    
        @media only screen and (max-width: 600px) {
            .asset {
                flex-direction: column-reverse;
            }
            .asset-photo {
                margin-left: 0;
                margin-bottom: 16px;
            }
        }
    </style>

    <h3>Rozhovory</h3>
    <p>{#each interviews as data}
        <Box>
            <div class="interview { data.complete ? 'complete' : 'incomplete' }">
                <div>
                    <h3>
                        <a href={data.complete ? "/interviews/" + data.slug : undefined}>{ data.title }</a>
                        {#if !data.complete }
                            <br><span class="in-progress">připravujeme</span>
                        {/if}
                    </h3>
                    {#if data.narrator.bio }
                        <p>{@html data.narrator.bio }</p>
                    {/if}
                    {#if data.complete }
                        <p>
                            <strong>Datum:</strong> { data.interview.date.toLocaleDateString("cs-CZ") }
                            &nbsp;&bull;&nbsp;
                            <strong>Délka:</strong> { data.interview.length }
                        </p>
                    {:else}
                        <!-- <p>Redakci tohoto proběhlého rozhovoru pro vás teprve připravujeme.</p> -->
                        {/if}
                    </div>
                    <div class="photopart">
                        {#if data.narrator.photo }
                            <a href={data.complete ? "/interviews/" + data.slug : undefined}>
                                <img src="{ data.narrator.photo.url }" class="narrator-img" alt="">
                            </a>
                        {/if}
                    </div>
                </div>
            </Box>
        {/each}
    <style>
        .interview {
            display: flex;
            justify-content: center;
            gap: 12px;
        }
    
        .photopart {
            width: 200px;
            margin-right: 4px;
            margin-left: 16px;
            flex-shrink: 0;
        }
        .photopart a {
            display: block;
        }
    
        .narrator-img {
            margin-left: 16px;
            margin-bottom: 12px;
            border-radius: 8px;
        }
        .incomplete .narrator-img {
            filter: sepia(1);
        }
        .incomplete a {
            color: black;
        }
    
        .in-progress {
            background-color: var(--color-secondary);
            color: white;
            padding: 2px 4px;
            border-radius: 4px;
            font-size: 0.9em;
            margin-left: 8px;
            font-size: 18px;
    
            display: inline-block;
            vertical-align: middle;
            margin-bottom: 3px;
        }
    
    
        @media only screen and (max-width: 600px) {
            .interview {
                flex-direction: column-reverse;
            }
            .photopart {
                margin-left: 0;
                margin-bottom: 16px;
            }
        }
    </style>
    <!-- <h3>Články</h3>
    <p><em>Sem přijdou případné články.</em> -->

</article>
