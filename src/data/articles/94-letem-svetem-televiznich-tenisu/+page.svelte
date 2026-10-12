<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
    import { articleImages } from "$src/lib/articleImages";

    const img = articleImages(
        import.meta.glob("./img/*", {
            eager: true,
            query: "?w=1600;800&enhanced",
            import: "default",
        }),
        import.meta.glob("./img/*", { eager: true, import: "default" }),
        import.meta.glob("./img/*", {
            eager: true,
            query: "?as=meta:width;height",
            import: "default",
        }),
    );
</script>

<PageLang cs />

<section>
    <Loc>
        {#snippet cs()}
            <Figure image={img["1-kolaz-uvodni.jpg"]} />

            <p>
                Tuzemské televizní hry, kterými jsem se zabýval v několika minulých článcích,
                nevznikaly v žádném vakuu - měly v zahraničí své předchůdce, současníky i
                následovníky. Snažím se už nějaký čas zjistit, jak si tyto naše nejstarší videohry
                vlastně ve srovnání se světem stály, odkud přišly a v čem byly odlišné. Abychom však
                takové srovnání mohli vůbec provést, je třeba nejdříve poskládat onu světovou
                mozaiku, do které náš dílek patří - některé její části totiž kupodivu nejsou v
                ucelené a přehledné podobě příliš známé. Jde ovšem o mozaiku velmi rozsáhlou, k níž
                se stále ještě objevují další a další dílky. Abych udržel délku tohoto článku v
                únosných mezích, nechám si prozatím zajít chuť na podrobnější srovnávání zajímavých
                vlastností jednotlivých her, a zkusím pro začátek televizní hry uvedené generace
                alespoň letmo vyjmenovat, s jejich nejzásadnějšími rysy a vzájemnými vazbami.
                Zmíněné technické zajímavosti si převážně nechám až na další pokračování (ačkoliv i
                dnes budu hry třídit z velké části na základě podobností v jejich technickém
                provedení), kdy také dokončím zamýšlené srovnání. Možná pak dojde ještě i na další
                kousky oné pomyslné mozaiky - bádání stále pokračuje.
            </p>

            <p>
                Vítejte tedy na palubě vyhlídkového letu kolem videoherního světa v domácnostech
                nejstarší epochy. Bavit se budeme o takzvané první generaci videoher (alespoň podle
                jedné z <a href="https://en.wikipedia.org/wiki/History_of_video_game_consoles"
                    >definic</a
                >), která se vyznačuje pevně zapojenou logikou bez použití mikroprocesoru, a kterou
                si až na pár výjimek ještě zúžíme na přístroje navržené bez použití specializovaných
                herních čipů. Důvod je prostý: Her postavených například na čipu AY-3-8500 se koncem
                70. let vyrojily snad stovky, a jsou víceméně všechny stejné. Mnohem zajímavější,
                rozmanitější, a pro vývoj u nás i relevantnější, jsou ovšem právě ony relativně
                vzácné hry, které příchodu této laviny předcházely, resp. nebyly její součástí.
            </p>

            <Figure
                image={img["2-mapa-pribuznosti.png"]}
                caption={{ cs: "Velká mapa: příbuznost mezi hrami zmíněnými v článku" }}
            />

            <p>
                Mezi hrami, které na těchto přístrojích bylo možno hrát, jednoznačně dominuje tenis,
                případně další varianty míčových her. Ani u nás v Československu to nebylo jinak. Ve
                světě však najdeme i několik dalších konceptů, jako jsou relativně rozšířené
                střelecké hry se světelnou puškou, jednoduché hry bez míče (založené na přímém
                kontaktu mezi hráči, nebo prostě na postřehu), případně využití herního přístroje
                jen v roli jakéhosi kurzoru v herním plánu přiloženém na obrazovku (Magnavox
                Odyssey). Řadu alternativních konceptů přinesly i relativně pozdní knihy "How to
                Design and Build Your Own Custom TV Games" a "Ljubitělskije televizionnyje igry",
                vydané v USA (1978) a SSSR (1985) - od jednoduché honičky až po simulovaný golf,
                Pinball či koňské dostihy.
            </p>

            <p>
                Celý košatý strom videoher v podstatě začal v USA Ralph Baer se svým týmem, když v
                letech 1966-1969 ve firmě Sanders Associates vytvořil několik prototypů s různými
                variantami her i jejich technického řešení. Sedmý z nich, známý pod přezdívkou Brown
                box, se posléze stal licenčním základem první komerční konzole Magnavox Odyssey.
                Autoři tehdy vyzkoušeli řadu možností - pracovali s elektronkami, tranzistory,
                číslicovými obvody i operačními zesilovači, zkoušeli barevný obraz i ozvučení,
                několik způsobů časování a polohování herních objektů, ovládání joysticky a dokonce
                i mikrofonem, analogově řešený realistický pohyb míče, měli fotopušku, generátor
                náhody, i řadu herních principů, které se do komerční verze nedostaly: Až po Brown
                box se například drželi takzvané "Pumping game", kde hráči soupeřili prakticky v
                rychlosti mačkání tlačítka, čímž stoupala hladina vody třeba v obrázku hořícího
                domu, přiloženého na obrazovku. Dále jejich prototyp uměl i zajímavou golfovou hru s
                fyzickým míčkem připevněným na vrcholu páky analogového joysticku (který se stavěl
                na podlahu), dříve zde byly i pokusy o elektronickou hrací kostku, zatímco další
                ještě šílenější nápady zůstaly jen na papíře. Některé ze zavržených možností se
                později znovu objevily v přístrojích úplně jiných výrobců, nejspíš nezávisle.
            </p>

            <p>
                Dalším krokem byla první komerční konzole Magnavox Odyssey (1972), poměrně
                jednoduchý analogový přístroj osazený tranzistory (něco přes 30). Nabízel relativně
                širokou škálu her, které ovšem často závisely na obrázkových fóliích přiložených na
                obrazovku, nebo se více než na obrazovce hrály spíše na stole před televizorem,
                funkci samotného přístroje nicméně již tehdy modifikovaly zásuvné cartridge. Těch
                vyšlo celkem 11 (a jedna nevydaná), obsahovaly pouze propojovací vodiče pro
                konfiguraci obvodů v přístroji, a nabízely jednoduché míčové hry, hru na honěnou,
                střelecké hry, a také funkce pouhého kurzoru (se setrvačností nebo bez ní),
                používané v kombinaci s tištěnými herními plány. Jednalo se vždy o různé varianty
                dvou pálek, míčku, středové čáry a fotopušky, kde bylo možno některé objekty v
                různých situacích zhasínat.
            </p>

            <p>
                Vzápětí se objevil také arkádový PONG (1972) od Atari, jehož jménem někteří označují
                celý žánr. Byl sice konzolí Odyssey částečně inspirovaný, jedná se však o
                pokročilejší, plně digitální hru. Pong umí odrážet míč různými směry z různých částí
                pálky, zrychlovat míč v průběhu hry, i počítat skóre. Obsahuje ovšem 66
                integrovaných obvodů, což si mohl dovolit třeba majitel baru, ale těžko by si to
                někdo koupil domů (nebo si to alespoň mnoho lidí myslelo). V Americe se pak rozvinul
                celý rozsáhlý průmysl hracích automatů, samozřejmě s přesahy i do dalších zemí, to
                se však už vymyká zaměření tohoto článku.
            </p>

            <p>
                Objevilo se však přece jen i několik domácích herních konzolí založených na
                technologii Pongu. V USA takto firma Universal Research Laboratories již v roce 1974
                v podstatě vyprodávala přebytečné arkádové desky (model VA-II), v britském časopisu
                Television zas koncem téhož roku nabízela firma Logic Leisure Ltd. klon Pongu, v
                podobě prázdné desky či sady součástek. O něco později (1975-6?) se v západní Evropě
                vyskytl i mírně zjednodušený Pong v oranžové krabici, pojmenovaný Multiplay 80 a
                podepsaný netypickou značkou Etco belgium (zevnitř značně připomíná arkádu Playtime
                od Midway).
            </p>

            <Figure
                image={img["3-kolaz-komerce.jpg"]}
                caption={{
                    cs: "Některé profesionální hry a jejich vnitřnosti (po řádcích): Prototyp Brown box, Magnavox Odyssey, arkádový Pong, Videosport MK2, Ping-O-Tronic, Videomaster Olympic, Multiplay 80, Videoshoot, Palestra 02, bulharský Turnir",
                }}
            />

            <p>
                Mnohem více však bylo domácích konzolí, které vznikly na spíše analogovém principu,
                z vyloženě minimálního množství diskrétních součástek, nebo jen základních
                integrovaných obvodů (zde nemohu tvrdit, že bych je již prostudoval všechny). Jedna
                z vývojových větví je u nás v Evropě napojená přímo na Magnavox Odyssey. Vedle
                několika mírně modifikovaných kopií (například ve Španělsku takovou nabízel od roku
                1974 výrobce Inter Electrónica pod názvem Overkal, ve Švédsku se uvádí poněkud
                tajuplný Kanal 34 a po světě jich bylo ještě víc), se do řady zemí v různé míře
                exportovala i originální hra. Do Německa ji poprvé přivezla v roce 1973 firma ITT
                Schaub-Lorenz, byť asi ne zrovna masově. Když pak ing. Günther Bless z této firmy
                publikoval téměř celé schéma v časopisu Funk-Technik (prosinec 1973), ukázal se
                naplno význam časopisových článků (směrem na východ ještě rostoucí), jejichž
                následná vlna roznesla nejpopulárnější míčové hry z Odyssey několika směry, včetně
                tehdejšího Československa.
            </p>

            <p>
                Považuji za velmi pravděpodobné, že se právě článkem ve Funk-Technik inspiroval B.
                Lübcke z německého Kielu, když vytvořil jednoduchý televizní tenis, který v
                některých částech (časování polohy objektů) využívá zcela identické obvody jako
                Odyssey. Lübcke svoji konstrukci přihlásil do charitativní soutěže "Aktion voor
                aktion", kterou vyhlásil původně nizozemský magazín Elektuur, čerstvě rozšířený i o
                německou mutaci pod názvem Elektor, s uzávěrkou příspěvků v březnu 1974. Soutěž byla
                možná až příliš úspěšná, když nečekaný příval 1500 soutěžních příspěvků redakci,
                porotu, i stránky časopisu úplně zahltil, takže se celá akce z plánovaných několika
                měsíců protáhla na více než rok. Časopis průběžně tiskl část soutěžních prací (než
                to v říjnu 1974 z kapacitních důvodů vzdal a vydal celou sbírku knižně), přičemž
                zmíněná Lübckeho konstrukce byla publikována v čísle 10/1974, a nakonec celou soutěž
                vyhrála.
            </p>

            <p>
                Dopad jeho příspěvku byl poměrně značný. Nejrychleji zareagovala dánská firma Josti
                Electronic, když ještě před koncem roku uvedla stavebnici televizní hry AT 610.
                Podrobné schéma, otištěné o pár měsíců později jako stavební návod v časopisu
                Populær Elektronik, nenechá nikoho na pochybách: Jde o téměř dokonalou kopii
                Lübckeho návrhu. Není to zdaleka poslední případ kopírování či klonování podobných
                her, a zřejmě to nikomu ani příliš nevadilo, když byla hra ještě o rok později stále
                nabízena k prodeji.
            </p>

            <p>
                Konstrukce byla dále rozvíjena i přímo v magazínu Elektuur/Elektor, který v letech
                1975-1976 otiskl zdokonalenou verzi hry, následovanou ještě řadou doplňků a
                vylepšení. Celou sérii završil až v říjnu 1976 (v anglické verzi, za originálem
                poněkud opožděné) modul pro počítání a zobrazování skóre. I tato verze se dočkala
                svých kopií, například v italském časopisu Sperimentare (1976).
            </p>

            <p>
                Ve stejné době se články z Elektoru staly i hlavním zdrojem pro československé
                televizní hry. Nepůjdu na tomto místě do podrobností, ale stojí na nich návod pánů
                Kryšky a Zusky z Amatérského radia (kteří však čerpali i z původního Odyssey),
                adoptovaný později Teslou Piešťany pro konzole řady XD 8000, inspiraci lze vidět i v
                herních čipech MAS601-603, či prototypu z Tesly VÚST. Vedle toho zde byl i návod
                Vladislava Čackého, postavený přímo na prapůvodním článku ve Funk-Technik, který
                Čacký přinesl také ve formě jen lehce rozšířeného překladu v Ročence sdělovací
                techniky 1978.
            </p>

            <p>
                Návod se šířil ještě do dalších zemí východního bloku, když během roku 1978 polský
                časopis Radioamator i krótkofalowiec převzal konstrukci pánů Kryšky a Zusky,
                bulharský časopis Radio, televizija, elektronika pro změnu konstrukci V. Čackého,
                zatímco rumunské Tehnium přetisklo přímo verzi z Elektoru. Situace v jednotlivých
                zemích se ovšem značně lišila, například v Maďarsku zřejmě tuto generaci televizních
                her úplně vynechali, a začali rovnou s importovanými čipy AY-3-8500 (návod z
                listopadu 1977) s poznámkou, že hry z diskrétních součástek jsou příliš složité. Z
                NDR ani tehdejší Jugoslávie nejsou žádné podobné články k nalezení (snad ani
                neexistovaly), zato Sovětský svaz byl zas úplně jiný svět, který proberu až níže
                (nicméně návod založený na Odyssey se tam okrajově vyskytl také).
            </p>

            <p>
                Když už jsme se ohlédli východním směrem, zmíním ještě jednu málo známou hru, která
                časově předběhla celý východní blok, a většinovému trendu se vůbec poněkud vymyká.
                Značně pokročilá televizní hra TV Turnir vznikla v Bulharsku patrně už někdy na
                přelomu let 1976-1977. Do výroby ji protlačilo tamní státem řízené Centrum pro
                urychlenou aplikaci, takže v dubnu 1977 už běžela ověřovací série, od května byl
                výrobek registrován u tamních úřadů. Hra prý vznikla na základě dostupné zásoby
                zlevněných TTL čipů (kterých lze na fotografiích napočítat 35), nabízela řadu
                herních variant, a dokonce i skóre na obrazovce (i když vyjádřené jen zjednodušeně,
                počtem teček). Přístroj byl vystavován i u nás v Brně, na veletrhu v Hannoveru o něj
                pak údajně jevila zájem i firma Thomson, ale k dohodě kvůli různým zásahům
                bulharských úřadů nakonec nedošlo. Přístroj také údajně sloužil jako cvičební
                pomůcka pro děti na oční klinice ve Varně, a dokonce byl později v prakticky
                nezměněné podobě vestavěn i do televizoru pod typovým označením Sofia 23.
            </p>

            <p>
                Televizory s vestavěnou hrou bývaly oblíbenou vizí pro vzdálenější budoucnost
                (zvažoval to už v samém začátku i tým R. Baera), reálně takových přístrojů ale
                nevzniklo mnoho, a právě bulharská Sofia 23 je nejspíš jediným případem vestavěné
                hry z diskrétních součástek (bez specializovaných čipů). Další podobné televizory
                (již s čipem) vznikly později v Sovětském svazu, zatímco v řadě dalších zemí se o
                nich spíše jen mluvilo. Bylo to tak i u nás v Československu, kde Tesla Orava
                avizovala záměr televizor s hrami vyrábět, nikdy k tomu ale nedošlo. Ani ve zbytku
                světa však nebyly podobné přístroje příliš běžné - četl jsem sice statistiku
                uvádějící k roku 1977 až miliony kusů, nicméně konkrétnější informace jsem našel jen
                ke 14 typům. (Vede mezi nimi Německo a vůbec západní Evropa, i když za úplnost dnes
                dostupných informací nelze samozřejmě ručit.) Částečné schéma německého televizoru
                Telefunken Palcolor 8610 (otištěné v polském časopisu Radio-elektronik) odhaluje
                značné technické potíže takové vestavby - vnitřní obvody mnohých televizorů v té
                době ještě nebyly bezpečně izolované od sítě, a přenášet signál ovládacích
                potenciometrů přes optočleny je technicky docela divočina.
            </p>

            <Figure
                image={img["4-kolaz-televizory.jpg"]}
                caption={{
                    cs: "Sbírka televizorů s vestavěnou hrou: Zeleně označená Sofia 23 jako jediná neobsahuje specializovaný herní čip. Najdeme i stejný model pod různými značkami.",
                }}
            />

            <p>
                Vrátím-li se k vývojové větvi odvozené přímo od Odyssey, mohu k ní ještě volně
                přiřadit i vcelku úspěšnou italskou hru Ping-o-tronic, uvedenou na trh v roce 1974
                společností Zanussi, pod značkou Sèleco používanou pro televizory. Přístroj s tehdy
                moderním designem se sice od Odyssey poměrně dost liší, sdílí nicméně zase téměř
                stejné základní obvody pro tvorbu pálek, a také celkovou technologii postavenou v
                naprosté většině jen na tranzistorech. Do robustního přístroje jich Zanussiho
                vývojáři nacpali přes padesát, což je asi rekord. Existovala také nejméně jedna
                kopie či mutace, uváděná pod značkou Inno Hit (neověřeno). Není dokonce vyloučeno,
                že tato hra okrajově inspirovala i československé konstrukce, protože zvukové efekty
                jsou zde totožné s jednou z verzí dle Amatérského radia, a odtud také s hrami Tesla
                XD 8000, přičemž Ping-o-tronic byl necelý rok před jejich vznikem prokazatelně
                vystavován v Brně.
            </p>

            <p>
                Existují i další vzdáleně podobné hry, například Tele-Tennis M. J. Hughese, otištěný
                na pokračování v britském magazínu Practical Wireless také již v roce 1974 (později
                ještě vylepšovaný), a okopírovaný opět v italském magazínu Radio Elettronica.
            </p>

            <p>
                Na západě ovšem v době slávy podobných her existovala z hlediska technického
                principu i druhá skupina, patrně ještě početnější, jejíž podobnost s pramáti Odyssey
                byla znatelně menší (a můžeme se libovolně dohadovat, zda to pramení z odlišného
                přístupu tvůrců, nebo ze snahy obejít příslušné patenty). Tyto hry se přiklánějí k
                osvědčenému (a levnému) analogovému principu, který místo na obrazovce definuje
                pilovitým referenčním signálem, podobně jako se to děje i v samotném televizoru.
                Stejný princip mimochodem v některých prototypech zkoušel už i tým R. Baera, ale pro
                finální verzi zvolen nebyl. Ani v československých hrách se nevyskytoval.
            </p>

            <p>
                Jednu z významných rodin tohoto druhu uvedla britská firma Videomaster, která první
                hru pod prostým názvem "Home TV Game" vypustila v roce 1974, aby ji o rok později
                nahradila zcela přepracovanou "třetí" verzí (Mk III, počítaje i jednu dřívější
                drobnou modifikaci) se zajímavou analogovou implementací pohybu míče (opět vlastnost
                kdysi zvažovaná i Baerovým týmem). Novou verzi doplnila zjednodušená varianta Rally,
                a naopak vylepšená verze Olympic (odlišená zřejmě jen zapojením přepínačů her),
                která se pak šířila dále po světě v podobě různých klonů a modifikací. Prakticky
                totožné hry tak najdeme v Austrálii jako návod na hru Video Ball v časopisu
                Electronics Australia, od jehož čtenářů hra dostala navíc jednoduché zvukové efekty,
                i jako hotovou hru Videolympic. S touto australskou verzí téměř totožný přístroj
                (včetně přidaného zvuku) nacházíme pro změnu ve Francii, jako Videoshoot od firmy
                Syrelec, a úplně stejné hry i ovládací prvky nabídne (ovšem beze zvuku) také hra
                Tele-tainment od IEA v kanadském Québeku. Rovněž francouzský PP-2000 od firmy Orelec
                i přes některé modifikace obsahuje desku elektroniky prakticky totožnou s původním
                Videomasterem Olympic, TV Challenger series 2000 od britské firmy Superlectron zas
                jakoby z oka vypadl Videomasteru Rally. Tato lavina podobných her si v budoucnu
                ještě zaslouží detailněji prostudovat jednotlivé podobnosti a rozdíly, avšak
                vzájemná příbuznost je zřejmá už z letmého pohledu.
            </p>

            <p>
                Další poměrně ranou západoevropskou televizní hrou v podobném stylu byl velice
                jednoduchý Videosport MK2, vyráběný pravděpodobně jen v menším počtu nějak
                propojenými malými britskými firmami VideoSport Ltd. a Redbourn Plastics Ltd. Původ
                této hry je poměrně nejasný, stejně jako podrobnosti kolem jejích pravděpodobných
                klonů, z nichž jeden se objevil až v Argentině (Teyboll).
            </p>

            <p>
                Existuje ještě řada dalších pozoruhodných her, například v západní Evropě vznikly
                hned dva systémy (Interton Video 2000 a Philips Tele-Spiel) používající zásuvné
                moduly (cartridge) s doplňkovými obvody pro jednotlivé hry, takže v této oblasti
                bude jistě o čem psát i příště.
            </p>

            <p>
                Technologickou raritu vytvořila americká firma Executive Games. Jejich hra TV
                Tennis, vyvinutá během roku 1975 ve spolupráci s univerzitou MIT, je v jedné své
                části snad nejvíce analogovou konstrukcí, jakou lze v této generaci her najít
                (obsahuje však vedle toho i podstatnou část digitální), a je i dalším příkladem
                popularity zmíněného principu referenční "pily". Nezvyklé zapojení, založené na
                dvojicích napěťových komparátorů (určujících analogově zvlášť začátek i konec
                každého objektu na obrazovce) a dalších originálních vychytávkách, zdůvodňují autoři
                jednoduchostí a nízkou cenou, šlo jim však zjevně i o obchodně důležitou možnost
                získat v oblasti televizních her svůj vlastní patent (který skutečně v prosinci 1975
                úspěšně přihlásili). Tím se však otevírá řada zatím nezodpovězených otázek kolem
                nápadně podobného, současně vzniklého japonského projektu, spojeného pro změnu s
                univerzitou v Tokyu. Elektronický hokej, který publikoval Shigeo Niitsu v časopisu
                Tranzistorová Technologie již v srpnu 1975, sice oproti americké verzi mnohé
                postrádá, základní velmi nezvyklý princip je však tentýž. A aby nezůstalo u jedné
                podivné náhody, vykazuje přístroj nápadné podobnosti také s hrou Face Off, kterou
                Executive Games vypustili až o rok později. To všechno jsou záhady, jaké pohánějí
                zvědavost každého badatele...
            </p>

            <p>
                Několik dalších her postavených na principu analogové "pily" najdeme také na
                stránkách časopisů, které se ani v anglicky mluvících zemích podobným návodům
                nevyhýbaly. Patří sem například rozsáhlý návod "TV Football &amp; other games on the
                television screen" P. Busbyho, otištěný již v roce 1974 v britském magazínu
                Television, který v různých variantách sahá od jednoduchého tenisu až k
                propracovanému simulátoru fotbalu s realistickým pohybem míče a automatickým
                protihráčem, to vše realizováno vyloženě analogovým způsobem. Komplikovaný přístroj,
                z něhož je cítit rukopis televizního technika, bez rozpaků se nořícího hluboko do
                vnitřností televizorů, si ale nejspíš sestavil málokdo.
            </p>

            <p>
                Dostupnější návody se objevily v samém závěru této epochy, v roce 1976, na opačné
                straně Atlantiku, kde vyšly dva pojetím srovnatelné návody: Pongtronics, a pak návod
                pod nic neříkajícím nadpisem "Build this great TV game", který si dovolím označit
                přezdívkou Bumper. Jde o přiměřeně složité konstrukce v kombinaci analogového
                principu s logickými hradly, které již přinášejí i řadu drobných vylepšení, jako je
                zvuk, skóre (s využitím čipu určeného pro zobrazení hodin v televizoru), hra s
                gravitací, různě proměnná rychlost a směr míče, hra proti stroji, či nezvyklá
                překážka na hřišti nazvaná právě "Bumper".
            </p>

            <p>
                Pohled směrem na západ můžeme zakončit ještě hrami, které se vymykají tradičnímu
                konceptu míčových her na obrazovce. Hra TV TAG vyšla v magazínu Popular Electronics
                už v listopadu 1972, tedy jen pár měsíců po uvedení první konzole Odyssey (která
                stejnou hru také umí), a je tedy nejstarším známým časopisovým návodem na televizní
                hru. Naopak hra Space-War, postavená převážně na integrovaných obvodech CMOS, byla v
                roce 1976 jednou z posledních amerických her bez specializovaných čipů. (Její autor
                Joseph A. Weisbecker byl i sám dosti zajímavou osobou, má na kontě návrhy
                mikroprocesorů, počítačů a mnoho jiného.) Oběma hrám je společné to, že vůbec
                nepotřebují míč s příslušnými obvody, protože jsou založeny na přímém kontaktu obou
                hráčů - jednou je to hra na honěnou, podruhé střelba mžikovým roztažením hráče přes
                celou šířku obrazovky. Díky tomu jsou obě konstrukce velmi jednoduché. Pozdní hra
                Space-War však možná právě proto přeskočila jak jiskra na opačný konec tehdejšího
                rozděleného světa, aby tam v několika mutacích prožila ještě druhý život.
            </p>

            <p>
                Což nás přivádí do tehdejšího Sovětského svazu. Nejrozlehlejší země světa, kde podle
                kouzelně dvojsmyslného rčení "zítra znamenalo včera" (přeberte si to, jak chcete),
                byla prostředím velmi specifickým. Přehlédnu-li zanedbatelné zmínky o zahraničních
                či arkádových modelech, pak se zde televizní hry objevily o rok později, než v
                Československu - tedy v roce 1978. Žádnou spojitost s vývojem v ostatních zemích
                RVHP však nenacházím - sojuz byl zkrátka svět sám pro sebe. A protože se o této
                sféře v azbukou nezasažené části světa obvykle mnoho neví, zkusím to vzít i trochu
                podrobněji.
            </p>

            <p>
                První návod na hru "Tenis a Hokej" přinesli hned v lednu 1978 autoři L. Šepotkovskij
                a M. Čarnyj z běloruského Minsku, na stránkách radioamatérského magazínu Radio. Byl
                to návod trochu kostrbatý, propojený s vnitřnostmi televizoru, ale lavina se tím
                dala do pohybu. Stránky časopisu pak opanovali autoři z Moskvy a okolí, a uvedli
                mezi jiným postupně dvě varianty již zmíněné americké hry Space-War, pod názvy
                Mořský boj (1978, název evokuje již tehdy populární sovětskou elektromechanickou
                arkádu), a PVO - Vzdušný boj (1979) [PVO = protivzdušná obrana], z nichž druhá
                přidala například i joystick a zvuky. Jak můžeme vidět v ilustrační koláži, obrázky
                v propagandistickém stylu uměl časopis dokonale, úroveň samotných návodů už ale byla
                horší. Poněkud neobratně provedená úprava pro sovětské součástky totiž některé části
                zapojení neúměrně zkomplikovala, a vnesla do něj i několik vážných chyb, takže pak
                časopis tyto hry na podněty čtenářů různě opravoval a doplňoval až do roku 1982,
                čemuž vedle místa v pravidelné čtenářské rubrice věnoval i další dva plnohodnotné
                články. Reakce čtenářů přicházely i z nejvzdálenějších míst - sahají od Kyjeva a
                Leningradu přes Sibiř až na pobřeží Tichého oceánu. Lze si také všimnout, jak autoři
                článků občas uvádějí zdroje ze stejného časopisu, zahraniční zdroje však nikdy
                (třebaže je inspirace zjevná).
            </p>

            <Figure
                image={img["5-kolaz-casopisy.jpg"]}
                caption={{
                    cs: "Kaleidoskop časopisových návodů: Černobíle vlevo nahoře japonský Hokej, nákres z Elektoru, Pongtronics, Bumper a úzký TV Tag, úplně vpravo australský Video Ball, dole modulární polská i dánská mutace dle AR resp. Elektoru, a Bumper zevnitř. Směrem nahoru pak Space-War, a dále již v barvě jeho sovětské mutace Vzdušný a Mořský boj, obklopené hrami na osciloskopu B. Igoševa, a vpravo dole pak rozsáhlé projekty M. Ovečkina.",
                }}
            />

            <p>
                Ve stejné době i stejném časopisu najdeme souběžně ještě další dva články: Televizor
                zobrazuje informace (V. Baranov a V. Cholopcev, 1978) a Univerzální blok televizních
                her (M. Ovečkin, 1979). Mají leccos společného. Oba vlastně slouží dvěma účelům:
                První je formálně teoretickým článkem o informačních systémech, který se však skoro
                úplně utopil ve zvoleném praktickém příkladu, což je konstrukce plně digitální
                videohry, druhý přístroj zas má vedle her i funkce generující referenční obrazce pro
                seřizování televizorů (což je vlastně geniálně úsporná kombinace, pokud se autor
                střídavě věnoval takové práci i své rodině). V obou případech se také jedná o velice
                ambiciózní projekty sestavené nepříliš efektivně z obrovského množství integrovaných
                obvodů (105, resp. rekordních 131 kusů) s velkým podílem digitálního principu, oba
                zobrazují skóre, druhý z nich podporuje až 4 hráče a několik různých her. (Mimo
                Sovětský svaz si s nimi troufnu srovnávat snad jedině odvozeniny arkádového Pongu, a
                prototyp z pražského VÚSTu.) Tyto, i některé další sovětské návody, se také
                nerozpakují připojovat různé signály přímo do vnitřku televizorů. Dalším společným
                rysem obou návodů je bohužel zase neúměrně velká chybovost. Dá se říci, že v
                otištěné podobě žádný z nich nemohl vůbec fungovat, a rozhodně zde nejde jen o
                překlepy - zvláště schémata v druhém z obou článků vrší jednu chybu přes druhou
                takovým způsobem, že je místy skoro nemožné odhadnout původní záměr autora. Funkční
                přístroj sice existoval (byla otištěna fotografie), ale přípravu článků pro tisk
                autoři moc dobře nezvládli. Korunu tomu pan Ovečkin nasadil, když o více než tři
                roky později završil sérii oprav návrhem na drobné vylepšení hry, do kterého vnesl
                chybu novou. Soudě ale podle odezvy v časopisu, návod i přesto čtenáře dosti zaujal.
            </p>

            <p>
                M. Ovečkin pak šel ještě dál, a další dva rozsáhlé návody publikoval knižně (1985,
                doplněné vydání 1989). Téměř o polovinu (na 72 čipů) zeštíhlená verze téže hokejové
                hry, doplněná o automatického protihráče, je zde představena o dost přehledněji (a
                téměř bez chyb), a přibyla i hra nová a zcela jiná - koňské dostihy (Skački, velmi
                se podobají stejnojmenné sovětské arkádě z téže doby). S animovanými bitmapami,
                dokonce v barvách, jde myslím o vcelku důstojný "facelift" této již dosluhující
                technologie.
            </p>

            <p>
                Ani tady však lavina sovětských "teleher" ("teleigr") ještě nekončí, neboť další
                autoři již pár let před zmíněnou knihou pojali věc zase jinak, a přinesli naopak
                návody co nejjednodušší. V. Tyščenko z Kyjeva tak publikoval zjednodušený klon
                původní tranzistorové hry Odyssey pod titulem "Hry na TV obrazovce" (1980) na trochu
                překvapivém místě - v časopisu pro modeláře (Modelist-konstruktor), zatímco Viktor
                Seryj zvolil již zmíněnou nejjednodušší hru na honěnou, a se svým herním doplňkem k
                televizoru tak pronikl dokonce do rubriky pro začátečníky (časopis Radio, 1982).
            </p>

            <p>
                Poněkud netypické jsou příspěvky B. Igoševa ze Sverdlovska (dnes Jekatěrinburg - tím
                se zároveň z evropské části SSSR dostáváme i na Sibiř). Tento autor musel asi mít
                značně omezené možnosti, když se rozhodl módu televizních her napodobit s pomocí
                osciloskopu ze školní (či pionýrské) laboratoře. Jeho Elektronický hokej
                (Modelist-konstruktor, 1979) je navzdory názvu hrou spíše elektromechanickou (je v
                ní pouhý jeden tranzistor), a její hokejové penalty spočívají vlastně jen v rychlé
                reakci při mačkání tlačítek, kupodivu je však pohyb puku po nákresu hřiště
                (přiloženého na obrazovku) řízen joystickem. Druhá hra s dlouhým názvem
                "Elektronický terč s pohyblivým cílem" (Radio, 1981, spoluautor I. Kočev) je vcelku
                typickou střeleckou hrou se světelnou pistolí, jejíž obvody jsou díky analogové
                povaze osciloskopu zapojené opět velmi jednoduše.
            </p>

            <p>
                Vedle amatérských návodů vznikaly v Sovětském svazu i průmyslově vyráběné domácí
                hry, z nichž do tématu tohoto článku skutečně zapadá jen ta nejstarší - téměř
                antickým názvem se pyšnící Palestra 02 (1978), vyráběná v ukrajinském Lvově v
                podniku se sovětsky bizarním označením "Lvovské výrobní sdružení V. I. Lenina"
                (během času pod různými zkratkami jako LPO, PTO, LOORPO, či později LORTA).
                Čtyřkilogramová bedna skrývá 117 integrovaných obvodů TTL na čtyřech velkých
                deskách, takže jde o nejkomplikovanější hromadně vyráběnou domácí konzoli na východ
                od železné opony, a nejspíš i celosvětově (a můžeme si udělat už pátou čárku k
                velkorysým sovětským projektům větším než Pong). Jde o plně digitální hru, která se
                funkcí až neuvěřitelně moc podobá hrám založeným na AY-3-8500, je však ještě dále
                rozšířena (přidaná hra Volejbal, 6 režimů rychlosti míče atd.), má jiný zvuk, a
                některé části zapojení se zas podobají spíše Pongu. Cena 200 rublů prý odpovídala
                celému platu inženýra. (Z čehož lze vyvodit trochu překvapivý odhad ceny použitých
                čipů: Musely být výrazně levnější než u nás v Československu.)
            </p>

            <p>
                Okrajově zkusme zmínit i další průmyslově vyráběné hry, přestože již obsahovaly
                specializované čipy a tedy sem tak docela nepatří - nebylo jich v Sovětském svazu
                úplně málo: Prakticky současně s Palestrou se začala v Moskvě vyrábět v takzvaném
                pilotním závodu při Výzkumném ústavu dálkové radiokomunikace hra Turnir (1978),
                postavená na importovaných čipech AY-3-8500, zatímco Elektronika Eksi Video 01
                (1978) vznikla v podniku Eksiton (Pavlovskij Posad v Moskevské oblasti), který pro
                svoji hru začal vyrábět lehce modifikovaný klon čipu AY-3-8500 pod označením
                К145ИК17. Tento čip byl vyráběn také závodem Angstrem v Zelenohradu (opět satelit
                Moskvy), a používal se ve všech dalších sovětských hrách typu Pong: Elektronika Eksi
                Video 02 (1981) se světelnou pistolí, Elektronika Videosport (1981) od výrobního
                sdružení "Binom" z Vladikavkazu (alias Ordžonikidze) v Severní Osetii na Kavkaze,
                modernizovaný pak ve verzích s příponami "2", "M" a "3" (poslední z nich 1984, se
                světelnou pistolí), Evrika (1989) od Elektrobytpřístroje z ukrajinského Charkova, a
                nakonec Elektronika Lider, vyráběná také s označením v latince "Play Lider"
                Pjatigorským pilotním závodem NPO "Energoautomatika" (poblíž gruzínské hranice), a
                to dokonce až do roku 1993. Vedle toho byla hra vestavěna ještě do dvou televizorů -
                Rubín Ц1-205 (1981) z moskevského výrobního sdružení "Rubin", a Elektron Ц-265ДЛ
                takzvané série "lux" (1982, zmiňován je ještě i koncem roku 1986), z Lvovského
                televizního závodu "Elektron" na Ukrajině, v obou případech se však jednalo jen o
                exkluzivní malosériové varianty. Spíše kuriozitou byl asi modul televizní hry a
                digitálních hodin БВ-010С, nabízený jako součást modulární HiFi věže Estonia БВ-010
                stereo (před polovinou 80. let) z Talinského závodu "Punaně-PET" v Estonsku. To
                všechno pořád se stejným čipem a stejnými hrami.
            </p>

            <p>
                Žádné z uvedených her se nevyrobilo nijak závratné množství. Například televizor
                Rubín ve variantě s hrami vznikl v počtu pouhých 1764 kusů, známá výrobní čísla
                Palestry jsou také spíše jen v řádu tisíců. Je to vzhledem k velikosti Sovětského
                svazu počet vyloženě směšný. Do běžného prodeje se přístroje zřejmě dostávaly jen
                vzácně, a cena byla vysoká, takže zpočátku tyto hry údajně sloužily častěji na
                veřejných místech, po boku elektromechanických arkád (které se do jisté míry v
                Sovětském svazu také vyráběly). Veřejnost o nich navíc skoro vůbec nevěděla.
                Informace, že vůbec lze v Sovětském svazu něco takového zakoupit, se šířila mezi
                lidmi formou jakési ústní legendy, které se mnoho lidí zdráhalo vůbec uvěřit.
                Orientaci na vnitřním trhu jistě nepomáhalo ani velké množství různých výrobních
                podniků (z velké části využívajících zastřešující značku "Elektronika") - našel jsem
                seznam výrobců "bytové radioaparatury" se 428 položkami, kde přesto pár relevantních
                podniků není.
            </p>

            <p>
                Sovětský svaz té doby jistě nebyl právě vzorem svobodného šíření informací, přesto
                je však zarážející roztříštěnost i mezi samotnými odborníky a zájemci o elektroniku.
                Zatímco v roce 1978 se začaly vyrábět současně hned tři různé herní přístroje, a do
                roku 1985 jich už bylo sedm, k tomu ještě dva místní výrobci herních čipů, dva
                televizory s hrou a jedna HiFi věž, tak relevantní časopisy (nakolik je mám k
                dispozici) nic z toho vůbec nezmínily, a nadále tiskly hry stavěné z diskrétních
                součástek (ať už autoři modernější alternativu neznali, nevěřili její dostupnosti,
                nebo klasickou cestu prostě preferovali - to nedokážu říci). Jedinou výjimku ze
                zmíněného informačního vakua tvoří skromná počáteční inzerce hry Turnir (časopis
                Radio 6/1978), případně výjimečné a téměř neviditelné zmínky o televizoru Elektron,
                v přehledech mnoha a mnoha dalších vyráběných typů (Radio 9/1985 a 10/1986).
            </p>

            <p>
                Jinak nacházím jen zmínky o hrách zahraničních, a to ještě jen vzácně a v krátkém
                počátečním období této módy v SSSR: Časopis Radio koncem roku 1977 otiskl všeobecný
                přehled hlavních her v USA, předtím v září vystavoval Zanussi v Moskvě-Sokolnikách
                svoji novou hru Play-o-tronic, ještě o pár měsíců dříve se vyskytl v Polytechnickém
                muzeu v Moskvě jakýsi Pongu podobný arkádový tenis (existence něčeho takového v SSSR
                je letmo zmíněna i v úvodu prvního z návodů na TV hry), naopak o rok později budila
                na výstavišti VDNCH pozornost již zmíněná bulharská Sofia 23. Jsou to jen takové
                střípky zahraniční techniky, pro vývoj uvnitř Sovětského svazu asi sotva nějak
                relevantní. Později utichlo i to. (Kromě toho Ralph Baer údajně zmínil i oficiální
                export Odyssey do Sovětského svazu, již někdy v roce 1973 nebo 1974, to ale na
                sovětské straně zřejmě nezanechalo žádnou stopu. Mohlo by snad jít o nějaké malé
                množství pro uzavřený okruh tamní elity, kdoví...)
            </p>

            <p>
                Rekordní množství různých návodů v sovětských časopisech naznačuje trend, který jsme
                jen o trochu méně zažívali i u nás v Československu: Význam domácího kutilství v
                prostředí nedostatkové ekonomiky. Prázdné regály obchodů, a co si neuděláš sám, to
                nemáš... Paralelu s naší domovinou lze vidět i v existenci vlastní výroby konzolí i
                čipů do nich, ovšem špatně dostupných a v nepatrném množství, vlastních projektů
                (včetně dosti rozsáhlých) přesahujících rámec pouhého kopírování západu, nebo v
                podobném letopočtu jejich příchodu. Sovětský svaz ale oproti Československu v této
                fázi zamrznul prakticky o celou dekádu déle.
            </p>

            <p>
                Časové zpoždění za světovým vývojem je zde zkrátka enormní: Hry z diskrétních
                součástek ve světě vznikaly asi do roku 1976 (západ) resp. 1978 (země východního
                bloku), zatímco v Sovětském svazu rokem 1978 teprve začaly a byly aktuální dlouhých
                11 let. Konec výroby her typu Pong k roku 1993 působí až neuvěřitelně, a návodu s
                herním čipem (К145ИК17) se čtenáři časopisů dočkali zřejmě až v roce 1989. Článek,
                publikovaný v pionýrském časopisu pro starší děti Junij technik, ovšem již
                prohlašuje zmíněný čip za známý a dostupný - takže kdoví, co všechno se ještě o dění
                v této poněkud nečitelné zemi dozvíme. Musíme si ale zároveň uvědomit, že v téže
                osmdesátkové dekádě se v Sovětském svazu stavěly i arkádové automaty či první domácí
                počítače s řadou klonovaných čipů, a vznikl zde třeba i světoznámý Tetris, takže
                nelze tvrdit, že by sem novější technologie nepřicházely vůbec. Proč zde souběžně
                tak dlouho přežívaly i ty starší - těžko říct. V prostředí neustálého nedostatku
                všeho se možná prostě jen uplatnilo obojí. A tak v roce 1989 mohlo vyjít vedle řady
                klonů ZX Spectra a dalšího domácího Pongu ještě i druhé vydání knihy M. Ovečkina s
                hrami z osvědčených diskrétních TTL obvodů.
            </p>

            <p>
                Celá historie tak vlastně na obou stranách tehdy rozděleného světa končí podobně -
                knihou plnou návodů na televizní hry. Obě publikace sice dělí téměř celá dekáda,
                mají však mnoho společného. Obě obsahují vedle teorie i pokročilé, převážně
                digitální konstrukce, značně přesahující rámec tradičního žánru míčových her. Obě
                také vyšly dost pozdě, již v době rozmachu specializovaných herních čipů a nástupu
                prvních domácích mikropočítačů. Autoři tento vývoj jen letmo zmínili, nicméně se k
                němu snažili alespoň nějak postavit - můžeme si všimnout jak David L. Heiserman
                prohlašuje konstrukci z diskrétních součástek za pružnější variantu oproti hrám
                založeným na mikroprocesorech (na tehdejší herní cartridge reaguje otázkou "Jak
                kreativní můžeme být s hotovými programy od někoho jiného?"), zatímco Michail
                Alexejevič Ovečkin považuje klasickou technologii za dobrou průpravu k pochopení
                počítačových herních programů, a snaží se její fungování v počítačovém stylu i
                algoritmizovat pomocí vývojových diagramů (s dosti rozpačitými výsledky). Vývoj už
                byl ale přece jen jinde, a tak se obě knihy staly ve svých zemích spíše jakousi
                poslední tečkou za hrami z diskrétních součástek.
            </p>

            <Figure
                image={img["6-knihy.jpg"]}
                caption={{ cs: "Na závěr vyšlo pár poměrně netypických návodů i knižně" }}
            />

            <p>
                Co jsme tedy vlastně nakonec o tuzemských televizních hrách z diskrétních součástek
                zjistili? Přišly z hlediska vyspělých zemí poměrně pozdě, prakticky minutu po
                dvanácté, z pohledu zemí východního bloku však i přesto velmi brzy, a stihly se od
                nás ještě šířit i do dalších zemí. Byly skrze dva hlavní zdroje napojeny především
                na vývoj v Německu, v návaznosti na technologii prapředka Magnavox Odyssey. To však
                nebyla na západě jediná, a možná dokonce ani převládající vývojová větev této
                generace, čímž se k nám řada vychytávek vůbec nedostala. Kopírování a klonování her
                probíhalo v mnoha zemích světa, včetně i vyspělých, přičemž tuzemský přístup byl v
                tomto ještě relativně dost kreativní. Přemet, kterým inspirace na cestě k nám
                překročila hranice od profesionálních přístrojů k amatérským časopisovým návodům a
                zase zpět, nebyl sice věcí obvyklou, ale vyskytl se ve světě i jinde, a celkově
                větší význam návodů v časopisech dobře zapadá do trendu v zemích východního bloku.
                Málo čitelný Sovětský svaz si mezitím šel vlastní poněkud zmatenou cestou, na které
                se dokonce u diskrétních her jakoby na celou dekádu zastavil, a vůči Československu
                na první pohled značně podobné spektrum tamních projektů - od nejjednodušších až k
                nejrozsáhlejším, včetně vlastních čipů - ve skutečnosti žádné bližší vazby či
                technické podobnosti nemá.
            </p>

            <p>
                Závěrem dlužím poděkování Vojtovi Strakovi ze spolku Herní historie, jehož rozsáhlý
                výzkum v této oblasti je úzce spojen se vznikem mého článku, jakož i dlouhé řadě
                autorů zde citovaného on-line obsahu. Omlouvám se také za případné nedostatky mého
                přepisu jmen a názvů z azbuky, který jsem dělal foneticky podle originálu, a tedy se
                nekryje s často uváděnou (avšak nedokonalou) transkripcí anglickou.
            </p>

            <h4>Zdroje:</h4>
            <ul>
                <li>
                    Wikipedia: <a
                        href="https://en.wikipedia.org/wiki/History_of_video_game_consoles"
                        >History of video game consoles</a
                    >
                </li>
                <li>
                    David L. Heiserman: How to Design and Build Your Own Custom TV Games (TAB Books
                    inc., 1978)
                </li>
                <li>
                    <a href="https://www.pong-story.com/sanders.htm"
                        >Birth of the video game at Sanders Associates</a
                    >
                </li>
                <li>
                    <a
                        href="https://www.gamingalexandria.com/wp/2022/09/magnavox-odyssey-development-files/"
                        >Magnavox Odyssey – Development Files</a
                    >
                </li>
                <li>
                    Ethan Johnson: <a
                        href="https://thehistoryofhowweplay.wordpress.com/2026/08/22/1974s-bizarre-game-consoles"
                        >1974’s Bizarre Game Consoles</a
                    >
                </li>
                <li>
                    Ing. Günther Bless: "Odyssee", ein elektronischer Spielsimulator (Funk-Technik
                    24/1973 str. 928)
                </li>
                <li>B. Lübcke: TV tennisspel (Elektuur 10/1974 str. 1050)</li>
                <li>
                    Het spel is uit, het spel heeft gewonnen (Hra skončila, hra ji vyhrála)
                    (Elektuur 6/1975 str. 619) a další krátké zprávy o soutěži v průběhu ročníku
                    1974
                </li>
                <li>
                    Josti Electronic: AT 610 - TV spil (inzerce, Populær Elektronik 12/1974 str. 53)
                </li>
                <li>
                    Kurt Andersen, Henrik Kihl: Vinterens store hobby: TV spil (Populær Elektronik
                    2/1975 str. 62, 3/1975 str. 61)
                </li>
                <li>TV Tennis (Elektor 11/1975 str. 1111 = Elektuur 6/1975 str. 633)</li>
                <li>
                    TV Tennis extensions (Elektor 3/1976 str. 318, 4/1976 str. 453, 5/1976 str. 544
                    = Elektuur 2/1976 str. 242, 3/1976 str. 344)
                </li>
                <li>
                    Score on screen for TV games (Elektor 10/1976 str. 1008 = Elektuur 6/1976 str.
                    654)
                </li>
                <li>
                    G. Brazioli, A. Cattaneo: Ping Pong Elettronico a circuiti integrati
                    (Sperimentare 1/1976 str. 12, 2/1976 str. 116)
                </li>
                <li>
                    L. Kryška, J. Zuska: Hřiště na televizní obrazovce (Amatérské Radio B1/1977 str.
                    6, B6/1977 str. 222)
                </li>
                <li>
                    Vladislav Čacký: Televizní hry s tranzistory (Amatérské Radio A10/1977 str. 369,
                    A11/1977 str. 423)
                </li>
                <li>
                    Vladislav Čacký: Elektronické hry využívající televizor (Ročenka sdělovací
                    techniky 1978, str. 210)
                </li>
                <li>
                    Sławomir Bilicz: Tenis - gra telewizyjna (Radioamator i krótkofalowiec 11/1978
                    str. 263)
                </li>
                <li>
                    Т. Върбанова: Телевизионни игри (Радио, телевизия, електроника, 6/1978 str. 8,
                    7/1978 str. 5)
                </li>
                <li>Tenis TV (Tehnium 10/1978 str. 8)</li>
                <li>
                    Kopácsi László, Tóth Ferenc: TV-játék (Rádiótechnika 11/1977 str. 528, 12/1977
                    str. 565, 1/1978 str. 31)
                </li>
                <li>
                    <a href="https://amuseum.bg/katalog/tv-turnir">Телевизионна игра ТВ ТУРНИР</a>
                </li>
                <li>Държавен Bестник, 1977 No. 81 (Bulharsko, registrace výrobku TV Turnir)</li>
                <li>Elektronika viděná v Brně (Technický týdeník 45/1977 str. 11)</li>
                <li>
                    J. Gruy: Na návšteve u vývojárov v Tesle Orava Nižná (Smer 13. 5. 1978 str. 7)
                </li>
                <li>
                    Elżbieta Olszewska: 12 gier w odbiorniku telewizyjnym (Radio-elektronik 7-8/1980
                    str. 172)
                </li>
                <li>
                    Jose Antonio Ortigueira Amor: <a
                        href="https://retroordenadoresorty.blogspot.com/2025/04/consola-pong-hinno-hit-componentes.html"
                        >Consola pong Inno-Hit</a
                    >
                </li>
                <li>
                    Dorian Hanuš: MÍR a vysokou životní úroveň všemu lidstvu (týdeník ČS Televize
                    22/1976)
                </li>
                <li>M. J. Hughes: Tele-Tennis (Practical Wireless 7-11/1974)</li>
                <li>
                    Arnaldo Berardi, Massimo Cattadori: Il ping pong sulla tivù (Radio Elettronica
                    10/1975 str. 36)
                </li>
                <li>
                    Videomaster Ltd.: <a href="https://archive.org/details/videomaster-kit-manual"
                        >Videomaster VMIII kit - Assembly manual</a
                    > (září 1975)
                </li>
                <li>
                    David Edwards: Build your own Video Ball Game (Electronics Australia 5/1976 str.
                    38, doplňky 11/1976 str. 61)
                </li>
                <li>
                    <a
                        href="https://ia600705.us.archive.org/25/items/1stGenPong/Discrete%20Consoles/IEA_Technology_Tele-Tainment.pdf"
                        >Tele-tainment Instructions</a
                    > (IEA Technology Ltd.)
                </li>
                <li>
                    Martin F. Martorell: <a
                        href="https://prehistoricgaming.com/en/videosport-mk2-1975/"
                        >VideoSport MK2</a
                    >
                </li>
                <li><a href="https://pong-story.com/executivegames.htm">Executive Games</a></li>
                <li>Dash et al.: Electronic Games (patent US4034983A)</li>
                <li>
                    Shigeo Niitsu (新津茂夫): Elektronický Hokej (電子ホッケー) (Tranzistorová
                    Technologie (トランジスタ技術) 8/1975 str. 195)
                </li>
                <li>
                    P. Busby, B Sc: TV Football &amp; other games on the television screen
                    (Television 7/1974-1/1975)
                </li>
                <li>
                    Mitchell Waite, Larry Brown: Pongtronics (Popular Electronics 4/1976 str. 35,
                    5/1976 str. 61)
                </li>
                <li>
                    Ray Pichulo: Build this great TV game ["Bumper"] (Radio-Electronics 6/1976 str.
                    35)
                </li>
                <li>Jeffrey W. Anderson: TV Tag (Popular Electronics 11/1972 str. 61)</li>
                <li>Joseph A. Weisbecker: Space War Game (Popular Electronics 4/1976 str. 40)</li>
                <li>
                    Wikipedia: <a href="https://en.wikipedia.org/wiki/Joseph_Weisbecker"
                        >Joseph Weisbecker</a
                    >
                </li>
                <li>Л. Шепотковский, М. Чарный: Телеигра Теннис и Хоккей (Радио 1/1978 str. 22)</li>
                <li>М. Бибиков, Ю. Колпаков: Телеигра Морской бой (Радио 9/1978 str. 17)</li>
                <li>В. Горовиков: Телеигра ПВО - Воздушный бой (Радио 10/1979 str. 44)</li>
                <li>О телеигре Морской бой (Радио 6/1979 str. 29)</li>
                <li>Усовершенствование телеигр (Радио 7/1982 str. 26)</li>
                <li>
                    В. Баранов, В. Холопцев: Телевизор отображает информацию (Радио 10/1978 str. 46,
                    11/1978 str. 44, 1/1979 str. 37)
                </li>
                <li>
                    М. Овечкин: Универсальный телеигровой блок (Радио 3/1979 str. 45, 4/1979 str.
                    45)
                </li>
                <li>
                    М. А. Овечкин: Любительские телевизионные игры (edice Массовая радиобиблиотека,
                    vydavatelství Радио и связь, 2. vydání, 1989)
                </li>
                <li>
                    В. Тищенко: Игры на экране ТВ (Моделист-конструктор 1/1980 str. 36, 2/1980 str.
                    27, 4/1980 str. 26)
                </li>
                <li>Виктор Серый: Приставка для телеигр (Радио 5/1982 str. 51)</li>
                <li>Б. Игошев: Электронный Хоккей (Моделист-конструктор 1/1979 str. 38)</li>
                <li>
                    Б. Игошев, И. Кочев: Электронный тир с подвижной мишенью (Радио 2/1981 str. 53)
                </li>
                <li>
                    ЛООРПО им. В. И. Ленина: <a
                        href="https://rw6ase.narod.ru/index1/wideoteh/w_pris/palestra02.djvu"
                        >Руководство по эксплуатации приставки телевизионной ПАЛЕСТРА 02</a
                    > (1978)
                </li>
                <li>Е. Великович: домашние телеигры (Радио 10/1977 str. 60)</li>
                <li>Игровые автоматы (Радио 3/1977 str. 49)</li>
                <li>А. Богдан: Электроника Болгарии (Радио 11/1978 str. 35)</li>
                <li>
                    Валентин Холмогоров: <a
                        href="https://habr.com/ru/companies/ruvds/articles/986464/"
                        >Советский «Плейстейшн». История отечественных игровых телеприставок</a
                    >
                </li>
                <li>
                    Wikibooks: <a
                        href="https://ru.wikibooks.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5_%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D0%B5_%D0%BF%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8/%D0%A4%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D1%8B%D0%B5_%D1%82%D0%B5%D0%BB%D0%B5%D0%B8%D0%B3%D1%80%D1%8B"
                        >Советские телевизионные игровые приставки/Фабричные телеигры</a
                    >
                </li>
                <li>
                    Wikipedia: <a href="https://ru.wikipedia.org/wiki/%D0%9A145%D0%98%D0%9A17"
                        >К145ИК17</a
                    >
                </li>
                <li>ЦКРО Радиотехниика: Турнир (Радио 6/1978, inzerát, zadní obálka)</li>
                <li>
                    Сергей Николаевич Ермаков: <a href="https://rw6ase.narod.ru/index0/zd_v9.6.pdf"
                        >Список предприятий, производивших бытовую радиоаппаратуру в 1945-2010 гг.</a
                    >
                </li>
                <li>Б. Колобов: Сквош по пятому каналу (Юный техник 10/1989 str. 71)</li>
                <li>
                    Wikipedia: <a
                        href="https://en.wikipedia.org/wiki/List_of_first_generation_home_video_game_consoles"
                        >List of first generation home video game consoles</a
                    >
                </li>
            </ul>

            <h4>Zdroje obrázků:</h4>
            <p>Úvodní koláž:</p>
            <ul>
                <li>
                    Země: <a
                        href="https://commons.wikimedia.org/wiki/Category:Earth_from_space#/media/File:01-Earth_(LofE01256).png"
                        >Wikimedia</a
                    >
                </li>
                <li>PONG: <a href="https://cs.wikipedia.org/wiki/Pong">Wikipedia</a></li>
                <li>
                    Videosport MK2: <a href="https://prehistoricgaming.com/en/videosport-mk2-1975/"
                        >Martin F. Martorell</a
                    >
                </li>
                <li>
                    Palestra 02: <a
                        href="https://rw6ase.narod.ru/index1/wideoteh/w_pris/palestra02.html"
                        >Domácí technologie 20. století</a
                    >
                </li>
                <li>
                    Ping-o-Tronic: <a
                        href="https://www.nightfallcrew.com/22/03/2014/zanussiseleco-ping-o-tronic-1nd-edition-1975"
                        >Nightfall</a
                    >
                </li>
                <li>
                    Odyssey: <a
                        href="https://cs.wikipedia.org/wiki/Magnavox_Odyssey#/media/Soubor:Magnavox-Odyssey-Console-Set.jpg"
                        >Wikipedia</a
                    >
                </li>
                <li>
                    Videomaster Olympic: <a
                        href="https://fr.wikipedia.org/wiki/Fichier:Videomaster_Olympic_Home_TV_Game_VM3-D_(4).jpg"
                        >Wikipedia</a
                    >
                </li>
            </ul>
            <p>Profesionální hry:</p>
            <ul>
                <li>
                    Brown Box: <a
                        href="https://www.si.edu/object/brown-box-program-cards-1967-68%3Anmah_1301998"
                        >Smithsonian</a
                    >,
                    <a
                        href="https://www.facebook.com/groups/519858548078322/posts/24642289408741899/"
                        >Facebook</a
                    >
                </li>
                <li>
                    Odyssey: <a
                        href="https://cs.wikipedia.org/wiki/Magnavox_Odyssey#/media/Soubor:Magnavox-Odyssey-Console-Set.jpg"
                        >Wikipedia</a
                    >,
                    <a
                        href="https://upload.wikimedia.org/wikipedia/commons/a/a8/Magnavox-Odyssey-Open-FL.jpg"
                        >Wikimedia</a
                    >
                </li>
                <li>
                    PONG: <a href="https://cs.wikipedia.org/wiki/Pong">Wikipedia</a>,
                    <a href="https://lakeside-arcade.com/2026/01/25/atari-pong-pcb-repair-logs/"
                        >Lakeside Arcade</a
                    >
                </li>
                <li>
                    Videosport MK2: <a href="https://prehistoricgaming.com/en/videosport-mk2-1975/"
                        >Martin F. Martorell</a
                    >,
                    <a href="https://www.pong-story.com/pics/vsmk2/inside_laterversion.jpg"
                        >Pong-Story</a
                    >
                </li>
                <li>
                    Ping-o-Tronic: <a
                        href="https://www.nightfallcrew.com/22/03/2014/zanussiseleco-ping-o-tronic-1nd-edition-1975"
                        >Nightfall</a
                    >,
                    <a
                        href="https://en.wikipedia.org/wiki/Ping-O-Tronic#/media/File:Seleco_Ping_o_Tronic_(Mod._PP_4)_(Zanussi)_(7).jpg"
                        >Wikipedia</a
                    >
                </li>
                <li>
                    Videomaster Olympic: <a
                        href="https://fr.wikipedia.org/wiki/Fichier:Videomaster_Olympic_Home_TV_Game_VM3-D_(4).jpg"
                        >Wikipedia</a
                    >, <a href="https://www.youtube.com/watch?v=YkZZ4LZ0Nmg">Olipix / YouTube</a>
                </li>
                <li>Multiplay 80, Videoshoot: foto autor</li>
                <li>
                    Palestra 02: <a
                        href="https://rw6ase.narod.ru/index1/wideoteh/w_pris/palestra02.html"
                        >Domácí technologie 20. století</a
                    >,
                    <a href="http://www.leningrad.su/museum/show_big.php?n=2987"
                        >Soviet digital electronics museum</a
                    >
                </li>
                <li>Turnir: <a href="https://amuseum.bg/katalog/tv-turnir">Amuseum</a></li>
            </ul>
            <p>Televizory s vestavěnou hrou:</p>
            <ul>
                <li>
                    <a
                        href="https://sandacite.bg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-%D1%81%D0%BE%D1%84%D0%B8%D1%8F-23-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0-%D0%B8%D0%B3%D1%80%D0%B0/"
                        >Sofia 23</a
                    >
                </li>
                <li>
                    <a href="https://rw6ase.narod.ru/index1/wideoteh/w_pris/rubin_c1_205.html"
                        >Рубин Ц1-205</a
                    >
                </li>
                <li>
                    <a href="https://rw6ase.narod.ru/index1/tw/tw_cw_stand/elektron_c265d.html"
                        >Электрон Ц-265ДЛ</a
                    >
                </li>
                <li>
                    <a href="https://en.wikipedia.org/wiki/Odyssey_series">Magnavox Odyssey 4305</a>
                </li>
                <li><a href="https://www.youtube.com/watch?v=67fZT-liIMg">Sampo VG6512BW</a></li>
                <li>
                    <a
                        href="https://en.wikipedia.org/wiki/List_of_first_generation_home_video_game_consoles#/media/File:Salora_Playmaster.jpg"
                        >Salora Playmaster</a
                    >
                </li>
                <li>
                    <a href="https://commons.wikimedia.org/wiki/File:Noblex_Micro_14_14NT320.jpg"
                        >Noblex Micro 14 14NT320</a
                    >
                </li>
                <li>
                    <a
                        href="https://www.netauktion.se/auktion/produkt/telefunken-palcolor-8610-inkl-tv-spel"
                        >Telefunken Palcolor 8610</a
                    >
                </li>
                <li>
                    <a
                        href="https://20thcenturyvideogames.com/index.php?action=vermodelos&amp;submenu=&amp;tipo=2&amp;sistema=TVPong&amp;verletra=verfamilias#TVPong"
                        >Philips 12B 615-22</a
                    >
                </li>
                <li>
                    Thomson: <a
                        href="https://upload.wikimedia.org/wikipedia/commons/3/30/Thomson_TV_with_integrated_Pong_chip.jpg"
                        >Wikimedia</a
                    >, <a href="https://www.youtube.com/watch?v=WZ2hK7f2Ylc">YouTube</a>
                </li>
                <li>
                    <a
                        href="https://20thcenturyvideogames.com/sistemas/Blaupunkt/modelos/BlaupunktSantiagoColorTS.jpg"
                        >Blaupunkt Santiago Color TS</a
                    >
                </li>
                <li>
                    <a
                        href="https://20thcenturyvideogames.com/sistemas/TVPong/modelos/LoeweCT5160.jpg"
                        >Loewe CT 5160 UTG, CT 5162 UTG</a
                    >
                </li>
                <li>
                    <a
                        href="https://20thcenturyvideogames.com/index.php?action=vermodelos&amp;submenu=&amp;tipo=2&amp;sistema=TVPong&amp;verletra=verfamilias#TVPong"
                        >TEC Astrosound TV 12-4 R/W</a
                    >
                </li>
            </ul>
            <p>Časopisové návody:</p>
            <ul>
                <li>Shigeo Niitsu: Electronic Hockey (Transistor Technology 8/1975 str. 195)</li>
                <li>tv tennis (Elektor 11/1975, str. 1118)</li>
                <li>
                    Mitchell Waite, Larry Brown: Pongtronics (Popular Electronics 4/1976, str. 36)
                </li>
                <li>
                    Ray Pichulo: Build This Great TV Game (alias "bumper") (Radio-Electronics 6/1976
                    str. 35)
                </li>
                <li>
                    Jeffrey W. Anderson: Play Electronic Tag on Your TV (Popular Electronics
                    11/1972, str. 61)
                </li>
                <li>
                    Б. Игошев, И. Кочев: Электронный тир с подвижной мишенью (Радио 2/1981 str. 53)
                </li>
                <li>Joseph A. Weisbecker: Space-War Game (Popular Electronics 4/1976, str. 41)</li>
                <li>В. Горовиков: Телеигра ПВО - Воздушный бой (Радио 10/1979 str. 45)</li>
                <li>М. Бибиков, Ю. Колпаков: Телеигра Морской бой (Радио 9/1978 str. 17)</li>
                <li>
                    David Edwards: Build your own Video Ball Game (Electronics Australia 5/1976 str.
                    38)
                </li>
                <li>М. Овечкин: Универсальный телеигровой блок (Радио 4/1979 str. 49)</li>
                <li>
                    Sławomir Bilicz: Tenis - gra telewizyjna (Radioamator i krótkofalowiec 11/1978
                    str. 269)
                </li>
                <li>
                    Kurt Andersen, Henrik Kihl: Vinterens store hobby: TV spil (Populær Elektronik
                    2/1975 str. 62)
                </li>
                <li>
                    М. А. Овечкин: Любительские телевизионные игры (2. vydání, 1989 - str. 48, 66)
                </li>
            </ul>
            <p>Knihy:</p>
            <ul>
                <li>
                    David L. Heiserman: How to Design and Build Your Own Custom TV Games (TAB Books
                    inc., 1978)
                </li>
                <li>
                    М. А. Овечкин: Любительские телевизионные игры (2. vydání, 1989 - str. 48, 66)
                </li>
            </ul>
        {/snippet}
    </Loc>
</section>
