<script lang="ts">
	import type { Project } from "$src/types";
	import { localizeHref } from '$lib/paraglide/runtime';

    export let project: Project;
</script>

{#if project.url}
    <a href={project.url.startsWith('/') ? localizeHref(project.url) : project.url}>{ project.name }</a>
{:else}
    { project.name }
{/if}
