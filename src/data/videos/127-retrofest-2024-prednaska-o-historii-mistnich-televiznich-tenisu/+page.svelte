<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Přednáška o historii televizních tenisů ve světě a hlavně u nás, kde jde o nejstarší
            herní přístroje. Slajdy jsou v angličtině, komentář v češtině.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            A talk on the history of TV tennis games around the world and especially in our region,
            where they are the oldest gaming devices. The slides are in English, the commentary in
            Czech.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
