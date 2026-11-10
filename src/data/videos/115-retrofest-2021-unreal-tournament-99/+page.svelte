<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>Zahráli jsme si Unreal Tournament 99.</p>
    {/snippet}
    {#snippet en()}
        <p>We play Unreal Tournament 99.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
