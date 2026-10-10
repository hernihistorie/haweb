<script lang="ts">
    import PostPage from "#lib/components/post/PostPage.svelte";

    const { data } = $props();
</script>

<PostPage post={data.post} series={data.series}>
    <data.postComponent />
</PostPage>
