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
            V dubnu 2025 se v pražském kině Ponrepo konala <a href={eventUrl}>2. BeSÍŤka</a>,
            setkání projektu pixelarchiv.cz Národního filmového archivu, tentokrát na téma herních
            paratextů. Mezi přednášejícími byl i předseda našeho spolku Vojtěch Straka, který
            představil paratexty uchovávané ve sbírkách Herní historie.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            In April 2025, the Ponrepo cinema in Prague hosted the <a href={eventUrl}>2nd BeSÍŤka</a
            >, a meeting of the National Film Archive's pixelarchiv.cz project, this time on the
            topic of game paratexts. Among the speakers was the chairman of our association, Vojtěch
            Straka, who presented the paratexts preserved in the collections of Herní historie.
        </p>
        <p><em>The talk is in Czech.</em></p>
    {/snippet}
</Loc>
