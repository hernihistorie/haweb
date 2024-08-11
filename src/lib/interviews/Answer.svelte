<script lang="ts">
	import type { Person } from "$src/types";

    export let speaker: Person;
</script>

<div class="answer">
    <strong><span style="color: {speaker.color || 'default'};">{ speaker.shortname }</span>:</strong> <slot />
</div>

<style>
    .answer {
        /* Brambora doesn't want this */
        /* text-align: justify; */
        margin-bottom: 20px;
        line-height: 1.4;
    }
</style>