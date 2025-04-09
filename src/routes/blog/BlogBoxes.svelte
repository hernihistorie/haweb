<script lang="ts">
	import BlogBox from '$src/lib/ThinBox.svelte';

    interface Props {
        all: boolean;
    }

    let { all }: Props = $props();
</script>

<div class="blogboxes">
    <BlogBox href="/blog/43-ondra-programy"
    title="Zachráněný software pro Ondra SPO 186"
    >
    Jak jsme psali toto úterý, tak se nám povedlo nedávno nejen sehnat počítač Ondra, ale také osm kazet s nezazálohavnými programy pro tento počítač. Díky úžasnému Janu Heřmanovi, už nezazálohované ale nejsou! Jedná se primárně o jednoduché obrázky, ale jde zde taky nalézt vzdělávací programy, kondiciogramy a samozřejmě jednoduché hry.
    </BlogBox>
    
    <BlogBox href="/blog/42-ondra-pocitace"
    title="Sehnali jsme dva počítače Ondra s nezazálohovanýma hrama!"
    >
    Ačkoliv náš archiv obsahuje mnoho strojů, které sehráli měnší či větší roli v rámci československé herní a počítačové historie, tak zde dlouhodobě chyběl zcela zásadní počítač československé výroby - Ondra SPO 186. Nedávno jsme tento nedostatek napravili a nejenže jsme si konečně dva Ondry pořídili, ale dokonce jsme k nim dostali několik kazet s nikde nezazálohovaným softwarem.
    </BlogBox>
    
    <BlogBox href="/blog/41-excalibur-skeny"
    title="Oskenovali jsme (SKORO) celý časopis Excalibur"
    >
    Časopis Excalibur, jehož nulté číslo vyšlo v roce 1990, byl jedním z prvních časopisů o videohrách, který u nás vycházel a v kterém zároveň začínalo mnoho významných osobnostní herní žurnalistiky jako Jakub Červinka, Jan Eisler, Andrej Anastasov, Tomáš Mrkvička, Jan Tománek ad. Časopis jsme téměř celý oskenovali a zveřejnili.
    </BlogBox>

    {#if all}
    
    <BlogBox href="/blog/41-excalibur-skeny"
    title="Oskenovali jsme (SKORO) celý časopis Excalibur"
    >
    Časopis Excalibur, jehož nulté číslo vyšlo v roce 1990, byl jedním z prvních časopisů o videohrách, který u nás vycházel a v kterém zároveň začínalo mnoho významných osobnostní herní žurnalistiky jako Jakub Červinka, Jan Eisler, Andrej Anastasov, Tomáš Mrkvička, Jan Tománek ad. Časopis jsme téměř celý oskenovali a zveřejnili.
    </BlogBox>

    <BlogBox href="/blog/40-efgamp"
    title="Stali jsme se členy EFGAMP"
    >
    Oficiálně oznamujeme, že jsme se stali členy European Federation of Game Archives, Museums and Preservation Projects (EFGAMP), který reprezentuje a propojuje více než 20 evropských institucí a organizací, jež se zaměřují na záchranu evropské herní kultury.
    </BlogBox>
    
    <BlogBox href="/blog/39-os2-warp-3-cs"
    title="Zdigitalizovali jsme českou verzi OS/2 Warp 3"
    >
    Nedávno se nám do archivu podařilo získat dvě kompletní krabice s operačním systémem OS/2 od IBM. V jedné  z nich je dokonce česká varianta OS/2 Warp 3 - pravděpodobně nejranější lokalizovaná verze, která u nás vyšla.
    </BlogBox>

    <BlogBox href="/blog/38-lubor-kopecky-dodatek"
    title="Doplňkové otázky k rozhovoru s Luborem Kopeckým, autorem prvních Bulánků"
    >
    Lubor Kopecký, s kterým jsme dělali rozhovor před necelýma dvěma lety, jsme se doptali na vzpomínky ohledně prvních Bulánků - jak byli propagovaný, jak autorstvo komunikovalo s komunitou a jakým způsobem ji podporovalo a jaký měla hra úspěch v zahraničí.
    </BlogBox>

    <BlogBox href="/blog/37-pocitac-tns-xt"
    title="Dostali jsme osobní počítač TNS-XT"
    >
    Dostali jsme do naší sbírky československý počítač TNS-XT i s plně lokalizovanou verzí systému TE-DOS 2.00 jež byl sestaven v legendárních Slušovicích. Po pár úpravách se nám ho konečně povedlo dostat do stavu kdy je prezentovatelný veřejnosti.
    </BlogBox>

    <BlogBox href="/blog/36-skeny-tipstation"
    title="Časopis TipStation zcela oskenován a doplněn do naší databáze časopisů"
    >
    Po nějaké době jsme oskenovali další časopis který zde vycházel. Časopis Tipstation se objevil na trhu v prosinci 2001 a stojí za ním redakce OPSM, která si po úspěchu "Top secret speciálu" zřejmě uvědomila, že na trhu je dostatek místa pro samostatný časopis specializující se na tipy, návody a cheaty do her pro Playstation.
    </BlogBox>
    
    <BlogBox href="/blog/35-citov-josef-havelka"
    title="PROJEKT CÍTOV - Rozhovor s Josefem Havelkou, zakladatelem klubu"
    >
    První etapu zpracování věcí z Cítovského klubu bychom rádi zakončili rozhoovorem s jeho zakladatelem Josefem Havelkou. Ten povídá o tom, jak klub vznikl, fungoval a jaké jiné aktivity u něj probíhaly.
    </BlogBox>
    
    <BlogBox href="/blog/34-martin-kadlcik"
    title="Rozhovor s Martinem Kadlčíkem, autorem hry das ADLERNEST"
    >
    Po záchraně hry das ADLERNEST na ZX Spectrum jsme položili jeho autorovi - Martinu Kadlčíkovi - i několik otázek ohledně toho, jak hru tvořil, jak se k hrám a počítačům vůbec dostal a co dělá v současnosti.
    </BlogBox>

    <BlogBox href="/blog/33-citov-kazety-spectrum"
    title="PROJEKT CÍTOV - Další kazety s výukovými programy na ZX Spectrum"
    >
    V rámci činnosti Cítovského klubu začal v 90. letech vznikat komerčně distribuovaný výukový software, který v současnosti digitalizujeme. Třetí várka tohoto softwaru jsme nedostali pro změnu od pana Havelky - zakladatele klubu - ale od jednoho člověka, jenž nás kontaktoval na sociálních sítítch.
    </BlogBox>

    <BlogBox href="/blog/32-citov-zpravodaj"
    title="PROJEKT CÍTOV - Skeny cítovského zpravodaje"
    >
    Oskenovali jsme počítačový zpravodaj, který vznikal v 80. letech v rámci činnosti cítovského atari klubu.
    </BlogBox>

    <BlogBox href="/blog/31-citov-dat-kazety"
    title="PROJEKT CÍTOV - Digitalizace DAT kazet"
    >
    Povedlo se nám dát dohromady funkční sestavu na zálohování DAT kazet.
    </BlogBox>

    <BlogBox href="/blog/30-bytefest-2024"
    title="Na ByteFestu jsme zachránili hru na ZX Spectrum (mimojiné)"
    >
    Podobně jako na minulém ByteFestu, tak i na tomto nám byla donesena kazety s nezazálohovanou hrou na ZX Spectru. Tu nám přinesl Martin Kadlcik a z ni se nám povedlo zdigitalizovat hru jménem "das ADLERNEST".
    </BlogBox>

    <BlogBox
        href="/blog/29-citov-kazety-atari"
        title="PROJEKT CÍTOV - Kazety s výukovýmy programy na Atari 800XL/XE, 130XE"
    >
    V rámci činnosti Cítovského klubu začal v 90. letech vznikat komerčně distribuovaný výukový software, který právě v současnosti digitalizujeme. Druhá várka tohoto softwaru, kterou se nám povedlo zachránit, jsou 2 výukové hry na 8-bit Atari distribuovaných na kazetách.
    </BlogBox>

    <BlogBox href="/blog/28-citov-kazety-spectrum"
    title="PROJEKT CÍTOV - Kazety s výukovými hrami na ZX Spectrum"
    >
    V rámci činnosti Cítovského klubu začal v 90. letech vznikat komerčně distribuovaný výukový software, který právě v současnosti digitalizujeme. První várka tohoto softwaru, kterou se nám povedlo zachránit, je 10 výukových her na ZX Spectrum distribuovaných na kazetách.
    </BlogBox>

    <BlogBox href="/blog/27-nabidkovy-katalog"
    title="Oskenovali jsme nabídkový katalog z počátku 90. let"
    >
    Nedávno se nám dostala do rukou sbírka návodů (a jiné literatury) pro ZX Spectrum. Mezi těmito návody byl i drobný sešítek nadepsaný "Nabídkový katalog pro počítače ZX SPECTRUM a kompatibilní" z konce roku roku 1990.
    </BlogBox>

    <BlogBox href="/blog/26-joysticky"
    title="Přírůstek do Herního archivu: Podomácku vyrobené ovladače k ZX Spectru"
    >
    Herní historií nejsou jen hry a oficiální hardware – součástí herní historie (zejména té jenž se odehrávala v rámci bývalého Východního bloku) je i podomácku zbastlené příslušenství, jako např. herní joysticky.
    </BlogBox>

    <BlogBox href="/blog/25-stehovani-strahov"
    title="Odstěhovali jsme se ze Školíhcího centra na Strahově"
>
        Minulý týden jsme konečně odstěhovali poslední věci z našeho (již bývalého) skladu ve strahovském školítku.
    </BlogBox>

    <BlogBox href="/blog/24-8-disketovka"
    title="Opravili jsme osmipalcovou disketovku!"
>
        Podařilo se nám sehnat a opravit 8" disketovku! Hurá!
    </BlogBox>

    <BlogBox href="/blog/23-prepis-zdenek-vodak"
    title="Přepis rozhovoru se Zdeňkem Vodákem, autorem hry z Videostopu"
>
        Jak jsme minulý Pátek slíbili, tak jsme tak i učinili: interview se Zdeňkem Vodákem jak v textové tak zvukové podobě najdete v rámci našich přepsaných Rozhovorů.
    </BlogBox>

    <BlogBox href="/blog/22-skeny-scenaru"
    title="Skeny scénářů k pořadu Videostop"
>
        Jak jsme oznámili v jenom z předchozích příspěvků, tak jsme dělali rozhovor s Vladimírem Bezděkem, s tvůrcem pořadu Videostop. Ten nám po dokončení rozhovoru zapůjčil scénáře ke dvěma dílům tohoto slavného pořadu - přesněji návrh na první díl (který je doplněný o posudek pořadu a ruční poznámky k úpravě scénáře) a pak scénář k dílu pátému.
    </BlogBox>

    <BlogBox href="/blog/21-mod-chipy"
    title="Přírůstek do sbírky Herního archivu: Modchipy pro PS1/PS2"
>
        Dějiny herního média nejsou jen dějinami velkých společností, AAA her a oficiálně distribuovaných titulů - dějiny videoher jsou i dějinami pirátění, ilegálního šíření ale i modování herních konzolí. Takové modchipy umožňovali hráčstvu (které si jej pečlivě napájelo do své konzole), nejen hrát oficiální hry nepříliš oficiální cestou, ale také jim otevřeli možnost pro danou platformu vytvářet hry nové.
    </BlogBox>

    <BlogBox href="/blog/17-rozhovor-vladimir-bezdek"
    title="Rozhovor s Vladimírem Bezděkem st., autorem pořadu Videostop"
>
        Vzhledem k tomu, že už máme za sebou digitalizaci hry z pořadu ,,Videostop" i rozhovor s autorem hry z pořadu ,,Videostop", tak jsme to třetice všeho dobrého i zlého udělali rozhovor i se samotným vynálezcem pořadu, Vladimírem Bezděkem. Ten v rozhovoru povídal zejména o tom, jak probíhalo natáčení pořadu, jak přišel k samotnému jeho konceptu apod.
    </BlogBox>

    <BlogBox href="/blog/16-ops2-magazin"
    title="PlayStation2 Oficiální magazín oskenován a doplněn do Databáze časopisů"
>
        Minulý týden jsme doplnili do naší databáze časopisů všechna čísla "PlayStation2 OFICIÁLNÍ MAGAZÍN" a jeho skeny jsme zároveň nahráli na Internet archive, kde si je můžete prohlédnout.
    </BlogBox>

    <BlogBox href="/blog/15-gta-3-prirucky"
    title="Do archivu jsme získali vzácnou příručku ke GTA 3"
>
        Sérii videoherních příruček u nás vydávala firma STUARE, která u nás překládala "strategy guides" od dvou konkurenčních zahrničních firem - Brady Games (od kterého je příručka na obrázku) a Prima Games. Těchto návodů vyšo celkově 48 (a v archivu nám jich zbývá 9). Tyto návody byli svého času plnohodnotnou součástí mnoha herních zážitků a proto jsme rádi, že máme možnost mít tento vzácnější kousek u nás v archvivu.
    </BlogBox>

    <BlogBox href="/blog/14-zaznam-retrofestu-2024"
    title="Záznam streamu Herní historie: RetroFest 2024"
>
        Už skoro před půl rokem (ten čas letí) jsme pořádali náš nepravidelný stream RetroFest, na kterém jsme oznamovali novinky ohledně naší činnosti a zároveň jsme si zahráli i nějaké RetroHry. Konečně jsme se dostali k sestříhání tohoto stremu, který celý najdete zde.
    </BlogBox>

    <BlogBox href="/blog/13-zachraneny-videostop"
    title="Originální hra z pořadu Videostop"
>
        Jak jsme slíbili, tak jsme konečně zdigitalizovali a zveřejnili originální hru z pořadu Videostop. Hra původně neměla být vůbec veřejně distribuovaná a její spuštění a zapojení tedy není úplně triviální. Z tohoto důvodu jsme pro vás připravili stručný návod, který by vás měl seznámit s tím, co vše k hraní potřebujete a jak hru zapnout a ovládat.
    </BlogBox>

    <BlogBox href="/blog/12-rozhovor-vodak-videostop"
    title="Rozhovor se Zdeňkem Vodákem, autorem hry z pořadu Videostop"
>
        Po asi dvou měsíčním hledáním se nám zadařilo nejen získat kontakt na autora slavné hry z pořadu Videostop, ale také se nám povedlo s ním včera udělat rozhovor a DOKONCE od něj i získat kazetu (nebo přesněji dvě) se samotnou hrou na ZX Spectrum (kterou za nedlouho najdete buď v našem inventáři nebo na cs.speccy).
    </BlogBox>

    <BlogBox href="/blog/20-prislusenstvi-zxspectrum"
    title="Přírůstek do sbírky Herního archivu: Příslušenství k mikropočítačům"
>
        Velmi často se naše sbírka rozšiřuje o věci ke straým mikropočítačům jako je ZX Spectrum  nebo 8-bitové Atari. Typicky jde o kazety s programy nicméně občas se k nám dostanou i velmi roztomilé, po domácku dělané příslušenství, jako je např. ovladač na obrázku. Ty byly svého času vyráběné ze všeho možného - ze starých zásuvek, tlačítek z telefonů, páček od sprch, krabiček od mýdel apod.. Kdyby náhodou někdo měl podobné dobové příslušenství a byl ochoten ho darovat někomu kdo se o něj postará a využije, tak budeme moc rádi, když nás kontaktujete!
    </BlogBox>

    <BlogBox href="/blog/19-jrc-letaky"
    title="Do sbírky Herního archivu nám přibylo několik katalogů od JRC"
>
        Do správného archivu videoher samozřejmě nepatří jen samotné hry ale i mnoho věcí kolem - herní časopiy, propagační materiály, merch, ale také distribuční materiály od prodejců jako je např. JRC. Z takovýchto katalogů se dají vyčíst různé zajímavé historické informace, jako co za hry se zde distribuovalo, kolik tyto hry stály nebo kdy se sem vůbec dostaly.
    </BlogBox>

    <BlogBox href="/blog/18-projekt-citov"
    title="Úvod k PROJEKTU CÍTOV"
>
        Rádi bychom Vám oznámili nový projekt na kterém se podílíme a který si na začátek vyžaduje drobný historický kontext: Jak jistě víte, tak v 80. letech zde byla relativně rozšířená kultura tzv. počítačových klubů. Jedním takovým klubem byl i počítačový klub z Cítova, který byl spoluzaložen Josefem Havelkou a který fungoval pří místním JZD. Tento klub byl otevřen prakticky každý den, jednou za čas pořádal tzv. „Atari bály“ nebo akce pro pedagogy a zároveň vydával vlastní software pro ZX Spectrum a Atari.
    </BlogBox>

    <BlogBox href="/blog/11-arma-bonusdisk"
    title="Do archivu sháníme bonusdisk k ARMA"
>
        Činnost herního archiváře občas obnáší si všímat i takových detailů, jako je drobný papírek přiložený ke hře. V tomto případě jde o papírek z obalu Army, který nasvědčuje existenci bonusového disku ke hře. Nicméně, ačkoliv máme nyní v archivu tento papírek tak nám chybí samotný bonusdisk. Pokud by se tedy náhodou našel někdo, kdo by byl ochotný vzdát se tohoto bonusdisku a věnovat ho našemu archivu, tak budeme moc rádi.
    </BlogBox>

    <BlogBox href="/blog/10-pokemon-hraj-si-s-nami"
    title="Nový přírůstek do Herního Archivu: Magazín POKÉMON: Hraj si s námi"
>
        Do sbírky se nám nedávno dostala skoro všechna čísla složitě sehnatelného časopisu „POKÉMON: Hraj si s námi." Tento časopis byl překladem italského originálu, vycházel na přelomu devadesátých a nultých let pod vydavatelstvím EGMONT a svým obsahem cílil na dětské čtenářstvo.
    </BlogBox>

    <BlogBox href="/blog/9-playboy2-riskuj"
    title="PLAYBOY2 a RISKUJ!"
>
        Kromě toho, že jsme u sběratele Filip Reichert  před dvěma týdny zdigitalizovali několik kazet s hrami na ZX Spectrum, tak jsme také zvládli zdigitalizovat řadu videoher na CDčkách a Disketách (a něco jsme stihli i naskenovat!). Za zmínku stojí zejména dva tituly a to nikde nezdigitalizovaný Playboy 2 a Datadisk k riskuj.
    </BlogBox>

    <BlogBox href="/blog/4-nove-zachranene-hry-od-firmy-mael"
        title="Nově zachráněné hry od firmy Mael"
    >
        Tento pátek (20.4.2024) jsme byli na základě iniciativy ze strany <a href="https://www.facebook.com/karel.ondracek.5">Karla Ondráčka</a> (aka Solarise z Česko-Slovenského Speccy Archivu) u sběratele Filip Reichert zdigitalizovat některé předměty z jeho sbírky. Nejdůležitějším předmětem co jsme zdigitalizovali byly do teď nezachráněné hry (a jeden "propagační prográmek") na ZX Spectrum od firmy MAEL.
    </BlogBox>

    <BlogBox href="/blog/8-rozhovor-pavel-suchmann"
    title="Rozhovor s Pavlem Šuchmannem a Nabídka spolupráce!"
>
        Včera jsme udělali rozhovor s Pavlem Šuchmannem - tvůrcem her na počítač Sharp - ke kterému jsme se dostali skrze blog Herního Archeologa. Povídali jsme si o jeho vzpomínkách na počítačový klub v Kutné Hoře, o studiu na ČVUTu, o revoluci a samozřejmě o jeho hrách a herních zkušenostech. Záznam rozhovoru je dostupný na zažádání.
    </BlogBox>

    <BlogBox href="/blog/7-take2-press"
    title="Dumpy press CD firmy Take2"
>
        Nedávno jsme se dostali k CDčkám z daleké Austrálie s press materiály firmy Take 2. Kromě materiálů k hrám jako je např. Tropico mezi nima byly věci k českým klasikám Mafia a Vietcong!
    </BlogBox>

    <BlogBox href="/blog/6-basic"
    title="Nově zachráněné kompilátory BASICu"
>
        Kazeta na obrázku níže byla do nedávna plná nezazálohovaných a do češtiny/slovenštiny přeložených programů na kompilaci jazyku BASICu. Všechny programy jsou pro počítač ZX Spectrum/Didaktik/Delta a patří mezi ně: COLT, MCCODER2, TOBOS PF a HiSoft BASIC.
    </BlogBox>

    <BlogBox href="/blog/5-matematika-petr-stasiak"
    title="Nově zachráněný program MATEMATIKA od Petra Stasiaka"
>
        Jeden z programů/her, které se nám v rámci digitalizační činnosti spolku povedlo zachránit je výukový program Matematika pro ZX Spectrum/Didaktik/Delta. Program na programoval Petr Stasiak a distribuovala firma Pelos.
    </BlogBox>

    <BlogBox href="/blog/3-novinky-na-pocatku-roku-2024"
        title="Novinky na počátku roku 2024"
    >
        Začátkem tohoto roku jsme vypustili (a na streamu oznámili) některé naše projekty, na kterých jsme v rámci našeho spolku a archivu pracovali. V tomto článku se o nich můžete dozvědět.
    </BlogBox>

    <BlogBox href="/blog/2-retrofest-2024"
        title="RetroFest 2024 streamuje do vašich obýváků"
    >
        S radostí oznamujeme, že v neděli 28. ledna se odehraje další ročník RetroFest streamu! Ať už jste fanoušci retroher, co rádi navštěvují RetroHernu na veřejných akcích, nebo se zajímáte o herní historii v našich kotlinách a chcete vědět na čem pracujeme, doufáme, že vás nalákáme se stavit na našem nepravidelném streamu. Můžete se těšit na přednášku o Československých televizních tenisech, na pařbu Unreal Tournamentu s publikem, na ohlášení několika novinek v rámci našeho projektu Herní archiv, a na hraní více či méně známých her z našich luhů a hájů! 
    </BlogBox>

    <BlogBox href="/blog/1-svycarske-dobrodruzstvi"
        title="Švýcarské dobrodružství"
    >
        Krátce po té, co jsem se oficiálně zapojil do činnosti spolku Herní historie, stala se věc. Už si bohužel napamatuji, kdo s ní přišel, ale protože pro mě každá věc co smrdí dobrodružstvím, je věcí šíleně neodolatelnou, okamžitě jsem se přihlásil a dokonce jsem nabídl i svá rychlá kola. O jakou věc, že se jedná? Výlet do Švýcarska.
    </BlogBox>

    {/if}
</div>

<style>
    .blogboxes {
        display: flex;
        flex-wrap: wrap;
        gap: 64px;
    }

    @media only screen and (max-width: 1450px) {
        .blogboxes {
            gap: 59px;
        }
    }
</style>