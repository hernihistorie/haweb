<script lang="ts">
    /* https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit */
	import Interview from "$lib/Interview.svelte";
	import Answer from "$lib/interviews/Answer.svelte"
	import Question from "$lib/interviews/Question.svelte";
	import Chapter from "$lib/interviews/Chapter.svelte";

    import { data } from "./interview";

    let A = Answer;
    let Q = Question;
</script>

<style>

    .c2 {
        font-style: italic
    }
</style>

<Interview data={data}>
    <div slot="content">
        
        <Chapter title="Rodinné zázemí, vzdělání, první počítač a videohry">

            <Q speaker="RS">Dnes je 31. července 2023, rozhovor s Luborem Kopeckým na téma jeho činnosti v rámci studia SleepTeam a jiné videoherní činnosti je veden Rudolfem Janem Suchým. A já se zeptám na první otázku, ještě než se dostaneme k tvojí videoherní tvorbě, tak mi něco pověz o tom odkud pocházíš, jaké je tvoje rodinné zázemí, co jsi dělal před tím, než jste založili SleepTeam.</Q>
            

            <A speaker="LK">Já jsem se narodil v Lounech, v říjnu 1978 a mým prvním počítačem byl Didaktik M. V podstatě od první chvíle, kdy jsem si zahrál první hry, tak jsem věděl, že je chci dělat. Takže to bylo docela jednoduchý a jasný. A pak v roce 1993 jsem šel studovat na obchodní akademii do Žatce. A tam jsem vlastně potkal všechny ostatní členy týmu. Tam jsme se dali dohromady. Se mnou v ročníku byl Jarda Wagner, naprosto talentovaný designér a výtvarník, Kamila Hurníková, která byla a je super produkční, a o ročník výš byl Radek Matějka, úplně geniální programátor. Takže jsme se dohodli, že budeme dělat hry. A to byl základ týmu pro další hry. Tam jsme vlastně začali, a pak jsme už dál pokračovali po škole.</A>
            

            <Q speaker="RS">Když jsi mluvil o tom Didaktiku M, tak k jakým hrám ses třeba dostal? Máš třeba nějaký specifický hry, co tě třeba inspirovaly v tvé tvorbě?</Q>
            

            <A speaker="LK">Na tom Didaktiku moc ne. Já jsem vždycky měl rád strategický hry. Teprve vlastně až na střední škole jsem si pořídil první PCčko, to byla 386ka. A tam jsem teprv začal hrát hry který mě fakt jako pak inspirovaly dál. To byly hlavně právě adventury, klasický první adventury. I jakoby z hlediska vývoje ty adventury byly vlastně takový jako nejjednodušší, nejlíp vyvíjitelný.</A>
            

            <Q speaker="RS">A kdyby sis třeba vzpomněl na nějaký specifický hry který jsi hrál na tom DOSu? Nějaký specifický adventury cos hrál? A co tě v tý době zaujaly a inspirovaly při tvorbě<span class="c0 c2"> Pold</span><span class="c1 c0">y?</span></Q>
            

            <A speaker="LK">Jo, to je těžký. Tak jako třeba rozhodně jako <span class="c0 c2">Goblins</span><span class="c0">. </span><span class="c0 c2">Simon the Sorcerer</span><span class="c0">, </span><span class="c0 c2">Šimon kouzelníkem</span><span class="c0"> zněl český překlad, a samozřejmě </span><span class="c0 c2">Monkey Island</span><span class="c1 c0">. Prostě takovýhle klasiky.</span></A>
            
        </Chapter>
        <Chapter title="Založení Sleep Teamu a Polda">


            <Q speaker="RS">Tak se asi přesuneme teda k tomu, tak jste se potkali s Jardou, Radkem a Kamilou a začali jste vyvíjet hru.</Q>
            

            <A speaker="LK">To bylo jako hodně divoký. My jsme se ve chvíli, kdy jsme se pro to rozhodli, tak jsme chtěli udělat jenom malinkou hříčku. Vlastně takový demo, ale pak se nám to úplně vymklo a právě výsledkem byl <span class="c0 c2">Polda</span><span class="c1 c0">. S tim, že to bylo jakoby strašně složitý. My jsme se potkávali jenom ve škole a tam samozřejmě nebyl čas společně něco vyvíjet. Takže jsme to dělali tak, že jsme to vlastně dělali ve volném čase, o víkendech, o prázdninách. To probíhalo tak, že když jsme si chtěli vyměnit nějaký data, což bylo nutný, tak jsme prostě na tři-a-půl palcovou disketu nahráli data, sedli jsme na kolo a jeli jsme do vedlejšího města, třeba dvacet kilometrů, abychom tu disketou předali. Když jsme si potřebovali zavolat, tak jsme samozřejmě museli jít do telefonní budky, protože nikdo z nás tehdy ještě doma neměl klasický telefon. Mobilní telefony tedy ještě vůbec nebyly. A bylo to teda fakt hodně jako dobrodružný. S tím, že pokud jsme něco nahráli na disketu, a cestou se ten záznam nějak porušil, když se ta disketa zmáčkla, tak jsme měli smůlu. Pak už jsme jako vozili radši dvě diskety. A tehdy jsme opravdu každý měli kartu do telefonní budky, a prostě jsme si takhle volali, když bylo něco nutnýho, a jinak jsme se jenom v krátkosti viděli ve škole, kde jsme si řekli ty důležitý věci a předali jsme si, co šlo.</span></A>
            

            <Q speaker="RS">Jak vás vůbec napadlo dělat příběh o policajtu Pankrácovi?</Q>
            

            <A speaker="LK">Ono se to nabízelo. Pro adventuru je ideální žánr nějaká detektivka a v tý samozřejmě musí účinkovat policajt. Ono se to vůbec jako nemělo jmenovat <span class="c0 c2">Polda</span><span class="c0">. My jsme to vyvíjeli pod pracovním názvem </span><span class="c0 c2">Chaloupka</span><span class="c0">, jako po perníkový chaloupce. A tehdy v 90. letech policajti byli proslulí tím, že byli natvrdlý a totálně zkorumpovaný. To byla prostě jako ideální postava pro takovouhle adventuru.</span><span class="c0"> My jsme se vlastně snažili do toho promítnout úplně všechny tehdejší fenomény, který byly v tu dobu úplně nový, který jsme prostě neznali. Prostě různý subkultury, drogy, bezdomovci, sex shop a právě tu korupci. Všechny ty věci, který byly tehdy vlastně úplně nový, který do tý doby tady nikdo v podstatě neznal, a byly nějakým způsobem zajímavý a atraktivní. A my jsme se u toho fakt jako hodně bavili, a</span><span class="c1 c0">le samozřejmě z dnešního pohledu by to bylo asi jako dost nekorektní, ale tehdy to prostě byla taková, řekněme satira, když to tak řeknu. Ale věřím, že spousta těch věcí už by dneska neprošla.</span></A>
            

            <Q speaker="RS">Ty jsi mluvil o tom, že nebylo úplně jednoduchý dostat informaci, ať už digitální nebo mluvenou, z bodu A do bodu B. Jak jste si vůbec rozdělovali práci? Protože udělat takto dohromady scénář celý hry musí být dost náročný a vlastně jakýkoliv úkon, musí být takto docela složitý.</Q>
            

            <A speaker="LK">No tak největší práci na tomhle odved právě Jarda, s tím že, jsme měli každý z nás vyhrazený úseky scénáře nebo rozhovory, který jsme psali zvlášť. Nebylo to jako že by jeden z nás napsal všechno. Takhle jsme si to rozdělili, ale opravdu největší invenci byla právě na Jardovi. A tam to bylo jasný. Radek programoval, já jsem dělal hlavně hudbu, nějaký věci kolem produkce, a pak jsem stříhal ty dialogy a zvuky. A bylo to vždycky o tom, že jsme se jenom v rychlosti ve škole potkali, řekli jsme si, co a jak a pak se spoléhali na to, že každej prostě udělá tu svoji část práce.</A>
            

            <Q speaker="RS">Ty jsi říkal, že jsi řešil hlavně hudbu, audio a věci kolem produkce, že Radek programoval. Co dělal Jarda kromě toho, že vymýšlel kostru scénáře? Pochopil jsem správně?</Q>
            

            <A speaker="LK">Ano, ano. Jarda vlastně napsal ten příběh a hlavně udělal kompletně celou grafiku a animace. Což je z dnešního pohledu úplně neuvěřitelná práce, protože jak je to prostě pixel art, tak to fakt znamenalo prostě každý pixel naklikat. A z dnešního pohledu mi to přijde úplně neuvěřitelný a nemožný. Co za tím bylo práce než se vytvořila každá jedna scéna, než se vytvořily animace. To bylo šílený.</A>
            

            <Q speaker="RS">A Kamila Hurníková, ta dělala…?</Q>
            

            <A speaker="LK">No tak, Kamila se především starala o nás. Což byl taky důležitý, protože to byly jako někdy takový stavy, že jsme třeba i několik dní nespali. A prostě jsme jenom seděli, koukali do počítače a klikali, aby to bylo. Hlavně aby jsme to stihli v tom devadesátým osmým roce a aby jsme to stihli do Vánoc, protože tam už nás tlačil čas a tam to nešlo propásnout.</A>
            

            <Q speaker="RS">Ty jsi zmiňoval, že jste každý psal kus z těch scén. Ono to asi úplně z tý hry není patrný, ale i přesto se zeptám, jestli si vzpomeneš třeba, co jsi psal ty specificky za scény?</Q>
            

            <A speaker="LK">No jo no. Vybavily se mi nějaký, ale to zrovna na který jako nejsem nějak extra hrdý. To byly různý telefonáty. Tam Pankrác může tím telefonem ve hře volat na různý čísla, který různě ve hře najde, takže mluví třeba jako s popelářema,… jak to říct, s telefonní prostitutkou. Nevím, jak to slušně pojmenovat.</A>
            

            <Q speaker="RS">Sex po telefonu.</Q>
            

            <A speaker="LK">Sex po telefonu.</A>
            

            <Q speaker="RS">Nevím jak se říká teda těm zaměstnancům.</Q>
            

            <A speaker="LK">No, asi jo. Tak jsme na to tehdy oslovili Sabinu Laurinovou. A ta to jednoznačně a rázně odmítla, jakože tohle teda rozhodně ne. No a nakonec to bylo dobře, protože ten výsledek byl mnohem lepší. A tehdy se všichni ty dabéři na tom jako strašně vyřádili. Že to jako fakt dělali rádi a bavilo je to. A můžu třeba jakoby mluvit o dabérech?</A>
            

            <Q speaker="RS">Jo jasně. Já jsem se k tomu chtěl dostat, takže asi klidně mluv o dabingu.</Q>
            

            <A speaker="LK">Třeba pan Sobota z toho byl samozřejmě takový trochu rozpačitý. My jsme původně oslovili pana Dvořáka, jestli by nechtěl dabovat Pankráce. A ten se na to necítil, protože hry byly něco, co šlo úplně mimo něj. Tak Luděk Sobota na to přistoupil, a zvládli jsme to. No, ale pan Lábus i pan Nárožný byly úplně boží. Pan Lábus ten byl úplně… dodneška na to rád vzpomínám. Pak jsme s ním ještě i párkrát spolupracovali. Ten byl naprosto dokonalý, měl jako v sobě pokoru a zároveň do toho dával všechno. To bylo úplně super. Pan Nárožný, když nás uviděl první den ve studiu, tak se docela vylekal jak jsme mladý. Že ho nějaký dvacetiletý týpci budou jako režírovat. Ale pak to zvládnul taky úplně skvěle. To se fakt sešla hodně dobrá trojice. A vlastně i ty ostatní dabéři, ty kteří dabovali ostatní postavy, byly vlastně hrozně fajn. To mě strašně překvapilo, že se na nás nekoukali přes prsty. Mladí kluci prostě říkají člověku, co a jak mají jako dabovat. Takže to bylo hodně super. Na to rád vzpomínám.</A>
            

            <Q speaker="RS">Tys to trochu naklepnul, ale stejně bych se asi ještě doptal, jaký vlastně byl ten přístup těch lidí, co viděli hromadu mladých kluků, který ke všemu po nich chtěli něco, co oni v životě nedělali a to je dabovat videohru?</Q>
            

            <A speaker="LK">Oni byli zvyklí dabovat filmy kde před sebou něco vidí a dabují to. A teď najednou před sebou neměli vůbec nic a museli to jenom namlouvat. Takže to pro ně bylo nový. A hlavně jim tam chyběla ta odezva, že vlastně s někým vedou dialog. Oni jenom měli napsaný scénář, že jo, co mají odříkat, a vlastně nevěděli, s kym si povídají a o čem ten rozhovor je. Takže z toho samozřejmě byli hodně nesví. Ale poradili si s tím dobře.</A>
            

            <Q speaker="RS">Kdo to režíroval? Případně jaký vlastně byl ten přístup k tý režii toho dabingu?</Q>
            

            <A speaker="LK">Hlavním režisérem byl Jarda. Byli jsme u toho teda oba, ale Jarda byl ten, kdo těm pánum hercům musel občas říct, že něco dělají špatně, nebo že mají něco říct jinak. Což bylo jako těžký, a tak… takže jo. Režisérem byl Jarda, no. </A>
            

            <Q speaker="RS">A jakej byl váš přístup? Bavili jste se s těmi dabéry, jaký byl kontext scény, nebo jste jim prostě dali papír a řekli jim, jestli to mají přečíst trochu jinak?</Q>
            

            <A speaker="LK">Ne, tak samozřejmě, že jsme se jim snažili vysvětlit zhruba o co tam jde, ale pro ně to bylo něco naprosto novýho.</A>
            

            <Q speaker="RS">Jo. Ono to s tim asi trochu souvisí, protože, teď mě kdyžtak oprav, ale vy jste se většinou k těm dabérům už dostávali přímo přes Zimu, ne?</Q>
            

            <A speaker="LK">Z části. K některým jo, a některý jsme sháněli přes divadla, ve kterých účinkují. Přes jejich jakoby domovský divadla. Něco sehnal právě jako Martin Zima, a… no jako tehdy to jinak nešlo, protože se nedal najít na netu kontakt na ně a ozvat se jim. Takže to jsme museli prostě fakt přes to divadlo, no.</A>
            

            <Q speaker="RS">Když jsme nakousnuli toho Zimu, tak jak jste se dostali přímo k Zimovi?</Q>
            

            <A speaker="LK">Jo, to je dobrá historka. To jsme takhle z Excaliburu měli kontakty na hlavní vydavatele, řekněme. A tak jsme si řekli, že to vezmeme podle pořadí, podle seznamu. První bylo JRC. To byl tehdy monopol a věděli jsme, že i kdyby to vydal kdokoliv jiný, tak stejně to může distribuovat jenom JRCčko. Takže jsme si takhle vlezli do telefonní budky a zavolali jsme do JRC. Jelikož to ale bylo v létě devadesát osm, tak ten člověk, který tam měl na starosti vydávání her, byl zrovna na dovolený. Tak druhý v seznamu byl Zima, tak jsme zavolali do Zima Software, tam nám to vzali a že je to zajímá, že si to rádi prohlídnou. Díky tomu jsme se s nima domluvili. A Zima byl pak vydavatelem, že financoval vylisování všech těch CDček, a výrobu krabic a takhle. Dostal to do distribuce, samozřejmě to nakonec stejně distribuovalo JRC, protože jiná možnost nebyla. A tehdy to bylo jako docela drsný, protože tím, že JRC mělo monopol, tak jejich marže byla 200% na tý hře. A u <span class="c0 c2">Poldy</span><span class="c0"> se fakt sešla obrovská kombinace všech možných faktorů, který způsobili to, že to byl takový úspěch. Samozřejmě ten dabing, to bylo hodně důležitý, a pak různý takový drobnosti. Třeba ten obal, nebo ta krabice, ta vypadá, že se to na tom hodně podepsala. Jednak jsem navrhnul, aby </span><span class="c0 c2">Polda</span><span class="c1 c0"> byl ve stylu Strýčka Sama. Já se ten rok dozvěděl, že to má obrovský psychologický efekt – to, že na tebe nějaká postava ukazuje. Takže jsem si řekl ,,pojďme to zkusit, to určitě zabere.”</span></A>
            

            <Q speaker="RS">A zabralo.</Q>
            

            <A speaker="LK">Zabralo, no. Martin Zima pak zase přišel s dalším nápadem, že udělal větší krabice. Herní krabice tehdy měly naprosto standardizovaný rozměr a všechny obchody na to měly na míru udělaný police a  <span class="c0 c2">Polda</span><span class="c1 c0"> se jim tam najednou nikam nevešel. Takže ho museli dávat na různý jiný místa, který byli mnohem viditelnější: různě třeba u pokladny, nebo na nějakých stojáncích, atd. A  údajně tehdy prodejci volali do Zima Softwaru, co mají dělat s tou krabicí, když se jim už nevejde nikam do jejich polic. Takovýhle drobnosti připoutali k tý hře jako velkou pozornost. Včetně recenzí. O tom bych asi neměl mluvit, ale už tehdy se dělalo to, že když se dala hra k recenzi a ta recenze nebyla dobrá, tak se dalo s těmi redaktory ještě promluvit o tom, aby tu recenzi buď vůbec nezveřejnili, a nebo aby si to třeba rozmysleli, nebo aby to ten magazín dal k recenzování někomu jinýmu. Takže všechny takovýhle prostě tanečky kolem toho byly. Ta hra vyšla těsně před Vánocemi devadesát osm a stačily jenom poslední dva týdny roku, aby se stala nejprodávanější hrou celýho roku. A samozřejmě celý další rok byla taky nejprodávanější. A to pak i vedlo k tomu, že v Zima Software chtěli okamžitě navázat dalším dílem. Což, my už jsme nechtěli.</span></A>
            

            <Q speaker="RS">Kromě velký krabice a kromě recenzí v Levelu, řešili jste tehdy ten marketing ještě nějak?</Q>
            

            <A speaker="LK">To řešil právě Martin Zima. Klasicky reklamy v herních magazínech, protože nic jinýho se vlastně jako dělat nedalo.</A>
            

            <Q speaker="RS">Chtěl bys ještě něco doplnit k tomu<span class="c0 c2"> Poldovi</span><span class="c1 c0">?</span></Q>
            

            <A speaker="LK">My jsme do <span class="c0 c2">Poldy </span><span class="c0">zapracovali strašně moc skrytých věcí a odkazů, který téměř nikdo nemá šanci odhalit, pokud o nich neví. Taková největší a nejzajímavější věc je, že tam je hodně multifunkční ten telefon, v </span><span class="c0 c2">Poldovi</span><span class="c1 c0">. Skrz ten telefon, když člověk ví, jaký čísla vyťukat, se může dovolat ledaskomu. A třeba my všichni tři autoři, já, Jarda a Radek, tam máme rozhovor s Pankrácem, v případě, že se nám dovolá a jde jenom o to najít ty telefonní čísla. Ty telefonní čísla jsou v samoobsluze, na takovým malinkým zeleným lístečku, na který když se klikne, tak jsou tam naše tři telefonní čísla a na ty jde pak zavolat z telefonu. A jsou to fakt naše skutečný telefonní čísla. A je to jediná situace v tý hře, kdy hráči můžou slyšet nás autory. Takže to je asi takový největší tajemství. Pak je tam schovaná spousta dalších odkazů, ale to už by bylo zas na dlouhý vyprávění.</span></A>
            

            <Q speaker="RS">Klidně povídej. Času máme dost.</Q>
            

            <A speaker="LK">Třeba první co mě napadá… v redakci na monitoru počítače běží text, který se jinak nedá prostě vůbec přečíst ani zpracovat, ale je to, jestli se nepletu, text od Luneticů, <span class="c0 c2">Máma</span><span class="c0">. A takových sraček je tam fůra, fakt hromada. Já sám bych si je musel trochu osvěžit, abych je dokázal všechny popsat, ale tu největší a nejtajnější věc jsem prozradil.</span></A>
            
        </Chapter>
        <Chapter title="Studium na vysoké škole a období po Poldovi">


            <Q speaker="RS">Tak tím pádem bych se přesunul k období po vydání <span class="c0 c2">Poldy</span><span class="c1 c0">.</span></Q>
            

            <A speaker="LK">Vlastně pak v tom roce devadesát devět my jsme vlastně vůbec neplánovali, že budeme dělat pokračování. Samozřejmě z pohledu Martina Zimy jako vydavatele to mělo jasný smysl v tom pokračovat, ale my jsme vlastně neměli potřebu. My jsme jednak měli jako fakt dost peněz, z toho co nám to vydělalo. Jako studenti jsme měli úplně minimální náklady na živobytí. A tak jsme vlastně vůbec neměli potřebu dělat nějaký pokračování. Chtěli jsme prostě udělat úplně zase novou, úplně naprosto jinou hru. Jakoby Martin Zima samozřejmě chtěl vytěžit ten potenciál – a vůbec se tomu z dnešního pohledu producenta nedivím. My jsme z tý Obchodní akademie šli všichni na technickou univerzitu do Liberce, na stejný obor, na marketing, a žili jsme na těch kolejích a užívali jsme si ty honoráře. A protože byl <span class="c0 c2">Polda </span><span class="c0">nejprodávanější hrou vůbec tady, tak to znamenalo, že palírny na kolejích jely fakt naplno. Já nevím jak to říct abych se ničeho nedotknul, ale za námi chodili tehdy ti největší piráti, kterým tam jelo třeba šest palíren, od rána do večera. Úplně normálně nám děkovali, tiskli nám ruce a úplně si nás předcházeli. </span><span class="c0 c2">Polda </span><span class="c1 c0">jim vydělal tolik peněz, jako žádná jiná hra. A to bylo právě jako hrozně hezký, že oni si toho vážili, že nás znají. A hýčkali si nás, jo.</span></A>
            

            <Q speaker="RS">Byl to takový příjemný symbiotický vztah.</Q>
            

            <A speaker="LK">Jo, asi tak. My jsme věděli, že to je součást toho. My sami jsme si samozřejmě nikdy jako originální hry nekupovali. Nedivili jsme se tomu, že si všichni lidi kupujou prostě <span class="c0 c2">Poldu </span><span class="c0">zpirátěnýho, protože my jsme to nedělali jinak. Tehdy jsme ale udělali jednu takovou malou sviňárničku, a to bylo to, že jsme </span><span class="c0 c2">Poldu</span><span class="c0"> na to CDčko umístili šestkrát, aby tam nebylo další místo, a aby prostě nemohli dělat ty piráti kompilace.</span><span class="c3"> </span><span class="c0">Takže prostě oni museli fakt jako vypálit jako CDčko jenom s </span><span class="c0 c2">Poldou</span><span class="c0">, přestože ten </span><span class="c0 c2">Polda </span><span class="c1 c0">sám vo sobě měl jako nějakejch jako sto mega. A my jsme ho tam prostě dali jako šestkrát. A jako…</span></A>
            

            <Q speaker="RS">Vydával se <span class="c0 c2">Polda</span><span class="c1 c0"> vlastně i na disketách, nebo se vydával už jenom na CDčkách?</span></Q>
            

            <A speaker="LK">Jenom na CDčkách, na disketách už by to nešlo kvůli tomu dabingu. Vlastně ten dabing dělal velkou část toho obsahu. Takže my jsme provedli takovouhle prasárničku a říkal jsem si ,,no tak, jestli teda to mají lidi pirátit, tak ať mají CDčko jenom s <span class="c0 c2">Poldou</span><span class="c1 c0">.” Protože tady bylo úplně normální, že se dělaly kompilace. Že bylo CDčko, na kterým byla hromada her a my jsme řikali: ,,ne-e.”</span></A>
            

            <Q speaker="RS">Jenom <span class="c0 c2">Polda</span><span class="c1 c0">.</span></Q>
            

            <A speaker="LK">Jenom <span class="c0 c2">Polda</span><span class="c1 c0">. Takže ty úplně největší piráti z celých kolejí si nás vyloženě rozmazlovali. A my jsme si to užívali a nezazlívali jsme jim to. Protože my sami jsme si tehdy hry nekupovali. Teď jsem zrovna prohlížel starý Excalibury, kolik vlastně tehdy stály hry a tehdy originálka stála tisícovku. To tehdy byla třeba čtvrtina měsíčního platu. Na to si nikdo nevydělal na brigádě. To aby třeba celý léto pracoval na brigádě, aby si pak koupil jednu hru.</span></A>
            

            <Q speaker="RS">A pak zjistil, že je špatná.</Q>
            

            <A speaker="LK">Jo, jo. <span class="c0 c2">Polda </span><span class="c0">tehdy stál šest stovek, což bylo tak akorát na českou hru. Ale jak jsem říkal, že JRC tady tehdy mělo monopol, tak to znamenalo, že JRC od Zimy ty hry odkupovalo za dvě stovky a prodávalo za šest. S tím se nedalo nic dělat. Takže to jsou asi takový poslední pikantnosti k </span><span class="c0 c2">Poldovi</span><span class="c0">. Pak když jsme dodělali </span><span class="c0 c2">Poldu</span><span class="c0">, tak jsme si řekli ,,jo, super, hotovo, jdeme na další hru, která nás bude fakt bavit a kterou si užijeme.” A šli jsme do toho s tím, že jsme bydleli na kolejích, do školy jsme moc chodit nemuseli, protože jsme to v pohodě zvládali, měli jsme hromadu peněz, takže jsme nemuseli chodit nikam na brigády ani řešit nějaký kapesný. A řekli jsem si ,,no tak si splníme nějaký sen a uděláme si fakt jako hru, kterou opravdu jako chceme.” A tehdy právě přicházel internet a to najednou dalo úplně nový možnosti, najednou jsme si uvědomili, že my si vlastně můžeme hru distribuovat sami. To bylo do tý doby jako naprosto nemyslitelný. Úplně nový prostor pro příležitosti. A my jsme žili divoký studentský život, a nějak jsme vlastně vůbec neřešili nějaký komerční potenciál tý naší další hry. A tak jsme si řekli: ,,jo, uděláme prostě nějakou první malou českou hru, která se bude distribuovat po netu, budem jí třeba doplňovat dalšíma přídavkama a bude to totální zhoukanost.” Tak jsme nad tím prostě celý večery dumali jak udělat co nejšílenější hru. A tím se dostáváme k </span><span class="c0 c2">Bulánkům</span><span class="c0">. Samozřejmě, Martin Zima nám to nemohl zapomenout, že nechceme pokračovat v </span><span class="c0 c2">Poldovi</span><span class="c1 c0">, i když to byl taky hezky nastartovaný komerční projekt a do dneška je.</span></A>
            

            <Q speaker="RS">Ty ses mi jednou mimo rozhovor zmiňoval, že ještě probíhá nějaká komunikace mezi vámi a Zimou ohledně <span class="c0 c2">Poldy</span><span class="c0">. Jak to vlastně fungovalo v tý době a jak se to třeba vyvíjelo během času? Protože on potom Zima dělal už </span><span class="c0 c2">Poldy </span><span class="c1 c0">sám, ale podíleli jste se na tom nějak?</span></Q>
            

            <A speaker="LK">Ne. My jsme se pak vlastně dohodli na tom, že pokud chce teda dělat další <span class="c0 c2">Poldy</span><span class="c0">,… On si myslel, že další </span><span class="c0 c2">Poldy </span><span class="c0">může dělat dál bez nás, a my jsme mu prostřednictvím právníků vysvětlili, že ne. On to pochopil a my mu vlastně poskytli licenci na další pokračování. A furt jsme v kontaktu, a třeba teď jsme řešili – předloni jakoby – remake </span><span class="c0 c2">Poldy </span><span class="c1 c0">pro mobilní zařízení. No a normálně  vycházíme spolu naprosto korektně. Všichni víme, že nám jde o byznys a nikdo to nechce ničím pokazit.</span></A>
            

            <Q speaker="RS">Takže váš vztah k <span class="c0 c2">Poldovi </span><span class="c1 c0">končí u toho,  že prodáváte Zimovi licenci.</span></Q>
            

            <A speaker="LK">Ano.</A>
            

            <Q speaker="RS">Ale nekonzultujete nic?</Q>
            

            <A speaker="LK">Ne.</A>
            

            <Q speaker="RS">Takže všechno už si dělá sám.</Q>
            

            <A speaker="LK">Ano,  je to tak. Teď co řešíme – a to zas nevím, jestli by to nemělo být mimo záznam – že právě ten tlak fanoušků je tak velký, že by chtěli znovu Poldu: buď jako remaster a nebo jako remake. A my to teď právě řešíme s Jardou a s Radkem, k čemu se přiklonit a jestli vůbec něco z toho. A samozřejmě uděláme port pro Steam, aby to lidi mohli hrát teď na aktuálních PCčkových platformách, ale s tím remasterem nebo remakem hodně váháme. To je velký rozhodnutí a spousta práce a starostí.</A>
            
        </Chapter>
        <Chapter title="Bulánci">


            <Q speaker="RS">Takže <span class="c0 c2">Bulánci</span><span class="c1 c0">.</span></Q>
            

            <A speaker="LK">Takže <span class="c0 c2">Bulánci</span><span class="c0">! No, tak kde začít? Já to tedy řeknu takhle: my jsme chtěli udělat něco fakt jednak nezávislého, což do tý doby neexistovalo. Udělat nezávislou hru do roku devadesát devět  nebylo možný, to jako neexistovalo. A chtěli jsme udělat něco undergroundového, něco, co ukáže všem, že se doba změnila a že teď to jde dělat už úplně jinak. A já začnu tím, že proč </span><span class="c0 c2">Bulánci</span><span class="c0">? Já jsem vlastně nepovídal, proč jsme vlastně SleepTeam. Já do dneška z toho názvu jsem trochu rozpačitý. My jsme byli jednou v létě na trampu u řeky, a když jsme byli jako už v dobrý náladě , tak jsme si řekli ,,my jsme vlastně jako takový dream team.” Akorát to bylo moc arogantní, nazývat se takhle, tak jsme si řekli – jelikož jsme furt spali – že budeme SleepTeam. A řekli jsme si, že další hra by měla mít něco společnýho se spánkem. My už jsme měli zhruba představu o tom základním konceptu tý hry a teď jsme jenom přemýšleli jak to vztáhnout k tomu spánku. No, takže ty polštářci se nabízeli. Akorát já jsem prostě tehdy udělal hroznou blbost, že jsem to nazval </span><span class="c0 c2">Bulánci</span><span class="c0">. Protože tam odkud my pocházíme – ze severních Čech, jako Louny, Žatec, Chomutov – tak každý ví, co je to bulánek a nás vůbec nenapadlo, že by zbytek republiky nevěděl, co je bulánek. A bohužel na tohleto jsme přišli až příliš pozdě.</span><span class="c0 c2"> </span><span class="c0">A do dneška se s tím setkávám, že jednak lidi nevědí, co to znamená, včetně těch dětí, co tady byly dneska. Oni vědí, že Bulánci jsou hra, ale vlastně vůbec nevědí, že bulánci mají něco společnýho s těma polštářkama. Lidi vlastně ani nevědí jak to skloňovat, že jo. Myslí si, že </span><span class="c0 c2">Bulánci</span><span class="c1 c0">, souvisí asi nějak s plakáním. Prostě fakt netuší, drtivá většina lidí vůbec netuší. A proto jsme se i teď rozhodli, že když už ji vydáme do celýho světa, tak pod tady tím názvem. Protože už je to jedno, když už ani Češi nevědí, co to jsou bulánci.</span></A>
            

            <Q speaker="RS">Jak se překládá do angličtiny ten druhý díl?</Q>
            

            <A speaker="LK">No právě že nepřekládá.</A>
            

            <Q speaker="RS">Jakože jste jenom dali pryč čárku nad a?</Q>
            

            <A speaker="LK">Ano. Jenom jsme dali pryč čárku nad a.</A>
            

            <Q speaker="RS">Ještě mě vlastně napadá – jak jste došli k logu firmy?</Q>
            

            <A speaker="LK">My jsme chtěli jako něco snového a holčička na houpačce ve svitu měsíce nám přišla dostatečně snové logo. No a, takže… <span class="c0 c2">Bulánci</span><span class="c0">. Základem bylo, že to musí být maličká hra, která se vejde na disketu, klasickou tři a půlku. Musí to být lokální multiplayer, a to tak, že tři lidi na jedný klávesnici a nebo čtyři lidi v jedný počítačový síti. To byly základní předpoklady, a to byly vlastně zároveň i ty věci, který byly příčinou toho úspěchu – že to byla prostě párty hra. Snadná, rychlá, všichni okamžitě pochopili, o co tam jde. A hlavně se to usadilo v podstatě ve všech počítačových sítích. Na všech školách, na všech kolejích, ve všech firmách a společnostech. A my jsme si do toho furt vymýšleli nějaký různý blbůstky a skrytý věci. Třeba tu poezii: my jsme tam napsali pár prvních básniček, který tam kolovaly, a pak jsme vyzvali lidi, aby nám posílali další, a my jsme je tam pak postupně přidávali s každým dalším levelem. A ta hra má právě v sobě spoustu skrytých věcí, který spousta lidí ani neví. Jestli teda v něčem má ta hra prvenství, tak to bylo, když mě napadlo, aby ta hra měla jinou atmosféru ve dne a v noci. A toho si asi málokdo všimnul. Jakmile pak ta hra vyšla, tak se kolem toho okamžitě vytvořil obrovský kult, a strašně moc klanů třeba. Co je třeba zajímavý je to, že tu hru nám pomohlo prosadit Centrum.cz. My jsme tehdy sháněli sponzora a nabízeli jsme reklamní prostor na začátku tý hry – když ji jako startujete – za nějakou sumu. A furt se nám nedařilo, protože nám všichni říkali: ,,co? reklamní prostor ve hře? to jste se asi zbláznili.” Pak jsme přišli do Centrum.cz a tam nám řekli, že by to rozhodně brali, ale že by nám nedali peníze, ale dali by nám reklamní prostor v hodnotě dvou milionů ve svých médiích. Což na tehdejší dobu – jako rok 2001 – to bylo hodně reklamního prostoru. A tím to fakt nastartovali a nakonec to ještě hodně přesáhli – ve finále to byly nějaký tři až čtyři miliony jenom na reklamě. Tím se to dostalo mezi všechny lidi. Strašně moc to tu hru nakoplo. Takže my jsme vlastně z těch původních </span><span class="c0 c2">Bulánků </span><span class="c1 c0">nevydělali vůbec nic. Bylo to čistě pro nás, jenom pro radost a ten jediný komerční potenciál jsme takhle vyměnil za reklamní prostor. No, ale tehdy se to rozjelo. Tehdy se to fakt nastartovalo a už se to do dneška nezastavilo.</span></A>
            

            <Q speaker="RS">Jedna z věcí, na kterou jsem narazil v jednom rozhovoru, který jste dávali myslím někdy kolem roku 2006, byla, že z těch původních třech až čtyřech lidí, z kterých byl složený SleepTeam, se to začalo rozšiřovat. Jak vlastně tohle vzniklo? Jestli je to vůbec pravda?</Q>
            

            <A speaker="LK">Jako moc není. Občas nám jako někdo pomohl, ale pořádně se ten tým rozrostl teprve až u nových <span class="c0 c2">Bulánků</span><span class="c1 c0">. Tehdy jsme to vlastně tahali v tý původní čtyřčlenný sestavě. Občas nám někdo s něčím pomohl, ale jinak se nedá říct, že by se tým rozrostl.</span></A>
            

            <Q speaker="RS">Jo, jasně. Já se zase zeptám víc k těm jako technickým věcem, specificky k tý distribuci. <span class="c0 c2">Bulánci </span><span class="c1 c0">jsou v tomhletom hodně specifický, že to je jedna z těch prvních českých her, která byla reálně distribuovaná přes internet a ještě ke všemu jako shareware. Jak jste vlastně tohleto řešili?</span></Q>
            

            <A speaker="LK">Museli jsme mít samozřejmě vlastní web, kde jsme to primárně nabízeli ke stažení, ale pak jsme to vlastně distribuovali i přes všechny ty freewarový servery. Třeba Slunečnice, nebo všechno to, co tehdy bylo. My bychom to z vlastního serveru, ze svýho hostingu bychom to neutáhli, takže jsme to nabízeli přes všechny tady ty sdílený služby. My jsme to teď nedávno počítali a spočítali jsme, že máme v Český Republice zhruba patnáct milionů downloadů, což se samozřejmě každý pozastaví, jak je možný, že s deseti miliony lidí je patnáct milionů downloadů. Ono je to ale daný tím, že většina lidí si tu hru vždycky stáhla jenom do paměti, spustila to, a příště znovu. Hlavně v mnoha těch firemních a školních sítích se to nedalo stáhnout úplně, nebo spíš nainstalovat, že jo. Takže lidi si to prostě jenom stáhli do paměti spustit to z paměti a pak to hráli a pak zase znovu. K dnešnímu dni už to může být třeba klidně dvacet milionů, ale to je právě tady tím, že si to lidi neinstalovali, ale že si to stáhli vždycky znovu a znovu a znovu. Takže takhle. My jsme jako s tím neměli žádný velký náklady a spíš jsme to jako nechávali tady na těch jiných službách, aby si to oni obstarali.</A>
            

            <Q speaker="RS">Vy jste byli v tehdá na vysoký škole a asi jsi díky tomu měl i docela dobrý vhled do toho, jak fungovala ta kultura kolem <span class="c0 c2">Bulánků</span><span class="c1 c0">, protože dost lidí to tam asi hrálo, ne?</span></Q>
            

            <A speaker="LK">No, to kupodivu ne. Byli lidi kolem nás co to hráli, to jo, ale jak byl ten internet ještě v začátcích, tak my jsme vlastně neměli téměř žádnou skutečnou odezvu. My jsme teprve až s velkým odstupem mnoha let viděli, co to vlastně bylo za vlnu a jak moc velký fenomén to byl, ale v tu chvíli jsme to vůbec netušili. Třeba dva, tři roky jsme vůbec nevěděli, kolik lidí to vlastně hraje a jak moc je to rozjetý. A nejvíc, co poznáváme třeba až teď s odstupem deseti let, tak prostě potkáváme lidi a oni říkají: ,,jo, <span class="c0 c2">Bulánci</span><span class="c0">, to hráli přeci všichni.” A my říkáme ,,jak všichni? Kdo všichni?” My jsme to nevěděli, my jsme to vůbec netušili. A to bylo prostě tím, že byl ten internet ještě furt v plenkách. Jenom, abych jako to ilustroval: v době, kdy vyšli </span><span class="c0 c2">Bulánci</span><span class="c0">, tak byl furt vytáčený internet. Byla pevná linka s modemem, člověk se připojil k netu, chvilku to pípalo, pak se připojil, a pak prostě koruna za minutu – v lepším případě. A v téhle fázi byl tehdy internet. A i když </span><span class="c0 c2">Bulánci </span><span class="c1 c0">už šli tehdy hrát přes internet, že už jsme je takhle designovali, tak málokdo si to mohl dovolit, protože ta úroveň toho připojení a ta rychlost, to bylo úplně k ničemu. Proto i ta internetová komunita byla strašně roztříštěná a my jsme měli úplně minimální zpětnou vazbu, co se vlastně kolem tý hry děje.</span></A>
            

            <Q speaker="RS">Ale do nějaký míry jste museli mít nějakou zpětnou vazbu. Protože jste jednak dostávali ty básničky a jednak jste asi dostávali nějaký informace přímo vod Centra.cz?</Q>
            

            <A speaker="LK">To moc ne, ale měli jsme právě odezvu, v rámci tý poezie a v rámci klanů, který se kolem toho budovali. Ale jinak jsme netušili. Neměli jsme vůbec reálnou představu, kdo všechno v týhle zemi to vlastně hraje, nebo jaký je ten reálný dopad tý hry. To ne.</A>
            

            <Q speaker="RS">Rozebral bys trošku ty klany? Jako jak to třeba fungovalo?</Q>
            

            <A speaker="LK">No to byly klany a jako lidi, který se v tom vzájemně jako utkávali. Takže se prostě sešli na LAN parties a tam ty jednotlivé klany spolu soupeřily. A to dokonce trvá do dneška. Jako mě to samotného překvapuje. A jsou i prestižní korporáty a třeba i právnický společnosti, které mají tradici jednou za rok si dát turnaj ve starých <span class="c0 c2">Buláncích</span><span class="c0">. Mají ty emulátory na to, aby to rozchodili</span><span class="c0"> na těch počítačích a tak. A v Brně se třeba každý rok před Vánocemi koná jako velký turnaj v </span><span class="c0 c2">Buláncích</span><span class="c0">. Takže ta kultura kolem toho furt ještě žije. N</span><span class="c1 c0">ikdy nás to nepřestává překvapovat. Vždycky nás to dostane, když se takhle doslechneme, jak, kdo, kde je pořád ještě hraje. Dneska už to znamená opravdu pro to něco udělat – mít ty emulátory, nebo starý operační systémy a tak.</span></A>
            

            <Q speaker="RS">Ty jsi několikrát zmiňoval, že jste rozšiřovali tu hru v průběhu času. Mohl by jsi nějak víc do hloubky probrat vlastně ten proces toho, co jste vlastně přidávali?</Q>
            

            <A speaker="LK">My jsme tu hru stavěli od začátku tak, aby byla otevřena jakýmkoliv rozšířením. Takže jsme tam vlastně s dalšíma přídavkama mohli přidávat jednak další poezii, ale i další zbraně a další funkce. Rozšiřovali jsme vlastně i tu historii, která tam je. A vlastně v posledním levelu, to byl Exitus, tak tam už jsme měli i náznak umělý inteligence – tam běhali počítačový <span class="c0 c2">Bulánci</span><span class="c0">. Pak vlastně vyšel ten editor levelů a ještě nějaký další levely, který už jsou teda fakt jenom pro skalní příznivce. Ten editor byl docela zásadní, protože teď i u nových </span><span class="c0 c2">Bulánků </span><span class="c1 c0">už jsme vycházeli rovnou z editoru. My jsme nejdřív udělali editor a pak jsme teprve stavěli ty levely, protože to, aby si lidi mohli vytvořit vlastní mapy, je vlastně úplně strašně jako klíčový. To je pro tu komunitu a pro ten rozvoj tý komunity naprosto zásadní. A to bylo vlastně všechno ohledně těch rozšíření. Pak už jsme jako nic dalšího nedělali.</span></A>
            

            <Q speaker="RS">Byl bys schopný bilancovat to, jak vlastně ta komunita byla třeba tvůrčí, nebo jak vznikaly ty věci, kam se vlastně vůbec třeba uploadovaly, jak se to šířilo?</Q>
            

            <A speaker="LK">Strašně moc. Strašně moc právě. A na tom jsme fakt poznali sílu tý komunity. Kdy lidi byli neuvěřitelně tvůrčí. Jako mnohem víc, než jsme si dokázali kdy představit. Produkovali jako takovou spoustu map a levelů, že jsme sami docela zírali. A vlastně ty levely tam šly snadno přihrát. Ten editor zkompiloval .eap soubor, ten se pak přihrál do toho adresáře s tou hrou a okamžitě tam tenhle level byl. Fakt jsme se nestačili divit.</A>
            

            <Q speaker="RS">A jak se šířily ty mapy?</Q>
            

            <A speaker="LK">No přes net. A šlo to úplně mimo nás. Vůbec jsme nad tím neměli žádnou kontrolu. A právě třeba hodně přes ty klany. Překvapili nás právě lidi, jako jak moc jsou kreativní.</A>
            
        </Chapter>
        <Chapter title="Combat Pillows (Distribuce Bulánků do zahraničí)">


            <Q speaker="RS">Myslím někdy v roce 2003 jste <span class="c0 c2">Bulánky</span><span class="c0"> předělali pro distribuci do zahraničí – na </span><span class="c0 c2">Combat Pillows</span><span class="c1 c0">. Mohl bys povědět něco o tom?</span></Q>
            

            <A speaker="LK">My si řekli, že když jsme poznali to, co se nám podařilo tady v Čechách, tak jsem si řekli, že další level je dokázat to prodat v zahraničí. Tehdy byla digitální distribuce placená a úplně začínala. Tehdy neesixtoval Steam ani žádná podobná platforma, takže každý si to musel prodávat sám, a fungovalo to tak, že si lidi přes kreditní kartu koupili klíč. Klíč jo, teď to zní úplně banálně, ale v tý době to byla naprostá novinka nebo něco úplně totálně nového. Takže my jsme takhle prodávali klíče, kterýma si to lidi mohli odemknout. No a na základě toho jsme pak založili i náš label: <span class="c0 c2">IWannaPlay</span><span class="c1 c0">. Tam jsme pak prodávali stejným způsobem i všechny ty další mini hříčky, který jsme vytvořili. Ale to byla taková slepá větev, nebo respektive tím, jak přišly velký platformy typu Steam, tak s těma nešlo soutěžit.</span></A>
            

            <Q speaker="RS">Tipuju, že už dneska tahle stránka nefunguje, co?</Q>
            

            <A speaker="LK">No jasně že ne. My neměli šanci soutěžit s největšími hráči, který přišli a všechno převálcovali.</A>
            
        </Chapter>
        <Chapter title="Bulánci pro tlačítkové telefony">


            <Q speaker="RS">Já se ještě zeptám na poslední věc k <span class="c0 c2">Bulánkům</span><span class="c1 c0">, a to je verze na mobily. Jak to vůbec vznikalo?</span></Q>
            

            <A speaker="LK">No tak my jsme se rozhodli udělat verzi pro ještě starý tlačítkový telefony, javový. A trošku se nám to protáhlo, že jsme to vyvíjeli dýl než jsme chtěli, a ve chvíli, kdy ta hra vyšla, tak na českým trhu se stala nejprodávanější hrou všech dob. Jenže prostě tím, jak nám to trvalo, tak jsme s tím přišli vlastně ve chvíli, kdy už ten trh naprosto končil. Jasný, bylo krásný, že si to jakoby všichni koupili. My jsme si totiž dávali strašně moc záležet na tom, aby to mohli hrát lidi na různých telefonech u jednoho stolu, což nebylo jako úplně samozřejmé, že se sejdou čtyři různý telefony, sice všechny s podporou javy, ale každý telefon úplně jiný a ono poběží. To nám trvalo docela dlouho. No ale vyšlo to přesně v roce, kdy přišel na trh iPhone – první iPhone. A v tu dobu už bylo jasný, že tenhle byznys jde do háje. To byl byznys, který byl založený na operátorech a agregátorech. To znamená, že telefonní operátor si z tý koupený hry vzal třetinu, pak tam byl agregátor, který to zprostředkovával, ten si vzal další třetinu, a pak zbylo něco málo těm vývojářům. A v tom roce 2010 nebo 2011 už bylo jasný, že tohle jde úplně do háje. Jakože to je mrtvý a všichni ty agregátoři se začali stahovat z trhu a de facto nějak řízeně jako krachovat. Takže <span class="c0 c2">Bulánci </span><span class="c1 c0">vyšli přesně v tu dobu, že víceméně zakončili tuhle éru tlačítkových telefonů. Taková ta úplně největší perlička na závěr.</span></A>
            

            <Q speaker="RS">A vy jste tu hru outsourcovali nebo jste je dělali sami?</Q>
            

            <A speaker="LK">Ne, ne. Dělali jsme jí ve spolupráci právě s našima kolegama, takže to byla koprodukce.</A>
            

            <Q speaker="RS">S kým jste to vlastně dělali?</Q>
            

            <A speaker="LK">Dělali jsme to s Pavlem Barákem. O kterým možná ještě bude řeč. To je náš dlouholetý kolega.</A>
            

            <Q speaker="RS">A on to dělal pod nějakou firmou?</Q>
            

            <A speaker="LK">Ne, ne.</A>
            

            <Q speaker="RS">Takže to dělal SleepTeam a plus Pavel Barák.</Q>
            

            <A speaker="LK">Ano. Plus Pavel Barák a ještě jeden programátor.</A>
            
        </Chapter>
        <Chapter title="Studium na FAMU a založení Katedry herního designu">


            <Q speaker="RS"><span class="c0">Takže jsi teda dostudoval technickou v Liberci, pak jste dodělali </span><span class="c0 c2">Bulánky</span><span class="c1 c0">, a pak jsi šel studovat na FAMU produkci?</span></Q>
            

            <A speaker="LK">Pak jsme se vlastně celý tým přesunuli do Prahy, a já jsem se přihlásil na FAMU, na produkci a shodou okolností mě tam vzali. Studoval jsem nejdřív bakaláře, a pak – jelikož jsem byl jediný na celém FAMU, kdo věděl něco o hrách, tak už na konci bakaláře a pak během celého magistra už jsem tam zároveň přednášel a učil – herní produkci a distribuci. No a to je asi tak všechno, co můžu říct na záznamu. Ne tak samozřejmě, že to byly divoký léta, ale co se týká nějaký produktivity, tak to moc neprobíhalo. A já jsem končil v roce 2011, kdy jsem měl magisterský státnice. No a v roce 2016 se mi ozvala Helena Bendová, že nám splní náš dávný společný sen, založit novou katedru zaměřenou na hry. Takže to trvalo pět let, jenom to samotný zakládání. Je to teda jenom magisterský obor, dvouletý, no a teď jdou ke státnicím naši první studenti. Takže to by asi bylo FAMU. Žádný pikantní detaily už asi nebudou.</A>
            

            <Q speaker="RS">Byl by jsi schopný nějak ty dva roky už po tý době bilancovat? Nebo byl by si schopný popsat trošku víc ten proces toho pětiletého procesu zakládání nový katedry na FAMU?</Q>
            

            <A speaker="LK">No, nerad bych se do toho nějak víc pouštěl, ale, když to řeknu, tak to znamenalo tisíce stránek dokumentů, a když říkám tisíce stránek, to fakt jako nepřehánim. Vůbec, ani trochu. A spousty obhajob, spousty potýkání se s jinými katedrami, hledání místa, kde ta katedra bude. Žádná katedra se nechtěla vzdát vůbec ničeho v prospěch tady toho našeho nového podniku. To bylo teda fakt výživný. Kdybych věděl předem, co to bude obnášet, tak bych si to hodně rozmyslel, jestli do toho pujdu znova. Teď samozřejmě jsem rád, že ta katedra existuje, funguje, prosperuje a tak, ale znovu bych do toho asi nešel. Tak je to ale se vším. Vždycky člověk neví do čeho jde a kdyby věděl, tak by si to důkladněji promyslel.</A>
            
        </Chapter>
        <Chapter title="Jiná činnost v rámci herního průmyslu">


            <Q speaker="RS">Teď jsi nějak poslal, co jsi dělal v rámci FAMU, jak jako student, tak jako učitel. Tys ale i dělal hromadu jiných než vývojářských činností v rámci herního průmyslu, např. spolek <span class="c0 c2">Český hry</span><span class="c1 c0">?</span></Q>
            

            <A speaker="LK"><span class="c0 c2">Český hry</span><span class="c0"> jsme založili někdy v roce 2003 a byla to vlastně první organizace která měla sdružovat herní vývojáře u nás. A jejím hlavním posláním bylo pořádat vývojářský konference. Což bylo GDSko, Game developer session. Mimochodem, do dneška vlastně nejstarší evropská herní konference. No a </span><span class="c0 c2">Český hry</span><span class="c0"> už postupně zanikly, vlastně sídlily tady u mě. A letos už jsme to tak nějak uzavřeli a ukončili. A vlastně ty </span><span class="c0 c2">Český hry</span><span class="c0"> vlastně dělali to GDSko – to pak přešlo na jinou společnost – a to sdružování vlastně postupně převzalo GDAčko, Game developers association. No ale co třeba ty </span><span class="c0 c2">Český hry</span><span class="c1 c0"> začaly, nebo jako co jsem si říkal, že nám tady chybí, je udílení cen. Ty jsme začali udílet v Třeboni v rámci AniFestu v roce 2011. No a to vlastně udílíme do teď, s tím, že před pěti lety jsme na to založili samostatnou neziskovkou Česká hra roku, která taky sídlí tady u mě. Mám ještě říct něco k tomu GDAčku?</span></A>
            

            <Q speaker="RS">Určitě.</Q>
            

            <A speaker="LK">My jsme se odhodlali k tomu, že bysme fakt měli založit asociaci, která by sdružovala všechny největší herní společnosti u nás. </A>
            

            <Q speaker="RS">Můžu se jenom zeptat v jakém roce to zhruba bylo?</Q>
            

            <A speaker="LK">Bylo to v roce 2017. Já jsem byl zvolen prvním zakládajícím předsedou, takže jsme ustavili takový ty základní věci – pravidla, stanovy, a všechno tady to. No a pak jsem to předal Pavlovi Barákovi.</A>
            

            <Q speaker="RS">A když jste začínali s GDSkem – jak ty konference probíhali?</Q>
            

            <A speaker="LK">My jsme GDSko původně zakládali v Brně. První ročníky se konaly v Brně, v Kulturním domě Rubín, a v roce 2010 se to přesunulo do Prahy, kde to bylo na Malostranském náměstí na Matfyzu. To byl ročník, který jsem pořádal přímo sám a to bylo poprvý a naposled, co jsem dělal jako celou konferenci jen já sám. Už bych do toho znovu nešel. Pak to vlastně převzaly Český hry a pak to jakoby přišlo už do soukromých rukou. A teď je to vlastně na Vinohradech. No, a GDSko už je dneska docela velká konference. Už tam docela jezdí hodně zahraničních hostů, a je to vlastně teď třináctý rok, co se to koná v Praze. Předtím bylo pět ročníků v Brně a teď třináct ročníků v Praze.</A>
            

            <Q speaker="RS">No a ta Česká hra roku teda začala v roce 2011 v Třeboni a vy jste to dělali v rámci AniFestu? Jak to probíhalo?</Q>
            

            <A speaker="LK">Mě oslovili pořadatelé, jestli bychom – jelikož tam udíleli ceny – tak jestli bychom nechtěli udílet ceny i za hry. Tak jsme si řekli, že jo, navrhli jsme ty skleněný sošky a stanovili jsme kategorie. Ty první ročníky jsem řešil úplně sám, s tím, že se udíleli dvě kategorie, pak tři kategorie, no a pak jsme se v roce 2018? úplně oddělili a začali jsme to pořádat v Praze. Pak ve chvíli, kdy přišel covid, tak jsme to museli odpískat a od tý doby už je to jenom online. Ale jinak to byly klasický galavečery, kde se sešlo divadlo plný hostů z herního průmyslu, a byli tam moderátoři, udělili se sošky, a všechno. Zas v tuhle chvíli, třeba nejsem schopen říct, jaká bude další budoucnost Český hry roku. No a moje hlavní kategorie, tak to bylo samozřejmě celoživotní přínos české herní kultuře. To jsem vždycky řešil nejvíc.</A>
            

            <Q speaker="RS">Ono od covidu to začal hodně řešit Indian, že?</Q>
            

            <A speaker="LK">Ano.</A>
            

            <Q speaker="RS">Jak vlastně moc se podílíš na Český hře roku od doby, co to probíhá v rámci studií Indiana?</Q>
            

            <A speaker="LK">Právě. Řešim už jenom ten celoživotní přínos. Ostatní kategorie už necháváme na ostatních. My už vlastně v rámci našeho spolku – v Česká hra roku – řešíme už vlastně jenom to, kdo bude v kterých kategoriích hlasovat, kdo bude nominován a tak. A moje parketa už je jenom ten celoživotní přínos.</A>
            
        </Chapter>
        <Chapter title="President: Path to Power">


            <Q speaker="RS">No, to máme asi do velký míry probraný ty mimo herní věci a mně tady zbývají ještě poslední dvě hry, na který bych se chtěl zeptat. A první je hra, která vyšla v roce 2016, <span class="c0 c2">President: Path to power</span><span class="c1 c0">.</span></Q>
            

            <A speaker="LK">Dobře. Takže <span class="c0 c2">President: Path to power</span><span class="c0">. To byla hra, kterou jsem napsal a produkoval pro Apple Watch – byla to první česká hra pro Apple Watch. Mě vždy fascinovalo hrát hru na hodinkách. Hodně jsem se inspiroval právě v osmibitových textových strategiích, konkrétně třeba jako byl </span><span class="c0 c2">Diktátor</span><span class="c1 c0">. A byla to jednoduchá textová hra, kde se vždycky volí mezi dvěma možnostmi, a jde o to jako vystoupat z regionální politiky až do funkce prezidenta spojených států. Tahle hra byla plánovaná na dobu, kdy se Trump ucházel v prezidentských volbách, takže spojený státy žily prezidentskými volbami a byl to nejlepší čas, kdy uvést nějakou takovouhle hru, která to nějakým způsobem reflektuje. Já jsem teda jenom napsal scénář, produkoval jsem jí, ale samozřejmě tam byl jako ještě další produkční, výtvarník, programátor atd.</span></A>
            

            <Q speaker="RS">A mohl bys třeba povědět něco víc k tomu kreativnímu procesu? Jednak mi přijde vlastně dost zajímavý vůbec ten nápad udělat hru na Apple Watch. Jak ses dostal třeba k lidem, který na to byli  ochotný programovat? To zní obecně jako docela riskantní projekt.</Q>
            

            <A speaker="LK">Dalo by se říct, že to bylo dobrodružný. Za velkou část tý produkce vděčím mýmu kamarádovi Vláďovi Geršlovi, který opravdu získal na to fakt schopný lidi a strašně šikovný kluky. Tam jinak nejsou moc zajímavý historky. Možná kromě jedný a to byl to byl název. My jsme se rozhodli pro název jako <span class="c0 c2">Watch Presiden</span><span class="c0 c2">t</span><span class="c0">. A ve chvíli, kdy jsme to poslali do Applu, aby nám to pustili do distribuce, tak jsme zjistili, že v názvu tý hry nesmí být slovo ,,watch.” Protože to bylo pro Apple Watch, tak si Apple vymyslel, že v žádný jejich aplikaci ani žádný jejich hře pro hodinky nesmí být v názvu slovo ,,watch.” Takže jsme to přejmenovali na </span><span class="c0 c2">President: Path of power</span><span class="c1 c0">. A jenom ten samotný proces přejmenování zabral tři týdny. To bylo velký poučení, abych si příště důkladně pročetl obchodní podmínky Applu, co se týká názvů aplikací a her. No a to je asi všechno.</span></A>
            

            <Q speaker="RS">A jak vlastně probíhala celá produkce u toho <span class="c0 c2">Presidenta</span><span class="c1 c0">?</span></Q>
            

            <A speaker="LK">Tam to bylo pořád v pohodě, protože to byl malinký tým. To jsme byli v podstatě čtyři a to se furt dalo. </A>

            
        </Chapter>

        <center>
            <i>Konec rozhovoru</i>
        </center>
        
        
        
    </div>
</Interview>