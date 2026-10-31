<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { eventHref } from "#lib/posts.js";
    import besitka2025 from "$src/data/events/besitka-2025/event";

    const eventUrl = localizeHref(eventHref(besitka2025));
    const interviewsUrl = localizeHref("/interviews");
</script>

<PageLang cs en />

<!-- TODO: draft intro, to be replaced with a proper abstract of the talk -->
<Loc>
    {#snippet cs()}
        <p>
            Na <a href={eventUrl}>2. BeSÍŤce</a> v pražském kině Ponrepo, věnované herním paratextům,
            vystoupil také člen našeho spolku Rudolf Jan Suchý s přednáškou o orální historii a digitálních
            hrách. Vzpomínky vývojářů, hráčů a dalších pamětníků zachycují kontext, který samotné hry
            ani dobové materiály nezachovají.
        </p>
        <p>
            Rozhovory, které jsme natočili, najdete na stránce
            <a href={interviewsUrl}>projektu Rozhovory</a>.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            At the <a href={eventUrl}>2nd BeSÍŤka</a> in Prague's Ponrepo cinema, dedicated to game paratexts,
            a talk about oral history and digital games was also given by Rudolf Jan Suchý, a member of
            our association. The memories of developers, players and other witnesses capture context
            that neither the games themselves nor period materials preserve.
        </p>
        <p>
            You can find the interviews we have recorded on the page of the
            <a href={interviewsUrl}>Interviews project</a>.
        </p>
        <p><em>The talk is in Czech.</em></p>
    {/snippet}
</Loc>
