<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";

    const newsUrl = localizeHref(
        "/news/88-robot-karel-na-vinylove-desce-a-video-o-jeho-zalohovani",
    );
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Když Rudolf Jan Suchý a Agáta Trlidová dělali rozhovor s Tomášem Bartovským, autorem
            české verze Robota Karla, dostali od něj do archivu dvě vinylové desky s programy a
            instrukce k jejich používání. Jan Heřman z desek vydoloval několik programů pro ZX
            Spectrum, včetně dosud nezazálohované verze Karla, ale i Karla pro IQ 151. Na svém
            kanále Andrew Tesla o tom natočil video, v jehož první části si povídá s Rudolfem Janem
            Suchým o tom, jak a proč se Karel na LPčka vůbec dostal.
        </p>
        <p>
            Zachráněné programy si můžete stáhnout z našeho inventáře, odkazy najdete
            <a href={newsUrl}>v naší novince</a>.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            When Rudolf Jan Suchý and Agáta Trlidová interviewed Tomáš Bartovský, the author of the
            Czech version of Robot Karel, he gave them two vinyl records with programs and
            instructions on how to use them for our archive. Jan Heřman extracted several ZX
            Spectrum programs from the records, including a previously unpreserved version of Karel,
            but also Karel for the IQ 151. He made a video about it on his channel, Andrew Tesla,
            whose first part is a conversation with Rudolf Jan Suchý about how and why Karel ended
            up on vinyl in the first place.
        </p>
        <p>
            You can download the rescued programs from our inventory, the links are
            <a href={newsUrl}>in our news</a>.
        </p>
        <p><em>The video is in Czech.</em></p>
    {/snippet}
</Loc>
