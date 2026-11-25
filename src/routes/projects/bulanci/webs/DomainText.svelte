<script lang="ts">
    let { domain }: { domain: string } = $props();
</script>

<!-- Long domains break after a dot or a slash rather than anywhere -->
{#each domain.split(/(?<=[./])/) as part, i (i)}{#if i > 0}<wbr />{/if}{part}{/each}
