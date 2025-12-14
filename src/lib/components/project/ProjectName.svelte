<script lang="ts">
	import type { Project } from "$src/types";
	import { localizeHref } from '$lib/paraglide/runtime';
	import Loc from "$lib/components/Loc.svelte";

    let { project, class: className , full=false}: { project: Project; class?: string; full?: boolean } = $props();
</script>

{#if project.url}
    <a href={project.url.startsWith('/') ? localizeHref(project.url) : project.url} class={className}>
        {#if full}
            <Loc text={project.fullname ?? project.name} />
        {:else}
            <Loc text={project.name} />
        {/if}
    </a>
{:else}
    <span class={className}>
        {#if full}
            <Loc text={project.fullname ?? project.name} />
        {:else}
            <Loc text={project.name} />
        {/if}
    </span>
{/if}
