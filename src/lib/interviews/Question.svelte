<script lang="ts">
	import type { Person } from "$src/types";

    export let speaker: Person;
</script>

<div class="question">
    <strong><span style="color: {speaker.color || 'default'};">{ speaker.shortname }</span>:</strong> <slot />
</div>

<style>
    .question {
        /* font-size: larger; */
        text-align: left;
        margin-left: 60px;
        margin-bottom: 20px;
        font-style: italic;
        line-height: 1.4;
    }
</style>