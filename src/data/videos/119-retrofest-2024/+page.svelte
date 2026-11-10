<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            28. ledna 2024 jsme na Twitchi odvysílali další ročník našeho nepravidelného streamu
            RetroFest. Ukázali jsme, na čem jsme ve spolku pracovali za poslední dva roky, od
            rozhovorů s pamětníky přes skenování časopisů po digitalizaci kazet a disket, a mezi tím
            jsme si zahráli retro hry. Nechyběla ani přednáška o historii místních televizních
            tenisů a společné hraní Unreal Tournamentu s diváky.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            On 28 January 2024 we broadcast another edition of our occasional RetroFest stream on
            Twitch. We showed what our association had been working on for the past two years, from
            interviews with people who lived through the era to scanning magazines and digitizing
            tapes and floppies, and played retro games in between. There was also a talk on the
            history of local TV tennis games and a round of Unreal Tournament with our viewers.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
