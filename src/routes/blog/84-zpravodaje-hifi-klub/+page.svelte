<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
	import Figure from "$src/lib/components/Figure.svelte";
	import Arrow from "$src/lib/components/Arrow.svelte";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost}>
    <Loc>
        {#snippet cs()}
            <p>Již nějakou dobu nezpět jsme k digitalizaci dostali zapůjčené zpravodaje pražského HiFi klubu z let 1972-1997. Přestože s hrami příliš nesouvisí, je to i tak zajímavý a vzácný materiál. Díky zaměření na spotřební elektroniku obsahuje občas zajímavé postřehy o výpočetní technice a zároveň hrál klub malou roli v prehistorii televizních her u nás. HiFi klub Svazarmu Praha dokonce vyráběl audiovizuální techniku a vydával hudbu pro prodej běžným spotřebitelům, což je mezi organizacemi podobného zaměření unikát. A právě z tohoto klubu se také oddělila legendární 602ka se zaměřením na počítače.</p>
            <Arrow href="https://archive.org/details/zpravodaje">Prohlédnout skeny Zpravodajů HiFi klubu</Arrow>
            <p>Přestože je to obsáhlá sbírka, má také mnohé mezery, takže pokud máte tyto nebo podobné klubové zpravodaje okolo elektroniky, určitě se ozvěte! Právě i k 602ce nám chybí velké množství zpravodajů.</p>
        {/snippet}
    </Loc>
    <Figure src="/photos/blog-posts/zpravodaje_hifi.jpg" />
</BlogPostPage>