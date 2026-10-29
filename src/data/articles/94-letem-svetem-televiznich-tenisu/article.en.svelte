<script lang="ts">
    import Figure from "$src/lib/components/Figure.svelte";
    import { img } from "./images";
</script>

<section>
    <Figure image={img["1-kolaz-uvodni.jpg"]} />

    <p>
        The Czechoslovak television games I have covered in several previous articles did not come
        about in a vacuum - they had predecessors, contemporaries, and successors abroad. For some
        time now I have been trying to find out how these oldest video games of ours actually
        compared to the rest of the world, where they came from, and what made them different.
        Before we can make such a comparison at all, however, we first need to piece together the
        global mosaic that our little piece belongs to - surprisingly, some parts of it are not very
        well known in a complete and organized form. It is a very extensive mosaic, though, and new
        pieces keep turning up. To keep the length of this article within reasonable limits, I will
        resist the temptation to create a more detailed comparison of the interesting features of
        individual games for now, and to begin with I will try to at least briefly list the
        television games of this generation, along with their most essential traits and mutual
        connections. I will mostly save the technical curiosities for the next installment (although
        even today I will sort the games largely by similarities in their technical design), where I
        will also complete the comparison I have in mind. Perhaps further pieces of that imaginary
        mosaic will turn up by then as well - the research is ongoing.
    </p>

    <p>
        Welcome aboard, then, for a sightseeing flight around the world of home video games of the
        very earliest era. We will be talking about the so-called first generation of video games
        (at least according to one of the <a
            href="https://en.wikipedia.org/wiki/History_of_video_game_consoles">definitions</a
        >), characterized by hardwired logic without a microprocessor, which, with a few exceptions,
        we will further narrow down to devices designed without dedicated game chips. The reason is
        simple: games built on, for example, the AY-3-8500 chip sprang up by the hundreds in the
        late 1970s, and they are all more or less the same. Much more interesting, more diverse, and
        also more relevant to developments in our country are the relatively rare games that
        preceded this avalanche, or were not part of it.
    </p>

    <Figure
        image={img["2-mapa-pribuznosti.png"]}
        caption="The big map: relationships between the games mentioned in the article" />

    <p>
        Among the games that could be played on these devices, tennis clearly dominates, along with
        other variants of ball games. It was no different here in Czechoslovakia. Around the world,
        however, we also find several other concepts, such as the relatively widespread shooting
        games with a light gun, simple games without a ball (based on direct contact between the
        players, or simply on reflexes), or using the game device merely as a kind of cursor on a
        game board overlaid on the screen (<em>Magnavox Odyssey</em>). A number of alternative
        concepts were also introduced by the relatively late books "How to Design and Build Your Own
        Custom TV Games" and "Lyubitelskie televizionnye igry" (Amateur Television Games), published
        in the USA (1978) and the USSR (1985) - ranging from a simple game of tag all the way to
        simulated golf, pinball, or horse racing.
    </p>

    <p>
        The whole sprawling tree of video games was essentially started in the USA by Ralph Baer and
        team, who between 1966 and 1969 created several prototypes at Sanders Associates, with
        various game variants and technical approaches. The seventh of them, known by the nickname
        Brown Box, later became the licensed basis of the first commercial console, the <em
            >Magnavox Odyssey</em
        >. The team tried out many possibilities back then - they worked with vacuum tubes,
        transistors, digital circuits and operational amplifiers, experimented with a color picture
        and sound, several methods of timing and positioning game objects, control by joysticks and
        even by microphone, and analog realistic ball motion; they had a light gun, a randomness
        generator, and a number of game concepts that never made it into the commercial version: Up
        until the Brown Box, for example, they kept the so-called "Pumping game", where players
        essentially competed in how fast they could mash a button, raising the water level in, say,
        a picture of a burning house overlaid on the screen. The prototype also featured an
        interesting golf game with a physical ball attached to the top of an analog joystick lever
        (which stood on the floor), earlier there were also attempts at an electronic die, while
        other, even crazier ideas remained only on paper. Some of the rejected possibilities later
        reappeared in devices from completely different manufacturers, most likely independently.
    </p>

    <p>
        The next step was the first commercial console, the <em>Magnavox Odyssey</em> (1972), a fairly
        simple analog device built with transistors (a little over 30). It offered a relatively wide range
        of games, which, however, often depended on picture overlays placed on the screen, or were played
        more on the table in front of the TV than on the screen itself; still, even back then the function
        of the device itself was modified by plug-in cartridges. A total of 11 of them were released (plus
        one unreleased). They contained only jumper wires that configured the circuits in the device,
        and offered simple ball games, a game of tag, shooting games, and also a mere cursor function
        (with or without inertia), used in combination with printed game boards. These were always different
        variations on two paddles, a ball, a center line and the light gun, with some of the objects being
        blanked in various situations.
    </p>

    <p>
        Soon after, Atari's arcade <em>PONG</em> (1972) appeared, whose name some people use for the
        entire genre. Although partly inspired by the <em>Odyssey</em> console, it is a more
        advanced, fully digital game. <em>Pong</em> can bounce the ball in different directions from different
        parts of the paddle, speed up the ball during play, and keep score too. However, it contains 66
        integrated circuits, - something a bar owner could afford, but hardly anyone would buy for their
        home (or at least many people thought so). A whole vast arcade machine industry then developed
        in America, of course spilling over into other countries as well, but that is beyond the scope
        of this article.
    </p>

    <p>
        Nevertheless, a few home game consoles based on <em>Pong</em> technology did appear. In the
        USA, Universal Research Laboratories was essentially selling off surplus arcade boards
        (model VA-II) as early as 1974, while at the end of the same year, Logic Leisure Ltd.
        offered a
        <em>Pong</em> clone in the British magazine <em>Television</em>, as a bare board or a kit of
        parts. Somewhat later (1975-6?), a slightly simplified Pong in an orange box also appeared
        in Western Europe, named <em>Multiplay 80</em> and bearing the unusual brand Etco belgium
        (on the inside, it strongly resembles the <em>Playtime</em> arcade by Midway).
    </p>

    <Figure
        image={img["3-kolaz-komerce.jpg"]}
        caption="Some professional games and their innards (by rows): Brown Box prototype, Magnavox Odyssey, arcade Pong, Videosport MK2, Ping-O-Tronic, Videomaster Olympic, Multiplay 80, Videoshoot, Palestra 02, Bulgarian Turnir" />

    <p>
        There were, however, many more home consoles built largely on analog principles, from a
        truly minimal number of discrete components, or just basic integrated circuits (I cannot
        claim to have studied them all yet). One of the development branches here in Europe is
        connected directly to the <em>Magnavox Odyssey</em>. Besides several slightly modified
        copies (for example in Spain, the manufacturer Inter Electrónica offered one from 1974 under
        the name
        <em>Overkal</em>, in Sweden a rather mysterious <em>Kanal 34</em> is mentioned, and there
        were even more around the world), the original game was also exported to a number of
        countries to varying degrees. It was first brought to Germany in 1973 by the company ITT
        Schaub-Lorenz, though probably not in large numbers. When Ing. Günther Bless from this
        company then published almost the entire schematic in the magazine <em>Funk-Technik</em>
        (December 1973), the full significance of magazine articles became apparent (especially
        eastwards): the ensuing wave followed carried the most popular ball games of the
        <em>Odyssey</em> in several directions, including to what was then Czechoslovakia.
    </p>

    <p>
        I consider it very likely that it was this <em>Funk-Technik</em> article that inspired B.
        Lübcke from Kiel, Germany, to create a simple TV tennis game which in some parts (object
        position timing) uses circuits completely identical to the <em>Odyssey</em>. Lübcke entered
        the design into the charity competition "Aktion voor aktion", originally announced by the
        Dutch magazine
        <em>Elektuur</em>, which had freshly expanded with a German edition under the name
        <em>Elektor</em>, with a submission deadline in March 1974. The competition was perhaps a
        little too successful: an unexpected flood of 1,500 entries completely overwhelmed the
        editors, the judges, and the pages of the magazine, so the whole event dragged on from the
        planned few months to more than a year. The magazine kept printing some of the entries along
        the way (until it gave up in October 1974 for capacity reasons and published the entire
        collection as a book), with Lübcke's design appearing in issue 10/1974, and ended up winning
        the whole competition.
    </p>

    <p>
        The impact of this entry was quite considerable. The Danish company Josti Electronic reacted
        the fastest, introducing the AT 610 television game kit before the end of the year. The
        detailed schematic, printed a few months later as a construction guide in the magazine
        <em>Populær Elektronik</em>, leaves no room for doubt: it is an almost perfect copy of
        Lübcke's design. This is far from the last case of copying or cloning such games, and
        apparently nobody minded much, as the game was still being offered for sale a year later.
    </p>

    <p>
        The design was further developed in the <em>Elektuur</em>/<em>Elektor</em> magazine itself,
        which in 1975-1976 printed an improved version of the game, followed by yet another number
        of add-ons and improvements. The whole series was concluded only in October 1976 (in the
        English edition, somewhat delayed behind the original) by a module for counting and
        displaying the score. This version also got its own copies, for example in the Italian
        magazine <em>Sperimentare</em>
        (1976).
    </p>

    <p>
        At the same time, the <em>Elektor</em> articles also became the main source for Czechoslovak
        television games. I won't go into detail here, but they form the basis of the guide by
        Kryška and Zuska in <em>Amatérské radio</em> (though the two also drew on the original
        <em>Odyssey</em>), later adopted by Tesla Piešťany for the XD 8000 series consoles, and
        their inspiration can also be seen in the MAS601-603 game chips and in the prototype from
        Tesla VÚST. Besides these, there was also a guide by Vladislav Čacký, based directly on the
        very original
        <em>Funk-Technik</em> article, which Čacký also presented as an only slightly expanded
        translation in
        <em>Ročenka sdělovací techniky</em> (Telecommunications Yearbook) 1978.
    </p>

    <p>
        The guide spread to further Eastern Bloc countries as well: during 1978, the Polish magazine
        <em>Radioamator i krótkofalowiec</em> took over the design by Kryška and Zuska, the
        Bulgarian magazine <em>Radio, televiziya, elektronika</em> in turn the design by V. Čacký,
        while the Romanian
        <em>Tehnium</em> reprinted the <em>Elektor</em> version directly. The situation varied considerably
        between countries, though, for example in Hungary, they apparently skipped this generation of
        television games entirely and started straight away with imported AY-3-8500 chips (a guide from
        November 1977), with a remark that games made of discrete components are too complex. No similar
        articles can be found from the GDR or the Yugoslavia of the time (perhaps none even existed),
        while the Soviet Union was a completely different world, which I will get to below (although a
        guide based on the Odyssey did marginally appear there too).
    </p>

    <p>
        Since we have glanced eastward, let me mention one more little-known game, which preceded
        the entire Eastern Bloc in time and generally stands rather apart from the prevailing trend.
        The considerably advanced television game <em>TV Turnir</em> was created in Bulgaria, probably
        sometime around the turn of 1976-1977. It was pushed into production by the country's state-run
        Center for Accelerated Application, so by April 1977 a pilot series was already running, and from
        May the product was registered with the local authorities. The game was reportedly designed around
        an available stock of discounted TTL chips (35 of which can be counted in photographs), offered
        a number of game variants, and even an on-screen score (albeit expressed only in a simplified
        way, by a number of dots). The device was also exhibited here in Brno, and at a trade fair in
        Hanover the company Thomson reportedly showed interest in it, but due to various interventions
        by the Bulgarian authorities no agreement was reached in the end. The device also reportedly served
        as a training aid for children at an eye clinic in Varna, and was later even built, practically
        unchanged, into a television set with the type designation Sofia 23.
    </p>

    <p>
        Television sets with a built-in game used to be a popular vision for the more distant future
        (R. Baer's team considered the idea right from the start), but in reality not many such
        devices were made, and the Bulgarian Sofia 23 is most likely the only case of a built-in
        game made of discrete components (without dedicated chips). Other similar TV sets (already
        with a chip) were later made in the Soviet Union, while in many other countries they were
        mostly just talked about. That was also the case here in Czechoslovakia, where Tesla Orava
        announced its intention to produce a TV set with games, but it never happened. Even in the
        rest of the world such devices were not very common - I did read a statistic citing up to
        millions of units by 1977, but I found more specific information on only 14 types. (Germany
        and Western Europe in general lead among them, although of course there’s no guarantee that
        the information available today is complete.) A partial schematic of the German Telefunken
        Palcolor 8610 TV set (printed in the Polish magazine <em>Radio-elektronik</em>) reveals the
        considerable technical difficulties of such an integration - the internal circuits of many
        TV sets at the time were not yet safely isolated from the mains, and passing the signal of
        the control potentiometers through optocouplers is technically quite wild.
    </p>

    <Figure
        image={img["4-kolaz-televizory.jpg"]}
        caption="A collection of TV sets with a built-in game: The Sofia 23, marked in green, is the only one without a dedicated game chip. The same model can also be found under different brands." />

    <p>
        Returning to the development branch derived directly from the Odyssey, I can also loosely
        add to it the fairly successful Italian game <em>Ping-o-tronic</em>, launched in 1974 by
        Zanussi under the Sèleco brand it used for television sets. The device, with a design that
        was modern for its time, differs quite a lot from the <em>Odyssey</em>, but once again
        shares almost the same basic circuits for generating the paddles, as well as the overall
        technology built almost entirely on transistors alone. Zanussi's developers crammed over
        fifty of them into the robust device, which is probably a record. There was also at least
        one copy or variant, sold under the Inno Hit brand (unverified). It is not even out of the
        question that this game marginally inspired the Czechoslovak designs as well, since its
        sound effects are identical to one of the versions from <em>Amatérské radio</em>, and
        therefore also to the Tesla XD 8000 games, and the <em>Ping-o-tronic</em> was demonstrably exhibited
        in Brno less than a year before those were created.
    </p>

    <p>
        There are also other distantly similar games, for example the <em>Tele-Tennis</em> by M. J.
        Hughes, serialized in the British magazine <em>Practical Wireless</em>, also as early as
        1974 (and improved further later on), and once again copied in the Italian magazine
        <em>Radio Elettronica</em>.
    </p>

    <p>
        In the West, however, during the heyday of these games there was also a second group in
        terms of technical principle, probably even more numerous, whose similarity to the ancestral
        <em>Odyssey</em> was noticeably smaller (and we can speculate freely whether this stems from the
        creators' different approach, or from an effort to get around the relevant patents). These games
        lean towards the proven (and cheap) analog principle that defines the position on the screen by
        a sawtooth reference signal, much like what happens in the television set itself. Incidentally,
        R. Baer's team had already tried the same principle in some prototypes, but it was not chosen
        for the final version. It did not appear in Czechoslovak games either.
    </p>

    <p>
        One of the significant families of this kind was introduced by the British company
        Videomaster, which released its first game under the plain name <em>Home TV Game</em> in
        1974, only to replace it a year later with a completely redesigned "third" version (Mk III,
        counting one earlier minor modification) with an interesting analog implementation of the
        ball movement (again a feature once considered by Baer's team as well). The new version was
        complemented by a simplified <em>Rally</em> variant and, conversely, an improved
        <em>Olympic</em>
        version (apparently differing only in the wiring of the game switches), which then spread
        further around the world in the form of various clones and modifications. Practically
        identical games can thus be found in Australia, as a construction guide for the
        <em>Video Ball</em>
        game in the magazine <em>Electronics Australia</em>, whose readers additionally gave the
        game simple sound effects, and also as the ready-made game <em>Videolympic</em>. A device
        almost identical to this Australian version (including the added sound) turns up in France,
        as the <em>Videoshoot</em> from Syrelec, and exactly the same games and controls (though
        without sound) are also offered by the <em>Tele-tainment</em> game from IEA in Québec,
        Canada. Likewise, the French <em>PP-2000</em> from Orelec, despite some modifications,
        contains an electronics board practically identical to the original
        <em>Videomaster Olympic</em>, while the <em>TV Challenger series 2000</em> from the British
        company Superlectron is the spitting image of the <em>Videomaster Rally</em>. This avalanche
        of similar games will certainly deserve a closer study of the individual similarities and
        differences in the future, but their mutual kinship is obvious even at a passing glance.
    </p>

    <p>
        Another fairly early Western European television game in a similar style was the very simple
        <em>Videosport MK2</em>, produced probably only in small numbers by the small British
        companies VideoSport Ltd. and Redbourn Plastics Ltd., which were connected in some way. The
        origin of this game is rather unclear, as are the details of its probable clones, one of
        which turned up as far away as Argentina (<em>Teyboll</em>).
    </p>

    <p>
        There are many more remarkable games - for example, Western Europe produced no fewer than
        two systems (<em>Interton Video 2000</em> and <em>Philips Tele-Spiel</em>) using plug-in
        modules (cartridges) with additional circuits for individual games, so there will certainly
        be more to write about in this area next time.
    </p>

    <p>
        A technological rarity was created by the American company Executive Games. Their <em
            >TV Tennis</em>
        game, developed during 1975 in cooperation with MIT, is in one of its parts perhaps the most analog
        design to be found in this generation of games (though it also contains a substantial digital
        part), and is another example of the popularity of the aforementioned reference "sawtooth" principle.
        The unusual circuitry, based on pairs of voltage comparators (determining, in an analog way, the
        start and the end of each object on the screen separately) and other original tricks, is justified
        by the authors by its simplicity and low cost, but they were clearly also after the commercially
        important possibility of obtaining their own patent in the field of television games (which they
        indeed successfully filed in December 1975). This, however, raises a number of as yet unanswered
        questions about a strikingly similar Japanese project created at the same time, associated, for
        a change, with a university in Tokyo. The <em>Electronic Hockey</em> published by Shigeo
        Niitsu in the magazine
        <em>Transistor Technology</em> as early as August 1975 lacks a lot compared to the American
        version, but the basic, very unusual principle is the same. And so that it doesn't stop at
        one strange coincidence, the device also shows striking similarities to the
        <em>Face Off</em> game, which Executive Games released only a year later. These are the kinds
        of mysteries that fuel the curiosity of every researcher...
    </p>

    <p>
        Several other games built on the analog "sawtooth" principle can also be found in the pages
        of magazines, which did not shy away from such guides in English-speaking countries either.
        These include, for example, the extensive guide "TV Football &amp; other games on the
        television screen" by P. Busby, printed as early as 1974 in the British magazine <em
            >Television</em
        >, which in its various variants ranges from a simple tennis game to an elaborate football
        simulator with realistic ball movement and an automatic opponent, all implemented in a
        thoroughly analog way. The complicated device, which bears the handwriting of a television
        technician unabashedly diving deep into the innards of TV sets, was probably built by very
        few, though.
    </p>

    <p>
        More accessible guides appeared at the very end of this era, in 1976, on the other side of
        the Atlantic, where two conceptually comparable guides were published: <em>Pongtronics</em>,
        and a guide with the uninformative title "Build this great TV game", which I will take the
        liberty of nicknaming <em>Bumper</em>. These are reasonably complex designs combining the
        analog principle with logic gates, and they already bring a number of small improvements,
        such as sound, score (using a chip intended for displaying a clock on a TV), play with
        gravity, variable ball speed and direction, play against the machine, or an unusual obstacle
        on the court called, fittingly, the "Bumper".
    </p>

    <p>
        We can round off our look westward with games that break away from the traditional concept
        of on-screen ball games. The <em>TV TAG</em> game was published in
        <em>Popular Electronics</em>
        as early as November 1972, just a few months after the launch of the first <em>Odyssey</em>
        console (which can also play the same game), making it the oldest known magazine guide for a
        television game. Conversely, the <em>Space-War</em> game, built mostly from CMOS integrated
        circuits, was one of the last American games without dedicated chips in 1976. (Its author,
        Joseph A. Weisbecker, was quite an interesting person in his own right, credited with
        designs of microprocessors, computers and much more.) What both games have in common is that
        they don't need a ball and its associated circuits at all, since they are based on direct
        contact between the two players - in one case it is a game of tag, in the other shooting by
        instantly stretching the player across the whole width of the screen. Thanks to this, both
        designs are very simple. Perhaps precisely for this reason, though, the late
        <em>Space-War</em> game jumped like a spark to the opposite end of the then divided world, to
        live a second life there in several variants.
    </p>

    <p>
        Which brings us to the Soviet Union of the time. The largest country in the world, where,
        according to a charmingly ambiguous Czech saying, "tomorrow meant yesterday" (take that as
        you will), was a very peculiar environment. If I overlook negligible mentions of foreign or
        arcade models, television games appeared there a year later than in Czechoslovakia - that
        is, in 1978. However, I find no connection with developments in the other Comecon countries
        - the Union was simply a world of its own. And since little is usually known about this
        sphere in the part of the world untouched by Cyrillic, I will try to go into a bit more
        detail.
    </p>

    <p>
        The first guide, for a <em>Tennis and Hockey</em> game, was published as early as January
        1978 by L. Shepotkovskiy and M. Charnyy from Minsk, Belarus, in the pages of the radio
        amateur magazine <em>Radio</em>. It was a somewhat clumsy guide, wired into the innards of
        the TV set, but the avalanche had been set in motion. The pages of the magazine were then
        taken over by authors from Moscow and its surroundings, who among other things gradually
        presented two variants of the aforementioned American <em>Space-War</em> game, under the
        names <em>Sea Battle</em> (1978, the name evokes the then already popular Soviet
        electromechanical arcade), and <em>PVO - Air Battle</em> (1979) [PVO = air defense], the second
        of which added, for example, a joystick and sounds. As we can see in the illustrative collage,
        the magazine had propaganda-style artwork down to perfection, but the quality of the guides themselves
        was worse. A somewhat clumsy adaptation to Soviet components made some parts of the circuitry
        disproportionately complicated and introduced several serious errors, so the magazine kept correcting
        and supplementing these games in various ways based on readers' suggestions until 1982, devoting
        to them, besides space in its regular readers' column, two more full-fledged articles. Readers'
        responses came even from the most remote places - ranging from Kyiv and Leningrad through Siberia
        all the way to the Pacific coast. One can also notice how the authors of the articles sometimes
        cite sources from the same magazine, but never foreign ones (even though the inspiration is obvious).
    </p>

    <Figure
        image={img["5-kolaz-casopisy.jpg"]}
        caption="A kaleidoscope of magazine guides: In black and white at top left the Japanese Hockey, a drawing from Elektor, Pongtronics, Bumper and the narrow TV Tag, at far right the Australian Video Ball, at the bottom the modular Polish and Danish variants based on Amatérské radio and Elektor respectively, and Bumper from the inside. Going up, Space-War, and then, now in color, its Soviet variants Air Battle and Sea Battle, surrounded by B. Igoshev's oscilloscope games, and at bottom right the extensive projects of M. Ovechkin." />

    <p>
        At the same time and in the same magazine, we find two more articles running in parallel:
        The TV Set Displays Information (V. Baranov and V. Kholoptsev, 1978) and Universal
        Television Game Unit (M. Ovechkin, 1979). They have a lot in common. Both actually serve two
        purposes: the first is formally a theoretical article about information systems, which,
        however, almost completely drowned in its chosen practical example - the design of a fully
        digital video game; the second device, besides games, also has functions generating
        reference patterns for adjusting TV sets (which is actually an ingeniously economical
        combination, if the author divided their time between such work and family). Both are also
        very ambitious projects, assembled not very efficiently from a huge number of integrated
        circuits (105 and a record 131 respectively) with a large share of digital logic; both
        display the score, and the second supports up to 4 players and several different games.
        (Outside the Soviet Union, I would dare to compare them perhaps only with the derivatives of
        the arcade <em>Pong</em>, and the prototype from the Prague VÚST.) These, as well as some
        other Soviet guides, also don't hesitate to connect various signals directly into the inside
        of TV sets. Another common feature of both guides is, unfortunately, a disproportionately
        high error rate. It is fair to say that in their printed form neither of them could have
        worked at all, and these are definitely not just typos - the schematics in the second of the
        two articles in particular pile one error on top of another to such an extent that in places
        it is almost impossible to guess the author's original intent. A working device did exist (a
        photograph was printed), but the authors didn't handle the preparation of the articles for
        print very well. Ovechkin put the crowning touch on it more than three years later, by
        capping the series of corrections with a proposal for a minor improvement to the game that
        introduced a new error. Judging by the response in the magazine, though, the guide still
        caught the readers' interest quite a lot.
    </p>

    <p>
        M. Ovechkin then went even further, and published two more extensive guides in a book (1985,
        expanded edition 1989). A version of the same hockey game slimmed down by almost half (to 72
        chips) and complemented by an automatic opponent is presented there much more clearly (and
        almost without errors), and a new and completely different game was added - horse racing (<em
            >Skachki</em
        >, very similar to the Soviet arcade of the same name from the same period). With animated
        bitmaps, even in color, it is, I think, quite a dignified "facelift" of this already
        outgoing technology.
    </p>

    <p>
        Even this is not the end of the avalanche of Soviet "telegames" ("teleigr"), though, since a
        few years before the aforementioned book other authors approached the matter differently,
        and came up with guides that were, on the contrary, as simple as possible. V. Tishchenko
        from Kyiv thus published a simplified clone of the original transistor Odyssey game under
        the title "Games on the TV Screen" (1980) in a somewhat surprising place - a magazine for
        modelers (<em>Modelist-konstruktor</em>), while Viktor Seryi chose the aforementioned
        simplest game of tag, and with this game add-on for the TV set even made it into the
        beginners' section (<em>Radio</em> magazine, 1982).
    </p>

    <p>
        Somewhat atypical are the contributions of B. Igoshev from Sverdlovsk (today Yekaterinburg -
        which also takes us from the European part of the USSR to Siberia). This author must have
        had rather limited means, having decided to imitate the television game craze using an
        oscilloscope from a school (or Pioneer) laboratory. The <em>Electronic Hockey</em> (<em
            >Modelist-konstruktor</em
        >, 1979) is, despite its name, more of an electromechanical game (there is just a single
        transistor in it), and its hockey penalty shots actually consist only of quick reactions in
        pressing buttons, yet surprisingly, the movement of the puck across a drawing of the rink
        (placed on the screen) is controlled by a joystick. The second game, with the long name
        "Electronic Shooting Gallery with a Moving Target" (<em>Radio</em>, 1981, co-author I.
        Kochev), is a fairly typical shooting game with a light pistol, whose circuits are, thanks
        to the analog nature of the oscilloscope, once again very simple.
    </p>

    <p>
        Besides the amateur guides, industrially manufactured home games were also made in the
        Soviet Union, of which only the oldest truly fits the topic of this article - the <em
            >Palestra 02</em>
        (1978), boasting a name straight out of antiquity, manufactured in Lviv, Ukraine, at an
        enterprise with the bizarrely Soviet designation "Lviv Production Association named after V.
        I. Lenin" (over time under various abbreviations such as LPO, PTO, LOORPO, or later LORTA).
        The four-kilogram box hides 117 TTL integrated circuits on four large boards, which makes it
        the most complicated mass-produced home console east of the Iron Curtain, and probably in
        the whole world (and we can make a fifth tally mark for generous Soviet projects bigger than
        <em>Pong</em>). It is a fully digital game which in function is almost unbelievably similar
        to the games based on the AY-3-8500, but extended even further (an added Volleyball game, 6
        ball speed modes, etc.), with a different sound, and some parts of the circuitry resembling
        <em>Pong</em>
        instead. Its price of 200 rubles reportedly equaled an engineer's entire monthly salary. (From
        which one can derive a somewhat surprising estimate of the price of the chips used: they must
        have been significantly cheaper than in Czechoslovakia.)
    </p>

    <p>
        Let us also briefly mention the other industrially manufactured games, even though they
        already contained dedicated chips and thus don't quite belong here - there were quite a few
        of them in the Soviet Union: Practically at the same time as the <em>Palestra</em>, the
        <em>Turnir</em>
        game (1978), built on imported AY-3-8500 chips, went into production in Moscow at the
        so-called pilot plant of the Research Institute of Long-Range Radio Communication, while the
        <em>Elektronika Eksi Video 01</em> (1978) was created at the Eksiton enterprise (Pavlovskiy
        Posad in the Moscow region), which started producing a slightly modified clone of the
        AY-3-8500 chip for its game under the designation К145ИК17. This chip was also produced by
        the Angstrem plant in Zelenograd (another satellite town of Moscow), and was used in all the
        other Soviet Pong-type games: the <em>Elektronika Eksi Video 02</em> (1981) with a light
        pistol, the <em>Elektronika Videosport</em> (1981) from the "Binom" production association
        of Vladikavkaz (alias Ordzhonikidze) in North Ossetia in the Caucasus, later modernized in
        versions with the suffixes "2", "M" and "3" (the last of them in 1984, with a light pistol),
        the <em>Evrika</em> (1989) from Elektrobytpribor in Kharkiv, Ukraine, and finally the
        <em>Elektronika Lider</em>, also produced with the Latin-script designation "Play Lider" by
        the Pyatigorsk pilot plant of NPO "Energoavtomatika" (near the Georgian border), and that
        even until 1993. In addition, the game was also built into two TV sets - the Rubin Ц1-205
        (1981) from the Moscow production association "Rubin", and the Elektron Ц-265ДЛ of the
        so-called "lux" series (1982, still mentioned as late as the end of 1986), from the Lviv
        television plant "Elektron" in Ukraine, though in both cases these were only exclusive
        small-batch variants. More of a curiosity was probably the БВ-010С television game and
        digital clock module, offered as part of the modular Estonia БВ-010 stereo hi-fi system
        (before the mid-1980s) from the Tallinn plant "Punane-RET" in Estonia. All of it still with
        the same chip and the same games.
    </p>

    <p>
        None of these games was produced in any staggering quantity. For example, the Rubin TV in
        the version with games was made in a mere 1764 units, and the known serial numbers of the
        <em>Palestra</em> are also only in the order of thousands. Given the size of the Soviet Union,
        that is a downright laughable number. The devices apparently made it into regular stores only
        rarely, and the price was high, so at first these games reportedly served more often in public
        places, alongside electromechanical arcades (which were, to some extent, also produced in the
        Soviet Union). On top of that, the public knew almost nothing about them. The news that something
        like this could be bought in the Soviet Union at all spread among people as a kind of word-of-mouth
        legend, which many were reluctant to believe in the first place. Finding one's way around the
        domestic market was certainly not helped by the large number of different manufacturing enterprises
        either (largely using the umbrella brand "Elektronika") - I found a list of manufacturers of "household
        radio equipment" with 428 entries, which still misses a few relevant enterprises.
    </p>

    <p>
        The Soviet Union of the time was certainly not exactly a model of the free flow of
        information, yet the fragmentation even among the experts and electronics enthusiasts
        themselves is striking. While in 1978 as many as three different game devices went into
        production at the same time, and by 1985 there were already seven, plus two local
        manufacturers of game chips, two TV sets with a game and one hi-fi system, the relevant
        magazines (as far as I have access to them) did not mention any of it at all, and kept
        printing games built from discrete components (whether the authors didn't know about the
        more modern alternative, didn't believe in its availability, or simply preferred the classic
        way - I can't say). The only exceptions to this information vacuum are the modest initial
        advertising of the <em>Turnir</em> game (<em>Radio</em> magazine 6/1978), and perhaps the
        rare and nearly invisible mentions of the Elektron TV in overviews of many, many other types
        in production (<em>Radio</em> 9/1985 and 10/1986).
    </p>

    <p>
        Otherwise I find only mentions of foreign games, and even those only rarely and in the short
        initial period of this craze in the USSR: At the end of 1977, <em>Radio</em> magazine
        printed a general overview of the main games in the USA, before that, in September, Zanussi
        exhibited its new <em>Play-o-tronic</em> game in Moscow's Sokolniki, and a few months
        earlier still, some kind of Pong-like arcade tennis turned up at the Polytechnic Museum in
        Moscow (the existence of something like this in the USSR is also briefly mentioned in the
        introduction to the first of the TV game guides), while a year later, the aforementioned
        Bulgarian Sofia 23 drew attention at the VDNKh exhibition grounds. These are just scattered
        fragments of foreign technology, hardly relevant in any way to developments inside the
        Soviet Union. Later, even that fell silent. (Besides that, Ralph Baer reportedly also
        mentioned an official export of the <em>Odyssey</em> to the Soviet Union, sometime in 1973 or
        1974, but apparently it left no trace on the Soviet side. Perhaps it was some small quantity for
        a closed circle of the local elite, who knows...)
    </p>

    <p>
        The record number of different guides in Soviet magazines points to a trend that we
        experienced only slightly less here in Czechoslovakia: the importance of home tinkering in a
        shortage economy. Empty store shelves, and what you don't make yourself, you don't have... A
        parallel with our homeland can also be seen in the existence of domestic production of
        consoles and chips for them, albeit poorly available and in tiny quantities, in original
        projects (including fairly extensive ones) going beyond mere copying of the West, or in the
        similar year of their arrival. Compared to Czechoslovakia, however, the Soviet Union stayed
        frozen in this phase for practically a whole decade longer.
    </p>

    <p>
        The time lag behind global developments here is simply enormous: games made of discrete
        components were created around the world until about 1976 (the West) or 1978 (the Eastern
        Bloc countries), whereas in the Soviet Union they only started in 1978 and remained current
        for a long 11 years. The end of production of Pong-type games in 1993 seems almost
        unbelievable, and magazine readers apparently had to wait until 1989 for a guide using a
        game chip (К145ИК17). The article, published in the Pioneer magazine for older children
        <em>Yunyy tekhnik</em>, however, already declares the chip to be well known and available -
        so who knows what else we will yet learn about what went on in this somewhat inscrutable
        country. At the same time, though, we have to keep in mind that in the very same decade of
        the 1980s, the Soviet Union was also building arcade machines and the first home computers
        with a number of cloned chips, and that the world-famous <em>Tetris</em> was created there too,
        so it cannot be claimed that newer technologies never arrived there. Why the older ones survived
        alongside them for so long is hard to say. In an environment of constant shortage of everything,
        perhaps there was simply a use for both. And so in 1989, alongside a number of ZX Spectrum clones
        and yet another home Pong, there was still room for the second edition of M. Ovechkin's book with
        games built from tried-and-true discrete TTL circuits.
    </p>

    <p>
        The whole story thus actually ends in a similar way on both sides of the then divided world
        - with a book full of television game guides. Although the two publications are separated by
        almost a whole decade, they have a lot in common. Besides theory, both contain advanced,
        mostly digital designs, going well beyond the traditional genre of ball games. Both were
        also published quite late, at a time when dedicated game chips were booming and the first
        home microcomputers were arriving. The authors only mentioned this development in passing,
        but at least tried to take some sort of stance on it - we can notice how David L. Heiserman
        declares discrete-component design a more flexible option compared to microprocessor-based
        games (responding to the game cartridges of the time with the question "But how creative can
        one be with someone else's prescribed programs?"), while Mikhail Alekseevich Ovechkin
        considers the classic technology good preparation for understanding computer game programs,
        and even tries to algorithmize its operation in a computer-like style using flowcharts (with
        rather awkward results). But development had already moved elsewhere, and so in their
        respective countries both books became something of a final full stop for games made of
        discrete components.
    </p>

    <Figure
        image={img["6-knihy.jpg"]}
        caption="In the end, a few rather unusual guides were also published in book form" />

    <p>
        So what have we actually found out about Czechoslovak television games made of discrete
        components in the end? From the perspective of the developed countries they came rather
        late, practically at the last minute, but from the perspective of the Eastern Bloc countries
        still very early, and they even managed to spread from here to other countries. Through two
        main sources, they were connected primarily to developments in Germany, building on the
        technology of the forefather, the <em>Magnavox Odyssey</em>. In the West, however, this was
        not the only, and perhaps not even the predominant, development branch of this generation,
        which is why many of its clever tricks never reached us at all. Copying and cloning of games
        took place in many countries of the world, including the developed ones, and the
        Czechoslovak approach was still relatively quite creative in this respect. The somersault by
        which the inspiration, on its way to us, crossed over from professional devices to amateur
        magazine guides and back again was not an everyday thing, but it did occur elsewhere in the
        world as well, and the overall greater importance of magazine guides fits well into the
        trend in the Eastern Bloc countries. Meanwhile, the hard-to-read Soviet Union went its own
        somewhat confused way, on which it even seemingly stood still for a whole decade when it
        came to discrete games, and the range of its projects - from the simplest to the most
        extensive, including its own chips - while seemingly quite similar to Czechoslovakia's at
        first glance, in reality has no closer ties or technical similarities to it.
    </p>

    <p>
        Finally, I owe thanks to Vojta Straka of the Herní historie (Game History) association,
        whose extensive research in this area is closely tied to the creation of my article, as well
        as to the long list of authors of the online content cited here. Romanizations of Cyrillic
        names are not always unambiguous and may differ between sources.
    </p>

    <h4>Sources:</h4>
    <ul>
        <li>
            Wikipedia: <a href="https://en.wikipedia.org/wiki/History_of_video_game_consoles"
                >History of video game consoles</a>
        </li>
        <li>
            David L. Heiserman: How to Design and Build Your Own Custom TV Games (TAB Books inc.,
            1978)
        </li>
        <li>
            <a href="https://www.pong-story.com/sanders.htm"
                >Birth of the video game at Sanders Associates</a>
        </li>
        <li>
            <a
                href="https://www.gamingalexandria.com/wp/2022/09/magnavox-odyssey-development-files/"
                >Magnavox Odyssey – Development Files</a>
        </li>
        <li>
            Ethan Johnson: <a
                href="https://thehistoryofhowweplay.wordpress.com/2026/08/22/1974s-bizarre-game-consoles"
                >1974’s Bizarre Game Consoles</a>
        </li>
        <li>
            Ing. Günther Bless: "Odyssee", ein elektronischer Spielsimulator (Funk-Technik 24/1973
            p. 928)
        </li>
        <li>B. Lübcke: TV tennisspel (Elektuur 10/1974 p. 1050)</li>
        <li>
            Het spel is uit, het spel heeft gewonnen (The game is over, the game has won) (Elektuur
            6/1975 p. 619) and other short news items about the competition throughout the 1974
            volume
        </li>
        <li>
            Josti Electronic: AT 610 - TV spil (advertisement, Populær Elektronik 12/1974 p. 53)
        </li>
        <li>
            Kurt Andersen, Henrik Kihl: Vinterens store hobby: TV spil (Populær Elektronik 2/1975 p.
            62, 3/1975 p. 61)
        </li>
        <li>TV Tennis (Elektor 11/1975 p. 1111 = Elektuur 6/1975 p. 633)</li>
        <li>
            TV Tennis extensions (Elektor 3/1976 p. 318, 4/1976 p. 453, 5/1976 p. 544 = Elektuur
            2/1976 p. 242, 3/1976 p. 344)
        </li>
        <li>Score on screen for TV games (Elektor 10/1976 p. 1008 = Elektuur 6/1976 p. 654)</li>
        <li>
            G. Brazioli, A. Cattaneo: Ping Pong Elettronico a circuiti integrati (Sperimentare
            1/1976 p. 12, 2/1976 p. 116)
        </li>
        <li>
            L. Kryška, J. Zuska: Hřiště na televizní obrazovce (Amatérské Radio B1/1977 p. 6,
            B6/1977 p. 222)
        </li>
        <li>
            Vladislav Čacký: Televizní hry s tranzistory (Amatérské Radio A10/1977 p. 369, A11/1977
            p. 423)
        </li>
        <li>
            Vladislav Čacký: Elektronické hry využívající televizor (Ročenka sdělovací techniky
            1978, p. 210)
        </li>
        <li>
            Sławomir Bilicz: Tenis - gra telewizyjna (Radioamator i krótkofalowiec 11/1978 p. 263)
        </li>
        <li>
            Т. Върбанова: Телевизионни игри (Радио, телевизия, електроника, 6/1978 p. 8, 7/1978 p.
            5)
        </li>
        <li>Tenis TV (Tehnium 10/1978 p. 8)</li>
        <li>
            Kopácsi László, Tóth Ferenc: TV-játék (Rádiótechnika 11/1977 p. 528, 12/1977 p. 565,
            1/1978 p. 31)
        </li>
        <li>
            <a href="https://amuseum.bg/katalog/tv-turnir">Телевизионна игра ТВ ТУРНИР</a>
        </li>
        <li>Държавен Bестник, 1977 No. 81 (Bulgaria, product registration of TV Turnir)</li>
        <li>Elektronika viděná v Brně (Technický týdeník 45/1977 p. 11)</li>
        <li>J. Gruy: Na návšteve u vývojárov v Tesle Orava Nižná (Smer, 13 May 1978, p. 7)</li>
        <li>
            Elżbieta Olszewska: 12 gier w odbiorniku telewizyjnym (Radio-elektronik 7-8/1980 p. 172)
        </li>
        <li>
            Jose Antonio Ortigueira Amor: <a
                href="https://retroordenadoresorty.blogspot.com/2025/04/consola-pong-hinno-hit-componentes.html"
                >Consola pong Inno-Hit</a>
        </li>
        <li>
            Dorian Hanuš: MÍR a vysokou životní úroveň všemu lidstvu (ČS Televize weekly 22/1976)
        </li>
        <li>M. J. Hughes: Tele-Tennis (Practical Wireless 7-11/1974)</li>
        <li>
            Arnaldo Berardi, Massimo Cattadori: Il ping pong sulla tivù (Radio Elettronica 10/1975
            p. 36)
        </li>
        <li>
            Videomaster Ltd.: <a href="https://archive.org/details/videomaster-kit-manual"
                >Videomaster VMIII kit - Assembly manual</a> (September 1975)
        </li>
        <li>
            David Edwards: Build your own Video Ball Game (Electronics Australia 5/1976 p. 38,
            additions 11/1976 p. 61)
        </li>
        <li>
            <a
                href="https://ia600705.us.archive.org/25/items/1stGenPong/Discrete%20Consoles/IEA_Technology_Tele-Tainment.pdf"
                >Tele-tainment Instructions</a> (IEA Technology Ltd.)
        </li>
        <li>
            Martin F. Martorell: <a href="https://prehistoricgaming.com/en/videosport-mk2-1975/"
                >VideoSport MK2</a>
        </li>
        <li><a href="https://pong-story.com/executivegames.htm">Executive Games</a></li>
        <li>Dash et al.: Electronic Games (patent US4034983A)</li>
        <li>
            Shigeo Niitsu (新津茂夫): Electronic Hockey (電子ホッケー) (Transistor Technology
            (トランジスタ技術) 8/1975 p. 195)
        </li>
        <li>
            P. Busby, B Sc: TV Football &amp; other games on the television screen (Television
            7/1974-1/1975)
        </li>
        <li>
            Mitchell Waite, Larry Brown: Pongtronics (Popular Electronics 4/1976 p. 35, 5/1976 p.
            61)
        </li>
        <li>Ray Pichulo: Build this great TV game ["Bumper"] (Radio-Electronics 6/1976 p. 35)</li>
        <li>Jeffrey W. Anderson: TV Tag (Popular Electronics 11/1972 p. 61)</li>
        <li>Joseph A. Weisbecker: Space War Game (Popular Electronics 4/1976 p. 40)</li>
        <li>
            Wikipedia: <a href="https://en.wikipedia.org/wiki/Joseph_Weisbecker"
                >Joseph Weisbecker</a>
        </li>
        <li>Л. Шепотковский, М. Чарный: Телеигра Теннис и Хоккей (Радио 1/1978 p. 22)</li>
        <li>М. Бибиков, Ю. Колпаков: Телеигра Морской бой (Радио 9/1978 p. 17)</li>
        <li>В. Горовиков: Телеигра ПВО - Воздушный бой (Радио 10/1979 p. 44)</li>
        <li>О телеигре Морской бой (Радио 6/1979 p. 29)</li>
        <li>Усовершенствование телеигр (Радио 7/1982 p. 26)</li>
        <li>
            В. Баранов, В. Холопцев: Телевизор отображает информацию (Радио 10/1978 p. 46, 11/1978
            p. 44, 1/1979 p. 37)
        </li>
        <li>М. Овечкин: Универсальный телеигровой блок (Радио 3/1979 p. 45, 4/1979 p. 45)</li>
        <li>
            М. А. Овечкин: Любительские телевизионные игры (series Массовая радиобиблиотека,
            publisher Радио и связь, 2nd edition, 1989)
        </li>
        <li>
            В. Тищенко: Игры на экране ТВ (Моделист-конструктор 1/1980 p. 36, 2/1980 p. 27, 4/1980
            p. 26)
        </li>
        <li>Виктор Серый: Приставка для телеигр (Радио 5/1982 p. 51)</li>
        <li>Б. Игошев: Электронный Хоккей (Моделист-конструктор 1/1979 p. 38)</li>
        <li>Б. Игошев, И. Кочев: Электронный тир с подвижной мишенью (Радио 2/1981 p. 53)</li>
        <li>
            ЛООРПО им. В. И. Ленина: <a
                href="https://rw6ase.narod.ru/index1/wideoteh/w_pris/palestra02.djvu"
                >Руководство по эксплуатации приставки телевизионной ПАЛЕСТРА 02</a> (1978)
        </li>
        <li>Е. Великович: домашние телеигры (Радио 10/1977 p. 60)</li>
        <li>Игровые автоматы (Радио 3/1977 p. 49)</li>
        <li>А. Богдан: Электроника Болгарии (Радио 11/1978 p. 35)</li>
        <li>
            Валентин Холмогоров: <a href="https://habr.com/ru/companies/ruvds/articles/986464/"
                >Советский «Плейстейшн». История отечественных игровых телеприставок</a>
        </li>
        <li>
            Wikibooks: <a
                href="https://ru.wikibooks.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5_%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D0%B5_%D0%BF%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8/%D0%A4%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D1%8B%D0%B5_%D1%82%D0%B5%D0%BB%D0%B5%D0%B8%D0%B3%D1%80%D1%8B"
                >Советские телевизионные игровые приставки/Фабричные телеигры</a>
        </li>
        <li>
            Wikipedia: <a href="https://ru.wikipedia.org/wiki/%D0%9A145%D0%98%D0%9A17">К145ИК17</a>
        </li>
        <li>ЦКРО Радиотехниика: Турнир (Радио 6/1978, advertisement, back cover)</li>
        <li>
            Сергей Николаевич Ермаков: <a href="https://rw6ase.narod.ru/index0/zd_v9.6.pdf"
                >Список предприятий, производивших бытовую радиоаппаратуру в 1945-2010 гг.</a>
        </li>
        <li>Б. Колобов: Сквош по пятому каналу (Юный техник 10/1989 p. 71)</li>
        <li>
            Wikipedia: <a
                href="https://en.wikipedia.org/wiki/List_of_first_generation_home_video_game_consoles"
                >List of first generation home video game consoles</a>
        </li>
    </ul>

    <h4>Image sources:</h4>
    <p>Opening collage:</p>
    <ul>
        <li>
            Earth: <a
                href="https://commons.wikimedia.org/wiki/Category:Earth_from_space#/media/File:01-Earth_(LofE01256).png"
                >Wikimedia</a>
        </li>
        <li>PONG: <a href="https://cs.wikipedia.org/wiki/Pong">Wikipedia</a></li>
        <li>
            Videosport MK2: <a href="https://prehistoricgaming.com/en/videosport-mk2-1975/"
                >Martin F. Martorell</a>
        </li>
        <li>
            Palestra 02: <a href="https://rw6ase.narod.ru/index1/wideoteh/w_pris/palestra02.html"
                >Domestic Technology of the 20th Century</a>
        </li>
        <li>
            Ping-o-Tronic: <a
                href="https://www.nightfallcrew.com/22/03/2014/zanussiseleco-ping-o-tronic-1nd-edition-1975"
                >Nightfall</a>
        </li>
        <li>
            Odyssey: <a
                href="https://cs.wikipedia.org/wiki/Magnavox_Odyssey#/media/Soubor:Magnavox-Odyssey-Console-Set.jpg"
                >Wikipedia</a>
        </li>
        <li>
            Videomaster Olympic: <a
                href="https://fr.wikipedia.org/wiki/Fichier:Videomaster_Olympic_Home_TV_Game_VM3-D_(4).jpg"
                >Wikipedia</a>
        </li>
    </ul>
    <p>Professional games:</p>
    <ul>
        <li>
            Brown Box: <a
                href="https://www.si.edu/object/brown-box-program-cards-1967-68%3Anmah_1301998"
                >Smithsonian</a
            >,
            <a href="https://www.facebook.com/groups/519858548078322/posts/24642289408741899/"
                >Facebook</a>
        </li>
        <li>
            Odyssey: <a
                href="https://cs.wikipedia.org/wiki/Magnavox_Odyssey#/media/Soubor:Magnavox-Odyssey-Console-Set.jpg"
                >Wikipedia</a
            >,
            <a
                href="https://upload.wikimedia.org/wikipedia/commons/a/a8/Magnavox-Odyssey-Open-FL.jpg"
                >Wikimedia</a>
        </li>
        <li>
            PONG: <a href="https://cs.wikipedia.org/wiki/Pong">Wikipedia</a>,
            <a href="https://lakeside-arcade.com/2026/01/25/atari-pong-pcb-repair-logs/"
                >Lakeside Arcade</a>
        </li>
        <li>
            Videosport MK2: <a href="https://prehistoricgaming.com/en/videosport-mk2-1975/"
                >Martin F. Martorell</a
            >,
            <a href="https://www.pong-story.com/pics/vsmk2/inside_laterversion.jpg">Pong-Story</a>
        </li>
        <li>
            Ping-o-Tronic: <a
                href="https://www.nightfallcrew.com/22/03/2014/zanussiseleco-ping-o-tronic-1nd-edition-1975"
                >Nightfall</a
            >,
            <a
                href="https://en.wikipedia.org/wiki/Ping-O-Tronic#/media/File:Seleco_Ping_o_Tronic_(Mod._PP_4)_(Zanussi)_(7).jpg"
                >Wikipedia</a>
        </li>
        <li>
            Videomaster Olympic: <a
                href="https://fr.wikipedia.org/wiki/Fichier:Videomaster_Olympic_Home_TV_Game_VM3-D_(4).jpg"
                >Wikipedia</a
            >, <a href="https://www.youtube.com/watch?v=YkZZ4LZ0Nmg">Olipix / YouTube</a>
        </li>
        <li>Multiplay 80, Videoshoot: photo by the author</li>
        <li>
            Palestra 02: <a href="https://rw6ase.narod.ru/index1/wideoteh/w_pris/palestra02.html"
                >Domestic Technology of the 20th Century</a
            >,
            <a href="http://www.leningrad.su/museum/show_big.php?n=2987"
                >Soviet digital electronics museum</a>
        </li>
        <li>Turnir: <a href="https://amuseum.bg/katalog/tv-turnir">Amuseum</a></li>
    </ul>
    <p>TV sets with a built-in game:</p>
    <ul>
        <li>
            <a
                href="https://sandacite.bg/%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80-%D1%81%D0%BE%D1%84%D0%B8%D1%8F-23-%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0-%D0%B8%D0%B3%D1%80%D0%B0/"
                >Sofia 23</a>
        </li>
        <li>
            <a href="https://rw6ase.narod.ru/index1/wideoteh/w_pris/rubin_c1_205.html"
                >Рубин Ц1-205</a>
        </li>
        <li>
            <a href="https://rw6ase.narod.ru/index1/tw/tw_cw_stand/elektron_c265d.html"
                >Электрон Ц-265ДЛ</a>
        </li>
        <li>
            <a href="https://en.wikipedia.org/wiki/Odyssey_series">Magnavox Odyssey 4305</a>
        </li>
        <li><a href="https://www.youtube.com/watch?v=67fZT-liIMg">Sampo VG6512BW</a></li>
        <li>
            <a
                href="https://en.wikipedia.org/wiki/List_of_first_generation_home_video_game_consoles#/media/File:Salora_Playmaster.jpg"
                >Salora Playmaster</a>
        </li>
        <li>
            <a href="https://commons.wikimedia.org/wiki/File:Noblex_Micro_14_14NT320.jpg"
                >Noblex Micro 14 14NT320</a>
        </li>
        <li>
            <a
                href="https://www.netauktion.se/auktion/produkt/telefunken-palcolor-8610-inkl-tv-spel"
                >Telefunken Palcolor 8610</a>
        </li>
        <li>
            <a
                href="https://20thcenturyvideogames.com/index.php?action=vermodelos&amp;submenu=&amp;tipo=2&amp;sistema=TVPong&amp;verletra=verfamilias#TVPong"
                >Philips 12B 615-22</a>
        </li>
        <li>
            Thomson: <a
                href="https://upload.wikimedia.org/wikipedia/commons/3/30/Thomson_TV_with_integrated_Pong_chip.jpg"
                >Wikimedia</a
            >, <a href="https://www.youtube.com/watch?v=WZ2hK7f2Ylc">YouTube</a>
        </li>
        <li>
            <a
                href="https://20thcenturyvideogames.com/sistemas/Blaupunkt/modelos/BlaupunktSantiagoColorTS.jpg"
                >Blaupunkt Santiago Color TS</a>
        </li>
        <li>
            <a href="https://20thcenturyvideogames.com/sistemas/TVPong/modelos/LoeweCT5160.jpg"
                >Loewe CT 5160 UTG, CT 5162 UTG</a>
        </li>
        <li>
            <a
                href="https://20thcenturyvideogames.com/index.php?action=vermodelos&amp;submenu=&amp;tipo=2&amp;sistema=TVPong&amp;verletra=verfamilias#TVPong"
                >TEC Astrosound TV 12-4 R/W</a>
        </li>
    </ul>
    <p>Magazine guides:</p>
    <ul>
        <li>Shigeo Niitsu: Electronic Hockey (Transistor Technology 8/1975 p. 195)</li>
        <li>tv tennis (Elektor 11/1975, p. 1118)</li>
        <li>Mitchell Waite, Larry Brown: Pongtronics (Popular Electronics 4/1976, p. 36)</li>
        <li>
            Ray Pichulo: Build This Great TV Game (alias "bumper") (Radio-Electronics 6/1976 p. 35)
        </li>
        <li>
            Jeffrey W. Anderson: Play Electronic Tag on Your TV (Popular Electronics 11/1972, p. 61)
        </li>
        <li>Б. Игошев, И. Кочев: Электронный тир с подвижной мишенью (Радио 2/1981 p. 53)</li>
        <li>Joseph A. Weisbecker: Space-War Game (Popular Electronics 4/1976, p. 41)</li>
        <li>В. Горовиков: Телеигра ПВО - Воздушный бой (Радио 10/1979 p. 45)</li>
        <li>М. Бибиков, Ю. Колпаков: Телеигра Морской бой (Радио 9/1978 p. 17)</li>
        <li>David Edwards: Build your own Video Ball Game (Electronics Australia 5/1976 p. 38)</li>
        <li>М. Овечкин: Универсальный телеигровой блок (Радио 4/1979 p. 49)</li>
        <li>
            Sławomir Bilicz: Tenis - gra telewizyjna (Radioamator i krótkofalowiec 11/1978 p. 269)
        </li>
        <li>
            Kurt Andersen, Henrik Kihl: Vinterens store hobby: TV spil (Populær Elektronik 2/1975 p.
            62)
        </li>
        <li>М. А. Овечкин: Любительские телевизионные игры (2nd edition, 1989 - pp. 48, 66)</li>
    </ul>
    <p>Books:</p>
    <ul>
        <li>
            David L. Heiserman: How to Design and Build Your Own Custom TV Games (TAB Books inc.,
            1978)
        </li>
        <li>М. А. Овечкин: Любительские телевизионные игры (2nd edition, 1989 - pp. 48, 66)</li>
    </ul>
</section>
