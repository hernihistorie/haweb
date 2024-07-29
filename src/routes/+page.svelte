<script lang="ts">
	import Meta from '$lib/Meta.svelte';
	import Hero from '$lib/Hero.svelte';
	import Box from '$lib/Box.svelte';
    import Loc from '$lib/Loc.svelte';
	import BlogBoxes from './blog/BlogBoxes.svelte';
	import Arrow from '$src/lib/Arrow.svelte';


    import { data as kopecky_data } from './interviews/lubor-kopecky/interview';
	import InterviewBox from '$src/lib/InterviewBox.svelte';
</script>

<Meta title="" />

<Hero />

<div class="boxes">
    <Box>
        <h3><Loc cs="O nás" en="About us" /></h3>
        <p>
            <Loc cs="
Jsme projekt spolku Herní historie, jehož cílem je zachovávat herní kulruru v rámci
České a Slovenské republiky. Naší hlavní činností je katalogizace a archivace všech
artefaktů spojených s historií her, jako například časopisy, dobová zařízení nebo
média obsahující videoherní obsah. Spolupracujeme s řadou mezinárodních organizací
a chceme se zasloužit o to, aby u nás existovala oficiální instituce zastřešující
lokální stopu v tomto odvětví kultury.
" en="We are a project of the Herní historie (Game History) association, whose goal is to preserve video game culture within the Czech and Slovak republics. Our main activty is the cataloguing and archiving of all artefacts connected to the history of games, such as magazines, original devices, or media containing video game content. We cooperate with a number of international organizations and our goal is to establish the existence of an official institution housing the local tracks in this branch of culture."
            />
        </p>
        <Arrow href="/about">Mise a cíle</Arrow>
    </Box>
    <InterviewBox data={kopecky_data} />

    <Box href="/projects">
        <h3><Loc cs="Projekty" en="Projects" /></h3>
        <p>
            <Loc
                cs="Za naší existence jsme spustili několik projektů, nejenom u nás, ale i v zahraničí ve spolupráci s partnerskými institucemi. O každém z projektů se můžete dozvědět více a sledovat jeho vývoj."
                en="During our existence we have launched a number of projects, not only locally, but also abroad in cooperation with partner institutions. You can discover more about each project and follow their development (currently only in Czech)."
            />
        </p>
    </Box>
    <Box href="/services">
        <h3><Loc cs="Služby a technologie" en="Services and technologies" /></h3>
        <p>
            <Loc
                cs="V rámci našich archivářských činností si klademe za cíl uchovávat materiály a data za pomocí těch nejlepších technologií a nejvyšších současných standardů. Rádi pomůžeme i Vám zachránit data ze zapomenutých médií, či zorganizovat projekt na digitalizaci celého archivu."
                en="As a part of our archival activities, we aim to preserve materials and data utilizing the best technologies and highest current standards. We will be happy to help even you recover data from lost media, or to organize a project for the digitalization of your entire archive."
            />
        </p>
    </Box>

    <div class="filler">
		<img src="/illu/illu_03.png" alt="">
    </div>
    <Box href="/collection">
        <h3><Loc cs="Sbírka" en="Collection" /></h3>
        <p>
            <Loc
                cs="Videohry bereme jako umění a součást lidské kultury, která si zaslouží zachování pro další generace. Proto budujeme obsáhlou sbírku herních a počítačových materiálů, a to předně těch z Česka a Slovenska. Zejména se zabýváme shromažďováním psaných materiálů, her na původních nosičích, a dobových strojů. Všechny předměty v naší sbírce inventarizujeme, třídíme, a bezpečně uchováváme."
                en="We understand video games as art and as a part of human culture which deserves to be preserved for future generations. That is why we are building a comprehensive collection of game and computer materials, primarily those from Czechia and Slovakia. In particular, we are focused on collecting written materials, games on original media, and old devices. All objects in our collection are inventoried, sorted, and safely stored."
            />
        </p>
    </Box>
</div>

    <h3>Blog</h3>

    <BlogBoxes all={false} />

<style>
    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .boxes > :global(div) {
        width: calc(50% - 16px);
    }

    .filler {
        display: flex;
    }
    .filler img {
        height: 180px;
        margin: auto;
    }
    .blogboxes {
        display: flex;
        flex-wrap: wrap;
        gap: 64px;
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
