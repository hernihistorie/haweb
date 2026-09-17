<script lang="ts">
    /* https://docs.google.com/document/d/1gtzvq2Fpla1VqFLjk-sq0cgIeaiB_NNzKLWI2LFjc7g/edit */
	import InterviewPage from "$src/lib/components/interviews/InterviewPage.svelte";
	import Answer from "$lib/components/interviews/Answer.svelte"
	import Question from "$lib/components/interviews/Question.svelte";
    import Loc from "$lib/components/Loc.svelte";

    import { data, PT } from "./interview";
    import PageLang from "$src/lib/components/PageLang.svelte";
	import Box from "$src/lib/components/Box.svelte";
	import DownloadLink from "$src/lib/components/DownloadLink.svelte";
	import Figure from "$src/lib/components/Figure.svelte";

    let A = Answer;
    let Q = Question;
</script>

<PageLang cs en />

<InterviewPage {data} toc={false}>
    {#snippet content()}
            <Q>
                <Loc>
                    {#snippet cs()}
                        Jaké je Vaše rodinné zázemí? Kam jste chodil do školy? Co jste dělal jako mladý ve svém volném čase?
                    {/snippet}
                    {#snippet en()}
                        What is your family background? Where did you go to school? What did you do in your free time when you were young?
                    {/snippet}
                </Loc>
            </Q>

            <A speaker={PT}>
                <Loc>
                    {#snippet cs()}
                        Pocházím ze sídliště na severním okraji Prahy. Na sídlišti bylo hodně vrstevníků a též různé zájmové kroužky. Na jeden jsem s kamarády chodil, věnoval se elektronice, ale žádné zázraky se tam nekonaly – dokázali jsme rozsvítit diodu a spájet plošné spoje. Jenomže pak přišla změna. Jeden z vedoucích dokázal do klubovny dostat vyřazený počítač Celatron. Jeho paměťové médium byl děrný pásek a komunikační rozhraní byla numerická klávesnice jako vstup a připojený elektrický psací stroj jako výstup. Byl k němu ještě druhý psací stroj a ten uměl děrovat pásky. Byla to pro nás spíše kuriozita. Zkoušeli jsme na něm něco děrovat a pak to spustit, ale nic kloudného to neudělalo. Jediné, co si pamatuji funkčního, byla hra, kde dva hráči postupně odečítají čísla od 1 do 10 a kdo odečítá poslední, vyhrál. Právě zde jsem se i poprvé setkal s šestnáctkovou soustavou, protože na klávesnici byla čísla 0–9 a pak pseudočísla 0–5.
                    {/snippet}
                    {#snippet en()}
                        I come from a housing estate on the northern edge of Prague. There were a lot of kids my age on the estate as well as various hobby clubs. I went to one of them with my friends, it was about electronics, but no miracles were going on there – we managed to light up a diode and solder a circuit board. But then came a change. One of the clubroom leaders managed to bring a decommissioned Celatron computer. Its storage medium was punched tape, and its communication interface was a numeric keypad for input and a connected electric typewriter for output. It also came with a second typewriter that could punch tapes. For us it was more a curiosity than anything. We tried punching something and then running it, but it never did anything sensible. The only working thing I remember was a game where two players take turns subtracting numbers from 1 to 10, and whoever subtracts last wins. It was also there that I first encountered the hexadecimal system, because the keypad had the digits 0–9 and then the pseudo-digits 0–5.
                    {/snippet}
                </Loc>
            </A>

            <Q>
                <Loc>
                    {#snippet cs()}
                        Jak jste se dostal k prvnímu počítači? Co to bylo za počítač?
                    {/snippet}
                    {#snippet en()}
                        How did you get to your first computer? What computer was it?
                    {/snippet}
                </Loc>
            </Q>

            <A speaker={PT}>
                <Loc>
                    {#snippet cs()}
                        Doba šla ale překotně dál. Postoupil jsem na Gymnázium ve Vysočanech a tady nás spolužák přivedl do zájmového kroužku prvních osobních počítačů. Bylo to v bývalé usedlosti Flajšnerka. Byly tam počítače PMD a hlavně lidé, kteří mne mohli něco naučit. Zde jsem tedy pochytil základy programování a samozřejmě jsem se zde dostal ke hrám. Většina tam chodila hrát hry, já se ale od začátku snažil něco tvořit. Učil jsem se jak Basic tak Assembler. Nicméně i já si něco zahrál: kolektivně jsme hráli třeba Manic Minera. Tento kroužek nebyl úplně nějakým řízeným kroužkem. Prostě se tam mohlo přijít, sednout k počítači a hrát si. Naučil se ten, kdo o to vyloženě stál.
                    {/snippet}
                    {#snippet en()}
                        But time moved on rapidly. I went on to the gymnasium [high school equivalent] in Vysočany, and there a classmate brought us to a hobby club for the first personal computers. It was in the former Flajšnerka farmstead. They had PMD computers there and, more importantly, people who could teach me something. So that's where I picked up the basics of programming and, of course, where I got to games. Most people went there to play games, but from the start I was trying to create something. I learned both Basic and assembly. Still, I played a bit too: we all played Manic Miner, for instance. The club wasn't really a proper supervised club. You could just come, sit down at a computer and play around. Those who really wanted to learn did.
                    {/snippet}
                </Loc>

                <p>
                    <Loc>
                        {#snippet cs()}
                            A pak nastal další zlom. Mezi lidmi se začaly objevovat první počítače. Tehdy byly tři: Atari, Commodore a ZX Spectrum. Nejpopulárnější byl poslední z nich a ten jsem nakonec koupil od svého vrstevníka na sídlišti. Vrstevník byl zřejmě z rodiny, kde se obchodovalo s počítači na černém trhu, nebyla to levná záležitost a navíc v poslední chvíli začal domluvenou cenu šroubovat výš – předpokládám, že mu to doporučili rodiče. Nicméně byl férovej a přišel mi to nainstalovat, ukázat a nakopíroval mi hned celou kazetu her a programů. Z toho počítače rodiče nebyli vůbec nadšeni. Dá se říci, že mi to významně změnilo trávení volného času. Od té doby jsem seděl doma a věnoval se počítači.
                        {/snippet}
                        {#snippet en()}
                            And then came another turning point. The first computers started appearing among people. Back then there were three: Atari, Commodore and the ZX Spectrum. The last one was the most popular, and that's the one I eventually bought from a kid my age on the estate. He was apparently from a family that traded computers on the black market; it wasn't cheap, and on top of that he started pushing the agreed price up at the last minute – I assume his parents advised him to. Still, he was fair about it, came over to set it up and show me how it worked, and copied me a whole cassette of games and programs right away. My parents weren't at all thrilled about the computer. You could say it significantly changed how I spent my free time. From then on I sat at home and paid spent my time at the computer.
                        {/snippet}
                    </Loc>
                </p>
                <Loc>
                    {#snippet cs()}
                        Vybavuje se mi, jak mne ZX Spectrum fascinovalo svou kompaktností – velikost sešitu A5, gumové klávesy, do kterých se přes tři různé Shifty vešly všechny příkazy. Ale byly s tím spojené i některé problémy. První byla televize. Samozřejmě jsem nemohl používat rodinnou barevnou televizi v obýváku, tak mi táta přinesl vyřazenou černobílou televizi od známých. Druhá komplikace byl magnetofon, který jsme doma neměli. Musel jsem si půjčit kazeťák od spolužáka a pak jsem si teprve koupil v tuzexu pořádný svůj. Třetím úskalím byla samotná práce s nahrávkami. Hodně záleželo na kvalitě záznamu. Pokud člověk sám něco vyráběl, musel stále zálohovat, hledat na kazetě místo a všechno si zapisovat.
                    {/snippet}
                    {#snippet en()}
                        I remember how the ZX Spectrum fascinated me with its compactness – the size of an A5 notebook, with rubber keys that fit all the commands through three different Shifts. But there were some problems that came with it. The first was the television. Of course I couldn't use the family colour TV in the living room, so my dad brought me a discarded black-and-white TV from some acquaintances. The second complication was the tape recorder, which we didn't have at home. I had to borrow a cassette player from a classmate, and only later did I buy a proper one of my own at Tuzex. The third pitfall was working with the recordings themselves. A lot depended on the quality of the recording. If you were creating something yourself, you had to back up constantly, find space on the tape, and write everything down.
                    {/snippet}
                </Loc>
                <p>
                    <Loc>
                        {#snippet cs()}
                            Pak přišlo další rozšíření. Jednojehličková tiskárna. Pořídil jsem si ji a znamenalo to najednou možnost tisku: textů, obrázků. Začal jsem tvořit fonty do této tiskárny, ale hlavně počítač začal mít i praktické využití – mohl jsem rodičům něco napsat nebo vytiskout.
                        {/snippet}
                        {#snippet en()}
                            Then came another expansion. A single-pin printer. I got one, and suddenly it meant I was able to print: texts, pictures. I started creating fonts for this printer, but most importantly the computer started to have a practical use – I could write or print something for my parents.
                        {/snippet}
                    </Loc>
                </p>
                <p>
                    <Loc>
                        {#snippet cs()}
                            Na střední škole jsme také měli volitelný předmět programování. Tehdy to bylo ještě v plenkách, takže to bylo hodně k smíchu. Škola dostala počítače IQ 151. Spolužák naštěstí domluvil, že místo ve školní učebně, budeme právě v prostorách kroužku na Flajšnerce. Hodiny tím byly snesitelnější a pamatuji, jak jsme pomáhali pochopit principy spolužačkám, které při volbě volitelného předmětu přecenily své síly. Je pravda, že jsme se naučili i první algoritmy a nějakou logiku programovacích úloh, což je spíše na efekt a logické myšlení, než na prohloubení znalostí samotného programování.
                        {/snippet}
                        {#snippet en()}
                            At secondary school we also had programming as an elective subject. It was still in its infancy back then, so it was quite laughable. The school got IQ 151 computers. Fortunately, a classmate arranged for us to be in the club's premises at Flajšnerka instead of the school classroom. It made the classes more bearable, and I remember how we were helping our female classmates grasp the principles after they had overestimated their abilities when choosing the elective. It's true that we also learned our first algorithms and some logic of programming tasks, which is more about overall effect and logical thinking than about deepening one's knowledge of programming itself.
                        {/snippet}
                    </Loc>
                </p>
            </A>

            <Q>
                <Loc>
                    {#snippet cs()}
                        Hrál jste na svém prvním počítači videohry? Jaké? Jak jste se k nim dostával?
                    {/snippet}
                    {#snippet en()}
                        Did you play video games on your first computer? Which ones? How did you get hold of them?
                    {/snippet}
                </Loc>
            </Q>

            <A speaker={PT}>
                <Loc>
                    {#snippet cs()}
                        Na prvním místě byl <em>Manic Miner</em>, pak si pamatuji <em>Ramba</em>, <em>Fist</em>, konverzační hry Františka Fuky, nebo <em>Diktátora</em>. K těmto hrám jsem se dostával zejména díky kamarádům a spolužákům. Ale hry pro mne byly jen okrajové a spíše jsem používal nějaké tvůrčí programy. Prvně to bylo <em>ArtStudio</em>, program na kreslení obrázků. Další byl <em>Wham! The Music Box</em>, program, který tvořil hudbu, uměl dva paralelní zvukové hlasy rychlým střídáním dvou zvukových linek a výtvor vyexportovat jako spustitelný kód. Pak jsem sehnal sadu drobných pomůcek <em>Super Code</em>, mezi kterými byla možnost nahrát obrázek a jako spustitelný kód jej vysázet na obrazovku po kostičkách.
                    {/snippet}
                    {#snippet en()}
                        First and foremost there was <em>Manic Miner</em>, then I remember <em>Rambo</em>, <em>Fist</em>, the text adventures by František Fuka, and <em>Diktátor</em>. I got hold of these games mainly thanks to friends and classmates. But games were only marginal for me, I mostly used creative programs. The first was <em>ArtStudio</em>, a program for drawing pictures. The next was <em>Wham! The Music Box</em>, a program for making music, which could do two parallel voices by rapidly alternating two sound channels, and export the result as executable code. Then I got hold of <em>Super Code</em>, a set of small utilities, among which was the option to load a picture and lay it out on the screen block by block as executable code.
                    {/snippet}
                </Loc>
            </A>

            <Q>
                <Loc>
                    {#snippet cs()}
                        Dělal jste na svém počítači nějaké programy (ať už videohry nebo jiné)? Pokud ano, tak jaké? Co bylo inspirací pro tyto programy?
                    {/snippet}
                    {#snippet en()}
                        Did you make any programs on your computer (video games or otherwise)? If so, which ones? What was the inspiration for these programs?
                    {/snippet}
                </Loc>
            </Q>

            <A speaker={PT}>
                <Loc>
                    {#snippet cs()}
                        Ano, byla to chuť také vyrobit něco, co není, nebo co jsem viděl na jiných platformách. Princip všech programů je stejný:
                        <ol>
                            <li>
                                Krátký zaváděcí program v Basicu, který rychle na obrazovku vypíše název programu a nahraje zbytek.
                            </li>
                            <li>
                                Obrázek nakreslený v profesionálním programu <em>ArtStudio</em> a pomocí tehdy dostupného programu přetransformování do spustitelného kódu, který obrázek vykreslí postupně čtverec po čtverci.
                            </li>
                            <li>
                                Úvodní hudba naťukaná v profesionálním programu <em>Wham! The Music Box</em>, která uměla dva paralelní zvukové hlasy rychlým střídáním dvou zvukových linek a exportovaná jako spustitelný kód.
                            </li>
                            <li>
                                Potřebné kódy, typicky znaky uživatelské grafiky (8 x 8) pro prvky, nebo celá abeceda, či datové podklady pro schéma místností, popřípadě celé úseky kódů napsané v assembleru.
                            </li>
                            <li>
                                Hlavní obslužný program, opět v samospustitelném Basicu, který daný program obsluhuje.
                            </li>
                        </ol>
                    {/snippet}
                    {#snippet en()}
                        Yes, it was the desire to make something that didn't exist, or that I had seen on other platforms. The principle of all the programs is the same:
                        <ol>
                            <li>
                                A short loader program in Basic that quickly displays the program name on the screen and loads the rest.
                            </li>
                            <li>
                                An image drawn in the professional program <em>ArtStudio</em> and converted, using a program available at the time, into executable code that renders the image gradually, square by square.
                            </li>
                            <li>
                                Intro music composed in the professional program <em>Wham! The Music Box</em>, which was capable of two parallel sound voices by rapidly alternating between two sound lines, and exported as executable code.
                            </li>
                            <li>
                                The necessary code, typically user-defined graphics characters (8 x 8) for elements, or an entire alphabet, or data for room layouts, or entire sections of code written in assembly.
                            </li>
                            <li>
                                The main service program, again in self-executing Basic, which operates the given program.
                            </li>
                        </ol>
                    {/snippet}
                </Loc>
                <p>
                    <Loc>
                        {#snippet cs()}
                            Tehdy také frčela různá loga, tak jsme je používali na úvodním obrázku. Moje jsou ty tři vrstvy se šipkou – nemohl jsem se asi rozhodnout, tak je pokaždé otočená jinak. Spolupracoval jsem s kamarády, měli také každý vlastní logo:
                        {/snippet}
                        {#snippet en()}
                            Logos of all kinds were also in fashion back then, so we used them on the title picture. Mine is the three layers with an arrow – I probably couldn't make up my mind, so it's turned a different way each time. I collaborated with friends, and each of them had their own logo too:
                        {/snippet}
                    </Loc>
                </p>
                <ul>
                    <li>
                        <Loc>
                            {#snippet cs()}
                                <strong>Roman Žák</strong>, spolužák ze základní školy a nadšenec do tehdejší techniky. Nakreslil mi téměř všechny obrázky. Nosil mi je nakreslené na čtverečkovaném papíře kde tužkou zabarvoval jednotlivé pixely a pak byl u toho, když jsem je překresloval v <em>ArtStudiu</em>. Jeho je logo se dvěma trojúhelníkovými pravítky.
                            {/snippet}
                            {#snippet en()}
                                <strong>Roman Žák</strong>, a classmate from primary school and an enthusiast for the technology of the day. He drew almost all the pictures for me. He brought them to me drawn on squared paper, where he had shaded in the individual pixels with a pencil, and then he was there when I redrew them in <em>ArtStudio</em>. His logo is the one with the two set squares.
                            {/snippet}
                        </Loc>
                    </li>
                    <li>
                        <Loc>
                            {#snippet cs()}
                                <strong>Jan Špaček</strong>, spolužák ze základní školy, tehdy hrál na klavír. Jemu jsem nosil náměty na hudbu a on mi je zapisoval do not do dvou hlasů. Pak jsem je přepisoval v <em>Music Boxu</em>. Jemu jsem přisoudil logo notičky.
                            {/snippet}
                            {#snippet en()}
                                <strong>Jan Špaček</strong>, a classmate from primary school, who played the piano at the time. I brought him ideas for music and he wrote them out for me as sheet music in two voices. Then I transcribed them in <em>Music Box</em>. I assigned him the musical note logo.
                            {/snippet}
                        </Loc>
                    </li>
                    <li>
                        <Loc>
                            {#snippet cs()}
                                <strong>Michal Zintl</strong>, spolužák ze střední školy, tehdy měl své vlastní ZX Spectrum, ale jen na hraní, nicméně spolupracoval na <em>ArtHudbě</em>. Také jsem ho nutil vytvořit si vlastní logo a tak si nakreslil „Staroměstskou věž.“
                            {/snippet}
                            {#snippet en()}
                                <strong>Michal Zintl</strong>, a classmate from secondary school, who had his own ZX Spectrum at the time, but only for gaming; nevertheless, he collaborated on <em>ArtHudba</em>. I insisted that he creates his own logo too, so he drew the "Old Town Tower".
                            {/snippet}
                        </Loc>
                    </li>
                    <li>
                        <Loc>
                            {#snippet cs()}
                                <strong>Michal Žampach</strong>, spolužák ze střední školy, tehdy programoval v asslemberu, ale nebyl moc nakloněný spolupráci, takže mi dodal jen pár technických komponent.
                            {/snippet}
                            {#snippet en()}
                                <strong>Michal Žampach</strong>, a classmate from secondary school, who was programming in assembly at the time, but wasn't very keen on collaborating, so he only supplied me with a few technical components.
                            {/snippet}
                        </Loc>
                    </li>
                </ul>

                <Box>
                    <h4>
                        <a href="https://spectrumcomputing.co.uk/entry/39001/ZX-Spectrum/Housenka">
                            <Loc cs="Housenka" en="Housenka (Caterpillar)" />
                        </a>
                    </h4>
                    <div class="row">
                        <Figure
                            src="/images/petr-tucek/housenka_1.png"
                            alt={{
                                cs: "Titulní obrazovka hry Housenka.  Text: (c) 1987/90",
                                en: "Title screen of the Housenka game.  Text: (c) 1987/90"
                            }}
                        />
                        <Figure
                            src="/images/petr-tucek/housenka_2.png"
                            alt={{
                                cs: "Herní obrazovka hry Housenka.  Text: Zóna-1 Obtížnost-1",
                                en: "Gameplay screen of the Housenka game.  Text: Zone-1 Difficulty-1"
                            }}
                        />
                    </div>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                S tématem hry přišel Roman Žák. Byl to první program, co jsem tvořil. Hru jsem dlouho upravoval a tuším, že námět vychází z Pac-Mana. Romanovi se prostě líbilo něco, co žere. Housenka se pohybuje bludištěm a další levely jsou jednak o složitosti bludiště a jednak o rychlosti pohybu. Roman vymyslel, že to bude červ, který se sbíráním zelí postupně prodlužuje. Podobně jako v hadovi se zároveň musí vyhýbat překážkám, které jsou zde ve formě lebek.
                            {/snippet}
                            {#snippet en()}
                                Roman Žák came up with the theme of the game. It was the first program I created. I kept tweaking the game for a long time, and I believe the idea comes from Pac-Man. Roman simply liked something that eats. The caterpillar moves through a maze, and the further levels are about both complexity of the maze and the speed of movement. Roman came up with the idea that it would be a worm that gradually gets longer by collecting cabbages. As in Snake, it also has to avoid obstacles, which here take the form of skulls.
                            {/snippet}
                        </Loc>
                    </p>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                Psané je to v Basicu. Na začátku jsou zelí i lebky rozmístěny náhodně. Zelí jsou dvou barev. Fialové je výživnější: roste se po něm víc. Problém byl, že vyžráním zelí je třeba další zelí doplňovat nicméně jak se bludiště plní, tak funkce náhodných čísel zpomaluje. Zvolil jsem proto jinou metodu: Místo náhodného generování jsem zelí vytvářel z lebek, čímž jsem vyřešil i problém, kdyby se lebky někde nahromadily a ucpaly průchod. No a nové lebky vznikají za housenkou. Za housenkou vznikají i hromádky trusu – to je takový žert navíc.
                            {/snippet}
                            {#snippet en()}
                                It's written in Basic. At the start, both the cabbages and the skulls are placed randomly. The cabbages come in two colours. The purple one is more nutritious: you grow more from it. The problem was that once a cabbage is eaten, new cabbages need to be added, but as the maze fills up, the random number function slows down. So I chose a different method: instead of generating them randomly, I created cabbages out of the skulls, which also solved the problem of skulls piling up somewhere and blocking a passage. And new skulls appear behind the caterpillar. Little piles of droppings appear behind the caterpillar too – that's an extra joke.
                            {/snippet}
                        </Loc>
                    </p>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                Zde výjimečně hudba nebyla můj námět, ale myslím, že sám Jan Špaček mi přinesl napsanou rokenrolovou skladbu. Hudba, co pípá během hry, je tam kvůli zpomalení. Myslím, že mi to v notách přinesl Michal Zintl, a hloupě jsem myslel, jak to je sofistikované, ale jsou to jen rozepsané akordy do jednotlivých tónů nahoru a zase zpět dolů.
                            {/snippet}
                            {#snippet en()}
                                Here, exceptionally, the music wasn't my idea; I think Jan Špaček himself brought me a rock'n'roll piece he had written. The music that beeps during the game is there to slow things down. I think Michal Zintl brought it to me as sheet music, and I naively thought it was so sophisticated, but it's just chords broken down into individual notes going up and then back down again.
                            {/snippet}
                        </Loc>
                    </p>

                    <DownloadLink
                        title={{cs: "hru Housenka", en: "the game Housenka"}}
                        url="https://cs.speccy.cz/games/Housenka.zip"
                    />
                </Box>

                <Box>
                    <h4>
                        <a href="https://spectrumcomputing.co.uk/entry/45416/ZX-Spectrum/N%C3%A1dra%C5%BE%C3%A1k">
                            <Loc cs="Nádražák" en="Nádražák (The Railwayman)" />
                        </a>
                    </h4>
                    <div class="row">
                        <Figure
                            src="/images/petr-tucek/nadrazak_1.png"
                            alt={{
                                cs: "Titulní obrazovka hry Nádražák.  Text: (c) 1988",
                                en: "Title screen of the Nádražák game.  Text: (c) 1988"
                            }}
                        />
                        <Figure
                            src="/images/petr-tucek/nadrazak_2.png"
                            alt={{
                                cs: "Herní obrazovka hry Nádražák.  Text: Vrátnice",
                                en: "Gameplay screen of the Nádražák game.  Text: Vrátnice (Porter's lodge)"
                            }}
                        />
                    </div>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                V druhém ročníku střední školy jsme byli na praxi. Nebylo tam moc co dělat, takže jsme chodili za spolužáky, kteří měli počítač Commodore s hrami. A tam jsem viděl Sokoban. Obkreslil jsem si všechny levely a tak vzniknul námět hry <em>Nádražák</em>. Nespokojil jsem se s pouhou kopií. Tou dobou jsem jednak měl v oblibě bludiště, takže vše je zasazeno do velice komplikovaného bludiště propojujícího jednotlivé místnosti. A jednak jsem měl v oblibě písničky Šípa a Uhlíře. Téma a název je tedy odvozen od písničky „Šel nádražák na mlíčí“. Proto jsou jednotlivé místnosti z nádražní budovy a okolí. Úvodní písnička je právě tato. Hra je zase naprogramovaná v jazyce Basic.
                            {/snippet}
                            {#snippet en()}
                                In the second year of secondary school we were on an internship. There wasn't much to do there, so we went to see classmates who had a Commodore computer with games. And that's where I saw Sokoban. I copied down all the levels, and that's how the idea for the game <em>Nádražák</em> ("The Railwayman") came about. I wasn't satisfied with a mere copy. At the time I was fond of mazes, so everything is set in a very complicated maze connecting the individual rooms. And I was also fond of the songs of Šíp and Uhlíř. So the theme and the name are derived from the song "Šel nádražák na mlíčí" ("A Railwayman Went Out for Fish Milt"). That's why the individual rooms are from a railway station building and its surroundings. The intro song is that very one. The game is again programmed in Basic.
                            {/snippet}
                        </Loc>
                    </p>
                    <DownloadLink
                        title={{cs: "hru Nádražák", en: "the game Nádražák"}}
                        url="https://cs.speccy.cz/games/Nadrazak.zip"
                    />
                </Box>

                <Box>
                    <h4><a href="https://spectrumcomputing.co.uk/entry/45417/ZX-Spectrum/Business">Business</a></h4>
                    <div class="row">
                        <Figure src="/images/petr-tucek/business_1.png" />
                        <Figure src="/images/petr-tucek/business_2.png" />
                    </div>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                Hra je znovu programovaná v Basicu a je inspirovaná hrou <em>Monopoly</em> a její českou variantou Dostihy a sázky. Často jsme ji doma hráli, takže jsem se jí inspiroval při tvorbě další videohry. Další námět bylo tedy toto. Je to prakticky nehratelné, protože převod do počítačové hry není dobrý nápad. Úvodní písnička je „Zelená vlna Hvězdy“, kterou nazpíval Luděk Sobota.
                            {/snippet}
                            {#snippet en()}
                                The game is again programmed in Basic and is inspired by <em>Monopoly</em> and its Czech variant, Dostihy a sázky ("Horse Racing and Betting"). We often played it at home, so I drew on it when making my next video game. So that was the next idea. It's practically unplayable, because converting it into a computer game isn't a good idea. The intro song is "Zelená vlna Hvězdy" ("Radio Hvězda's Green Wave"), sung by Luděk Sobota.
                            {/snippet}
                        </Loc>
                    </p>
                    <DownloadLink
                        title={{cs: "hru Business", en: "the game Business"}}
                        url="https://cs.speccy.cz/games/Business.zip"
                    />
                </Box>

                <Box>
                    <h4>
                        <a href="https://spectrumcomputing.co.uk/entry/45415/ZX-Spectrum/%C5%A0kol%C3%A1k">
                            <Loc cs="Školák neboli Školní akce" en="Školák / Školní akce (School kid / School action)" />
                        </a>
                    </h4>
                    <div class="row">
                        <Figure src="/images/petr-tucek/skolak_1.png" />
                        <Figure src="/images/petr-tucek/skolak_2.png" />
                    </div>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                To byl další rok praxe, další setkání s hrou na Commodore. Tentokrát spolužák hrál takovou průzkumnou hru, kdy se chodí po bludišti, něco se hledá, najde, přinese jinam a použije. Námětem je vlastní škola, tehdejší Gymnázium Vysočany. Jednotlivé místnosti jsou nakreslené a uložené v datech. Zobrazují se 4 x zvětšené. Zobrazení mi naprogramoval Martin Žampach. Ke každé místnosti se zobrazují 4 různé texty nápovědy (místnost je rozdělená na 4 sektory). Dva jsou konstantní a zobrazují se ve všech místnostech, dva jsou proměnlivé, pro každou místnost jiné a ty napovídají, co se má stát. Úvodní písnička je „Meliorační“, Šíp, Uhlíř.
                            {/snippet}
                            {#snippet en()}
                                That was another year of internship, another encounter with a game on the Commodore. This time a classmate was playing an exploration game of sorts, where you walk around a maze, look for something, find it, carry it somewhere else and use it. The setting is our own school, the then Gymnázium Vysočany. The individual rooms are drawn and stored as data. They're displayed magnified 4 times. Martin Žampach programmed the display for me. For each room, 4 different hint texts are shown (the room is divided into 4 sectors). Two are constant and appear in all rooms; two are variable, different for each room, and they hint at what's supposed to happen. The intro song is "Meliorační" ("Land Reclamation") by Šíp and Uhlíř.
                            {/snippet}
                        </Loc>
                    </p>
                    <DownloadLink
                        title={{cs: "hru Školák", en: "the game Školák"}}
                        url="https://cs.speccy.cz/games/Skolak.zip"
                    />
                </Box>

                <Box>
                    <h4>
                        <a href="https://spectrumcomputing.co.uk/entry/45485/ZX-Spectrum/Art_Hudba">
                            <Loc cs="ArtHudba" en="ArtHudba (ArtMusic)" />
                        </a>
                    </h4>
                    <div class="row">
                        <Figure src="/images/petr-tucek/arthudba_1.png" />
                        <Figure src="/images/petr-tucek/arthudba_2.png" />
                    </div>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                Název je parafrází na ArtStudio. Námět přinesl spolužák ze střední školy Michal Zintl a také se podílel na realizaci. Líbil se nám profesionální program <em>Wham! The Music Box</em>, který měl jeden nedostatek: hudba se dala spustit, ale nedala se používat při běhu programu. Chtěli jsme tak připravit podobně uživatelsky přívětivý program pro práci s basicovým příkazem BEEP, který je normálně nesrozumitelný. Společně jsme ladili tvář programu, obsluhu kláves a výstupy jsem pak už dělal sám. Úvodní obrázek jsme kreslili společně – <em>ArtStudio</em> umožňovalo merge dvou obrázků do jednoho, tak jsme spojovali své části, co jsme kreslili.
                            {/snippet}
                            {#snippet en()}
                                The name is a play on ArtStudio. The idea came from my secondary school classmate Michal Zintl, who also took part in making it. We liked the professional program <em>Wham! The Music Box</em>, which had one shortcoming: the music could be played, but it couldn't be used while a program was running. So we wanted to make a similarly user-friendly program for working with the Basic command BEEP, which is normally unintelligible. We fine-tuned the look of the program together; the keyboard handling and the output I then did on my own. We drew the title picture together – <em>ArtStudio</em> allowed merging two pictures into one, so we combined the parts each of us had drawn.
                            {/snippet}
                        </Loc>
                    </p>
                    <DownloadLink
                        title={{cs: "program ArtHudba", en: "the program ArtHudba"}}
                        url="https://cs.speccy.cz/programs/ArtHudba.zip"
                    />
                </Box>

                <Box>
                    <h4>
                        <a href="https://spectrumcomputing.co.uk/entry/45486/ZX-Spectrum/Profesion%C3%A1ln%C3%AD_editor">
                            <Loc cs="Predit (Profesionální editor)" en="Predit (Professional editor)" />
                        </a>
                    </h4>
                    <div class="row">
                        <Figure src="/images/petr-tucek/predit_1.png" />
                        <Figure src="/images/petr-tucek/predit_2.png" />
                    </div>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                Ve všech výše zmíněných programech jsem potřeboval nakreslit postavičky, předměty ve formátu znaku 8x8. To se na ZX Spectru ukládá do tzv. grafických znaků uložených na konci paměti. Nejprve jsem si na to napsal jednoduchý editor, kterému jsem říkal Grazny. Poté přišly na trh tiskárny – jednojehličkové BT100. A pro ně… to už byla další rozšíření, bylo třeba definovat celé abecedy. A tak jsem původní Grazny rozšířil a umožnil nakreslit celou abecedu a dokonce volit velikost rastru. Myslím, že obslužný program je v zkompilovaném Basicu do asslembleru.
                            {/snippet}
                            {#snippet en()}
                                In all the programs mentioned above, I needed to draw characters and objects in the 8x8 character format. On the ZX Spectrum, these are stored in so-called graphics characters kept at the end of memory. At first I wrote a simple editor for that, which I called Grazny. Then printers came on the market – the single-pin BT100. And for those… that was another expansion, whole alphabets had to be defined. So I extended the original Grazny to allow drawing a whole alphabet and even choosing the grid size. I think the main program is Basic compiled into assembler.
                            {/snippet}
                        </Loc>
                    </p>
                    <p>
                        <Loc>
                            {#snippet cs()}
                                Velikost paměti ZX Spectra byla přeci jen omezená, takže od začátku byly snahy programy zmenšit a zrychlit. Učil jsem se Assembler a zkoušel programovat v něm. To ovšem pro mne nebyla správná cesta, nakonec jsem hledal jiné způsoby práce. Jeden z nich byly kompilátory Basicu do Assembleru a druhá byla pomoc spolužáka Martina Žampacha, který mi vyrobil několik použitelných procedur.
                            {/snippet}
                            {#snippet en()}
                                The ZX Spectrum's memory was limited after all, so from the beginning there were efforts to make the programs smaller and faster. I was learning assembly and tried programming in it. But that wasn't the right path for me, and in the end I looked for other ways of working. One of them was Basic-to-assembler compilers, and the other was the help of my classmate Martin Žampach, who me several usable routines for me.
                            {/snippet}
                        </Loc>
                    </p>
                    <DownloadLink
                        title={{cs: "program Predit", en: "the program Predit"}}
                        url="https://cs.speccy.cz/programs/ProfesionalniEditor.zip"
                    />
                </Box>
            </A>

            <hr>

            <Q>
                <Loc>
                    {#snippet cs()}
                        Šířil jste tyto programy posléze nějak?
                    {/snippet}
                    {#snippet en()}
                        Did you distribute these programs in any way afterwards?
                    {/snippet}
                </Loc>
            </Q>

            <A speaker={PT}>
                <Loc>
                    {#snippet cs()}
                        Když jsem chtěl nějak rozptýlit své programy, napsal jsem inzerát do tehdy jediného média, a to inzertních novin Annonce. Poštou mi pak chodily dopisy: Ano, nahraj mi prosím své programy, a já o prázdninách jezdil po Praze a zdarma nahrával své výtvory. Tím jsem díru do světa neudělal, ale alespoň jsem tím získal nějaké uznání.
                    {/snippet}
                    {#snippet en()}
                        When I wanted to spread my programs somehow, I placed an ad in the only medium at the time, the classified ads newspaper Annonce. Letters then came in the post: Yes, please copy me your programs, and during the summer holidays I travelled around Prague copying my creations for free. I didn't exactly take the world by storm with that, but at least I gained some recognition.
                    {/snippet}
                </Loc>
            </A>

            <Q>
                <Loc>
                    {#snippet cs()}
                        Co jste dělal po této vaší etapě?
                    {/snippet}
                    {#snippet en()}
                        What did you do after this period of your life?
                    {/snippet}
                </Loc>
            </Q>

            <A speaker={PT}>
                <Loc>
                    {#snippet cs()}
                        Studoval jsem na MFF UK obor, který byl nejblíže Software: Informatiku. Nic jiného nebývalo. Softwarové směry na technikách všech škol se dostaly do osnov až později. Tehdy už byly první opravdové PC. Na vysoké škole nám založili počítačovou laboratoř, kde jsem se naučil se programovat v Pascalu. To už byl jiný level, jiné hry u kterých jsem pochopil, že zde už nemám šanci napodobovat a snažit se vyrovnat. I tak vzpomínám na to, co jsme hráli celé studium: naprosto primitivní <em>Červy</em> a pak <em>Wormsy</em>. No a od té doby do dneška pracuji v pojišťovně a jako jeden z mnoha vytvářím provozní systém, ve kterém se spravují pojistné smlouvy. Jako softwarový analytik, nikoliv jako vývojář. Od programování jsem tedy odešel.
                    {/snippet}
                    {#snippet en()}
                        I studied at the Faculty of Mathematics and Physics of Charles University, in the field closest to software: informatics. There was nothing else. Software programmes at technical universities only made it into the curricula later. By then the first real PCs were around. At university they set up a computer lab for us, where I learned to program in Pascal. That was a different level, with different games, and I realised I no longer had a chance to imitate them and try to keep up. Even so, I remember what we played throughout our studies: the utterly primitive <em>Červi</em> ("Worms") and then <em>Worms</em>. And from then until today I've been working at an insurance company, where, as one of many, I build the operational system in which insurance policies are managed. As a software analyst, not as a developer. So I left programming behind.
                    {/snippet}
                </Loc>
            </A>
    {/snippet}
</InterviewPage>
