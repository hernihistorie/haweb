<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
</script>

<PageLang cs />

<section>
    <p>
        Minulý rok měl člen našeho spolku Rudolf Jan Suchý přednášku o historii a archivaci hry z
        televizního pořadu Videostop. Záznam z této přednášky nyní naleznete na YouTubu ByteFESTu.
    </p>
    <p>
        Přednášku najdete <a
            href={localizeHref("/videos/101-historie-a-prezentace-hry-z-poradu-videostop")}>ZDE</a
        >.
        <Figure src="/photos/prednaska.jpg" />
    </p>
</section>
