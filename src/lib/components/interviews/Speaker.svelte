<script lang="ts">
	import type { Person } from "$src/types";
    import Tooltip from "sv-tooltip"

    interface Props {
        speaker?: Person;
        withColon?: boolean;
    }

    let { speaker, withColon = true }: Props = $props();
</script>

{#if speaker}
    <strong><Tooltip tip={speaker.name} top><span style="color: {speaker.color || 'default'};">{ speaker.shortname }</span></Tooltip>{withColon ? ':' : ''}</strong>
{/if}

<style>
    :root[data-theme="dark"] span {
        filter: invert(1) hue-rotate(180deg);
    }
</style>