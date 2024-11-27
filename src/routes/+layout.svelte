<script lang="ts">	
	import { lang } from '../stores.js';
	import Meta from '$lib/Meta.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	if (typeof window !== 'undefined') {
		const url = new URL(window.location.href);
		const url_lang = url.searchParams.get('lang');
		if (url_lang) {
			console.log('setting language to', url_lang, 'due to lang url param');
			lang.set(url_lang);
		}
	}
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