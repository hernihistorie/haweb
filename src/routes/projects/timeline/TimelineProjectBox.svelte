<script lang="ts">
    import type { Project } from "$src/types";
    import type { Snippet } from "svelte";
    import Box from '$lib/Box.svelte';
    import Loc from "$src/lib/Loc.svelte";

    interface Props {
        project: Project;
        year: number;
        left?: boolean;
        right?: boolean;
        children?: Snippet;
    }

    let { project, year, left = false, right = false, children }: Props = $props();
</script>

<Box {left} {right}>
    <h3><span class="year">{year}</span> <a href={project.url}><Loc text={project.name} /></a></h3>
    <p>
        {#if children}
            {@render children()}
        {:else}
            <Loc text={project.description} />
        {/if}
    </p>
</Box>
