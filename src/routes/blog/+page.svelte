<script lang="ts">
	import Meta from '$src/lib/components/layout/Meta.svelte';
	import BlogBoxes from './BlogBoxes.svelte';
	import PageLang from "$src/lib/components/PageLang.svelte";

	const { data } = $props();
</script>

<PageLang cs notice="Most blog posts are only available in Czech." />

<Meta title="Blog" />

<h2>Blog</h2>

<BlogBoxes posts={data.blogPosts}/>