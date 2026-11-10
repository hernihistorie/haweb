<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>Poměřili jsme síly v Buláncích.</p>
    {/snippet}
    {#snippet en()}
        <p>We face off in Bulánci.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
