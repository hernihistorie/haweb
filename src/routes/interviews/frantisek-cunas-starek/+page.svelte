<script lang="ts">
    /* https://docs.google.com/document/d/1EUv8mepuz5gsXFP4tlrr3iypy-hDEpUN/edit */
	import InterviewPage from "$src/lib/InterviewPage.svelte";
	import Answer from "$lib/interviews/Answer.svelte"
	import Question from "$lib/interviews/Question.svelte";
	import Chapter from "$lib/interviews/Chapter.svelte";
    import Loc from "$src/lib/Loc.svelte";

    import { data, FS, JS } from "./interview";
    import PageLang from "$src/lib/PageLang.svelte";

    let A = Answer;
    let Q = Question;
</script>

<PageLang cs />

<InterviewPage data={data}>
    {#snippet content()}
        <A speaker={FS}>
            Mně to Spectrum poslal Tigrid – nějakou cestou, kterou ani teď už ani neumím popsat. Určitě bylo pašovaný z Francie. Anténa měl taky jedno. Ten si na to vydělal na brigádě. Byly to to tehdy neuvěřitelný peníze, asi 11 tisíc. To byl docela balík. Ale kupodivu to udělalo docela hodně lidí. Znal jsem ještě z Chomutova Koulu, ten měl ten samý počítač. Najednou se začali objevovat lidi, kteří s tím pracujou a kteří to mají. Tak nás pak napadlo, že by to mohla být budoucnost samizdatu. Asi by bylo, kdyby nedošlo k revoluci. Asi by došlo k tomu, že by samizdaty stěhovaly na počítače. Je to neskonale jednodušší přehrávat textové soubory a kopírovat je počítačem než to přepisovat. Kopírky tehdy vůbec nebyly. Když jo, tak to byl Rank Xerox, a ty byly pro normálního člověka naprosto nedostupné, a navíc byla každá kopie strašně drahá. A4 stála asi 5 Kčs. Výrobní družstvo Fotografia je mělo, ale bylo jich v Praze nesmírně málo. Mohlo se tam přijít a kopírovat, ale stálo to 10 Kčs. Já jsem naštěstí mál známou holku na Smíchově, kde byl obchod Fotokino, kde kopírku měli. Tam byla Viorika, naše známá, a ta nám tam občas něco udělala. Ona taky všechno nemohla, mohla to dělat jenom, když tam byla sama, a hlavně musela našetřit tu kazetu, aby ji pak nechytli, že má málo zaplacených kopií.
        </A>

        <Q speaker={JS}>
            Jaké další technologie jste používali?
        </Q>

        <A speaker={FS}>
            Samizdat začínal kopírákem. My jsme ale hlavně chtěli dělat časopis, protože jsme potřebovali, aby to bylo pro cílovou skupinu, která to bude pravidelně odbírat a číst a zároveň na to reagovat. Klasický samizdat stál na řetězové reakci. Někdo rozepsal desetkrát, někomu to dal a někdo z těch deseti nebo několik z nich se chytilo. Ještě to mělo tu výhodu, že se tím tříbila kvalita té knihy. Nikdo nepsal něco, co mi připadalo jako blbost. Vždycky přepisoval jenom to, co se mu líbilo a co považoval za vlastní. Já jsem se samizdatem žil 15 let a nejčastěji rozmnožovaný román byl 1984 od Orwella. Tam byly vidět všechny ty techniky, které byly použitelné. Nad psací stroj potom nastupovaly rozmnoženiny na takzvaném OC („ócečko“). Na tom se dělaly stavební plány. Ta matrice byla na pauzáku. Z toho potom na tom ócéčku dělali kopie plánů. Já si pamatuju, že když jsem dělal v Metrostavu geodeta, všechno jsme měli na těchto ócéčkách. Bylo to takové fialové. Papír byl speciální a napařovalo se. On se osvítil skrz ten pauzák a tam, kde byla černá, nezareagoval, a chytily se tam čpavkové páry, ve kterých se to vyvolávalo. Ono to hrozně smrdělo. Když bylo třeba takhle kopírovat text, tak se udělaly A4ky průklepáku, daly se do psacího stroje, a jednak se protlačili tím strojem, ale aby byly ještě černější, tak se dal ještě černý kopírák proti papíru, aby byl papír černý z obou stran. Seshora vám to udělala páska a zezadu to tam napral kopírák. Takhle jsem viděl i toho Orwella. K tomu jsem ale nikdy nepřičichl, protože to mohl dělat jenom někdo, kdo to měl v práci. To bylo v různých stavebních firmách, ale já jsem na to nikdo nedosáhl.
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
            <p>Vydali jsme dva videomagazíny, ale byly to tříhodinové kazety. Každý rok jsme vydali jeden. Nebylo to ke každému <i>Voknu</i>, protože to by bylo moc drahé. Vydali jsme úplně první český videomagazín na jaře 1987 a pak druhý na jaře 1988. To už ale dělala skupina kolem Rumla a Havla Videožurnál. Oni měli prachy, takže to dělali častějš a měli kamery. Nás podporoval Pavel Tigrid. Ten první videomagazín jsme udělali úplně bez kamery. Jenom jsme měli na jedno odpoledne půjčenou kameru i s kameramanem – byl to Honza Kašpar, co hrál u Cimrmanů a dělal i Videožurnál. Jedno odpoledne jsem na Střeleckém ostrově namluvil úvodník a natočil nám animaci naší znělky, kterou udělal náš výtvarník Martin Frynt. Filip Topol nám do toho nahrál jingly na varhany. Na Betě jsme to stočili a pod titulky jsme dali Filipovy varhany.
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
            Já jsem hrál Jumping Jacka. To byla takový náš největší domácí trhák. Když už to pak syn začal hrát líp než já, tak jsem to přestal hrát. Taky si pamatuju na takovou textovku z Egypta. Kolik sýpek obilí musíš mít, aby postavili pyramidu. Myslím, že se to jmenovalo Chammurapi. To se mi taky líbilo. Pak tam byla taková žába, co skáče ze studně. To furt hrál Anténa. A já jsem si k tomu jednou sedl – a jak největší blbec má největší štěstí, tak jsem hned napoprvé vyskákal z té studně. A on byl tak nasranej! On to hrál několik měsíců, a nikam nevyskákal. Samozřejmě jsme ty hry taky hráli, ale to byl jen ten oddechový čas.
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
</InterviewPage>