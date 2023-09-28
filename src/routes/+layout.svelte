<script lang="ts">
	import { pageTitle } from '../stores.js'
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';

	$pageTitle = "";
	$: actualTitle = $pageTitle ? $pageTitle + " - Herní archiv" : "Herní archiv";
</script>

<svelte:head>
	<title>{actualTitle}</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
    main {
        max-width: var(--max-width);
        margin: auto;
		padding: 0 16px 0 16px;
    }
</style>