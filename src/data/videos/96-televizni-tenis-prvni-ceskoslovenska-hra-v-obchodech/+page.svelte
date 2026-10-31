<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { eventHref } from "#lib/posts.js";
    import bytefest2025 from "$src/data/events/bytefest-2025/event";

    const eventUrl = localizeHref(eventHref(bytefest2025));
</script>

<PageLang cs en />

<!-- TODO: draft intro, to be replaced with a proper abstract of the talk -->
<Loc>
    {#snippet cs()}
        <p>
            Na <a href={eventUrl}>ByteFESTu 2025</a> v pražském Toulcově dvoře vystoupil předseda našeho
            spolku Vojtěch Straka s přednáškou o televizním tenisu, první československé hře, která se
            dostala na pulty obchodů.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            At <a href={eventUrl}>ByteFEST 2025</a> at Toulcův dvůr in Prague, the chairman of our association,
            Vojtěch Straka, gave a talk about TV tennis, the first Czechoslovak game to make it onto shop
            shelves.
        </p>
        <p><em>The talk is in Czech.</em></p>
    {/snippet}
</Loc>
