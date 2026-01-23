<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost}>
    <p>Dnes jsme vytáhli náš nerozbalený počítač PC16NB “Honza” s účelem jej repasovat na případné výjezdy nebo jiné účely. Honzu jsme vybalili z letitého kartonu a začali diagnostikovat potenciální problémy, abychom mohli počítač po 35 letech konečně spustit.
    <p><img src="/photos/blog-posts/honza_oprava.jpg" width="100%">
</BlogPostPage>