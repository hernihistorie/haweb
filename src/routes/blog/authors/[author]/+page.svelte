<script lang="ts">
    import AuthorBio from '$lib/components/blog/AuthorBio.svelte';

	import Meta from '$lib/components/layout/Meta.svelte';
	import BlogBoxes from '../../BlogBoxes.svelte';

	let { data } = $props();
</script>

<Meta title={`Blog - ${data.author.name}`} />

<AuthorBio author={data.author} />

<BlogBoxes posts={data.authorBlogPosts} />
