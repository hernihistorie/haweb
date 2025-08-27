<script lang="ts">
	import Meta from '$lib/Meta.svelte';
	import Hero from '$lib/Hero.svelte';
	import Box from '$lib/Box.svelte';
    import Loc from '$lib/Loc.svelte';
	import BlogBoxes from './blog/BlogBoxes.svelte';
    import ProjectBoxes from './projects/ProjectBoxes.svelte';
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
                <a href="/interviews/josef-havelka/" class="plain">Josef Havelka</a>, 
                    <Loc
                        cs="zakladatel <i>Atari klubu Cítov</i>"
                        en="founder of <i>Atari club Cítov</i>"
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
<ProjectBoxes all={false}/>

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

<h2><Loc
    cs="Podpořte nás"
    en="Support us"
/></h2>
<p>
    <Loc
        cs="
            Československý herní archiv je projektem neziskového spolku Herní historie.  Jedná se o dobrovolnickou činnost z lásky ke hrám a historii naší kultury.  Vaše podpora nám pomáhá udržovat a rozvíjet naše aktivity.
        "
        en="
            The Czechoslovak Game Archive is a project of the non-profit association Herní historie. It is a volunteer activity born out of love for games and the history of our culture. Your support helps us maintain and develop our activities.
        "
    />
</p>
<Arrow href="/support">
    <Loc
        cs="Podpořte naši činnost"
        en="Support our activities"
    />
</Arrow>

<style>
    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .boxes > div {
        width: calc(96.3% - 84px);
        display: grid;
        grid-template-columns: 52.6% 52.6%;
        column-gap: 62px;
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
        width: 631px;
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

    @media only screen and (max-width: 1460px) {
        .boxes > div img {
            width: 94%;
        }
    }
    
    @media only screen and (max-width: 800px) {
        .boxes > div {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 32px;
        }

        .boxes > div img {
            width: 100%;
            max-width: 100%;
            margin: auto;
            order: 0 !important;
        }
    }

    @media only screen and (max-width: 500px) {
    }
</style>
