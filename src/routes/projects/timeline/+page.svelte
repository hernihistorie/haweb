<script lang="ts">
	import Meta from "$lib/components/Meta.svelte";
    import Loc from "$lib/components/Loc.svelte";
    import PageLang from "$lib/components/PageLang.svelte";
    import TimelineProjectBox from './TimelineProjectBox.svelte';
	import { localizeHref } from '$lib/components/paraglide/runtime';

    import { projectProgramyZCST } from '../programy-z-cst/project';
    import { projectBewesoft } from '../bewesoft/project';
    import { projectAtariKlubCitov } from '../atari-klub-citov/project';
    import { projectVideostop } from '../videostop/project';
    import { projectOuya } from '../ouya/project';
</script>

<Meta title={{cs: "Projekty", en: "Projects"}} />
<!--<h2><a href="/projects">PROJEKTY</a> <div style="float: right">ČASOVÁ OSA</div></h2> -->

<ul>
    <li><a href={localizeHref("/projects")}>
            <Loc
            cs="Projekty"
            en="Projects"
            />
        </a>
    <li><Loc    
        cs="Časová osa"
        en="Timeline"
        />
</ul>

<PageLang cs />

<div class="projects">
    <div class="timeline-line"></div>
    <TimelineProjectBox project={projectProgramyZCST} year={2025} left />
    <TimelineProjectBox project={projectBewesoft} year={2025} right />
    <TimelineProjectBox project={projectAtariKlubCitov} year={2024} left />
    <TimelineProjectBox project={projectVideostop} year={2024} right />
    
    <TimelineProjectBox project={{ name: "Orálněhistorické rozhovory", url: "/interviews/" }} year={2023} left>
        Přibíráme mezi archivační techniky i metodu orálněhistorických rozhovorů. Vznikají dle metodiky Národního filmového archivu a naši členové prošli půlročním kurzem. Cílem je zaznamenat od dotazovaného i širší kontext jeho života a směřovat ho jen lehce, aby se ukázala i přirozenost jeho projevu. Hotové rozhovory ještě vyžadují přepis a redakci, ale poté jsou umístěny k <a href={localizeHref("/interviews/")}>veřejnému prohlížení</a>.
    </TimelineProjectBox>
    
    <TimelineProjectBox project={{ name: "Digitalizace fotografií" }} year={2023} right>
        V rámci archivce dobové dokumentace vzniká sekce pro digitalizaci audiovizuálních médií. Záznamy herních akcí, interakce s hrami, nebo prostředí, kde jsou vyvíjeny, považujeme za opomíjenou, ale podstatnou součást paratextů. Prvotní motivací bylo získání většího množství <a href={localizeHref("/gallery/emil-fafek/")}>tématických fotografií z pozůstalosti Emila Fafka</a>.
    </TimelineProjectBox>
    
    <TimelineProjectBox project={{ name: "Zálohování datových nosičů" }} year={2022} left>
        Nalezli jsme řešení na světové úrovni pro digitalizaci starých datových nosičů, jejihž obsah podléhá zkáze (tzv. <em>bitrot</em>).  Zajistili jsme techniku pro práci s disketami, kazetami, a optickými médii.  Navázali jsme spolupráci s širší komunitou a aktivně zálohujeme unikátní hry a programy českého a slovenkého původu.  Na <a href="http://www.bytefest.cz/novinky/2023/10/17/bytefest-2023i#:~:text=D%C3%A1le%20zde%20bude%20z%C3%A1lohovac%C3%AD%20stanice%20od%20Hern%C3%ADho%20archivu">ByteFestu v roce 2023</a> jsme naši digitalizační stanici poprvé představili na veřejné akci.
    </TimelineProjectBox>
    
    <TimelineProjectBox project={{ name: "Inventarizace sbírky", url: "https://inventory.herniarchiv.cz/" }} year={2021} right>
        Započat projekt systématického zadávání předmětů v naší sbírce do vlastního digitálního systému. Do systému inventáře se zadávají metadata o předmětu a jeho původu. Ke kažému předmětu je přiřazena fotografie, dále vytištěn štítek a uložena jeho pozice pro možnosti dohledání. Od roku 2024 je značná část inventáře vedena veřejně a <a href="https://inventory.herniarchiv.cz/">můžete do něj nahlédnout</a>.
    </TimelineProjectBox>
    
    <TimelineProjectBox project={{ name: "Sbírka Českých a Slovenských her" }} year={2021} left>
        Snaha ustanovit veřejně přístupnou sbírku fyzických kopií lokálních her, která není v soukromém vlastnictví. Byla již využita pro fotomateriály v rámci digitální výstavy <a href="https://scd.sk/hry/">"8-bit"</a> od Slovenského centra dizajnu.
    </TimelineProjectBox>

    <TimelineProjectBox project={{ name: "Česko-Slovenská spolupráce" }} year={2020} right>
        Snaha o rozšíření záběru na Slovenskou Republiku byla posílená úzkou spoluprácí s Univerzitou sv. Cyrila a Metoda v Trnavě, přesněji její <a href="https://fmk.sk/tedi/">Fakultou masmediálnej komunikácie</a>. Společně chceme budovat kvalitní zdroje ohledně herní historie pro využití ve výuce a výzkumu.
    </TimelineProjectBox>

    <TimelineProjectBox project={{ name: "Museé Bolo" }} year={2020} left>
        Navázání vztahů v rámci Evropy a využití získaného know-how v prvním mezinárodním projektu který je pod naším spoluvedením. Spolupráce na organizaci a digitalizaci sbírek Švýcarského muzea informačních technologií <a href="https://www.museebolo.ch/?lang=en">Museé Bolo</a>.
    </TimelineProjectBox>

    <TimelineProjectBox project={{ name: "Integrované čipy od Tesly" }} year={2020} right>
        Zajištění technických informací okolo první Československé komerční hry - Televízního tenisu. Unikátní návrh herního hardwaru od Tesly Piěšťany byl <a href="http://www.seanriddle.com/tesla/">nasnímán mikroskopem</a> a probíhají snahy o převedení do simulátoru.
    </TimelineProjectBox>

    <TimelineProjectBox project={projectOuya} year={2019} left />

    <TimelineProjectBox project={{ name: "Projekt Game Informer", url: "https://www.gameinformer.com/2019/12/05/video-game-history-foundation-keeping-history-alive" }} year={2019} right>
        Výjezd našeho předsedy jako dobrovolníka v rámci aktivit Americké <a href="https://gamehistory.org/">Video Game History Foundation</a>. Bezprecedentní snaha masově digitalizovat herní materiály z archivů redakce herního časopisu Game Informer.
    </TimelineProjectBox>

    <TimelineProjectBox project={{ name: "ReTrip", url: "https://retrip.cz" }} year={2018} left>
        První akce spoluorganizovaná naším spolkem, která dala prostor Českým vývojářům promluvit o jejich zkušenostech. Oslava lokální herní historie za sebou má dva úspěšné ročníky.
    </TimelineProjectBox>

    <TimelineProjectBox project={{ name: "Sbírka herních tiskovin", url: "https://casopisy.herniarchiv.cz/" }} year={2017} right>
        Archiv tištěných materiálů, které jsou skvělým primárním zdrojem. Později jsme se zaměřili na její kompletaci jako náš první velký cíl. V současnosti se jedná pravděpodobně o nejobsáhlejší sbírku u nás.
    </TimelineProjectBox>

    <TimelineProjectBox project={{ name: "Národní Muzeum", url: "https://www.nm.cz/" }} year={2016} left>
        Zapůjčili jsme výbavu do výstavy "Retro". Spolupráci stále udržujeme a naši členové se podílí na herním obsahu v dalších expozicích.
    </TimelineProjectBox>

    <TimelineProjectBox project={{ name: "RetroHerna", url: "https://retroherna.org" }} year={2015} right>
        Spolek, který zajišťuje Herní archiv, začal svojí aktivitu skrze interaktivní muzeum RetroHerna. Více informací najdete na <a href="https://retroherna.org">webu projektu</a>.
    </TimelineProjectBox>
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
    ul {
		padding-left: 0px;
        list-style: none;
		display: flex;
		flex-wrap: wrap;
        text-align: left;
        margin-bottom: 29.8px;
	}

	li {
		padding: 0 27px 0 27px;
		border-left: 3px solid var(--color-secondary);
        text-transform: uppercase;
        font-size: 36px;
        font-weight: bold;
	}
    
    li > a { 
    /* font-weight: normal; */
    color: var(--color-black);
    /* text-decoration: none; */
    text-decoration-color: var(--color-secondary);
    text-decoration-thickness: 3px;
    }

    li:first-child {
		padding: 0 27px 0 0;
        border-left: none;
	}
</style>