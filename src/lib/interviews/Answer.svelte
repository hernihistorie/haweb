<script lang="ts">
	import type { Person } from "$src/types";
	import Speaker from "./Speaker.svelte";

    export let speaker: Person;
</script>

<div class="answer">
    <Speaker {speaker} /> <slot />
</div>

<style>
    .answer {
        /* Brambora doesn't want this */
        /* text-align: justify; */
        margin-bottom: 20px;
        line-height: 1.4;
    }
</style>