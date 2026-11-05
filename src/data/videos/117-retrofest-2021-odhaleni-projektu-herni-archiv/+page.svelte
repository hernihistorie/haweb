<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>Ohlášení vzniku Československého herního archivu.</p>
    {/snippet}
    {#snippet en()}
        <p>The announcement of the founding of the Czechoslovak Game Archive.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
