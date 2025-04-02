<script lang="ts">
	import ThinBox from '$src/lib/ThinBox.svelte';
    import Loc from "$src/lib/Loc.svelte";

    interface Props {
        all: boolean;
    }

    let { all }: Props = $props();
</script>

<div class={all ? "project-page": "main-page"}>
    <ThinBox project={all} href="/projects/bewesoft/" img="/photos/projects/bewesoft.jpg" show_arrow={false}>
        <h3>
            <a href="/projects/bewesoft/">
                <Loc
                    cs="Fond Jiřího Bernáška (BeWeSoft)"
                    en="Jiří Bernášek Collection (BeWeSoft)"
                />
            </a>
        </h3>
        <p><Loc
            cs="Jiří Bernášek je bývalým tvůrcem her a programů pro osmibitové počítače Atari. Tento fond obsahuje výběr několika jeho archivních disket obsahující programy a zdrojové kódy k Bernáškovým hrám a jinému softwaru."
            en="Jiří Bernášek is a former game and software developer for eight-bit Atari computers. This collection contains a selection of his archival floppy disks containing programs and source codes for Bernášek's games and other software."
        /></p>
    </ThinBox>

    <ThinBox project={all} href="/projects/atari-klub-citov/" img="/photos/projects/citov.jpg" show_arrow={false}>
        <h3>
            <a href="/projects/atari-klub-citov/">
                <Loc
                    cs="Atari klub Cítov"
                    en="Atari club Citov"
                />
            </a>
        </h3>
        <p><Loc
            cs="Počítačový klub Cítov fungoval od roku 1986 do revoluce v roce 1989. Tento projekt shromažďuje materiály spojené s činností tohoto klubu stejně jako s činností jeho členů po rozpadu klubu."
            en="Computer club Citov operated from 1986 until the revolution in 1989. This project collects materials related to the activities of the club as well as the activities of its members after the club's disbandment."
        /></p>
    </ThinBox>

    <ThinBox project={all} href="/projects/videostop/" title="Videostop" img="/photos/projects/videostop.jpg" show_arrow={false}>
        <p><Loc
            cs="Videostop byl populární soutěžní pořad vysílaný mezi lety 1985 a 2000 na ČST. V rámci projektu byly shromážděny materiály týkající se hry, která figurovala na konci každého dílu pořadu."
            en="Videostop was a popular game show broadcast between 1985 and 2000 on Czechoslovak Television. This project gathered materials related to the game that appeared at the end of each episode of the show."
        /></p>
    </ThinBox>

    {#if all}
    <ThinBox project={all} href="/gallery/emil-fafek/" img="/photos/projects/fafek.jpg" show_arrow={false}>
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

    <ThinBox project={true} href="https://www.vice.com/en/article/ouya-is-shutting-down-and-fans-are-preserving-games-before-they-disappear/" title="Ouya" img="/photos/projects/ouya.jpg" show_arrow={false}>
        <p>
            <Loc
                cs="Ouya byla neúspěšná herní konzole vyráběná mezi lety 2013 až 2015. Projekt proběhl před uzavřením online storefrontu Ouyi v roce 2019 a byl snahou archivovat digitální knihovnu této platformy."
                en="Ouya was an unsuccessful gaming console manufactured between 2013 and 2015. This project was conducted before the closure of Ouya's online storefront in 2019 and was an effort to archive the digital library of this platform."
            />
        </p>
    </ThinBox>
    {/if}
</div>

<style> 
    .main-page {
        display: flex;
        flex-wrap: flex;
        gap: 40px;
        width: 103.6%;
    }
    .project-page {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
    }
    @media only screen and (max-width: 1200px) {
        .main-page {
            width: 100%;
        }
    }
    @media only screen and (max-width: 800px) {
        .main-page, .project-page {
            flex-wrap: flex;
            flex-direction: column;
            width: 100%;
            gap: 32px;
        }
        .main-page :global(img), .project-page :global(img) {
            display: block;
            margin: auto;
            margin-bottom: 12px;
            width: 100%;
        }
    }
</style>