<script lang="ts">
    import Lazy from 'svelte-lazy';
	import type { Logo } from "$src/lib/magdb";

    const data: {logo: Logo, magazine: {title: string}} = $props();
</script>

<Lazy keep={true}>
    <img
        src={"https://casopisy.herniarchiv.cz/" + data.logo.url}
        alt={data.magazine.title + " - Logo"}
        class="magazine-logo"
    >
</Lazy>