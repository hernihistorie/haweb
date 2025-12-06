<script lang="ts">
    /* https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit */
	import InterviewPage from "$src/lib/InterviewPage.svelte";
	import Answer from "$lib/interviews/Answer.svelte"
	import Question from "$lib/interviews/Question.svelte";
	import Chapter from "$lib/interviews/Chapter.svelte";

    import { data, RS, LK, VS } from "./interview";
    import PageLang from "$src/lib/PageLang.svelte";

    let A = Answer;
    let Q = Question;
</script>

<style>
    .c2 {
        font-style: italic
    }
    .appendix {
        font-weight: bold;
        text-align: left;
        background-color: #b5a26d;
        margin-top: 0px;
    }
</style>

<PageLang cs />

<InterviewPage data={data}>
    {#snippet content()}
        <div >
            
            <Chapter title="Rodinné zázemí, vzdělání, první počítač a videohry">

                <Q speaker={RS}>Dnes je 31. července 2023, rozhovor s Luborem Kopeckým na téma jeho činnosti v rámci studia SleepTeam a jiné videoherní činnosti je veden Rudolfem Janem Suchým. A já se zeptám na první otázku, ještě než se dostaneme k tvojí videoherní tvorbě, tak mi něco pověz o tom odkud pocházíš, jaké je tvoje rodinné zázemí, co jsi dělal před tím, než jste založili SleepTeam.</Q>
                

                <A speaker={LK}>Já jsem se narodil v Lounech, v říjnu 1978 a mým prvním počítačem byl Didaktik M. V podstatě od první chvíle, kdy jsem si zahrál první hry, tak jsem věděl, že je chci dělat. Takže to bylo docela jednoduchý a jasný. A pak v roce 1993 jsem šel studovat na obchodní akademii do Žatce. A tam jsem vlastně potkal všechny ostatní členy týmu. Tam jsme se dali dohromady. Se mnou v ročníku byl Jarda Wagner, naprosto talentovaný designér a výtvarník, Kamila Hurníková, která byla a je super produkční, a o ročník výš byl Radek Matějka, úplně geniální programátor. Takže jsme se dohodli, že budeme dělat hry. A to byl základ týmu pro další hry. Tam jsme vlastně začali, a pak jsme už dál pokračovali po škole.</A>
                

                <Q speaker={RS}>Když jsi mluvil o tom Didaktiku M, tak k jakým hrám ses třeba dostal? Máš třeba nějaký specifický hry, co tě třeba inspirovaly v tvé tvorbě?</Q>
                

                <A speaker={LK}>Na tom Didaktiku moc ne. Já jsem vždycky měl rád strategický hry. Teprve vlastně až na střední škole jsem si pořídil první PCčko, to byla 386ka. A tam jsem teprv začal hrát hry který mě fakt jako pak inspirovaly dál. To byly hlavně právě adventury, klasický první adventury. I jakoby z hlediska vývoje ty adventury byly vlastně takový jako nejjednodušší, nejlíp vyvíjitelný.</A>
                

                <Q speaker={RS}>A kdyby sis třeba vzpomněl na nějaký specifický hry který jsi hrál na tom DOSu? Nějaký specifický adventury cos hrál? A co tě v tý době zaujaly a inspirovaly při tvorbě <i>Poldy</i>?</Q>
                

                <A speaker={LK}>Jo, to je těžký. Tak jako třeba rozhodně jako <i>Goblins</i>. <i>Simon the Sorcerer</i>, <i>Šimon kouzelníkem</i> zněl český překlad, a samozřejmě <i>Monkey Island</i>. Prostě takovýhle klasiky.</A>
                
            </Chapter>
            <Chapter title="Založení Sleep Teamu a Polda">


                <Q speaker={RS}>Tak se asi přesuneme teda k tomu, tak jste se potkali s Jardou, Radkem a Kamilou a začali jste vyvíjet hru.</Q>
                

                <A speaker={LK}>To bylo jako hodně divoký. My jsme se ve chvíli, kdy jsme se pro to rozhodli, tak jsme chtěli udělat jenom malinkou hříčku. Vlastně takový demo, ale pak se nám to úplně vymklo a právě výsledkem byl <span class="c0 c2">Polda</span><span class="c1 c0">. S tim, že to bylo jakoby strašně složitý. My jsme se potkávali jenom ve škole a tam samozřejmě nebyl čas společně něco vyvíjet. Takže jsme to dělali tak, že jsme to vlastně dělali ve volném čase, o víkendech, o prázdninách. To probíhalo tak, že když jsme si chtěli vyměnit nějaký data, což bylo nutný, tak jsme prostě na tři-a-půl palcovou disketu nahráli data, sedli jsme na kolo a jeli jsme do vedlejšího města, třeba dvacet kilometrů, abychom tu disketou předali. Když jsme si potřebovali zavolat, tak jsme samozřejmě museli jít do telefonní budky, protože nikdo z nás tehdy ještě doma neměl klasický telefon. Mobilní telefony tedy ještě vůbec nebyly. A bylo to teda fakt hodně jako dobrodružný. S tím, že pokud jsme něco nahráli na disketu, a cestou se ten záznam nějak porušil, když se ta disketa zmáčkla, tak jsme měli smůlu. Pak už jsme jako vozili radši dvě diskety. A tehdy jsme opravdu každý měli kartu do telefonní budky, a prostě jsme si takhle volali, když bylo něco nutnýho, a jinak jsme se jenom v krátkosti viděli ve škole, kde jsme si řekli ty důležitý věci a předali jsme si, co šlo.</span></A>
                

                <Q speaker={RS}>Jak vás vůbec napadlo dělat příběh o policajtu Pankrácovi?</Q>
                

                <A speaker={LK}>Ono se to nabízelo. Pro adventuru je ideální žánr nějaká detektivka a v tý samozřejmě musí účinkovat policajt. Ono se to vůbec jako nemělo jmenovat <i>Polda</i>. My jsme to vyvíjeli pod pracovním názvem <i>Chaloupka</i>, jako po perníkový chaloupce. A tehdy v 90. letech policajti byli proslulí tím, že byli natvrdlý a totálně zkorumpovaný. To byla prostě jako ideální postava pro takovouhle adventuru. My jsme se vlastně snažili do toho promítnout úplně všechny tehdejší fenomény, který byly v tu dobu úplně nový, který jsme prostě neznali. Prostě různý subkultury, drogy, bezdomovci, sex shop a právě tu korupci. Všechny ty věci, který byly tehdy vlastně úplně nový, který do tý doby tady nikdo v podstatě neznal, a byly nějakým způsobem zajímavý a atraktivní. A my jsme se u toho fakt jako hodně bavili, ale samozřejmě z dnešního pohledu by to bylo asi jako dost nekorektní, ale tehdy to prostě byla taková, řekněme satira, když to tak řeknu. Ale věřím, že spousta těch věcí už by dneska neprošla.</A>
                

                <Q speaker={RS}>Ty jsi mluvil o tom, že nebylo úplně jednoduchý dostat informaci, ať už digitální nebo mluvenou, z bodu A do bodu B. Jak jste si vůbec rozdělovali práci? Protože udělat takto dohromady scénář celý hry musí být dost náročný a vlastně jakýkoliv úkon, musí být takto docela složitý.</Q>
                

                <A speaker={LK}>No tak největší práci na tomhle odved právě Jarda, s tím že, jsme měli každý z nás vyhrazený úseky scénáře nebo rozhovory, který jsme psali zvlášť. Nebylo to jako že by jeden z nás napsal všechno. Takhle jsme si to rozdělili, ale opravdu největší invenci byla právě na Jardovi. A tam to bylo jasný. Radek programoval, já jsem dělal hlavně hudbu, nějaký věci kolem produkce, a pak jsem stříhal ty dialogy a zvuky. A bylo to vždycky o tom, že jsme se jenom v rychlosti ve škole potkali, řekli jsme si, co a jak a pak se spoléhali na to, že každej prostě udělá tu svoji část práce.</A>
                

                <Q speaker={RS}>Ty jsi říkal, že jsi řešil hlavně hudbu, audio a věci kolem produkce, že Radek programoval. Co dělal Jarda kromě toho, že vymýšlel kostru scénáře? Pochopil jsem správně?</Q>
                

                <A speaker={LK}>Ano, ano. Jarda vlastně napsal ten příběh a hlavně udělal kompletně celou grafiku a animace. Což je z dnešního pohledu úplně neuvěřitelná práce, protože jak je to prostě pixel art, tak to fakt znamenalo prostě každý pixel naklikat. A z dnešního pohledu mi to přijde úplně neuvěřitelný a nemožný. Co za tím bylo práce než se vytvořila každá jedna scéna, než se vytvořily animace. To bylo šílený.</A>
                

                <Q speaker={RS}>A Kamila Hurníková, ta dělala…?</Q>
                

                <A speaker={LK}>No tak, Kamila se především starala o nás. Což byl taky důležitý, protože to byly jako někdy takový stavy, že jsme třeba i několik dní nespali. A prostě jsme jenom seděli, koukali do počítače a klikali, aby to bylo. Hlavně aby jsme to stihli v tom devadesátým osmým roce a aby jsme to stihli do Vánoc, protože tam už nás tlačil čas a tam to nešlo propásnout.</A>
                

                <Q speaker={RS}>Ty jsi zmiňoval, že jste každý psal kus z těch scén. Ono to asi úplně z tý hry není patrný, ale i přesto se zeptám, jestli si vzpomeneš třeba, co jsi psal ty specificky za scény?</Q>
                

                <A speaker={LK}>No jo no. Vybavily se mi nějaký, ale to zrovna na který jako nejsem nějak extra hrdý. To byly různý telefonáty. Tam Pankrác může tím telefonem ve hře volat na různý čísla, který různě ve hře najde, takže mluví třeba jako s popelářema,… jak to říct, s telefonní prostitutkou. Nevím, jak to slušně pojmenovat.</A>
                

                <Q speaker={RS}>Sex po telefonu.</Q>
                

                <A speaker={LK}>Sex po telefonu.</A>
                

                <Q speaker={RS}>Nevím jak se říká teda těm zaměstnancům.</Q>
                

                <A speaker={LK}>No, asi jo. Tak jsme na to tehdy oslovili Sabinu Laurinovou. A ta to jednoznačně a rázně odmítla, jakože tohle teda rozhodně ne. No a nakonec to bylo dobře, protože ten výsledek byl mnohem lepší. A tehdy se všichni ty dabéři na tom jako strašně vyřádili. Že to jako fakt dělali rádi a bavilo je to. A můžu třeba jakoby mluvit o dabérech?</A>
                

                <Q speaker={RS}>Jo jasně. Já jsem se k tomu chtěl dostat, takže asi klidně mluv o dabingu.</Q>
                

                <A speaker={LK}>Třeba pan Sobota z toho byl samozřejmě takový trochu rozpačitý. My jsme původně oslovili pana Dvořáka, jestli by nechtěl dabovat Pankráce. A ten se na to necítil, protože hry byly něco, co šlo úplně mimo něj. Tak Luděk Sobota na to přistoupil, a zvládli jsme to. No, ale pan Lábus i pan Nárožný byly úplně boží. Pan Lábus ten byl úplně… dodneška na to rád vzpomínám. Pak jsme s ním ještě i párkrát spolupracovali. Ten byl naprosto dokonalý, měl jako v sobě pokoru a zároveň do toho dával všechno. To bylo úplně super. Pan Nárožný, když nás uviděl první den ve studiu, tak se docela vylekal jak jsme mladý. Že ho nějaký dvacetiletý týpci budou jako režírovat. Ale pak to zvládnul taky úplně skvěle. To se fakt sešla hodně dobrá trojice. A vlastně i ty ostatní dabéři, ty kteří dabovali ostatní postavy, byly vlastně hrozně fajn. To mě strašně překvapilo, že se na nás nekoukali přes prsty. Mladí kluci prostě říkají člověku, co a jak mají jako dabovat. Takže to bylo hodně super. Na to rád vzpomínám.</A>
                

                <Q speaker={RS}>Tys to trochu naklepnul, ale stejně bych se asi ještě doptal, jaký vlastně byl ten přístup těch lidí, co viděli hromadu mladých kluků, který ke všemu po nich chtěli něco, co oni v životě nedělali a to je dabovat videohru?</Q>
                

                <A speaker={LK}>Oni byli zvyklí dabovat filmy kde před sebou něco vidí a dabují to. A teď najednou před sebou neměli vůbec nic a museli to jenom namlouvat. Takže to pro ně bylo nový. A hlavně jim tam chyběla ta odezva, že vlastně s někým vedou dialog. Oni jenom měli napsaný scénář, že jo, co mají odříkat, a vlastně nevěděli, s kym si povídají a o čem ten rozhovor je. Takže z toho samozřejmě byli hodně nesví. Ale poradili si s tím dobře.</A>
                

                <Q speaker={RS}>Kdo to režíroval? Případně jaký vlastně byl ten přístup k tý režii toho dabingu?</Q>
                

                <A speaker={LK}>Hlavním režisérem byl Jarda. Byli jsme u toho teda oba, ale Jarda byl ten, kdo těm pánum hercům musel občas říct, že něco dělají špatně, nebo že mají něco říct jinak. Což bylo jako těžký, a tak… takže jo. Režisérem byl Jarda, no. </A>
                

                <Q speaker={RS}>A jakej byl váš přístup? Bavili jste se s těmi dabéry, jaký byl kontext scény, nebo jste jim prostě dali papír a řekli jim, jestli to mají přečíst trochu jinak?</Q>
                

                <A speaker={LK}>Ne, tak samozřejmě, že jsme se jim snažili vysvětlit zhruba o co tam jde, ale pro ně to bylo něco naprosto novýho.</A>
                

                <Q speaker={RS}>Jo. Ono to s tim asi trochu souvisí, protože, teď mě kdyžtak oprav, ale vy jste se většinou k těm dabérům už dostávali přímo přes Zimu, ne?</Q>
                

                <A speaker={LK}>Z části. K některým jo, a některý jsme sháněli přes divadla, ve kterých účinkují. Přes jejich jakoby domovský divadla. Něco sehnal právě jako Martin Zima, a… no jako tehdy to jinak nešlo, protože se nedal najít na netu kontakt na ně a ozvat se jim. Takže to jsme museli prostě fakt přes to divadlo, no.</A>
                

                <Q speaker={RS}>Když jsme nakousnuli toho Zimu, tak jak jste se dostali přímo k Zimovi?</Q>
                

                <A speaker={LK}>Jo, to je dobrá historka. To jsme takhle z Excaliburu měli kontakty na hlavní vydavatele, řekněme. A tak jsme si řekli, že to vezmeme podle pořadí, podle seznamu. První bylo JRC. To byl tehdy monopol a věděli jsme, že i kdyby to vydal kdokoliv jiný, tak stejně to může distribuovat jenom JRCčko. Takže jsme si takhle vlezli do telefonní budky a zavolali jsme do JRC. Jelikož to ale bylo v létě devadesát osm, tak ten člověk, který tam měl na starosti vydávání her, byl zrovna na dovolený. Tak druhý v seznamu byl Zima, tak jsme zavolali do Zima Software, tam nám to vzali a že je to zajímá, že si to rádi prohlídnou. Díky tomu jsme se s nima domluvili. A Zima byl pak vydavatelem, že financoval vylisování všech těch CDček, a výrobu krabic a takhle. Dostal to do distribuce, samozřejmě to nakonec stejně distribuovalo JRC, protože jiná možnost nebyla. A tehdy to bylo jako docela drsný, protože tím, že JRC mělo monopol, tak jejich marže byla 200% na tý hře. A u <i>Poldy</i> se fakt sešla obrovská kombinace všech možných faktorů, který způsobili to, že to byl takový úspěch. Samozřejmě ten dabing, to bylo hodně důležitý, a pak různý takový drobnosti. Třeba ten obal, nebo ta krabice, ta vypadá, že se to na tom hodně podepsala. Jednak jsem navrhnul, aby <i>Polda</i> byl ve stylu Strýčka Sama. Já se ten rok dozvěděl, že to má obrovský psychologický efekt – to, že na tebe nějaká postava ukazuje. Takže jsem si řekl „pojďme to zkusit, to určitě zabere.”</A>
                

                <Q speaker={RS}>A zabralo.</Q>
                

                <A speaker={LK}>Zabralo, no. Martin Zima pak zase přišel s dalším nápadem, že udělal větší krabice. Herní krabice tehdy měly naprosto standardizovaný rozměr a všechny obchody na to měly na míru udělaný police a <i>Polda</i> se jim tam najednou nikam nevešel. Takže ho museli dávat na různý jiný místa, který byli mnohem viditelnější: různě třeba u pokladny, nebo na nějakých stojáncích, atd. A údajně tehdy prodejci volali do Zima Softwaru, co mají dělat s tou krabicí, když se jim už nevejde nikam do jejich polic. Takovýhle drobnosti připoutali k tý hře jako velkou pozornost. Včetně recenzí. O tom bych asi neměl mluvit, ale už tehdy se dělalo to, že když se dala hra k recenzi a ta recenze nebyla dobrá, tak se dalo s těmi redaktory ještě promluvit o tom, aby tu recenzi buď vůbec nezveřejnili, a nebo aby si to třeba rozmysleli, nebo aby to ten magazín dal k recenzování někomu jinýmu. Takže všechny takovýhle prostě tanečky kolem toho byly. Ta hra vyšla těsně před Vánocemi devadesát osm a stačily jenom poslední dva týdny roku, aby se stala nejprodávanější hrou celýho roku. A samozřejmě celý další rok byla taky nejprodávanější. A to pak i vedlo k tomu, že v Zima Software chtěli okamžitě navázat dalším dílem. Což, my už jsme nechtěli.</A>
                

                <Q speaker={RS}>Kromě velký krabice a kromě recenzí v Levelu, řešili jste tehdy ten marketing ještě nějak?</Q>
                

                <A speaker={LK}>To řešil právě Martin Zima. Klasicky reklamy v herních magazínech, protože nic jinýho se vlastně jako dělat nedalo.</A>
                

                <Q speaker={RS}>Chtěl bys ještě něco doplnit k tomu <i>Poldovi</i>?</Q>
                

                <A speaker={LK}>My jsme do <i>Poldy</i> zapracovali strašně moc skrytých věcí a odkazů, který téměř nikdo nemá šanci odhalit, pokud o nich neví. Taková největší a nejzajímavější věc je, že tam je hodně multifunkční ten telefon, v <i>Poldovi</i>. Skrz ten telefon, když člověk ví, jaký čísla vyťukat, se může dovolat ledaskomu. A třeba my všichni tři autoři, já, Jarda a Radek, tam máme rozhovor s Pankrácem, v případě, že se nám dovolá a jde jenom o to najít ty telefonní čísla. Ty telefonní čísla jsou v samoobsluze, na takovým malinkým zeleným lístečku, na který když se klikne, tak jsou tam naše tři telefonní čísla a na ty jde pak zavolat z telefonu. A jsou to fakt naše skutečný telefonní čísla. A je to jediná situace v tý hře, kdy hráči můžou slyšet nás autory. Takže to je asi takový největší tajemství. Pak je tam schovaná spousta dalších odkazů, ale to už by bylo zas na dlouhý vyprávění.</A>
                

                <Q speaker={RS}>Klidně povídej. Času máme dost.</Q>
                

                <A speaker={LK}>Třeba první co mě napadá… v redakci na monitoru počítače běží text, který se jinak nedá prostě vůbec přečíst ani zpracovat, ale je to, jestli se nepletu, text od Luneticů, <i>Máma</i>. A takových sraček je tam fůra, fakt hromada. Já sám bych si je musel trochu osvěžit, abych je dokázal všechny popsat, ale tu největší a nejtajnější věc jsem prozradil.</A>
                
            </Chapter>
            <Chapter title="Studium na vysoké škole a období po Poldovi">


                <Q speaker={RS}>Tak tím pádem bych se přesunul k období po vydání <i>Poldy</i>.</Q>
                

                <A speaker={LK}>Vlastně pak v tom roce devadesát devět my jsme vlastně vůbec neplánovali, že budeme dělat pokračování. Samozřejmě z pohledu Martina Zimy jako vydavatele to mělo jasný smysl v tom pokračovat, ale my jsme vlastně neměli potřebu. My jsme jednak měli jako fakt dost peněz, z toho co nám to vydělalo. Jako studenti jsme měli úplně minimální náklady na živobytí. A tak jsme vlastně vůbec neměli potřebu dělat nějaký pokračování. Chtěli jsme prostě udělat úplně zase novou, úplně naprosto jinou hru. Jakoby Martin Zima samozřejmě chtěl vytěžit ten potenciál – a vůbec se tomu z dnešního pohledu producenta nedivím. My jsme z tý Obchodní akademie šli všichni na technickou univerzitu do Liberce, na stejný obor, na marketing, a žili jsme na těch kolejích a užívali jsme si ty honoráře. A protože byl <span class="c0 c2">Polda </span><span class="c0">nejprodávanější hrou vůbec tady, tak to znamenalo, že palírny na kolejích jely fakt naplno. Já nevím jak to říct abych se ničeho nedotknul, ale za námi chodili tehdy ti největší piráti, kterým tam jelo třeba šest palíren, od rána do večera. Úplně normálně nám děkovali, tiskli nám ruce a úplně si nás předcházeli. </span><span class="c0 c2">Polda </span><span class="c1 c0">jim vydělal tolik peněz, jako žádná jiná hra. A to bylo právě jako hrozně hezký, že oni si toho vážili, že nás znají. A hýčkali si nás, jo.</span></A>
                

                <Q speaker={RS}>Byl to takový příjemný symbiotický vztah.</Q>
                

                <A speaker={LK}>Jo, asi tak. My jsme věděli, že to je součást toho. My sami jsme si samozřejmě nikdy jako originální hry nekupovali. Nedivili jsme se tomu, že si všichni lidi kupujou prostě <i>Poldu</i> zpirátěnýho, protože my jsme to nedělali jinak. Tehdy jsme ale udělali jednu takovou malou sviňárničku, a to bylo to, že jsme <i>Poldu</i> na to CDčko umístili šestkrát, aby tam nebylo další místo, a aby prostě nemohli dělat ty piráti kompilace. Takže prostě oni museli fakt jako vypálit jako CDčko jenom s <i>Poldou</i>, přestože ten <i>Polda</i> sám o sobě měl jako nějakejch jako sto mega. A my jsme ho tam prostě dali jako šestkrát. A jako…</A>
                

                <Q speaker={RS}>Vydával se <i>Polda</i> vlastně i na disketách, nebo se vydával už jenom na CDčkách?</Q>
                

                <A speaker={LK}>Jenom na CDčkách, na disketách už by to nešlo kvůli tomu dabingu. Vlastně ten dabing dělal velkou část toho obsahu. Takže my jsme provedli takovouhle prasárničku a říkal jsem si „no tak, jestli teda to mají lidi pirátit, tak ať mají CDčko jenom s <i>Poldou</i>.” Protože tady bylo úplně normální, že se dělaly kompilace. Že bylo CDčko, na kterým byla hromada her a my jsme řikali: „ne-e.”</A>
                

                <Q speaker={RS}>Jenom <i>Polda</i>.</Q>
                

                <A speaker={LK}>Jenom <i>Polda</i>. Takže ty úplně největší piráti z celých kolejí si nás vyloženě rozmazlovali. A my jsme si to užívali a nezazlívali jsme jim to. Protože my sami jsme si tehdy hry nekupovali. Teď jsem zrovna prohlížel starý Excalibury, kolik vlastně tehdy stály hry a tehdy originálka stála tisícovku. To tehdy byla třeba čtvrtina měsíčního platu. Na to si nikdo nevydělal na brigádě. To aby třeba celý léto pracoval na brigádě, aby si pak koupil jednu hru.</A>
                

                <Q speaker={RS}>A pak zjistil, že je špatná.</Q>
                

                <A speaker={LK}>Jo, jo. <i>Polda</i> tehdy stál šest stovek, což bylo tak akorát na českou hru. Ale jak jsem říkal, že JRC tady tehdy mělo monopol, tak to znamenalo, že JRC od Zimy ty hry odkupovalo za dvě stovky a prodávalo za šest. S tím se nedalo nic dělat. Takže to jsou asi takový poslední pikantnosti k <i>Poldovi</i>. Pak když jsme dodělali <i>Poldu</i>, tak jsme si řekli „jo, super, hotovo, jdeme na další hru, která nás bude fakt bavit a kterou si užijeme.” A šli jsme do toho s tím, že jsme bydleli na kolejích, do školy jsme moc chodit nemuseli, protože jsme to v pohodě zvládali, měli jsme hromadu peněz, takže jsme nemuseli chodit nikam na brigády ani řešit nějaký kapesný. A řekli jsem si „no tak si splníme nějaký sen a uděláme si fakt jako hru, kterou opravdu jako chceme.” A tehdy právě přicházel internet a to najednou dalo úplně nový možnosti, najednou jsme si uvědomili, že my si vlastně můžeme hru distribuovat sami. To bylo do tý doby jako naprosto nemyslitelný. Úplně nový prostor pro příležitosti. A my jsme žili divoký studentský život, a nějak jsme vlastně vůbec neřešili nějaký komerční potenciál tý naší další hry. A tak jsme si řekli: „jo, uděláme prostě nějakou první malou českou hru, která se bude distribuovat po netu, budem jí třeba doplňovat dalšíma přídavkama a bude to totální zhoukanost.” Tak jsme nad tím prostě celý večery dumali jak udělat co nejšílenější hru. A tím se dostáváme k <i>Bulánkům</i>. Samozřejmě, Martin Zima nám to nemohl zapomenout, že nechceme pokračovat v <i>Poldovi</i>, i když to byl taky hezky nastartovaný komerční projekt a do dneška je.</A>
                

                <Q speaker={RS}>Ty ses mi jednou mimo rozhovor zmiňoval, že ještě probíhá nějaká komunikace mezi vámi a Zimou ohledně <i>Poldy</i>. Jak to vlastně fungovalo v tý době a jak se to třeba vyvíjelo během času? Protože on potom Zima dělal už <i>Poldy</i> sám, ale podíleli jste se na tom nějak?</Q>
                

                <A speaker={LK}>Ne. My jsme se pak vlastně dohodli na tom, že pokud chce teda dělat další <i>Poldy</i>… On si myslel, že další <i>Poldy</i> může dělat dál bez nás, a my jsme mu prostřednictvím právníků vysvětlili, že ne. On to pochopil a my mu vlastně poskytli licenci na další pokračování. A furt jsme v kontaktu, a třeba teď jsme řešili – předloni jakoby – remake <i>Poldy</i> pro mobilní zařízení. No a normálně  vycházíme spolu naprosto korektně. Všichni víme, že nám jde o byznys a nikdo to nechce ničím pokazit.</A>
                

                <Q speaker={RS}>Takže váš vztah k <i>Poldovi</i> končí u toho, že prodáváte Zimovi licenci.</Q>
                

                <A speaker={LK}>Ano.</A>
                

                <Q speaker={RS}>Ale nekonzultujete nic?</Q>
                

                <A speaker={LK}>Ne.</A>
                

                <Q speaker={RS}>Takže všechno už si dělá sám.</Q>
                

                <A speaker={LK}>Ano,  je to tak. Teď co řešíme – a to zas nevím, jestli by to nemělo být mimo záznam – že právě ten tlak fanoušků je tak velký, že by chtěli znovu Poldu: buď jako remaster a nebo jako remake. A my to teď právě řešíme s Jardou a s Radkem, k čemu se přiklonit a jestli vůbec něco z toho. A samozřejmě uděláme port pro Steam, aby to lidi mohli hrát teď na aktuálních PCčkových platformách, ale s tím remasterem nebo remakem hodně váháme. To je velký rozhodnutí a spousta práce a starostí.</A>

                
                <!--<p class="appendix">Dodatek ze dne 29.01.2025</p>
                <Q speaker={RS}>Kamila Hurníková říkala, že ten spor mezi vámi a Zimou skončil u soudu, což by z <i>Poldy</i> dělalo asi první hru, která se k soudu dostala. Jak vlastně vypadalo to soudní řízení?</Q>
                
                
                <A speaker={LK}>To byl první soud, který se týkal počítačové hry a tehdy hlavně nebyli vůbec soudní znalci, který by to tenkrát mohli nějak posuzovat. Zároveň tehdá vůbec nefungovalo licenční právo. Tady se bavím o době, kdy to byla jedna velká divočina. Nicméně po tom soudu jsme mu prodali tu licenci a teď i po 25 letech nám pořád chodí peníze z <i>Poldy</i>.</A>


                <Q speaker={RS}>A ten soud skončil soudním rozsudkem nebo mimosoudní dohodou?</Q>


                <A speaker={LK}>Muselo to skončit mimosoudní dohodou. Tehdy soudce řekl, že by bylo mnohem lepší, kdybychom se domluvilo mimo.</A>


                <Q speaker={RS}>Zvali se aspoň nějaký soudní znalci?</Q>


                <A speaker={LK}>Jo, jo. Pozvali nějkaýho soudního znalce, který byl odborník na IT, ale videohry šli totálně mimo.</A>


                <Q speaker={RS}>Předpokládám, že k tomu soudu jste chodili všichni, jak ty, tak Radek, tak Jarda.</Q>


                <A speaker={LK}>Všichni tři jsme byli u toho soudu.</A>


                <Q speaker={RS}>Vy jste v té době byli na vysoké – já si nedokážu představit, že bych v takové době řešil shánění právníka, sezení u soudu apod. Jak jste sháněli toho právníka a jak jste došli k tomu, že se budete soudit se Zimou?</Q>
                
                
                <A speaker={LK}>Na tom, že budeme soudit Zimu jsme se shodli. My jsme si to mohli hlavně díky příjmům z <i>Poldy</i> dovolit. My nebyli ani proti tomu, abby dvojka <i>Poldy</i> vznikla, jen jsme chtěli, aby vznikla s naším souhlasem.</A>


                <Q speaker={VS}>A podíleli jste se na tom všichni stejným dílem, nebo si někdo třeba vzal na starosti komunikaci s právníkem a jiný zase dělali něco jinýho?</Q>


                <A speaker={LK}>Všichni jsme se na tom podíleli stejně. My jsme si v Liberci vzali místní právničku, která byla hodně ostrá a ta nám to vlastně vybojovala.</A>


                <Q speaker={VS}>A mluvil o tom tehdy třeba nějaký herní časopis?</Q>


                <A speaker={LK}>Vůbec. My jsme to tehdy vůbec nijak neventilovali a celé to bylo mezi náma.</A>


                <Q speaker={RS}>Kde ty soudy vlastně probíhali? Někde v Liberci?</Q>


                <A speaker={LK}>Ne, ne, tady na Městským soudu v Praze u Náměstí míru. To bylo mimojiné poprvé co jsem byl u soudu.</A>


                <Q speaker={VS}>V Zima Software nepracoval jen Zima, ale pracovali zde i jiný lidi, často asi vaši známí. Reagovali nějak negativně na ten soud?</Q>
                
                
                <A speaker={LK}>Ne, to se nedělo. Ani k žádným výhružkám apod. nedošlo.</A>


                <Q speaker={RS}>Jak nakonec vypadala ta mimosoudní dohoda? Na co se vztahovala ta licence?</Q>

                
                <A speaker={LK}>Ta licence byla jen na značku <i>Polda</i>, práva na postavy a obsah té hry jsme úplně vyřešený neměli.</A>
                <hr style="margin-top: 0; margin-bottom: 20px;">-->


            </Chapter>
            <Chapter title="Bulánci">


                <Q speaker={RS}>Takže <i>Bulánci</i>.</Q>
                

                <A speaker={LK}>Takže <i>Bulánci</i>! No, tak kde začít? Já to tedy řeknu takhle: my jsme chtěli udělat něco fakt jednak nezávislého, což do tý doby neexistovalo. Udělat nezávislou hru do roku devadesát devět nebylo možný, to jako neexistovalo. A chtěli jsme udělat něco undergroundového, něco, co ukáže všem, že se doba změnila a že teď to jde dělat už úplně jinak. A já začnu tím, že proč <i>Bulánci</i>? Já jsem vlastně nepovídal, proč jsme vlastně SleepTeam. Já do dneška z toho názvu jsem trochu rozpačitý. My jsme byli jednou v létě na trampu u řeky, a když jsme byli jako už v dobrý náladě , tak jsme si řekli „my jsme vlastně jako takový dream team.” Akorát to bylo moc arogantní, nazývat se takhle, tak jsme si řekli – jelikož jsme furt spali – že budeme SleepTeam. A řekli jsme si, že další hra by měla mít něco společnýho se spánkem. My už jsme měli zhruba představu o tom základním konceptu tý hry a teď jsme jenom přemýšleli jak to vztáhnout k tomu spánku. No, takže ty polštářci se nabízeli. Akorát já jsem prostě tehdy udělal hroznou blbost, že jsem to nazval <i>Bulánci</i>. Protože tam odkud my pocházíme – ze severních Čech, jako Louny, Žatec, Chomutov – tak každý ví, co je to bulánek a nás vůbec nenapadlo, že by zbytek republiky nevěděl, co je bulánek. A bohužel na tohleto jsme přišli až příliš pozdě. A do dneška se s tím setkávám, že jednak lidi nevědí, co to znamená, včetně těch dětí, co tady byly dneska. Oni vědí, že Bulánci jsou hra, ale vlastně vůbec nevědí, že bulánci mají něco společnýho s těma polštářkama. Lidi vlastně ani nevědí jak to skloňovat, že jo. Myslí si, že <i>Bulánci</i>, souvisí asi nějak s plakáním. Prostě fakt netuší, drtivá většina lidí vůbec netuší. A proto jsme se i teď rozhodli, že když už ji vydáme do celýho světa, tak pod tady tím názvem. Protože už je to jedno, když už ani Češi nevědí, co to jsou bulánci.</A>
                

                <Q speaker={RS}>Jak se překládá do angličtiny ten druhý díl?</Q>
                

                <A speaker={LK}>No právě že nepřekládá.</A>
                

                <Q speaker={RS}>Jakože jste jenom dali pryč čárku nad a?</Q>
                

                <A speaker={LK}>Ano. Jenom jsme dali pryč čárku nad a.</A>
                

                <Q speaker={RS}>Ještě mě vlastně napadá – jak jste došli k logu firmy?</Q>
                

                <A speaker={LK}>My jsme chtěli jako něco snového a holčička na houpačce ve svitu měsíce nám přišla dostatečně snové logo. Takže… <i>Bulánci</i>. Základem bylo, že to musí být maličká hra, která se vejde na disketu, klasickou tři a půlku. Musí to být lokální multiplayer, a to tak, že tři lidi na jedný klávesnici a nebo čtyři lidi v jedný počítačový síti. To byly základní předpoklady, a to byly vlastně zároveň i ty věci, který byly příčinou toho úspěchu – že to byla prostě párty hra. Snadná, rychlá, všichni okamžitě pochopili, o co tam jde. A hlavně se to usadilo v podstatě ve všech počítačových sítích. Na všech školách, na všech kolejích, ve všech firmách a společnostech. A my jsme si do toho furt vymýšleli nějaký různý blbůstky a skrytý věci. Třeba tu poezii: my jsme tam napsali pár prvních básniček, který tam kolovaly, a pak jsme s každým updatem skrze naše webové stránky vyhlásili, aby nám lidi posílali další básničky. My jsme se pak poradila a ty díla, co nám přišli dobrý jsme pak použili. A tohle jsme dělali s každým rozšířením. A ta hra má právě v sobě spoustu skrytých věcí, který spousta lidí ani neví. Jestli teda v něčem má ta hra prvenství, tak to bylo, když mě napadlo, aby ta hra měla jinou atmosféru ve dne a v noci. A toho si asi málokdo všimnul. Jakmile pak ta hra vyšla, tak se kolem toho okamžitě vytvořil obrovský kult, a strašně moc klanů třeba. Co je třeba zajímavý je to, že tu hru nám pomohlo prosadit Centrum.cz. My jsme tehdy sháněli sponzora a nabízeli jsme reklamní prostor na začátku tý hry – když ji jako startujete – za nějakou sumu. A furt se nám nedařilo, protože nám všichni říkali: „co? reklamní prostor ve hře? to jste se asi zbláznili.” Pak jsme přišli do Centrum.cz a tam nám řekli, že by to rozhodně brali, ale že by nám nedali peníze, ale dali by nám reklamní prostor v hodnotě dvou milionů ve svých médiích. Což na tehdejší dobu – jako rok 2001 – to bylo hodně reklamního prostoru. A tím to fakt nastartovali a nakonec to ještě hodně přesáhli – ve finále to byly nějaký tři až čtyři miliony jenom na reklamě. Tím se to dostalo mezi všechny lidi. Strašně moc to tu hru nakoplo. Takže my jsme vlastně z těch původních <i>Bulánků</i> nevydělali vůbec nic. Bylo to čistě pro nás, jenom pro radost a ten jediný komerční potenciál jsme takhle vyměnili za reklamní prostor. No, ale tehdy se to rozjelo. Tehdy se to fakt nastartovalo a už se to do dneška nezastavilo.</A>
                

                <p class="appendix">Dodatek ze dne 29.01.2025</p>
                <Q speaker={RS}>A jak třeba vypadala ta propagace na tom Centru.cz?</Q>


                <A speaker={LK}>My jsme měli na tom Centru.cz takový bannery, který byli extrémně šokující. Bulánci poprvé vyšli před Vánoci, takže my jsme udělali reklamu, kde byl prostřílený vánoční kapr. A to zaujalo. Tehdy se taky hodně dělali webový pohlednice, takže jsme třeba na Valentýna udělali bulánka jak drží v ruce srdce. Takže takovýhle jsme my dělali šílenosti, který na svou dobu byli samozřejmě kontroverzní. Tyhlety grafiky všechny samozřejmě dělal Jarda Wagner.</A>


                <Q speaker={RS}>Od verze 1.20 <i>Bulánků</i> nebylo na začátku hry logo Centra.cz, ale firmy San Studio. Co to bylo za firmu?</Q>


                <A speaker={LK}>To byla moje firma s Kamilou a Jardou, v rámci které jsme dělali design — hlavně weby, reklamy apod.</A>


                <Q speaker={RS}>A dostávali se k vám — jako k San Studiu — lidi skrze <i>Bulánky</i>?</Q>


                <A speaker={LK}>Nějaký asi jo, ale asi ne moc. Určitě k nám nikdo nepřišel a neřekl: „já jsem se k vám dostal přes <i>Bulánky</i>." Nebo si to minimálně nepamatuji.</A>
                <hr style="margin-top: 0; margin-bottom: 20px;">

                <Q speaker={RS}>Jedna z věcí, na kterou jsem narazil v jednom rozhovoru, který jste dávali myslím někdy kolem roku 2006, byla, že z těch původních třech až čtyřech lidí, z kterých byl složený SleepTeam, se to začalo rozšiřovat. Jak vlastně tohle vzniklo? Jestli je to vůbec pravda?</Q>
                

                <A speaker={LK}>Jako moc není. Občas nám jako někdo pomohl, ale pořádně se ten tým rozrostl teprve až u nových <i>Bulánků</i>. Tehdy jsme to vlastně tahali v tý původní čtyřčlenný sestavě. Občas nám někdo s něčím pomohl, ale jinak se nedá říct, že by se tým rozrostl.</A>
                

                <Q speaker={RS}>Jo, jasně. Já se zase zeptám víc k těm jako technickým věcem, specificky k tý distribuci. <i>Bulánci</i> jsou v tomhletom hodně specifický, že to je jedna z těch prvních českých her, která byla reálně distribuovaná přes internet a ještě ke všemu jako shareware. Jak jste vlastně tohleto řešili?</Q>
                

                <A speaker={LK}>Museli jsme mít samozřejmě vlastní web, kde jsme to primárně nabízeli ke stažení, ale pak jsme to vlastně distribuovali i přes všechny ty freewarový servery. Třeba Slunečnice, nebo všechno to, co tehdy bylo. My bychom to z vlastního serveru, ze svýho hostingu bychom to neutáhli, takže jsme to nabízeli přes všechny tady ty sdílený služby. My jsme to teď nedávno počítali a spočítali jsme, že máme v Český Republice zhruba patnáct milionů downloadů, což se samozřejmě každý pozastaví, jak je možný, že s deseti miliony lidí je patnáct milionů downloadů. Ono je to ale daný tím, že většina lidí si tu hru vždycky stáhla jenom do paměti, spustila to, a příště znovu. Hlavně v mnoha těch firemních a školních sítích se to nedalo stáhnout úplně, nebo spíš nainstalovat, že jo. Takže lidi si to prostě jenom stáhli do paměti spustit to z paměti a pak to hráli a pak zase znovu. K dnešnímu dni už to může být třeba klidně dvacet milionů, ale to je právě tady tím, že si to lidi neinstalovali, ale že si to stáhli vždycky znovu a znovu a znovu. Takže takhle. My jsme jako s tím neměli žádný velký náklady a spíš jsme to jako nechávali tady na těch jiných službách, aby si to oni obstarali.</A>
                

                <Q speaker={RS}>Vy jste byli v tehdá na vysoký škole a asi jsi díky tomu měl i docela dobrý vhled do toho, jak fungovala ta kultura kolem <i>Bulánků</i>, protože dost lidí to tam asi hrálo, ne?</Q>
                

                <A speaker={LK}>No, to kupodivu ne. Byli lidi kolem nás co to hráli, to jo, ale jak byl ten internet ještě v začátcích, tak my jsme vlastně neměli téměř žádnou skutečnou odezvu. My jsme teprve až s velkým odstupem mnoha let viděli, co to vlastně bylo za vlnu a jak moc velký fenomén to byl, ale v tu chvíli jsme to vůbec netušili. Třeba dva, tři roky jsme vůbec nevěděli, kolik lidí to vlastně hraje a jak moc je to rozjetý. A nejvíc, co poznáváme třeba až teď s odstupem deseti let, tak prostě potkáváme lidi a oni říkají: „jo, <i>Bulánci</i>, to hráli přeci všichni.” A my říkáme „jak všichni? Kdo všichni?” My jsme to nevěděli, my jsme to vůbec netušili. A to bylo prostě tím, že byl ten internet ještě furt v plenkách. Jenom, abych jako to ilustroval: v době, kdy vyšli <i>Bulánci</i>, tak byl furt vytáčený internet. Byla pevná linka s modemem, člověk se připojil k netu, chvilku to pípalo, pak se připojil, a pak prostě koruna za minutu – v lepším případě. A v téhle fázi byl tehdy internet. A i když <i>Bulánci</i> už šli tehdy hrát přes internet, že už jsme je takhle designovali, tak málokdo si to mohl dovolit, protože ta úroveň toho připojení a ta rychlost, to bylo úplně k ničemu. Proto i ta internetová komunita byla strašně roztříštěná a my jsme měli úplně minimální zpětnou vazbu, co se vlastně kolem tý hry děje.</A>
                

                <Q speaker={RS}>Ale do nějaký míry jste museli mít nějakou zpětnou vazbu. Protože jste jednak dostávali ty básničky a jednak jste asi dostávali nějaký informace přímo od Centra.cz?</Q>
                

                <A speaker={LK}>To moc ne, ale měli jsme právě odezvu, v rámci tý poezie a v rámci klanů, který se kolem toho budovali. Ale jinak jsme netušili. Neměli jsme vůbec reálnou představu, kdo všechno v týhle zemi to vlastně hraje, nebo jaký je ten reálný dopad tý hry. To ne.</A>
                

                <Q speaker={RS}>Rozebral bys trošku ty klany? Jako jak to třeba fungovalo?</Q>
                

                <A speaker={LK}>No to byly lidi, který se v tom vzájemně utkávali. Takže se prostě sešli na LAN parties a tam ty jednotlivé klany spolu soupeřily. A to dokonce trvá do dneška. Jako mě to samotného překvapuje. A jsou i prestižní korporáty a třeba i právnický společnosti, které mají tradici jednou za rok si dát turnaj ve starých <i>Buláncích</i>. Mají ty emulátory na to, aby to rozchodili na těch počítačích a tak. A v Brně se třeba každý rok před Vánocemi koná jako velký turnaj v <i>Buláncích</i>. Takže ta kultura kolem toho furt ještě žije. Nikdy nás to nepřestává překvapovat. Vždycky nás to dostane, když se takhle doslechneme, jak, kdo, kde je pořád ještě hraje. Dneska už to znamená opravdu pro to něco udělat – mít ty emulátory, nebo starý operační systémy a tak.</A>
                

                <p class="appendix">Dodatek ze dne 29.01.2025</p>
                <Q speaker={RS}>Co se týče ještě těch klanů — vy jste měli na svých webových stránkách seznam webovek různých fan klubů a klanů. Kde jste to brali, a kdo to tam přidával?</Q>


                <A speaker={LK}>O webovky jsem se staral já. A k těm fanklubům jsem se dostal díky vyhledávání, přes Yahoo a jiný první vyhledávače.</A>


                <Q speaker={RS}>Takže vám ty svoje webový stránky nikdo moc neposílal?</Q>


                <A speaker={LK}>Ne, spíš jsme to vyhledávali.</A>


                <Q speaker={RS}>A jaký byl záměr za tím, že jste takhle ty cizí stránky vystavovali?</Q>


                <A speaker={LK}>No aby se ty lidi nějak propojili. To jako vlastně nemělo žádný promyšlený záměr. Díky tomu, že byl už internet, tak díky tomu mohli začínat ty klany. A ty klany stejně většinou začínali lokálně, mezi kamarády na škole apod. Ono i když tam to hraní přes internet bylo možný — nejdřív přes Hamatchi a potom přímo v rámci hry — tak jenom hrát to mezi Prahou a Libercem bylo v podstatě nemožný. Protože prostě ta odezva byla tak dlouhá, že to nešlo.</A>


                <Q speaker={RS}>Kamila Hurníková povídala, že vám jednou napsala celá firma, která se ptala, kde je nová mapa, kterou jste slíbili. Jak jste vlastně komunitě komunikovali, že má vyjít nový obsah do hry?</Q>


                <A speaker={LK}>Měli jsme web a měli jsme mail.</A>


                <Q speaker={RS}>Takže se to ty lidi dozvídali asi hlavně skrze ty vaše webové stránky?</Q>

                
                <A speaker={LK}>Nejspíš jo. Navíc skrze ten mail jsme se snažili odpovídat fakt každýmu. Já teda odpovídal hlavně holkám. (smích)</A>

                
                <Q speaker={RS}>A z té mailové komunikace, byl bys schopný odhadnout, kolik vám třeba psalo holek?</Q>


                <A speaker={LK}>Já myslím tak jako pětina, což bylo na tehdejší dobu obzvlšť dost.</A>


                <Q speaker={RS}>Kamila mimojiné říkala, že vám lidi často psali abyste do hry přidali nějakou konkrétní zbraň nebo mapu — kolikrát se stalo, že jste nápad od fanouška vzali a implementovali do hry?</Q>


                <A speaker={LK}>To ti řeknu přesně — ani jednou.</A>
                <hr style="margin-top: 0; margin-bottom: 20px;">

                <Q speaker={RS}>Ty jsi několikrát zmiňoval, že jste rozšiřovali tu hru v průběhu času. Mohl by jsi nějak víc do hloubky probrat vlastně ten proces toho, co jste vlastně přidávali?</Q>
                

                <A speaker={LK}>My jsme tu hru stavěli od začátku tak, aby byla otevřena jakýmkoliv rozšířením. Takže jsme tam vlastně s dalšíma přídavkama mohli přidávat jednak další poezii, ale i další zbraně a další funkce. Rozšiřovali jsme vlastně i tu historii, která tam je. A vlastně v posledním levelu, to byl Exitus, tak tam už jsme měli i náznak umělý inteligence – tam běhali počítačový bulánci. Pak vlastně vyšel ten editor levelů a ještě nějaký další levely, který už jsou teda fakt jenom pro skalní příznivce. Ten editor byl docela zásadní, protože teď i u nových <i>Bulánků</i> už jsme vycházeli rovnou z editoru. My jsme nejdřív udělali editor a pak jsme teprve stavěli ty levely, protože to, aby si lidi mohli vytvořit vlastní mapy, je vlastně úplně strašně jako klíčový. To je pro tu komunitu a pro ten rozvoj tý komunity naprosto zásadní. A to bylo vlastně všechno ohledně těch rozšíření. Pak už jsme jako nic dalšího nedělali.</A>
                

                <p class="appendix">Dodatek ze dne 29.01.2025</p>
                <Q speaker={RS}>Zaujalo mě, že u mapy jménem <i>Malárie</i> vznikli dvě verze — jedna méně a druhá více hardwarově náročná. Jak tohle vzniklo? Bylo to na popud komunity?</Q>


                <A speaker={LK}>No protože se ta normální verze sekala. Dokonce i nám. Takže pokud obě ty verze nevyšli naráz tak vyšli minimálně blízko sebe. Mluvíme tady o éře Pentia a obzvlášť v těch učebnách kde se to nejvíc hrálo byli často ještě 486ky.</A>
                <hr style="margin-top: 0; margin-bottom: 20px;">

                <Q speaker={RS}>Byl bys schopný bilancovat to, jak vlastně ta komunita byla třeba tvůrčí, nebo jak vznikaly ty věci, kam se vlastně vůbec třeba uploadovaly, jak se to šířilo?</Q>
                

                <A speaker={LK}>Strašně moc. Strašně moc právě. A na tom jsme fakt poznali sílu tý komunity. Kdy lidi byli neuvěřitelně tvůrčí. Jako mnohem víc, než jsme si dokázali kdy představit. Produkovali jako takovou spoustu map a levelů, že jsme sami docela zírali. A vlastně ty levely tam šly snadno přihrát. Ten editor zkompiloval .eap soubor, ten se pak přihrál do toho adresáře s tou hrou a okamžitě tam tenhle level byl. Fakt jsme se nestačili divit.</A>
                

                <Q speaker={RS}>A jak se šířily ty mapy?</Q>
                

                <A speaker={LK}>No přes net. A šlo to úplně mimo nás. Vůbec jsme nad tím neměli žádnou kontrolu. A právě třeba hodně přes ty klany. Překvapili nás právě lidi, jako jak moc jsou kreativní.</A>
                
            </Chapter>
            <Chapter title="Combat Pillows (Distribuce Bulánků do zahraničí)">


                <Q speaker={RS}>Myslím někdy v roce 2003 jste <i>Bulánky</i> předělali pro distribuci do zahraničí – na <i>Combat Pillows</i>. Mohl bys povědět něco o tom?</Q>
                

                <A speaker={LK}>My si řekli, že když jsme poznali to, co se nám podařilo tady v Čechách, tak jsem si řekli, že další level je dokázat to prodat v zahraničí. Tehdy byla digitální distribuce placená a úplně začínala. Tehdy neesixtoval Steam ani žádná podobná platforma, takže každý si to musel prodávat sám, a fungovalo to tak, že si lidi přes kreditní kartu koupili klíč. Klíč jo, teď to zní úplně banálně, ale v tý době to byla naprostá novinka nebo něco úplně totálně nového. Takže my jsme takhle prodávali klíče, kterýma si to lidi mohli odemknout. No a na základě toho jsme pak založili i náš label: <span class="c0 c2">IWannaPlay</span><span class="c1 c0">. Tam jsme pak prodávali stejným způsobem i všechny ty další mini hříčky, který jsme vytvořili. Ale to byla taková slepá větev, nebo respektive tím, jak přišly velký platformy typu Steam, tak s těma nešlo soutěžit.</span></A>
                

                <Q speaker={RS}>Tipuju, že už dneska tahle stránka nefunguje, co?</Q>
                

                <A speaker={LK}>No jasně že ne. My neměli šanci soutěžit s největšími hráči, který přišli a všechno převálcovali.</A>

                <!--<p class="appendix">Dodatek ze dne 29.01.2025</p>
                <Q speaker={VS}>A psal vám vlastně někdo ze zahraničí ohledně těch <i>Combat Pillows</i>?</Q>


                <A speaker={LK}>Minimálně. Občas někdo napsal, ale jinak moc ne. Spíš psali kolem jiných her, co vycházeli na <i>IWannaPlay</i>. Konkrétně ohledně erotických her, které jsme dělali s Jardou Wagnerem (pozn.: jedná se o hry <i>Under 18: Jenny</i> a <i>Strip Teenis</i> obě z roku 2007). Nicméně tu distribuci erotických her nám hodně zkomplikoval PayPal. PayPal byla jediná cesta jak v té době na internetu něco kupovat a PayPalu to neustále reportovali nějaký lidi, že jde o nevhodný obsah.</A>
                <hr style="margin-top: 0; margin-bottom: 20px;">-->
            </Chapter>
            <Chapter title="Bulánci pro tlačítkové telefony">


                <Q speaker={RS}>Já se ještě zeptám na poslední věc k <i>Bulánkům</i>, a to je verze na mobily. Jak to vůbec vznikalo?</Q>
                

                <A speaker={LK}>No tak my jsme se tak v roce 2006 rozhodli udělat verzi pro ještě starý tlačítkový telefony, javový. A trošku se nám to protáhlo, že jsme to vyvíjeli dýl než jsme chtěli, a ve chvíli, kdy ta hra vyšla, tak na českým trhu se stala nejprodávanější hrou všech dob. Jenže prostě tím, jak nám to trvalo, tak jsme s tím přišli vlastně ve chvíli, kdy už ten trh naprosto končil. Jasný, bylo krásný, že si to jakoby všichni koupili. My jsme si totiž dávali strašně moc záležet na tom, aby to mohli hrát lidi na různých telefonech u jednoho stolu, což nebylo jako úplně samozřejmé, že se sejdou čtyři různý telefony, sice všechny s podporou javy, ale každý telefon úplně jiný a ono poběží. To nám trvalo docela dlouho. No ale vyšlo to přesně v roce, kdy přišel na trh iPhone – první iPhone. A v tu dobu už bylo jasný, že tenhle byznys jde do háje. To byl byznys, který byl založený na operátorech a agregátorech. To znamená, že telefonní operátor si z tý koupený hry vzal třetinu, pak tam byl agregátor, který to zprostředkovával, ten si vzal další třetinu, a pak zbylo něco málo těm vývojářům. A v tom roce 2010 nebo 2011 už bylo jasný, že tohle jde úplně do háje. Jakože to je mrtvý a všichni ty agregátoři se začali stahovat z trhu a de facto nějak řízeně jako krachovat. Takže <i>Bulánci</i> vyšli přesně v tu dobu, že víceméně zakončili tuhle éru tlačítkových telefonů. Taková ta úplně největší perlička na závěr.</A>
                

                <Q speaker={RS}>A vy jste tu hru outsourcovali nebo jste je dělali sami?</Q>
                

                <A speaker={LK}>Ne, ne. Dělali jsme jí ve spolupráci právě s našima kolegama, takže to byla koprodukce.</A>
                

                <Q speaker={RS}>S kým jste to vlastně dělali?</Q>
                

                <A speaker={LK}>Dělali jsme to s Pavlem Barákem. O kterým možná ještě bude řeč. To je náš dlouholetý kolega.</A>
                

                <Q speaker={RS}>A on to dělal pod nějakou firmou?</Q>
                

                <A speaker={LK}>Ne, ne.</A>
                

                <Q speaker={RS}>Takže to dělal SleepTeam a plus Pavel Barák.</Q>
                

                <A speaker={LK}>Ano. Plus Pavel Barák a ještě jeden programátor.</A>
                
            </Chapter>
            <Chapter title="Studium na FAMU a založení Katedry herního designu">


                <Q speaker={RS}>Takže jsi teda dostudoval technickou v Liberci, pak jste dodělali <i>Bulánky</i>, a pak jsi šel studovat na FAMU produkci?</Q>
                

                <A speaker={LK}>Pak jsme se vlastně celý tým přesunuli do Prahy, a já jsem se přihlásil na FAMU, na produkci a shodou okolností mě tam vzali. Studoval jsem nejdřív bakaláře, a pak – jelikož jsem byl jediný na celém FAMU, kdo věděl něco o hrách, tak už na konci bakaláře a pak během celého magistra už jsem tam zároveň přednášel a učil – herní produkci a distribuci. No a to je asi tak všechno, co můžu říct na záznamu. Ne tak samozřejmě, že to byly divoký léta, ale co se týká nějaký produktivity, tak to moc neprobíhalo. A já jsem končil v roce 2011, kdy jsem měl magisterský státnice. No a v roce 2016 se mi ozvala Helena Bendová, že nám splní náš dávný společný sen, založit novou katedru zaměřenou na hry. Takže to trvalo pět let, jenom to samotný zakládání. Je to teda jenom magisterský obor, dvouletý, no a teď jdou ke státnicím naši první studenti. Takže to by asi bylo FAMU. Žádný pikantní detaily už asi nebudou.</A>
                

                <Q speaker={RS}>Byl by jsi schopný nějak ty dva roky už po tý době bilancovat? Nebo byl by si schopný popsat trošku víc ten proces toho pětiletého procesu zakládání nový katedry na FAMU?</Q>
                

                <A speaker={LK}>No, nerad bych se do toho nějak víc pouštěl, ale, když to řeknu, tak to znamenalo tisíce stránek dokumentů, a když říkám tisíce stránek, to fakt jako nepřehánim. Vůbec, ani trochu. A spousty obhajob, spousty potýkání se s jinými katedrami, hledání místa, kde ta katedra bude. Žádná katedra se nechtěla vzdát vůbec ničeho v prospěch tady toho našeho nového podniku. To bylo teda fakt výživný. Kdybych věděl předem, co to bude obnášet, tak bych si to hodně rozmyslel, jestli do toho pujdu znova. Teď samozřejmě jsem rád, že ta katedra existuje, funguje, prosperuje a tak, ale znovu bych do toho asi nešel. Tak je to ale se vším. Vždycky člověk neví do čeho jde a kdyby věděl, tak by si to důkladněji promyslel.</A>
                
            </Chapter>
            <Chapter title="Jiná činnost v rámci herního průmyslu">


                <Q speaker={RS}>Teď jsi nějak poslal, co jsi dělal v rámci FAMU, jak jako student, tak jako učitel. Tys ale i dělal hromadu jiných než vývojářských činností v rámci herního průmyslu, např. spolek Český hry?</Q>
                

                <A speaker={LK}>Český hry jsme založili někdy v roce 2003 a byla to vlastně první organizace která měla sdružovat herní vývojáře u nás. A jejím hlavním posláním bylo pořádat vývojářský konference. Což bylo GDSko, Game developer session. Mimochodem, do dneška vlastně nejstarší evropská herní konference. No a Český hry už postupně zanikly, vlastně sídlily tady u mě. A letos už jsme to tak nějak uzavřeli a ukončili. A vlastně ty Český hry vlastně dělali to GDSko – to pak přešlo na jinou společnost – a to sdružování vlastně postupně převzalo GDAčko, Game developers association. No ale co třeba ty Český hry začaly, nebo jako co jsem si říkal, že nám tady chybí, je udílení cen. Ty jsme začali udílet v Třeboni v rámci AniFestu v roce 2011. No a to vlastně udílíme do teď, s tím, že před pěti lety jsme na to založili samostatnou neziskovkou Česká hra roku, která taky sídlí tady u mě. Mám ještě říct něco k tomu GDAčku?</A>
                

                <Q speaker={RS}>Určitě.</Q>
                

                <A speaker={LK}>My jsme se odhodlali k tomu, že bysme fakt měli založit asociaci, která by sdružovala všechny největší herní společnosti u nás. </A>
                

                <Q speaker={RS}>Můžu se jenom zeptat v jakém roce to zhruba bylo?</Q>
                

                <A speaker={LK}>Bylo to v roce 2017. Já jsem byl zvolen prvním zakládajícím předsedou, takže jsme ustavili takový ty základní věci – pravidla, stanovy, a všechno tady to. No a pak jsem to předal Pavlovi Barákovi.</A>
                

                <Q speaker={RS}>A když jste začínali s GDSkem – jak ty konference probíhali?</Q>
                

                <A speaker={LK}>My jsme GDSko původně zakládali v Brně. První ročníky se konaly v Brně, v Kulturním domě Rubín, a v roce 2010 se to přesunulo do Prahy, kde to bylo na Malostranském náměstí na Matfyzu. To byl ročník, který jsem pořádal přímo sám a to bylo poprvý a naposled, co jsem dělal jako celou konferenci jen já sám. Už bych do toho znovu nešel. Pak to vlastně převzaly Český hry a pak to jakoby přišlo už do soukromých rukou. A teď je to vlastně na Vinohradech. No, a GDSko už je dneska docela velká konference. Už tam docela jezdí hodně zahraničních hostů, a je to vlastně teď třináctý rok, co se to koná v Praze. Předtím bylo pět ročníků v Brně a teď třináct ročníků v Praze.</A>
                

                <Q speaker={RS}>No a ta Česká hra roku teda začala v roce 2011 v Třeboni a vy jste to dělali v rámci AniFestu? Jak to probíhalo?</Q>
                

                <A speaker={LK}>Mě oslovili pořadatelé, jestli bychom – jelikož tam udíleli ceny – tak jestli bychom nechtěli udílet ceny i za hry. Tak jsme si řekli, že jo, navrhli jsme ty skleněný sošky a stanovili jsme kategorie. Ty první ročníky jsem řešil úplně sám, s tím, že se udíleli dvě kategorie, pak tři kategorie, no a pak jsme se v roce 2018? úplně oddělili a začali jsme to pořádat v Praze. Pak ve chvíli, kdy přišel covid, tak jsme to museli odpískat a od tý doby už je to jenom online. Ale jinak to byly klasický galavečery, kde se sešlo divadlo plný hostů z herního průmyslu, a byli tam moderátoři, udělili se sošky, a všechno. Zas v tuhle chvíli, třeba nejsem schopen říct, jaká bude další budoucnost Český hry roku. No a moje hlavní kategorie, tak to bylo samozřejmě celoživotní přínos české herní kultuře. To jsem vždycky řešil nejvíc.</A>
                

                <Q speaker={RS}>Ono od covidu to začal hodně řešit Indian, že?</Q>
                

                <A speaker={LK}>Ano.</A>
                

                <Q speaker={RS}>Jak vlastně moc se podílíš na Český hře roku od doby, co to probíhá v rámci studií Indiana?</Q>
                

                <A speaker={LK}>Právě. Řešim už jenom ten celoživotní přínos. Ostatní kategorie už necháváme na ostatních. My už vlastně v rámci našeho spolku – v Česká hra roku – řešíme už vlastně jenom to, kdo bude v kterých kategoriích hlasovat, kdo bude nominován a tak. A moje parketa už je jenom ten celoživotní přínos.</A>
                
            </Chapter>
            <Chapter title="President: Path to Power">


                <Q speaker={RS}>No, to máme asi do velký míry probraný ty mimo herní věci a mně tady zbývají ještě poslední dvě hry, na který bych se chtěl zeptat. A první je hra, která vyšla v roce 2016, <i>President: Path to power</i>.</Q>
                

                <A speaker={LK}>Dobře. Takže <i>President: Path to power</i>. To byla hra, kterou jsem napsal a produkoval pro Apple Watch – byla to první česká hra pro Apple Watch. Mě vždy fascinovalo hrát hru na hodinkách. Hodně jsem se inspiroval právě v osmibitových textových strategiích, konkrétně třeba jako byl <i>Diktátor</i>. A byla to jednoduchá textová hra, kde se vždycky volí mezi dvěma možnostmi, a jde o to jako vystoupat z regionální politiky až do funkce prezidenta spojených států. Tahle hra byla plánovaná na dobu, kdy se Trump ucházel v prezidentských volbách, takže spojený státy žily prezidentskými volbami a byl to nejlepší čas, kdy uvést nějakou takovouhle hru, která to nějakým způsobem reflektuje. Já jsem teda jenom napsal scénář, produkoval jsem jí, ale samozřejmě tam byl jako ještě další produkční, výtvarník, programátor atd.</A>
                

                <Q speaker={RS}>A mohl bys třeba povědět něco víc k tomu kreativnímu procesu? Jednak mi přijde vlastně dost zajímavý vůbec ten nápad udělat hru na Apple Watch. Jak ses dostal třeba k lidem, který na to byli  ochotný programovat? To zní obecně jako docela riskantní projekt.</Q>
                

                <A speaker={LK}>Dalo by se říct, že to bylo dobrodružný. Za velkou část tý produkce vděčím mýmu kamarádovi Vláďovi Geršlovi, který opravdu získal na to fakt schopný lidi a strašně šikovný kluky. Tam jinak nejsou moc zajímavý historky. Možná kromě jedný a to byl to byl název. My jsme se rozhodli pro název jako <i>Watch President</i>. A ve chvíli, kdy jsme to poslali do Applu, aby nám to pustili do distribuce, tak jsme zjistili, že v názvu tý hry nesmí být slovo „watch.” Protože to bylo pro Apple Watch, tak si Apple vymyslel, že v žádný jejich aplikaci ani žádný jejich hře pro hodinky nesmí být v názvu slovo „watch.” Takže jsme to přejmenovali na <i>President: Path of power</i>. A jenom ten samotný proces přejmenování zabral tři týdny. To bylo velký poučení, abych si příště důkladně pročetl obchodní podmínky Applu, co se týká názvů aplikací a her. No a to je asi všechno.</A>
                

                <Q speaker={RS}>A jak vlastně probíhala celá produkce u toho <i>Presidenta</i>?</Q>
                

                <A speaker={LK}>Tam to bylo pořád v pohodě, protože to byl malinký tým. To jsme byli v podstatě čtyři a to se furt dalo. </A>

                
            </Chapter>

            <center>
                <i>Konec rozhovoru</i>
            </center>
            
            
            
        </div>
    {/snippet}
</InterviewPage>