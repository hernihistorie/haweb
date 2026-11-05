<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>V segmentu Talking Heads se dostává ke slovu Jetsy.</p>
    {/snippet}
    {#snippet en()}
        <p>Jetsy takes the floor in the Talking Heads segment.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
