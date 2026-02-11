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
            <p>Na webu přibylo nové vylepšení - dali jsme naší databázi herních časopisů nový kabát. Teď má databáze samozřejmě lepší a přehlednější uživatelské rozhraní, a také se v ní zobrazuje více informací než předtím, ale hlavně v ní najdete odkazy na skeny časopisů (a to jak od nás, tak od jiných subjektů.)</p>
            <Arrow href="https://herniarchiv.cz/magazines/">Prohlédnout vylepšenou databázi časopisů</Arrow>
        {/snippet}
        {#snippet en()}
            <p>A new improvement has been added to the website - we gave our game magazine database a new look. The database now has a better and clearer user interface, and it also displays more information than before, but most importantly, you will find in it links to scans of magazines (both from us and from other sources).</p>
            <Arrow href="https://herniarchiv.cz/magazines/">Browse the improved magazine database</Arrow>
        {/snippet}
    </Loc>
    <Figure src="/photos/homepage/magaziny.jpg" />
</BlogPostPage>