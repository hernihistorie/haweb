<script lang="ts">
    import ThinBox from "#lib/components/ThinBox.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import { projects } from "$src/data/projects";

    interface Props {
        all: boolean;
    }

    let { all }: Props = $props();

    const HOMEPAGE_PROJECTS = 4;

    let shownProjects = $derived(all ? projects : projects.slice(0, HOMEPAGE_PROJECTS));
</script>

<div class="project-box">
    {#each shownProjects as project (project.url)}
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
