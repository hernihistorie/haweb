<script lang="ts">
    import type { Project } from "$src/types";
    import type { Snippet } from "svelte";
	import Meta from "./Meta.svelte";
	import Loc from "./Loc.svelte";

    interface Props {
        project: Project;
        children: Snippet;
    }

    let { project, children }: Props = $props();
</script>

<Meta title={project.fullname ?? project.name} />

<article class="thin">
    <a href="/projects" style="margin-bottom: -12px;">
        <Loc cs="Projekty Herního archivu" en="Czechoslovak Game Archive Projects" />
    </a>
    <h2>
        <Loc text={project.fullname ?? project.name} />
    </h2>
    {@render children?.()}
</article>

<style>
    a {
        text-decoration: none; 
    }

    h2 {
        margin-top: 0.2em;
    }
</style>