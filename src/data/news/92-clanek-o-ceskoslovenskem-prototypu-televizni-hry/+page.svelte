<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
    import { articleImages } from "$src/lib/articleImages";
    import Arrow from "$src/lib/components/Arrow.svelte";
    import { localizeHref } from "$src/lib/paraglide/runtime";

    // Reuses the images from the full article (blog post 91)
    const img = articleImages(
        import.meta.glob("../../articles/91-prototyp-televiznich-her-z-tesly-vust/img/*", {
            eager: true,
            query: "?w=1600;800&enhanced",
            import: "default",
        }),
        import.meta.glob("../../articles/91-prototyp-televiznich-her-z-tesly-vust/img/*", {
            eager: true,
            import: "default",
        }),
        import.meta.glob("../../articles/91-prototyp-televiznich-her-z-tesly-vust/img/*", {
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
                Na letošním ByteFestu jsme odhalili vzácný kus prototypu televizního tenisu od
                TESLA-VÚST. O této raritě Jiří Bernášek napsal na našem webu článek, kde shrnuje
                jeho historii a zabývá se tím, jak funguje.
            </p>
            <Arrow href={localizeHref("/articles/91-prototyp-televiznich-her-z-tesly-vust")}>
                Přečíst článek Jiřího Bernáška
            </Arrow>
        {/snippet}
        {#snippet en()}
            <p>
                At this year's ByteFest, we unveiled a rare TV tennis prototype from TESLA-VÚST.
                Jiří Bernášek wrote an article about this rarity on our website, summarizing its
                history and explaining how it works.
            </p>
            <Arrow href={localizeHref("/articles/91-prototyp-televiznich-her-z-tesly-vust")}>
                Read Jiří Bernášek's article
            </Arrow>
        {/snippet}
    </Loc>

    <Figure image={img["01-cela-sestava.jpg"]} />
    <Figure image={img["02-Hry-VUST-tisk.jpg"]} />
    <Figure image={img["04-vnitrek-strana-soucastek.jpg"]} />
</section>
