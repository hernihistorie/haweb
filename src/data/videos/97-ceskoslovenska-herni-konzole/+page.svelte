<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
</script>

<PageLang cs en />

<!-- TODO: draft intro -->
<Loc>
    {#snippet cs()}
        <p>
            Na konci sedmdesátých let se na pultech československých obchodů objevila herní konzole
            Tesla XD-8001, která byla na svou dobu unikátní: všechny její součásti včetně čipů byly
            vyvinuty a vyrobeny u nás. Youtubový kanál Tajemno a záhady o ní s naší pomocí natočil
            díl.
        </p>
        <p>
            Pokud vás zajímá, jak konzole funguje uvnitř, přečtěte si naši sérii článků
            <a href={localizeHref("/articles/67-pong-xd8001-pod-drobnohledem")}
                >Televizní hra Tesla XD-8001 pod drobnohledem</a
            >.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            At the end of the 1970s, the Tesla XD-8001 game console appeared on the shelves of
            Czechoslovak shops. It was unique for its time: all of its parts, chips included, were
            developed and made in Czechoslovakia. The YouTube channel Tajemno a záhady made an
            episode about it with our help.
        </p>
        <p>
            If you want to know how the console works on the inside, read our article series
            starting with
            <a href={localizeHref("/articles/67-pong-xd8001-pod-drobnohledem")}
                >The Tesla XD-8001 television game under the microscope</a
            >.
        </p>
        <p><em>The video is in Czech.</em></p>
    {/snippet}
</Loc>
