<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>Úvodní slovo k prvnímu ročníku našeho streamu RetroFest.</p>
    {/snippet}
    {#snippet en()}
        <p>The opening of the first edition of our RetroFest stream.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
