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
            <p>Jiří Bernášek - autor několika článků o československých televizních tenisech - přispěl <a href="https://herniarchiv.cz/articles/94-letem-svetem-televiznich-tenisu/">dalším článkem</a>, tentokrát o světových ponzích.</p>
        {/snippet}
    </Loc>

    <Figure image={img["01.jpg"]} />
</section>
