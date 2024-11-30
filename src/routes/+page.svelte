<script lang="ts">
	import Meta from '$lib/Meta.svelte';
	import Hero from '$lib/Hero.svelte';
	import Box from '$lib/Box.svelte';
    import Loc from '$lib/Loc.svelte';
	import BlogBoxes from './blog/BlogBoxes.svelte';
	import InterviewBox from '$src/lib/InterviewBox.svelte';

    import { data as vodak_data } from './interviews/zdenek-vodak/interview';
	import Arrow from '$src/lib/Arrow.svelte';
</script>

<Meta title="" />

<Hero />

<div class="boxes">
    <Box>
        <h3><Loc cs="Rozhovory" en="Interviews" /></h3>
        <p>
            <Loc
                cs="Neustále rozšiřujeme sbírku rozhovorů s představiteli české a slovenské herní kultury. Tyto rozhovory se zaměřují primárně na široké životopisné vyprávění."
                en="We are constantly expanding our collection of interviews with representatives of Czech and Slovak gaming culture. These interviews focus primarily on broad biographical narratives."
            />
            <InterviewBox data={vodak_data} compact={true} />
        </p>
        <Arrow href="/interviews" text="Všechny rozhovory" />
    </Box>


    <div class="filler">
        <img src="/photos/sczther_sofa.jpg">
    </div>
    <div class="filler">
        <img src="/photos/pocitac_pritel_cloveka.jpg">
    </div>

    <Box>
        <h3><Loc cs="Vizuální materiály" en="Visual materials" /></h3>
        <!-- Dlouhodobě: -->
        <p>
            <Loc
                cs="Naše sbírka visuálních materiálů zahrnuje fotografie současné i historické, skeny obalových materiálů, či snímky obrazovky. V současnosti můžete nahlédnout na naše skeny fotografií s tématikou výpočetní techniky od dlouholetého reportéra Emila Fafka."
                en="TODO"
            />
        </p>
        <div class="thumbnails">
            <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07140.jpg"></a>
            <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07179.jpg"></a>
            <a href="/gallery/emil-fafek"><img src="/gallery/emil-fafek/thumbs/RH07141.jpg"></a>
        </div>
        <Arrow href="/gallery/emil-fafek" text="Prohlédnout Fond Emila Fafka" />
    </Box>
    


    <Box>
        <h3><Loc cs="Sbírka" en="Collection" /></h3>
        <!-- Dlouhodobě: -->
        <p>
            <Loc
                cs="V evidenci vedeme v současnosti více než 8000 předmětů zahrnující herní konzole a počítače, periferie, hry na původních nosičích, přepisovatelná média s uživatelskými programy, a literaturu, včetně časopisů a knih souvisejících s hrami či počítači."
                en="TODO"
            />
        </p>
        <!-- TODO carousel? -->
        <div class="thumbnails">
            <a href="https://inventory.herniarchiv.cz/asset/646-tesla-xd-8001">
                <img src="https://inventory.herniarchiv.cz/files/12167/DSC_2234.jpg">
            </a>
            <a href="#">
                <img src="/photos/ovladac_homebrew7.jpg">
            </a>
            <a href="https://inventory.herniarchiv.cz/asset/7859">
                <img src="/assets/asset_7859.jpg">
            </a>
        </div>
        <Arrow href="/gallery/emil-fafek" text="Náhlednout do sbírky" />
    </Box>
    

    <div class="filler">
        <img src="/photos/tapes_floppies_labels.jpg">
    </div>
    <div class="filler">
        <img src="https://casopisy.herniarchiv.cz/static/magdb/library.jpg">
    </div>
    <Box>
        <h3><Loc cs="Databáze magazínů" en="Magasine database" /></h3>
        <!-- Dlouhodobě: -->
        <p>
            <Loc
                cs="Tvoříme knihovnu českých a slovenskcýh herních časopisů a aktivně ji digitalizujeme. Nabízíme k prohlédnutí obsahy všech vydaných čísel."
                en="TODO"
            />
        </p>
        <!-- TODO carousel? -->
        <div class="thumbnails">
            <a href="#">
                <img src="https://casopisy.herniarchiv.cz/files/12504/level_old.svg">
            </a>
            <a href="https://inventory.herniarchiv.cz/asset/7859">
                <img src="https://casopisy.herniarchiv.cz/files/10195/GSLOGO_1.jpg">
            </a>
            <a href="https://inventory.herniarchiv.cz/asset/7859">
                <img src="https://casopisy.herniarchiv.cz/files/14086/OPSM2.svg">
            </a>
        </div>
        <Arrow href="https://casopisy.herniarchiv.cz/" text="Sledovat vývoj časopisů" />
    </Box>
    


</div>

    <h3>Blog</h3>

    <BlogBoxes all={false} />
    <Arrow href="/blog" text="Všechny příspevky blogu" />

<style>
    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .boxes > :global(div) {
        width: calc(50% - 16px);

        /* border-top: 2px solid var(--color-secondary); */
    }

    .filler {
        display: flex;
    }
    .filler img {
        height: 300px;
        margin: auto;
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

        .filler img {
            height: 160px;
            margin: auto;
        }
    }

    @media only screen and (max-width: 500px) {
        .filler img {
            height: 120px;
            margin: auto;
        }
    }
</style>
