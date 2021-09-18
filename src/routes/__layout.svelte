<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
    main {
        max-width: 1400px;
        margin: auto;
    }
</style>