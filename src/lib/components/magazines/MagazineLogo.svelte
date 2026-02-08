<script lang="ts">
    import Lazy from 'svelte-lazy';
	import type { Logo } from "$src/lib/magdb";

    const data: {logo: Logo, magazine: {title: string}} = $props();
</script>

<Lazy keep={true}>
    <img
        src={"https://casopisy.herniarchiv.cz/" + data.logo.url}
        alt={data.magazine.title + " - Logo"}
        class={`magazine-logo magazine-logo-bg-${data.logo.background_color}`}
    >
</Lazy>

<style>
    .magazine-logo {
        box-sizing: border-box;
        /* filter: drop-shadow(-3px -3px 0 #eee) drop-shadow(3px -3px 0 #eee) drop-shadow(-3px 3px 0 #eee) drop-shadow(3px 3px 0 #eee); */
        /* background: rgb(154, 154, 154); */
        padding: 0.5em;
        border-radius: 0.5em;
        max-height: 100px;
        /* filter: grayscale(100%) contrast(20000%); */
        transition: background-color 0.3s;
    }

    :global(html[data-theme="dark"]) .magazine-logo-bg-light {
        background-color: #fff;
    }

    :global(html[data-theme="light"]) .magazine-logo-bg-dark {
        background-color: #000;
    }

    .magazine-logo-bg-gray {
        background-color: #999;
    }
</style>