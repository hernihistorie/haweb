<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
    import { articleImages } from "$src/lib/articleImages";
    import { localizeHref } from "$src/lib/paraglide/runtime";

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
                První číslo Oficiálního českého PlayStation magazínu vyšlo v květnu 1998. Vydávala
                ho společnost Art Consulting, která vydávala i časopis Score. Šlo o licencovanou
                českou mutaci britského Official PlayStation Magazine a za 230 Kč dostali čtenáři
                každý měsíc i CD s demoverzemi her. Od čísla 23 (březen 2000) OPSM převzal Jan
                Modrák a vedl ho až do konce. Po necelých šesti letech a 71 číslech OPSM skončil a
                volně na něj navázal časopis Play.
            </p>
            <p>
                Celý časopis naleznete naskenovaný na <a
                    href="https://archive.org/details/opsm-cz"
                    target="_blank">Internet Archive</a
                >.
                <br />A o časopisu naleznete i záznam
                <a href="https://herniarchiv.cz/magazines/catalog/opsm/" target="_blank"
                    >v naší databázi</a
                >.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                The first issue of the Official Czech PlayStation Magazine came out in May 1998. It
                was published by Art Consulting, which also published Score magazine. It was a
                licensed Czech edition of the British Official PlayStation Magazine, and for 230 CZK
                readers also got a CD with game demos every month. From issue 23 (March 2000), OPSM
                was run by Jan Modrák until its very end. After almost six years and 71 issues, OPSM
                ceased publication and was loosely succeeded by Play magazine.
            </p>
            <p>
                You can find the entire magazine scanned on the <a
                    href="https://archive.org/details/opsm-cz"
                    target="_blank">Internet Archive</a
                >.
                <br />You can also find an entry about the magazine
                <a href={localizeHref("/magazines/catalog/opsm/")}>in our database</a>.
            </p>
        {/snippet}
    </Loc>

    <Figure image={img["01.jpg"]} />
</section>
