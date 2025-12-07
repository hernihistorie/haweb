<script lang="ts">
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import Meta from '$lib/Meta.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import { setLocale } from '$src/lib/paraglide/runtime';
	import { page } from '$app/state';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	if (typeof window !== 'undefined') {
		const url = new URL(window.location.href);
		const url_lang = url.searchParams.get('lang');
		if (url_lang) {
			console.log('setting language to', url_lang, 'due to lang url param');
			setLocale(url_lang);
		}
	}

	// export const prerender = true;
</script>

<Meta title="" />

<Header />

<main>
	{@render children?.()}
</main>

<Footer />

<div style="display:none">
	<a href="/en">/en</a>
	<a href="/en/feed.xml">/en/feed.xml</a>
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<style>
    main {
        max-width: var(--max-width);
        margin: auto;
		padding: 0 16px 0 16px;
    }
</style>