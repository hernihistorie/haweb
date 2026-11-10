<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Stream jsme zakončili hraním Legie, obskurní české hry s depresivním středověkým
            prostředím a fantasy prvky.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            We close the stream by playing Legie, an obscure Czech game with a gloomy medieval
            setting and fantasy elements.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
