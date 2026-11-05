<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            O herních časopisech, které patřily k prvním věcem, jimž jsme se začali věnovat, a o
            tom, jak je skenujeme a katalogizujeme.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            On game magazines, one of the first things we started working on, and how we scan and
            catalog them.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
