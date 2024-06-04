<script lang="ts">	
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import '../app.css';
</script>

<MetaTags
  titleTemplate="%s | Herní archiv"
/>

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