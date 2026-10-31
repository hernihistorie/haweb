<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Nedávno se nám dostal do rukou speciální kousek československého počítače IQ 151, který
            nepoužívá běžnou klávesnici z kulatých telefonních tlačítek, ale má místo ní klávesnici
            mechanickou. Toto IQ si od nás půjčil Jan Heřman a na svém kanále Andrew Tesla o něm
            natočil video. Dozvíte se v něm, v čem se liší od strojů, které jste mohli v 80. letech
            potkávat ve školách, a odkud se vzaly jeho klávesy a spínače.
        </p>
        <p>
            Více o tomto kousku píšeme
            <a href={localizeHref("/news/82-video-iq151-mechanicka-klavesnice")}>v naší novince</a>.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            We recently got our hands on a special unit of the Czechoslovak IQ 151 computer, which
            doesn't use the usual keyboard made of round telephone buttons, but has a mechanical one
            instead. Jan Heřman borrowed this IQ from us and made a video about it on his channel,
            Andrew Tesla. In it, you'll learn how it differs from the machines you might have
            encountered in schools in the 80s, and where its keycaps and switches came from.
        </p>
        <p>
            We also wrote about this unit
            <a href={localizeHref("/news/82-video-iq151-mechanicka-klavesnice")}>in our news</a>.
        </p>
        <p><em>The video is in Czech.</em></p>
    {/snippet}
</Loc>
