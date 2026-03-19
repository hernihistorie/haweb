<script lang="ts">
	import BlogPostPage from '$src/lib/components/blog/BlogPostPage.svelte';

	const { data } = $props();
</script>

<BlogPostPage post={data.blogPost}>
    <data.blogPostComponent />
</BlogPostPage>