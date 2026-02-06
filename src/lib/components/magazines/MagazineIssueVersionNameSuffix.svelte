<script lang="ts">
	import Loc from "../Loc.svelte";

    const { nameSuffix }: {nameSuffix: string} = $props();
</script>

<span class="version-name-suffix" class:text-secondary={nameSuffix.toLowerCase() === 'standard'}>
    {#if nameSuffix}
        {#if nameSuffix.toLowerCase() === 'cd'}
            <Loc cs="s CD" en="w/ CD" />
        {:else if nameSuffix.toLowerCase() === 'dvd'}
            <Loc cs="s DVD" en="w/ DVD" />
        {:else if nameSuffix.toLowerCase() === 'standard'}
            <Loc cs="bez přílohy" en="w/o insert" />
        {:else}
            {nameSuffix}
        {/if}
    {/if}
</span>

<style>
    .version-name-suffix {
        white-space: nowrap;
    }
</style>