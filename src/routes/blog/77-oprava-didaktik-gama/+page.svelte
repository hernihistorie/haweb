<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost}>
    <p>Ačkoliv je v naší sbírce Didaktiků Gama a Didaktiků M celá řada, tak smutnou pravdou je, že většina z nich se k nám dostala již v nefunkčním stavu. Proto jsme rádi, že Lukáš Nevařil při své návštěvě začal naše Didaktiky opravovat. Toto je jeden z nich.
    <p>(Foto od: Rudolf Jan Suchý)
    <p><img src="/photos/blog-posts/oprava-gama_1.jpg">
    <p><img src="/photos/blog-posts/oprava-gama_2.jpg">
    <p><img src="/photos/blog-posts/oprava-gama_3.jpg">
</BlogPostPage>