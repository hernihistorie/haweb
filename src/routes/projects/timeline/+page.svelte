<script lang="ts">
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import PageLang from "#lib/components/PageLang.svelte";
    import TimelineProjectBox from "./TimelineProjectBox.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import ProjectsMenu from "$src/lib/components/project/ProjectsMenu.svelte";
    import { projects } from "$src/data/projects";
    import type { Project } from "$src/types";
    import type { Snippet } from "svelte";

    type TimelineItem = {
        year: number;
        project: Project;
        /** Shown instead of the project's description */
        content?: Snippet;
    };

    // Entries which aren't projects with their own project.ts
    const milestones: TimelineItem[] = [
        {
            year: 2023,
            project: { name: "Orálněhistorické rozhovory", url: "/interviews/" },
            content: interviews,
        },
        { year: 2023, project: { name: "Digitalizace fotografií" }, content: photos },
        { year: 2022, project: { name: "Zálohování datových nosičů" }, content: media },
        {
            year: 2021,
            project: { name: "Inventarizace sbírky", url: "/inventory/" },
            content: inventory,
        },
        {
            year: 2021,
            project: { name: "Sbírka Českých a Slovenských her" },
            content: czechoslovakGames,
        },
        { year: 2020, project: { name: "Česko-Slovenská spolupráce" }, content: slovakia },
        { year: 2020, project: { name: "Museé Bolo" }, content: museeBolo },
        { year: 2020, project: { name: "Integrované čipy od Tesly" }, content: tesla },
        {
            year: 2019,
            project: {
                name: "Projekt Game Informer",
                url: "https://www.gameinformer.com/2019/12/05/video-game-history-foundation-keeping-history-alive",
            },
            content: gameInformer,
        },
        { year: 2018, project: { name: "ReTrip", url: "https://retrip.cz" }, content: retrip },
        {
            year: 2017,
            project: { name: "Sbírka herních tiskovin", url: "/magazines/" },
            content: magazines,
        },
        {
            year: 2016,
            project: { name: "Národní Muzeum", url: "https://www.nm.cz/" },
            content: nationalMuseum,
        },
        {
            year: 2015,
            project: { name: "RetroHerna", url: "https://retroherna.org" },
            content: retroherna,
        },
    ];

    // Newest first; the sort is stable, so projects come before milestones within a year
    const items: TimelineItem[] = [
        ...projects.flatMap((project) => (project.year ? [{ year: project.year, project }] : [])),
        ...milestones,
    ].sort((a, b) => b.year - a.year);
</script>

<Meta title={{ cs: "Projekty", en: "Projects" }} />
<!--<h2><a href="/projects">PROJEKTY</a> <div style="float: right">ČASOVÁ OSA</div></h2> -->

<ProjectsMenu />

<PageLang cs />

