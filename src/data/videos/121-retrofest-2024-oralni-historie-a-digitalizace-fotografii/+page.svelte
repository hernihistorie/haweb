<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Jak vedeme rozhovory s pamětníky místní herní kultury a jak digitalizujeme staré
            fotografie.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            How we interview people who lived through local gaming culture, and how we digitize old
            photographs.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
