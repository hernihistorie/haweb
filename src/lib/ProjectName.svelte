<script lang="ts">
	import type { Project } from "$src/types";

    export let project: Project;
</script>

{#if project.url}
    <a href={project.url}>{ project.name }</a>
{:else}
    { project.name }
{/if}
