<script lang="ts">
	import BlogBox from '$src/lib/components/blog/BlogBox.svelte';
	import type { BlogPost } from '$src/types';

	interface Props {
		posts: BlogPost[];
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

	@media only screen and (max-width: 1450px) {
		.blogboxes {
			gap: 59px;
		}
	}
</style>
