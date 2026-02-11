<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
	import Figure from "$src/lib/components/Figure.svelte";
    import Youtube from "svelte-youtube-embed";
	import Arrow from "$src/lib/components/Arrow.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost}>
    <Loc>
        {#snippet cs()}
            <p>Nedávno se nám dostal do rukou speciální kousek českého počítače <strong>IQ 151</strong>, který nepoužívá běžnou IQ klávesnici, ale má místo toho krásnou klávesnici mechanickou. Toto IQ si od nás půjčil <strong>Jan Heřman</strong>, který na svém kanále <a href="https://www.youtube.com/@Andrew_Tesla">Andrew Tesla</a> udělal o této krásce video. V něm se dozvíte, v čem všem se toto IQ 151 liší od těch, které jste mohli v 80. letech potkávat ve školách, nebo jak k mechanické klávesnici toto IQ asi přišlo.</p>
            <Arrow href="https://www.youtube.com/watch?v=pXCawKNNey0">Zkouknout video</Arrow>
            <div style="margin-bottom: 1em;"></div>
            <Youtube id="pXCawKNNey0" />
        {/snippet}
    </Loc>
    <!-- <Figure src="/photos/blog-posts/iq151_mechanicka_klavesnice.png" /> -->
</BlogPostPage>