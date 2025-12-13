<script lang="ts">
	import type { Person } from "$src/types";
    import { tooltip } from "@svelte-plugins/tooltips";

    interface Props {
        speaker?: Person;
        withColon?: boolean;
    }

    let { speaker, withColon = true }: Props = $props();
</script>

{#if speaker}
    <strong><span use:tooltip={{ content: speaker.name }} style="color: {speaker.color || 'default'};">{ speaker.shortname }</span>{withColon ? ':' : ''}</strong>
{/if}

<style>
    :root[data-theme="dark"] span {
        filter: invert(1) hue-rotate(180deg);
    }
</style>