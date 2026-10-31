<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { eventHref } from "#lib/posts.js";
    import bytefest2024 from "$src/data/events/bytefest-2024/event";

    const eventUrl = localizeHref(eventHref(bytefest2024));
    const projectUrl = localizeHref("/projects/videostop");
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Na <a href={eventUrl}>ByteFESTu 2024</a> v pražském Toulcově dvoře vystoupil člen našeho spolku
            Rudolf Jan Suchý s přednáškou o historii a archivaci hry z televizního pořadu Videostop. Původní
            program od Ing. Zdeňka Vodáka jsme získali a zpřístupnili v roce 2024 díky jeho autorovi,
            a návštěvníci ByteFESTu si ho u nás mohli i zahrát.
        </p>
        <p>
            Hru, scénáře k pořadu i rozhovory s jeho tvůrci najdete na stránce
            <a href={projectUrl}>projektu Videostop</a>.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            At <a href={eventUrl}>ByteFEST 2024</a> at Toulcův dvůr in Prague, Rudolf Jan Suchý, a member
            of our association, gave a talk about the history and preservation of the game from the Videostop
            TV show. We obtained and published the original program by Zdeněk Vodák in 2024 thanks to
            its author, and visitors of ByteFEST could also play it at our stand.
        </p>
        <p>
            You can find the game, the show's scripts and interviews with its creators on the page
            of the <a href={projectUrl}>Videostop project</a>.
        </p>
        <p><em>The talk is in Czech.</em></p>
    {/snippet}
</Loc>
