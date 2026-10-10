<script lang="ts">
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import BlogBoxes from "./BlogBoxes.svelte";
    import BlogYearNav from "./BlogYearNav.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";

    const { data } = $props();
</script>

<PageLang cs notice="Most blog posts are only available in Czech." />

<Meta title="Blog" />

<h2>Blog</h2>

<BlogYearNav years={data.blogYears} activeYear={null} />

<BlogBoxes posts={data.blogPosts} />

<BlogYearNav years={data.blogYears} activeYear={null} />
