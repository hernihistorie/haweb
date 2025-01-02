<script lang="ts">
    /* https://docs.google.com/document/d/1EUv8mepuz5gsXFP4tlrr3iypy-hDEpUN/edit */
	import Interview from "$lib/Interview.svelte";
	import Answer from "$lib/interviews/Answer.svelte"
	import Question from "$lib/interviews/Question.svelte";
	import Chapter from "$lib/interviews/Chapter.svelte";

    import { data, JH, RS, VS } from "./interview";

    let A = Answer;
    let Q = Question;
</script>

<style>
    .c0 {
        font-style: italic;
    }
</style>

<Interview data={data}>
    {#snippet content()}
        <Q speaker={RS}>Moje první otázka je, jestli byste shrnul svoje rodinný zázemí, kam jste třeba chodil na školu apod.?</Q>

        <A speaker={JH}>Tak jeden rok mechanizačního učiliště zemědělského, 4 roky technická škola zemědělská, 5 let vysoká škola zemědělská, obor meliorace. Pak jsem šel do provozu jako vystudovaný inženýr meliorací a šel jsem dělat odvodnění, závlahy, úpravy toků, malý mosty apod.. Dělat s lidma, kteří prostě neměli takový rozhled nebo odbornost. Jenomže já jsem si říkal, že mi mezi nima bude kornatět mozek, že musím dělat ještě něco jiného. Takže jsem si nechal přivézt počítač Sinclair z Paříže. Moje první žena byla výborná chmelařka – ještě stále žije teda – a jela na kongres a dostala tam Chmelařský řád a přivezla mi Sinclair. A tím to vše začalo. A když už člověk takhle něco dělal, tak potřeboval ještě o tom něco vědět. Takže jsem začal kolem sebe shánět lidi, kteří něco umí. Pak co dál. Abyste mohl makat a dělat tak musíte mít ještě nějakou techniku a mít nějaké prostory. Takže byla potřeba nějaká podpora, nějaké zázemí, tak to dneska cítím. Takže nám v<span class="c4"> JZD řekl</span><span class="c4">i, že uděláme počítačový podnikový klub. Později se to zobecnilo na klub vědecko-technické činnosti a pak na okresní klub vědecko-technické činnosti. A díky podpoře jsme se od Sinclairu přes PMD, Didaktiky a Atari 300/600/800 dostali až k Atari 520ST. To jsme vždy říkali: ,,ježiš, mně se o tom počítači z katalogu zdálo.” To byla taková naše doba, nebyla literatura, nebylo nic. Takže to bylo o tom ty informace škubat ze světa. Zároveň my vedle toho klubu i tiskli. Ale na čem jsme tehdy tiskli? Tam taky byla podpora od vedení JZD a zároveň stranické orgány ani bezpečnost proti tomu nic neměla. Kdysi to bylo takové, že když byla nějaká rozmnožovací technika, tak to bylo nebezpečný, kvůli obavám z protistátní činnosti. Nicméně později nám JZD ten tisk povolilo. Takže to jsme používali cyklostyly a na nich jsme dělali plakáty třeba pro Atari bály. Ale cyklostylem nešlo dělat všechno. Takže potom Josef Jaroš, manžel ředitelky základní školy, který dělal kolem spojařiny na drahách, přines vyřazený dálnopis. No, Andrle, jeden chlapík z elektrárny, tak zase udělal převaděče a programy aby se dalo vše natáhnout z počítače do dálnopisu. Z dálnopisu jsme pak přešli na jehličkový tiskárny, no a tak dál. Až se ze mě stal tiskař. Protože to byla taky nová myšlenka, tak dělá se to tu dobře, běží to, Josef, ale furt máš nějaký výsledky, ale moh bys mít větší, kdyby ses tomu věnoval víc než jenom 60, 70 procent, protože jsem měl ještě svoji práci. Dokonce mne měli uvolnit </span><span class="c4">do</span><span class="c4"> pozice vedoucího, abych tady mohl v </span><span class="c4">Cítově</span><span class="c4"> stavět stanic</span><span class="c4">i</span><span class="c3"> vědecko-technický činnosti mládeže se Slušovicemi. Neměli tam být jenom počítače, měla tam být kterákoliv jiná činnost. Akorát to bylo před rokem 1989 a pak přišla revoluce a všechno se dalo jinými směry. Takže když jsem to organizoval a spojoval jsem ty lidi, co o to měli zájem, co něco uměli, co mohli tvořit, chodit do klubu, vyučovat a tak dál, tak se to po revoluci rozpadlo. Mé vysvětlení je, že „no, přece nebudeme vydělávat na Havelku, je jiná doba, jdeme podnikat, budem si vydělávat sami.“ Například ti Skurovcovi, sice vždycky pomáhali, ale zároveň se u toho věnovali DTP a dělali třeba pro módní časopisy. Ale těm dětem ten klub fakt pomohl. Jeden skončil jako pracovník zabezpečovací služby – dělal čidla, prostě se nebál těch drátů. Druhý tady má zase kovovýrobu – ten zase používá k navrhování výrobků v počítači. Pomohlo to mnoha lidem. My jsme i jezdili po konferencích, základních školách, kde jsme ty stroje ukazovali.</span></A>

        <Q speaker={RS}>Tak asi začněte tou kronikou a obecně tím jako jak ten klub dopodrobna fungoval.</Q>

        <A speaker={JH}>Není tam úplně všechno doplněný. To jsem já, někde na nějaký základní škole v Kralupech nad Vltavou, tam děti morduju a něco jim tam ukazuju. Tady jsme začali 5. září 1986 na otevírání dveří – tady je můj syn a další mladý kluci, předseda JZD, to je tajemník okresu a pak tam budou ještě nějaký další velký svazáci z krajského výboru KSČ. Šindelář se podepsal, předseda krajskýho výboru Hájíček, pro vývoj SSM, Jiří Neubauer, s kterým jsem o tom také jednal a který nás podporoval, Ninkl Jan, byl předseda svazu mládeže. Tady se píše: ,,u příležitosti slavnostního prvního klubu na u úseku zemědělsko-potravinářském.” Tady je kousek pásky. To jsou mašinky, s kterýma jsme začínali, to je ten dálnopis. To je JZD, kam jsme přišli, zkoukli a teď oni ještě používali děrný štítky, tak koukali, co jednou budou mít.</A>

        <Q speaker={RS}>Vy jste měl asi nějaký specifický prostor pro ty vaše aktivity, že?</Q>

        <A speaker={JH}>Ano, bylo to tady v areálu družstva, byla to stará budova, která tam ještě dnes stojí. Byla to první škola tady, tak to bylo takový symbolický. Tady je foto z toho prostoru, podle tý záclony. Taky jsem dostal prostor v tý klubovně, takže jsme měli takovou dvoj klubovnu. Takže JZD nám dala prostory, obec nám dala taky podporu. Tyhle všechny velký akce byly v hospodě na Velkém sále. Udělali jsme to jako ve výstavní síni, kde se potom věšely od akademického malíře půjčený malby a pod nima se sedělo. Takže, se vším se dělalo – byly třeba ty soutěže o Sovětském svazu, to bylo velký.</A>

        <Q speaker={RS}>Jak vlastně vypadalo běžný fungování toho klubu? Jak často jste se potkávali?</Q>

        <A speaker={JH}>My na to měli takový sešit, ve kterém vám já ukážu, jak jsme se scházeli. Scházeli jsme se s těma děckama dennodenně aby tam mohli blbnout a my jim mohli něco vysvětlovat. 5. září jsme začali, a pak se pokračovalo 6., 7., 9., 11., 12…. </A>

        <Q speaker={RS}>To jste se scházeli docela často.</Q>

        <A speaker={JH}>Ano. Ty děti vedl Mila Šubrt, někdy to vedla moje dcera, někdy to vedl pan Janoušek. Občas to nebylo, občas přišlo jen pár dětí, ale jinak to tam furt nějak žilo. Někdy jsme i brigádničili – ten spolek se prostě sešel a makal. Na den otevřených dveří, tak to tam přišlo 264 lidí. Soutěž v počítačových hrách pro děti. Taky jsme jezdili na školy a zvali si kantory, aby jsme jim ukázali, co se dá s těmi počítači dělat nebo nedělat – Základní škola Obříství, Základní a mateřská škola Cítov, Základní škola Komenského. Nicméně scházeli jsme se pravidelně, furt, děti se chtěli něco dozvědět a samozřejmě si něco zahrát. Byl tam samozřejmě <span class="c0">Karel</span><span class="c4">, dělali jsme ty první programy, vydávali jsme časopisy, zpravodaje, návody a vše samozřejmě v češtině. Celý se to muselo nést v duchu svazu mládeže – tý organizovanosti. Jiná organizace mládeže navíc nebyla, ale nic špatného jsme nedělali, učili jsme děti, aby se měli dobře a aby něco dělali a uměli.</span><span class="c2"> </span><span class="c4">Okresní výbor svazu Československého přátelství nás pozval jako hosta do Neratovic, abychom tam něco předvedli. Tak jsme tam dojeli, náš klub připravil soutěž </span><span class="c0">Znalost Sovětského svazu</span><span class="c4"> ve spolupráci s agenturou Novosti, týdeníkem Norit, Praha, okresními výbory, JZD apod. A umožnilo to, že děti se něco dozvěděly, fungovaly, cestovaly, vyhrávaly, byly potěšeny.</span><span class="c2"> </span><span class="c3">Tady jsme byli v Paláci kultury a u toho se píše: ,,Sovětští přátelé, dnes nás navštívil vzácný host, šéfredaktor časopisu Modelář Konstruktér Julius Stolianov ze Sovětského svazu”</span></A>

        <Q speaker={RS}>Jak moc jste komunikovali s jinými kluby a spolky kolem počítačů? Ať už na nějaký regionální úrovni nebo přímo mezistátní?</Q>

        <A speaker={JH}>Měli jsme kontakty z Ostravy, z Olomouce, z Prahy – tam byl Vintr, taky redaktor. Nějak jsme o sobě věděli, ale hlavně jsme si vyměňovali dokumenty, tiskoviny a jiný materiály, ale to, že bychom spolu něco pořádali si nepamatuji. Nicméně kontakty z jiných států jsme třeba neměli.</A>

        <Q speaker={VS}>A k těm polským <span class="c0">Bajtkům</span><span class="c3"> jste se dostali jak?</span></Q>

        <A speaker={JH}>Objednali jsme si je. Na těch <span class="c0">Bajtkách</span><span class="c3"> potom budete vidět i razítko jak jsme si je nakupovali. A počítače jsme naopak dostali propůjčený od Svazu mládeže. Ty jsme je po skončení zase vraceli. Ne vše tedy bylo naše, ale to, co jsem vám dal, tak to jsme si už nakoupili. Ony se pro nás měli zřizovat i prostory. Tady se píše, že tam měla být: ,,buď výpočetní technika, jazyková laboratoř, dílna, přednášková místnost, klubovna, kanceláře, sauna, bufet, mít pro správce garáž, když vše poběží podle plánu, začne se stavět v polovině příštího roku.”</span></A>

        <Q speaker={RS}>A začalo se stavět v polovině příštího roku?</Q>

        <A speaker={JH}>Byla revoluce. Takže se stavět nezačalo – svět se změnil. </A>

        <Q speaker={RS}>Vy jste mluvil o tom vzdělávání pedagogů: jak to probíhalo?</Q>

        <A speaker={JH}>Tam bylo důležitý aby to vůbec viděli. Takže se svolali, kdo měl zájem a byl mezi kantory. No a teď se jim vysvětlovalo, co by to všechno mohlo umět, že na tom jsou nějaký výukový programy.  Např. Michal Skurovec udělal kostru programu do které nacpal data ze zeměpisu – co je tohle, co je támhle – a děti odpovídaly. Prostě takový kvíz, z kterého se něco naučily, zahrály si na počítači a něco dostaly do té hlavy. </A>

        <Q speaker={VS}>A když jste teda vytvořili nějaký ty programy, tak jakým způsobem se šířily?</Q>

        <A speaker={JH}>Od určitý doby jsme to šířili tak, že už se na tom mohlo něco i vydělat. Nicméně k těm programům jako takovým – já teď mluvil s Janou Skurovcovou, která byla společně s Michalem Skurovcem programový mozek klubu. A my se bavili, že má všechny ty programy zaštrachaný, ale že Michal hodně věcí archivoval, digitalizoval a obecně schovával. On tohle uměl. Pak taky dělali jazykový výukový programy vždy o nějaký oblasti: domácnost, zahrada, dílna, škola, doprava, turistika. Bylo asi 5 až 8 oborů nebo oblastí. A bylo to v angličtině, němčině a dalších jazycích. V rámci propagace výpočetní techniky se dělaly Atari bály, který byly v zámecké vinárně na Mělnickém zámku. Tam se vždy pozvala hudba, lidi a už to běželo. Jediný rozdíl oproti normálnímu bálu byl v tom, že v předsálí u šatny byly počítače a mohl si každý zahrát. Na jednom konkrétním Atari bále hrála hudba i přímo z jednoho Atari 1040 ST počítače.</A>

        <Q speaker={RS}>Kromě těch výukových programů, co jste si sami programovali, měli jste i nějaké cizí výukové programy?</Q>

        <A speaker={JH}>Ne, vše byl výplod toho našeho klubu a našich lidí. Doktor Jiří Neubauer, co bydlel tady naproti – jejich potomci tam dnes ještě bydlí – ten tomu dával nějaký rozum a Michal Skurovec tomu dával nějakou kostru, aby se to vůbec dalo na ty nosiče.</A>

        <Q speaker={VS}>Několikrát padlo, že se jednalo o Atari klub, ale vy jste zmiňoval, že jste začínali se Sinclairem. Proč jste se pak profilovali jako klub kolem Atari?</Q>

        <A speaker={JH}>Sinclairy vlastně nějak nebyli a i ten svět, bych řekl, tíhnul k tomu Atari. A u nás zase se vymýšlelo honem něco našeho, že jo – to byly ty Didaktiky a ty PMDčka. No a taky to bylo všechno na nějakých jiných procesorech, což už nebylo ono. A Atari potom mělo to STčko – to je hrozně chytrý počítač, to jenom zapojíte do sítě a ono už to maká. U těch starších co jste si sami neudělali, to jste neměli. Já sám jsem uměl <span class="c0">Karla</span><span class="c4">, nebo aspoň nějakou</span><span class="c4"> smyčku naprogramovat, ale nikdy jsem to nestudoval. Takže jsem to spíš organizoval. Z pozice toho organizátora bylo hlavně klíčový se zapasovat do toho organizačního rámce státu. Ale mě to nikdy netrápilo protože jsem věděl, že dělám dobrou věc. Samozřejmě byl jsem v SSM, abych mohl ovlivňovat ty činnosti, protože kdybych byl bokem, tak neudělám nic. Hlavně jsem se snažil něco lehce ovlivnit v našem regionu nebo vesnici. </span><span class="c4">Jenda Vintr,</span><span class="c3"> to je ten redaktor Mladé fronty, tak ten nás taky propagoval.</span></A>

        <Q speaker={RS}>Jak jste v té době sháněl ty počítače?</Q>

        <A speaker={JH}>Nechal jsem si je přivézt z Německa. Ale nepašoval jsem je nebo tak něco. Ono si to u nás každý to takhle sháněl sám a ne úplně do toho klubu. A taky nějaký ty malý Atari nám poskytli přímo svazáci, akorát jsme je pak museli vracet.</A>

        <Q speaker={RS}>A co vše dělal ten Vintr, kterého jste zmiňoval?</Q>

        <A speaker={JH}>On byl redaktorem v <span class="c0">Mladým světě</span><span class="c3">. Michal Skurovec se s ním znal. Ono když někdo říká, že když nejste na Facebooku, že se o vás neví, tak v té době, když se o vás nepublikovali, tak se o vás nevědělo. To bylo dobou. Představte si, že vy jste funkcionář, který má za úkol, rozšířit mezi mládež výpočetní techniku, ale zároveň vy nic neděláte, takže jak splníte usnesení? Takže my jsme pomáhali, aby se plnilo usnesení.</span></A>

        <Q speaker={RS}>Takže chápu to správně, že obecně ten pohled těch funkcionářů, který v tý době byli u moci, tak byl spíš pozitivní na tu počítačovou techniku?</Q>

        <A speaker={JH}>Určitě, v každým případě.</A>

        <Q speaker={RS}>A vnímal jste to plošně, třeba jako v rámci televize?</Q>

        <A speaker={JH}>Já si myslím, že jo, že jsem to tak vnímal. Protože všichni to potřebovali. Třeba když jsme přivezli Sinclair, začali jsme se trochu orientovat, tak jsme se dozvěděli, že Sinclair ovládal nějakou techniku nějakou válcovací linku na ocel v Ostravě.</A>

        <Q speaker={VS}>Jaká byla tehdy představa o tom, k čemu se budou ty osobní počítače jednoho dne používat? Myslel jste si, že se to bude používat hlavně v tom zemědělství?</Q>

        <A speaker={JH}>Musím říct, že takhle jsem asi vůbec neuvažoval, ale v podstatě to tak asi nějak vyplynulo. My jsme se to všichni učili, abychom to uměli, abychom to užívali, aby to fungovalo. My na tom dělali i hodně statistiky nebo výpočty. Z dnešního pohledu hlouposti jako kolik přišlo lidí. Ale v těch hlavách lidí se muselo zabudovat, že to není moderní hloupost, ale že to je potřeba. Tady Ing. Petr Hudlík dostal bronzovou medaili za program <span class="c0">Orba</span><span class="c3"> na výstavě Zenit. To byl program který měl zefektivnit práci na poli.</span></A>

        <Q speaker={RS}>Jak jste třeba vnímal ten zábavní charakter těch počítačů? Hrál jste třeba sám hry v té době?</Q>

        <A speaker={JH}>Hrál. Ale já to popíšu na svých dětech. Dcera, ročník 1972, ta vždycky ty Zenity vyhrála. Ta nebyla žádný troubelín. A vlastně i jakýkoliv další soutěže. Ono kdo si hrál, tak musel mít nějaký postřeh apod. Já jsem třeba hrál hru na Sinclairu, kde jsem přistával s letadlem – prostě takový simulátor.</A>

        <Q speaker={RS}>Hrály se hry i v tom samotném klubu?</Q>

        <A speaker={JH}>Taky se hrálo. Ty děcka jsou hrozně zvědavý. Na tom začátku se furt ptaly: ,,co s tímhle, co tam s tím, jak to uděláme” a tak podobně. Tohle tam řešili hlavně dozory, co tam chodili – pan Jaroš, Kateřina, moje dcera ad.</A>

        <Q speaker={RS}>Dostaly se k vám videohry i v jiných formách, než na mikropočítačích? Dostaly se k vám třeba i arkády? </Q>

        <A speaker={JH}>To se spíš objevovalo na nějakých kolotočích a poutích, ale my se tim nezabývali. My se třeba snažili sehnat nějaký herní cartridge. Proto jsme si i psali s kluby z Ostravy, Olomouce, Prahy a vyměňovali si věci co jsme měli my a oni ne – poslali jsme jim náš Zpravodaj, tam bylo něco co vymyslel Michal Skurovec. To bylo taky složité nachrastit ty 3-4 stránky zpravodaje. Lidi to ale chtěli a my jsme chtěli, aby to chtěli.</A>

        <Q speaker={RS}>Mohl byste nějak rozvést, jak se vaše děti podíleli na chodu klubu?</Q>

        <A speaker={JH}>Dceru jsem požádal, aby vedla, hlídala a pomáhala jednou týdně těm děckám. Ono to bylo dost namáhavý a já bych to nezvládal. Syn po mě pro změnu převzal ten tisk.</A>

        <Q speaker={RS}>Jenom pro ujasnění – vy jste studoval ty meliorace, chvilku jste je i dělal, ale nejdřív vznikla ta tiskárna a pak ten Atari klub? A jak moc to bylo propojený vzájemně?</Q>

        <A speaker={JH}>Během toho co jsem dělal ty meliorace tak jsem dělal i ten klub. Po těch melioracích jsem šel do investičního oddělení, pak jsem byl chvíli v Aero Vodochody. No a jelikož jsem dělal ty počítače, tak jsem vyrazil do Městského podniku služeb Kralupy nad Vltavou, abych tam přišel a udělal tam Atari středisko a pomohl jim rozhýbat práci s výpočetní technikou. Třeba ten zpěvák Karel Černoch si tam kupoval od nás počítač. V případě toho tisku: tam se začínalo na cyklostylech, pak jsme tiskli na dálnopisu a pak jsme přešli k jehličkovým tiskárnám. Potom co jsme sehnali risograf tak jsme tiskli pro poslaneckou sněmovnu do Český národní rady. Ono na risografu se vyplatilo tisknout od 50 kusů výš, takže u 220 výtisků do parlamentu to už dávalo smysl.</A>

        <Q speaker={VS}>Jak dlouho jste třeba používal ještě to STčko a na co jste pak přešel?</Q>

        <A speaker={JH}>Z toho STčka se šlo na Apple, na Macy. Akorát protože byly všechny programy dělaný na PCčka, tak jsme přešli na PC. Ten Michal Skurovec teda zůstal u těch MACů. Takhle to fungovalo, ten přechod, ale já ho ano moc nevnímal. A na risografu jsme dělali ještě nedávno – publikace, něco i pro Muzeum v Kralupech nad Vltavou. Když to nemuselo mít fotky nebo něco takovýhleho. To se pak dělalo na ofsetový tiskárně a dneska se to už dělá digitálně. Tohleto je mimojiné pan Engleman, který byl předseda národního výboru. On byl soustružník nebo něco takového, ale velmi vstřícný a strašně nám pomohl. Nevím, jestli tomu celému věřil, ale asi nechtěl, aby děti běhali náhodně po vesnici, a byl raději, když byli zavření v nějaké klubovně. Tady sedí Engleman se zástupci okresu a radíme se, jak dál. </A>

        <Q speaker={VS}>Co za děti k vám chodili? Jak staré byli? Měli třeba sami doma počítač, nebo k vám chodili protože ho neměli?</Q>

        <A speaker={JH}>Počítač doma většinou neměli. Ten klub byla taková podpora. Proto nám i svazáci půjčovali ty počítače. No a ty děti mohly mít tak věk mojí holky? Ono tam chodilo dost dětí od nás – Jiří Neubauer, můj syn Vojta, ten se narodil v roce 1979, Jan Nikl, Veronika Neubauerová, Václav Čížek, ségry Veronika a Andrea Neubauerovi nebo Josef Machala. Všem bylo kolem 13 nebo 14 let.</A>

        <Q speaker={VS}>Jaký všichni lidi byli přímo u toho vzniku? Kdo byl přesně v té skupině, se kterou jste si sedli a řekli „Tak teďka tady budeme něco dělat“?</Q>

        <A speaker={JH}>Velkou roli sehrál Jirka Neubauer, který mě myslím spojil s Michalem Skurovcem. Co ho k tomu mohlo úplně přesně vést, že měl třeba tři děti – dvě holky a jednoho kluka – takže třeba pro ně chtěl něco dělat, ale nevím, nechci mu podsouvat žádnou myšlenku.</A>

        <Q speaker={RS}>Mezi věcmi, které jste nám dával, byly i výukové programy, které zjevně vznikaly až po revoluci. Jaká je jejich historie?</Q>

        <A speaker={JH}>Ty myslím dělal Jirka Neubauer. To už bylo v době, kdy se přestěhoval na Prahu 5, kde bylo i sídlo té firmy, která ty programy produkovala. Nám to pak posílal a my jsme mu to pomáhali distribuovat.</A>



        <center>
            <i>Konec rozhovoru</i>
        </center>
        
    {/snippet}
</Interview>