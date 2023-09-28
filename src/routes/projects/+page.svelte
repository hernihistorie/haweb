<script>
	import Meta from "$lib/Meta.svelte";
	import Box from '$lib/Box.svelte';
</script>

<Meta title="Projekty" />

<h3>Projekty</h3>
<div class="projects">
    <div class="timeline-line"></div>
    <Box left>
        <h3><span class="year">2021</span> Sbírka Českých a Slovenských her</h3>
        <p>
            Snaha ustanovit veřejně přístupnou sbírku fyzických kopií lokálních her, která není v soukromém vlastnictví. Byla již využita pro fotomateriály v rámci digitální výstavy <a href="https://scd.sk/hry/">"8-bit"</a> od Slovenského centra dizajnu.
        </p>
    </Box>

    <Box right>
        <h3><span class="year">2020</span> Česko-Slovenská spolupráce</h3>
        <p>
            Snaha o rozšíření záběru na Slovenskou Republiku byla posílená úzkou spoluprácí s Univerzitou sv. Cyrila a Metoda v Trnavě, přesněji její <a href="https://fmk.sk/tedi/">Fakultou masmediálnej komunikácie</a>. Společně chceme budovat kvalitní zdroje ohledně herní historie pro využití ve výuce a výzkumu.
        </p>
    </Box>

    <Box left>
        <h3><span class="year">2020</span> Museé Bolo</h3>
        <p>
            Navázání vztahů v rámci Evropy a využití získaného know-how v prvním mezinárodním projektu který je pod naším spoluvedením. Spolupráce na organizaci a digitalizaci sbírek Švýcarského muzea informačních technologií <a href="https://www.museebolo.ch/?lang=en">Museé Bolo</a>.
        </p>
    </Box>

    <Box right>
        <h3><span class="year">2020</span> Integrované čipy od Tesly</h3>
        <p>
            Zajištění technických informací okolo první Československé komerční hry - Televízního tenisu. Unikátní návrh herního hardwaru od Tesly Piěšťany byl <a href="http://www.seanriddle.com/tesla/">nasnímán mikroskopem</a> a probíhají snahy o převedení do simulátoru.
        </p>
    </Box>

    <Box left>
        <h3><span class="year">2019</span> <a href="https://www.vice.com/en_us/article/qv7x4p/ouya-is-shutting-down-and-fans-are-preserving-games-before-they-disappear">Projekt Ouya</a></h3>
        <p>
            Digitální obchod herní konzole Ouya byl ke konci roku ukončen. Naši členové rozběhli komunitní snahu o reverzní inženýrství serverů, které se díky mnoha nadšeným lidem podařilo a celá platforma tak unikla předčasné smrti.
        </p>
    </Box>

    <Box right>
        <h3><span class="year">2019</span> <a href="https://www.gameinformer.com/2019/12/05/video-game-history-foundation-keeping-history-alive">Projekt Game Informer</a></h3>
        <p>
            Výjezd našeho předsedy jako dobrovolníka v rámci aktivit Americké <a href="https://gamehistory.org/">Video Game History Foundation</a>. Bezprecedentní snaha masově digitalizovat herní materiály z archivů redakce herního časopisu Game Informer.
        </p>
    </Box>

    <Box left>
        <h3><span class="year">2018</span> <a href="https://retrip.cz">ReTrip</a></h3>
        <p>
            První akce spoluorganizovaná naším spolkem, která dala prostor Českým vývojářům promluvit o jejich zkušenostech. Oslava lokální herní historie za sebou má dva úspěšné ročníky.
        </p>
    </Box>

    <Box right>
        <h3><span class="year">2017</span> Sbírka herních tiskovin</h3>
        <p>
            Archiv tištěných materiálů, které jsou skvělým primárním zdrojem. Později jsme se zaměřili na její kompletaci jako náš první velký cíl. V současnosti se jedná pravděpodobně o nejobsáhlejší sbírku u nás.
        </p>
    </Box>

    <Box left>
        <h3><span class="year">2016</span> <a href="https://www.nm.cz/">Národní Muzeum</a></h3>
        <p>
            Zapůjčili jsme výbavu do výstavy "Retro". Spolupráci stále udržujeme a naši členové se podílí na herním obsahu v dalších expozicích.
        </p>
    </Box>

    <Box right>
        <h3><span class="year">2015</span> <a href="https://retroherna.org">RetroHerna</a></h3>
        <p>
            Spolek, který zajišťuje Herní archiv, začal svojí aktivitu skrze interaktivní muzeum RetroHerna. Více informací najdete na <a href="https://retroherna.org">webu projektu</a>.
        </p>
    </Box>
</div>

<style>
    .projects {
        position: relative;
    }

    .timeline-line {
        position: absolute;
        left: calc(50% - 1px);
        height: 100%;
        border-right: 2px solid var(--color-secondary);
    }

    @media only screen and (max-width: 700px) {
        .timeline-line {
            left: calc(4px);
        }
    }
</style>