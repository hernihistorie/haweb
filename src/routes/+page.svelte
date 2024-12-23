<script lang="ts">
	import Meta from '$lib/Meta.svelte';
	import Hero from '$lib/Hero.svelte';
	import Box from '$lib/Box.svelte';
    import Loc from '$lib/Loc.svelte';
	import BlogBoxes from './blog/BlogBoxes.svelte';
	import InterviewBox from '$src/lib/InterviewBox.svelte';

    import { data as vodak_data } from './interviews/zdenek-vodak/interview';
	import Arrow from '$src/lib/Arrow.svelte';
	import ThinBox from '$src/lib/ThinBox.svelte';
</script>

<Meta title="" />

<Hero />

<h2><Loc
    cs="Naše činnost"
    en="Our Activities"
/></h2>

<div class="boxes">

    <!-- SBIRKA -->
    <div>
        <img src="/photos/homepage/sbirka.jpg">
        <Box>
            <h3><Loc cs="Sbírka" en="Collection" /></h3>
            <p>
                <Loc
                    cs="V evidenci vedeme více než 8 000 předmětů, mezi něž spadají hlavně, nikoliv však pouze videohry na původních nosičích, herní konzole a počítače, periferie, přepisovatelná média s uživatelskými programy a literatura."
                    en="We maintain a registry of more than 8,000 items, which include primarily, but not exclusively, video games on original media, gaming consoles and computers, peripherals, rewritable media with user programs, and literature."
                />
            </p>
            <p>
                <strong>
                    <Loc
                        cs="Počet předmětů v databázi"
                        en="Number of items in database"
                    />
                </strong>:
                8381
                <br>
                <strong>
                    <Loc
                        cs="Nedávný předmět"
                        en="Recent item"
                    />
                </strong>:
                <a href="https://inventory.herniarchiv.cz/asset/8492-color-tv-game-15" class="plain">
                    <Loc
                        cs="Herní konzole Color TV-Game 15"
                        en="Color TV-Game 15 gaming console"
                    />
                </a>
            </p>
            <Arrow href="https://inventory.herniarchiv.cz/">
                <Loc
                    cs="Náhlednout do sbírky"
                    en="Browse the collection"
                />
            </Arrow>
        </Box>
    </div>


    <!-- ROZHOVORY -->
    <div>
        <img src="/photos/homepage/rozhovory.jpg">
        <Box>
            <h3><Loc cs="Rozhovory" en="Interviews" /></h3>
            <p>
                <Loc
                    cs="Neustále se rozšiřující sbírka rozhovorů s představiteli české a slovenské videoherní kultury. Tato svědectví rozšiřují poznání o tuzemské videoherní scéně způsobem, který nemohou jiné historické prameny nabídnout."
                    en="A continuously expanding collection of interviews with representatives of Czech and Slovak gaming culture. These testimonies expand our knowledge of the domestic video game scene in a way that other historical sources cannot offer."
                />
            </p>
            <p>
                <strong>
                    <Loc
                        cs="Nejnovější rozhovor"
                        en="Latest interview"
                    />:
                </strong>
                <a href="/interviews/zdenek-vodak/" class="plain">Zdeněk Vodák</a>, 
                    <Loc
                        cs="autor <i>Videostopu</i>"
                        en="author of <i>Videostop</i>"
                    />
            </p>
            <Arrow href="/interviews">
                <Loc
                    cs="Přečíst rozhovory"
                    en="Read interviews"
                />
            </Arrow>
        </Box>
    </div>

    <!-- DATABAZE MAGAZINU -->
    <div>
        <img src="/photos/homepage/magaziny.jpg">
        <Box>
            <h3><Loc cs="Databáze magazínů" en="Magazine database" /></h3>
            <!-- Dlouhodobě: -->
            <p>
                <Loc
                    cs="Tvoříme knihovnu českých a slovenských videoherních časopisů které postupně digitalizujeme. Také vedeme veřejnou databázi těchto časopisů, ve které si můžete prohlédnout obsahy všech doplněných čísel."
                    en="We are building a library of Czech and Slovak video game magazines which we are gradually digitizing. We also maintain a public database of these magazines where you can view the contents of all completed issues."
                />
            </p>
            <p>
                <strong>
                    <Loc
                        cs="Počet časopisů"
                        en="Number of magazines"
                    />
                </strong>: 11<br>
                <strong>
                    <Loc
                        cs="Naposledy zkompletováno"
                        en="Last completed"
                    />
                </strong>: <a href="https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/2" class="plain">GameStar</a>
            </p>
            <!-- TODO carousel? -->
            <!-- <div class="thumbnails">
                <a href="#">
                    <img src="https://casopisy.herniarchiv.cz/files/12504/level_old.svg">
                </a>
                <a href="https://inventory.herniarchiv.cz/asset/7859">
                    <img src="https://casopisy.herniarchiv.cz/files/10195/GSLOGO_1.jpg">
                </a>
                <a href="https://inventory.herniarchiv.cz/asset/7859">
                    <img src="https://casopisy.herniarchiv.cz/files/14086/OPSM2.svg">
                </a>
            </div> -->
            <Arrow href="https://casopisy.herniarchiv.cz/">
                <Loc
                    cs="Sledovat vývoj časopisů"
                    en="Track magazine progress"
                />
            </Arrow>
        </Box>
    </div>

    <!-- VIZUALNI MATERIALY -->
    <div>
        <img src="/photos/homepage/vizualni_materialy.jpg">
        <Box>
            <h3><Loc cs="Vizuální materiály" en="Visual materials" /></h3>
            <!-- Dlouhodobě: -->
            <p>
                <Loc
                    cs="Naše sbírka vizuálních materiálů zahrnuje historické fotografie, obaly k videohrám, plakáty, letáky a další podobné propagační materiály, fotografie našich sbírkových předmětů nebo videoherní snímky obrazovky."
                    en="Our collection of visual materials includes historical photographs, video game packaging, posters, flyers and other similar promotional materials, photographs of our collection items or video game screenshots."
                />
            </p>
            <!-- <div class="thumbnails">
                <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07140.jpg"></a>
                <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07179.jpg"></a>
                <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07141.jpg"></a>
            </div> -->
            <Arrow href="/gallery/emil-fafek">
                <Loc
                    cs="Prohlédnout Fond Emila Fafka"
                    en="View Emil Fafek Collection"
                />
            </Arrow>
        </Box>
    </div>


