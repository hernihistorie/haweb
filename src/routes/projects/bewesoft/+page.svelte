<script lang="ts">
	import ProjectPage from "$lib/ProjectPage.svelte";
	import AssetBox from "$src/lib/AssetBox.svelte";
	import Heading from "$src/lib/Heading.svelte";
	import Key from "$src/lib/Key.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
	import { loadRHInventoryAssetData } from "$src/lib/rhinventory_api";
    import { projectBewesoft } from './project';

    let assets = loadRHInventoryAssetData({tagId: 26, page: 1, pageSize: 100}).then((value) => {
        return new Map(value.assets.map(asset => [asset.id, asset]));
    });
</script>

<ProjectPage project={projectBewesoft}>
    <PageLang cs />
    <p><strong>Název fondu</strong>: Jiří Bernášek (BeWeSoft)</p>
    <p><strong>Jména zpracovatelů</strong>: David Labský, Jiří Bernášek, Vojtěch Straka, Kryštof V. Novák</p>
    <p><strong>Rok dokončení</strong>: 2025</p>

    <hr>
    
    <p><img src="/photos/projects/bewesoft-thin.jpg" alt="Diskety a Atari XE"></p>

    <p><strong>Fond Jiřího Bernáška</strong> – dlouholetého majitele a programátora pro počítače Atari – obsahuje jeho archivní diskety s jeho programy a zdrojovými kódy. Jiří Bernášek k této kolekci vytvořil i tento doprovodný text, který následně upravil Rudolf Jan Suchý.</p>

    <p>Bernášek si své běžně používané diskety pro Atari jako mnoho dalších normálně čísloval, vedle toho si ale cca. od roku 1991 schovával i věci nepoužívané, různé útržky softwaru a dat k případnému pozdějšímu použití – odeslaná korespondence, zdrojáky, různé ukázkové či pro něj těžko použitelné programy odjinud – na to měl druhou řadu disket, značených pro odlišení písmeny. Pro digitalizaci a zveřejnění byly vybrány jen diskety se zdrojáky, které asi jediné nesou zajímavá data jinde se nevyskytující. Mezi těmito disketami jsou ovšem přítomny i jiné věci, které Jiří Bernášek ve stejné době archivoval. Sem by patřila i položka "Archív AH" (kterou vzhledem k datové velikosti reálně tvoří celá krabička disket), což jsou zdrojáky Bernáškových největších projektů <strong>BW-DOS</strong> a <strong>B-TAPE</strong> – tyto programy naleznete k dispozici <a href="https://github.com/HolgerJanz/BW-DOS">na GitHubu</a> (na programech se mimojiné stále pracuje).</p>
    
    <p>Diskety jsou ve formátu 360kB se souborovým systémem SpartaDOS, který Jiří Bernášek používal se svou disketovou jednotkou XF551 než přešel na svůj vlastní kompatibilní BW-DOS. Datum a čas vzniku souborů v adresářích jsou tedy většinou autentické, mimo pár případů kdy autor zřejmě zapomněl hodiny při startu systému nastavit (data starší než 1990), nebo kde jde o datum dodatečné reorganizace (komprimace) dat. Některé věci jsou zabalené v archivech typu <code>.ARC</code> – je k nim přiložen i Atárkový program <code>UNARC24</code> pro rozbalení. Obsah archivů nicméně datum a čas neuchovává, údaj "28-11-95" je jen default nenastavených hodin v použitém systému.</p>

    <div class="img2">
        <img src="/files/bewesoft/DOS.png" alt="BW-DOS" />
        <img src="/files/bewesoft/DOS-MENU.png" alt="BW-DOS MENU" />
    </div>

    <p>Projekty se zpravidla skládají z různých komponent (kód, grafika, fonty, hudba, texty, mapa...), které byly tvořeny jednotlivě různými nástroji. Většinou existoval vždy nějaký "zdrojový" soubor (např. u hry Midnight je soubor <code>PANAK.PIC</code>, tedy obrázek s rozkreslenou animací postavy), pak nějaký narychlo v Atari Basicu slepený program (zde <code>PANAK.BAS</code>), který to konvertuje do formátu navrženého pro konkrétní projekt (zde <code>PANAK.DAT</code> – binární datový blok, který se pak linkuje do spustitelné hry. Někde byly i soubory s příponou <code>.SGM</code> – segmenty ve formátu spustitelného souboru, tedy vlastně totéž jako <code>.COM</code>, <code>.OBJ</code>, nebo dnes <code>.XEX</code>, ale obsahují jen jednotlivý fragment). Většina dalších komponent funguje obdobně, jen třeba pro mapu hry je v Basicu jednoúčelový editor. V uvedeném příkladu lze ještě narazit na <code>PANAK.TST</code> – Basicový program pro testovací zobrazení mimo samotnou hru. Pro celý projekt pak zpravidla existoval dávkový soubor <code>TEST.BAT</code>, pomocí kterého byl během tvorby program opakovaně spouštěn k vyzkoušení po úpravách jednotlivých komponent (jde vlastně o jakýsi provizorní linkovací skript, který přímo na příslušná místa paměti načítá komponenty potřebné ke spuštění programu). Teprve když bylo hotovo, projekt se linkoval dohromady, zpočátku ručně, později Bernáškovým nástrojem <em>Super Packer</em>, který data uměl zároveň i komprimovat (na Atari bylo rozbalení zpravidla rychlejší, než čtení z diskety, chránila se tím integrita kódu, a ještě se šetřilo místo). Všechny zmíněné složky jsou zpravidla v autorově archivu zachovány pro případné pozdější změny a obvykle je přiložen i hotový spustitelný soubor (<code>.COM</code>), tak jak byl vypuštěn mezi lidi. Součástí projektů jsou i ručně psané poznámky na papírech, které zpravidla zahrnují ve více, nebo častěji méně čitelné podobě mapu obsazení paměti, strukturu datových souborů, u her mapu samotné hry, a různé další čmáranice (i tyto materiály většinou fyzicky existují, ale ještě nedošlo ke jejich katalogizaci a digitalizaci).</p>

    <p>Z použitých nástrojů dominuje především Assembler, v němž bylo napsané téměř vše. Jiří Bernášek používal zejména integrovaná vývojová prostředí. Zpočátku to byl <a href="https://atariwiki.org/wiki/Wiki.jsp?page=Atmas%20II">ATMAS II.</a>, který používal zdrojáky s příponou <code>.SRC</code>. Protože měl ale ATMAS velmi omezenou kapacitu pro zdrojový text (a neuměl include), jsou větší projekty dělené na více částí – v názvech souborů tak najdeme jednotlivé části označené písmeny (A, B, C atd.) které se pak spojovaly ručně (buď byly provázané přes nějakou tabulku skoků, nebo se při úpravách ručně přepisovaly relevantní adresy z jedné části do druhé). Názvy souborů dále obsahují čísla – tam jde o pořadové číslo revize každého souboru. Při každém uložení (kompilaci a otestování) daného souboru bylo číslo navýšeno, aby byla zachována aspoň krátká historie změn a nebyla riskována ztráta dat při přepisování nové verze na disku přímo přes minulou. Staré verze však autor vzhledem k omezenému místu na disketě poměrně brzy odmazával, takže dnes již dochované nejsou – čísla však svědčí o délce vývoje (počtu kdysi existujících verzí souboru). V pozdější době Bernášek používal prostředí <a href="https://atariwiki.org/wiki/Wiki.jsp?page=MAE%20Assembler">MAE</a> (takové zdrojové soubory jsou uloženy s příponou <code>.MAE</code>), a okrajově se samozřejmě vyskytl i Atari Basic (<code>.BAS</code>)</p>

    <p>Grafika byla kreslená postupně v řadě programů, zpočátku to byl <a href="https://www.atarimania.com/utility-atari-400-800-xl-xe-micro-illustrator_30240.html">Koala Micro Illustrator</a>, pak <a href="https://www.atarimania.com/utility-atari-400-800-xl-xe-rambrandt_s10936.html">RAMbrandt</a> atd. Pro hi-res monochromní grafiku autor vždy používal německý <a href="https://www.atarimania.com/pgesoft.awp?version=12516">Design Master</a> a v pozdější době začal pracovat i s prokládanou grafikou (na kterou používal asi jednoduchý editor od polských <a href="https://demozoo.org/groups/2260/">Taquart</a>). Někdy se také grafika konvertovala do fontů – tento nástroj asi dělal ještě <a href="https://demozoo.org/sceners/35384/">Magnus/WFMH</a> (též Polsko). Nejstarší hudba byla tvořenoa v programu <a href="https://gury.atari8.info/detail.php?id=7590&src=1&c=ch=s">The Soundmachine</a>, pak Bernášek zkoušel svůj vlastní (značně nehotový) editor <em>BEWEMON</em>, následoval německý <a href="https://gury.atari8.info/detail.php?id=6481&src=1&c=catId=8">Black Magic Composer</a>, legendární polský <a href="https://www.atarimania.com/utility-atari-400-800-xl-xe-chaos-music-composer_37606.html">Chaos Music Composer</a>, a nakonec rovněž polský <a href="https://jaskier.atari8.info/">MPT</a>.</p>

    <p>Následuje popis obsahu jednotlivých disket včetně výpisu souborů.</p>

    <Heading h=3 id="archiv-a">ARCHÍV A "BEWESLOVO, KARTA"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6947'))} />
    <p><strong>BEWESLOVO</strong> je Bernáškův textový editor, v němž psal prakticky všechny texty. Má definovatelné rozložení klávesnice, umí různé ovladače tiskáren (jsou tam tiskárny EPSON, nicméně existovaly i ovladače pro tuzemské Gamacentrum 01 a BT 100), kódování češtiny je vlastní, soubory mají příponu <code>.TXT</code>, a dá se na Atari konvertovat Bernáškovým programem <strong>BTC</strong>. Program vychází z chování editoru v prostředí ATMAS II. Předcházely mu nedochované verze BEWESLOVO 1.0 (prakticky nepoužitelné, v BASICu) a BEWESLOVO 2.0 (velmi primitivní, ale již v assembleru).</p>

    <p><strong>FACE</strong> (neboli <em>Karta</em>) byl hardwarový projekt postavený kolem jedné paměti EPROM, kterou autor odněkud dostal (cca. 1990-1991). Byla to PBI periferie do sběrnice Atari řady XL, která se chovala jako asi 14kB harddisk pro rychlý boot DOSu a urychlovač komunikace s disktovkou XF551. Tento modul dodnes existuje, ale kvůli stabilitě sběrnice a pozdějšímu příchodu jiných doplňků nebyl nikdy moc používán.</p>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARCHIV_A
Directory: MAIN    

SLOVO        &lt;DIR&gt;  23-02-92 12:39 
FACE     ARC  24502 15-02-97 00:31 
    317 FREE SECTORS

Volume:    ARCHIV_A
Directory: SLOVO   

INTERN31     &lt;DIR&gt;  23-02-92 12:40 
MODULY       &lt;DIR&gt;  21-06-92 21:45 
SLOVO30      &lt;DIR&gt;  23-02-92 12:39 
SLOVO    COM   9092 20-02-92 23:45 
SLOVO    KBD    256 20-02-92 23:54 
STANDARD KBD    256 15-04-92 20:58 
AMATER   KBD    768 15-04-92 20:58 
STROJ    KBD    768 15-04-92 20:58 
ASCII    PRT   1334 21-06-92 18:55 
EPSDRAFT PRT   3076 21-06-92 18:04 
EPSNLQ   PRT   6825 07-12-92 19:56 
BT100    PRT   2192 09-03-90 13:02 
GAMA_RUL PRT   2438 09-03-90 13:02 
GAMA_STR PRT   2433 09-03-90 13:02 
KOD      BAS  13031 15-04-92 20:58 
DOATASCI KOD    334 15-04-92 20:59 
ZATASCII KOD   1672 15-04-92 20:59 
DOATMAS  KOD    360 15-04-92 20:59 
ZATMAS   KOD     25 15-04-92 20:59 
DOCAPKA  KOD    372 24-05-92 11:33 
ZCAPKA   KOD   1536 02-09-92 16:15 
STANDARD KLV    944 15-04-92 20:58 
AMATER   KLV   2576 15-04-92 20:58 
STROJ    KLV   2584 15-04-92 20:58 
PRIR1    TXT  13874 08-12-92 15:25 
PRIR2    TXT  17183 09-12-92 14:46 
PRIR3    TXT  16948 22-06-92 17:02 
PRIR4    TXT   6036 08-12-92 15:07 
KODY         &lt;DIR&gt;  04-09-99 16:07 
    317 FREE SECTORS

