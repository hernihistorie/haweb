<script lang="ts">
    /* https://docs.google.com/document/d/1EUv8mepuz5gsXFP4tlrr3iypy-hDEpUN/edit */
	import InterviewPage from "$src/lib/components/interviews/InterviewPage.svelte";
	import Answer from "#lib/components/interviews/Answer.svelte"
	import Question from "#lib/components/interviews/Question.svelte";
    import Loc from "#lib/components/Loc.svelte";

    import { data, JCH, RS } from "./interview";
    import PageLang from "$src/lib/components/PageLang.svelte";

    let A = Answer;
    let Q = Question;
</script>

<PageLang cs en />

<InterviewPage data={data}>
    {#snippet content()}
        <Loc>
            {#snippet cs()}
                <Q speaker={RS}>Potkali jsme se na discord callu a budeme se bavit o vaší činnosti kolem Bulánků. Nejprve se zeptám, odkud jste, jaké je vaše rodinné zázemí, kam jste chodil do školy?</Q>

                <A speaker={JCH}>Narodil jsem se v roce 1990 a jsem z Mikulova. Velkou část dětství jsem strávil spíš na severní Moravě u Holešova. Vyrůstal jsem na vesnici u babičky, do školy jsem ale chodil v Mikulově. Na střední pak do Břeclavi. Matka je Češka a taťka je Slovák.</A>

                <Q speaker={RS}>Kdy jste se poprvé dostal k videohrám nebo k počítačům?</Q>

                <A speaker={JCH}>Už jako malej. Mám o hodně staršího bratra, je mezi náma rozdíl 10 let. Když jsem byl malej, tahal domů všemožný hračky. První věc, co jsem měl, byla taková stará videohra, na který byl jenom Pong. Později Atari a různý další hry. K tomu ještě strejda sbíral různý hry převážně z Ruska, ale i z Číny a podobně. První počítač, co jsme měli, byla 386, na který jsme tehdy hráli <i>Prince of Persia</i>. To byla úplně první hra, co jsem hrál na počítači. Později jsem měl i různý kazetový hry. Některý čínský, některý originál. A ještě později měl brácha klasický počítač. Tehdy byl ještě vytáčecí internet, pamatuju si ten pískavej zvuk routeru. To mi z hlavy nikdy nezmizí. Připojení internetu bylo omezené, když člověk vyčerpal limit, smůla. Navíc to bylo přes telefonní linku. Když byl připojenej internet, nešel telefon a obráceně. Jak mamka zvedla telefon, odpojil se mi internet. To byl tak rok 1994/1995. Brzy jsem vydělával první peníze, protože jsem prakticky od malička pracoval na různých brigádách, jako sběr ovoce a podobně. Hodně často jsem pomáhal na statku, protože většina naší rodiny jsou statkáři. Proto jsem většinu času vyrůstal na vsi. A nebylo to vždycky úplně zadarmo. Tehdy jsem dostával takový drobásky, jako desetikoruna, dvacetikoruna, ale postupem času se to naskládalo, takže za ty první peníze jsem koupil počítač od bratra a později jsem si našetřil na pořádnou mašinku. To jsem se tehdy hodně rozmáchnul a koupil jsem fakt pořádnou mašinu, top tier, to nejdražší, co šlo.</A>

                <Q speaker={RS}>Aby na tom šly hrát ty nejnovější hry?</Q>

                <A speaker={JCH}>No a ještě dalších deset let potom. Ten počítač vydržel strašně dlouho. Doteď ho používá taťka. Co se her týče, hrávali jsme všechno možný. Když <i>Bulánci</i> vyšly, hráli jsme celá rodina na jedný klávesnici. Hlavně ale se sourozenci, čtyři <i>Bulánci</i>, čtyři lidi na jedný klávesnici. To byla strašná sranda. Hráli jsme i <i>NHL</i> nebo <i>Need for Speed</i>. Bráchu jsem vždycky porazil. Postupně se objevovaly další a další hry a už ani nevím, co všechno jsem hrál a nehrál. Teď mám tolik her, že můžu s čistým svědomím říct, že 99,9 procent z nich jsem ani nehrál. Já je spíš sbírám. Jen na Steamu mám v tuhle chvíli 3217 her. Pak mám ještě hry na GOGu, na různých dalších platformách, něco fyzicky.</A>

                <Q speaker={RS}>Vy jste říkal, že jste hrál <i>Bulánky</i> se sourozenci. Kolik vás v rodině vlastně je?</Q>

                <A speaker={JCH}>Já mám dva o hodně starší sourozence. Bratr je ode mě 10 let a sestra o 12.</A>

                <Q speaker={RS}>A jak jste se k <i>Bulánkům</i> dostal?</Q>

                <A speaker={JCH}>Vlastně ani nevím. Mám pocit, že s tím přišel bratr. Vím, že jsme to hráli hned první den, ale jak jsme se k tomu dostali, už si nevzpomenu. Možná to byla jenom náhoda. Brácha rád brouzdal po internetu, ale tam toho tehdy moc nebylo. A protože to byla česká hra, myslím, že na to narazil nejspíš na Seznamu, který už tehdy existoval. Sám jsem myslím přišel ze školy a už jsme to rovnou hráli a strašně nás to chytlo. Hráli jsme dlouho a různě s tím blbnuli. Sestra přitom strašně ráda dělala všemožný naschvály od štípání, žďouchání a kousání. (smích) Takže při tom hraní opravdu byla zábava. Hráli jsme většinou tři, někdy se připojila třeba mamka, někdy kamarádi. Často jsme tady měli třeba osm, devět lidí a točili jsme se u tý jedný klávesnice.</A>

                <Q speaker={RS}>A hráli jste primárně u vás doma s rodinou, případně s kamarádama?</Q>

                <A speaker={JCH}>Doma a později na škole. Do školy nám dali počítače někdy v sedmý nebo osmý třídě, takže tam jsem si těch počítačů moc neužil. Ale taky jsme tam hráli všechno možný. Od <i>Bulánků</i> přes <i>Quake</i>, <i>Doom</i> až k <i>Duke Nukem</i>. Tehdy taky byly stránky jako Free hry a tam bývaly všemožný flashový hry a taky videjka <i>Happy Tree Friends</i>. Ty jsem si při hodině pouštěl a když šel kolem učitel, říkal: ty se díváš na takový hovadiny. A sedl si vedle mě. Od tý doby jsme se spolu takhle dívali. Později si vedle mě dal svůj počítač, na kterým hrál všemožný hry. Takže já jsem se díval na <i>Happy Tree Friends</i> a on zároveň během toho ještě hrál nějaký hry. A holky se učily psát deseti, protože byl toho názoru, že holky jsou do kanceláří. Trošku sexista. Říkal, že z nich budou sekretářky, ty to potřebujou a kluci, že se mají učit programovat a dělat si co chtějí. Takže já jsem se tam učil programovat a díval jsem se na <i>Happy Tree Friends</i>. Doteď neumím psát deseti. Ale umím programovat.</A>

                <Q speaker={RS}>Vy jste ale kromě hraní <i>Bulánků</i> také zakládal fanouškovské weby a tvořil mapy.</Q>

                <A speaker={JCH}>Tehdy byl velký rozmach tvoření map a já jsem si říkal, že by bylo fajn, kdyby se o to lidi mohli podělit. Do tý doby neexistovalo žádný místo, kde jste si mohli stáhnout mapy. Všechno to bylo rozházený po fórech, uploadech, na Ulož to, na Mega upload a všude možně. Pokud někdo nedostal přímo link, ani nemusel vědět, že to existuje. Vedle toho existovaly různý chatový roomky, kde si to lidi sdíleli, ale to většinou bývalo časově omezené. Když jste to nestihl stáhnout, měl jste smůlu. Mě napadlo, že udělám stránky, kam to ty lidi budou moct nahrát. Proto jsem tehdy udělal stránky Bulánci e-zin. Nebyl jsem ale jedinej, koho něco podobnýho napadlo, takže těch stránek začalo vznikat víc. Já byl ale mezi prvními. Vytvořit stránky nebylo až tak obtížné, ale udělat je tak, aby tam šlo nahrávat soubory a následně je stahovat bylo horší. Ze začátku jsem to řešil tím, že soubory uživatelé posílali mně a já to nahrál. Mezitím jsem pracoval na možnosti to nahrát přímo. Dnes by kdekdo řekl, že to je šílenost, protože máme viry, malwary a tak, ale v tý době jsem na takový věci vůbec nemyslel. Moc jsem o tom nevěděl. Později, když brácha studoval na vysoký IT, jsem se dozvěděl víc. Učil se o těch virech, malwarech, dělal diplomový práce a já jsem byl ten, kdo po něm ty diplomový práce musel kontrolovat, protože byl dysgrafik. Jak jsem to pročítal, tak jsem se hodně naučil a říkal si, že stránky, co jsem tehdy dělal, byly šílenost. Ale fungovalo to, lidi tam nahrávali a stahovali. Počet stahování byl docela velkej. Ale nebylo pro mě podstatný, kolik lidí webem projde. Neměl jsem tam reklamy, co by vydělávaly. Pro mě bylo podstatný, aby se lidi mohli podělit o svoje dílo. Měl jsem tam samozřejmě i svoje mapy. Někteří tvůrci byli ve vytváření map hodně dobří, tak jsem je kontaktoval, jestli bych to tam mohl nahrát. Nebyl nikdo, kdo by odmítl, což mě strašně těšilo. Všechny ty mapy jsem tam nahrával, aby to mohli hrát i další lidi. Všechny ty mapy jsem hrál. Později, když začali někteří ty mapy nahrávat na web sami, už jsem je často ani nehrál. Chvilku trvalo, než jsem vůbec zjistil, že tam někdo něco nahrál.</A>

                <Q speaker={RS}>Takže vy jste procházel weby fanoušků, co dělali mapy, pak jste je kontaktoval, oni vám ty mapy poslali a vy jste je zveřejnil?</Q>

                <A speaker={JCH}>Ano. Stáhl jsem je, zahrál a dal jsem je tam. Některý tvůrci tam potom začali nahrávat i sami.</A>

                <Q speaker={RS}>Ten web, co popisujete byl vlastně klanovej web, kde bylo v jeden moment podepsáno víc lidí. Jak to přesně fungovalo?</Q>

                <A speaker={JCH}>Nebylo nás moc, ale později jsme hráli hlavně online a říkali jsme si klan. Proto jsem to nazval klanový. Původně to klanový web nebyl, ale později jsem to změnil a dávali jsme tam věci, co jsme dělali jako klan. Krátce potom se to ale bohužel rozpadlo, takže to jako klanový web fungovalo asi rok nebo dva. Pak už to mělo fakt primární funkci na sdílení map a hlavně <i>Bulánků</i> jako takových. A návodů, jak je zprovoznit online, protože o to nám hlavně šlo. Tehdy se začaly objevovat problémy s tím, že to spousta lidí nedokázala hrát online. Byl tam návod, jak hrát online, ale když se stalo, že to i tak někomu nešlo, řešil jsem to s těma lidma napřímo. Někdo mi napsal: hele, chceme hrát a nejde nám to. Tak jsme se spojovali přes různý programy, jako byl TeamViewer a podobně. A já jsem jim to zprovoznil. Většinou šlo o problém s firewallem a podobně.</A>

                <Q speaker={RS}>Ten web jste si dělal sám? V HTML, možná v PHP?</Q>

                <A speaker={JCH}>V HTML. Web jsem začal dělat asi v osmi nebo devíti letech, když jsem se učil HTML. Později jsem do toho začal zakomponovávat i PHP. Ten web byl napsaný z toho, co jsem vyčetl z knížek. Já měl hromadu knížek k HTML a ty kódy jsem hledal, jak co udělat. Tím jsem se postupně učil. Co jsem v knížkách nenašel, jsem si našel později na webu, případně jsem se radil se svým učitelem. On se bohužel v programování moc nevyznal, ale něco málo mi poradil. Později jsem takhle udělal i webovou hru. Ta už byla celá v PHP.</A>

                <Q speaker={RS}>Takže ty webovky sloužily jako taková vaše laboratoř pro různý experimenty.</Q>

                <A speaker={JCH}>Ano. Experimentoval jsem a hlavně se na tom učil. Navíc když poskytovatel aktualizuje na novou verzi PHP a odebere starou, je to problém. Kolikrát jsem se musel učit, jak funguje nový PHP jenom abych to mohl opravit. To samý jsem měl i v tý webový hře. Něco jsem napsal a vzápětí vyšel update PHP a poskytovatel jenom poslal: hele, končíme podporu tohodle, přejdeme rovnou na tohle. Celý dny jsem pak přepisoval kódy hry, aby to fungovalo. Většinou to byly jenom drobnosti, ale problém byl v tom, na kolika místech ty věci byly.</A>

                <Q speaker={RS}>Zpět k <i>Bulánkům</i>. Hráli jste přes Hamachi, že?</Q>

                <A speaker={JCH}>Ano, Hamachi. Samozřejmě to fungovalo i přes jiný programy, na stejným principu. Doteďka se ti <i>Bulánci</i> tímhle způsobem dají hrát.</A>

                <Q speaker={RS}>Lidi z klanu byli známí přes internet nebo spolužáci?</Q>

                <A speaker={JCH}>Kromě jednoho nebo dvou to bylo všechno hlavně přes internet. Jeden byl kamarád odmalička a jeden byl spolužák ze třídy. Spolu jsme hrávali na tý jedný klávesnici ve třech a postupně jsme si říkali, že by to chtělo čtvrtýho. Začali jsme hledat a vypisovat si s různýma lidma. Nejen s těma, co posílali mapy, ale i s dalšíma, kteří nás kontaktovali. Postupně jsme poskládali skupinku asi dvanácti lidí. Hráli jsme převážně přes to Hamachi, připojení přes ICQ.</A>

                <Q speaker={RS}>A vy jste ty členy potkal převážně přes mapy?</Q>

                <A speaker={JCH}>Jo. Ale bylo spousta míst, kde se s těma lidma člověk potkal. V Brně byli i turnaje <i>Bulánků</i>. Tam jsem jednoho z nich taky potkal, ale až když už jsem se s ním znal. Většinu z nich jsem ani osobně neznal, nikdy jsem je neviděl. Ale s tím jedním, se kterým jsem se potkal v Brně, se dodneška kamarádím. Hráváme hry pořád. Taky jsem vytvářel vlastní online hry a jeden pozdější člen je hrál. Dali jsme se do řeči skrz ty moje hry a ukázalo se, že taky hraje <i>Bulánky</i> a zapojil se do klanu. Některý jsem potkával i v jiných hrách. Mám třeba rád <i>Hvězdnou bránu</i>, tak jsem hrával různý ty sci-fi a podobně. Takže ty lidi jsem potkával na různých místech a to, že hrajou <i>Bulánky</i>, jsem často zjistil víceméně náhodou. V tom klanu ani nejsou vypsaný všichni, protože potom už jsem ten web neřešil. Později už přestal fungovat. Poskytovatelé tam pořád rvali nějaký reklamy a podobně a to mě přestalo bavit. Nejdřív jsem se to snažil nějakým způsobem obcházet, ale ne vždycky to šlo. Dokonce jsem od nich dostal párkrát varování, že to blokuju.</A>

                <Q speaker={RS}>Jak jste se spolu v rámci klanu domlouvali, kdy budete hrát?</Q>

                <A speaker={JCH}>Měl jsem sepsaný, jak ty lidi můžou a nemůžou. Většina z nás byli školáci, takže jsme měli podobný možnosti. Myslím, že jsme to stanovili kolem druhý hodiny. Asi od dvou do čtyř jsme hrávali <i>Bulánky</i>. Samozřejmě ne každý den. Vždycky jsme se domluvili předem, že si zahrajeme v úterý, ve čtvrtek, v pátek. Různý lidi mohli různý dny. Většinou jsme se sešli třeba ve čtyřech až šesti. Dneska už na ně ani nemám kontakt, kromě těch tří. Spojení jsme byli přes ICQ a později TeamSpeak.</A>

                <Q speaker={RS}>Říkal jste, že se to poměrně záhy rozpadlo, mohl byste popsat důvody?</Q>

                <A speaker={JCH}>Důvodem byla škola. Rozutekli jsme se na různý střední školy a už nebyl čas. Navíc pokročila i technika, ICQ se přestalo používat a my ztratili kontakty. Měli jsme tam i dvě ženy a s těma jsem potom dělal i vlastní <i>World of Warcraft</i> server. Tam jsme se snažili udělat něco podobnýho, co Blizzard později zablokoval. Vytvořit vlastní <i>World of Warcraft</i>. Problém byl v tom, že většinu práce jsem odváděl já. Hlavně, co se týče samotný hry, protože já přepisoval i zdrojový kódy a to mě moc nebavilo.</A>

                <Q speaker={RS}>Říkal jste, že jste jezdil na nějaký akce do Brna. Vzpomenete si na ně?</Q>

                <A speaker={JCH}>Na dvou jsem byl. Ale popravdě já jsem poměrně nespolečenský člověk, takže jsem tam byl někde schovanej v koutu a díval se a fandil. Dostal jsem se k tomu náhodou. Někdo mi řekl, že to existuje a jestli bych se nepřišel podívat. Jednou tam byl někdo přímo od <i>Bulánků</i>. Tam jsem se tehdy nakonec vydal. Hodinu jsem bloudil po městě, než jsem to našel. Nakonec to trošku prozradil dav. Bylo tam podezřele moc lidí. Původně jsem si myslel, že to je kavárna, tak jsem kolem toho dvakrát prošel. Pak jsem si zavolal a zeptal se, kde to je a zjistil, že kolem toho chodím. Vešel jsem dovnitř a ona to vlastně byla kavárna, akorát tam byly naskládaný počítače. A podruhé už jsem věděl, kam jdu, protože to bylo na stejným místě. To už tam tolik lidí nebylo. To už jsem si i víc zahrál. Zahrál jsem si skoro s každým, kdo tam byl.</A>
            {/snippet}
            {#snippet en()}
                <Q speaker={RS}>We met on a Discord call and will be talking about your activities around Bulánci. First, let me ask where you're from, what your family background is, and where you went to school.</Q>

                <A speaker={JCH}>I was born in 1990 and I'm from Mikulov. I spent a large part of my childhood in northern Moravia, near Holešov. I grew up in a village at my grandmother's, but I went to school in Mikulov. Then I went to high school in Břeclav. My mother is Czech and my dad is Slovak.</A>

                <Q speaker={RS}>When did you first come into contact with video games or computers?</Q>

                <A speaker={JCH}>Already as a little kid. I have a much older brother, there's a 10-year gap between us. When I was little, he dragged home all kinds of toys. The first thing I had was an old video game console that only had Pong on it. Later Atari and various other games. On top of that, my uncle collected all kinds of games, mostly from Russia, but also from China and so on. The first computer we had was a 386, and we played <i>Prince of Persia</i> on it back then. That was the very first game I played on a computer. Later I also had various cassette games. Some Chinese, some original. And even later my brother had a regular PC. Back then there was still dial-up internet, I remember the squealing sound of the modem. That will never leave my head. The connection was limited, and once you used up your limit, tough luck. On top of that it ran over the telephone line. When the internet was connected, the phone didn't work and vice versa. The moment Mom picked up the phone, my internet got cut off. That was around 1994/1995. I soon earned my first money, because practically from early childhood I worked various part-time jobs, like fruit picking and so on. I very often helped out on the farm, because most of our family are farmers. That's why I spent most of my time growing up in the countryside. And it wasn't always completely free. Back then I got tiny sums, like a ten-crown coin or a twenty-crown coin, but over time it added up, so with my first money I bought a computer from my brother, and later I saved up for a proper machine. I really went all out then and bought a really solid machine, top tier, the most expensive thing available.</A>

                <Q speaker={RS}>So that you could play the latest games on it?</Q>

                <A speaker={JCH}>Yes, and for another ten years after that. That computer lasted incredibly long. My dad still uses it today. As for games, we played all sorts of things. When <i>Bulánci</i> came out, the whole family played on one keyboard. Mainly with my siblings, though, four <i>Bulánci</i>, four people on one keyboard. It was a ton of fun. We also played <i>NHL</i> or <i>Need for Speed</i>. I always beat my brother. More and more games kept appearing and I don't even know what all I played and didn't play. Now I have so many games that I can say with a clear conscience that 99.9 percent of them I haven't played at all. I mostly collect them. On Steam alone I currently have 3217 games. Then I also have games on GOG, on various other platforms, some physical copies.</A>

                <Q speaker={RS}>You said you played <i>Bulánci</i> with your siblings. How many of you are there in the family, actually?</Q>

                <A speaker={JCH}>I have two much older siblings. My brother is 10 years older than me and my sister is 12 years older.</A>

                <Q speaker={RS}>And how did you come across <i>Bulánci</i>?</Q>

                <A speaker={JCH}>I actually don't know. I have a feeling my brother came up with it. I know we played it right on the first day, but how we got to it, I can't remember. Maybe it was just by chance. My brother liked browsing the internet, but there wasn't much there back then. And since it was a Czech game, I think he probably stumbled on it on Seznam, which already existed at the time. I think I came home from school and we were already playing it, and it really hooked us. We played for a long time and messed around with it in all sorts of ways. My sister, by the way, absolutely loved pulling all kinds of pranks, from pinching and poking to biting. (laughter) So the playing was really fun. Mostly three of us played, sometimes Mom joined in, sometimes friends. We often had eight, nine people here, taking turns at that one keyboard.</A>

                <Q speaker={RS}>And did you play primarily at home with your family, or possibly with friends?</Q>

                <A speaker={JCH}>At home and later at school. The school got computers sometime in seventh or eighth grade, so I didn't get to enjoy computers there for very long. But we played all kinds of things there too. From <i>Bulánci</i> through <i>Quake</i> and <i>Doom</i> to <i>Duke Nukem</i>. Back then there were also sites like Free hry, which had all kinds of Flash games, and also the <i>Happy Tree Friends</i> videos. I used to play those during class, and when the teacher walked by, he said: you're watching such crap. And he sat down next to me. Since then we watched it together like that. Later he put his own computer next to mine, on which he played all kinds of games. So I was watching <i>Happy Tree Friends</i> while he was playing some games at the same time. And the girls learned to touch-type, because he was of the opinion that girls are meant for offices. A bit of a sexist. He said they'd become secretaries, they need it, and that the boys should learn to program and do whatever they want. So I learned programming there and watched <i>Happy Tree Friends</i>. To this day I can't touch-type. But I can program.</A>

                <Q speaker={RS}>But besides playing <i>Bulánci</i>, you also founded fan websites and created maps.</Q>

                <A speaker={JCH}>Back then map-making was booming, and I thought it would be nice if people could share them. Until then there was no place where you could download maps. Everything was scattered across forums, uploads, on Uloz.to, on Megaupload and all over the place. If someone didn't get a direct link, they might not even know it existed. Alongside that there were various chat rooms where people shared them, but that was mostly time-limited. If you didn't manage to download it, you were out of luck. It occurred to me that I'd make a website where people could upload them. That's why I made the site Bulánci e-zin back then. But I wasn't the only one who came up with something similar, so more of those sites started appearing. But I was among the first. Creating the site wasn't that difficult, but making it so that files could be uploaded and then downloaded was harder. At first I solved it by having users send the files to me and I uploaded them. In the meantime I was working on enabling direct uploads. Today anybody would say that's insane, because we have viruses, malware and so on, but at that time I didn't think about such things at all. I didn't know much about it. Later, when my brother studied at a university of IT, I learned more. He was learning about viruses, malware, writing thesis papers, and I was the one who had to proofread his theses, because he was dysgraphic. As I read through them, I learned a lot and thought to myself that the site I made back then was insane. But it worked, people uploaded and downloaded there. The number of downloads was quite big. But it wasn't important to me how many people passed through the site. I had no ads on it that would earn money. What mattered to me was that people could share their work. Of course I had my own maps there too. Some of the creators were really good at making maps, so I contacted them to ask if I could upload their work there. There wasn't anybody who refused, which made me incredibly happy. I uploaded all those maps there so other people could play them too. I played all of those maps. Later, when some people started uploading maps to the site themselves, I often didn't even play them. It took a while before I even found out that someone had uploaded something.</A>

                <Q speaker={RS}>So you went through the websites of fans who made maps, then you contacted them, they sent you the maps and you published them?</Q>

                <A speaker={JCH}>Yes. I downloaded them, played them and put them there. Some creators then started uploading there themselves as well.</A>

                <Q speaker={RS}>The site you're describing was actually a clan website, where at one point multiple people were listed. How exactly did it work?</Q>

                <A speaker={JCH}>There weren't many of us, but later we played mainly online and called ourselves a clan. That's why I called it a clan site. Originally it wasn't a clan site, but later I changed it and we put there things we did as a clan. Shortly after that, though, it unfortunately fell apart, so it functioned as a clan site for maybe a year or two. After that it really had the primary function of sharing maps and mainly <i>Bulánci</i> as such. And guides on how to get them running online, because that was what mattered to us most. Back then problems began to appear with many people not being able to play online. There was a guide on how to play online, but when it happened that it still didn't work for someone, I dealt with those people directly. Someone wrote to me: hey, we want to play and it doesn't work for us. So we connected via various programs, like TeamViewer and so on. And I got it working for them. Mostly it was a problem with the firewall and the like.</A>

                <Q speaker={RS}>Did you make the site yourself? In HTML, maybe in PHP?</Q>

                <A speaker={JCH}>In HTML. I started making websites at about eight or nine years old, when I was learning HTML. Later I started incorporating PHP into it as well. The site was written from what I'd read in books. I had a pile of books about HTML and I looked up the code for how to do things. That's how I gradually learned. What I didn't find in the books, I later found on the web, or I consulted my teacher. Unfortunately he didn't know much about programming, but he gave me a bit of advice. Later I made a web game like that too. That one was written entirely in PHP.</A>

                <Q speaker={RS}>So those websites served as a kind of your laboratory for various experiments.</Q>

                <A speaker={JCH}>Yes. I experimented and above all learned from it. Besides, when a hosting provider updates to a new PHP version and removes the old one, it's a problem. Many times I had to learn how the new PHP works just so I could fix things. I had the same thing with that web game. I'd write something, and right away a PHP update came out and the provider just sent a message: hey, we're ending support for this, we're switching straight to that. I then spent entire days rewriting the game's code so that it worked. Mostly it was just small things, but the problem was how many places they were in.</A>

                <Q speaker={RS}>Back to <i>Bulánci</i>. You played via Hamachi, right?</Q>

                <A speaker={JCH}>Yes, Hamachi. Of course it also worked through other programs, on the same principle. Even today you can play <i>Bulánci</i> this way.</A>

                <Q speaker={RS}>Were the people in the clan acquaintances from the internet or classmates?</Q>

                <A speaker={JCH}>Except for one or two, it was all mainly through the internet. One was a friend since childhood and one was a classmate. The three of us played together on that one keyboard and gradually we said we needed a fourth. We started looking and writing with various people. Not only with those who sent in maps, but also with others who contacted us. Gradually we put together a group of about twelve people. We played mostly via that Hamachi, connecting through ICQ.</A>

                <Q speaker={RS}>And did you meet those members mostly through maps?</Q>

                <A speaker={JCH}>Yes. But there were plenty of places where you could meet those people. In Brno there were also <i>Bulánci</i> tournaments. I met one of them there too, but only after I already knew him. I didn't know most of them personally, never saw them. But the one I met in Brno, I'm still friends with to this day. We still play games all the time. I also created my own online games, and one later member played them. We got talking through those games of mine and it turned out he also plays <i>Bulánci</i>, and he joined the clan. Some I also met in other games. I like <i>Stargate</i>, for example, so I used to play various sci-fi games and the like. So I met those people in various places and that they play <i>Bulánci</i> I often found out more or less by accident. Not everyone is even listed in the clan, because after a while I stopped taking care of the site. Later it stopped working altogether. The providers kept shoving some ads in there and so on, and that stopped being fun for me. At first I tried to get around it somehow, but it didn't always work. I even got warnings from them a couple of times that I was blocking them.</A>

                <Q speaker={RS}>How did you arrange within the clan when you'd play?</Q>

                <A speaker={JCH}>I had it written down when people could and couldn't play. Most of us were schoolkids, so we had similar possibilities. I think we set it at around two o'clock. From about two to four we played <i>Bulánci</i>. Of course not every day. We always agreed in advance that we'd play on Tuesday, Thursday, Friday. Different people could on different days. Usually we got together four to six of us. Today I don't even have contact with them anymore, except for those three. We stayed connected via ICQ and later TeamSpeak.</A>

                <Q speaker={RS}>You said it fell apart relatively quickly, could you describe the reasons?</Q>

                <A speaker={JCH}>The reason was school. We scattered to different high schools and there was no time anymore. On top of that, technology moved on, ICQ stopped being used and we lost contacts. We also had two women there, and with them I later made my own <i>World of Warcraft</i> server. We tried to make something similar to what Blizzard later blocked. To create our own <i>World of Warcraft</i>. The problem was that I did most of the work. Mainly regarding the game itself, because I was also rewriting source code, and I didn't enjoy that much.</A>

                <Q speaker={RS}>You said you traveled to some events in Brno. Do you remember them?</Q>

                <A speaker={JCH}>I was at two. But honestly, I'm a rather unsociable person, so I was hidden somewhere in a corner, watching and cheering. I got into it by chance. Someone told me it existed and asked if I'd come take a look. Once someone was there directly from <i>Bulánci</i>. That's when I finally went. I wandered around the city for an hour before I found it. In the end the crowd gave it away a bit. There were suspiciously many people. I originally thought it was a café, so I walked past it twice. Then I called and asked where it was and found out I'd been walking around it. I went inside and it actually was a café, just with computers set up inside. And the second time I already knew where I was going, because it was at the same place. By then there weren't as many people. By then I also played more. I played with almost everyone who was there.</A>
            {/snippet}
        </Loc>
    {/snippet}
</InterviewPage>