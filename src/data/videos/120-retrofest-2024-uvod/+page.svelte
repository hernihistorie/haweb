<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>Přivítání na streamu, představení spolku Herní historie a toho, co nás čeká.</p>
    {/snippet}
    {#snippet en()}
        <p>
            A welcome to the stream, an introduction to the Herní historie association and a look at
            what's ahead.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
