<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost}>
    <p>Spřátelený projekt <a href="https://nfa.cz/pixelarchiv/cs">Pixelarchiv.cz</a> pořádá příští čtvrtek (9. října) akci věnovanou ženám v herní kultuře. Na toto téma budou u jednoho stolu diskutovat ženy, které se v herní kultuře pohybují – ať už jde o herní vývojářky, manažerky nebo novinářky. O svých zkušenostech promluví ženy různých generací, s rozmanitým zázemím a odlišnými profesními drahami.
    <p><a href="https://fb.me/e/6m6PhDg5v">Událost naleznete zde.</a>
    <p>(Obrázek je oficiální propagací akce)   
    <p><img src="/photos/blog-posts/pixelarchiv_zeny.jpg">
</BlogPostPage>