Volume:    ARCHIV_A
Directory: INTERN31

LINK     BAT    287 21-02-92 15:12 
SLOVON1  SGM    126 20-02-92 23:45 
SLOVON2  SGM      8 20-02-92 23:45 
SLOVON3  SGM   1798 21-02-92 15:21 
SLOVON4A SGM    900 09-12-92 14:30 
SLOVON4B SGM    656 09-12-92 14:30 
SLOVON6  SGM   2215 09-12-92 14:37 
SLOVON7  SGM      8 20-02-92 23:40 
SLOVON8  SGM   2494 09-12-92 14:33 
SLOVON10 SGM    887 09-12-92 14:35 
SLOVON1  SRC    512 20-02-92 23:44 
SLOVON4  SRC   8320 09-12-92 14:29 
SLOVON6  SRC   8576 09-12-92 14:36 
SLOVON8  SRC  13952 09-12-92 14:31 
SLOVON10 SRC   5504 09-12-92 14:34 
    317 FREE SECTORS

Volume:    ARCHIV_A
Directory: MODULY  

ASCII        &lt;DIR&gt;  08-12-92 14:48 
EPSDR        &lt;DIR&gt;  08-12-92 14:49 
EPSNLQ       &lt;DIR&gt;  08-12-92 14:49 
    317 FREE SECTORS

Volume:    ARCHIV_A
Directory: ASCII   

ASCII    SRC   7040 21-06-92 18:53 
    317 FREE SECTORS

Volume:    ARCHIV_A
Directory: EPSDR   

DRAFT    BAS   2468 22-06-92 17:12 
EPSD_FNT SGM   1578 21-06-92 18:04 
EPSDR    SRC   8064 21-06-92 19:08 
    317 FREE SECTORS

Volume:    ARCHIV_A
Directory: EPSNLQ  

NLQ      BAS   2584 07-12-92 18:21 
NLQ      PIC   7680 07-12-92 19:35 
NLQ1     SGM   5094 07-12-92 19:56 
NLQ4     SGM     12 08-12-92 14:15 
NLQ      SRC   9216 08-12-92 14:40 
NLQ      TST   2489 07-12-92 18:21 
    317 FREE SECTORS

Volume:    ARCHIV_A
Directory: SLOVO30 

SLOVO30  ARC  31657 15-02-97 00:31 
    317 FREE SECTORS
        </pre>
    </details>
    
    <Heading h=3 id="archiv-g">ARCHÍV G "RŮZNÉ"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6962'))} />

    <p>Na této disketě je směs z většiny cizího softwaru, který si Jiří Bernášek do archivu odložil. Relevantní jsou v podstatě jen dvě položky:</p>

    <p><strong>BEWEMON</strong> je autorův pokus o hudební editor – ačkoliv funguje, tak nebyl nikdy dokončený. Byl vytvořen v Basicu na základě zpětné analýzy jiné Atari hudby. Byly zde přepsané skladby z dětského klavírního alba od P. I. Čajkovského, použité pak v programu 8 Players Demo.</p>

    <p><strong>ZOLIKY</strong> jsou jednoduchá databáze na výsledky karetní hry žolíky, které byly oblíbené při rodinných večerech autora na chalupě. Mělo to i jakýsi grafický výstup.</p>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    Archiv:G
Directory: MAIN    

CUBE     ARC  53054 10-05-95 19:09 
UNARC24  COM  10276 14-05-93 18:03 
DEMO     ARC   2404 15-05-93 12:27 
FONTEDIT ARC  11099 10-05-95 19:12 
PRAWDA   ARC   8147 10-05-95 19:12 
GM       COM  10962 10-05-95 19:12 
KOLORER  COM   7218 10-05-95 19:13 
SHOW20   ARC  60361 09-10-95 17:40 
MO2MAN   ARC  28267 15-05-93 12:40 
XDIR     SYS   1810 06-09-95 18:33 
MPT      ARC  63180 13-09-95 17:54 
GRVIEW   COM   4168 13-09-95 18:07 
BEWEMON  ARC  45093 15-05-93 12:54 
OMNICOM  ARC  32182 15-05-93 13:05 
ZOLIKY   ARC  13528 15-05-93 13:02 
    31 FREE SECTORS

Directory: BEWEMON   (obsah archívu)

ABBUC1         2497 28-11-95 22:14 
ABBUC2         3679 28-11-95 22:14 
AKORDY          766 28-11-95 22:14 
CAJ1           1069 28-11-95 22:14 
CAJ10          2152 28-11-95 22:14 
CAJ11           921 28-11-95 22:14 
CAJ13           825 28-11-95 22:14 
CAJ14          1220 28-11-95 22:14 
CAJ15          1306 28-11-95 22:14 
CAJ16           841 28-11-95 22:14 
CAJ17           887 28-11-95 22:14 
CAJ18          2028 28-11-95 22:14 
CAJ19          1102 28-11-95 22:14 
CAJ2           1379 28-11-95 22:14 
CAJ20          1727 28-11-95 22:14 
CAJ21          1432 28-11-95 22:14 
CAJ24          1015 28-11-95 22:14 
CAJ3           1379 28-11-95 22:14 
CAJ4           1284 28-11-95 22:14 
CAJ5           1109 28-11-95 22:14 
CAJ6           1428 28-11-95 22:14 
CAJ7            941 28-11-95 22:14 
CAJ8           1792 28-11-95 22:14 
CAJ8N          1792 28-11-95 22:14 
CAJ9           1184 28-11-95 22:14 
CAJBASE         144 28-11-95 22:14 
DOPROVO         414 28-11-95 22:14 
MEL            1063 28-11-95 22:14 
MYMY           2061 28-11-95 22:14 
TONY            381 28-11-95 22:14 
BEWEMON  BAS   9906 28-11-95 22:14 
BEWEMON  MC    4269 28-11-95 22:14 
TEST     MON    596 28-11-95 22:14 
PGMA     SRC  13440 28-11-95 22:14 
PLAY     SRC   8448 28-11-95 22:14 
BEWEMON  TXT   9357 28-11-95 22:14 
BEWEMON2 TXT   6294 28-11-95 22:14 

Directory: ZOLIKY     (obsah archívu)

LESNE1   90    1014 28-11-95 22:14 
LESNE2   90     210 28-11-95 22:14 
LESNE3   90      39 28-11-95 22:14 
LESNE4   90    1368 28-11-95 22:14 
LESNE5   90    1302 28-11-95 22:14 
LESNE6   90     216 28-11-95 22:14 
LESNE1   91    1002 28-11-95 22:14 
LESNE2   91     336 28-11-95 22:14 
LESNE3   91     245 28-11-95 22:14 
LESNE4   91      55 28-11-95 22:14 
ZOLIKY   BAS  10149 28-11-95 22:14 
        </pre>
    </details>

    <Heading h=3 id="archiv-k">ARCHÍV K "MOJE PROGRAMY - ZDROJÁKY, STR.MOUNT. DEMO, BSCROLL, CODIS, T3d, GAMAC.01, MENU PRO ABBUC"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6961'))} />
    <p>Na této disketě lze nalézt zdrojáky ke <strong>Strange Mountains Demo</strong> a hře <strong>Tetris 3D</strong>. <strong>BSCROLL</strong> je jednoduchá ukázka velkého scrolleru, odvozená ze Strange Mountains Demo pro autorova známého z Německa, který se chtěl tyto věci naučit – v podstatě tedy výukový materiál. <strong>GAMA</strong> je ovladač pro tiskárnu Gamacentrum 01.</p>

    <p><strong>ABBMENU</strong> je menu pro disketový magazín německého klubu <em>ABBUC e.V.</em> Dle Bernáška se jedná o první pokus na dané téma, který se prakticky nepoužil (snad jen v jednom čísle doplňkové řady "Sondermagazínů"). Nezaměnit s druhým projektem z roku 1993.</p>

    <p><strong>CODIS</strong> byl neveřejným projektem. Jde o jednoduchý titulkovací systém pro infokanál kabelové televize. Obsahuje i editor zobrazovaných textů. Data k tomuto projektu jsou také na disketě <em>ARCHÍV W</em>.</p>


    <div class="img1">
        <img src="/files/bewesoft/CODIS.png" alt="CODIS"/>
    </div>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARCHIV_K
Directory: MAIN    

STRMOUNT     &lt;DIR&gt;  09-06-92 16:34 
BSCROLL      &lt;DIR&gt;  15-06-92 14:17 
T3D          &lt;DIR&gt;  21-06-92 12:28 
GAMA         &lt;DIR&gt;  19-07-92 19:29 
ABBMENU      &lt;DIR&gt;  07-10-85 15:47 
CODIS        &lt;DIR&gt;  14-08-92 18:37 
    20 FREE SECTORS

Volume:    ARCHIV_K
Directory: STRMOUNT

BWS      DAT    400 05-06-92 22:08 
HORTXT   DAT   2885 06-06-92 11:30 
HORY     DAT   2368 04-06-92 18:45 
SINTXT   DAT   1314 06-06-92 11:47 
STRANGE  DAT   5120 05-06-92 21:04 
ZNAKY    DAT   5042 05-06-92 11:59 
PISMENA  PAK   2552 02-06-92 16:53 
HUDBA    SGM   5626 03-06-92 14:56 
COPY     SRC    768 06-06-92 14:19 
DEMO70   SRC  11648 06-06-92 12:22 
DEPACK   SRC   4608 06-06-92 14:21 
LD       SRC    640 06-06-92 14:32 
HORY     PIC   7684 04-06-92 18:40 
HUDBA    MSC   1880 03-06-92 14:56 
PISMENA  PIC   7684 02-06-92 15:39 
STRANGE  PIC   7684 05-06-92 21:03 
STRMOUNT COM  18416 06-06-92 14:32 
    20 FREE SECTORS

Volume:    ARCHIV_K
Directory: BSCROLL 

CONVERT  BAS   1087 10-06-92 17:56 
BSCROLL  COM   4675 09-06-92 22:12 
BSCROLL  DAT   3840 09-06-92 19:31 
CHRS     PIC   7684 09-06-92 19:27 
BSCROLL  SRC   6912 09-06-92 22:09 
    20 FREE SECTORS

Volume:    ARCHIV_K
Directory: T3D     

DEF      DAT   5885 02-12-91 20:18 
DEFINE   DAT    352 31-12-91 17:13 
PIC      DAT   2626 30-11-91 16:29 
SADA     DAT   1024 31-12-91 13:46 
DRAW     SRC   8192 30-12-91 15:31 
GAMEA    SRC   5248 01-02-92 15:10 
GAMEB    SRC  17280 01-02-92 21:58 
KRE      SRC   9472 08-12-91 15:37 
    20 FREE SECTORS

Volume:    ARCHIV_K
Directory: GAMA    

GAMA     COM   1105 05-02-87 08:02 
GAMA1    SGM    695 05-02-87 08:02 
GAMA2    SGM    151 05-02-87 08:02 
GAMA3    SGM    251 05-02-87 08:02 
GAMA4    SGM      8 05-02-87 08:02 
GAMA1    SRC   4608 19-07-92 19:26 
GAMA3    SRC   1024 19-07-92 19:27 
    20 FREE SECTORS

