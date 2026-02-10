<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
	import Figure from "$src/lib/components/Figure.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost}>
    <Loc>
        {#snippet cs()}
            <p>PSM2 u nás začal vycházet v únoru 2002 ve stejném vydavatelství jako Oficiální PS Magazín a Score. Šéfredaktor byl, stejně jako v OPSM, Jan Bludr Modrák. Cena byla 99Kč, ale chyběl demodisk. PSM2 vyšlo jen 16 čísel, poslední v květnu 2003. Dobové články shrnující jednotlivá čísla časopisu jsou dohledatelné na Doupěti.</p>
            <p>Celý PSM2 magazín je k dispozici na <a href="https://archive.org/details/cz-psm2/">Internet Archive</a>.</p>
            <p>Časopis také najdete v naší <a href="https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/8">Databázi časopisů</a>.</p>
        {/snippet}
    </Loc>
    <Figure src="/photos/blog-posts/psm2_magazin.jpg" />
</BlogPostPage>