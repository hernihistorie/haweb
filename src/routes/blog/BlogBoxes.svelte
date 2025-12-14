<script lang="ts">
	import BlogBox from '$lib/components/BlogBox.svelte';
	import { blogPosts } from './blog_posts';

	interface Props {
		all: boolean;
	}

	let { all }: Props = $props();

	// Show posts in reverse order (newest first), only first 3 if not showing all
	const displayedPosts = $derived(all ? blogPosts.toReversed() : blogPosts.toReversed().slice(0, 3));
</script>

<div class="blogboxes">
	{#each displayedPosts as post (post.id)}
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
