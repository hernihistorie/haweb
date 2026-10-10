<script lang="ts">
    import BlogBox from "$src/lib/components/blog/BlogBox.svelte";
    import type { Post } from "$src/types";

    interface Props {
        posts: Post[];
    }

    let { posts }: Props = $props();
</script>

<div class="blogboxes" data-pagefind-ignore>
    {#each posts as post (post.id)}
        <BlogBox blogPost={post} />
    {/each}
</div>

<style>
    .blogboxes {
        display: flex;
        flex-wrap: wrap;
        gap: 64px;
    }

    .blogboxes :global(.blog-box.horizontal) {
        margin-inline: auto;
    }

    @media only screen and (max-width: 1450px) {
        .blogboxes {
            gap: 59px;
        }
    }
</style>
