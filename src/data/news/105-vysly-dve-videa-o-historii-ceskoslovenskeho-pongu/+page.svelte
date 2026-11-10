<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
    import VideoCard from "$src/lib/components/post/VideoCard.svelte";
    import { articleImages } from "$src/lib/articleImages";
    import consoleVideo from "$src/data/videos/97-ceskoslovenska-herni-konzole/blog_post";
    import makingVideo from "$src/data/videos/108-jak-se-vyrabela-ceskoslovenska-herni-konzole/blog_post";

    const img = articleImages(
        import.meta.glob("./img/*", {
            eager: true,
            query: "?w=1600;800&enhanced",
            import: "default",
        }),
        import.meta.glob("./img/*", { eager: true, import: "default" }),
        import.meta.glob("./img/*", {
            eager: true,
            query: "?as=meta:width;height",
            import: "default",
        }),
    );
</script>

<PageLang cs en />

<section>
    <Loc>
        {#snippet cs()}
            <p>
                Předseda našeho spolku Vojtěch Straka vystoupil ve dvou videích od kanálu <em
                    >Tajemno a záhady</em
                >, kde vypráví o historii vzniku československého tenisu.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                The chairman of our association Vojtěch Straka appeared in two videos by the
                <em>Tajemno a záhady</em> channel, in which he talks about how the Czechoslovak TV tennis
                came to be.
            </p>
            <p><em>The videos are in Czech.</em></p>
        {/snippet}
    </Loc>

    <div class="videos">
        <VideoCard post={consoleVideo} compact large />
        <VideoCard post={makingVideo} compact large />
    </div>

    <Figure image={img["01.jpg"]} />
</section>

<style>
    .videos {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 1em 0;
    }
</style>
