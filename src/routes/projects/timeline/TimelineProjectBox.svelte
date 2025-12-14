<script lang="ts">
    import type { Project } from "$src/types";
    import type { Snippet } from "svelte";
    import Box from '$lib/components/Box.svelte';
    import Loc from "$lib/components/Loc.svelte";
    import { localizeHref } from '$lib/components/paraglide/runtime';

    interface Props {
        project: Project;
        year: number;
        left?: boolean;
        right?: boolean;
        children?: Snippet;
    }

    let { project, year, left = false, right = false, children }: Props = $props();
    
    // Localize internal URLs (starting with /)
    let localizedUrl = $derived(project.url && project.url.startsWith('/') && !project.url.startsWith('//') ? localizeHref(project.url) : project.url);
</script>

<Box {left} {right}>
    <h3><span class="year">{year}</span> <a href={localizedUrl}><Loc text={project.name} /></a></h3>
    <p>
        {#if children}
            {@render children()}
        {:else}
            <Loc text={project.description} />
        {/if}
    </p>
</Box>
