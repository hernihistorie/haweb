<script lang="ts">
    /* https://docs.google.com/document/d/1EUv8mepuz5gsXFP4tlrr3iypy-hDEpUN/edit */
	import InterviewPage from "$lib/components/InterviewPage.svelte";
	import Answer from "$lib/components/interviews/Answer.svelte"
	import Question from "$lib/components/interviews/Question.svelte";
	import Chapter from "$lib/components/interviews/Chapter.svelte";
    import Loc from "$lib/components/Loc.svelte";

    import { data, FS, JS } from "./interview";
    import PageLang from "$lib/components/PageLang.svelte";

    let A = Answer;
    let Q = Question;
</script>

<PageLang cs en />

<InterviewPage data={data}>
    {#snippet content()}
        <Loc>
            {#snippet cs()}
                <A speaker={FS}>
                    Mně to Spectrum poslal Tigrid – nějakou cestou, kterou ani teď už ani neumím popsat. Určitě bylo pašovaný z Francie. Anténa měl taky jedno. Ten si na to vydělal na brigádě. Byly to to tehdy neuvěřitelný peníze, asi 11 tisíc. To byl docela balík. Ale kupodivu to udělalo docela hodně lidí. Znal jsem ještě z Chomutova Koulu, ten měl ten samý počítač. Najednou se začali objevovat lidi, kteří s tím pracujou a kteří to mají. Tak nás pak napadlo, že by to mohla být budoucnost samizdatu. Asi by bylo, kdyby nedošlo k revoluci. Asi by došlo k tomu, že by samizdaty stěhovaly na počítače. Je to neskonale jednodušší přehrávat textové soubory a kopírovat je počítačem než to přepisovat. Kopírky tehdy vůbec nebyly. Když jo, tak to byl Rank Xerox, a ty byly pro normálního člověka naprosto nedostupné, a navíc byla každá kopie strašně drahá. A4 stála asi 5 Kčs. Výrobní družstvo <em>Fotografia</em> je mělo, ale bylo jich v Praze nesmírně málo. Mohlo se tam přijít a kopírovat, ale stálo to 10 Kčs. Já jsem naštěstí mál známou holku na Smíchově, kde byl obchod Fotokino, kde kopírku měli. Tam byla Viorika, naše známá, a ta nám tam občas něco udělala. Ona taky všechno nemohla, mohla to dělat jenom, když tam byla sama, a hlavně musela našetřit tu kazetu, aby ji pak nechytli, že má málo zaplacených kopií.
                </A>

                <Q speaker={JS}>
                    Jaké další technologie jste používali?
                </Q>

                <A speaker={FS}>
                    Samizdat začínal kopírákem. My jsme ale hlavně chtěli dělat časopis, protože jsme potřebovali, aby to bylo pro cílovou skupinu, která to bude pravidelně odbírat a číst a zároveň na to reagovat. Klasický samizdat stál na řetězové reakci. Někdo rozepsal desetkrát, někomu to dal a někdo z těch deseti nebo několik z nich se chytilo. Ještě to mělo tu výhodu, že se tím tříbila kvalita té knihy. Nikdo nepsal něco, co mi připadalo jako blbost. Vždycky přepisoval jenom to, co se mu líbilo a co považoval za vlastní. Já jsem se samizdatem žil 15 let a nejčastěji rozmnožovaný román byl <em>1984</em> od Orwella. Tam byly vidět všechny ty techniky, které byly použitelné. Nad psací stroj potom nastupovaly rozmnoženiny na takzvaném OC („ócečko“). Na tom se dělaly stavební plány. Ta matrice byla na pauzáku. Z toho potom na tom ócéčku dělali kopie plánů. Já si pamatuju, že když jsem dělal v Metrostavu geodeta, všechno jsme měli na těchto ócéčkách. Bylo to takové fialové. Papír byl speciální a napařovalo se. On se osvítil skrz ten pauzák a tam, kde byla černá, nezareagoval, a chytily se tam čpavkové páry, ve kterých se to vyvolávalo. Ono to hrozně smrdělo. Když bylo třeba takhle kopírovat text, tak se udělaly A4ky průklepáku, daly se do psacího stroje, a jednak se protlačili tím strojem, ale aby byly ještě černější, tak se dal ještě černý kopírák proti papíru, aby byl papír černý z obou stran. Seshora vám to udělala páska a zezadu to tam napral kopírák. Takhle jsem viděl i toho Orwella. K tomu jsem ale nikdy nepřičichl, protože to mohl dělat jenom někdo, kdo to měl v práci. To bylo v různých stavebních firmách, ale já jsem na to nikdo nedosáhl.
                    <p>První stroj, který jsme měli, byl hektograf Ormig. Tam se také dává jakoby kopírák proti, napíše se to – lepší je to psát bez pásky, aby ty litery tam dobře sedly, protože páska je přece jenom takový nárazník. Ten hektografický kopírák je potažený takovou mastnou, hustou barvou, a nechá tam takovou stopu na tom křídovém papíru. Na křídovém papíru je matrice, která se pak upevní do toho stroje a točí se na válci. Než se to pustí, tak je tam filc a ten je trochu nacucnutý lihem. Přes něj projde přírodní papír, takže je na něm film lihu, tím trochu rozpustí barvu na matrici, která je obvykle fialová. Byly i černé, ale ty byly jenom v zahraničí.
                    <p>Nejdůležitější pro nás byla blána cyklostylová. Nejpodstatnější je na ní tenhle list – tkanina napuštěná voskem. Dávalo se to takhle do psacího stroje a bez pásky se do toho psalo. Litery pak ten vosk z té tkaniny vymlátily. Takže tam zůstala díra v podobě toho písmene. Ono se na tom špatně psalo, takže se za to dával ještě kopírák a list, na kterém to bylo napsáno, aby se mohly dělat korektury. Když bylo třeba udělat opravu, tak se ty dírky musely zalakovat a vypíchat jehlou, aby bylo nové písmeno. Tohle se všechno odstranilo a do toho stroje se dala ta blána. Tam se posílala barva dovnitř stroje, tam se točil válec proti válci a dal se tam regulovat přítlak válců. Válec protlačoval dírkama v podobě těch písmen barvu. Tam je tenhleten přírodní, porézní papír, který tu barvu dobře nacucnul.
                    <p>Počty byly z hektografu tak 120 kusů maximálně, protože barva na té matrici ubývala. Cyklostyl měl taky svoji životnost. Blána se deformovala, pak už trhala. Z cyklostylu se dalo udělat maximálně tak 500 kusů. 
                </A>

                <Q speaker={JS}>
                    Jak to začalo s počítači?
                </Q>

                <A speaker={FS}>
                    My jsme věděli, že se k nim připojují jehličkové tiskárny. První nás napadlo, že do té devítijehličkové tiskárny dáme blánu pro cyklostyl. Že místo liter, které do toho mlátí na psacím stroji, do toho budou mlátit ty jehličky a udělají ty dírky. Akorát ten odpadní vosk tu tiskárnu vždycky trochu zasral. My jsme ji měli půjčenou od Ivana Havla a jednou na nás byl hodně naštvaný, že jsme mu ji zaneřádili. 
                </A>

                <Q speaker={JS}>
                    Byly ty tiskárny vzácné?
                </Q>

                <A speaker={FS}>
                    To tu neexistovalo, to si člověk musel přivézt ze Západu. My jsme měli tiskárnu jenom na poloviční formát – jakoby na účtenky. Když jsme něco dělali, tak jsme to museli dělat ve dvou sloupcích a potom ty blány slepit. Takže to bylo první využití.
                    <p>Ale hlavně, když měl počítač ten <i>D-Text</i>, což byl tehdy takový předobraz <i>T602</i>. Všechno bylo ve sloupcích a písmena měla takovou osmidírkovou podobu. Z toho byla celá abeceda a tak to tisklo. Takže tohleto jsme použili jako první, abychom si mohli lámat. Ono to umělo zezadu zalomit, což u psacího stroje nikdy neuděláte. S tím jsme si hodně pohráli. Potom se na tom daly dělat i větší písmena a nadpisy. Znalo to sice jenom dva druhy zvětšení, ale už to byl pokrok. Pak jsme pochopilil, že se k tomu dá i něco nakreslit, takže jsem dal výtvarníkům tu blánu, ať tam něco nakreslí. Takže jsem měli tu matrici takovou vyzáplatovanou. Měli jsme na počítači sloupce a v tom kresby. Tohle jsme udělali prvně ve <i>Vokně</i> z roku 1986 <em>(č. 11 – pozn. JŠ)</em>.
                    <p>Ve stejném roce začalo prosakovat video. Už jsme o tom předtím četli, ale ty peníze, které to stálo, byly úplně v jiných řádech, než kde jsme se pohybovali. Jakmile ale začaly Bety, tak to šlo obojí dolů. Aby se VHS udržela, tak to musela taky zlevnit. V té chvíli jsme se toho chytili a začali jsme přemýšlet, že bychom to využili. Došli jsme k tomu, že budeme dělat videomagazín. To hlavní, co nás tehdy v tom mediálním světě zajímalo, bylo, abychom mohli aspoň nějakým způsobem začít konkurovat televizi. To byl tehdy hlavní mainstreamový prostředek, který vypadal, že si s námi může dělat, co chce – byl tam obraz, zvuk. Najednou byl i nás opoziční, undergroundový magazín schopen obraz a zvuk udělat. Dokumentovat naše tajné výstavy. My jsme například v době samizdatu nebyli na ničem schopni udělat barvu. Takže výtvarníci mohli ukazovat jedině originály. Ale že by někdo viděl kopii obrazu na druhém konci republiky, to nešlo. Fotografie byly hrozně drahé, jen jednou jsme dali Slavíkovu fotografii do <i>Vokna</i> – a ještě to ani nebylo pěkný. Najednou jsme s videem byli schopni dělat barvu. Taky to přetáčení – dalo se s tím pracovat jako s magnetofonovým páskem. Dalo se v tom stříhat. Ty mašiny Beta byly uzpůsobené k tomu, aby se na nich dalo dabovat. Věděli, že přicházejí filmy ze zahraničí, tak tam byl knoflík na dabování. To jsme používali ke komentáři – byli jsme schopní stáhnout zvuk a dělat k tomu vlastní komentář. Byla to už prostě najednou studiová práce.
                </A>
                <div class="picture-cite">
                <p><img src="/photos/frantisek-starek/videomagazin_vokno.png" alt="Grafika z Videomagazínu Vokna">
                    <cite><i>Videomagazín Vokna</i></cite>
                </div>
                <Q speaker={JS}>
                    Abyste mohli stříhat, tak jste ty mašiny museli mít dvě – je to tak?
                </Q>

                <A speaker={FS}>
                    Samozřejmě. Ne že bychom je měli – museli jsme si je půjčit. My jsme měli v podstatě jednu VHSku k dispozici. Tu měl na Smíchově jeden kluk koupenou. Vždycky, když jsme to dělali, tak jsme si museli půjčit Betu a na té jsme dělali ten master. Pak jsme to na ty VHSky z té Bety roztáčeli. Roztáčení tehdy bylo spíše průběžné. Říkali jsme těm našim abonentům: Dodejte si kazetu – my nemáme peníze, abychom si koupili kazetu. My jsme těch kazet měli třeba deset. Jedna VHSka stála šest set korun a to byla třetina mého topičského platu. To byly enormní částky. Když už jsme měli obraz a zvuk, potřebovali jsme ještě titulky. A tam přichází Sinclair Spectrum. Jak je tady vývod do televize, tak bylo jednoduché to pustit místo do televize do videa. Tak jsme to pustili do videa a to, co by se objevilo na obrazovce, jsme nahráli. Teď šlo o to udělat takový program, aby to rolovalo ty písmena. Takže ve videomagazínu <i>Vokna</i> text roluje. Náš majstrštyk bylo to, že ti naši kluci – Včelák s Anténou – udělali diakritiku. Takže my jsme byli schopni dělat titulky česky. 
                    <div class="row">
                        <div class="column">
                            <img src="/photos/frantisek-starek/videomagazin_vokna_1.gif" alt="Basicový kód" style="width:100%">
                            <figcaption>Grafika k Videomagazínu Vokna</figcaption>
                        </div>
                        <div class="column">
                            <img src="/photos/frantisek-starek/videomagazin_vokna_2.gif" alt="Pixelart autora" style="width:100%">
                            <figcaption>Grafika k Videomagazínu Vokna</figcaption>
                        </div>
                    </div>
                    <p>Jediný videomagazín, který se tehdy dělal, dělal Kyncl v Londýně. On to titulkoval přímo kamerou – měl tam titulkovací zařízení, ale anglický. Titulkoval tedy česky, ale bez háčků a čárek, jako telegram. Říkali mu, že dělá telegramy.
                    <p>Vydali jsme dva videomagazíny, ale byly to tříhodinové kazety. Každý rok jsme vydali jeden. Nebylo to ke každému <i>Voknu</i>, protože to by bylo moc drahé. Vydali jsme úplně první český videomagazín na jaře 1987 a pak druhý na jaře 1988. To už ale dělala skupina kolem Rumla a Havla <em>Videožurnál</em>. Oni měli prachy, takže to dělali častějš a měli kamery. Nás podporoval Pavel Tigrid. Ten první videomagazín jsme udělali úplně bez kamery. Jenom jsme měli na jedno odpoledne půjčenou kameru i s kameramanem – byl to Honza Kašpar, co hrál u Cimrmanů a dělal i Videožurnál. Jedno odpoledne jsem na Střeleckém ostrově namluvil úvodník a natočil nám animaci naší znělky, kterou udělal náš výtvarník Martin Frynt. Filip Topol nám do toho nahrál jingly na varhany. Na Betě jsme to stočili a pod titulky jsme dali Filipovy varhany.
                    <p>Třetí využití bylo organizační. Ten počítač byl schopen dělat kartičky. Ta distribuční síť <i>Vokna</i> byla tak rozsáhlá, že jsme to potřebovali řídit počítačem. My jsme vydávali <i>Vokno</i> a <i>Voknoviny</i>. <i>Vokno</i> vycházelo jednou za půl roku a byl to ten takový tlusťoch. Potřebovali jsme ale mít s našimi čtenáři i mnohem rychlejší interakci, takže jsme vydávali takzvané <i>Voknoviny</i>. Deset tiskových stran a vycházelo to každý měsíc. To jsme normálně rozesílali poštou. Měli jsme v počítači distribučního pavouka, a ten počítač uměl všechny adresy vytisknout na samolepky. Na tom stačila ta naše úzká tiskárna. Takže jsme si ty adresy takhle vytiskli a museli jsme dát do pošty. To ale nešlo dát hromadně. To jsem udělal jednou a to, co jsem poslal, se okamžitě ztratilo. Já jsem tenkrát jezdil z České Třebové v noci a měl jsem takovou klikatou cestu, na které jsem měl skoro 70 schránek, a tak jsem to po pěti dával do schránek v různých vesnicích. 
                    <p>Taky bylo potřeba vidět, kdo komu to má předat. To nebylo tak, že by to z Prahy bylo sluníčko; byl to pavouk. Dali jsme to někam a ten to předával dál. <i>Voknoviny</i> jsme ale posílali všem koncovým. <i>Vokno</i> už nešlo poštou, to muselo jít z ruky do ruky. Někdo na tu adresu jel nebo měl známého, který v Praze studoval a převezl to. My jsme zas museli vědět, kolik mu jich máme dát. On věděl, že z Pardubic to má dát do Chrudimi a tak dál. <i>Vokno</i> jsme prodávali, ale <i>Voknoviny</i> jsme posílali zadarmo. Samizdat měl i svoji ekonomiku. <i>Voken</i> jsme dělali asi 380 a <i>Voknovin</i> asi 500.
                    <p>Pak jsme měli něco jako Výzkumný ústav samizdatový a přemýšleli jsme, jak to budeme dělat do budoucna. Byla tu idea, že by se rozšiřoval samizdat po počítačích. Že pustíme mezi lidi kazetu, kde bude celý ten časopis, a každý si vyvolá na svou obrazovku nebo vytiskne na papír, jak bude chtít. To se úplně nerealizovalo, ale nakročeno jsme měli. Právě Jirka Včelák ten <i>D-Text</i> nějak vykuchal. On byl na tehdejší dobu špičkový ajťák. Udělal z <i>D-Textu</i> program na čtení, dneska by se tomu vlastně řeklo program na elektronickou knihu. Ten bychom vždycky napustili daty, která máme napsaná. To se jmenovalo program <i>Kniha</i>. To už byl originál produkt, který fungoval. Obálka okna tam dokonce byla jako grafika. 
                </A>

                <Q speaker={JS}>
                    Je ten program někde archivovaný?
                </Q>

                <A speaker={FS}>
                    Ten program <i>Kniha</i> někde určitě mám. Mám ještě doma padesát kazet, na kterých jsem měl různý programy. Nejdřív to ale musím spustit Spectrum, abych to našel.
                </A>
                
                <div class="row">
                        <div class="column">
                            <img src="/photos/frantisek-starek/kniha_scr.jpg" alt="Screen programu Kniha" style="width:100%">
                            <figcaption>Načítací obrazovka programu Kniha</figcaption>
                        </div>
                        <div class="column">
                            <img src="/photos/frantisek-starek/kniha_prog.jpg" alt="Program Kniha" style="width:100%">
                            <figcaption>Program Kniha</figcaption>
                        </div>
                </div>
                
                <Q speaker={JS}>
                    Měl jsi kazety se seznamy předplatitelů někde schované?
                </Q>

                <A speaker={FS}>
                    Na tom bylo dobré to, že se s kazetama dalo dobře zacházet. Měl jsem taky papírový rozdělovník, kde jsem měl adresy, seřazené podle krajů a okresů. (Ukazuje.) Tohle jsem nikdy neměl doma, měl jsem to schované a policajti to nikdy nenašli. Jenomže člověk s tím potřebuje pracovat. Takže jsem ho musel mít k dispozici a zároveň ukrytý. To bylo docela složitý. Tak jsem používal ten, který jsem měl na kazetě v <i>D-Textu</i> pro ty štítky. Měl jsem to nahrané tak, že tam byla nějaká muzika – Beatles tam byli, to si pamatuju. Odjelo asi pět písniček a pak byla v mezeře ta (napodobuje zvuk kazety na Spectrum) a to byl ten adresář. Tu kazetu jsem měl zabalenou a byla pod uhlím, věděl jsem přesně kde. Když jsem ji potřeboval, tak jsem šel do šupny, vzal jsem ji, odehnal jsem děti, které hrály nějakou hru, a spustil jsem to. 
                </A>

                <Q speaker={JS}>
                    Jaký jsi měl sám vztah k počítačovým hrám?
                </Q>

                <A speaker={FS}>
                    Já jsem z toho byl samozřejmě úplně nadšený! Ty počítače v osmdesátém šestém, to byla bomba! To bylo totiž tak, že tehdy přicházel jeden technický zázrak za druhým. První byl satelit. To jsme celé hodiny seděli a dívali se na západní televize. Potom přišlo video – to jsme seděli do tří hodin a pouštěli jsme si filmy. Pak přišel počítač, tak jsme seděli do tří hodin u počítače. Ne že bychom jenom hráli hry, ale taky s tím počítačem jsme si hráli. Zkoušeli jsme, co všechno je možné s ním dělat, co všechno umí. Na těch kazetách se mezi lidmi vyměňovaly ty programy. Kdo měl víc kazet, ten měl víc co dělat.
                </A>

                <Q speaker={JS}>
                    Hrál jsi sám aktivně hry?
                </Q>

                <A speaker={FS}>
                    Já jsem hrál <em>Jumping Jacka</em>. To byla takový náš největší domácí trhák. Když už to pak syn začal hrát líp než já, tak jsem to přestal hrát. Taky si pamatuju na takovou textovku z Egypta. Kolik sýpek obilí musíš mít, aby postavili pyramidu. Myslím, že se to jmenovalo Chammurapi. To se mi taky líbilo. Pak tam byla taková žába, co skáče ze studně. To furt hrál Anténa. A já jsem si k tomu jednou sedl – a jak největší blbec má největší štěstí, tak jsem hned napoprvé vyskákal z té studně. A on byl tak nasranej! On to hrál několik měsíců, a nikam nevyskákal. Samozřejmě jsme ty hry taky hráli, ale to byl jen ten oddechový čas.
                </A>

                <Q speaker={JS}>
                    Měli jste nějaký vztah ke Svazarmu?
                </Q>

                <A speaker={FS}>
                    Nulový. Asi tam byla spousta šikovných lidí, ale tím, jak to bylo navázané na bezpečnost, na policii a na vojáky, tak to bylo pro nás krajně podezřelé a báli jsme se toho. Báli jsme se, že tam bychom mohli narazit. Musím ale říct, že tehdy komunita těchhle lidí existovala i mimo Svazarm – ale bylo to všechno na osobních známostech, nikoli přes organizaci. My bychom se báli, že nás někdo udá. Taky mi ten počítač při domovní prohlídce vzali. My jsme byli radikální i v rámci Charty, my jsme byli ještě o patro níž. Taky ten postih a ten tlak estébáků na nás byl daleko enormnější.
                </A>

                <Q speaker={JS}>
                    Věděli jste o protirežimních hrách jako <i>Indiana Jones na Václavském náměstí</i>?
                </Q>

                <A speaker={FS}>
                    To je možný, že něco takového bylo, ale můj příběh končí v únoru 1989, kdy mě zatkli a až do revoluce jsem seděl. Ten vrchol toho osmdesátéhodevátého já neznám. Byl jsem ve vazbě v Hradci Králové a pak ve výkonu trestu v Horním Slavkově. Možná by o tom věděli Včelák nebo Anténa. Oni tehdy udělali třeba tohle (ukazuje <i>Voknoviny</i> s Čuňasem nakresleným na počítače), když jsem se vrátil z kriminálu. Husák tehdy po těch kulatých stolech dal amnestii samizdatovým novinářům. Tak jsem se 16. 12. vrátil. A to už jsme začali na Atari. Kluci prostě řekli, že pojedeme na Atari. To už mělo diskety. Později jsme dostali peníze od Nadace Charty a za to jsme koupili písíčka.
                    <p>K tomu se váže ještě jedna taková story. Václav Havel měl písíčko, aby na něm psal hry a tak. Teďka u něj udělali domovní prohlídku a sebrali mu to. Ale estébaci neměla žádnýho počítačovýho mága – jenom jednoho. A ten byl zrovna vyjetý někde v tom Krivoj Rogu, to bylo v Rusku, kde Češi stavěli ropovod. Když se vrátil, tak mu slavnostně uakzovali, že Havlovi při domovní prohlídce sebrali počítač. On měl oči v sloup a říkal: Tak teď se seberte, k tomu Havlovi jeďte znova a vezměte taky tu plechovou krabici. Oni mu vzali jenom monitor a klávesnici. 
                </A>

                <Q speaker={JS}>
                    Je tahle historka nějak ověřitelná v Havlových pamětech?
                </Q>

                <A speaker={FS}>
                    To nevím, ale mám estébáckou videonahrávku z té domovní prohlídky, kdy na ten počítač zacílí video. Občas to video pouštím při přednáškách. Ale ten příběh prostě vím. Já jsem po revoluci seděl v BISu, takže jsem tam ty estébáky ještě chytil. 
                </A>

                <p><strong>O internetovém vydání <i>Vokna</i> (nahrávka 3):</strong></p>

                <A speaker={FS}>
                    Nějací študáci pak chtěli vydávat <i>Vokno</i> na Internetu, ale tenkrát se to nepodařilo, protože jsme nepřinutili Jirouse, aby psal do počítače. Dostal jsem docela drahý publikační program, ale bylo třeba, aby to tam sázel rovnou z nějaké internetové kavárny. A on říkal: Já to neumím,  já to dělat nebudu. Já mu říkal: – Umíš psát na stroji? – Jo. – A umíš telefonovat z budky? – To taky umím. – No, a když to dáš dohromady, tak to je internetová kavárna. Na tom to kleklo. Oni mě ale přinutili, abych pro to internetové vydání udělal úvodník. A tak jsem napsal tuto báseň:
                </A>

                <p>
                    <em>
                        Když Martin Jirous ve Valdicích<br>
                        Spoléhal na pomoc svatých<br>
                        Já na Bytízu udělal jsem si rádio<br>
                        A BBC mě těšilo<br>
                        Kdyby už tenkrát byly kompjůtry<br>
                        Nemuseli jsme chodit do ťurmy<br>
                        Otec Pentagon a máma CIA<br>
                        Internet pak porodila<br>
                        Žádná diktatura nepřežije<br>
                        Nástup IT technologie<br>
                        Ručí za to její strejc<br>
                        Kyberšaman Bill Gates
                    </em>
                </p>

                <center>
                    <i>Konec rozhovoru</i>
                </center>
            {/snippet}
            {#snippet en()}
                <A speaker={FS}>
                    Tigrid sent me the Spectrum – by some route that I wouldn't be able to describe anymore. It was for sure smuggled from France. Anténa also had one. He earned the money for it working a temp job. It was an incredible amount of money at the time, about 11 thousand [crowns]. That was quite a sum. But surprisingly, quite a few people did it. I also knew Koula from Chomutov, he had the same computer. Suddenly, people started appearing who're working with it and own one. So we thought it could be the future of samizdat. It probably would have been, if the revolution hadn't happened. Samizdat would probably have moved to computers. It's incomparably easier to copy text files using a computer than to retype them. There were practically no copy machines at the time. If there were, it was a Rank Xerox, and those were completely inaccessible to ordinary people, and besides, each copy was terribly expensive. An A4 page cost about 5 Kčs. The <em>Fotografia</em> cooperative had them, but there were incredibly few in Prague. You could come and copy there, but it cost 10 Kčs. Fortunately, I knew a girl at Smíchov, where there was a Fotokino shop that had a copier. Viorika, our friend, worked there, and she occasionally did something for us. She couldn't do everything either – she could only do it when she was alone, and mainly she had to save up the cartridge so they wouldn't catch her with too few paid copies.
                </A>

                <Q speaker={JS}>
                    What other technologies did you use?
                </Q>

                <A speaker={FS}>
                    Samizdat started with carbon copies. But we mainly wanted to make a magazine, because we needed it to be for a target group that would regularly subscribe and read it and also respond to it. Classic samizdat relied on a chain reaction. Someone typed ten copies, gave them to others, and one of those ten or several of them got hooked. It also had the advantage of refining the quality of the book. Nobody typed something they thought was stupid. They always only copied what they liked and considered their own. I lived with samizdat for 15 years, and the most commonly reproduced novel was <em>1984</em> by Orwell. You could see all the techniques that were usable there. Past the typewriter came reproductions on the so-called OC ("ócéčko"). Building plans were made on that. The matrix was on tracing paper. From that, they made copies of plans on the OC machine. I remember when I worked as a surveyor at Metrostav, we had everything on these OC copies. It was kind of purple. The paper was special and it was steamed. It was exposed through the tracing paper, and where it was black, it didn't react, and ammonia vapors caught there, in which it was developed. It smelled terrible. When text needed to be copied like this, A4 sheets of carbon paper were made, put in a typewriter, and pushed through the machine, but to make them even blacker, black carbon paper was also placed against the paper to make it black on both sides. The ribbon did it from above and the carbon paper hit it from behind. I've even seen Orwell, again, done this way. But I never got into that because only someone who had it at work could do it. It was in various construction companies, but I never got access to it.
                    <p>The first machine we had was a Ormig hectograph. There you also put carbon paper against it, write on it – it's better to write without the ribbon so the letters sit well, because the ribbon is still a kind of buffer. The hectographic carbon paper is coated with a thick, greasy paint, and it leaves a mark on that chalk paper. On the chalk paper is a matrix, which is then fastened into the machine and rotates on a cylinder. Before it's started up, there's felt that's a bit soaked with alcohol. Natural paper passes over it, so there's a film of alcohol on it, which slightly dissolves the paint on the matrix, which is usually purple. There were also black ones, but those were only available abroad.
                    <p>The most important thing for us was the cyclostyle stencil. The most essential part is this sheet – fabric impregnated with wax. It was put into the typewriter like this and typed on without a ribbon. The letters then knocked the wax out of the fabric. So a hole remained in the shape of the letter. It was hard to type on, so carbon paper and a sheet were put behind it, on which it was written, so corrections could be made. When a correction was needed, the holes had to be varnished and pricked with a needle to make a new letter. All this was removed and the stencil was put into the machine. Paint was sent inside the machine, a cylinder rotated against another cylinder, and the pressure of the cylinders could be regulated. The cylinder pushed paint through the holes in the shape of the letters. There's this natural, porous paper that absorbed the paint well.
                    <p>The numbers from the hectograph were about 120 copies maximum, because the paint on the matrix was being depleted. The cyclostyle also had its lifespan. The stencil would deform, then tear. From the cyclostyle, you could make a maximum of about 500 copies.
                </A>

                <Q speaker={JS}>
                    How did it start with computers?
                </Q>

                <A speaker={FS}>
                    We knew that dot matrix printers could be connected to them. The first thing we thought of was to put a cyclostyle stencil in that nine-pin printer. Instead of the letters that hit it on a typewriter, the needles would hit it and make the holes. The only thing was that the waste wax always clogged up the printer a bit. We had it borrowed from Ivan Havel, and once he was really angry at us for messing it up.
                </A>

                <Q speaker={JS}>
                    Were those printers rare?
                </Q>

                <A speaker={FS}>
                    They didn't exist here, one had to bring them from the West. We only had a half-format printer – like for receipts. When we did something, we had to do it in two columns and then glue the stencils together. So that was the first use.
                    <p>But mainly, when the computer had that <i>D-Text</i>, which was a kind of precursor to <i>T602</i> [Czech word processor]. Everything was in columns and the letters had an eight-hole form. The whole alphabet was made from that and that's how it printed. So we used this first to do typesetting. It could justify from the back, which you can never do on a typewriter. We played around with that a lot. Then you could also make larger letters and headlines on it. It could only do two different text sizes, but that was already progress. Then we realized that something could be drawn on it too, so I gave the stencil to the artists to draw something on it. So we had the matrix all patched up. We had columns on the computer and drawings in them. We did this for the first time in <i>Vokno</i> from 1986 <em>(issue 11 – note JŠ)</em>.
                    <p>In the same year, video started to leak through. We had read about it before, but the money it cost was in completely different orders of magnitude than where we were operating. But as soon as Betamax arrived, both went down. To keep up, VHS also had to lower prices. At that moment, we grabbed onto it and started thinking about how to use it. We came to the idea that we would make a video magazine. The main thing that interested us in the media world back then was to be able to at least somehow start competing with television. That was the primary mainstream medium at the time, which seemed like it could do whatever it wanted with us – it had picture and sound. Suddenly even our opposition, underground magazine was able to produce picture and sound. To document our secret exhibitions. To be clear, during the samizdat era, we were unable to do color on anything. So artists could only show originals. But for someone to see a copy of a painting on the other side of the country – that wasn't possible. Photographs were terribly expensive, just once we put Slavík's photograph in <i>Vokno</i> – and it wasn't even pretty. Suddenly with video we were able to do color. Also the rewinding – you could work with it like a tape recorder. You could edit it. Those Beta machines were designed to enable dubbing. They knew that films were coming from abroad, so there was a dubbing button. We used that for commentary – we were able to lower the sound and do our own commentary. It was suddenly real studio work.
                </A>
                <div class="picture-cite">
                <p><img src="/photos/frantisek-starek/videomagazin_vokno.png" alt="Graphics from the Vokno Video Magazine">
                    <cite><i>Vokno Video Magazine</i></cite>
                </div>
                <Q speaker={JS}>
                    To be able to edit, you had to have two of those machines – is that right?
                </Q>

                <A speaker={FS}>
                    Of course. Not that we had them – we had to borrow them. We basically had one VHS available. One lad at Smíchov had bought one. Whenever we did it, we had to borrow a Beta and on that we made the master. Then we distributed from that Beta to VHS tapes. Distribution back then was more of an ongoing thing. We told our subscribers: Bring your own tape – we don't have the money to buy a tape. We had maybe ten of those tapes. One VHS tape cost six hundred crowns, and that was a third of my stoker's salary. Those were enormous amounts. Once we had picture and sound, we still needed subtitles. And that's where the Sinclair Spectrum comes in. Since there's a TV output, it was simple to send it to video instead of the TV. So we sent it to video and what would appear on the screen, we recorded. Now the task was to make a program that would scroll the letters. So in the <i>Vokno</i> video magazine, the text scrolls. Our masterpiece was that our guys – Včelák and Anténa – made diacritics. So we were able to make titles in Czech.
                    <div class="row">
                        <div class="column">
                            <img src="/photos/frantisek-starek/videomagazin_vokna_1.gif" alt="BASIC code" style="width:100%">
                            <figcaption>Graphics for Vokno Video Magazine</figcaption>
                        </div>
                        <div class="column">
                            <img src="/photos/frantisek-starek/videomagazin_vokna_2.gif" alt="Author's pixel art" style="width:100%">
                            <figcaption>Graphics for Vokno Video Magazine</figcaption>
                        </div>
                    </div>
                    <p>The only video magazine being made at the time was by Kyncl in London. He did titles directly with a camera – he had a titling device, but an English one. So he did titles in Czech, but without diacritics, like a telegram. They would say he was making telegrams.
                    <p>We released two video magazines, but they were three-hour tapes. We released one every year. It wasn't for every issue of <i>Vokno</i>, because that would be too expensive. We released the very first Czech video magazine in spring 1987 and then the second in spring 1988. But by then the group around Ruml and Havel was doing <em>Videožurnál</em>. They had money, so they did it more often and had cameras. We were supported by Pavel Tigrid. We made that first video magazine completely without a camera. We only had a camera borrowed for one afternoon along with a cameraman – it was Honza Kašpar, who acted with Cimrman and also did Videožurnál. One afternoon on the Střelecký island [in Prague] I recorded the editorial and he filmed the animation of our jingle, which was made by our artist Martin Frynt. Filip Topol recorded jingles for us on the organ. We edited it on Beta and put Filip's organ below the titles.
                    <p>The third use was organizational. The computer was able to produce cards. The distribution network of <i>Vokno</i> was so extensive that we needed to manage it by computer. We published <i>Vokno</i> and <i>Voknoviny</i>. <i>Vokno</i> came out once every six months and it was the thick one. But we needed to have much faster interaction with our readers, so we published the so-called <i>Voknoviny</i>. Ten printed pages and it came out every month. We sent it normally by mail. We had a distribution spider in the computer, and that computer could print all addresses on stickers. Our narrow printer was enough for that. So we printed the addresses like this and had to put them in the mail. But it couldn't be sent in bulk. I did that once and what I sent immediately got lost. At that time I traveled from Česká Třebová at night and had a winding route with almost 70 mailboxes, and so I put five at a time into mailboxes in various villages.
                    <p>You also needed to see who had to pass it on to whom. It wasn't coming out of Prague in the shape of a sun; it was a spider. We gave it somewhere and that person passed it on. We sent <i>Voknoviny</i> to all the end recipients. But <i>Vokno</i> couldn't go by mail, it had to go hand to hand. Someone went to that address or had an acquaintance who studied in Prague and brought it. And we had to know how many to give him. He knew that from Pardubice he had to give it to Chrudim and so on. We sold <i>Vokno</i>, but we sent <i>Voknoviny</i> for free. Samizdat had its own economy. We made about 380 copies of <i>Vokno</i> and about 500 of <i>Voknoviny</i>.
                    <p>Then we had something like a Samizdat Research Institute and we were thinking about how we would do it in the future. There was an idea that samizdat would spread via computers. That we would release a tape among people with the whole magazine on it, and everyone would display it on their screen or print it on paper, as they wanted. This wasn't fully realized, but we had made a start. Jirka Včelák had gutted that <i>D-Text</i> somehow. He was a top IT guy for his time. He made a reading program out of <i>D-Text</i>, today it would actually be called an e-book program. We were going to always fill it with data that we had written. It was called the <i>Kniha</i> (Book) program. That was already an original product that worked. The Vokno cover was even there as graphics.
                </A>

                <Q speaker={JS}>
                    Is that program archived somewhere?
                </Q>

                <A speaker={FS}>
                    I definitely have the <i>Kniha</i> program somewhere. I still have fifty tapes at home with various programs on them. But first I have to start up the Spectrum to find it.
                </A>
                
                <div class="row">
                        <div class="column">
                            <img src="/photos/frantisek-starek/kniha_scr.jpg" alt="Kniha program loading screen" style="width:100%">
                            <figcaption>Kniha program loading screen</figcaption>
                        </div>
                        <div class="column">
                            <img src="/photos/frantisek-starek/kniha_prog.jpg" alt="Kniha program" style="width:100%">
                            <figcaption>Kniha program</figcaption>
                        </div>
                </div>
                
                <Q speaker={JS}>
                    Did you keep the tapes with subscriber lists hidden somewhere?
                </Q>

                <A speaker={FS}>
                    The good thing about it was that tapes were easy to handle. I also had a paper distribution list where I had addresses sorted by regions and districts. (Shows.) I never had this at home, I kept it hidden and the cops never found it. But you need to be working with it. So I had to have it available and hidden at the same time. That was quite tricky. So I used the one I had on tape in <i>D-Text</i> for the labels. I had it recorded so that there was some music – the Beatles were there, I remember that. About five songs played and then in the gap there was that (imitates the sound of a tape on Spectrum) and that was the address book. I had the tape wrapped up and it was under the coal, I knew exactly where. When I needed it, I went to the shed, took it, chased away the kids who were playing some game, and started it up.
                </A>

                <Q speaker={JS}>
                    What was your own relationship to computer games?
                </Q>

                <A speaker={FS}>
                    I was absolutely thrilled by it, of course! Those computers in eighty-six, that was a blast! It was like this – one technical miracle after another was coming. The first was satellite. We sat for hours watching Western television. Then came video – we sat until three in the morning watching films. Then came the computer, so we sat until three in the morning at the computer. Not that we only played games, but we also played with the computer. We tested out what was possible to do with it, what all it could do. People exchanged programs on those tapes. The one to have more tapes was able to do more.
                </A>

                <Q speaker={JS}>
                    Did you actively play games yourself?
                </Q>

                <A speaker={FS}>
                    I played <em>Jumping Jack</em>. That was kind of our biggest hit at home. When my son started playing it better than me, I stopped playing. I also remember a text adventure about Egypt. How many grain silos you need to have to build a pyramid. I think it was called Hammurabi. I liked that too. Then there was this frog jumping out of a well. Anténa would play that all the time. And I sat down with it once – and since the biggest fool has the biggest luck, I jumped out of the well on the first try. And he was so pissed off! He had been playing it for several months and never jumped out anywhere. Of course we too played games, but that was just leisure time.
                </A>

                <Q speaker={JS}>
                    Did you have any relationship to Svazarm?
                </Q>

                <A speaker={FS}>
                    None. There were probably a lot of skilled people there, but because it was tied to security, to the police and the military, it was extremely suspicious to us and we were afraid of it. We were afraid we could run into trouble there. I have to say that at that time a community of people like that existed outside of Svazarm too – but it was all based on personal acquaintances, not through an organization. We would be afraid that someone would report us. After all, did take my computer away during a house search. We were radical even within the Charter, we were one floor lower. The punishment and the pressure from the StB on us was far more enormous.
                </A>

                <Q speaker={JS}>
                    Did you know about anti-regime games like <i>Indiana Jones on Wenceslas Square</i>?
                </Q>

                <A speaker={FS}>
                    It's possible something like that existed, but my story ends in February 1989, when they arrested me and I sat in prison until the revolution. I don't know the peak of eighty-nine. I was in custody in Hradec Králové and then serving my sentence in Horní Slavkov. Maybe Včelák or Anténa would know about it. They made things like this back then (shows <i>Voknoviny</i> with Čuňas drawn on a computer), when I came back from prison. Husák gave amnesty to samizdat journalists after those round tables. So I returned on December 16th. And then we started on Atari. The guys just said we would go with Atari. That already had floppy disks. Later we got money from the Charter Foundation and bought PCs with that.
                    <p>There's also another story connected to that. Václav Havel had a PC to write plays and so on. Now they did a house search at his place and took it. But the StB didn't have any computer wizard – just one. And he was away somewhere in Krivoy Rog, that was in Russia, where Czechs were building an oil pipeline. When he returned, they proudly showed him that they had seized Havel's computer during a house search. He rolled his eyes and said: Now get yourselves together, go back to Havel's place and also take the metal box. They only took the monitor and keyboard.
                </A>

                <Q speaker={JS}>
                    Is this story verifiable in Havel's memoirs?
                </Q>

                <A speaker={FS}>
                    I don't know, but I have an StB video recording from that house search, where the video focuses on the computer. I sometimes show that video during lectures. But I just know that story. After the revolution I worked at BIS, so I still caught those StB agents there.
                </A>

                <p><strong>On the internet edition of <i>Vokno</i> (recording 3):</strong></p>

                <A speaker={FS}>
                    Some students then wanted to publish <i>Vokno</i> on the Internet, but it didn't work out at the time because we couldn't make Jirous write on a computer. I got a fairly expensive publishing program, but he needed to typeset it directly from some internet café. And he said: I can't do it, I won't do it. I told him: – Can you type on a typewriter? – Yes. – And can you make a phone call from a phone booth? – I can do that too. – Well, when you put that together, that's an internet café. That's where it fell apart. But they made me write an editorial for that internet edition. And so I wrote this poem:
                </A>

                <p>
                    <em>
                        When Martin Jirous in the Valdice prison<br>
                        Was betting on the help of saints<br>
                        I made myself a radio at Bytíz<br>
                        And BBC brought me joy<br>
                        If computers had existed back then<br>
                        We wouldn't have had to go to jail<br>
                        Father Pentagon and mommy CIA<br>
                        Then gave birth to the Internet<br>
                        No dictatorship will survive<br>
                        The rise of IT technology<br>
                        It's guranteed by its uncle<br>
                        Cybershaman Bill Gates
                    </em>
                </p>

                <center>
                    <i>End of interview</i>
                </center>
            {/snippet}
        </Loc>
        
    {/snippet}
</InterviewPage>