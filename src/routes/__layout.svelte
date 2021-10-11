<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

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