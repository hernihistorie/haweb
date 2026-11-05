<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>Stream jsme zakončili delším hraním Diabla.</p>
    {/snippet}
    {#snippet en()}
        <p>We close the stream with a longer session of Diablo.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