<div class="projects">
    <div class="timeline-line"></div>
    {#each items as { year, project, content }, i}
        <TimelineProjectBox
            {project}
            {year}
            left={i % 2 === 1}
            right={i % 2 === 0}
            children={content} />
    {/each}
</div>

{#snippet interviews()}
    Přibíráme mezi archivační techniky i metodu orálněhistorických rozhovorů. Vznikají dle metodiky
    Národního filmového archivu a naši členové prošli půlročním kurzem. Cílem je zaznamenat od
    dotazovaného i širší kontext jeho života a směřovat ho jen lehce, aby se ukázala i přirozenost
    jeho projevu. Hotové rozhovory ještě vyžadují přepis a redakci, ale poté jsou umístěny k <a
        href={localizeHref("/interviews/")}>veřejnému prohlížení</a
    >.
{/snippet}

{#snippet photos()}
    V rámci archivce dobové dokumentace vzniká sekce pro digitalizaci audiovizuálních médií. Záznamy
    herních akcí, interakce s hrami, nebo prostředí, kde jsou vyvíjeny, považujeme za opomíjenou,
    ale podstatnou součást paratextů. Prvotní motivací bylo získání většího množství <a
        href={localizeHref("/gallery/emil-fafek/")}
        >tématických fotografií z pozůstalosti Emila Fafka</a
    >.
{/snippet}

{#snippet media()}
    Nalezli jsme řešení na světové úrovni pro digitalizaci starých datových nosičů, jejihž obsah
    podléhá zkáze (tzv. <em>bitrot</em>). Zajistili jsme techniku pro práci s disketami, kazetami, a
    optickými médii. Navázali jsme spolupráci s širší komunitou a aktivně zálohujeme unikátní hry a
    programy českého a slovenkého původu. Na
    <a
        href="http://www.bytefest.cz/novinky/2023/10/17/bytefest-2023i#:~:text=D%C3%A1le%20zde%20bude%20z%C3%A1lohovac%C3%AD%20stanice%20od%20Hern%C3%ADho%20archivu"
        >ByteFestu v roce 2023</a> jsme naši digitalizační stanici poprvé představili na veřejné akci.
{/snippet}

{#snippet inventory()}
    Započat projekt systématického zadávání předmětů v naší sbírce do vlastního digitálního systému.
    Do systému inventáře se zadávají metadata o předmětu a jeho původu. Ke kažému předmětu je
    přiřazena fotografie, dále vytištěn štítek a uložena jeho pozice pro možnosti dohledání. Od roku
    2024 je značná část inventáře vedena veřejně a <a href={localizeHref("/inventory/")}
        >můžete do něj nahlédnout</a
    >.
{/snippet}

{#snippet czechoslovakGames()}
    Snaha ustanovit veřejně přístupnou sbírku fyzických kopií lokálních her, která není v soukromém
    vlastnictví. Byla již využita pro fotomateriály v rámci digitální výstavy <a
        href="https://scd.sk/hry/">"8-bit"</a> od Slovenského centra dizajnu.
{/snippet}

{#snippet slovakia()}
    Snaha o rozšíření záběru na Slovenskou Republiku byla posílená úzkou spoluprácí s Univerzitou
    sv. Cyrila a Metoda v Trnavě, přesněji její <a href="https://fmk.sk/tedi/"
        >Fakultou masmediálnej komunikácie</a
    >. Společně chceme budovat kvalitní zdroje ohledně herní historie pro využití ve výuce a
    výzkumu.
{/snippet}

{#snippet museeBolo()}
    Navázání vztahů v rámci Evropy a využití získaného know-how v prvním mezinárodním projektu který
    je pod naším spoluvedením. Spolupráce na organizaci a digitalizaci sbírek Švýcarského muzea
    informačních technologií <a href="https://www.museebolo.ch/?lang=en">Museé Bolo</a>.
{/snippet}

{#snippet tesla()}
    Zajištění technických informací okolo první Československé komerční hry - Televízního tenisu.
    Unikátní návrh herního hardwaru od Tesly Piěšťany byl <a href="http://www.seanriddle.com/tesla/"
        >nasnímán mikroskopem</a> a probíhají snahy o převedení do simulátoru.
{/snippet}

{#snippet gameInformer()}
    Výjezd našeho předsedy jako dobrovolníka v rámci aktivit Americké <a
        href="https://gamehistory.org/">Video Game History Foundation</a
    >. Bezprecedentní snaha masově digitalizovat herní materiály z archivů redakce herního časopisu
    Game Informer.
{/snippet}

{#snippet retrip()}
    První akce spoluorganizovaná naším spolkem, která dala prostor Českým vývojářům promluvit o
    jejich zkušenostech. Oslava lokální herní historie za sebou má dva úspěšné ročníky.
{/snippet}

{#snippet magazines()}
    Archiv tištěných materiálů, které jsou skvělým primárním zdrojem. Později jsme se zaměřili na
    její kompletaci jako náš první velký cíl. V současnosti se jedná pravděpodobně o nejobsáhlejší
    sbírku u nás.
{/snippet}

{#snippet nationalMuseum()}
    Zapůjčili jsme výbavu do výstavy "Retro". Spolupráci stále udržujeme a naši členové se podílí na
    herním obsahu v dalších expozicích.
{/snippet}

{#snippet retroherna()}
    Spolek, který zajišťuje Herní archiv, začal svojí aktivitu skrze interaktivní muzeum RetroHerna.
    Více informací najdete na <a href="https://retroherna.org">webu projektu</a>.
{/snippet}

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
    @media screen and (max-width: 515px) {
        li {
            font-size: 30px;
        }
    }
</style>
