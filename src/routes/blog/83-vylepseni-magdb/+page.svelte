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
            <p>Na webu přibylo nové vylepšení - vylepšili jsme naši databázi herních časopisů. Nová databáze má samozřejmě lepší a přehlednější uživatelské rozhraní, ale hlavně v ni najdete odkaz na oskenované časopisy (a to jak od nás, tak od jiných subjektů.)</p>
            <p>Novou databázi naleznete <a href="https://herniarchiv.cz/magazines/">ZDE</a>.</p>
        {/snippet}
    </Loc>
    <Figure src="/photos/homepage/magaziny.jpg" />
</BlogPostPage>