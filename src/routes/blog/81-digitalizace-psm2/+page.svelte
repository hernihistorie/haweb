<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
	import Figure from "$src/lib/components/Figure.svelte";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost}>
    <Loc>
        {#snippet cs()}
            <p><strong>PSM2</strong> u nás začal vycházet v únoru 2002 ve stejném vydavatelství jako <em>Oficiální PS Magazín</em> a <em>Score</em>. Šéfredaktor byl, stejně jako v OPSM, <strong>Jan Bludr Modrák</strong>. Cena byla 99Kč, ale chyběl demodisk. PSM2 vyšlo jen 16 čísel, poslední v květnu 2003. Dobové články shrnující jednotlivá čísla časopisu jsou <a href="https://doupe.zive.cz/vysledky-vyhledavani/?search=PSM2">dohledatelné na Doupěti</a>.</p>
            <p>Naše skeny celého PSM2 magazínu jsou k dispozici na <a href="https://archive.org/details/cz-psm2/">Internet Archive</a>.</p>
            <p>Časopis také najdete v naší <a href="https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/8">Databázi časopisů</a>.</p>
        {/snippet}
        {#snippet en()}
            <p><strong>PSM2</strong> started publishing in Czechia in February 2002 by the same publisher as the <em>Official PS Magazine</em> and <em>Score</em>. The editor-in-chief was <strong>Jan Bludr Modrák</strong>, same as OPSM. The price was 99 CZK, but there was no demo disc included. Only 16 issues of PSM2 were published, the last one in May 2003. Contemporary articles summarizing individual issues of the magazine can be <a href="https://doupe.zive.cz/vysledky-vyhledavani/?search=PSM2">found on Doupě</a>.</p>
            <p>Our scans of the entire PSM2 magazine are available on <a href="https://archive.org/details/cz-psm2/">Internet Archive</a>.</p>
            <p>You can also find the magazine in our <a href="https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/8">Magazine Database</a>.</p>
        {/snippet}
    </Loc>
    <Figure src="/photos/blog-posts/psm2_magazin.jpg" />
</BlogPostPage>