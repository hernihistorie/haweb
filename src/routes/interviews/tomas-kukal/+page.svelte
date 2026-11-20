<script lang="ts">
    /* https://docs.google.com/document/d/1EUv8mepuz5gsXFP4tlrr3iypy-hDEpUN/edit */
	import InterviewPage from "$src/lib/components/interviews/InterviewPage.svelte";
	import Answer from "#lib/components/interviews/Answer.svelte"
	import Question from "#lib/components/interviews/Question.svelte";
    import Loc from "#lib/components/Loc.svelte";

    import { data, TK, RS } from "./interview";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import InterviewAuthorMeta from "$src/routes/projects/bulanci/authors/InterviewAuthorMeta.svelte";

    let A = Answer;
    let Q = Question;
</script>

<PageLang cs en />

<InterviewPage data={data}>
    {#snippet content()}
        <Loc>
            {#snippet cs()}
                <Q speaker={RS}>Potkali jsme se k rozhovoru na téma fanouškovský tvorby k <i>Bulánkům</i>. Začal bych ale trochu obecně. Jaký bylo vaše rodinný zázemí, kam jste chodil do školy?</Q>

                <A speaker={TK}>Jsem ročník 1992. Pocházím z Prahy, Řep, kde jsem žil mínus dva roky celý život. Chodil jsem na základní školu Generála poručíka Františka Peřiny. Veškerý bulánkovský aktivity se konaly právě během toho, co jsem tam chodil. Potom jsem navázal Střední průmyslovou školou potravinářských technologií a následně jsem navázal studiem na přírodovědecké fakultě Univerzity Karlovy. Magisterské studium proběhlo tamtéž. Dále jsem dělal ještě inženýrské studium na České zemědělské univerzitě, taky v ochraně životního prostředí.</A>

                <Q speaker={RS}>Kdy se k vám domů zaváděl internet?</Q>

                <A speaker={TK}>My jsme měli internet už hodně brzo. Modemovej. Ale asi velmi zpoplatněný, takže rodiče nám ho zakazovali. Kolem roku 2006, 2007 už jsme měli normálně použitelnej internet.</A>

                <Q speaker={RS}>Co vy a videohry? Hrály se u vás doma hry nebo jste se k nim dostal ve škole?</Q>

                <A speaker={TK}>Co se týče videoher, měli jsme doma počítač, žádnej PlayStation ani jiný konzole. K tomu počítači jsem se dostal už během prvního stupně základní školy. A začínali jsme na takový tý klasice, Windows 95 a <i>Goblins</i>, <i>Lemmings</i> a tyhle hry. Nebo třeba <i>Keen</i>, <i>Doom</i> a podobně. Záhy vyšla první verze <i>Bulánků</i> a už tu jsem tehdy hrál.</A>

                <Q speaker={RS}>Jak jste se k <i>Bulánkům</i> dostal? A kdy?</Q>

                <A speaker={TK}>Někdy na základce, na prvním stupni, přesně si to úplně nevybavuju. Mohla to být druhá třída základky, to znamená rok 2002, 2003, ale přesně si to nepamatuju. Jak jsem se k nim dostal, si nevzpomenu, protože internet jsme v tý době ještě neměli. Buď jsem je přetáhnul od nějakýho kamaráda a nebo na internetu ve škole. Nejdřív to byla ta úplně základní aplikace, kde se nedaly vytvářet levely.</A>

                <Q speaker={RS}>S kým jste <i>Bulánky</i> hrál?</Q>

                <A speaker={TK}>Nejvíc jsem je hrál s kamarádama ze školy. Buď se spolužákama ze třídy a nebo ještě se spolužákama od sestry a se sestrou. Sestra je rok 1994, takže jsme si v dětství dost vyhráli a <i>Bulánci</i> taky byli naše společná aktivita. Spíš okrajová, bych řekl, ale měl jsem dva kamarády z jejího ročníku, to znamená taky rok 1994 a s těma jsme hráli asi nejvíc. Dokonce jsme měli i takovej malej klub pro <i>Bulánky</i>.</A>

                <Q speaker={RS}>Můžete ten klub přiblížit?</Q>

                <A speaker={TK}>To bylo jen takový neformální. Klub možná není to správný slovo, my jsme tomu říkali klan. Soutěžili jsme o to, kdo bude klan mistrem, kdo bude vedoucím. A o to jsme pořádali souboje. Ale žádnou jinou činnost jsme nevyvíjeli.</A>

                <Q speaker={RS}>Já se na to ptám i z toho důvodu, že jeden z webů, na který jsem narazil, se jmenoval Klan svobodných Bulánků.</Q>

                <A speaker={TK}>Ano, tak jsme to nazvali. To byl už asi třetí název pro ten klan.</A>

                <Q speaker={RS}>A byla to ta stejná parta kamarádů ze školy?</Q>

                <A speaker={TK}>Přesně tak. Mohlo nás být pět, šest. Ale napsali jsme tam třeba i ty, kteří si s náma jednou, dvakrát zahráli a pak už tam nefigurovali.</A>

                <Q speaker={RS}>Všechny jste tedy znal naživo?</Q>

                <A speaker={TK}>Ano. Nevím, jestli o to neprojevil zájem i někdo jen přes internet. To už si nepamatuju, ale rozhodně to nebyl nikdo, kdo by se aktivně angažoval.</A>

                <Q speaker={RS}>Byl jste přes <i>Bulánky</i> v kontaktu s někým, koho jste neznal naživo, ale jen přes internet?</Q>

                <A speaker={TK}>To spíš až později, když jsem si psal s někým o mapách, co jsme pak vytvářeli. Ale nebyl to nějakej intenzivní kontakt. Pár lidí mě oslovilo skrz ty levely, co si pamatuju, ale bylo to vždycky jenom nahodilý. Nevytvořilo to přátelství s nějakým přesahem.</A>

                <Q speaker={RS}>Dostáváme se k mapám. Vy jste dělal mapy do <i>Bulánků</i>?</Q>

                <A speaker={TK}>Ano, přesně tak. Ta hra se potýkala s tím, že byla dost monotónní. Byla super, ale základních levelů bylo šest. A když jsme to tehdy hráli často, třeba minimálně jednou, dvakrát denně, velmi rychle nás to omrzelo. Editor přidali tak tři, čtyři roky po tom, co jsem se s tím seznámil. Takže najednou byly možnosti si něco vytvořit. Pro mě to byla jediná hra, do které jsem něco takhle tvořil. Bylo to i tím, že ten editor, ač měl chyby, byl docela dobrej. Prostě jednoduchej a funkční editor. Když editor vyšel, chtěli jsme ho vyzkoušet a pokud si to dobře pamatuju, tak to chtělo jenom podkresovou písničku v MP3, podkladovej obrázek a pak si do toho člověk mohl něco dalšího přidávat. A ještě ten úvodní načítací obrázek. Když si člověk sehnal někde dva JPG a jednu MP3, mohl tvořit. Některý ty mapy byly takový velmi jednoduchý, něco ve stylu Vybíjená. To znamená takovej úplně jednoduchej level, kde nic není. Vznikaly ale i složitější. Editor měl možnost vkládat překážky, což bylo super, to mě bavilo. Když si tam člověk přidal nějaký ten obrázek, mohl ho opřekážkovat. Dělal jsem to tak, že jsem někde stáhnul obrázek jednorožce nebo bedny nebo něco takovýho a to jsem tam přihodil a udělal z toho překážku. Zajímavý bylo, že ty překážky se daly dělat i průchozí a průstřelný, nebo taky jenom průstřelný, ale ne průchozí. Dalo se s tím různě kouzlit. Ta překážka mohla fungovat tak, že když se k ní z nějakýho úhlu přišlo, dalo se přes ní střílet, z jinýho ne a podobně. Byly tam ale i nedostatky. Překážky se tvořily za pomocí obdélníčků a čtverečků. Když měla překážka oblouk, musel se vykostičkovat z malých kostiček, nešel nijak vykreslit. Tím to bylo jednak složitější a jednak se stávalo, že vznikla místa, kde se ten Bulánek zaseknul. Nějaký ty levely jsem takhle vytvořil, kamarádi minimálně. Ty lepší levely jsem potom dával na internet a ty horší jsem si nechal jen na doma.</A>

                <Q speaker={RS}>Byla výhoda <i>Bulánků</i>, že jejich editor byl oproti jiným hrám jednodušší?</Q>

                <A speaker={TK}>Jiný hry sice taky disponovaly nějakým editorem, ale ten byl téměř úplně nepoužitelnej. Aby člověk napsal něco, co by se dalo hrát, strávil by u toho šílených hodin. U <i>Bulánků</i> ten editor byl použitelnej i pro velkýho amatéra, jako jsem byl já. I když tomu editoru chyběly některý jako funkce, jako např. přidávání vlastních příšer a jiný komplikovanější věci, nevadilo to. I s tím málem se daly vykouzlit hezký věci. A nebo když ne hezký, aspoň funkční.</A>

                <Q speaker={RS}>Hrál jste ty své mapy s kamarády?</Q>

                <A speaker={TK}>Jak který, ty méně povedený moc ne, ale ty povedenější jsme hráli. To je možná taky zajímavá věc, kterou jsem ještě měl zmínit. Třeba 95 procent těch našich vzájemných zápasů jsme hráli na jednom počítači, jedný klávesnici. Tři jsme u ní seděli a hráli, což <i>Bulánci</i> umožňovali. Šlo to sice hrát i online přes Hamachi, ale my jsme kolem sebe neměli nikoho technicky zdatnýho, takže jsme opravdu hráli hlavně u toho jednoho počítače. Sešli jsme se po škole a hráli jsme bez nějakejch dalších těžkostí. A zároveň si u toho člověk s kamarádama realtimově pokecal. Byl to takovej zážitek, kterej třeba z toho hraní online možná člověk tolik nemá.</A>

                <Q speaker={RS}>A ti kamarádi taky dělali mapy?</Q>

                <A speaker={TK}>Minimálně. Je to až tolik nebavilo. Často jsem mapy získával od někoho přes internet a pak, když už šli stahovat, jsem je stahoval. Musím říct, že až na nějaký výjimky byla kvalita těch map oproti mým úplně někde jinde. Dělal jsem to hodně amatérsky.</A>

                <Q speaker={RS}>Co vás na tvoření map tak bavilo, když vaše kamarády to nezaujalo?</Q>

                <A speaker={TK}>Ze začátku byl podstatnej stimul, že existuje jenom šest základních map. To člověk dostal chuť vytvořit něco jinýho. Měl jsem plno nápadů a chtěl je dotáhnout. To pak ustupovalo do pozadí kvůli tomu, že vznikaly mapy od jinejch tvůrců. Když přišla pokročilejší fáze toho tvoření, už jsem na to neměl tolik času. Měl jsem i jiný koníčky než <i>Bulánky</i> a navíc těch map bylo tolik, že už to ani nebylo potřeba. Když jsem viděl mapy od konkurence, říkal jsem si, že jsem nad tím strávil hodiny a je to takovej odpad. Vytvořit celou mapy mi trvalo pět, šest hodin. Mojí velkou slabinou bylo, že jsem neuměl v žádným grafickým editoru, kromě malování. Měl jsem problém vytvořit si něco vlastního, co by do tý mapy bylo pěkný. Neuměl jsem to. Takže po té sebereflexi už jsem pak nepokračoval. Navíc naše myšlenka nebyla vytvářet mapy, ale mít v čem hrát. Takže když už ty mapy byly, už ta moje motivace odpadla. Ale měli jsme jednu speciální mapu, kterou jsme nazvali klanmistrovská mapa. Ani nevím, jestli byla na internetu nebo ne. Tu jsme vytvořili právě pro souboje o klan mistra. Ale moc se to nechytlo. Pak ten stávající vedoucí vždycky řekl: „mně se víc líbí tahle" a hrála se ta. Takže to je taková mapa se zajímavým vznikem, ale ta myšlenka se neujala. On ten klan fungoval velmi volně. I to slovo „svobodných" na to navádělo. Neměli jsme žádnou hierarchii. Spíš jsme chtěli hrát <i>Bulánky</i> a nějak to s tím přišlo.</A>

                <Q speaker={RS}>Jak jste se dostával k cizím mapám? Případně webům a blogům?</Q>

                <A speaker={TK}>Normálně jsem to zadal do vyhledávače, mapy k <i>Bulánkům</i> a něco jsem našel. Nebo mě na to někdo upozornil. Napsal do mailu, že vytvořil novou stránku, protože zase znal ten náš blog. Sociální sítě ještě neexistovaly. Bylo ICQ, ale to byl spíš chat než sociální síť. Nejčastěji to bylo to vyhledání na internetu. Později, jestli si dobře pamatuju, začalo Ulož to.</A>

                <Q speaker={RS}>Motivace za tím si stahovat levely od cizích autorů byla jaká?</Q>

                <A speaker={TK}>Zahrát si je. Nebylo to tak, že bych se tím chtěl inspirovat při tvorbě, to ne. Často byly i technicky lepší, než ty moje, tak jsme měli chuť si je zahrát.</A>

                <Q speaker={RS}>Vaše aktivity byly tedy hraní <i>Bulánků</i> a pak vedení blogu, kam jste občas něco napsali?</Q>

                <A speaker={TK}>Ten blog jsem spíš vedl já.</A>

                <Q speaker={RS}>Co vás vedlo k založení a vedení těch blogů?</Q>

                <A speaker={TK}>U těch <i>Bulánků</i> jsme tomu chtěli dát nějakou formu. To znamená vytvořit podmínky k tomu, aby se o tom našem klanu třeba někdo dozvěděl. Chtěli jsme tam dávat i nějaké výstupy z porad a tak. Taková podpora organizace toho klanu. Co se týče těch mých vlastních blogů, tam mi šlo o to psát, co jsem měl pocit, že by mohlo někoho zaujmout. Tehdy internet ještě nebyl plnej toho obsahu. Dnes už by to nefungovalo. Ten blog měl několik sekcí. Jedna byly zápisky z mých výletů. To jsem dělal třeba i pro kamarády. Někde jsme spolu byli, tak aby si to mohli rozkliknout a přečíst. Další sekce byla o Halloweenu. To byl můj oblíbený svátek a materiálů k němu na internetu moc nebylo. Měl jsem pocit, že taky musím přispět svojí troškou do mlýna. Taky jsem měl takovou vznešenou ideu, která se týkala hry <i>Carcassonne</i>. To byla moje deskovková srdcovka a měl jsem taky pocit, že by se informace o ní měly sjednotit na jednom místě a tím místem že bude můj blog. Takže jsem měl i sekci pro <i>Carcassonne</i>. Později už to byla taková setrvačnost. Když už člověk něco vytvořil, bylo mu líto v tom přestat. Viděno zpětně, hodnota těch článků byla kolísavá, ale měl jsem tam i nějakou návštěvnost. Několik tisíc lidí se na to třeba kouklo, takže zase až tak úplně marný to nebylo.</A>

                <Q speaker={RS}>Měl ten váš klan nějaké další aktivity?</Q>

                <A speaker={TK}>Co si pamatuju, tak ne. Možná občas nějakej sraz, nebo porada. Sešli jsme se, pokecali jsme a k tomu jsme si honosně napsali porada. Viděno zejména z dnešního úhlu pohledu to bylo dost o ničem. Ale tehdy nás to bavilo.</A>
            {/snippet}
            {#snippet en()}
                <Q speaker={RS}>We met for an interview on the topic of fan creations for <i>Bulánci</i>. But let me start a bit more generally. What was your family background like, and where did you go to school?</Q>

                <A speaker={TK}>I was born in 1992. I'm from Prague, Řepy, where I've lived my whole life minus two years. I attended the Lieutenant General František Peřina elementary school. All of my <i>Bulánci</i> activities took place while I was going there. After that I continued at the Secondary School of Food Technology, and then I went on to study at the Faculty of Science of Charles University. I did my master's degree there as well. After that I also did an engineering degree at the Czech University of Life Sciences, also in environmental protection.</A>

                <Q speaker={RS}>When did you get the internet at home?</Q>

                <A speaker={TK}>We had the internet quite early. Dial-up. But probably very expensive, so my parents forbade us from using it. Around 2006, 2007 we had a normally usable internet.</A>

                <Q speaker={RS}>What about you and video games? Did you play games at home, or did you come to them at school?</Q>

                <A speaker={TK}>As for video games, we had a computer at home, no PlayStation or other consoles. I got to that computer already during the first stage of elementary school. And we started with the classics, Windows 95 and <i>Goblins</i>, <i>Lemmings</i> and those kinds of games. Or <i>Keen</i>, <i>Doom</i> and so on. Soon the first version of <i>Bulánci</i> came out and I was already playing it back then.</A>

                <Q speaker={RS}>How did you come across <i>Bulánci</i>? And when?</Q>

                <A speaker={TK}>Sometime in elementary school, in the first stage, I don't remember exactly. It could have been second grade, which means 2002, 2003, but I don't remember precisely. How I got to it, I can't recall, because we didn't have the internet yet at that time. Either I copied it from a friend, or I got it on the internet at school. At first it was the very basic version, where you couldn't create levels.</A>

                <Q speaker={RS}>Who did you play <i>Bulánci</i> with?</Q>

                <A speaker={TK}>Mostly with friends from school. Either with classmates from my class, or with classmates of my sister's, and with my sister. My sister was born in 1994, so we played together a lot as kids, and <i>Bulánci</i> was also our shared activity. More of a marginal one, I'd say, but I had two friends from her year, so also 1994, and we played together the most. We even had a small club for <i>Bulánci</i>.</A>

                <Q speaker={RS}>Can you tell me more about that club?</Q>

                <A speaker={TK}>It was just informal. Club is maybe not the right word, we called it a clan. We competed over who would be the clan master, who would be the leader. And we held duels for that. But we didn't do any other activities.</A>

                <Q speaker={RS}>I'm asking partly because one of the websites I came across was called Clan of Free Bulánci.</Q>

                <A speaker={TK}>Yes, that's what we named it. That was probably already the third name for that clan.</A>

                <Q speaker={RS}>And was it the same group of friends from school?</Q>

                <A speaker={TK}>Exactly. There might have been five or six of us. But we also wrote in there people who played with us once or twice and then didn't appear there anymore.</A>

                <Q speaker={RS}>So you knew all of them in person?</Q>

                <A speaker={TK}>Yes. I don't know whether someone only from the internet showed interest as well. I don't remember that anymore, but it definitely wasn't anyone who got actively involved.</A>

                <Q speaker={RS}>Were you in contact through <i>Bulánci</i> with anyone you didn't know in person, only via the internet?</Q>

                <A speaker={TK}>That was more later, when I corresponded with someone about the maps we then created. But it wasn't any intense contact. A few people approached me through the levels, as far as I remember, but it was always just sporadic. It didn't create a friendship that went beyond that.</A>

                <Q speaker={RS}>We're getting to the maps. Did you make maps for <i>Bulánci</i>?</Q>

                <A speaker={TK}>Yes, exactly. The game struggled with being quite monotonous. It was great, but there were only six basic levels. And since we played it often back then, at least once or twice a day, we got bored of it very quickly. The editor was added about three or four years after I got to know the game. So suddenly there were possibilities to create something. For me it was the only game I created anything like that in. That was also because the editor, although it had bugs, was quite good. Simply a simple and functional editor. When the editor came out, we wanted to try it, and if I remember correctly, all it needed was a background song in MP3, a background image, and then you could add other things to it. And also the opening loading image. If you got hold of two JPGs and one MP3 somewhere, you could create. Some of those maps were very simple, something in the style of dodgeball. That means a completely simple level where there's nothing. But more complex ones were made too. The editor had the option to insert obstacles, which was great, I enjoyed that. If you added some image there, you could turn it into an obstacle. I did it by downloading an image of a unicorn or a crate or something like that somewhere, dropping it in there and making an obstacle out of it. What was interesting was that the obstacles could be made walkable-through and shoot-through, or also only shoot-through but not walkable-through. You could work all kinds of magic with it. The obstacle could work so that when you approached it from a certain angle you could shoot through it, from another you couldn't, and so on. But there were also shortcomings. Obstacles were made using little rectangles and squares. If an obstacle had a curve, it had to be pieced together from small blocks, there was no way to draw it. That made it more complicated on the one hand, and on the other hand it happened that spots were created where the Bulánek got stuck. I made some of those levels that way, my friends minimally. I then put the better levels on the internet and kept the worse ones just for home.</A>

                <Q speaker={RS}>Was it an advantage of <i>Bulánci</i> that their editor was simpler compared to other games?</Q>

                <A speaker={TK}>Other games did have some sort of editor too, but it was almost completely unusable. To write something that could be played, you'd spend insane hours on it. With <i>Bulánci</i> the editor was usable even for a big amateur like me. Even though the editor lacked some functions, such as adding your own monsters and other more complicated things, it didn't matter. Even with the little it had, you could conjure up nice things. Or if not nice, at least functional.</A>

                <Q speaker={RS}>Did you play your maps with your friends?</Q>

                <A speaker={TK}>Depends which. The less successful ones not so much, but the more successful ones we played. That's maybe also an interesting thing I should have mentioned. Something like 95 percent of our matches against each other we played on one computer, one keyboard. Three of us sat at it and played, which <i>Bulánci</i> allowed. You could play online via Hamachi too, but we had nobody technically skilled around us, so we really played mainly at that one computer. We met after school and played without any further difficulties. And at the same time you could chat in real time with your friends. It was the kind of experience that you maybe don't get as much from playing online.</A>

                <Q speaker={RS}>And did those friends make maps too?</Q>

                <A speaker={TK}>Minimally. It didn't interest them that much. I often got maps from someone over the internet, and then, once downloading became possible, I downloaded them. I have to say that, with a few exceptions, the quality of those maps was completely on a different level compared to mine. I did it very amateurishly.</A>

                <Q speaker={RS}>What did you enjoy so much about making maps when your friends weren't interested?</Q>

                <A speaker={TK}>In the beginning, an important stimulus was that there were only six basic maps. That made you want to create something different. I had lots of ideas and wanted to see them through. That then faded into the background because maps from other creators started appearing. When the more advanced phase of creating came, I no longer had so much time for it. I had other hobbies besides <i>Bulánci</i>, and on top of that there were so many maps that it wasn't even needed anymore. When I saw the maps from the competition, I thought to myself that I'd spent hours on it and it was such rubbish. Creating an entire map took me five, six hours. My big weakness was that I couldn't use any graphics editor except Paint. I had trouble creating something of my own that would look nice on the map. I couldn't do it. So after that self-reflection I didn't continue. Besides, our idea wasn't to create maps, but to have something to play in. So once the maps existed, my motivation disappeared. But we had one special map, which we called the clan master map. I don't even know whether it was on the internet or not. We created it precisely for the duels over the clan master. But it didn't really catch on. The current leader would always say: "I like this one better" and that was the one played. So it's a map with an interesting origin, but the idea didn't take hold. The clan functioned very loosely. Even the word "free" hinted at that. We had no hierarchy. We mostly wanted to play <i>Bulánci</i> and it somehow came with that.</A>

                <Q speaker={RS}>How did you come across other people's maps? Or websites and blogs?</Q>

                <A speaker={TK}>I'd normally enter it into a search engine, maps for <i>Bulánci</i>, and find something. Or someone pointed it out to me. They wrote in an email that they'd created a new site, because they knew our blog too. Social networks didn't exist yet. There was ICQ, but that was more of a chat than a social network. Most often it was searching on the internet. Later, if I remember correctly, Uloz.to started.</A>

                <Q speaker={RS}>What was the motivation for downloading levels from other authors?</Q>

                <A speaker={TK}>To play them. It wasn't that I wanted to get inspired by them for my own creation, no. They were often technically better than mine, so we felt like playing them.</A>

                <Q speaker={RS}>So your activities were playing <i>Bulánci</i> and then running a blog where you occasionally wrote something?</Q>

                <A speaker={TK}>I was the one who mostly ran the blog.</A>

                <Q speaker={RS}>What led you to start and run those blogs?</Q>

                <A speaker={TK}>With the <i>Bulánci</i> one, we wanted to give it some form. That means creating conditions so that someone might learn about our clan. We also wanted to post outputs from meetings and so on. A kind of support for the organization of that clan. As for my own blogs, what mattered to me was writing what I felt might interest someone. Back then the internet wasn't yet full of content. Today it wouldn't work anymore. The blog had several sections. One was notes from my trips. I did that for my friends too. We'd been somewhere together, so that they could click through and read about it. Another section was about Halloween. It was my favorite holiday and there wasn't much material about it on the internet. I felt I had to contribute my little bit as well. I also had a lofty idea concerning the game <i>Carcassonne</i>. It was my board game love, and I felt that information about it should be consolidated in one place, and that place would be my blog. So I had a section for <i>Carcassonne</i> too. Later it was a kind of inertia. Once you'd created something, you were reluctant to stop. Looking back, the value of those articles varied, but I did get some traffic. A few thousand people may have taken a look, so it wasn't completely pointless after all.</A>

                <Q speaker={RS}>Did your clan have any other activities?</Q>

                <A speaker={TK}>As far as I remember, no. Maybe the occasional meetup or meeting. We got together, chatted, and pompously wrote it down as a meeting. Seen especially from today's perspective, it was pretty much about nothing. But we enjoyed it back then.</A>
            {/snippet}
        </Loc>
    {/snippet}
    {#snippet meta()}
        <InterviewAuthorMeta name="Tomáš Kukal" />
    {/snippet}
</InterviewPage>