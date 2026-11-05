<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Ukázka zachráněných her z kazety, včetně textovek, které vznikaly na konci 80. a začátku
            90. let.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            A look at games rescued from a tape, including text adventures made in the late 1980s
            and early 1990s.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
