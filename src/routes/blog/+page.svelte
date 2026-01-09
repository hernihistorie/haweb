<script lang="ts">
	import Meta from '$src/lib/components/layout/Meta.svelte';
	import BlogBoxes from './BlogBoxes.svelte';
	import PageLang from "$src/lib/components/PageLang.svelte";

	let { data } = $props();
</script>

<PageLang cs />

<Meta title="Blog" />

<h2>Blog</h2>

<BlogBoxes posts={data.blogPosts}/>