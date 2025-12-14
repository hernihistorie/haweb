<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<span class="key">
    {@render children?.()}
</span>

<style>
    .key {
        font-family: 'IBM Plex Mono', monospace;
        background-color: #f0f0f0;
        padding: 0.05em 0.5em;
        border-radius: 0.25em;
        border-color: #b0b0b0;
        border-style: solid;
        border-width: 1px 2px 3px 1px;
        font-size: 0.8em;
    }
</style>