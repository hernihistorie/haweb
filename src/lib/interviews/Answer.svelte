<script lang="ts">
	import type { Person } from "$src/types";
	import Speaker from "./Speaker.svelte";

    interface Props {
        speaker: Person;
        children?: import('svelte').Snippet;
    }

    let { speaker, children }: Props = $props();
</script>

<div class="answer">
    <Speaker {speaker} /> {@render children?.()}
</div>

<style>
    .answer {
        /* Brambora doesn't want this */
        /* text-align: justify; */
        margin-bottom: 20px;
        line-height: 1.4;
    }
</style>