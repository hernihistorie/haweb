<script lang="ts">
    import ProjectPage from "$src/lib/components/project/ProjectPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { projectBulanci } from "./project";
    import BulanciMenu from "./BulanciMenu.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import MapGallery from "./maps/MapGallery.svelte";
    import { mapListHref } from "./maps/mapList";

    const { data } = $props();
</script>

<BulanciMenu />

<ProjectPage project={projectBulanci}>
    <PageLang cs />
    <div>
        <Loc
            cs="<p><strong>Název projektu</strong>: Bulánci
                <p><strong>Jména zpracovatelů</strong>: Rudolf Jan Suchý, David Labský, Vít Jindra
                <p><strong>Rok dokončení projektu</strong>: 2026"
            en="<p><strong>Project name</strong>: Bulánci
                <p><strong>Names of the involved archivists</strong>: Rudolf Jan Suchý, David Labský, Vít Jindra
                <p><strong>Year of project completion</strong>: 2026"
        />
        <hr />
    </div>
    <Loc>
        {#snippet cs()}
            <p>
                <i>Bulánci</i> jsou hrou, kterou je téměř zbytečné představovat. Jedná se o akční
                top-down střílečku z konce roku 2001, v níž se hráč ujímá role příslušníka
                fiktivního druhu bulánků a snaží se na ploše jediné obrazovky zneškodnit co nejvíce
                protihráčů. Hra byla pro hráče přitažlivá zejména svou jednoduchostí – jak z
                hlediska herních mechanismů, tak i díky tomu, že nevyžadovala instalaci – a zároveň
                výraznou estetikou, která kombinovala roztomilé motivy s brutalitou a drsností.
                <i>Bulánci</i>
                byli druhým titulem autorského uskupení <b>SleepTeam Labs</b>, které předtím
                vytvořilo slavnou českou point-and-click adventuru
                <i>Polda aneb S poctivostí nejdřív pojdeš</i>. Tým tvořili Jaroslav Wagner, Radek
                Matějka, Lubor Kopecký a Kamila Hurníková. <i>Bulánci</i> vznikli jako zcela nezávislá
                hra, jejíž distribuce využívala tehdy nových technologií. Mnoho hráčů se k ní dostalo
                prostřednictvím CD příloh časopisů, ještě více jich však hru objevilo díky postupně se
                rozšiřujícímu přístupu k internetu. Tvůrci provozovali vlastní web, odkud bylo možné hru
                stáhnout. Zároveň se šířila prostřednictvím řady webových katalogů a úložišť, jako byla
                Slunečnice nebo později Ulož.to.
            </p>

            <p>
                <i>Bulánci</i> byli hrou, kterou lidé hráli téměř výhradně offline. Byla to hra, kvůli
                níž se sourozenci mačkali u domácího počítače a která okupovala školní i firemní počítačové
                sítě, kde žákům a zaměstnancům nabízela alternativní program k práci či studiu. S rostoucí
                popularitou internetu však vznikla malá, ale velmi aktivní komunita online fanoušků. Ta
                začala pořádat internetové zápasy, zakládat herní klany a vytvářet webové stránky i vlastní
                obsah do hry.
            </p>

            <p>
                Tento archivní projekt mapuje právě internetové aktivity spojené s touto kultovní
                českou hrou. Naleznete v něm rozhovory se čtyřmi fanoušky vedené metodou orální
                historie, přibližně 750 fanouškovských map, přehled 56 fanouškovských webů a několik
                materiálů, které nám poskytli sami autoři hry, stejně jako dva rozhovory s nimi.
            </p>

            <p>
                Tento projekt vzniká s požehnáním <a href="http://bulanci.cz/"
                    >původních autorů hry <i>Bulánci</i></a
                >
                a za podpory projektu Národního filmového archivu
                <a href="https://www.nfa.cz/pixelarchiv/cs">Pixelarchiv.cz</a>, který těmto
                materiálům zajišťuje dlouhodobou archivaci.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                <i>Bulánci</i> (also released in English as <em>Combat Pillows</em>) released in
                late 2001, it is a top-down action shooter in which players take on the role of
                members of a fictional species of buálnci and attempt to eliminate as many opponents
                as possible within a single-screen arena. The game appealed to players primarily
                through its simplicity – both in terms of its gameplay mechanics and the fact that
                it required no installation – as well as its distinctive aesthetic, which combined
                cute imagery with brutality and a rough edge. <i>Bulánci</i> was the second title
                developed by the creative team <b>SleepTeam Labs</b>, which had previously created
                the famous Czech point-and-click adventure game
                <i>Polda aneb S poctivostí nejdřív pojdeš</i>. The team consisted of Jaroslav
                Wagner, Radek Matějka, Lubor Kopecký, and Kamila Hurníková. <i>Bulánci</i> was developed
                as a fully independent game and distributed using emerging technologies of the time. Many
                players discovered it through magazine CD-ROM cover discs, but even more found the game
                through increasingly accessible internet connections. The developers maintained their
                own website, where the game could be downloaded. It was also distributed through various
                software directories and file-hosting services, such as Slunečnice and, later, Ulož.to.
            </p>

            <p>
                <i>Bulánci</i> was a game that people played almost exclusively offline. It was the game
                that brought siblings together in front of the family computer and occupied school and
                workplace computer networks, offering students and employees an alternative to their usual
                work or studies. However, as the internet grew in popularity, a small but highly active
                online fan community emerged. Its members began organizing online matches, forming gaming
                clans, and creating websites and their own content for the game.
            </p>

            <p>
                This archival project documents precisely these online activities surrounding this
                cult Czech game. It includes oral history interviews with four fans, approximately
                750 fan-made maps, an overview of 56 fan websites, and several materials provided by
                the game's developers, as well as two interviews with the developers themselves.
            </p>

            <p>
                This project has the blessing of the <a href="http://bulanci.cz/"
                    >original creators of <i>Bulánci</i></a
                >
                and is supported by the National Film Archive's
                <a href="https://www.nfa.cz/pixelarchiv/cs">Pixelarchiv.cz</a> project, which provides
                long-term preservation for these materials.
            </p>
        {/snippet}
    </Loc>

    <h3>Články a přednášky</h3>
    <p>
        TODO: sem dát <a href="https://dspace.cuni.cz/handle/20.500.11956/212593"
            >bakalářskou práci</a
        >
    </p>

    <h3>Rozhovory</h3>
    <p>
        TODO: sem přidat rozhovory s fanoušky a autory (Hurníková a Kopecký)? určitě bych tyhle dvě
        věci nějak vizuálně rozdělil (textem nebo čárou)
    </p>

    <h3>Fanouškovské mapy</h3>
    <p>
        <Loc
            cs="Vytvořili jsme archiv více než 750 fanouškovských map, které byly sdíleny na webu. Zde je ukázka nejrozšířenějších map."
            en="We have created an archive of over 750 fan-made maps that were shared online. Here is a showcase of the most popular maps."
        />
    </p>
    <MapGallery maps={data.topMaps} />
    <p class="show-all">
        <a href={mapListHref({})}>
            <Loc cs="Zobrazit všech" en="Show all" />
            {data.mapCount}
            <Loc cs="map" en="maps" />
        </a>
    </p>

    <h3>Fanouškovské weby</h3>
    <p>
        TODO: asi sem dát diagram co je na samostatné stránce po weby? nebo jen talčítko "Přehled
        fanouškovských webů"
    </p>
</ProjectPage>

<style>
    .show-all {
        margin-top: 0.75em;
    }
</style>
