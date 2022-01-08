<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Box from '$lib/Box.svelte';
	import BlogBox from '$lib/BlogBox.svelte';
</script>

<Hero />

<div class="boxes">
    <Box>
        <h3>O nás</h3>
        <p>
            Jsme projekt spolku Herní historie, jehož cílem je zachovávat herní historii v rámci
České a Slovenské republiky. Naší hlavní činností je katalogizace a archivace všech
artefaktů spojených s herní historií, jako například časopisy, dobová zařízení nebo
média obsahující videoherní obsah. Spolupracujeme s řadou mezinárodních organizací
a chceme se zasloužit o to, aby u nás existovala oficiální instituce zastřešující
lokální stopu v tomto odvětví kultury.
        </p>
    </Box>
    <Box href="/mission">
        <h3>Mise a cíle</h3>
        <p>
            Interaktivní zábava je pořád velmi mladý obor. Můžeme sledovat, jak se každým dnem prohlubuje naše poznání herní historie a je potřeba, aby začaly vznikat organizované snahy. Rozhodli jsme se, že Česká a Slovenská Republika potřebuje reprezentaci v meznárodních snahách, na kterých se často podílíme. A s tím jsme se s nadšením pustili do projektu, který se bude aktivně snažit zachránit co nejvíce z počátků videoher.
        </p>
    </Box>

    <Box href="/projects">
        <h3>Projekty</h3>
        <p>
            Za naší existenci jsme spustili několik projektů jak v domácích kotlinách tak ve spolupráci se zahraničními institucemi. O každém z projektů se můžete dozvědět více a sledovat jeho vývoj.
        </p>
    </Box>
    <Box href="/services">
        <h3>Služby a technologie</h3>
        <p>
            V rámci našich archivářských činností si klademe za cíl uchovávat materiály a data za pomocí těch nejlepších technologií a nejvyšších současných standardů. Rádi pomůžeme i Vám zachránit data z obskurních médií, či zorganizovat projekt na digitalizaci celého archivu.  
        </p>
    </Box>

    <div class="filler">
		<img src="/illu/illu_03.png" alt="">
    </div>
    <Box href="/collection">
        <h3>Sbírka</h3>
        <p>
            Videohry bereme jako umění a součást lidské kultury, která si zaslouží uchování pro další generace. Proto budujeme obsáhlou sbírku herních a počítačových materiálů, a to předně těch v souvistlosti s Českem a Slovenskem. Zejména se zabýváme shromažďováním psaných materiálů, her na původních nosičích, a dobových strojů. Všechny předměty v naší sbírce inventarizujeme, třídíme, a bezpečně uchováváme.
        </p>
    </Box>
</div>

    <h3>Blog</h3>
    <!-- TODO deduplicate -->
    <div class="blogboxes">
        <BlogBox href="/blog/1-svycarske-dobrodruzstvi"
            title="Švýcarské dobrodružství"
        >
            Krátce po té, co jsem se oficiálně zapojil do činnosti spolku Herní historie, stala se věc. Už si bohužel napamatuji, kdo s ní přišel, ale protože pro mě každá věc co smrdí dobrodružstvím, je věcí šíleně neodolatelnou, okamžitě jsem se přihlásil a dokonce jsem nabídl i svá rychlá kola. O jakou věc, že se jedná? Výlet do Švýcarska.
        </BlogBox>
    </div>

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