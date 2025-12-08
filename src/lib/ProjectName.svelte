<script lang="ts">
	import type { Project } from "$src/types";
	import { localizeHref } from '$lib/paraglide/runtime';
	import Loc from "./Loc.svelte";

    let { project, class: className }: { project: Project; class?: string } = $props();
</script>

{#if project.url}
    <a href={project.url.startsWith('/') ? localizeHref(project.url) : project.url} class={className}>
        <Loc text={project.name} />
    </a>
{:else}
    <span class={className}><Loc text={project.name} /></span>
{/if}
