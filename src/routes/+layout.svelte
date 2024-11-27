<script lang="ts">	
	import Meta from '$lib/Meta.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Meta title="" />

<Header />

<main>
	{@render children?.()}
</main>

<Footer />

<style>
    main {
        max-width: var(--max-width);
        margin: auto;
		padding: 0 16px 0 16px;
    }
</style>