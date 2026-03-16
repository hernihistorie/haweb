<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
	import Figure from "$src/lib/components/Figure.svelte";
	import Arrow from "$src/lib/components/Arrow.svelte";
	import { localizeHref } from "$src/lib/paraglide/runtime";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost}>
    <Loc>
        {#snippet cs()}
            <p>Již nějakou dobu nezpět jsme k digitalizaci dostali zapůjčené <strong>zpravodaje pražského Hi-Fi klubu z let 1972-1997</strong>. Přestože s hrami příliš nesouvisí, je to i tak zajímavý a vzácný materiál. Díky zaměření na spotřební elektroniku obsahuje občas zajímavé postřehy o výpočetní technice a zároveň hrál klub malou roli v prehistorii televizních her u nás. Hi-Fi klub Svazarmu Praha dokonce vyráběl audiovizuální techniku a vydával hudbu pro prodej běžným spotřebitelům, což je mezi organizacemi podobného zaměření unikát. A právě z tohoto klubu se také oddělila legendární 602ka se zaměřením na počítače.</p>
            <Arrow href="https://archive.org/details/zpravodaje">Prohlédnout skeny Zpravodajů Hi-Fi klubu</Arrow>
            <p>Přestože je to obsáhlá sbírka, má také mnohé mezery, takže pokud máte tyto nebo podobné klubové zpravodaje okolo elektroniky, určitě se <a href={localizeHref('/contact')}>ozvěte</a>! Právě i k 602ce nám chybí velké množství zpravodajů.</p>
        {/snippet}
        {#snippet en()}
            <p>Some time ago, we received on loan for digitization <strong>journals of the Prague Hi-Fi club from 1972-1997</strong>. Although not directly related to games, it is still interesting and rare material. Thanks to its focus on consumer electronics, it occasionally contains interesting observations about computing technology, and the club also played a small role in the prehistory of video games in Czechoslovakia. The Hi-Fi club of Svazarm Prague even manufactured audiovisual equipment and released music for sale to regular consumers, which is unique among organizations with a similar focus. And it was from this club that the legendary group 602, focused on computers and later called Software602, split off.</p>
            <Arrow href="https://archive.org/details/zpravodaje">Browse scans of the Hi-Fi club journal</Arrow>
            <p>Although this is an extensive collection, it also has many gaps, so if you have these or similar club newsletters about electronics, please <a href={localizeHref('/contact')}>get in touch</a>! We are also missing a large number of newsletters for the 602 group specifically.</p>
        {/snippet}
    </Loc>
    <Figure src="/photos/blog-posts/zpravodaje_hifi.jpg" />
</BlogPostPage>