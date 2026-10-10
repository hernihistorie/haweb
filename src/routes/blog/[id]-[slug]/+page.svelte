<script lang="ts">
    import PostPage from "#lib/components/post/PostPage.svelte";

    const { data } = $props();
</script>

<PostPage post={data.blogPost} series={data.series}>
    <data.blogPostComponent />
</PostPage>