Volume:    ARCHIV_K
Directory: ABBMENU 

M1             2304 10-11-91 19:14 
M2               43 10-11-91 19:14 
BINIT    COM   1878 10-11-91 19:14 
AUTORUN  SYS    450 10-11-91 19:15 
    20 FREE SECTORS

Volume:    ARCHIV_K
Directory: CODIS   

INTERN       &lt;DIR&gt;  14-08-92 18:37 
PICS         &lt;DIR&gt;  14-08-92 18:37 
ED       COM  10526 12-07-92 19:10 
SHOW     COM   8894 13-07-92 18:47 
CODIS    TXT  21028 12-08-92 20:00 
CODIS2   PIC   7680 10-08-92 16:00 
CAST1    TXT   1920 14-07-92 15:31 
CAST2    TXT   1160 14-07-92 15:31 
CAST3    TXT   8040 14-07-92 15:49 
CAST4    TXT   1040 14-07-92 15:34 
    20 FREE SECTORS

Volume:    ARCHIV_K
Directory: INTERN  

EDLINK   BAT    103 12-07-92 19:12 
SLINK    BAT    131 13-07-92 18:42 
CODIS    SGM    941 13-07-92 18:38 
EDA      SGM   2812 12-07-92 19:10 
EDB      SGM   2950 10-08-92 16:07 
FONTY    SGM   3874 12-07-92 19:11 
HELP     SGM    884 12-07-92 19:11 
SHOW     SGM   4051 12-08-92 21:13 
SHOWRUN  SGM      6 13-07-92 18:48 
ZATEMNI  SGM     22 13-07-92 18:47 
EDA7     SRC  12416 12-07-92 19:09 
EDB34    SRC  17280 10-08-92 16:05 
SHOW60   SRC  17280 12-08-92 21:12 
HELP     BAS   2119 12-07-92 18:18 
    20 FREE SECTORS

Volume:    ARCHIV_K
Directory: PICS    

CODIS    CPR    937 09-07-92 17:24 
CODIS    PIC   7680 08-07-92 18:35 
MALE     BAS   2305 09-07-92 16:54 
VELKE    BAS   2360 09-07-92 16:56 
FONTY    CPR   3870 09-07-92 17:12 
MALE     PIC   7680 09-07-92 16:45 
VELKE    PIC   7680 09-07-92 17:05 
    20 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-m">ARCHÍV M "LÓGR, ATMAS TOOLS, RŮZNÉ UTILITY- BASIC, PRINTER UTILITY, MOJE STARÉ DROBNÉ ZDROJÁKY"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6960'))} />
    <p>Disketa s drobnějšími, zejména cizími, programy. Archív <em>MYOLDSRC</em> obsahuje autorovy drobnější programové rutiny (nejspíš grafické rutiny), různé varianty přehrávání zvuku či práce s pamětí.</p>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARC.M   
Directory: MAIN    

OLDSRC       &lt;DIR&gt;  15-02-97 12:27 
ATMTOOLS ARC  38525 15-02-97 12:23 
BASICUTL ARC  43771 15-02-97 12:24 
PRNUTL   ARC  39381 15-02-97 12:25 
   759 FREE SECTORS

Volume:    ARC.M   
Directory: OLDSRC  

MYOLDSRC ARC  47928 15-02-97 12:14 
   759 FREE SECTORS
     
Directory: MYOLDSRC    (obsah archívu)   

GREXAMPL COM   3316 28-11-95 22:14 
ARITMET  SRC   4864 28-11-95 22:14 
CARTBOOT SRC   1664 28-11-95 22:14 
CIRCLE   SRC   4608 28-11-95 22:14 
CIRCLEN  SRC   3200 28-11-95 22:14 
CMCPLAY  SRC   8576 28-11-95 22:14 
DEPACK1  SRC   5632 28-11-95 22:14 
DRAWFAST SRC   4864 28-11-95 22:14 
DRAWN    SRC  12672 28-11-95 22:14 
DRAWOBYC SRC   3200 28-11-95 22:14 
MAINN    SRC   4608 28-11-95 22:14 
MEMSRCH  SRC   1536 28-11-95 22:14 
PACK1    SRC  14208 28-11-95 22:14 
QMEGCOPY SRC    384 28-11-95 22:14 
REPLAY12 SRC   8704 28-11-95 22:14 
SEC2FILE SRC   1920 28-11-95 22:14 
SIO      SRC   4992 28-11-95 22:14 
T143     SRC   3968 28-11-95 22:14 
        </pre>
    </details>

    <Heading h=3 id="archiv-p">ARCHÍV P "NEDOKONČENÉ..., OLD STORY, STAVBA"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6959'))} />
    <p>Disketa obsahuje nikdy nedokončené projekty z období asi 1990-1991. Složka HUDBA je zřejmě přidaná později – jedná se o autorovy hudební pokusy s editory <em>Black Magic Composer</em> a (pravděpodobně) <em>SoundMonitor Professional</em>. Lze zde nalézt hudbu pro hry Golfer a původní nevydanou verzi Midnight, nedokončenou Stavbu, a řadu dalších drobných pokusů.</p>

    <p><strong>Old Story</strong> měla být dle autora hra s chozením po hradě, sbíráním a používáním předmětů kde se poměrně rozsáhlá grafika měla během hry číst z diskety. Fungovala již titulní obrazovka s hudbou podle Fukovy skladby <em>Master of Magic</em> a několika stránkami vyjíždějícími z vody (titul, přehled předmětů), existovala i většina grafiky místností, kreslená v editoru RAMbrandt s barvami vylepšenými přerušením. Když však došlo na pohyb panáčka v místnostech kreslených s perspektivou, časová náročnost si vynutila přerušení projektu. Data pak byla s jistým odstupem odložena jako <code>.ARC</code> archivy, tehdy ještě pomocí jakési utility (zřejmě z USA), která bohužel měla v sobě bug – soubory tedy sice existují, ale rozbalují se s chybami CRC. Hudba byla současně použita v programu BEWESOFT'S DEMO pro magazín <em>ABBUC</em>.</p>

    <p><strong>STAVBA</strong> měla být hra v podobě jakési pseudo-3D skládačky s bednami a vysokozdvižným vozíkem. Projekt dle autora nepokročil nijak daleko, nějaké části vznikající hry ale v archivu k nalezení jsou.</p>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARCHIV_P
Directory: MAIN    

OLDSTORY     &lt;DIR&gt;  07-10-85 15:46 
STAVBA       &lt;DIR&gt;  07-10-85 15:46 
HUDBA        &lt;DIR&gt;  14-02-97 22:42 
   112 FREE SECTORS

Volume:    ARCHIV_P
Directory: OLDSTORY

ZACGAME  ARC  20594 29-10-88 13:58 
HOT_DILY ARC  70362 10-11-91 12:35 
OSARCHIV ARC 121751 10-11-91 13:09 
OSPICSDM ARC   9599 10-11-91 13:42 
ROOMYEDT ARC  52749 10-11-91 12:15 
   112 FREE SECTORS
         
Directory: ZACGAME    (obsah archívu)

DEF      SGM   3558 28-11-95 22:14 
GAMEA    SGM   1595 28-11-95 22:14 
GAMEA2   SRC   9639 28-11-95 22:14 
GAMEA3   SRC   9669 28-11-95 22:14 
GAMEB10  SRC   8201 28-11-95 22:14 
GAMEB12  SRC   9930 28-11-95 22:14 
POZNAMKA TXT     47 28-11-95 22:14 
RADEK    SGM    646 28-11-95 22:14 
RUN2000  SGM      8 28-11-95 22:14 
VECI     SGM    353 28-11-95 22:14 
 62101 FREE SECTORS
          
Directory: HOT_DILY    (obsah archívu)

GEN      BAT     69 28-11-95 22:14 
GEN2     BAT     42 28-11-95 22:14 
STARTUP  BAT      6 28-11-95 22:14 
TST      BAT     29 28-11-95 22:14 
MODUL    COM   2356 28-11-95 22:14 
TST      COM     43 28-11-95 22:14 
CONGRAT  OS    9471 28-11-95 22:14 
ROOM01   OS    4927 28-11-95 22:14 
ROOM02   OS    5368 28-11-95 22:14 
ROOM03   OS    4539 28-11-95 22:14 
ROOM04   OS    3495 28-11-95 22:14 
ROOM05   OS    3045 28-11-95 22:14 
ROOM06   OS    4815 28-11-95 22:14 
ROOM07   OS    3110 28-11-95 22:14 
ROOM08   OS    1617 28-11-95 22:14 
ROOM09   OS    2616 28-11-95 22:14 
ROOM10   OS    2577 28-11-95 22:14 
ROOM11   OS    3731 28-11-95 22:14 
ROOM12   OS    3368 28-11-95 22:14 
ROOM13   OS    2104 28-11-95 22:14 
ROOM14   OS    2821 28-11-95 22:14 
ROOM15   OS    2192 28-11-95 22:14 
ROOM16   OS    1701 28-11-95 22:14 
TITLE    OS   14067 28-11-95 22:14 
TOPFIVE  OS      75 28-11-95 22:14 
TOPFIVE  PUV     75 28-11-95 22:14 
GEN      TST    733 28-11-95 22:14 
TYP      TST     15 28-11-95 22:14 
 62101 FREE SECTORS
          
Directory: OSARCHIV    (obsah archívu)

BIGEDIT  BAS   1313 28-11-95 22:14 
CSGM     BAS    626 28-11-95 22:14 
HVEZDY   BAS   1112 28-11-95 22:14 
KOMPR2   BAS   1125 28-11-95 22:14 
PMIN     BAS   1438 28-11-95 22:14 
PMIN2    BAS   1471 28-11-95 22:14 
PMOTOC   BAS   2017 28-11-95 22:14 
PMTEST   BAS   1373 28-11-95 22:14 
PMUD     BAS   2738 28-11-95 22:14 
RADEK    BAS    401 28-11-95 22:14 
RADEK2   BAS    196 28-11-95 22:14 
RADEKS   BAS    290 28-11-95 22:14 
SGMGEN   BAS    311 28-11-95 22:14 
TOPGEN   BAS    224 28-11-95 22:14 
VECI     BAS    579 28-11-95 22:14 
VYNOR    BAS    347 28-11-95 22:14 
VYNTST   BAS    414 28-11-95 22:14 
ZNAKYPIC BAS   1593 28-11-95 22:14 
ZNAKYSGM BAS    421 28-11-95 22:14 
TIT      BAT    198 28-11-95 22:14 
CONGRAT  COM   9461 28-11-95 22:14 
VYNOR    CPR   7195 28-11-95 22:14 
DEF      DAT   3552 28-11-95 22:14 
RADEK    DAT    640 28-11-95 22:14 
DOWN     DEF    192 28-11-95 22:14 
LEZ      DEF    192 28-11-95 22:14 
LEZLU    DEF    192 28-11-95 22:14 
LEZRU    DEF    192 28-11-95 22:14 
SCHLD    DEF    287 28-11-95 22:14 
SCHLU    DEF    288 28-11-95 22:14 
SCHRD    DEF    287 28-11-95 22:14 
SCHRU    DEF    288 28-11-95 22:14 
UP       DEF    192 28-11-95 22:14 
VLEVO    DEF    480 28-11-95 22:14 
VOJL     DEF    240 28-11-95 22:14 
VOJR     DEF    240 28-11-95 22:14 
VPRAVO   DEF    480 28-11-95 22:14 
ZNAKY    FNT   1024 28-11-95 22:14 
HH       MC    3306 28-11-95 22:14 
MOJE     MC    3348 28-11-95 22:14 
HH       MUS   1521 28-11-95 22:14 
MOJE     MUS   1520 28-11-95 22:14 
CONGRAT  OS    9471 28-11-95 22:14 
TITLE    OS   14067 28-11-95 22:14 
TOPFIVE  OS      75 28-11-95 22:14 
TRUHLA   PIC   3917 28-11-95 22:14 
VYNOR    PIC  10160 28-11-95 22:14 
GR1      SGM   8771 28-11-95 22:14 
GR2      SGM    690 28-11-95 22:14 
HH       SGM   3287 28-11-95 22:14 
HVEZDY   SGM    100 28-11-95 22:14 
MOD      SGM    654 28-11-95 22:14 
MODEX    SGM    329 28-11-95 22:14 
MOJE     SGM   3329 28-11-95 22:14 
RADEK    SGM    646 28-11-95 22:14 
TIT1     SGM   2433 28-11-95 22:14 
TIT2     SGM   1087 28-11-95 22:14 
TITR     SGM      8 28-11-95 22:14 
TRUHLA   SGM   5383 28-11-95 22:14 
VRM      SGM     87 28-11-95 22:14 
VYNOR    SGM   7201 28-11-95 22:14 
ZNAKY    SGM   1286 28-11-95 22:14 
GR2N6    SRC   3250 28-11-95 22:14 
MOD      SRC   3499 28-11-95 22:14 
MODEX    SRC   2024 28-11-95 22:14 
TITLED1  SRC  10734 28-11-95 22:14 
TITLED2  SRC   5727 28-11-95 22:14 
ZNAKY    TAB    256 28-11-95 22:14 
 62101 FREE SECTORS
           
