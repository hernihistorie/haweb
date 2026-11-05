<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            19. prosince 2021 jsme na Twitchi odvysílali první ročník našeho nepravidelného streamu
            RetroFest. Hráli jsme hry, vyzpovídali jsme členy spolku v segmentech Talking Heads,
            vyslechli si přednášku a poprvé jsme veřejně ohlásili vznik Československého herního
            archivu.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            On 19 December 2021 we broadcast the first edition of our occasional RetroFest stream on
            Twitch. We played games, gave our members the floor in the Talking Heads segments, heard
            a talk, and announced the Czechoslovak Game Archive to the public for the first time.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
