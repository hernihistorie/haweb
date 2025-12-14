<script lang="ts">
	import ThinBox from '$lib/components/ThinBox.svelte';
    import Loc from "$lib/components/Loc.svelte";
    import type { Project } from '$src/types';
	import { localizeHref } from '$lib/paraglide/runtime';

    import { projectProgramyZCST } from './programy-z-cst/project';
    import { projectBewesoft } from './bewesoft/project';
    import { projectAtariKlubCitov } from './atari-klub-citov/project';
    import { projectVideostop } from './videostop/project';
    import { projectEmilFafek } from '../gallery/emil-fafek/project';
    import { projectOuya } from './ouya/project';
    interface Props {
        all: boolean;
    }

    let { all }: Props = $props();

    const homepageProjects: Project[] = [projectProgramyZCST, projectBewesoft, projectAtariKlubCitov, projectVideostop];
    const allProjects: Project[] = [projectProgramyZCST, projectBewesoft, projectAtariKlubCitov, projectVideostop, projectEmilFafek, projectOuya];
</script>

<div class={all ? "project-page": "main-page"}>
    {#each (all ? allProjects : homepageProjects) as project}
        <ThinBox project={all} href={project.url} img={project.image} show_arrow={false}>
            <h3>
                <a href={project.url && project.url.startsWith('/') ? localizeHref(project.url) : project.url}>
                    <Loc text={project.name} />
                </a>
            </h3>
            <p><Loc text={project.description} /></p>
        </ThinBox>
    {/each}
</div>

<style> 
    .main-page {
        display: flex;
        flex-wrap: flex;
        gap: 25px;
        width: 100%;
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