Directory: OSPICSDM    (obsah archívu)

BIDA            464 28-11-95 22:14 
INV1           7600 28-11-95 22:14 
MREZA          7593 28-11-95 22:14 
RADEK1         7552 28-11-95 22:14 
SEC            7641 28-11-95 22:14 
ABBUC    PIC   7499 28-11-95 22:14 
BEWESOFT PIC   7588 28-11-95 22:14 
GAMEOVER PIC   7576 28-11-95 22:14 
OBJECTS  PIC   7600 28-11-95 22:14 
OS       PIC   7600 28-11-95 22:14 
RAMEC    PIC   7641 28-11-95 22:14 
VECI     PIC   7593 28-11-95 22:14 
 62101 FREE SECTORS
           
Directory: ROOMYEDT    (obsah archívu)

ROOM01   EDT  12339 28-11-95 22:14 
ROOM02   EDT  12347 28-11-95 22:14 
ROOM03   EDT  12342 28-11-95 22:14 
ROOM04   EDT  12320 28-11-95 22:14 
ROOM05   EDT  12298 28-11-95 22:14 
ROOM06   EDT  12342 28-11-95 22:14 
ROOM07   EDT  12337 28-11-95 22:14 
ROOM08   EDT  12324 28-11-95 22:14 
ROOM09   EDT  12314 28-11-95 22:14 
ROOM10   EDT  12342 28-11-95 22:14 
ROOM11   EDT  12338 28-11-95 22:14 
ROOM12   EDT  12342 28-11-95 22:14 
ROOM13   EDT  12341 28-11-95 22:14 
ROOM14   EDT  12264 28-11-95 22:14 
ROOM15   EDT  12309 28-11-95 22:14 
ROOM16   EDT  12264 28-11-95 22:14 
EDIT     TUR   7374 28-11-95 22:14 
 62101 FREE SECTORS

Volume:    ARCHIV_P
Directory: STAVBA  

PRACOVNI ARC  23374 29-10-88 13:58 
ARCHIV   ARC  13865 29-10-88 13:58 
   112 FREE SECTORS

Volume:    ARCHIV_P
Directory: HUDBA   

BMCDATA  ARC  12333 14-02-97 22:40 
SMONDATA ARC   6857 14-02-97 22:39 
   112 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-r">ARCHÍV R "MOJE PROGRAMY - ZDROJÁKY, INTRO ABBUC 30, GOLFER, SEASIDE DEMO"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6958'))} />

    <p>Na disketě je software <strong>INTRO30</strong>, což je titulní stránka k ABBUC magazínu č.30, dále zde jsou zdrojáky hry <strong>Golfer</strong> (kde došlo k drobné dodatečné úpravě rolujícího textu), a programu <strong>Seaside Demo</strong>. Zdrojový kód ve složce MEGA bude pravděpodobně dodatečně okomentovaná verze pro holandský disketový magazín Mega Magazine, s nímž autor tehdy spolupracoval.</p>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARCHIV_R
Directory: MAIN    

INTRO30      &lt;DIR&gt;  14-08-92 18:51 
GOLFER       &lt;DIR&gt;  24-01-93 00:09 
SEASIDE      &lt;DIR&gt;  31-01-93 21:54 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: INTRO30 

INTRO    COM   6673 29-06-92 22:15 
INTROMAG COM   6684 29-06-92 22:15 
ABBUC    DAT   3648 25-06-92 19:52 
SCROLL   DAT   1847 29-06-92 15:52 
TITT     DAT    576 29-06-92 20:17 
DEPACK   SRC   3968 29-06-92 17:55 
DEXOR    SRC    768 29-06-92 18:54 
INTRO153 SRC  11008 29-06-92 16:05 
TIT24    SRC   1664 29-06-92 22:14 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: GOLFER  

HRA          &lt;DIR&gt;  24-01-93 00:09 
HUDBA        &lt;DIR&gt;  24-01-93 00:09 
INTRO        &lt;DIR&gt;  24-01-93 00:09 
LOADING      &lt;DIR&gt;  24-01-93 00:09 
MAPA         &lt;DIR&gt;  24-01-93 00:09 
MENU         &lt;DIR&gt;  24-01-93 00:09 
NADPIS       &lt;DIR&gt;  24-01-93 00:09 
PACK         &lt;DIR&gt;  24-01-93 00:10 
PRVKY        &lt;DIR&gt;  24-01-93 00:10 
STARTER      &lt;DIR&gt;  24-01-93 00:10 
ZNAKY        &lt;DIR&gt;  24-01-93 00:10 
GOLFER   OLD  29082 23-01-93 23:07 
TEXT     OLD   2841 23-01-93 18:20 
GOLFER   COM  29082 12-02-93 15:20 
TEXT     TXT   2830 12-02-93 15:14 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: HRA     

HRA      SGM   3223 21-01-93 15:35 
HRA110   SRC  17024 21-01-93 15:34 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: HUDBA   

GOLF     MSC   1262 06-01-93 15:46 
HUDBA    SGM   4432 13-01-93 17:00 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: INTRO   

INTRO    SGM   2243 23-01-93 18:17 
INTRO50  SRC  10624 23-01-93 18:16 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: LOADING 

G0       SGM    655 23-01-93 23:07 
LD       SGM    699 23-01-93 23:00 
LDDE     SGM     76 23-01-93 23:05 
LD9      SRC   3328 23-01-93 22:59 
LDDE     SRC    384 23-01-93 23:05 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: MAPA    

EDIT     BAS   4535 18-01-93 16:41 
EDIT     BAT     36 10-01-93 12:59 
MAPA     DAT  20496 10-01-93 13:12 
EDIT     SGM    236 10-01-93 12:39 
EDIT     SRC   1152 10-01-93 12:38 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: MENU    

MENUA    SGM   1206 21-01-93 15:41 
MENUB    SGM    167 20-01-93 17:28 
MENUA20  SRC   5376 21-01-93 15:37 
MENUB10  SRC    384 20-01-93 17:28 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: NADPIS  

NADPIS   BAS    450 21-01-93 18:14 
NADPIS   DAT    976 21-01-93 18:14 
NADPIS   PIC   7684 21-01-93 18:05 
NADPIS   TST    460 21-01-93 18:17 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: PACK    

DEPACK   SGM    914 23-01-93 21:12 
DEPACK   SRC   5632 23-01-93 21:11 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: PRVKY   

PRVKY    BAS   2638 01-04-93 16:13 
PRVKY    DAT   2552 01-04-93 16:13 
PRVKY26  DTA    960 01-04-93 16:04 
PRVKY26  FNT   2048 01-04-93 16:04 
PRVKY26  PIC   7684 01-04-93 16:00 
PRVKY    TST   2604 01-04-93 16:20 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: STARTER 

CELE     BAT    106 23-01-93 18:21 
INTRO    BAT    126 23-01-93 17:30 
TEST     BAT     96 06-01-93 18:04 
STARTER  SGM     44 08-01-93 20:31 
TROOM    SGM    252 09-01-93 12:22 
STARTER  SRC    256 08-01-93 20:30 
TROOM    SRC   1024 09-01-93 12:22 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: ZNAKY   

ZNAKY    BAS   2564 22-01-93 17:09 
ZNAKY    DAT   1133 22-01-93 17:09 
ZNAKY    DTA    960 22-01-93 17:02 
ZNAKY    FNT   1024 22-01-93 17:02 
ZNAKY    PIC   7684 22-01-93 17:00 
ZNAKY    TST   2453 22-01-93 17:13 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: SEASIDE 

ZNAKY    BAS   3066 31-01-93 13:34 
SEASIDE  COM  15006 31-01-93 21:30 
ZNAKY    DAT   5392 31-01-93 13:56 
BWS      PIC   7684 30-01-93 21:31 
PIC      PIC   7680 30-01-93 18:15 
ZNAKYA   PIC   7680 31-01-93 12:25 
ZNAKYB   PIC   7680 31-01-93 12:25 
HUDBA    SGM   6105 31-01-93 15:00 
PGM      SGM   2242 31-01-93 16:43 
PGM61    SRC  10880 31-01-93 16:43 
ZNAKY    TST   2612 31-01-93 14:19 
TEXT     TXT   7133 31-01-93 20:52 
MEGA         &lt;DIR&gt;  06-02-93 19:22 
     6 FREE SECTORS

Volume:    ARCHIV_R
Directory: MEGA    

PROGRAM  SRC  17408 06-02-93 15:12 
     6 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-s">ARCHÍV S "MIDNIGHT"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6957'))} />
    <p>Na disketě je zdrojový kód hry <strong>Midnight</strong> (původně vydaná polskou firmou <a href="https://www.mobygames.com/company/1109/mirage-media-s-c/">Mirage Software</a>). Jsou zde dvě verze programu – hra měla původně jinou hudbu a před vydáním se modifikovala také animace pro chůzi po rovině (a možná i další drobnosti). Finální úpravy dělal v Polsku Pawel Kalinowski (Pirx / Our 5oft). Hra nakonec dostala jinou hudbu (jejímž autorem není pan Bernášek) a byla na rozdíl od originálu zabalena programem Magnus Cruncher.</p>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ZAM_ARCH
Directory: MAIN    

DRUHE        &lt;DIR&gt;  13-09-92 14:10 
HUDBA        &lt;DIR&gt;  13-09-92 14:10 
PANAK        &lt;DIR&gt;  13-09-92 14:10 
PRVNI        &lt;DIR&gt;  13-09-92 14:10 
SCORE        &lt;DIR&gt;  13-09-92 14:10 
ZAMEK        &lt;DIR&gt;  13-09-92 14:10 
MAPA         &lt;DIR&gt;  08-10-92 17:38 
TAB          &lt;DIR&gt;  10-10-92 11:22 
STARTER      &lt;DIR&gt;  10-10-92 11:33 
HRA          &lt;DIR&gt;  09-11-92 15:56 
TITUL        &lt;DIR&gt;  10-11-92 13:54 
GAOV         &lt;DIR&gt;  10-11-92 15:05 
TEXT         &lt;DIR&gt;  10-11-92 16:36 
TESTMENU     &lt;DIR&gt;  10-11-92 17:00 
MENU         &lt;DIR&gt;  10-11-92 18:20 
PACK         &lt;DIR&gt;  10-11-92 21:01 
LOADING      &lt;DIR&gt;  07-10-85 15:47 
MNORIG   COM  33918 12-11-92 16:00 
MODIF        &lt;DIR&gt;  30-11-92 15:07 
MIDNIGHT COM  31771 03-04-94 16:46 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: DRUHE   

