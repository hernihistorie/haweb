<script lang="ts">
    /* https://docs.google.com/document/d/1gtzvq2Fpla1VqFLjk-sq0cgIeaiB_NNzKLWI2LFjc7g/edit */
	import InterviewPage from "$src/lib/components/interviews/InterviewPage.svelte";
	import Answer from "$lib/components/interviews/Answer.svelte"
	import Question from "$lib/components/interviews/Question.svelte";

    import { data, PT } from "./interview";
    import PageLang from "$src/lib/components/PageLang.svelte";
	import Box from "$src/lib/components/Box.svelte";
	import DownloadLink from "$src/lib/components/DownloadLink.svelte";

    let A = Answer;
    let Q = Question;
</script>

<PageLang cs />

<InterviewPage {data} toc={false}>
    {#snippet content()}
            <Q>
                Jaké je Vaše rodinné zázemí? Kam jste chodil do školy? Co jste dělal jako mladý ve svém volném čase?
            </Q>

            <A speaker={PT}>
                Pocházím ze sídliště na severním okraji Prahy. Na sídlišti bylo hodně vrstevníků a též různé zájmové kroužky. Na jeden jsem s kamarády chodil, věnoval se elektronice, ale žádné zázraky se tam nekonaly – dokázali jsme rozsvítit diodu a spájet plošné spoje. Jenomže pak přišla změna. Jeden z vedoucích dokázal do klubovny dostat vyřazený počítač Celatron. Jeho paměťové médium byl děrný pásek a komunikační rozhraní byla numerická klávesnice jako vstup a připojený elektrický psací stroj jako výstup. Byl k němu ještě druhý psací stroj a ten uměl děrovat pásky. Byla to pro nás spíše kuriozita. Zkoušeli jsme na něm něco děrovat a pak to spustit, ale nic kloudného to neudělalo. Jediné, co si pamatuji funkčního, byla hra, kde dva hráči postupně odečítají čísla od 1 do 10 a kdo odečítá poslední, vyhrál. Právě zde jsem se i poprvé setkal s šestnáctkovou soustavou, protože na klávesnici byla čísla 0–9 a pak pseudočísla 0–5.
            </A>

            <Q>
                Jak jste se dostal k prvnímu počítači? Co to bylo za počítač?
            </Q>

            <A speaker={PT}>
                Doba šla ale překotně dál. Postoupil jsem na Gymnázium ve Vysočanech a tady nás spolužák přivedl do zájmového kroužku prvních osobních počítačů. Bylo to v bývalé usedlosti Flajšnerka. Byly tam počítače PMD a hlavně lidé, kteří mne mohli něco naučit. Zde jsem tedy pochytil základy programování a samozřejmě jsem se zde dostal ke hrám. Většina tam chodila hrát hry, já se ale od začátku snažil něco tvořit. Učil jsem se jak Basic tak Assembler. Nicméně i já si něco zahrál: kolektivně jsme hráli třeba Manic Minera. Tento kroužek nebyl úplně nějakým řízeným kroužkem. Prostě se tam mohlo přijít, sednout k počítači a hrát si. Naučil se ten, kdo o to vyloženě stál.
                
                <p>
                    A pak nastal další zlom. Mezi lidmi se začaly objevovat první počítače. Tehdy byly tři: Atari, Commodore a ZX Spectrum. Nejpopulárnější byl poslední z nich a ten jsem nakonec koupil od svého vrstevníka na sídlišti. Vrstevník byl zřejmě z rodiny, kde se obchodovalo s počítači na černém trhu, nebyla to levná záležitost a navíc v poslední chvíli začal domluvenou cenu šroubovat výš – předpokládám, že mu to doporučili rodiče. Nicméně byl férovej a přišel mi to nainstalovat, ukázat a nakopíroval mi hned celou kazetu her a programů. Z toho počítače rodiče nebyli vůbec nadšeni. Dá se říci, že mi to významně změnilo trávení volného času. Od té doby jsem seděl doma a věnoval se počítači.
                </p>
                    Vybavuje se mi, jak mne ZX Spectrum fascinovalo svou kompaktností – velikost sešitu A5, gumové klávesy, do kterých se přes tři různé Shifty vešly všechny příkazy. Ale byly s tím spojen né i některé problémy. První byla televize. Samozřejmě jsem nemohl používat rodinnou barevnou televizi v obýváku, tak mi táta přinesl vyřazenou černobílou televizi od známých. Druhá komplikace byl magnetofon, který jsme doma neměli. Musel jsem si půjčit kazeťák od spolužáka a pak jsem si teprve koupil v tuzexu pořádný svůj. Třetím úskalím byla samotná práce s nahrávkami. Hodně záleželo na kvalitě záznamu. Pokud člověk sám něco vyráběl, musel stále zálohovat, hledat na kazetě místo a všechno si zapisovat.
                <p>
                    Pak přišlo další rozšíření. Jednojehličková tiskárna. Pořídil jsem si ji a znamenalo to najednou možnost tisku: textů, obrázků. Začal jsem tvořit fonty do této tiskárny, ale hlavně počítač začal mít i praktické využití – mohl jsem rodičům něco napsat nebo vytiskout.
                </p>
                <p>
                    Na střední škole jsme také měli volitelný předmět programování. Tehdy to bylo ještě v plenkách, takže to bylo hodně k smíchu. Škola dostala počítače IQ151. Spolužák naštěstí domluvil, že místo ve školní učebně, budeme právě v prostorách kroužku na Flajšnerce. Hodiny tím byly snesitelnější a pamatuji, jak jsme pomáhali pochopit principy spolužačkám, které při volbě volitelného předmětu přecenily své síly. Je pravda, že jsme se naučily i první algoritmy a nějakou logiku programovacích úloh, což je spíše na efekt a logické myšlení, než na prohloubení znalostí samotného programování.
                </p>
            </A>

            <Q>
                Hrál jste na svém prvním počítači videohry? Jaké? Jak jste se k nim dostával?
            </Q>

            <A speaker={PT}>
                Na prvním místě byl <em>Manic Miner</em>, pak si pamatuji <em>Ramba</em>, <em>Fist</em>, konverzační hry Františka Fuky, nebo <em>Diktátora</em>. K těmto hrám jsem se dostával zejména díky kamarádům a spolužákům. Ale hry pro mne byly jen okrajové a spíše jsem používal nějaké tvůrčí programy. Prvně to bylo <em>ArtStudio</em>, program na kreslení obrázků. Další byl <em>Wham The Music Box</em>, program, který tvořil hudbu, uměl dva paralelní zvukové hlasy rychlým střídáním dvou zvukových linek a výtvor vyexportovat jako spustitelný kód. Pak jsem sehnal sadu drobných pomůcek <em>Super Code</em>, mezi kterými byla možnost nahrát obrázek a jako spustitelný kód jej vysázet na obrazovku po kostičkách.
            </A>

            <Q>
                Dělal jste na svém počítači nějaké programy (ať už videohry nebo jiné)? Pokud ano, tak jaké? Co bylo inspirací pro tyto programy?
            </Q>

            <A speaker={PT}>
                Ano, byla to chuť také vyrobit něco, co není, nebo co jsem viděl na jiných platformách. Princip všech programů je stejný:
                <ol>
                    <li>
                        Krátký zaváděcí program v Basicu, který rychle na obrazovku vypíše název programu a nahraje zbytek.
                    </li>
                    <li>
                        Obrázek nakreslený v profesionálním programu <em>ArtStudio</em> a pomocí tehdy dostupného programu přetransformování do spustitelného kódu, který obrázek vykreslí postupně čtverec po čtverci.
                    </li>
                    <li>
                        Úvodní hudba naťukaná v profesionálním programu <em>Wham The Music Box</em>, která uměla dva paralelní zvukové hlasy rychlým střídáním dvou zvukových linek a exportovaná jako spustitelný kód.
                    </li>
                    <li>
                        Potřebné kódy, typicky znaky uživatelské grafiky (8 x 8) pro prvky, nebo celá abeceda, či datové podklady pro schéma místností, popřípadě celé úseky kódů napsané v assembleru.
                    </li>
                    <li>
                        Hlavní obslužný program, opět v samospustitelném Basicu, který daný program obsluhuje.
                    </li>
                </ol>
                <p>
                    Tehdy také frčela různá loga, tak jsme je používali na úvodním obrázku. Moje jsou ty tři vrstvy se šipkou – nemohl jsem se asi rozhodnout, tak je pokaždé otočená jinak. Spolupracoval jsem s kamarády, měli také každý vlastní logo:
                </p>
                <ul>
                    <li>
                        <strong>Roman Žák</strong>, spolužák ze základní školy a nadšenec do tehdejší techniky. Nakreslil mi téměř všechny obrázky. Nosil mi je nakreslené na čtverečkovaném papíře kde tužkou zabarvoval jednotlivé pixely a pak byl u toho, když jsem je překresloval v <em>ArtStudiu</em>. Jeho je logo se dvěma trojúhelníkovými pravítky.
                    </li>
                    <li>
                        <strong>Jan Špaček</strong>, spolužák ze základní školy, tehdy hrál na klavír. Jemu jsem nosil náměty na hudbu a on mi je zapisoval do not do dvou hlasů. Pak jsem je přepisoval v <em>Music Boxu</em>. Jemu jsem přisoudil logo notičky.
                    </li>
                    <li>
                        <strong>Michal Zintl</strong>, spolužák ze střední školy, tehdy měl své vlastní ZX Spectrum, ale jen na hraní, nicméně spolupracoval na <em>ArtHudbě</em>. Také jsem ho nutil vytvořit si vlastní logo a tak si nakreslil „Staroměstskou věž.“
                    </li>
                    <li>
                        <strong>Michal Žampach</strong>, spolužák ze střední školy, tehdy programoval v asslemberu, ale nebyl moc nakloněný spolupráci, takže mi dodal jen pár technických komponent.
                    </li>
                </ul>

                <Box>
                    <h4>Housenka</h4>
                    <p>
                        S tématem hry přišel Roman Žák. Byl to první program, co jsem tvořil. Hru jsem dlouho upravoval a tuším, že námět vychází z PacMana. Romanovi se prostě líbilo něco, co žere. Housenka se pohybuje bludištěm a další levely jsou jednak o složitosti bludiště a jednak o rychlosti pohybu. Roman vymyslel, že to bude červ, který se sbíráním zelí postupně prodlužuje. Podobně jako v hadovi se zároveň musí vyhýbat překážkám, které jsou zde ve formě lebek.
                    </p>
                    <p>
                        Psané je to v Basicu. Na začátku jsou zelí i lebky rozmístěny náhodně. Zelí jsou dvou barev. Fialové je výživnější: roste se po něm víc. Problém byl, že vyžráním zelí je třeba další zelí doplňovat nicméně jak se bludiště plní, tak funkce náhodných čísel zpomaluje. Zvolil jsem proto jinou metodu: Místo náhodného generování jsem zelí vytvářel z lebek, čímž jsem vyřešil i problém, kdyby se lebky někde nahromadily a ucpaly průchod. No a nové lebky vznikají za housenkou. Za housenkou vznikají i hromádky trusu – to je takový žert navíc.
                    </p>
                    <p>
                        Zde výjimečně hudba nebyla můj námět, ale myslím, že sám Jan Špaček mi přinesl napsanou rokenrolovou skladbu. Hudba, co pípá během hry, je tam kvůli zpomalení. Myslím, že mi to v notách přinesl Michal Zintl, a hloupě jsem myslel, jak to je sofistikované, ale jsou to jen rozepsané akordy do jednotlivých tónů nahoru a zase zpět dolů. 
                    </p>

                    <DownloadLink
                        title={{cs: "hru Housenka", en: "the game Housenka"}}
                        url="https://cs.speccy.cz/games/Housenka.zip"
                    />
                </Box>

                <Box>
                    <h4>Nádražák</h4>
                    <p>
                        V druhém ročníku střední školy jsme byli na praxi. Nebylo tam moc co dělat, takže jsme chodili za spolužáky, kteří měli počítač Commodore s hrami. A tam jsem viděl Sokoban. Obkreslil jsem si všechny levely a tak vzniknul námět hry <em>Nádražák</em>. Nespokojil jsem se s pouhou kopií. Tou dobou jsem jednak měl v oblibě bludiště, takže vše je zasazeno do velice komplikovaného bludiště propojujícího jednotlivé místnosti. A jednak jsem měl v oblibě písničky Šípa a Uhlíře. Téma a název je tedy odvozen od písničky „Šel nádražák na mlíčí“. Proto jsou jednotlivé místnosti z nádražní budovy a okolí. Úvodní písnička je právě tato. Hra je zase naprogramovaná v jazyce Basic.
                    </p>
                    <DownloadLink
                        title={{cs: "hru Nádražák", en: "the game Nádražák"}}
                        url="https://cs.speccy.cz/games/Nadrazak.zip"
                    />
                </Box>

                <Box>
                    <h4>Business</h4>
                    <p>
                        Hra je znovu programovaná v Basicu a je inspirovaná hrou <em>Monopoly</em> a její českou variantou Dostihy a sázky. Často jsme ji doma hráli, takže jsem se jí inspiroval při tvorbě další videohry. Další námět bylo tedy toto. Je to prakticky nehratelné, protože převod do počítačové hry není dobrý nápad. Úvodní písnička je „Zelená vlna Hvězdy“, kterou nazpíval Luděk Sobota.
                    </p>
                    <DownloadLink
                        title={{cs: "hru Business", en: "the game Business"}}
                        url="https://cs.speccy.cz/games/Business.zip"
                    />
                </Box>

                <Box>
                    <h4>Školák neboli Školní akce</h4>
                    <p>
                        To byl další rok praxe, další setkání s hrou na Commodore. Tentokrát spolužák hrál takovou průzkumnou hru, kdy se chodí po bludišti, něco se hledá, najde, přinese jinam a použije. Námětem je vlastní škola, tehdejší Gymnázium Vysočany. Jednotlivé místnosti jsou nakreslené a uložené v datech. Zobrazují se 4 x zvětšené. Zobrazení mi naprogramoval Martin Žampach. Ke každé místnosti se zobrazují 4 různé texty nápovědy (místnost je rozdělená na 4 sektory). Dva jsou konstantní a zobrazují se ve všech místnostech, dva jsou proměnlivé, pro každou místnost jiné a ty napovídají, co se má stát. Úvodní písnička je „Meliorační“, Šíp, Uhlíř.
                    </p>
                    <DownloadLink
                        title={{cs: "hru Školák", en: "the game Školák"}}
                        url="https://cs.speccy.cz/games/Skolak.zip"
                    />
                </Box>

                <Box>
                    <h4>ArtHudba</h4>
                    <p>
                        Název je parafrází na ArtStudio. Námět přinesl spolužák ze střední školy Michal Zintl a také se podílel na realizaci. Líbil se nám profesionální program <em>Wham The Music Box</em>, který měl jeden nedostatek: hudba se dala spustit, ale nedala se používat při běhu programu. Chtěli jsme tak připravit podobně uživatelsky přívětivý program pro práci s basicovým příkazem BEEP, který je normálně nesrozumitelný. Společně jsme ladili tvář programu, obsluhu kláves a výstupy jsem pak už dělal sám. Úvodní obrázek jsme kreslili společně – <em>ArtStudio</em> umožňovalo merge dvou obrázků do jednoho, tak jsme spojovali své části, co jsme kreslili.
                    </p>
                    <DownloadLink
                        title={{cs: "program ArtHudba", en: "the program ArtHudba"}}
                        url="https://cs.speccy.cz/programs/ArtHudba.zip"
                    />
                </Box>

                <Box>
                    <h4>Predit (Profesionální editor)</h4>
                    <p>
                        Ve všech výše zmíněných programech jsem potřeboval nakreslit postavičky, předměty ve formátu znaku 8x8. To se na ZX Spectru ukládá do tzv. grafických znaků uložených na konci paměti. Nejprve jsem si na to napsal jednoduchý editor, kterému jsem říkal Grazny. Poté přišly na trh tiskárny – jednojehličkové BT100. A pro ně… to už byla další rozšíření, bylo třeba definovat celé abecedy. A tak jsem původní Grazny rozšířil a umožnil nakreslit celou abecedu a dokonce volit velikost rastru. Myslím, že obslužný program je v zkompilovaném Basicu do asslembleru.
                    </p>
                    <p>
                        Velikost paměti ZX Spectra byla přeci jen omezená, takže od začátku byly snahy programy zmenšit a zrychlit. Učil jsem se Assembler a zkoušel programovat v něm. To ovšem pro mne nebyla správná cesta, nakonec jsem hledal jiné způsoby práce. Jeden z nich byly kompilátory Basicu do Assembleru a druhá byla pomoc spolužáka Martina Žampacha, který mi vyrobil několik použitelných procedur.
                    </p>
                    <DownloadLink
                        title={{cs: "program Predit", en: "the program Predit"}}
                        url="https://cs.speccy.cz/programs/ProfesionalniEditor.zip"
                    />
                </Box>
            </A>

            <Q>
                Šířil jste tyto programy posléze nějak?
            </Q>

            <A speaker={PT}>
                Když jsem chtěl nějak rozptýlit své programy, napsal jsem inzerát do tehdy jediného média, a to inzertních novin Annonce. Poštou mi pak chodily dopisy: Ano, nahraj mi prosím své programy, a já o prázdninách jezdil po Praze a zdarma nahrával své výtvory. Tím jsem díru do světa neudělal, ale alespoň jsem tím získal nějaké uznání.

            </A>

            <Q>
                Co jste dělal po této vaší etapě?
            </Q>

            <A speaker={PT}>
                Studoval jsem na MFF UK obor, který byl nejblíže Software: Informatiku. Nic jiného nebývalo. Softwarové směry na technikách všech škol se dostaly do osnov až později. Tehdy už byly první opravdové PC. Na vysoké škole nám založili počítačovou laboratoř, kde jsem se naučil se programovat v Pascalu. To už byl jiný level, jiné hry u kterých jsem pochopil, že zde už nemám šanci napodobovat a snažit se vyrovnat. I tak vzpomínám na to, co jsme hráli celé studium: naprosto primitivní <em>Červy</em> a pak <em>Wormsy</em>. No a od té doby do dneška pracuji v pojišťovně a jako jeden z mnoha vytvářím provozní systém, ve kterém se spravují pojistné smlouvy. Jako softwarový analytik, nikoliv jako vývojář. Od programování jsem tedy odešel.
            </A>
    {/snippet}
</InterviewPage>