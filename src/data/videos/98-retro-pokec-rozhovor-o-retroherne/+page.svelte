<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";

    const interviewUrl = "https://www.youtube.com/watch?v=O6DZSGkZ5Ck&t=1373s";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Kluci z Retro Hráče si nás, Vojtěcha Straku a Martina Štochla, odchytili na brněnském
            Game Accessu 2025 a vyptali se, jak se nám daří s RetroHernou i zbytkem projektů.
            Rozhovor je součástí obnoveného pořadu Retro Pokec, kde shrnujeme nedávnou historii
            našeho projektu i hry, které bychom doporučili. Naše část začíná
            <a href={interviewUrl}>ve 22:53</a>.
        </p>
        <p>
            Více o rozhovoru píšeme
            <a href={localizeHref("/news/71-rozhovor-retro-hrac")}>v naší novince</a>.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            The folks from Retro Hráč caught up with us, Vojtěch Straka and Martin Štochl, at Game
            Access 2025 in Brno and asked how RetroHerna and our other projects are doing. The
            interview is part of the revived Retro Pokec show, where we sum up the recent history of
            our project and the games we would recommend. Our part starts
            <a href={interviewUrl}>at 22:53</a>.
        </p>
        <p>
            We also wrote about the interview
            <a href={localizeHref("/news/71-rozhovor-retro-hrac")}>in our news</a>.
        </p>
        <p><em>The video is in Czech.</em></p>
    {/snippet}
</Loc>
