<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
</script>

<PageLang cs />

<BlogPostPage
    author_name="Jiří Bernášek"
    date="14. října 2025"
    title="Obvody MAS601-603 pro televizní hry pod mikroskopem"
>
    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/01-vybaleny-MAS601.jpg">
        <cite>Obr. 1: Čip MAS601 po vybalení z černého pouzdra (Foto: Sean Riddle)</cite>
    </div>
    <p>V <a href="/blog/67-pong-xd8001-pod-drobnohledem/">minulém článku</a> jsme si představili zvenku i zevnitř televizní hru XD-8001, kterou od roku 1979 vyráběla Piešťanská Tesla. Hra je založena na specializovaných čipech MAS601-603, navržených a vyráběných přímo v Piešťanech, což je v rámci tehdejšího východního bloku herní unikát, a i ve světovém měřítku vzácnost. Tento článek je určen pro obzvláště zvídavého a trpělivého čtenáře, neboť půjdeme ještě hlouběji: Nahlédneme přímo do vnitřní struktury zmíněných čipů a pokusíme se rozluštit jejich fungování. Zkusíme si také odpovědět na otázky ze závěru minulého článku: Proč rozdělení na 3 obvody? Proč napětí -18V? Proč je půlka hry analogová?
    
    <p>Jak se vlastně dá takový integrovaný obvod zkoumat? Ve světě existují machři, kteří umí na "brouka" zaútočit kyselinou, zvolna odkrývat jednotlivé jeho vrstvy a detailně je fotografovat přes mikroskop. A tak zatímco v minulosti se údajně na východě Evropy podobně zkoumaly čipy západního původu, nyní si z iniciativy spolku <a href="https://hernihistorie.cz/">Herní historie</a> udělaly výlet za oceán naopak čipy MAS60x. Procesu obvykle zvaného "decap" se ujal <a href="https://seanriddle.com/decap.html">Sean Riddle</a> a výsledkem jsou <a href="https://seanriddle.com/tesla/">snímky</a> všech tří čipů v doslova obrovském rozlišení.
    
    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/02-priklady-decap-MAS601.jpg">
        <cite>Obr. 2: Ukázka z fotky struktury čipu (Foto: Sean Riddle)</cite>
    </div>

    <p>Abychom porozuměli jejich obsahu, potřebujeme něco málo vědět o struktuře integrovaných obvodů. Jde o komplikovanou technologii (a to ještě není nic proti dnešním čipům), nám ale naštěstí k pochopení funkce obvodu postačí jen několik základních věcí. Na obrázku 2 jsou malé ukázky z fotek čipu MAS601, a vidíme, že se poměrně dost podobají struktuře oboustranných plošných spojů. Na pravých výřezech vyniká vrchní propojovací vrstva (kovová), vlevo máme stejná místa po jejím odstranění, takže můžeme lépe sledovat spodní vodivé cesty, vytvořené dopováním v křemíkovém základu čipu. Další vrstva mezi nimi (světlé obdélníčky na levých obrázcích) tvoří polem řízené tranzistory (MOS), které se stávají vodivými působením dostatečného napětí na příslušných hradlech - zde tedy na nich ležící kovové vrstvě. Nesmíme si je ovšem splést se vzájemným propojením jednotlivých vrstev (dnes obvykle zvaným "vias"), které rozeznáváme jako (různobarevně zkorodované) čtverečky uvnitř některých políček. Abych se v tom lépe vyznal, překreslil jsem si celou strukturu různými barvami do jediného obrázku (jen tři relevantní vrstvy, čísla na okraji motivu ovšem prozrazují technologii s nejméně pěti vrstvami).

    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/03-struktura-MAS602-603.jpg">
        <cite>Obr. 3: Překreslená struktura MAS602+603 s popsanými prvky</cite>
    </div>

    <p>Nyní již můžeme obvod začít převádět do podoby klasického schématu, je to však obvod poněkud nezvyklý - máme zde totiž jen samé tranzistory (plus ojediněle malý kondenzátor, tvořený obdélníčkem dvou vrstev na sobě). Jak bylo v 70. letech obvyklé, jsou všechny tranzistory stejného typu vodivosti, v tomto případě P (otvírají se při záporném napětí hradla, odtud tedy i záporné napájecí napětí celého systému). Zapojení pak odpovídá logice P-MOS, kde většinou různé kombinace tranzistorů (podle logické funkce) spínají výstup do země, a pokud sepnuty nejsou, objeví se na výstupu napětí přivedené přes odpor (pull-up, nebo zde vzhledem k zápornému napětí možná spíše pull-down). Vznikal tím sice jistý trvalý odběr proudu a možná ne úplně ideální rychlost spínání, bylo však jednodušší tuto verzi vyrobit. (Později přišla technologie CMOS, která kombinuje oba druhy tranzistorů P+N k aktivnímu spínání signálů v obou polaritách.)

    <p>Zbývá ještě vysvětlit, jak se mezi "samými tranzistory" najednou objevil odpor: Ten pojem jsem použil jen pro názornost, ve skutečnosti je to také tranzistor. Podstatná je zde totiž i velikost jednotlivých tranzistorů, které mají v sepnutém stavu jen omezenou vodivost, takže se vlastně chovají jako malé odpory. Čím menší, případně tenčí a delší, takový tranzistor je, tím větší má i odpor. Tranzistory tvořící zmíněný pull-down tedy mají podobu tenkých "nudlí" (levý dolní roh obr. 2). V překreslených schématech jsem si v tomto ohledu vypomohl různými variantami schématické značky (více velikostí, s kroužkem nebo bez), pro nejslabší variantu jsem přímo od autora čipů převzal velice názornou kombinaci značek odporu a tranzistoru, v případě MAS602+603 jsem si ještě pro lepší představu různé velikosti popsal písmeny A-E.

    <p>Podotýkám, že na čipech existují i struktury, které nemám zcela vysvětlené. Odhaduji, že zdánlivě neúplné tranzistory či malé kondenzátory poblíž vývodů budou nějakou variantou ochrany proti statické elektřině (v případě MAS602+603 jsem toto naznačil i ve schématu), proč se ale vyskytují i uvnitř struktury MAS601 (napočítal jsem takových 39) a naopak chybí u některých pinů (1, 2 a 16), zůstává tak trochu záhadou. Pro funkci obvodu však význam nemají (ani sám autor čipů je v dokumentaci neuvádí), takže je budu dále již ignorovat.

    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/04-vnitrni-zapojeni-MAS602-603.jpg">
        <cite>Obr. 4: Podrobné vnitřní zapojení MAS602+3</cite>
    </div>
    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/05-blokove-schema-MAS602-603.jpg">
        <cite>Obr. 5: Blokové schéma MAS602+3</cite>
    </div>

    <p>Pojďme tedy nahlédnout do struktury a fungování jednotlivých obvodů. Začneme s MAS602+603, které pracují analogovým způsobem, jsou se svými 75 resp. 80 tranzistory z celé trojice těmi jednoduššími a prohlédneme si je oba společně. Obrázky ukazují pro oba čipy překreslenou strukturu (obr. 3, zde jsem si pro srovnání se schématem tranzistory nově očísloval), podrobné schéma zapojení (obr. 4) a zjednodušené blokové schéma (obr. 5), které nám poslouží k vysvětlení jejich funkce. Jak vidíme, jedná se o dva téměř shodné čipy, které mají dokonce tytéž podkladové struktury se základy tranzistorů, a jen v poslední propojovací vrstvě jsou drobné rozdíly. Odlišným propojením stejných tranzistorů na stejných čipech tak nakonec vznikají dva mírně odlišné obvody. Každý z nich má navíc dvě víceméně stejné poloviny, takže vlastně stojíme před čtveřicí shodných obvodů. Jejich výstupem jsou impulsy, které tvoří vertikální či horizontální složku videosignálu pohyblivých objektů ve hře.

    <p>Poloha objektu je řízena velikostí záporného napětí na pinu 3 nebo 13 (říkejme tomu třeba "3/13"), které řídí první monostabilní klopný obvod (MKO1). Příchod obrazového synchronizačního impulsu na pinu 5/11 pomocí tranzistoru T21/T56 aktivuje sledovač T20/T55, který pak vstupní analogovou úroveň z pinu 3/13 vlastně překopíruje (navzorkuje) na kondenzátor připojený k pinu 4/12. Tyto tranzistory jsou dosti robustní (největší na celém čipu), takže zvládnou nabití kondenzátoru na potřebné napětí i během poměrně krátkého synchronizačního pulsu (a bez problému překonají slabší proudy přitékající z dalších částí obvodu). Výstup klopného obvodu je tím na úrovni L a napětí na kondenzátoru postupně klesá, působením zdroje konstantního proudu T27/T62. Ten je poměrně kvalitní (pracuje při konstantním napětí, regulovaném dle referenčního zdroje T63+64), aby se rychlost pohybu objektů v různých částech obrazovky neměnila. Když (záporné) napětí na kondenzátoru dostatečně poklesne, objeví se na výstupu klopného obvodu úroveň H, která signalizuje oblast pro zobrazení objektu. Tranzistor T28/65 zároveň napětí kondenzátoru dorazí až k nule, aby se obvod až do příštího synchronizačního pulsu již nemohl znovu překlopit.

    <p>Druhý klopný obvod (MKO2) odměřuje pevně nastavenou velikost zobrazeného objektu. Úroveň L z předchozího obvodu MKO1 zpočátku přes tranzistor T34/T70 udržuje kondenzátor na pinu 6/10 ve vybitém stavu, a zároveň výstup obvodu MKO2 na úrovni H. V okamžiku, kdy má začít zobrazení objektu, přijde z MKO1 úroveň H, která kondenzátor i výstup obvodu odblokuje. Na výstupu se objeví úroveň L, daná zatím téměř nulovým napětím na kondenzátoru, který se však přes zvenku připojený odpor zvolna nabíjí. Po uplynutí doby, která je potřebná k zobrazení správné velikosti objektu, dosáhne (záporné) napětí na kondenzátoru logickou úroveň L, čímž výstup obvodu opět přejde na klidovou úroveň H. V tomto stavu již setrvá po celý zbytek obrazového snímku či řádku, další růst napětí na kondenzátoru se však časem zastaví vlivem omezovače T38+39/T74+75. Velikost odporů a kondenzátorů na pinech 6/10 tak určuje velikost zobrazovaných objektů (délku pálek a šířku/výšku míče - teoreticky by ji bylo možné vhodně zapojenými spínači i měnit, což ale XD-8001 zabudované nemá). Vytvořený signál je výstupním obvodem předán jako logická úroveň přes pin 7/9 do čipu MAS601.

    <p>V případě obvodu MAS603 vytvářejí popsané obvody vertikální složku zobrazovaných pálek obou hráčů. Jsou proto řízeny napětím přivedeným přímo z potenciometrů v ovladačích, spouštěny vertikální synchronizací obrazu, a jejich výstupy jsou navzájem nezávislé. Naproti tomu obvod MAS602 vytváří obě složky zobrazení míče, část na pinech 3-6 má tedy na starosti vertikální složku (a je spouštěna vertikální synchronizací), zatímco část na pinech 10-13 obsluhuje obdobně složku horizontální. Výstupy obou částí jsou zde rovnou i sloučeny, takže na pinu 9 máme hotový signál pro zobrazení míče (aktivní v úrovni L přesně v časech, kdy je na obrazovce vykreslována oblast míče). K horizontální složce je ovšem přidán navíc ještě signál horizontální synchronizace, takže se vlastně zobrazují míče dva - jeden na správném místě obrazovky, druhý skrytě při zpětném běhu paprsku (mezi obrazovými řádky). Druhý "míč" samozřejmě na obrazovce není vidět (při zpětném běhu je obraz zatemněný), jeho přítomnost však pomáhá správnému rozběhu hry po gólech. Pokud totiž některý z hráčů gól schytá a míč odletí mimo obrazovku, není až do nového podání vůbec zobrazován, přičemž by se mohl jako neviditelný duch dostat daleko za horní či spodní okraj hřiště, odkud by se již nevrátil. Obvod MAS601 ovšem vidí vždy alespoň ten druhý "míč", takže může správně řešit jeho odrazy od okrajů hřiště. Míč pak vlastně v autu skáče pořád nahoru a dolů, a při podání se na hřiště vrací v místě, kde se zrovna nacházel.

    <p>Řídící analogové napětí na pinu 3/13 vzniká v případě MAS602 pomocí integrátoru zapojeného na pinech 1-3/13-15. Směr pohybu míče je řízen logickými úrovněmi přivedenými z obvodu MAS601, protože je však napětí úrovně L (-18V) pro integrátor příliš velké (a potenciálně i nestabilní), je nejdřív zmenšeno v sérii zapojeným vnějším odporem a omezovačem na pinu 1/15 (tyto prvky sice pro názornost kreslím jako zenerovy diody, jde však opět jen o několik tranzistorů, kde hranici tvoří napětí potřebné k jejich otevření). Samotný integrátor řídí napětí na pinu 3/13 tak, aby na pinu 2/14 byla úroveň stále stejná. Díky tomu přes vnější odpory od pinu 1/15 přitéká na pin 2/14 vždy stejně velký proud (ovšem s různou polaritou podle směru pohybu), který lineárně nabíjí/vybíjí kondenzátor zapojený mezi piny 2-3/14-13. Právě ten je jakousi "analogovou pamětí", jejíž napětí určuje polohu míče na obrazovce. Velikost odporů a kondenzátoru na pinech 1-3/13-15 tedy řídí rychlost pohybu míče při hře.

    <p>Provedení integrátorů na čipu je velmi jednoduché, jde prakticky jen o jediný tranzistor. Ten dokáže napětí výstupu stahovat pouze směrem k nule, takže pro opačný směr (při zavřeném tranzistoru) je zvenku připojen dodatečný odpor. Na čipu sice existuje i jakýsi pull-down, pravděpodobně dodatečně přidaný, ten je ale nejspíš příliš slabý. Omezovací obvod T14+T17-19/T50-T53 pak tvoří doraz, který napětí (a tím i poloha míče) nemůže překročit - význam to má především v horizontálním směru, kde tento obvod určuje vzdálenost míče za okrajem obrazovky po gólu.

    <p>Druhý výstup (pin 7), který v případě MAS602 vlastně není potřeba, je využit ke sloučení horizontální a vertikální synchronizace pro televizor. Obvod MAS603 obsahuje dále generátor hodinového kmitočtu, ke kterému se vrátím až v příštím článku v souvislosti se změnami, kterými prošel, a také takzvaný "pomocný tranzistor", což je prostě jeden ze zbývajících tranzistorů společné základní struktury obou čipů, vyvedený na zbylé piny 14-15 (v přístroji není k ničemu použit). Zbylých tranzistorů je ovšem na čipech více, protože všechny tranzistory čipu MAS602 existují i na čipu MAS603 a naopak, jakožto vedlejší produkty zjednodušeného návrhu. Nadbytečné tranzistory většinou nejsou nikam připojeny, mnohé ani nemají hradlo, nebo jsou trvale zavřené a do funkce obvodu nijak nezasahují. Pro zajímavost jsem pár takových v překresleném schématu ponechal.

    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/06-struktura-MAS601.jpg">
        <cite>Obr. 6: Překreslená struktura MAS601</cite>
    </div>

    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/07-struktura-MAS601-se-signaly.jpg">
        <cite>Obr. 7: Pro zvědavé: Překreslená struktura MAS601 s vyznačenými signály a změnami</cite>
    </div>

    <p>Nyní se dostáváme teprve k té pravé výzvě: Pojďme se podívat na obvod MAS601, který je skutečným srdcem i mozkem celé hry. Je to na svou dobu poměrně dost komplexní logický obvod složený z 963 tranzistorů, takže se raději nebudeme topit v jakémsi nikdy asi nenakresleném obřím schématu celého čipu, ale soustředíme se na jednotlivé funkční celky, z nichž se skládá. I tento obvod jsem si podle fotografií překreslil (obr. 6) a postupně označil jednotlivé jeho části. (Pro hloubavější povahy jsou na druhé verzi - obr. 7 - vyznačeny i jednotlivé signály dle níže uvedených schémat.)

    <p>Další analýzu mi naštěstí velice ulehčil sám autor čipů ing. Vladimír Áč, když pro spolek Herní historie naskenoval původní vývojová schémata (ještě pod pracovním označením MAS600). Jedná se o původně neveřejnou pracovní verzi, od které tedy nemůžeme čekat stoprocentní přesnost, poskytuje však zajímavý obrázek o funkci i vývoji čipů. Pro názornost jsem do obrázků červeně doplnil drobné poznámky a upřesnění dle skutečného stavu, z nichž některé vysvětlím až v závěrečném článku této minisérie.

    <p>V dalším textu se tedy již přidržíme originální dokumentace, přičemž se pokusím být laskavému čtenáři průvodcem po uvedených schématech. Hned zkraje si ovšem musíme objasnit poměrně nezvyklou definici logických úrovní: Vzhledem k napájecímu napětí -18V je sice v katalogu logická úroveň "L" uváděna jako záporné napětí, zatímco "H" odpovídá potenciálu země, použitá logika ovšem chápe přítomnost napětí (byť záporného) jako jedničku, takže jde vlastně o jistý druh negativní logiky. Nechtěl jsem originální dokumentaci nějak přepisovat, takže si zapamatujme: -18V = úroveň "L" = logická "1"(!), Zem = úroveň "H" = logická "0". Také logické funkce byly ve schématech označeny jinak, než jsme dnes zvyklí - řeckými písmeny Σ (OR) a Π (AND). Protože značení některých signálů a jejich polarit není ani potom zcela zřejmé, připravil jsem navíc i malý rejstřík signálů a jejich významů (příloha).

    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/08-blokove-schema-MAS601.jpg">
        <cite>Obr. 8: Blokové schéma MAS601 (ing. Vladimír Áč, doplněno)</cite>
    </div>

    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/09-nakresy-her.jpg">
        <cite>Obr. 9: Nákresy her (ing. Vladimír Áč)</cite>
    </div>

    <p>Takto připraveni se již můžeme bez obav vrhnout do hlubin MAS601. Dobrým začátkem bude původní blokové schéma celého obvodu (obr. 8), které dosti přesně odráží i skutečné uspořádání čipu. Základem celého systému je kaskáda čítačů označených A-E, které počítají periody hodinového signálu 875kHz, a tím vlastně i polohu právě zobrazovaného místa na televizní obrazovce (na vstupu je navíc ještě zakreslen původně plánovaný taktovací generátor). Použity jsou čítače různého typu. A a B jsou dynamické posuvné registry s 8 resp. 7 stupni, které počítají pixely ve vodorovném směru posouváním jediného aktivního bitu přes jednotlivé pozice, C je klasický tříbitový binární čítač, který počítá do 8 televizních řádků (což je výška jednoho pixelu v motivu hry) a prodloužením o další 2 bity poskytuje i kmitočty asi 1kHz a 500Hz pro zvuk. D je opět posuvný registr (tentokrát ovšem statický) s 5 stupni pro 5 pixelů nad sebou (což je šikovné zejména při zobrazení skóre), a nakonec E v podobě tříbitového binárního čítače pokrývá počtem 8 takových pixelových skupin celou výšku obrazovky. Na konci celé kaskády pak máme snímkový kmitočet přibližně 50Hz.

    <p>Podíváme-li se znovu na známé nákresy jednotlivých her (obr. 9), můžeme na okraji vidět měřítko přesně odpovídající této vnitřní struktuře: Čísla na vodorovné ose odpovídají výstupům čítače B, jemnější dělení jsou stupně čítače A, čísla ve svislém směru odpovídají čítači E, jemnější dílky pak D (a jejich velikost je určena čítačem C, který dává i půlpixelové otvory v síti). Na nákresech jsou také pojmenovány jednotlivé části zobrazeného motivu, včetně řádkových a snímkových synchronizačních impulsů.

    <p>Nabízí se otázka proč tolik čítačů, proč posuvné registry, proč tady dynamické a tam zas statické. Při bližším pohledu na celou strukturu jde ale z hlediska optimalizace o pochopitelnou volbu. Dosti úsporně a bez dodatečné logiky se zde dosahuje potřebných nekulatých dělících poměrů (56 hodinových cyklů na řádek a 320 řádků na snímek, což se mimochodem úplně nekryje s 312/313 řádky dle televizní normy, analogovým televizorům to ale nevadilo). Výstupy posuvných registrů přitom již prakticky nepotřebují další dekodéry - pro výběr horizontální pozice je třeba zkombinovat nejvýše dva signály z čítačů B+A (skupina a jemný dílek), vertikálně pak obdobně 4 signály z čítačů E+D. Binární čítače jsou použity jen v místech, kde to vede k úspoře místa na čipu. Statické verze čítačů jsou založeny na klopných obvodech s dvojicemi tranzistorů, což je nezbytné pro práci s nízkými kmitočty, naopak dynamická verze založená na chvilkovém podržení informace v podobě náboje kondenzátoru (tvořeného plochou hradla jediného tranzistoru) je výrazně jednodušší, a vlastně i rychlejší - to se hodí především u čítačů A a B, kde se pracuje s nejkratšími impulsy. Právě zde, a také na dalších místech, kudy nejkratší impulsy procházejí, najdeme i modifikované zapojení prvků pull-down pro lepší přenos vysokých kmitočtů - tyto úpravy prozrazují, jak byl vlastně kmitočet 875kHz na tehdejší technologii vysoký.

    <p>Tady se mimoděk dotýkáme otázek ze závěru minulého článku. Architektura celého systému dává mnohem větší smysl, jakmile si uvědomíme limity Tesly v sedmdesátých letech, kdy výroba unipolárních integrovaných obvodů teprve začínala. Zde použitá technologie MNOS stála někde u jejích začátků, byla původně zvolena především kvůli spolehlivosti při ne zcela ideální čistotě výroby, a v době vzniku MAS60x byla ještě prakticky jedinou volbou. Pro starší aplikace např. v ovládání televizorů (MAS560 atd.) se hodila dobře, ani poměrně velké záporné napájecí napětí nijak nevadilo, pro televizní hru však přece jen už byla určitým limitem rychlost (podle slov ing. Áče byl mezní kmitočet jen několik MHz). Hodinový kmitočet 875kHz použitý pro MAS601 poskytuje ve vodorovném směru rozlišení 39 pixelů, které by pro digitálně řešený pohyb míče zřejmě nebylo dostatečné. Uvážím-li navíc rozsah logiky potřebné pro takové řešení, a také velikost čipu, který jako by na úvodním obrázku již přetékal z podložky v pouzdře, nedivím se, že v části systému prozatím převážily výhody řešení typického pro starší analogové hry. S několika vnějšími součástkami a mnohem jednodušším obvodem se tak dosahuje skutečně plynulého, libovolně nastavitelného pohybu.

    <p>Podobné jsou i důvody k rozdělení systému na tři čipy. Tesla tehdy neuměla vyrobit pouzdra s více než 16 vývody, což by snad mohlo stačit pro plně digitální hru, zvolené kombinované řešení však muselo být právě kvůli obsazení pinů rozděleno. Má to pochopitelně i své nevýhody, zejména že obvod MAS601 nemá téměř vůbec pod kontrolou polohu míče, z čehož plynou některá netypická řešení při startu hry a návratu míče na hřiště po gólu.

    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/10-logika-hry.jpg">
        <cite>Obr. 10: Logika hry na schématech (původně ing. Vladimír Áč, výběr s doplněním)</cite>
    </div>

    <p>Vraťme se však k vnitřní struktuře obvodu MAS601. Na obrázek 10 jsem z původní dokumentace vybral obvody, které tvoří jádro samotné hry. Na čipu tyto obvody najdeme vpravo od středu v dolní i horní části, a také částečně u pravého okraje. V levé horní části obrázku 10 tak můžeme vidět, jak v závislosti na zvolené hře (signály A+B, při fotbalu také C) a horizontální pozici, dané výstupy z čítačů A a B, vzniká obrazový signál jednotlivých prvků. Oba hráči (LHV/PHV) mají výšku omezenou signálem z MAS603 (LH/PH), při fotbalu se opakují na dvou místech, pravý hráč se objeví pouze při hrách pro dva. Postranní mantinely (LMV/PMV) jsou při fotbalu přerušené otvorem branek dle signálu K, při hrách pro jednoho se pravý zobrazuje vždy, zatímco středová síť (SCV) je zobrazena mimo Peloty vždy, přerušovaná signálem CO. Tyto signály jsou, spolu s horní/dolní krajovou čárou (HC/DC) a zobrazením míče (ZL) na levé straně schématu sloučeny do videosignálu hry (VH).

    <p>Více vpravo vznikají ještě další, neviditelné signály: Levá a pravá "gólová čára" (LC/PC) na hranici hřiště, informace o průchodu míče středovou sítí (LS), horizontální synchronizace pro televizor (SR) a zatemnění herního motivu v jejím okolí (MOH). Jednoduchým přidáním signálu konce hry (KH) je toto zatemnění použito i k vytvoření efektu ukončené hry, přičemž se zároveň vypíná alespoň levá gólová čára, aby míč nemohl skrytě střílet další góly (o tom ještě i příště). O něco níže jsou také připraveny pomocné signály pro detekci kolizí - souhrn levých a pravých překážek pro odraz míče (LMH/SS), aktivní síť mimo fotbalu (SV), a modifikace zvuku při odrazu od hráče (ZVO).

    <p>Obvody v levé dolní části obrázku řeší chování míče, jehož videosignál (L) je přiveden z obvodu MAS602. Trojice hradel nalevo detekuje souběh signálu (kolizi) míče s levými či pravými překážkami, a také vůči středové síti - tam ovšem jen s omezenou pravděpodobností, když síť (sama o sobě již děravá) je ještě znovu proděravěna přidáním signálu 1k. Signál CV při fotbalu potlačuje v začátku hry odrazy i zobrazení (ZL) míče, dokud je na obrazovce skóre (SKR) - tato podmínka má obecně význam pozastavené hry, a protože skóre zhasíná až při průchodu míče sítí, vzniká vlastně při fotbalu efekt výkopu ze středu hřiště.

    <p>Vlevo dole vidíme dvě hradla, která dávají pokyn ke změně vertikálního směru míče (SLS) při jeho kontaktu s překážkami (ODLL) nebo sítí, a klopný obvod s výstupem horizontálního směru míče (HPL), který se překlápí přímo odrazem od levých či pravých překážek (díky tomuto rozlišení nemůže dojít k odrazu míče od zadní strany pálky či vnějšku mantinelu, může však být ovlivněna jeho dráha). Více vpravo se detekují góly, neboli doteky míče (L) s neviditelnými gólovými čárami (LC/PC). Každá strana má svůj klopný obvod aktivovaný gólem, jehož výstupy (SL/SP) vedou do čítačů skóre (v navzájem inverzních dvojicích, kvůli vnitřnímu zapojení čítačů), a jsou vynulovány až při průchodu míče středovou sítí po znovuzahájení hry - díky tomuto přidržení se nemůže nikdy gól započítat opakovaně, i pokud se míč gólové čáry dotýká po dobu více televizních snímků, nebo při návratu na hřiště. Stav po gólu (na kterékoliv straně) také zapíná zobrazení skóre (SKR) a povoluje nové podání míče - tedy překlopení jeho směru zpět od příslušné strany hřiště vstupem AS, pokud tedy není hra ještě ukončena (KH). (Ke zrušené části obvodu se vrátím až příště.)

    <p>Pravá horní část obrázku ukazuje tvorbu vodorovných čar, resp. zpracování informace o vertikální pozici na obrazovce z čítačů D a E. Vzniká zde tedy vertikální synchronizace pro televizor (SO) a zatemnění obrazu (MOV) mezi spodní hranicí hřiště (HO) a horním mantinelem (HC) v novém snímku, při fotbalu (C) se tvoří otvory fotbalových branek (K) pomocí klopného obvodu překlápěného na horním a spodním (PO/LO) okraji branky, dále mantinely na horní a spodní straně hřiště (HC/DC), a řádek pro zobrazení skóre (SR).

    <p>Hradla uprostřed detekují kontakt míče (L) s horním či dolním mantinelem, aby po přidání již hotového signálu SLS vznikl při odrazu od hráče či čáry pokyn (OHC) ke zvukovému efektu. Vpravo pak máme klopný obvod typu D, který řídí vertikální směr míče (VPL). Ten je přímo nastavován či nulován odrazy míče (L) od horního či spodního mantinelu (HC/DC), v případě odrazů od svislých překážek (SLS) pak přijímá směr připravený hradly vpravo nahoře: Při fotbalu (C) závisí odraz na poloze míče v horní či spodní polovině hřiště (podle výstupu čítače řádků EC), v ostatních případech je řízen náhodou, kterou zastupuje signál asi 4kHz (C1).

    <p>Automatické podání míče řídí obvod v pravém dolním rohu obrázku. Klopné obvody KO5+KO6 jsou během hry (signál SKR ve stavu L) trvale nulovány, po gólu však registrují změny svislého směru míče (OH). Po zaznamenání obou hran (vzestupné i sestupné, tedy odraz míče na horní i spodní straně hřiště) přejde signál AS (přes "tranzistorový odpor") do stavu H a míč se vrací na hřiště. To ovšem platí jen při odpojeném pinu 10, přes který lze signál AS přímo ovládat i vnějším obvodem.

    <p>Pod polovinou pravé části obrázku najdeme obvod zvuku. Obvody KO1+KO2 tvoří posuvný registr se dvěma stupni, krokovaný v rytmu asi 20ms. Odraz míče (OHC) vloží do prvního stupně jedničkový bit, který až posunutím do druhého stupně zapne přes výstup /Q zvukový efekt - jeho délka je tak bez ohledu na herní situaci vždy stejná. Výšku tónu přepíná klopný obvod vlevo dole, který se při odrazu od pálky (signály ZVO+OHC) překlápí do varianty 1kHz (HR), po skončení zvuku se pak (výstupem z posuvného registru) nuluje vždy do výchozí varianty 500Hz (M).

    <p>U spodního okraje obrázku najdeme ještě výstupní obvod videosignálu (M). Jak vidíme, existují zde dvě samostatné cesty pro zobrazení skóre a obrazce hry, každá s vlastním výstupním tranzistorem (takže by za jistých okolností mohl být míč hypoteticky při přeletu přes číslice skóre odlišen jasnější bílou barvou, což mi však nepřipadá moc reálné). Vidíme také, jak je v úsporně navržené logice MAS601 řešeno odstranění nežádoucích částí obrazu centrálně na jediném místě: Videosignál hry (VH) je mimo hřiště zhasínán zatemňovacími signály MOH/MOV, zobrazení skóre (MC) je aktivní pouze v příslušných dvou místech (B3/B4) správného řádku (SR), a jen při zastavené hře (SKR).

    <div class="picture-cite">
        <p><img src="/photos/pong/blog-post-2/11-zobrazovani-skore.jpg">
        <cite>Obr. 11: Zobrazování skóre (původně ing. Vladimír Áč, výběr s doplněním)</cite>
    </div>

    <p>Tím jsme již prošli prakticky celou hru, takže zbývá jen počítání a zobrazování skóre - to najdeme na obrázku 11. Vlevo nahoře vidíme dva čtyřbitové čítače pro skóre obou hráčů, nulované při startu hry (nulování skutečně jen maže skóre, žádná další část čipu nulovat nepotřebuje). Nenechme se zmást připojením levého signálu (SL) k pravému čítači a naopak, jde prostě jen o to, že gól na levé straně znamená bod pro pravého hráče a naopak. První řada tranzistorů pod čítači tvoří logické hradlo, které vyhodnocuje konec hry: Jakmile některý čítač dosáhne 15 bodů (binárně samé jedničky), nebude sepnutý žádný z příslušných čtyř tranzistorů, čímž se signál KH odpojí od země, a díky pull-downu ohlásí záporným napětím konec hry. Další dvě řady tranzistorů tvoří multiplexer, který v závislosti na právě vykreslovaném místě obrazovky (B4) pouští do další části střídavě oba údaje, aby se stejnými obvody zobrazilo levé i pravé skóre.

    <p>Zbytek levé části obrázku tvoří dekodér, který na základě binárního údaje skóre spouští zobrazení jednotlivých číslic. Do sloupců jsou všechny bity přivedeny přímo i v inverzi, přičemž v každém řádku jsou čtyři tranzistory uspořádané tak, aby zůstaly všechny zavřené jen v jediné správné kombinaci vstupních signálů - pak se na výstupu příslušného řádku objeví záporné napětí. V našem případě je ovšem dekodér chytře optimalizovaný tím, že jsou řádky reprezentující stejnou koncovou číslici (například 14 a 4) zřetězeny, takže reagují na dvě binární kombinace jediným výstupem. Dodatečná jednička reprezentující desítku se rozeznává zvlášť v posledních dvou řádcích (zapojených odlišně). Dekodér bohužel nebyl v této pracovní verzi nakreslen úplně přehledně, pro názornost jsem tedy zdánlivě stejná kolečka červeně odlišil a šipkami vlevo zdůraznil výstupy, které pokračují do druhé části obrázku.

    <p>Tam horní část tvoří paměť ROM s fontem, kde každý řádek odpovídá jedné číslici a obsahuje tři skupiny pixelů pro tři sloupce fontu, každý v pořadí zdola nahoru. Stav svislých vodičů (podle sepnutí tranzistorů v právě aktivním řádku) tedy odpovídá všem pixelům číslice, z nichž multiplexery v dolní části podle právě zobrazované pozice na obrazovce vybírají nejdřív příslušný řádek (podle stavu čítače D), a následně dole i sloupec (podle čítače A). Při signálu A3 se zobrazují desítky přímo z dekodéru (přidaná jednička nemá žádný font, jde jen o plný sloupec), signál A4 nezobrazuje nic - to je mezera mezi číslicemi. Výstupní signál MC takto vlastně pomyslně maluje stále se opakující čísla po celé ploše obrazovky, pouze dvě z nich jsou však výstupním obvodem modulace propuštěny do televizoru.

    <p>I v závěru tohoto až nepříjemně dlouhého článku zůstává několik otázek. Při své dobrodružné cestě po čipu MAS601 jsem našel stopy několika změn, které jsem sice na obrázcích červeně označil, ale prozatím blíže neobjasnil. Nabízí se také srovnání silných i slabších stránek Piešťanské hry s obdobným čipem západního původu, kterým je samozřejmě celosvětově dominantní typ AY-3-8500. Těmto otázkám se tedy bude věnovat můj příští, závěrečný článek.

    <h4>Příloha:</h4>

    <p>Seznam signálů na čipu MAS601 a na všech vývodech. Značení je dle původní dokumentace, proto jsou některé názvy ponechány i duplicitní, či vlivem překlepů nejednotné. Čísla stránek se vztahují k původní naskenované dokumentaci, která byla zdrojem.

