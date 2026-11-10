<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Navazující díl kanálu Tajemno a záhady k videu
            <a href={localizeHref("/videos/97-ceskoslovenska-herni-konzole")}
                >Československá herní konzole</a
            >. V rozhovoru předseda našeho spolku Vojtěch Straka vypráví o konzoli Tesla XD-8001 a
            jejím vzniku to, co se do prvního dílu nevešlo.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            A follow-up by the Tajemno a záhady channel to the video
            <a href={localizeHref("/videos/97-ceskoslovenska-herni-konzole")}
                >A Czechoslovak Game Console</a
            >. In an interview, the chairman of our association Vojtěch Straka talks about the Tesla
            XD-8001 console and how it came to be, covering what didn't fit into the first episode.
        </p>
        <p><em>The video is in Czech.</em></p>
    {/snippet}
</Loc>
