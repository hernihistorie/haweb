<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost64 } from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost64}>
    <p>Lukáš Nevařil při své opravovací návštěvě opravil i Commodore PC-1. Mimo to mu přidělal také speaker. Commodore se hned po opravách s námi podíval na EuroPython, kde se mu ale po intenzivním používání rozbila disketovka. Nyní tedy čeká na řádně vypadající a fungující disketovkuu abychom mu ji mohli vyměněnit.
    <p>(Foto od: Lukáš Nevařil, Rudolf Jan Suchý)    
    <p><img src="/photos/blog-posts/commodore_pc_1-1.jpg">
    <p><img src="/photos/blog-posts/commodore_pc_1-2.jpg">
    <p><img src="/photos/blog-posts/commodore_pc_1-3.jpg">
</BlogPostPage>