DRUHE    BAS   2827 27-08-92 20:42 
DRUHE    DAT   3712 27-08-92 20:42 
DRUHE    PIC   7684 27-08-92 19:59 
DRUHE    TST   4750 27-08-92 21:16 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: HUDBA   

HUDBA    MSC   1511 12-09-92 11:41 
HUDBA    SGM   5590 11-10-92 13:07 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: PANAK   

PANAK    BAS   3121 13-09-92 13:05 
PANAK    DAT   5600 13-09-92 13:05 
PANAK    PIC   7684 13-09-92 12:25 
PANAK    TST    884 13-09-92 13:02 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: PRVNI   

PRVNI    BAS   1013 27-08-92 19:38 
PRVNI    DT1   4600 27-08-92 19:38 
PRVNI    DTA    960 27-08-92 19:27 
PRVNI    FNT   3072 27-08-92 19:27 
PRVNI    PIC   7684 27-08-92 19:22 
PRVNI    TS1   2549 27-08-92 19:49 
PRVNI    DAT   4728 27-08-92 19:38 
PRVNI    MOD   1210 14-09-92 20:56 
PRVNI    TST   2581 14-09-92 20:57 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: SCORE   

SCORE    BAS   2592 27-08-92 17:55 
SCORE    DAT    704 27-08-92 18:06 
SCORE    PIC   7684 27-08-92 18:05 
SCORE    TST    669 27-08-92 17:59 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: ZAMEK   

ZAMEK    DAT   3008 02-08-92 17:22 
ZAMEK    DTA    960 02-08-92 17:22 
ZAMEK    FNT   2048 02-08-92 17:22 
ZAMEK    PIC   7684 02-08-92 17:20 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: MAPA    

ED       BAS   5804 05-10-92 18:35 
ED       BAT     27 05-10-92 18:41 
MAPA     DAT   8136 06-10-92 13:05 
EDMC     SGM    260 05-10-92 17:48 
EDMC9    SRC   1536 05-10-92 17:48 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: TAB     

TAB      DAT    484 08-11-92 18:20 
TAB6     SRC   3840 08-11-92 18:20 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: STARTER 

STARTER  SGM     70 05-11-92 15:43 
STARTER  SRC    384 05-11-92 15:43 
TEST     BAT     59 11-10-92 11:40 
T2       BAT    280 07-11-92 18:43 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: HRA     

HRAA     SGM   2360 12-11-92 15:08 
HRAB     SGM   2173 09-11-92 15:44 
HRAC     SGM   3197 12-11-92 15:16 
HRAA300  SRC  14464 12-11-92 15:06 
HRAB150  SRC  14208 09-11-92 15:43 
HRAC300  SRC  17408 12-11-92 15:15 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: TITUL   

TITUL    DAT   4464 10-11-92 13:50 
TITUL    DTA    960 10-11-92 13:50 
TITUL    FNT   4096 10-11-92 13:50 
TITUL21  PIC   7684 10-11-92 13:47 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: GAOV    

GAOV     BAS    240 10-11-92 15:03 
GAOV     DAT    760 10-11-92 15:04 
GAOV     DT2    960 10-11-92 15:03 
GAOV     DTA    960 10-11-92 15:02 
GAOV     FNT   1024 10-11-92 15:02 
GAOV3    PIC   7684 10-11-92 15:00 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: TEXT    

TEXT     TXT   1266 10-11-92 16:35 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: TESTMENU

MTST     BAT    124 10-11-92 18:27 
MSTART   SGM    175 10-11-92 16:42 
MSTART   SRC    768 10-11-92 16:42 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: MENU    

MENU     SGM   1266 12-11-92 12:50 
MENU20   SRC   5632 12-11-92 12:50 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: PACK    

DEPACK   SGM    874 12-11-92 15:57 
START    SGM     69 12-11-92 15:38 
DEPACK6  SRC   5376 12-11-92 15:57 
START2   SRC    384 12-11-92 15:38 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: LOADING 

LOADING  SGM    149 12-11-92 13:55 
LOADING2 SRC    640 12-11-92 13:54 
    156 FREE SECTORS

Volume:    ZAM_ARCH
Directory: MODIF   

MTEST    BAT    159 30-11-92 14:45 
CHARS    DAT   1024 30-11-92 14:23 
MENU     SGM   1209 30-11-92 14:51 
MENU21   SRC   5376 30-11-92 14:51 
    156 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-t">ARCHÍV T "MOJE SRC - UNFINISHED DEMO (SRC), FUNMUSIC (SRC)"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6956'))} />
    <p><strong>Unfinished Demo</strong> je program inspirovaný původně zmínkou o Gandalfových ohňostrojích z Tolkienova <em>Pána Prstenů</em>. Program je nedokončený.</p>

    <p><strong>FunMusic</strong> je hudební hříčka ovládaná myší, která většinou dává s malým úsilím přijatelný hudební výsledek. Program používá optimalizované tabulky ladění (dle autorova vlastního výzkumu, publikovaného tehdy v magazínu Flop) a byla v něm vytvořena hudba pro ABBUC magazín 54.</p>

    <div class="img2">
        <img src="/files/bewesoft/FUNMUSIC.png" alt="FUNMUSIC" />
        <!-- <a href=""> -->
        <!-- <img src="/files/bewesoft/UNFINISH3.png" alt="UNFINISH" /> -->
        <video
            controls
            poster="/files/bewesoft/UNFINISH3.png"
        >
            <source src="/files/bewesoft/UNFINISH.webm" type="video/webm" />
            <source src="/files/bewesoft/UNFINISH.mp4" type="video/mp4" />
        </video>
    </div>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARC.T   
Directory: MAIN    

UNFINISH     &lt;DIR&gt;  06-12-97 14:53 
FUNMUSIC     &lt;DIR&gt;  11-03-98 22:31 
    12 FREE SECTORS

Volume:    ARC.T   
Directory: UNFINISH

GFXATST  ARC   8344 06-12-97 14:41 
OHEDIT   ARC  47313 06-12-97 14:22 
PACK     COM  33598 06-12-97 12:15 
UNFINISH COM  33779 06-12-97 13:48 
DEDEK    DAT   7200 16-11-97 15:17 
OHTAB    DAT  23152 24-11-97 18:49 
PODL     DAT   3216 15-11-97 17:30 
M22      MPT   3597 05-12-97 19:06 
INITI    SGM    175 06-12-97 13:54 
KOA      SGM   3005 05-12-97 18:45 
KOB      SGM   1603 04-12-97 21:27 
UNFPLR   SGM    912 05-12-97 19:04 
INITI5   SRC   1152 06-12-97 13:54 
KOA39    SRC  13184 05-12-97 18:44 
KOB37    SRC   9088 04-12-97 20:57 
UNFPLR2  SRC   6528 05-12-97 19:03 
    12 FREE SECTORS

Volume:    ARC.T   
Directory: FUNMUSIC

PGM          &lt;DIR&gt;  11-03-98 22:32 
TABS         &lt;DIR&gt;  11-03-98 22:32 
CHARS        &lt;DIR&gt;  11-03-98 22:32 
DOCS         &lt;DIR&gt;  11-03-98 22:32 
FUNMUSIC COM  12906 09-03-98 19:59 
FUNMUSIC DOC  16108 11-03-98 22:02 
FUNMUSCZ CAP  14426 11-03-98 22:14 
    12 FREE SECTORS

Volume:    ARC.T   
Directory: PGM     

TEST     BAT     82 06-03-98 21:17 
FMA      SGM   2660 09-03-98 18:53 
FMB      SGM   2501 09-03-98 18:57 
FMC      SGM   2010 09-03-98 19:02 
FMD      SGM   1501 09-03-98 18:59 
FMA20    SRC  14336 09-03-98 18:52 
FMB53    SRC  14592 09-03-98 18:56 
FMC34    SRC  12800 09-03-98 19:00 
FMD15    SRC   7936 09-03-98 18:58 
PLTEST   SRC    896 07-03-98 14:41 
PLTEST   SGM    170 07-03-98 14:41 
    12 FREE SECTORS

Volume:    ARC.T   
Directory: TABS    

TABS     ARC   3021 11-03-98 22:45 
TABS10   SRC   7040 09-03-98 19:47 
TABS     SGM   1916 09-03-98 19:47 
    12 FREE SECTORS

Volume:    ARC.T   
Directory: CHARS   

CHARS    ARC   2101 11-03-98 22:51 
CHARS    DAT   2336 27-02-98 21:19 
    12 FREE SECTORS

Volume:    ARC.T   
Directory: DOCS    

FM14     TXT  16108 10-03-98 19:00 
FMC7     TXT  14426 11-03-98 21:28 
    12 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-w">ARCHÍV W "MOJE PROGRAMY - ZDROJÁKY, VECTOR SCROLLER, CODIS, CHEAT LOADERY, STRANGE MOUNTAINS II."</Heading>
    <AssetBox data={assets.then(assets => assets.get('6955'))} />

    <p><strong>Vector Scroller</strong> je ukázka rychlého vykreslování čar a vykreslování různě zakřiveného textu kresleného vektorově v reálném čase. Rutinu Bernášek vyvíjel ve spolupráci s jedním polským ataristou (Konop / Shadows). Autorem hudby je Thorsten Karwoth (je to ukázka přiložená k jeho editoru SoundMonitor Professional). Opět je přítomna i jakási modifikace určená zřejmě pro Mega Magazine.</p>

    <p><strong>CODIS</strong> je již zmíněný titulkovací program pro infokanál kabelové televize (viz. disketa ARCHÍV K), data jsou zde zřejmě duplicitní – jde nejspíš o záložní kopii aspoň toho nejdůležitějšího pro případ problému s disketou.</p>
    
    <p><strong>STRANGE2</strong> je <strong>Strange Mountains Demo II</strong>, malý prográmek s animovanými fonty.</p>
    
    <p><strong>CHEATLD</strong> byly loadery pro crackování komerčních her. To se tehdy dělalo běžně. Jako mnozí další i Jiří Bernášek udělal pár desítek cracků, pod kterými se často podepisoval pomocí smajlíka ":-)". V tomto případě se jedná o dvojici textovek <em>The Pawn</em> a <em>Guild of Thieves</em>, které používají dosti sofistikovaný pseudokód s virtuální pamětí a komprimací obsahu, takže není snadné se do nich nějak vlámat. Proto zde vznikly speciální loadery, které umí hru z kopie originální diskety spustit s potřebnými úpravami.</p>

    <div class="img2">
        <img src="/files/bewesoft/STRANGE2.png" alt="STRANGE" />
        <video
            controls
            poster="/files/bewesoft/strange2_2.png"
        >
            <source src="/files/bewesoft/strange2.mp4" type="video/mp4" />
        </video>
    </div>

    <div class="img2">
        <img src="/files/bewesoft/CHEATLD.png" alt="CHEATLD" />
        <img src="/files/bewesoft/CHEATLD2.png" alt="CHEATLD" />
    </div>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARCHIV_W
Directory: MAIN    

VECTSCRL     &lt;DIR&gt;  15-02-93 21:03 
CODIS        &lt;DIR&gt;  07-04-93 18:33 
CHEATLD      &lt;DIR&gt;  07-10-85 15:48 
STRANGE2     &lt;DIR&gt;  16-08-93 19:46 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: VECTSCRL

BWS      BAS    279 15-02-93 17:16 
HEXA     BAS   2396 15-02-93 18:27 
TEST     BAT    111 15-02-93 17:21 
VECTSCRL COM   7029 15-02-93 20:40 
BWS      DAT    768 15-02-93 17:16 
BWS      PIC   3924 15-02-93 17:15 
DEP      SGM    565 15-02-93 20:31 
PGM      SGM   2855 15-02-93 18:44 
TABS     SGM   2310 14-02-93 15:51 
HUDBA    SNG   1989 14-02-93 17:35 
DEMO25   SRC  15872 15-02-93 18:43 
DEPAK    SRC   4352 15-02-93 20:31 
TABS5    SRC   8320 14-02-93 15:51 
TEXT     TXT   2035 15-02-93 18:42 
MEGAZINE     &lt;DIR&gt;  20-04-93 16:51 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: MEGAZINE

