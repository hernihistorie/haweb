<script lang="ts">
    import AuthorBio from "#lib/components/blog/AuthorBio.svelte";

    import Meta from "#lib/components/layout/Meta.svelte";
    import PostBoxes from "#lib/components/post/PostBoxes.svelte";

    const { data } = $props();
</script>

<Meta title={data.author.name} />

<AuthorBio author={data.author} />

<PostBoxes posts={data.authorPosts} />
