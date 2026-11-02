<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
    import { articleImages } from "$src/lib/articleImages";

    const img = articleImages(
        import.meta.glob('./img/*', { eager: true, query: '?w=1600;800&enhanced', import: 'default' }),
        import.meta.glob('./img/*', { eager: true, import: 'default' }),
        import.meta.glob('./img/*', { eager: true, query: '?as=meta:width;height', import: 'default' }),
    );
</script>

<PageLang cs />

<section>
    <Loc>
        {#snippet cs()}
            <p>Předseda našeho spolku Vojtěch Straka vystoupil ve dvou videích od kanálu Tajemno a záhady, kde vypráví o historii vzniku československého tenisu.
                <br/>Video <a href="https://www.youtube.com/watch?v=JrThogDnSr4" target="_blank">Československá herní konzole</a>
                <br/>Video <a href="https://www.youtube.com/watch?v=CwwGFGFsnCw" target="_blank"></a>Jak se vyráběla československá herní konzole</a></p>
        {/snippet}
    </Loc>

    <Figure image={img["01.jpg"]} />
</section>
