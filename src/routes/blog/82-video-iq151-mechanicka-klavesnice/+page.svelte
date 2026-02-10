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
            <p>Nedávno se nám dostal do rukou speciální kousek IQ151, který nepoužívá klasickou IQ klávesnici, ale má krásnou klávesnici mechanickou. Toto IQ si od nás půjčil @Jan Heřman, který na svém kanále Andrew Tesla udělal o této krásce video. Zde se dozvíte, v čem všem se toto IQ151 liší od těch, které jste mohli v 80. letech potkávat ve školách, nebo jak k mechanické klávesnici toto IQ asi přišlo.</p>
            <p>Video naleznete <a href="https://www.youtube.com/watch?v=pXCawKNNey0">ZDE</a>.</p>
        {/snippet}
    </Loc>
    <Figure src="/photos/blog-posts/iq151_mechanicka_klavesnice.png" />
</BlogPostPage>