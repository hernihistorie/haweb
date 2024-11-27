<script lang="ts">
	import type { Person } from "$src/types";
	import Speaker from "./Speaker.svelte";

    interface Props {
        speaker: Person;
        children?: import('svelte').Snippet;
    }

    let { speaker, children }: Props = $props();
</script>

<div class="question">
    <Speaker {speaker} /> {@render children?.()}
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