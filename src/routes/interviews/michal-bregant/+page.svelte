<script lang="ts">
	import Interview from "$lib/Interview.svelte";
	import Answer from "$lib/interviews/Answer.svelte";
	import Question from "$lib/interviews/Question.svelte";

    let A = Answer;
    let Q = Question;

    export const data: InterviewData = {
        lang: "cs",
        title: "Rozhovor s Michalem Bregantem",
        audio_file: "herni-archiv-rozhovor-michal-bregant.m4a",
        audio_duration: 7266, // duration must be correct
        narrator: {
            name: "Michal Bregant",
            birth_year: "1964",
            gender: "M"
        },
        interview: {
            date: new Date("2023-05-01"),
            place: "Jevany (dům narátora)",
            interviewer: "Rudolf Jan Suchý",
            length: "02:01:06",
            project: "Dějiny Filmových studií",
            informed_agreement: true,
            transcriber: "Rudolf Jan Suchý",
            verifier: null
        },
        tags: []
    };
</script>

<Interview data={data}>
    <Q speaker="RS">
        Dneska je 1.5.2023, rozhovor vede Rudolf Jan Suchý s Michalem Bregantem v jeho domě v Jevanech do sbírky rozhovorů o historii o filmovejch studií. A já asi začnu první otázkou, jaký vlastně bylo vaše zázemí, jak jste se dostal na filmový studia, co vás k tomu vedlo na střední, nebo na základní… Nebo v předchozím studiu.
    </Q>
    <A speaker="MB">
        Já jsem začal asi tak ve čtrnácti, patnácti chodit do filmovýho klubu v Klimentský ulici, kterej jsem si našel, nevím už jak, ale protože moje úplně nejzazší vzpomínky na biograf se týkají úplně v dětství, Ponrepa, který bylo na Letný, ale potom už jako sám jsem do toho klubu začal chodit a ty filmy mě oslovily tak, že mně to přišlo jako mně nejbližší forma vyjadřování. A v tom klubu jsem byl prakticky obden a viděl jsem takovou to základní repertoár, který se tam hrál a pak se otevřelo jako další klubový kino na Vinohradech, v ki-… v Hřibský ulici, jmenovalo se ne Slávie, ale nějak podobně a to mě bylo míň blízký, ale to v tý Klimentský to bylo byl jako základní moje orientační místo a jako i svůj čas jsem hodně podřizoval tomu, kde se co hrálo. Já jsem chodil do biografu jako dítě, protože jsem bydlel v Celetný ulici na Starým městě a všechny kina od Příkopu až nahoru na Vinohrady vlastně byly takovej ta moje taková moje dětská průprava filmová, všechny možný více či méně stupidní komedie a v Alfě širokoúhlý filmy a takový tyhlety zážitky. A pak, když jsem byl na gymnáziu, tak mě bavila asi nejvíc literatura, výtvarný umění a architektura, po který jsem toužil, ale já nejsem disponovanej k počtům, vůbec, takže to by asi nešlo bez toho. A pak jsem zjistil, že existuje teda obor, kterej se jmenoval tehdy divadelní a filmová věda. V roce osmdesát dva, po maturitě jsem dělal příjmačky poprvé, nedostal jsem se tam, začal jsem tam chodit na takzvaný mimořádný studium, což byla taková jako zvláštní tehdy forma poměrně tolerantního, neformálního, neoficiálního studia a potom za rok mě tam vzali. 
    </A>
    <Q speaker="RS">Ok.
    </Q>
    <A speaker="MB">Strašně jednoduchý.
    </A>
    <Q speaker="RS">Jo, no, tak se už asi můžeme rovnou tím pádem přesunout k samotnýmu studiu.
    </Q>
    <A speaker="MB">My jsme byly tehdy s… Teda to byl, ten obor se jm-… Nebyl to dvojobor, byl to jeden obor, který nes ten název divadelní a filmová věda. A já jsem tíhnul hodně k filmu, to divadlo mě bavilo, protože právě v tom prvním mimořádnym ročníku jsem absolvoval nějak to poměrně hodně a přišlo mně to zajímavý, protože vlastně ten princip nějakýho jako nějaký komunikace mezi pedagogama a studentama se mi, jsem ocenil až daleko pozdějc, protože hned v tom prvním ročníku jsme měli s Františkem Černým dějiny českýho divadla, což bylo velmi úmorný, ale mě to strašně bavilo. Já jsem vlastně ten první díl Dějin českýho divadla uměl už na gymplu, takže pak se mi to jako dost hodilo a bavilo mě to a vlastně ten první díl mě byl jako nejbližší, kromě teda 20. století, který bylo velice ošizený. A filmu tam bylo po terestu hodně málo. Byla tam vlastně akorát Galina Kopaněva, která byla pro mě jako velmi zásadní figura v tom přibližování se kinematografii a některý přednášky a semináře s ní byly naprost-… A projekce byly naprosto fascinující a vopravdu jako určující. Některý byly naopak jako trochu těžký, protože tam byly věci, který jí strašně nebavili. A já dávám někdy k lepšímu historiku, čím začínala její přednáška, která se jmenovala teorie filmu. Především tu přednášku četla, což bylo jí bylo naprosto jinak jako cizí a přinesla ty desky a otevřela je a začala číst ,,film je za A. tenký povrch něčeho na něčem, za B. umělecké dílo, za C. nevim co”. A já jsem žasnul, jak strašně jí to nebaví, jak je jí to cizí, jak to považuje za zbytečný a votravný, ale já jsem naopak k těm teoretickým předmětům dost lnul a cejtil jsem to jako strašnej deficit, že tam nic takovýho neexistuje. Poměrně rychle jsem pochopil, že se musím naučit pasivně polsky, protože v Polském kulturním středisku v Jindřišský ulici byly k dostání časopisy a knížky v Polštině a bylo jich tam poměrně hodně. Poláci překládali dobrou zahraniční literaturu do Polštiny a sami dobrou literaturu produkovali. A bylo to v roce osmdesát tři, čili tři roky po Solidaritě, v Polsku stanný právo, zákaz cestování. Já jsem se dostal do Polska potom poprvé až někdy v roce osmdesát čtyři, pět nebo co a bylo to… A jako ta Polština byla pro mě takovej základní jako kanál k nějakýmu vzdělání v těch teoretickejch disciplínách. Naopak s Galinou bylo fascinující mluvit o filmech. Ona měla svůj, řek bych světonázor, jak se tomu říká někdy, který nedávala nějak zvlášť najevo, to se projevilo až po převratu na začátku 90. let, kdy její bytostná inklinace k marxismu a obecně levicovýmu pohledu na svět konečně pořádně vyzněla, ale vlastně s takovou trpkostí kt-… Že mě to bylo líto, protože nikdo ji nebral vážně a najednou tahleta vosoba, která měla takovýhle schopnosti a znalosti se stala, i kvůli přístupu některejch studentů na začátku 90. let, vlastně marginální, marginalizovanou osobou. To mě přišlo strašně nefér a chyba nikoliv těch studentů, nebo Galiny samotný, ale chyba systému. No, takže v tom kurikulu divadlo převažovalo osmdesát ku dvaceti, dejme tomu, a pak se stalo to, že asi v osmdesátym čtvrtym a pátym roce tam byl přizván jako externí přednášející Pavel Tausik, kterej nás, nám předváděl přednášku filmová komedie, nebo něco takovýho a bylo to takový jako jeho vyprávění o filmech, který bylo spíš jako populární, relativně zábavný, ale ne úplně, že by to teda otvíralo oči. Ale nezapomenu mu to, že on nás vzal do projekce do Filmotéky do Malešický a neřek nám, co nám pustí za filmy a pustil nám Intimní osvětlení a Obchod na korze a my jsme z toho byli úplně vedle sebe, protože o těch filmech jsme věděli a nebyl k ním vůbec žádnej přístup. V ročníku nás bylo tak čtyři, pět, já jsem tam byl jedinej kluk, ostatní kolegyně měly daleko blíž k divadlu než já. Jmenovaly se Lída Márova, ta z nás byla nejchytrejší a zaměřovala se hodně na divadlo, Karola Štěpánová, taky divadlo, Zuzana Minstrová, taky divadlo a Jana Sinková, později Hiklová, dnes… Ježišmarja… To je jedno, za chvilku to přijde… Ta jediná, ta inklinovala taky k divadlu, ale víc k filmu. Ty poměry byly relativně přátelský, katedra byla… Měla skvělou tajemnici, Evu Kolárovou, která byla jako duší toho podniku a se všechny znala, všechno tak jako nenápadně, nebo nápadněji řídila svýma metodama. Byl tam Milan Lukeš, kterýho jsme v tý době dosti obdivovali, protože jeho výklady o renesančním divadle byli jako hodně dobrý. František Černý byl takový velmi konzervativní pán, kterej nás provokoval svoji konzervativností, štval a lpěl na určitejch věcech, který nám přišly trochu těžkopádný, ale třeba jeho proseminář historickej byl metodologicky pro nás přínosnější, než jsme si uvědomovali v tý době. A dál ten personál byl už méně zajímavej. Osoby jako Jan Hyvnar, Vlasta Smoláková, Josef Hermann ve mě vlastně nezanechaly žádnou pozitivní stopu. Hned vedle byla hudební věda, mezi námi byly ty dveře, který tam jsou do dneška. To byly… Tam byly fajn studenti někteří, ale jinak jsme byli vlastně od nich izolovaní kurikulárně i sociálně, takže jsme žili jakoby hodně pro sebe. Ta katedra byla taková jako rodinná, malá a vlastně se tam existovalo dobře.
    </A>
    <Q speaker="RS">Kolik vlastně… Vy ste říkal, že vás tam bylo pět v ročíku…
    </Q>
    <A speaker="MB">…v ročníku…
    </A>
    <Q speaker="RS">…a v tý hudební vědě bylo zhruba kolik lidí?
    </Q>
    <A speaker="MB">Těch možná bylo trošku víc, ale ne o moc.
    </A>
    <Q speaker="RS">Jo. Vy když jste zmiňoval ty učitele, tak jste zmiňoval dva učitele, co vás učili přímo filmovou vědu a říkal jste zároveň, že zhruba 20% z toho celého kurikula, byly věnovaný filmu. Ještě tam někdo učil ten film?
    </Q>
    <A speaker="MB">Ne, to bylo všechno. Galina opravdu měla na starosti úplně všechno, vůbec nechápu, jako jak by to mohlo být zvládnutelný. Její přednáška ze sovětského filmu byla samozřejmě skvělá, protože to opravdu znala a měla ráda. Kritickej seminář byl velká paráda, protože to bylo založený na projekcích, který pro nás dělala v Savarenu na Příkopech a možná ještě někde jinde a nechávala nás psát takový krátký texty, který… Jako bylo to… Ona nás jakoby vedla k samostatnýmu přemýšlení o těch filmech, ale tím, že ona byla bytostně novinářsky zaměřená, tak vlastně to metodologicky nemělo nějaký pravidla, jo, což mě chybělo, ale já jsem si to kompenzoval nějak těma polskýma knížkama nebo tím, k čemu jsem se dostal a tím, jak mě zajímaly víc ty teoretický věci, tak to se to potom nějak propojilo s mým zájmem o strukturalismus a vlastně mi to začalo dávat trochu smysl, ale vlastně jsem po těch čtyřech, vlastně pěti letech studia opravdu odcházel s pocitem, že jsem autodidakt. A to nebylo příjemný. 
    </A>
    <Q speaker="RS">To chápu. Vy jste zmiňoval jednak z toho období před tím, než jste nastoupil na Filosofickou fakultu, že jste chodil do kin, jednak potom, že jste hodně trávil času v těch… ne polskejch knihovnách v Polskym institutu. Obecně ta kultura kolem, když neberu v rámci jako těch prostor tý fakulty, jako kam se třeba chodilo… Jak vlastně vypadalo, kam se chodilo jako do kina, třeba i na ty filmy, který nebyly úplně povolovaný. Vy jste zmiňoval třeba to Intimní osvětlení…
    </Q>
    <A speaker="MB">To bylo tak, že tehdy vlastně existovali pro nás pro všechny různý jako alternativní prostředí a světy a třeba Niki Kučera byl takový divous, kterej si zahrál různý epizodky v mnoha filmech a byl a pohyboval se vlastně v kinematografii, tak dělal takový legální, byť trochu ve stínu, projekce během 80. let, kdy pouštěl z VHSek různě opirátěný třeba filmy ze 60. let. A mě to bylo protivný, celá jako ta kultura VHS video byla stigmatizovaná tím, že to byla taková jako vekslátská kultura, jo, to bylo prostě něco, protože ten videopřehrávač byl náramně drahá věc, kterou vlastně si to mohli dovolit a v Tuzexu nakoupit lidi takovýho toho, to čemu se říkalo zelenářsko-řeznicko-vekslátský prostředí a já jsem to nevnímal jako kulturní nástroj, jo, spíš jako nástroj řekněme sociálně statusovej a bylo mi to jako hodně vzdálený. My jsme si potom pořídili domů VHS přehrávač, někdy v roce vosmdesát sedm nebo osm, a v tý době se vlastně jakoby nějak snižoval práh dostupnosti těch filmů, který se nedostávali do kin nebo který byli zakázaný a už se začalo pomalinku i na oficiálních místech mluvit o tom, že by se některý filmy ze 60. let mohli vrátit do kin a bylo to takováta jako kontrolovaná ideologická cenzura, která byla vlastně náramně cynická, jo, i tou výběrovostí a tím vytrvalým zapíráním, popíraním existence některejch lidí, nebo některejch filmů, včetně toho, že ti sami režiséři třeba popírali, že natočili… Jako Kachyňa popíral, že natočil Ucho a takovýdle a… Takže to prostředí fakulty bylo vlastně velmi jako politicky ideologicky náročný. Ten dohled byl jako přísnej, nekompromisní, samozřejmě tam docházalo různě jako trikům fýzláckejm a bylo to hrozně nepříjemný a člověk si dával… Jako já jsem třeba fakt měl ten život na fakultě s výjimkou toho našeho ročníku s těma holkama, se kterýma jsme měli velmi hezkej vztah a trávili jsme spolu spoustu času, jezdili jsme na vejlety, chodili jsme imrvere do divadla a do biografu a vlastně tam někde se stalo… Já jsem byl v divadle jsem byl já nevim třikrát za tejden určitě a stalo se mi to, že jsem se divadlem předávkoval, takže já ho snáším teďko jen ve velmi omezenym množství a jen v určitejch formách, který se jako nepatří do takovýho toho etalonu takzvaně normálního divadla, to prostě nesnáším, připadá mi to úplně jako vlastně pokažená věc, zatímco u filmu jsem tolerantní i na různý poklesky a pořád mě to zajímá, jo. No a takže ten život na fakultě a ten život soukromej, na to si dával člověk pozor, aby se to, aby to bylo oddělený, jo. Já si pamatuju právě s Galinou, která nás vozila do Chebu na semináře ruskejch filmů, což znamenalo, že někde posháněla kopie a v Chebu byl tehdy Jan Jíra, dneska legendární jako hybatel klubový politiky filmový a potom distributor a take dál a tak dále. Tak tam jsme strávili, já nevím, pátek, sobotu, neděli a viděli jsme hromadu filmů. A s Galinou ten vztah byl vlastně poměrně hodně otevřenej. Tím, jak byla přátelská, tak to tak jako nebylo nic zvláštního na tom, že nás třeba zvala k sobě na nějaký večírky malý domů. Tím, jak byla notorická kuřačka, tak vona kouřila při přednáškách a my taky. To bylo úplně šílený, v tý místnosti nevelký prostě všichni hulej jak fabrika bylo to… Pak tam jedna z prvaček byla těhotná, že my tam všichni furt kouřili. To bylo šílený, úplně nepředstavitelný.
    </A>
    <Q speaker="RS">Měli jste aspoň otevřený okno? 
    </Q>
    <A speaker="MB">No… ani si nejsem jistej. 
    </A>
    <Q speaker="RS">(smích)
    </Q>
    <A speaker="MB">
    </A>
    <!--
    <Q speaker="RS">
    </Q>
    <A speaker="MB">
    </A>
    -->
</Interview>