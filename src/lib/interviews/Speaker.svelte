<script lang="ts">
	import type { Person } from "$src/types";
    import { tooltip } from "@svelte-plugins/tooltips";

    interface Props {
        speaker: Person;
    }

    let { speaker }: Props = $props();
</script>

<strong><span use:tooltip={{ content: speaker.name }} style="color: {speaker.color || 'default'};">{ speaker.shortname }</span>:</strong>

<style>
</style>