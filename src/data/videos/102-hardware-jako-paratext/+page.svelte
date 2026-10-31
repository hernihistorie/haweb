<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { eventHref } from "#lib/posts.js";
    import besitka2025 from "$src/data/events/besitka-2025/event";

    const eventUrl = localizeHref(eventHref(besitka2025));
</script>

<PageLang cs en />

<!-- TODO: draft intro, to be replaced with a proper abstract of the talk -->
<Loc>
    {#snippet cs()}
        <p>
            Na <a href={eventUrl}>2. BeSÍŤce</a> v pražském kině Ponrepo, věnované herním paratextům,
            vystoupil také člen výboru našeho spolku David „Sanqui“ Labský. Ve své přednášce se zamyslel
            nad tím, jak lze jako paratext chápat samotný hardware: počítač či konzole určuje, k jakým
            hrám se hráč dostane, jak je bude ovládat, a tím utváří celé generace hráčů. Řeč přišla na
            Didaktik, MAŤO, Město Robotů nebo Gravis Gamepad.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            At the <a href={eventUrl}>2nd BeSÍŤka</a> in Prague's Ponrepo cinema, dedicated to game paratexts,
            a talk was also given by David "Sanqui" Labský, a board member of our association. He considered
            how hardware itself can be understood as a paratext: a computer or console decides which games
            a player gets to play and how they will control them, and so shapes entire generations of
            players. Topics included the Didaktik, the MAŤO, Město Robotů and the Gravis Gamepad.
        </p>
        <p><em>The talk is in Czech.</em></p>
    {/snippet}
</Loc>
