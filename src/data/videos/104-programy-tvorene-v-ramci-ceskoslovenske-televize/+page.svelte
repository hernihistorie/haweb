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
            Na <a href={eventUrl}>ByteFESTu 2025</a> v pražském Toulcově dvoře vystoupil člen našeho
            spolku Rudolf Jan Suchý s přednáškou o programech, které v 80. letech vznikly pro pořady
            Československé televize jako Kurz rychlého čtení a Počítačová dilemata, o tom, jak televize
            představovala mikropočítače, a o vysílání programů v rámci rozhlasového pořadu Mikrofórum.
        </p>
        <p>Záznam přednášky zatím nemáme k dispozici, můžete si ale prohlédnout slajdy.</p>
    {/snippet}
    {#snippet en()}
        <p>
            At <a href={eventUrl}>ByteFEST 2025</a> at Toulcův dvůr in Prague, Rudolf Jan Suchý, a member
            of our association, gave a talk about the programs made in the 1980s for Czechoslovak
            Television shows such as Kurz rychlého čtení and Počítačová dilemata, about how television
            presented microcomputers, and about programs broadcast on the Mikrofórum radio show.
        </p>
        <p>The recording of the talk isn't available yet, but you can browse the slides.</p>
        <p><em>The slides are in Czech.</em></p>
    {/snippet}
</Loc>
