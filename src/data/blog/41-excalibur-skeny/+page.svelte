<script lang="ts">
	import Loc from "$lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
	import { localizeHref } from "$src/lib/paraglide/runtime";
</script>

<PageLang cs en />

<section>
    <Loc>
        {#snippet cs()}
            <p>Časopis Excalibur, jehož nulté číslo vyšlo v roce 1990, byl jedním z prvních časopisů o videohrách, který u nás vycházel a v kterém zároveň začínalo mnoho významných osobnostní herní žurnalistiky jako Jakub Červinka, Jan Eisler, Andrej Anastasov, Tomáš Mrkvička, Jan Tománek ad.</p>
            <p>Časopis jsme oskenovali téměř celý, ale několik čísel nám bohužel ještě chybí. Konkrétně jde o čísla: 0-10, 18+, 20+, 64, 66, 67, 69-72. Pokud by se náhodou našel někdo, kdo by byl ochotný se vzdát jednoho z výše zmíněných čísel, tak bychom byli velice vděčný (Konktaktujte nás na <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.)</p>
            <p>Oskenované Excalibury najdete všechny na <a href="https://archive.org/details/excalibur-magazine">Internet Archive</a>.</p>
            <p>A databázi s Excalibury zase v naší <a href={localizeHref("/magazines/catalog/excalibur/")}>Databázi časopisů</a>.</p>
        {/snippet}
        {#snippet en()}
            <p>The Excalibur magazine, the zeroth issue of which was published in 1990, was one of the first magazines about video games published in our country, and many significant figures in game journalism began their careers there, including Jakub Červinka, Jan Eisler, Andrej Anastasov, Tomáš Mrkvička, Jan Tománek, and others.</p>
            <p>We have digitized almost the entire magazine, but unfortunately we are still missing a few issues. That being specifically these issues: 0-10, 18+, 20+, 64, 66, 67, 69-72. If anyone happens to be willing to part with one of the previously-mentioned issues, we would be very grateful (Contact us at <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.)</p>
            <p>You can find all the digitized Excalibur issues at the <a href="https://archive.org/details/excalibur-magazine">Internet Archive</a>.</p>
            <p>And the database of Excalibur issues in our <a href={localizeHref("/magazines/catalog/excalibur/")}>Magazine Database</a>.</p>
        {/snippet}
    </Loc>
    <p><img src="/photos/blog-posts/excalibur.jpg" alt="Excalibur"></p>
</section>