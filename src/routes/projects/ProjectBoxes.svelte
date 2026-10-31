<script lang="ts">
    import ThinBox from "#lib/components/ThinBox.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import type { Project } from "$src/types";

    import { projectProgramyZCST } from "./programy-z-cst/project";
    import { projectBewesoft } from "./bewesoft/project";
    import { projectAtariKlubCitov } from "./atari-klub-citov/project";
    import { projectVideostop } from "./videostop/project";
    import { projectEmilFafek } from "../gallery/emil-fafek/project";
    import { projectOuya } from "./ouya/project";
    import { projectFrantisekStarekCunas } from "./frantisek-starek-cunas/project";
    import { projectMagazines } from "../magazines/project";
    import { projectInterviews } from "../interviews/project";
    import { projectSbirka } from "./sbirka/project";
    interface Props {
        all: boolean;
    }

    let { all }: Props = $props();

    const homepageProjects: Project[] = [
        projectFrantisekStarekCunas,
        projectProgramyZCST,
        projectBewesoft,
        projectAtariKlubCitov,
    ];
    const allProjects: Project[] = [
        projectFrantisekStarekCunas,
        projectProgramyZCST,
        projectBewesoft,
        projectAtariKlubCitov,
        projectVideostop,
        projectSbirka,
        projectMagazines,
        projectInterviews,
        projectEmilFafek,
        projectOuya,
    ];
</script>

<div class="project-box">
    {#each all ? allProjects : homepageProjects as project}
        <ThinBox project={all} href={project.url} img={project.image} show_arrow={false}>
            {#snippet heading()}
                <Loc text={project.name} />
            {/snippet}
            <p><Loc text={project.description} /></p>
        </ThinBox>
    {/each}
</div>

<style>
    .project-box {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 25px;
    }
    @media only screen and (max-width: 800px) {
        .project-box {
            flex-wrap: flex;
            flex-direction: column;
            width: 100%;
            gap: 32px;
        }
        .project-box :global(img) {
            display: block;
            margin: auto;
            margin-bottom: 12px;
            width: 100%;
        }
    }
</style>
