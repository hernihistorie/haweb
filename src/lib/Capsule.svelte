<script lang="ts">
	import type { Snippet } from 'svelte';
    let props: {
        children?: Snippet;
    } = $props();
</script>

<span class="capsule">
    {@render props.children?.()}
</span>

<style>
    .capsule {
        background-color: var(--color-secondary);
        color: white;
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 0.9em;
        /* margin-left: 8px; */
        font-size: 18px;

        display: inline-block;
        vertical-align: middle;
        margin-bottom: 3px;

    }
</style>