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

<h2>Naše činnost</h2>

<div class="boxes">

    <!-- SBIRKA -->
    <div>
        <img src="/photos/homepage/sbirka.jpg">
        <Box>
            <h3><Loc cs="Sbírka" en="Collection" /></h3>
            <!-- Dlouhodobě: -->
            <p>
                <Loc
                    cs="V evidenci vedeme více než 8000 předmětů, mezi něž spadají hlavně, nikoliv však pouze videohry na původních nosičích, herní konzole a počítače, periferie, přepisovatelná média s uživatelskými programy a literatura."
                    en="TODO"
                />
            </p>
            <p>
                <strong>Počet předmětů v databázi</strong>: 8381<br>
                <strong>Nejnovější předmět</strong>: <a href="https://inventory.herniarchiv.cz/asset/8492-color-tv-game-15" class="plain">Herní konzole Color TV-Game 15</a>
            </p>
            <Arrow href="https://inventory.herniarchiv.cz/" text="Náhlednout do sbírky" />
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
                    en="TODO"
                />

                <!-- <InterviewBox data={vodak_data} compact={true} /> -->
            </p>
            <p style=";">
                <strong>Nejnovější rozhovor:</strong> <a href="/interviews/zdenek-vodak/" class="plain">Zdeněk Vodák</a>, autor <i>Videostopu</i>
            </p>
            <Arrow href="/interviews" text="Přečíst rozhovory" />
        </Box>
    </div>

    <!-- DATABAZE MAGAZINU -->
    <div>
        <img src="/photos/homepage/magaziny.jpg">
        <Box>
            <h3><Loc cs="Databáze magazínů" en="Magasine database" /></h3>
            <!-- Dlouhodobě: -->
            <p>
                <Loc
                    cs="Tvoříme knihovnu českých a slovenských videoherních časopisů které postupně digitalizujeme. Také vedeme veřejnou databázi těchto časopisů, ve které si můžete prohlédnout obsahy všech doplněných čísel."
                    en="TODO"
                />
            </p>
            <p>
                <strong>Počet časopisů</strong>: 11<br>
                <strong>Naposledy zkompletováno</strong>: <a href="https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/2" class="plain">GameStar</a>
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
            <Arrow href="https://casopisy.herniarchiv.cz/" text="Sledovat vývoj časopisů" />
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
                    en="TODO"
                />
            </p>
            <!-- <div class="thumbnails">
                <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07140.jpg"></a>
                <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07179.jpg"></a>
                <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07141.jpg"></a>
            </div> -->
            <Arrow href="/gallery/emil-fafek" text="Prohlédnout Fond Emila Fafka" />
        </Box>
    </div>


</div>

<h2>Projekty</h2>
<div class="project-boxes">
    <ThinBox href="/projects/videostop/" title="Videostop" img="/photos/projects/videostop.jpg" show_arrow={false}>
        Videostop byl populární soutěžní pořad vysílaný mezi lety 1985 a 2000 na ČST. V rámci projektu byly shromážděny materiály týkající se hry, která figurovala na konci každého dílu pořadu.
    </ThinBox>

    <!-- <ThinBox href="#" title="Atari Klub Cítov" show_arrow={false}>
        Počítačový klub Cítov fungoval od roku 1986 do revoluce v roce 1989. Tento projekt shromažďuje materiály spojené s činností tohoto klubu stejně jako s činností jeho členů po rozpadu klubu.
    </ThinBox> -->

    <ThinBox href="/gallery/emil-fafek/" title="Fond Emila Fafka" img="/photos/projects/fafek.jpg" show_arrow={false}>
        Emil Fafek byl českým reportážním fotografem, který pracoval mezi lety 1945 a 1990 pro Mladou frontu. Fond obsahuje jeho fotografie z 80. let zaměřené na tehdejší československou počítačovou kulturu.
    </ThinBox>

    <ThinBox href="https://www.vice.com/en/article/ouya-is-shutting-down-and-fans-are-preserving-games-before-they-disappear/" title="Ouya" img="/photos/projects/ouya.jpg" show_arrow={false}>
        Ouya byla neúspěšná herní konzole vyráběná mezi lety 2013 až 2015. Projekt proběhl před uzavřením online storefrontu Ouyi v roce 2019 a byl snahou archivovat digitální knihovnu této platformy.
    </ThinBox>
</div>

<h2>Blog</h2>

<BlogBoxes all={false} />
<Arrow href="/blog" text="Všechny příspevky blogu" />

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
        margin-bottom: 4em;
    }

    .boxes > div:nth-child(even) img {
        order: 1;
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

    .decoration {
        height: 400px;
    }

    .blogboxes {
        display: flex;
        flex-wrap: wrap;
        gap: 64px;
    }

    .thumbnails {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        margin-bottom: 2em;
    }

    .thumbnails img {
        width: 140px;
    }

    @media only screen and (max-width: 750px) {
        .boxes > :global(div) {
            width: 100%;
        }

        .decoration img {
            height: 160px;
            margin: auto;
        }
    }

    @media only screen and (max-width: 500px) {
        .decoration img {
            height: 120px;
            margin: auto;
        }
    }
</style>
