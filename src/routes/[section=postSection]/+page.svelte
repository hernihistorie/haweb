<script lang="ts">
    import PostListPage from "#lib/components/post/PostListPage.svelte";

    const { data } = $props();
</script>

<PostListPage kind={data.kind} posts={data.posts} years={data.years} />
