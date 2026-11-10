<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>Přednáška s názvem Gesamtkunstwerk.</p>
    {/snippet}
    {#snippet en()}
        <p>A talk titled Gesamtkunstwerk.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