BEWESOFT OBJ    774 20-04-93 16:50 
MUSIC    OBJ   3581 20-04-93 16:50 
TABLES   OBJ   2310 20-04-93 16:50 
TEXT     OBJ   2041 20-04-93 16:50 
DEMO     SRC  11392 20-04-93 16:50 
README   TXT    897 20-04-93 16:50 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: CODIS   

ED       COM  10526 12-07-92 19:10 
SHOW     COM   8894 13-07-92 18:47 
CODIS    SGM    941 13-07-92 18:38 
FONTY    SGM   3874 12-07-92 19:11 
HELP     SGM    884 12-07-92 19:11 
SHOWRUN  SGM      6 13-07-92 18:48 
ZATEMNI  SGM     22 13-07-92 18:47 
EDA7     SRC  12416 12-07-92 19:09 
EDB34    SRC  17280 10-08-92 16:05 
SHOW60   SRC  17280 12-08-92 21:12 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: CHEATLD 

GUILDCHT COM   1083 07-10-85 15:55 
PAWNCHT  COM   1037 07-10-85 15:54 
GUILD5   SRC   3456 07-10-85 15:55 
PAWN23   SRC   3456 07-10-85 15:54 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: STRANGE2

HORY         &lt;DIR&gt;  16-08-93 19:46 
HUDBA        &lt;DIR&gt;  16-08-93 19:46 
INTRO        &lt;DIR&gt;  16-08-93 19:46 
PGM          &lt;DIR&gt;  16-08-93 19:46 
TEXT         &lt;DIR&gt;  16-08-93 19:46 
ZNAKY        &lt;DIR&gt;  16-08-93 19:46 
DEMO     BAT    181 16-08-93 17:16 
TEST     BAT    141 14-08-93 14:00 
STRANGE2 COM  22819 16-08-93 22:05 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: HORY    

HORY     BAS    322 05-08-93 20:28 
HORY     DAT   2128 05-08-93 20:28 
HORY     DTA    960 05-08-93 19:58 
HORY     FNT   2048 05-08-93 19:58 
HORY     PIC   7684 05-08-93 19:55 
HORY     TST   2473 05-08-93 20:40 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: HUDBA   

HUDBA    CMC   2278 12-08-93 18:11 
HUDBA    REP   1992 12-08-93 18:11 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: INTRO   

INTRO    BAS    393 16-08-93 15:39 
INTRO    BAT     45 16-08-93 16:13 
INTRO    DAT   1584 16-08-93 15:39 
INTRO    DTA    960 16-08-93 15:36 
INTRO    FNT   2048 16-08-93 15:36 
INTRO    PC2   3840 16-08-93 15:33 
INTRO    PIC   3924 16-08-93 15:30 
INTRO    SGM    567 16-08-93 17:16 
INTRO11  SRC   2816 16-08-93 17:15 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: PGM     

PGM      SGM   2326 07-10-85 15:48 
PGM52    SRC  13824 07-10-85 15:47 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: TEXT    

TEXT     BAS    926 15-08-93 20:12 
TEXT     DAT  11190 15-08-93 20:19 
TEXT     TXT  11189 15-08-93 20:19 
    84 FREE SECTORS

Volume:    ARCHIV_W
Directory: ZNAKY   

TEST     BAS   3103 01-08-93 16:08 
ZNAKY    BAS   4824 01-08-93 15:57 
ZNAKY    DAT  12933 01-08-93 15:57 
HACKY    PIC   7684 01-08-93 13:45 
ZNAKY1   PIC   7684 01-08-93 13:45 
ZNAKY2   PIC   7684 01-08-93 13:45 
ZNAKY3   PIC   7684 01-08-93 13:45 
ZNAKY4   PIC   7684 01-08-93 13:45 
    84 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-z">ARCHÍV Z "MOJE PGMY - ZDROJÁKY - ABBUC MENU, SUPER PACKER, HIDDEN PART, ASSKICKER, ZABABA"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6954'))} />
    <p><strong>ABBMENU</strong> jsou zdrojáky menu, které autor vytvořil koncem roku 1993 pro magazíny německého klubu <a href="https://abbuc.de/"><em>ABBUC e.V.</em></a> (a používá se tam s mírnými úpravami dodnes). Je to nadstavba DOSu 2.5, k zobrazení obsahu diskety a otevírání souborů různých typů (texty, obrázky, programy v binárním formátu i v Atari Basicu). Zřejmě se hned zkraje dělala nějaká drobná úprava, protože jsou zde dvě verze. (Nezaměnit s nepoužívaným starším projektem z roku 1991.)</p>

    <p><strong>HIDDEN</strong> je demo publikované jako skrytý bonus na disketě <a href="https://demozoo.org/productions/62141/"><em>The Asskicker</em></a> polské skupiny <a href="https://demozoo.org/groups/2247/">Shadows</a>. Původně vzniklo jako příspěvek do jakési jejich sbírky od různých autorů, která nakonec nevyšla. Po dlouhém otálení, během kterého se styl scény značně změnil, bylo nakonec vydané jen jako skrytá část. Předvádí především rychlé grafické rutiny (čáry, tečky, kružnice).</p>

    <p><strong>SUPERPCK</strong> je utilita určená k sestavování a komprimování spustitelných souborů na Atari. Na rozdíl od předchůdců (typu populárního <a href="https://archive.org/details/a8b_Cruncher_v4.64_1990_Magnus_pl">Magnus Cruncheru</a>) je vhodný i k pakování menších programů, které běhají pod DOSem a nepřepisují hned celou paměť, a dá se použít i jako ručně ovládaný linker. Při zavádění pakovaného programu se obejvují typické decentně šedé proužky v pozadí obrazu. Program obsahuje nikdy neopravený bug, kvůli kterému se nepokusí komprimovat některé datové bloky.</p>

    <p><strong>ZABABA</strong> byl pokus o zkulturnění listingů tištěných na stránkách časopisů. Binární soubory se tehdy ještě v dostupných tiskovinách občas vyskytovaly jako hexadecimální listingy, a třebaže se někdy doplňovaly o kontrolní součty řádků, opisování takového listingu bylo utrpením. Program (pojmenovaný po černokněžníkovi z <em>Pohádek o mašinkách</em>) data kódoval do "slov" (či zaklínadel, chcete-li) ze 6 písmen se střídáním souhláska-samohláska (např. "SASOPU") a s integrovaným kontrolním údajem v každém slově, čímž dosahoval hustoty dat srovnatelné s hexa listingem, při mnohem příznivější ergonomii přepisu do stroje. Přišel však pozdě, v podstatě se tehdy již listingy dál netiskly.</p>

    <div class="img1">
        <img src="/files/bewesoft/HIDDEN-DEMO.png" alt="HIDDEN-DEMO"/>
    </div>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARCHIV_Z
Directory: MAIN    

ABBMENU      &lt;DIR&gt;  27-10-93 16:22 
HIDDEN   ARC 120268 15-02-97 11:58 
SUPERPCK     &lt;DIR&gt;  15-11-93 18:20 
ZABABA       &lt;DIR&gt;  15-02-97 12:05 
    40 FREE SECTORS

Volume:    ARCHIV_Z
Directory: ABBMENU 

SOURCE       &lt;DIR&gt;  27-10-93 16:22 
MENU     OVL   8494 10-07-94 21:31 
MANUAL       &lt;DIR&gt;  27-10-93 16:23 
MAGAZINI COM   2708 27-10-93 16:21 
AUTORUN  SYS    385 27-10-93 16:21 
OLD1         &lt;DIR&gt;  11-07-94 13:41 
    40 FREE SECTORS

Volume:    ARCHIV_Z
Directory: SOURCE  

INI19    SRC  13312 23-10-93 12:01 
LOAD2    SRC   1792 23-10-93 17:38 
MENUA119 SRC  17152 10-07-94 20:55 
MENUB119 SRC  13440 10-07-94 20:55 
MENUC119 SRC  17024 10-07-94 20:55 
MENUD119 SRC   6144 10-07-94 20:55 
    40 FREE SECTORS

Volume:    ARCHIV_Z
Directory: MANUAL  

MAGAZINI TXT   1611 27-10-93 16:21 
MENU     TXT   2958 11-07-94 13:41 
TECHNICL TXT   2409 27-10-93 16:21 
TITEL    TXT    798 11-07-94 13:41 
    40 FREE SECTORS

Volume:    ARCHIV_Z
Directory: OLD1    

LINKING  ARC   1825 11-07-94 13:41 
MANUAL   ARC   2870 11-07-94 13:41 
SOURCE   ARC  24394 11-07-94 13:41 
TESTING  ARC  12493 11-07-94 13:41 
MENU     OVL   8699 27-10-93 16:21 
    40 FREE SECTORS

Volume:    ARCHIV_Z
Directory: SUPERPCK

TEST     BAT     31 12-11-93 23:48 
SUPERPCK COM   7466 14-11-93 15:57 
SUPERPCK DOC   9352 15-11-93 18:04 
PA       SGM   3040 14-11-93 15:52 
PB       SGM   2509 14-11-93 15:30 
PC       SGM   1923 14-11-93 15:32 
TESTPIC  SGM    220 12-11-93 21:56 
PA111    SRC  15360 14-11-93 15:51 
PB110    SRC  16000 14-11-93 15:27 
PC110    SRC  14592 14-11-93 15:31 
TESTPIC  SRC    384 12-11-93 21:56 
MODIF        &lt;DIR&gt;  04-01-04 19:05 
    40 FREE SECTORS

Volume:    ARCHIV_Z
Directory: MODIF   

SUPERPCK COM   7466 08-10-95 18:20 
    40 FREE SECTORS

Volume:    ARCHIV_Z
Directory: ZABABA  

