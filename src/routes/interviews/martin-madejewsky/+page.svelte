<script lang="ts">
    /* https://docs.google.com/document/d/1EUv8mepuz5gsXFP4tlrr3iypy-hDEpUN/edit */
	import InterviewPage from "$src/lib/components/interviews/InterviewPage.svelte";
	import Answer from "#lib/components/interviews/Answer.svelte"
	import Question from "#lib/components/interviews/Question.svelte";
    import Loc from "#lib/components/Loc.svelte";

    import { data, MM, RS } from "./interview";
    import PageLang from "$src/lib/components/PageLang.svelte";

    let A = Answer;
    let Q = Question;
</script>

<PageLang cs en />

<InterviewPage data={data}>
    {#snippet content()}
        <Loc>
            {#snippet cs()}
                <Q speaker={RS}>Potkali jsme se k rozhovoru na téma fanouškovský tvorby k <i>Bulánkům</i>. Začal bych ale trochu obecně. Jaký bylo vaše rodinný zázemí, kam jste chodil do školy, co dělali vaši rodiče?</Q>

                <A speaker={MM}>Jsem ročník 1994 a pocházím z Dolního Újezda u Litomyšle. Tam jsem chodil na základní školu od páté třídy a někdy v šesté třídě se tam začli hrát <i>Bulánci</i>. Táta byl tesař a mamka v té době pracovala myslím jako skladnice.</A>

                <Q speaker={RS}>Jak to bylo u vás doma s hraním her? Měli jste počítač?</Q>

                <A speaker={MM}>Svojí první hru jsem hrál na strejdovým počítači. Byl to <i>Vlak</i>. Miloval jsem <i>Prehistorika</i> jedničku a u bratránků jsem hrál <i>GTA</i> dvojku. A pak takový věci jako <i>Warcraft</i> dvojka, trojka. Asi od mojí pátý třídy jsme měli počítač a tam jsem měl <i>Need For Speed Underground</i> dvojky, <i>NHL</i>, <i>FIFu</i>. A <i>Bulánky</i>. Postupně jsem hrál hrál spíš na mobilu hry jako <i>Stack Attack</i>, <i>Balloon Shooter</i>, <i>Bounce</i> a <i>Space Invaders</i>.</A>

                <Q speaker={RS}>Co vy a internet? Kdy a jak se zaváděl k vám domů</Q>

                <A speaker={MM}>Asi bych řekl od tý šestý třídy. Tak nějak si myslím.</A>

                <Q speaker={RS}>A byl to vytáčenej internet a nebo už vysokorychlostní?</Q>

                <A speaker={MM}>Měli jsme kabel a přes něj to bylo tažený k nějakýmu vysílači na střeše. Bylo to hrozně pomalý. Tři megabajty písničky se stahovaly třeba pět minut, ne-li delší čas. To bylo hrozný. Do těch map k <i>Bulánkům</i> jsme přidávali i hudbu. Ta písnička sama o sobě měla nějakejch pět mega a do toho ještě textury mapy, který byly zabudovaný v souboru „EAP“. To mělo takovejch megabajtů, že než to člověk nahrál, tak to pěkně dlouho trvalo. Internet ve škole byl určitě rychlejší, doma byl pomalej. Ale byli jsme rádi aspoň za to.</A>

                <Q speaker={RS}>Jak jste se dostal k těm <i>Bulánkům</i>?</Q>

                <A speaker={MM}>Ve škole. V družině jsme měli počítače a tam jsme hráli <i>Prehistoriky</i>, <i>Prince of Persia</i> a další hry. Na druhým stupni, jsme se učili Word, Excel atd. Většinou to bývala dvouhodinovka. Do učebny jsme chodili o deset minut dřív protože tam byl nainstalovanej základní balíček <i>Bulánků</i>. Na jednom keyboardu jsme hráli tři vždycky těch deset minut před vyučováním a pak o pauze mezi tou dvouhodinovkou. To tuším byla šestá třída? To mohl bejt rok 2006, 2007? Tak nějak.</A>

                <Q speaker={RS}>A hrál jste teda <i>Bulánky</i> primárně ve škole a nebo jste hrál i někde mimo?</Q>

                <A speaker={MM}>Primárně ve škole o těch přestávkách. Později jsme si to samozřejmě na tajňáka stáhli a pak už jsme to s klukama hráli doma. Měli jsme hroznou radost, že to někdo do tý školy nainstaloval a pak se to šířilo po domácnostech. S klukama jsme se navštěvovali a hráli. Následně do toho ještě přibyl editor map. Takže jsme tvořili mapy a pak na nich proti sobě válčili. Nejdřív jsme se mačkali u jednoho keyboardu, ale pak přibyly notebooky a někdy jsme připojili další klávesnici přes USB, takže se nás tam vešlo víc.</A>

                <Q speaker={RS}>Takže primárně jste hrál se spolužákama ze školy.</Q>

                <A speaker={MM}>Spolužákama a se staršíma kamarádama ze školy.</A>

                <Q speaker={RS}>Kde jste sdílel ty vytvořený mapy? Mezi těma kamarádama?</Q>

                <A speaker={MM}>Všechno to šlo přes blog.cz. Tam jsme si s lidma napříč Českou republikou, vlastně i ze zahraničí, sdíleli mapy a dávali si i rady, jak to tvořit. Byla to taková síť. Prostě jsme se potkali na tý doméně něco něco tečka blog tečka cz a tam jsme fungovali.</A>

                <Q speaker={RS}>Můžete víc popsat, jak jste s těma lidma komunikoval?</Q>

                <A speaker={MM}>Komunikovali jsme hlavně přes blog.cz. Na tý velký doméně blog.cz se zakládaly jednotlivý blogy. Stránky volný pro každýho. Bylo tam vyhledávání, napsal jste <i>Bulánci</i> nebo mapy do <i>Bulánků</i> a vyjelo vám to. A nebo jsme to hledali přes Google. A mezi sebou, když už byly kontakty jsme buď komunikovali e-mailem nebo přes ICQ. Přes e-mail jsme si dávali ICQ a přes ICQ jsme si všechno posílali, komunikovali, radili se a tak. Dokonce si ještě pamatuju svoje číslo. Takhle jsme si posílali ty mapy. Jenomže na blog nešlo nic vložit, tak jsme je většinou ukládali na eDisk, RapidShare a podobný úložiště, který už samozřejmě nefungujou. Potom jsme přešli na Ulož to. Před rozhovorem jsem se snažil ty mapy hledat. Pár jich mám.</A>

                <Q speaker={RS}>Zkoušel jste s lidma, s kterejma jste komunikoval skrz blog, případně ICQ ty mapy hrát? Scházeli jste se na živo?</Q>

                <A speaker={MM}>Naživo jsme se nesetkali nikdy. Občas přišla nějaká zpětná vazba. Dvě, tři věty, že je to fajn nebo co je špatně, co by se dalo vylepšit. Ale, že bychom to hráli proti sobě přes internet, to vůbec ne. Jenom jsme komunikovali tou psanou formou.</A>

                <Q speaker={RS}>Mapy, který vám posílali jste nějakým způsobem šířili mezi těma kamarádama ze školy?</Q>

                <A speaker={MM}>Jo, potkávali jsme se u těch map a sem tam jsme nějaký hráli. Mám dobrou vzpomínku. Jak jsme komunikovali s těma lidma přes ICQ, radili jsme si a našli jsme chybu v editoru map. Texturu teleportu jsme dali na hranu mapy, pak jsme tam udělali, teď jak to nazvat? No prostě červenou překážku. A když se ten Bulánek teleportoval, tak zůstal v tý červený překážce. Tak to jsme vždycky zkoušeli takhle mezi sebou s klukama ze školy.</A>

                <Q speaker={RS}>A ty kamarádi si zakládali nějaký vlastní blogy nebo weby?</Q>

                <A speaker={MM}>Měli blogy, ale ne o <i>Buláncích</i>. Já měl taky ještě jeden. Tehdy nebyly k sehnání třeba MP3, tak jsme projížděli weby a soutěžili jsme, kdo na internetu najde nějakou písničku. Pak jsme si to dávali na ty svoje weby a kontrolovali jsme, kdo to měl víckrát stažený. Taky byly blogy na různý básničky, články, překlady písniček. Každej to měl na něco jinýho. Trochu se bojím, až si zahraju ty mapy, co jsem tam všechno vytvořil. Protože něco bylo hrozně amatérský, ale něco už bylo docela dobrý.</A>

                <Q speaker={RS}>Kde jste brali inspiraci na ty mapy?</Q>

                <A speaker={MM}>Z her, který jsme hráli, jako <i>Warcraft</i> dvojka, jsme většinou printscreenovali. Pak jsme si ten obrázek vyřízli a použili jsme ho jako texturu. Občas někdo něco namaloval, ale to bylo hodně amatérský. Trochu odbočím, ale oni pro operační systém Linux udělali i <i>Tuksánky</i>. A tam byl balíček, kde ty textury byly přímo vložený. Takže z některých her jsem vypreparoval textury jako obrázky a pak jsem to použil do map. No a někteří dokonce vyráběli i 3D mapy. Sice to bylo z vrchu ty <i>Bulánci</i>, ale ta textura byla 3D a dalo se za tím chodit. To bylo teda taky pěkně propracovaný. Povedlo se mi dostat i nějaký level od lidí, který to vyráběli v zahraničí.</A>

                <Q speaker={RS}>To v tom zahraničí dělali lidi, který mluvili česky?</Q>

                <A speaker={MM}>Já nevím, jak se k tý hře vůbec dostali, ale našel jsem to na cizím serveru, kde ty mapy byly popsaný i anglicky. Asi někoho ta hra bavila a dostala to do zahraničí. Byly to krásně zpracovaný mapy, až mě mrzí, že to nikde nemám.</A>

                <Q speaker={RS}>Hrál jste mobilní verzi <i>Bulánků</i>?</Q>

                <A speaker={MM}>Hrál jsem je asi jednou, ale vůbec mě to nezaujalo. Taky to nepodporovalo moc mobilů, takže jsme to měli jen u kamaráda na mobilu. Samozřejmě jsem to na svým blogu taky tuším měl, ale nechytlo mě to.</A>

                <Q speaker={RS}>Hrál jste druhý <i>Bulánky</i> nebo podporoval nebo jste je na startovači?</Q>

                <A speaker={MM}>Podpořil jsem je v kampani, ale nějak mě nezaujali. Už mně tam chybí ta jednoduchost, takže jsem to ani nezkoušel.</A>
            {/snippet}
            {#snippet en()}
                <Q speaker={RS}>We met for an interview on the topic of fan creations for <i>Bulánci</i>. But I'd like to start a bit more generally. What was your family background like, where did you go to school, what did your parents do?</Q>

                <A speaker={MM}>I was born in 1994 and I come from Dolní Újezd near Litomyšl. I went to elementary school there from fifth grade, and sometime in sixth grade people started playing <i>Bulánci</i> there. My dad was a carpenter and my mom worked, I think, as a warehouse clerk at the time.</A>

                <Q speaker={RS}>What was it like at home with playing games? Did you have a computer?</Q>

                <A speaker={MM}>I played my first game on my uncle's computer. It was <i>Vlak</i>. I loved <i>Prehistorik</i> 1, and at my cousins' place I played <i>GTA</i> 2. And then things like <i>Warcraft</i> 2 and 3. From about fifth grade we had a computer, and there I had <i>Need For Speed Underground</i> 2, <i>NHL</i>, <i>FIFA</i>. And <i>Bulánci</i>. Later I played mostly games on my phone, like <i>Stack Attack</i>, <i>Balloon Shooter</i>, <i>Bounce</i> and <i>Space Invaders</i>.</A>

                <Q speaker={RS}>What about you and the internet? When and how did it get set up at your home?</Q>

                <A speaker={MM}>I'd say from sixth grade. I think so, more or less.</A>

                <Q speaker={RS}>Was it dial-up, or already high-speed?</Q>

                <A speaker={MM}>We had a cable, and through it the connection was routed to some transmitter on a roof. It was terribly slow. A three-megabyte song took maybe five minutes to download, if not longer. It was awful. We also added music to the maps for <i>Bulánci</i>. The song itself was about five megs, and on top of that there were the map textures, which were embedded in the "EAP" file. It had so many megabytes that uploading it took quite a while. The internet at school was definitely faster, at home it was slow. But we were glad to have at least that.</A>

                <Q speaker={RS}>How did you get into <i>Bulánci</i>?</Q>

                <A speaker={MM}>At school. In the after-school club we had computers, and there we played <i>Prehistorik</i>, <i>Prince of Persia</i> and other games. In upper elementary school we learned Word, Excel, etc. It was usually a double lesson. We'd come to the classroom ten minutes early because the basic package of <i>Bulánci</i> was installed there. Three of us would play on one keyboard, always for those ten minutes before class and then during the break in the middle of the double lesson. I think that was sixth grade? That could have been 2006, 2007? Something like that.</A>

                <Q speaker={RS}>So did you play <i>Bulánci</i> primarily at school, or did you also play somewhere else?</Q>

                <A speaker={MM}>Primarily at school during the breaks. Later, of course, we secretly downloaded it and then played at home with the guys. We were really happy that someone had installed it at that school and then it spread around the households. We visited each other and played. Then a map editor was added on top of that. So we created maps and then fought each other on them. At first we crowded around one keyboard, but then laptops came along and sometimes we connected another keyboard via USB, so more of us could fit.</A>

                <Q speaker={RS}>So you played mainly with classmates from school.</Q>

                <A speaker={MM}>Classmates and older friends from school.</A>

                <Q speaker={RS}>Where did you share the maps you created? Among those friends?</Q>

                <A speaker={MM}>It all went through blog.cz. There we shared maps with people from all over the Czech Republic, and actually from abroad too, and gave each other advice on how to make them. It was a kind of network. We simply met on that domain, something something dot blog dot cz, and that's where we operated.</A>

                <Q speaker={RS}>Can you describe in more detail how you communicated with those people?</Q>

                <A speaker={MM}>We communicated mainly through blog.cz. On that big domain, individual blogs were created. Free pages for everyone. There was a search, you typed <i>Bulánci</i> or maps for <i>Bulánci</i> and it came up. Or we searched through Google. And among ourselves, once we had contacts, we communicated either by email or through ICQ. Through email we gave each other our ICQ numbers, and through ICQ we sent everything, communicated, consulted each other and so on. I even still remember my number. That's how we sent each other the maps. But you couldn't upload anything to the blog, so we mostly stored them on eDisk, RapidShare and similar storage sites, which of course no longer work. Then we moved to Uloz.to. Before the interview I tried to look for those maps. I have a few of them.</A>

                <Q speaker={RS}>Did you try playing the maps with the people you communicated with through the blog, or ICQ? Did you meet in person?</Q>

                <A speaker={MM}>We never met in person. Sometimes we got some feedback. Two, three sentences saying it's nice or what's wrong, what could be improved. But playing against each other over the internet, not at all. We only communicated in written form.</A>

                <Q speaker={RS}>Did you spread the maps that people sent you in some way among your friends from school?</Q>

                <A speaker={MM}>Yeah, we met over those maps and played some here and there. I have a good memory. When we communicated with those people over ICQ, we advised each other and found a bug in the map editor. We put the teleport texture on the edge of the map, then we made there, what do you call it now? Well, a red obstacle. And when the Bulánek teleported, it stayed stuck in that red obstacle. So we always tried that among ourselves with the guys from school.</A>

                <Q speaker={RS}>And did those friends set up their own blogs or websites?</Q>

                <A speaker={MM}>They had blogs, but not about <i>Bulánci</i>. I had one more as well. Back then MP3s weren't easy to get, so we browsed websites and competed over who could find some song on the internet. Then we put it on our sites and checked who had more downloads. There were also blogs about various poems, articles, song translations. Everyone had one for something different. I'm a bit afraid of when I play the maps I created back then. Because some were terribly amateurish, but some were already quite good.</A>

                <Q speaker={RS}>Where did you get inspiration for the maps?</Q>

                <A speaker={MM}>From the games we played, like <i>Warcraft</i> 2, we mostly took screenshots. Then we cut the image out and used it as a texture. Sometimes someone drew something, but that was very amateurish. A slight digression, but they also made <i>Tuksánci</i> for the Linux operating system. And there was a package where the textures were embedded directly. So from some games I extracted textures as images and then used them in maps. And some people even made 3D maps. It was still the <i>Bulánci</i> from above, but the texture was 3D and you could walk behind it. That was really well done too. I even managed to get some levels from people who made them abroad.</A>

                <Q speaker={RS}>Were the people abroad Czech speakers?</Q>

                <A speaker={MM}>I don't know how they even got to the game, but I found it on a foreign server where the maps were also described in English. Someone probably enjoyed the game and brought it abroad. They were beautifully made maps, and I regret that I don't have them anywhere.</A>

                <Q speaker={RS}>Did you play the mobile version of <i>Bulánci</i>?</Q>

                <A speaker={MM}>I played it maybe once, but it didn't interest me at all. It also didn't support many phones, so we only had it on a friend's phone. Of course I think I had it on my blog too, but it didn't hook me.</A>

                <Q speaker={RS}>Did you play <i>Bulánci 2</i>, or support it, or were you on the launcher?</Q>

                <A speaker={MM}>I backed them in the campaign, but they somehow didn't interest me. I miss the simplicity there, so I didn't even try it.</A>
            {/snippet}
        </Loc>
    {/snippet}
</InterviewPage>