<table>
  <caption>Tabulka signálů</caption>
  <thead>
    <tr>
      <th>Signál(y)</th>
      <th>Stránka</th>
      <th>Aktivní v</th>
      <th>Funkce</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0-9</td><td>7, 6</td><td>L</td><td>Číslice při zobrazení skóre</td></tr>
    <tr><td>/10</td><td>7, 6</td><td>H</td><td>Desítka při zobrazení skóre</td></tr>
    <tr><td>10-15</td><td>6</td><td>L</td><td>Lokálně pomocné řádky dekodéru pro číslice nad 10</td></tr>
    <tr><td>1k</td><td>8</td><td>L</td><td>Signál 976.6Hz pro zvuk</td></tr>
    <tr><td>500</td><td>8</td><td>L</td><td>Signál 488.3Hz pro zvuk</td></tr>
    <tr><td>7V</td><td>8</td><td>L</td><td>Signál zvuku do výstupního budiče</td></tr>
    <tr><td>A, B</td><td>1, 4</td><td>L</td><td>Volba hry HH=Pelota, HL=Trénink tenis, LH=Tenis, LL=Fotbal (piny 3+4)</td></tr>
    <tr><td>/A,/B</td><td>4</td><td>H</td><td>(negace: LL=Pelota, LH=Trénink tenis, HL=Tenis, HH=Fotbal)</td></tr>
    <tr><td>A, B, C, D</td><td>6</td><td>L=1</td><td>Právě zobrazované skóre (4 bity, střídavě levé a pravé)</td></tr>
    <tr><td>A0-A7</td><td>2, 4, 7</td><td>H</td><td>Výstupy čítače (posuvného registru) A - pixelové sloupce (8 fází v cyklu 109.375kHz)</td></tr>
    <tr><td>AF1, AF2</td><td>2</td><td>H-&gt;L,L-&gt;H</td><td>Hodiny čítače (posuvného registru) A, v protifázi</td></tr>
    <tr><td>AS (=S)</td><td>1, 8</td><td>H=serv</td><td>Vstup/výstup automatického servisu (pin 10)</td></tr>
    <tr><td>B0-B6</td><td>2,4,6,7</td><td>H</td><td>Výstupy čítače (posuvného registru) B - skupiny po 8 pixelových sloupcích (7 fází v cyklu 15.625kHz)</td></tr>
    <tr><td>C</td><td>4, 5</td><td>L</td><td>Zvolen Fotbal (odvozeno z A+B pro zobrazení branek a jiné odrazy míče)</td></tr>
    <tr><td>C1</td><td>3, 5</td><td>H</td><td>Výstup čítače C (3.906kHz) jako 1-bit generátor náhody</td></tr>
    <tr><td>CG</td><td>9, 11</td><td>analog</td><td>Časovací kondenzátor hodin (MAS603)</td></tr>
    <tr><td>CH, CV, CL, CP</td><td>9, 10, 11</td><td>analog</td><td>Kondenzátory polohy zobrazení míče a hráčů (MAS602, MAS603)</td></tr>
    <tr><td>CO</td><td>1,3,4,5,8</td><td>L</td><td>Výstup čítače C (1.953kHz), 8 TV řádků na pixel (pro čítač D)</td></tr>
    <tr><td>CV</td><td>4</td><td>L</td><td>Vypnutí zobrazení míče a jeho odrazů před prvním dosažením středu ve Fotbalu</td></tr>
    <tr><td>D0 - D4</td><td>1, 3, 7</td><td>L</td><td>Výstupy čítače (posuvného registru) D - pixelové řádky (5 fází v cyklu 390.625Hz)</td></tr>
    <tr><td>/D0-/D4</td><td>3, 5</td><td>H</td><td>(negace)</td></tr>
    <tr><td>D, H</td><td>5</td><td>L</td><td>Lokálně vstup a hodiny klopného obvodu D</td></tr>
    <tr><td>DC</td><td>4, 5</td><td>L</td><td>Videosignál dolní čáry (mantinelu)</td></tr>
    <tr><td>EA, EB, EC</td><td>1,3,5,8</td><td>L</td><td>Výstupy čítače E (skupiny po 5 pixelových řádcích, celý cyklus = snímek 48.83Hz)</td></tr>
    <tr><td>/EA,/EB,/EC</td><td>3, 5, 8</td><td>H</td><td>(negace)</td></tr>
    <tr><td>HC</td><td>4, 5</td><td>L</td><td>Videosignál horní čáry (mantinelu)</td></tr>
    <tr><td>HO</td><td>5</td><td>L</td><td>Začátek zatemnění kolem snímkové synchronizace</td></tr>
    <tr><td>HPL</td><td>1, 4, 10</td><td>L=vlevo</td><td>Směr míče vodorovně, výstup pro MAS602 (pin 7)</td></tr>
    <tr><td>HR</td><td>8</td><td>L</td><td>Zvuk odrazu od hráče</td></tr>
    <tr><td>I, O</td><td>2, 3, 8</td><td>L</td><td>Lokálně vstupy/výstupy posuvných registrů</td></tr>
    <tr><td>IIH, IIV</td><td>9, 10</td><td>analog</td><td>Vstupy integrátorů míče (MAS602)</td></tr>
    <tr><td>IL, IP</td><td>9, 11</td><td>analog</td><td>Řídící napětí polohy hráčů (MAS603)</td></tr>
    <tr><td>IV</td><td>8</td><td>L</td><td>Vstup posuvného registru časování zvuku (vyřazený uzemněním)</td></tr>
    <tr><td>K</td><td>4, 5</td><td>H</td><td>Modifikace bočních mantinelů pro Fotbal (brankové otvory)</td></tr>
    <tr><td>KH</td><td>4, 6</td><td>L</td><td>Konec hry (po dosažení skóre 15 bodů)</td></tr>
    <tr><td>L</td><td>1,4,9,10</td><td>L</td><td>"Lopta", signál míče z MAS602 (pin 11)</td></tr>
    <tr><td>/L</td><td>4, 5</td><td>H</td><td>(negace)</td></tr>
    <tr><td>LL</td><td>4</td><td>L</td><td>Odraz míče od levé strany</td></tr>
    <tr><td>LC</td><td>4</td><td>L</td><td>Levá gólová čára (neviditelná)</td></tr>
    <tr><td>LH</td><td>1,4,9,11</td><td>L</td><td>Signál levého hráče z MAS603 (pin 5)</td></tr>
    <tr><td>LHV</td><td>4</td><td>L</td><td>Videosignál levého hráče</td></tr>
    <tr><td>LMH (=LHM)</td><td>4</td><td>H</td><td>Levý mantinel či hráč (pro odrazy míče vpravo)</td></tr>
    <tr><td>LMV</td><td>4</td><td>L</td><td>Videosignál levého mantinelu</td></tr>
    <tr><td>LO</td><td>5</td><td>L</td><td>Konec brankového otvoru v bočním mantinelu</td></tr>
    <tr><td>LS</td><td>4</td><td>L</td><td>Míč prochází středovou čárou či sítí (i pokud není zobrazena)</td></tr>
    <tr><td>M</td><td>1, 7</td><td>L=svítí</td><td>Výstup videosignálu (bez synchronizace) (pin 14)</td></tr>
    <tr><td>M</td><td>8</td><td>L</td><td>Zvuk odrazu od mantinelu (a zrušené píšťalky)</td></tr>
    <tr><td>MC</td><td>7</td><td>H</td><td>Předběžný signál (modulace) číslic skóre</td></tr>
    <tr><td>MCC</td><td>7</td><td>L=svítí</td><td>Hotový příspěvek číslic do videosignálu (včetně zhasínání atd.)</td></tr>
    <tr><td>MOH</td><td>7</td><td>L=svítí</td><td>Hotový příspěvek hry do videosignálu (včetně zatemnění)</td></tr>
    <tr><td>MOH</td><td>4, 7</td><td>L=zhas.</td><td>Zatemnění kolem řádkové synchronizace, nebo při konci hry</td></tr>
    <tr><td>MOV</td><td>5, 7</td><td>L=zhas.</td><td>Zatemnění kolem snímkové synchronizace</td></tr>
    <tr><td>N</td><td>1, 6</td><td>H=nulovat</td><td>Vstup nulování (pin 2)</td></tr>
    <tr><td>/N</td><td>6</td><td>L=nulovat</td><td>(negace)</td></tr>
    <tr><td>N</td><td>8</td><td>H/L</td><td>Lokálně nastavení/nulování klopných obvodů</td></tr>
    <tr><td>OBH, OBV</td><td>9, 10</td><td>analog</td><td>Omezení rychlosti míče (MAS602)</td></tr>
    <tr><td>OH</td><td>5, 8</td><td>L=dolů</td><td>Aktuální směr míče vertikálně</td></tr>
    <tr><td>OHC</td><td>5, 8</td><td>H</td><td>Odraz míče (všechny druhy)</td></tr>
    <tr><td>OIH, OIV</td><td>9, 10</td><td>analog</td><td>Výstupy integrátorů míče (MAS602)</td></tr>
    <tr><td>OD</td><td>4</td><td>L</td><td>Odraz míče od pravé strany</td></tr>
    <tr><td>ODLL</td><td>4</td><td>H</td><td>Odraz míče od levé nebo pravé strany</td></tr>
    <tr><td>PB</td><td>2</td><td>H-&gt;L</td><td>Vstup čítače (posuvného registru) B (= výstup A7)</td></tr>
    <tr><td>PC</td><td>4</td><td>L</td><td>Pravá gólová čára (neviditelná)</td></tr>
    <tr><td>PH</td><td>1,4,9,11</td><td>L</td><td>Signál pravého hráče z MAS603 (pin 6)</td></tr>
    <tr><td>PHV</td><td>4</td><td>L</td><td>Videosignál pravého hráče</td></tr>
    <tr><td>PMV</td><td>4</td><td>L</td><td>Videosignál pravého mantinelu</td></tr>
    <tr><td>PO</td><td>5</td><td>L</td><td>Začátek brankového otvoru v bočním mantinelu</td></tr>
    <tr><td>Q, /Q, V, /V</td><td>2,3,5,8</td><td>L/H</td><td>Lokálně výstupy klopných obvodů</td></tr>
    <tr><td>Q3, Q4</td><td>8</td><td>L</td><td>Lokálně výstupy registrující odrazy míče nahoře/dole</td></tr>
    <tr><td>RLH,RLV,RHL,RHP</td><td>9, 10, 11</td><td>analog</td><td>Kondenzátory rozměru míče a hráčů (MAS602, MAS603)</td></tr>
    <tr><td>SCV</td><td>4</td><td>L</td><td>Videosignál sítě či středové čáry</td></tr>
    <tr><td>SKR (=SKO)</td><td>4, 7, 8</td><td>H</td><td>Zapnout zobrazení skóre</td></tr>
    <tr><td>SL, /SL</td><td>4, 6</td><td>L/H</td><td>Zvýšit skóre po gólu vlevo</td></tr>
    <tr><td>SLS</td><td>4, 5</td><td>L</td><td>Změna směru míče svisle</td></tr>
    <tr><td>SO (=SO1, SO2)</td><td>1,5,9,10,11</td><td>H</td><td>Snímkové synchronizační pulsy - výstup (pin 13, propojení MAS602, MAS603)</td></tr>
    <tr><td>SOV</td><td>5</td><td>L</td><td>Snímkové synchronizační pulsy</td></tr>
    <tr><td>SP, /SP</td><td>4, 6</td><td>L/H</td><td>Zvýšit skóre po gólu vpravo</td></tr>
    <tr><td>SR</td><td>5, 7</td><td>H=správný</td><td>Řádek pro zobrazení skóre (předvýběr oblasti vertikálně)</td></tr>
    <tr><td>SR</td><td>1,4,9,10</td><td>H</td><td>Řádkové synchronizační pulsy - výstup (pin 1)</td></tr>
    <tr><td>SRV</td><td>4</td><td>H</td><td>Řádkové synchronizační pulsy</td></tr>
    <tr><td>SS</td><td>4</td><td>H</td><td>Pravý mantinel či hráč (pro odrazy míče vpravo)</td></tr>
    <tr><td>SV</td><td>2, 3</td><td>L</td><td>Lokálně zpětná vazba posuvného registru (restart kruhového čítače)</td></tr>
    <tr><td>SV</td><td>4</td><td>H</td><td>Síť (nikoliv fotbalová čára) pro ovlivnění dráhy míče</td></tr>
    <tr><td>SYN (=STN)</td><td>9, 10</td><td>H</td><td>Sloučený výstup synchronizace (MAS602, "STN" je zkomolenina)</td></tr>
    <tr><td>T,/T,F1,F2,Φ1,Φ2</td><td>2, 3, 8</td><td>L/H</td><td>Lokálně hodinové vstupy klopných obvodů</td></tr>
    <tr><td>T</td><td>1,2,9,11</td><td>H-&gt;L</td><td>Vstup hodinového kmitočtu 875kHz (pin 16, propojení z MAS603)</td></tr>
    <tr><td>-UG</td><td>9, 11</td><td>analog</td><td>Zrušeno: Bývalé řídící napětí oscilátoru (MAS603)</td></tr>
    <tr><td>V, /V</td><td></td><td></td><td>(viz Q, /Q)</td></tr>
    <tr><td>VH</td><td>1, 4, 7</td><td>H=svítí</td><td>Videosignál hry (vše mimo skóre)</td></tr>
    <tr><td>VPL</td><td>1, 5, 10</td><td>L=nahoru</td><td>Směr míče svisle, výstup pro MAS602 (pin 12)</td></tr>
    <tr><td>ZL</td><td>4</td><td>L</td><td>Videosignál míče (včetně zhasínání při Fotbalu)</td></tr>
    <tr><td>ZV (=ZVUK)</td><td>1, 8</td><td>H</td><td>Výstup zvuku (pin 9)</td></tr>
    <tr><td>ZVO</td><td>4, 8</td><td>H</td><td>Levý či pravý hráč (jiný zvuk odrazu)</td></tr>
  </tbody>
</table>
<p>
<h4>Zdroje:</h4>
<ul><li>Sean Riddle: Fotodokumentace čipů MAS601-603 (online na https://seanriddle.com/tesla/)
<li>Ing. Vladimír Áč: Technická dokumentace MAS600/601-603 (nepublikovaná pracovní verze, asi 1977-1978)
<li>Ing. Vladimír Áč: Rozhovor pro spolek Herní historie (2025)
<li>Sada integrovaných obvodů ke konstrukci televizních her MAS601, MAS602, MAS603 (Technické zprávy, Tesla Rožnov, 1979)
<li>Videozáznam hry (online na https://www.youtube.com/watch?v=80nm31Uwf0g)</ul>
</BlogPostPage>