</div>

<h2><Loc
    cs="Projekty"
    en="Projects"
/></h2>
<div class="project-boxes">
    <ThinBox href="/projects/videostop/" title="Videostop" img="/photos/projects/videostop.jpg" show_arrow={false}>
        <p><Loc
            cs="Videostop byl populární soutěžní pořad vysílaný mezi lety 1985 a 2000 na ČST. V rámci projektu byly shromážděny materiály týkající se hry, která figurovala na konci každého dílu pořadu."
            en="Videostop was a popular game show broadcast between 1985 and 2000 on Czechoslovak Television. This project gathered materials related to the game that appeared at the end of each episode of the show."
        /></p>
    </ThinBox>

    <!-- <ThinBox href="#" title="Atari Klub Cítov" show_arrow={false}>
        Počítačový klub Cítov fungoval od roku 1986 do revoluce v roce 1989. Tento projekt shromažďuje materiály spojené s činností tohoto klubu stejně jako s činností jeho členů po rozpadu klubu.
    </ThinBox> -->

    <ThinBox href="/gallery/emil-fafek/" img="/photos/projects/fafek.jpg" show_arrow={false}>
        <h3>
            <a href="/gallery/emil-fafek/">
                <Loc
                    cs="Fond Emila Fafka"
                    en="Emil Fafek Collection"
                />
            </a>
        </h3>
        <p><Loc
            cs="Emil Fafek byl českým reportážním fotografem, který pracoval mezi lety 1945 a 1990 pro Mladou frontu. Fond obsahuje jeho fotografie z 80. let zaměřené na tehdejší československou počítačovou kulturu."
            en="Emil Fafek was a Czech photojournalist who worked for Mladá fronta between 1945 and 1990. The collection contains his photographs from the 1980s focusing on the Czechoslovak computer culture of that time."
        /></p>
    </ThinBox>

    <ThinBox href="https://www.vice.com/en/article/ouya-is-shutting-down-and-fans-are-preserving-games-before-they-disappear/" title="Ouya" img="/photos/projects/ouya.jpg" show_arrow={false}>
        <p>
            <Loc
                cs="Ouya byla neúspěšná herní konzole vyráběná mezi lety 2013 až 2015. Projekt proběhl před uzavřením online storefrontu Ouyi v roce 2019 a byl snahou archivovat digitální knihovnu této platformy."
                en="Ouya was an unsuccessful gaming console manufactured between 2013 and 2015. This project was conducted before the closure of Ouya's online storefront in 2019 and was an effort to archive the digital library of this platform."
            />
        </p>
    </ThinBox>
</div>

<h2>Blog</h2>

<div class="blogboxes">
    <BlogBoxes all={false} />
</div>
<div style="margin-top: 24px;">
    <Arrow href="/blog">
        <Loc
            cs="Všechny příspevky blogu"
            en="All blog posts"
        />
    </Arrow>
</div>

<style>
    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .boxes > div {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 62px;
        margin-bottom: 4em;

        align-items: center;
    }

    .boxes > div:nth-child(even) img {
        order: 1;
    }

    .boxes  img {
        margin-left: 42px;
    }

    .boxes > div > img {
        width: 600px;
    }

    .project-boxes {
        display: flex;
        width: 100%;
        gap: 64px;
    }

    /* .boxes > :global(div) {
        width: calc(50% - 16px);
        margin-bottom: 4em;

         border-top: 2px solid var(--color-secondary); 
    } */

    :global(.box) :global(h3) {
        margin-bottom: 1.2em;
    }

    :global(.box) :global(.arrow) {
        margin-top: 1em;
    }

    .blogboxes :global(.arrow) {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .boxes > div {
            grid-template-columns: 1fr;
            gap: 32px;
        }

        .boxes > div img {
            width: 600px;
            max-width: 100%;
            margin: auto;
            order: 0 !important;
        }

        .project-boxes {
            flex-direction: column;
            gap: 32px;
        }

        .project-boxes :global(img) {
            display: block;
            margin: auto;
            margin-bottom: 12px;
            width: 600px;
        }
    }

    @media only screen and (max-width: 500px) {
    }
</style>