ZABABA   BAS   1525 23-07-95 21:45 
ZABABGEN BAS   1456 23-07-95 21:43 
    40 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-al">ARCHÍV AL "ZDROJÁKY - CMC MUSIC SET, INTRO ABBUC 38"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6953'))} />

    <p><strong>CMC Music Set</strong> je v podstatě hitparáda převážně polské herní muziky z první půlky 90. let, inspirovaná podobnými kompilacemi z 80. let (konkrétně <a href="https://a8.fandal.cz/detail.php?files_id=3679">SSMB's Music Kaleidoscope</a>). Protože ale jde v podstatě o výsledky rozsáhlého crackování her, rozhodl se autor to tenkrát nepodepsat.</p>

    <p><strong>INTRO38</strong> je titulní stránka pro ABBUC magazín č. 38. Vznikla tehdy narychlo na výslovné přání předsedy spolku Wolfganga Burgera, dle zadaného tématu příslušného čísla magazínu, když mu adekvátní úvod pro daný magazín chyběl. Hudba je nepůvodní, je zkopírovaná z <em>Mega Magazínu</em> a autorem je zřejmě polský tvůrce <a href="https://demozoo.org/sceners/34551/"><em>Daxey of Waxsoft</em></a>.</p>

    <div class="img1">
        <video
            controls
            poster="/files/bewesoft/INTRO38.png"
        >
            <source src="/files/bewesoft/INTRO38.mp4" type="video/mp4" />
        </video>
    </div>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARC_AL  
Directory: MAIN    

CMCSET       &lt;DIR&gt;  30-06-94 18:11 
INTRO38  ARC  38239 15-02-97 11:46 
    186 FREE SECTORS

Volume:    ARC_AL  
Directory: CMCSET  

MUSIC    ARC  48379 30-06-94 18:11 
MUSPACK  ARC 105531 30-06-94 18:11 
PGMETC   ARC  16767 30-06-94 18:11 
LINK     ARC  54694 30-06-94 18:11 
CMCSET   COM  51075 30-06-94 14:32 
    186 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-ao">ARCHÍV AO "MOJE PROGRAMY - ZDROJÁKY - ABBUC INTRO 54, BTC 1.0, HEBREJŠTINA - ROM XL"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6952'))} />
    <p><strong>INTRO54</strong> je titulní stránka pro ABBUC magazín č. 54, která je především ukázkou hudby vytvořené "klikáním v reálném čase" v programu <em>FunMusic</em>.</p>

    <p><strong>BTC</strong> (<em>BEWESOFT's Text Converter</em>) je utilita pro převod textů mezi různými kódy, která autorovi sloužila pro přenos mezi různými formáty pro češtinu na Atari, a později se ještě více osvědčila pro export z emulátoru do prostředí PC (kde paradoxně podobná konverze dělá velké problémy, protože na Atari se české znaky typicky dávaly do rozsahu kódů 0-31). Program se spouští z příkazové řádky a akceptuje textovou definici potřebné konverze. Jsou tam nadefinované různé varianty kódování ASCII či Atárkového ATASCII, zdrojáky ATMAS II, tisk na tiskárny EPSON, pro češtinu pak BEWESLOVO (<code>BWS</code>), u nás populární Čapek (<code>CAP</code>), navrhované univerzální kódování češtiny Tcheko Radka Štěrby (<code>TCH</code>), ale i v té době na PC používaný kód bratří Kamenických, dodatečně i Latin 2 a Windows 1250. Snadno se dají dodefinovat i další, takže dodnes při exportu z emulátoru konvertuje autor Atari texty raději pomocí BTC, než se s tím pak trápit na straně PC.</p>

    <p><strong>HEBREW</strong> je modifikovaná verze ROM operačního systému Atari, vzniklá úpravou verze z modelu 800XL pro podporu hebrejštiny. Jiří Bernášek tento program dělal pro známého z Jeruzaléma (Nir Dary), který mu poslal starší implementaci (soubor <code>HEBREW.SYS</code>), aby pak společně řešili integraci přímo do ROM počítače. Vzniklá verze má v druhé znakové sadě místo malých písmen hebrejské znaky, a především pak má obrazovkový editor rozšířený pro psaní zleva doprava i zprava doleva – má to pro každý směr vedle klasického režimu i režim Insert (vsunování), aby bylo možno psát střídavě oběma směry bez přemazání již napsaného. Přepínalo se to všechno různými kombinacemi <Key>SHIFT</Key>/<Key>CONTROL</Key> s klávesami <Key>CAPS</Key> a <Key>INVERSE</Key>. Také se daly kdykoliv znakové sady přepínat pro střídavé čtení textů v obou jazycích.</p>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARC_AO  
Directory: MAIN    

INTRO54      &lt;DIR&gt;  13-07-98 21:51 
BTC          &lt;DIR&gt;  16-11-99 20:56 
HEBREW       &lt;DIR&gt;  16-01-01 19:55 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: INTRO54 

INTRO54  ARC  36452 16-01-01 19:55 
TITEL54  COM   9199 13-07-98 21:23 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: BTC     

BTC      ARC  44081 16-11-99 19:02 
UNARCED      &lt;DIR&gt;  16-11-99 20:58 
BWSDEF       &lt;DIR&gt;  16-11-99 21:04 
SOURCE       &lt;DIR&gt;  16-11-99 21:08 
NOVEDEF      &lt;DIR&gt;  22-06-01 22:01 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: UNARCED 

ATAEPSGR BAS   1023 07-11-99 16:41 
ASC2ATM  BTC    141 07-11-99 14:22 
ATA2ASC  BTC    857 07-11-99 14:25 
ATA2PC   BTC   2337 07-11-99 17:10 
ATM2ASC  BTC    151 07-11-99 14:23 
EED2ASC  BTC    811 07-11-99 13:51 
EPSUBSCR BTC    536 07-11-99 14:26 
PC2ATA   BTC   2571 07-11-99 13:34 
BTC      COM   4331 14-11-99 13:01 
BTC      DOC  22117 16-11-99 18:27 
CZECH        &lt;DIR&gt;  16-11-99 21:01 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: CZECH   

ASC2CAP  BTC    610 08-11-99 22:04 
CAP2ASC  BTC   1199 06-11-99 20:54 
CAP2ATA  BTC   1223 07-11-99 17:13 
CAP2KAM  BTC   1459 06-11-99 20:45 
CAP2TCH  BTC   1318 06-11-99 21:18 
KAM2ATA  BTC   2542 07-11-99 11:48 
KAM2CAP  BTC   3121 08-11-99 22:05 
KAM2TCH  BTC   2631 07-11-99 11:50 
TCH2ATA  BTC   1020 08-11-99 21:00 
TCH2CAP  BTC   1562 08-11-99 22:06 
TCH2KAM  BTC   1082 07-11-99 15:45 
BTC      TCH  22241 16-11-99 18:27 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: BWSDEF  

ASC2BWS  BTC     97 06-11-99 21:37 
BWS2ASC  BTC    584 06-11-99 17:24 
BWS2CAP  BTC   1025 02-11-99 20:43 
BWS2KAM  BTC    645 06-11-99 16:41 
BWS2TCH  BTC    476 06-11-99 17:03 
CAP2BWS  BTC   1304 06-11-99 18:28 
KAM2BWS  BTC   2535 07-11-99 11:48 
TCH2BWS  BTC    714 07-11-99 14:40 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: SOURCE  

BTC46    MAE  24911 14-11-99 12:59 
BTC17    TXT  22117 15-11-99 21:31 
BTCC8    TXT  22241 15-11-99 21:22 
TESTFILE     &lt;DIR&gt;  16-11-99 21:17 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: TESTFILE

ASC      TXT    224 08-11-99 18:01 
ATA      TXT    452 08-11-99 18:23 
ATM      TXT    256 08-11-99 18:13 
BWS      TXT    452 07-11-99 17:40 
CAP      TXT    465 28-11-95 22:14 
EED      TXT    296 08-11-99 18:36 
KAM      TXT    555 08-11-99 19:55 
PC       TXT    482 08-11-99 18:59 
TCH      TXT    419 07-11-99 19:04 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: NOVEDEF 

BWS2LAT  BTC    643 28-11-95 22:14 
BWS2WIN  BTC    644 22-06-01 18:03 
WIN2BWS  BTC   2456 22-06-01 20:37 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: HEBREW  

ORIGINAL     &lt;DIR&gt;  16-01-01 19:55 
SOURCE       &lt;DIR&gt;  16-01-01 19:55 
ROMHEBR  DAT  16384 01-04-01 22:41 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: ORIGINAL

HEBREW2  FNT   1024 14-01-01 09:21 
HEBRU    FNT   1024 14-01-01 09:21 
HEBREW   SYS   2201 14-01-01 09:21 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: SOURCE  

ROM800XL DAT  16384 14-01-01 09:21 
HBRWSYS  FNT   1024 14-01-01 09:21 
PATCH39  MAE  11422 01-04-01 22:41 
TEST         &lt;DIR&gt;  16-01-01 19:55 
VERZE1       &lt;DIR&gt;  31-03-01 21:56 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: TEST    

TEST     BAT     54 14-01-01 16:05 
HBTST    MAE    390 14-01-01 14:54 
ROMCOPY  MAE    418 14-01-01 09:21 
HBTST    SGM     69 14-01-01 14:54 
   103 FREE SECTORS

Volume:    ARC_AO  
Directory: VERZE1  

PATCH20  MAE  11355 16-01-01 18:31 
   103 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-ay">ARCHÍV AY "X-DEMO - ZDROJÁKY, EASY DEMO - ZDROJÁK"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6951'))} />

    <p><strong>X-DEMO</strong> je program vzniklý po krachu projektu <em>Y</em>, který předvádí alespoň již dokončený hudební modul. Zároveň jde o jistý druh historického dokumentu, program obsahuje jakési pojednání o historii a vývoji Atari scény, viděné poněkud naivníma očima roku 1996 (dokonce dvojjazyčně).</p>

    <p><strong>EASY DEMO</strong> a <strong>KALEIDOSKOP</strong> jsou drobné prográmky reagující na tehdy nový trend demo tvorby pro účast na počítačových srazech, kde se často konaly i soutěže těchto prací a předváděly se často i velmi malá, narychlo vytvořená dílka. Někdy se soutěžilo i v kategoriích s přísně omezenou délkou souboru.</p>

    <div class="img2">
        <img src="/files/bewesoft/KALEIDO.png" alt="KALEIDO" />
        <video
            controls
            poster="/files/bewesoft/EASY-DEMO.png"
        >
            <source src="/files/bewesoft/EASY-DEMO.mp4" type="video/mp4" />
        </video>
    </div>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARC_AY  
Directory: MAIN    

XDEMO        &lt;DIR&gt;  07-12-96 23:50 
EASY         &lt;DIR&gt;  12-12-98 17:16 
KALEIDO      &lt;DIR&gt;  26-08-00 18:10 
    13 FREE SECTORS

Volume:    ARC_AY  
Directory: XDEMO   

CH       BAS    453 22-11-96 21:26 
FKONV3   BAS    640 23-11-96 16:02 
FLINK4   BAS   1440 23-11-96 17:42 
IKONYOPR BAS    260 02-12-96 21:03 
IKONYTST BAS    423 24-11-96 13:40 
NADP     BAS    475 24-11-96 13:44 
TXK17    BAS   2185 01-12-96 10:00 
XDEMO    COM  47111 07-12-96 23:01 
DEPINFO  DAT    136 05-12-96 19:10 
F        DAT   4608 23-11-96 17:42 
IKONY    DAT    504 02-12-96 21:03 
INTTXT   DAT    840 07-12-96 18:32 
NADP     DAT   2880 24-11-96 13:45 
PICS     DAT   7055 02-12-96 20:27 
TEXTY    DAT  23182 05-12-96 19:05 
CH       FNT   1024 22-11-96 23:05 
CH8      PIC   7680 22-11-96 23:04 
FA7      PIC   7684 23-11-96 16:28 
FB6      PIC   7684 23-11-96 16:48 
IKONY    PIC   7684 24-11-96 12:50 
NADPIS5  PIC   7684 24-11-96 12:50 
P12      PIC   7684 27-11-96 19:59 
P34      PIC   7684 27-11-96 19:59 
DEP      SGM    477 05-12-96 19:29 
INIH     SGM    295 07-12-96 17:57 
INTRO    SGM    201 07-12-96 18:48 
LDINI    SGM     58 07-12-96 21:56 
LDMAIN   SGM    182 07-12-96 22:52 
PGMH     SGM   2673 07-12-96 17:57 
XALL     SGM  46861 07-12-96 21:24 
YAX      SGM   2314 05-12-96 19:19 
YBX      SGM   2250 05-12-96 19:22 
YCX      SGM   2416 05-12-96 19:24 
FTST     SRC   1408 23-11-96 17:31 
INTRO1   SRC   1024 07-12-96 18:48 
LDINI    SRC    384 07-12-96 21:56 
LDMAIN   SRC   1024 07-12-96 22:51 
PGM38    SRC  16384 07-12-96 17:55 
YAX2     SRC  13440 05-12-96 19:18 
YBX2     SRC  13440 05-12-96 19:21 
YCX2     SRC  14208 05-12-96 19:23 
INTTXT   TXT    760 07-12-96 18:30 
MENU1C   TXT    172 30-11-96 16:33 
MENU1E   TXT    173 30-11-96 16:31 
MENU2C   TXT    143 30-11-96 16:39 
MENU2E   TXT    140 30-11-96 16:37 
MENU3    TXT    143 30-11-96 16:42 
SCROLLC  TXT    727 02-12-96 20:59 
SCROLLE  TXT    727 02-12-96 20:51 
TXT1C    TXT   2053 04-12-96 21:20 
TXT1E    TXT   1994 04-12-96 21:16 
TXT2C    TXT   1214 01-12-96 20:24 
TXT2E    TXT   1204 01-12-96 20:21 
TXT4C    TXT   6533 04-12-96 21:48 
TXT4E    TXT   6997 05-12-96 18:31 
TXT5C    TXT   5584 04-12-96 22:04 
TXT5E    TXT   5558 04-12-96 21:57 
P56      PIC   7684 08-12-96 00:09 
    13 FREE SECTORS

Volume:    ARC_AY  
Directory: EASY    

EASY     COM   4321 12-12-98 17:08 
DEFS37   SRC   8192 12-12-98 16:09 
DEMO109  SRC  13056 12-12-98 15:55 
    13 FREE SECTORS

Volume:    ARC_AY  
Directory: KALEIDO 

KALEIDO  COM    255 26-08-00 17:33 
KALEIDO  SRC   3200 26-08-00 18:01 
    13 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-bc">ARCHÍV BC "NEDOKONČENÉ PROJEKTY - Y"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6950'))} />

    <p>Opět nedokončený projekt. Mělo jít o poněkud experimentální hru z neznámého světa generovaného počítačem (<em>Y</em> je tajuplná "druhá neznámá" někde v pozadí za tolik propíraným <em>X</em>), kde bylo záměrem naplnit paměť namísto konkrétního návrhu grafiky, hudby atd., spíše empiricky sestavenými algoritmy, které by vše generovaly na základě pseudonáhodných čísel (inspirací byla legendární hra <a href="https://en.wikipedia.org/wiki/Rescue_on_Fractalus!"><em>Rescue on Fractalus</em></a>, náhodně generovaná mapa v polské hře <a href="https://www.atarimania.com/game-atari-400-800-xl-xe-vicky_s5659.html"><em>Vicky</em></a>, či hudba ve hře <a href="https://www.atarimania.com/game-atari-400-800-xl-xe-d-bug_1536.html"><em>D-BUG</em></a>). Po rozsáhlé analýze dostupného materiálu ale vznikl pouze modul hudebního doprovodu a fungovalo také ovládání s autodetekcí různých typů ovladače (joystick, myš, světelná pistole, klávesnice).</p>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARC.BC  
Directory: MAIN    

Y            &lt;DIR&gt;  25-07-98 14:59 
    982 FREE SECTORS

Volume:    ARC.BC  
Directory: Y       

GRAFIKA  ARC   5805 25-07-98 14:50 
KRESL    ARC  37752 25-07-98 14:51 
MUSIC    ARC  31568 25-07-98 14:52 
OVLADAC  ARC   3058 25-07-98 14:53 
PRAC     ARC  34526 25-07-98 14:54 
    982 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-bg">ARCHÍV BG "MULTI DASH - SOURCE"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6949'))} />

    <p><em>Multi Dash</em> je síťová hra pro až 8 počítačů Atari propojených sériovým kabelem, inspirovaná hrou <a href="https://en.wikipedia.org/wiki/Boulder_Dash_(video_game)"><em>Boulder Dash</em></a> a ranou síťovou hrou <a href="https://a8.fandal.cz/detail.php?files_id=2364"><em>Maze of AGDAgon</em></a>. Hrála se poprvé na Atariádě v Prostějově (2000), herní princip se však příliš neosvědčil, protože nebyl otestovaný s větším počtem skutečných hráčů.</p>

    <div class="img2">
        <img src="/files/bewesoft/MultiDash2.png" alt="MULTI DASH" />
        <img src="/files/bewesoft/MultiDash8.png" alt="MULTI DASH" />
    </div>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    M.D.SRC 
Directory: MAIN    

MULTIDSH     &lt;DIR&gt;  02-04-00 17:31 
   112 FREE SECTORS

Volume:    M.D.SRC 
Directory: MULTIDSH

FINAL        &lt;DIR&gt;  02-04-00 17:31 
FONTY        &lt;DIR&gt;  02-04-00 17:31 
MANUAL       &lt;DIR&gt;  02-04-00 17:31 
MENU         &lt;DIR&gt;  02-04-00 17:31 
PACK         &lt;DIR&gt;  02-04-00 17:31 
PGM          &lt;DIR&gt;  02-04-00 17:31 
PRVKY        &lt;DIR&gt;  02-04-00 17:31 
ZVUK         &lt;DIR&gt;  02-04-00 17:31 
   112 FREE SECTORS

Volume:    M.D.SRC 
Directory: FINAL   

MDSHCZ   CAP   9108 02-04-00 17:08 
MULTIDSH COM  33860 01-04-00 18:15 
MULTIDSH DOC  10083 02-04-00 17:08 
HARDWARE PIC   7680 02-04-00 10:58 
MULTIDSH ARC  48334 02-04-00 17:31 
   112 FREE SECTORS

Volume:    M.D.SRC 
Directory: FONTY   

PMFNT3   BAS    385 04-03-00 16:11 
PMFNT    DAT    320 04-03-00 19:53 
PMFNT6   FNT   1024 04-03-00 19:53 
TXFNT2   FNT   1024 19-03-00 18:35 
   112 FREE SECTORS

Volume:    M.D.SRC 
Directory: MANUAL  

MDC4     TXT   9108 02-04-00 14:24 
MDE6     TXT  10083 02-04-00 14:24 
   112 FREE SECTORS

D2:DIR MULTIDSH&gt;MENU&gt;

Volume:    M.D.SRC 
Directory: MENU    

LOGO     DAT   1184 22-03-00 18:58 
LOGO6    PIC   7684 22-03-00 18:47 
TXTYC17  TXT   5991 01-04-00 13:51 
TXTYE12  TXT   6238 01-04-00 13:51 
   112 FREE SECTORS

Volume:    M.D.SRC 
Directory: PACK    

DEPACK2  MAE   1642 01-04-00 17:41 
LOAD2    MAE    729 01-04-00 18:15 
   112 FREE SECTORS

Volume:    M.D.SRC 
Directory: PGM     

HRAA105  MAE   6094 01-04-00 16:07 
HRAB27   MAE  14807 01-04-00 16:07 
HRAC78   MAE  28877 01-04-00 16:07 
HRAD31   MAE  17424 15-03-00 20:04 
HRAE68   MAE  30862 01-04-00 16:07 
HRAF40   MAE  15070 01-04-00 13:23 
   112 FREE SECTORS

Volume:    M.D.SRC 
Directory: PRVKY   

PRVKY10  BAS   2195 27-02-00 22:14 
PRVKY    DAT   8448 02-03-00 21:17 
PT17     MAE   6506 21-03-00 18:11 
PRVKY141 PIC  15368 02-03-00 21:17 
PRVTAB   SGM   2566 21-03-00 18:11 
   112 FREE SECTORS

Volume:    M.D.SRC 
Directory: ZVUK    

MPTX16   BAS   2454 29-03-00 22:15 
ZV23     MAE  14470 01-04-00 13:51 
X11      MPT   2041 28-11-95 22:14 
   112 FREE SECTORS
        </pre>
    </details>

    <Heading h=3 id="archiv-bk">ARCHÍV BK "MOJE PGM - ZDROJÁKY - MULTI RACE, MULTI WORMS + ČLÁNEK ABBUC"</Heading>
    <AssetBox data={assets.then(assets => assets.get('6948'))} />

    <em>Multi Race</em> je další síťová hra pro až 8 počítačů Atari, tentokrát s obecněji pojatou fyzickou vrstvou komunikace, cílenou na tvorbu dalších podobných her. Zároveň je program pro autora splněným letitým snem o hře s 3D grafikou.

    <em>Multi Worms</em> je jednoduchá hra určená spíše jen k demonstraci univerzálního komunikačního modulu a jeho použití k tvorbě podobných her. Vznikla společně s hrou Multi Race, byla publikovaná v magazínech <em>ABBUC</em> i <a href="http://flop.atariportal.cz/"><em>Flop</em></a>.

    <div class="img2">
        <img src="/files/bewesoft/MULTI RACE1.png" alt="MULTI RACE" />
        <img src="/files/bewesoft/MULTI RACE3.png" alt="MULTI RACE" />
    </div>
    <div class="img2">
        <img src="/files/bewesoft/MULTI WORMS1.png" alt="MULTI WORMS" />
        <img src="/files/bewesoft/MULTI WORMS2.png" alt="MULTI WORMS" />
    </div>

    <details>
        <summary>Výpis souborů</summary>
        <pre class="codeblock">
Volume:    ARC_BK  
Directory: MAIN    

MULTIRAC     &lt;DIR&gt;  28-04-02 15:07 
MULTIWRM     &lt;DIR&gt;  10-05-02 14:48 
    89 FREE SECTORS

Volume:    ARC_BK  
Directory: MULTIRAC

SILNICE      &lt;DIR&gt;  28-04-02 15:07 
OBJEKTY      &lt;DIR&gt;  28-04-02 15:07 
PROGRAM      &lt;DIR&gt;  28-04-02 15:07 
LOADING      &lt;DIR&gt;  28-04-02 15:07 
MULTIRAC COM  24314 26-04-02 19:44 
    89 FREE SECTORS

Volume:    ARC_BK  
Directory: SILNICE 

SILN32   BAS   5210 13-11-01 18:07 
STST6    BAS   3514 13-11-01 18:07 
TABKOR   BAS    325 18-11-01 10:28 
FONT     DAT    512 19-04-02 19:42 
FONT2    FNT   1024 19-04-02 19:42 
SLT      TAB   3200 12-11-01 20:15 
    89 FREE SECTORS

Volume:    ARC_BK  
Directory: OBJEKTY 

AUTO16   BAS   7929 07-03-02 18:11 
AUTST7   BAS   2294 24-02-02 14:31 
BODY7    BAS   1352 04-02-02 20:02 
AUTO     DAT  12800 14-04-02 16:44 
AUTO54   PIC  15368 14-04-02 16:44 
    89 FREE SECTORS

Volume:    ARC_BK  
Directory: PROGRAM 

TEST     BAT     89 17-04-02 20:22 
TEST1    BAT     77 22-04-02 21:52 
PGA58    MAE  21216 18-04-02 18:07 
PGB23    MAE  17829 18-03-02 18:24 
PGC87    MAE   8868 26-04-02 19:44 
PGD51    MAE  19265 20-04-02 16:23 
PGE46    MAE  22291 26-04-02 19:02 
PGF51    MAE  25407 26-04-02 18:17 
PGM      SGM  15110 26-04-02 19:02 
    89 FREE SECTORS

Volume:    ARC_BK  
Directory: LOADING 

MRSCREEN BAS    285 26-04-02 19:44 
OBRAZ    DAT    992 26-04-02 19:44 
LOADMR2  MAE    738 26-04-02 19:44 
LOADMR   SGM    149 26-04-02 19:44 
    89 FREE SECTORS

Volume:    ARC_BK  
Directory: MULTIWRM

MWORMS   COM   6824 10-05-02 14:00 
MWFONT   DAT   1024 03-05-02 09:04 
MWORMA   MAE   1729 05-05-02 14:33 
MWORMB   MAE  35437 05-05-02 10:38 
MWORMC   MAE  31371 05-05-02 19:45 
NTWGAM1  TXT  13180 10-05-02 14:00 
NTWGAM2  TXT  12550 10-05-02 14:00 
NTWGAM3  TXT  16148 10-05-02 14:00 
    89 FREE SECTORS
        </pre>
    </details>


</ProjectPage>

<style>
    .img1 img, .img1 video {
        display: block;
        margin: auto;
        margin-bottom: 1rem;
        width: 65%;
    }
    .img2 {
        display: flex;
        gap: 1rem;
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .img2 img, .img2 video {
        width: 100%;
    }
    @media (max-width: 600px) {
        .img1 img, .img1 video {
            width: 100%;
        }
        .img2 {
            flex-direction: column;
        }
    }
</style>