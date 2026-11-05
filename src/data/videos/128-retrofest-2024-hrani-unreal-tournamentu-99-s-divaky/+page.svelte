<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>Zahráli jsme si Unreal Tournament 99 společně s diváky streamu.</p>
    {/snippet}
    {#snippet en()}
        <p>We play Unreal Tournament 99 together with the stream's viewers.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
