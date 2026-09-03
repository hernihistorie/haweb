<script lang="ts">
    import Lazy from 'svelte-lazy';
	import type { Logo } from "$src/lib/logo";

    const data: {logo: Logo, title: string, origin?: string} = $props();

    function prefixUrlWithOrigin(url: string | undefined, origin: string | undefined): string | undefined {
        if (!url) return undefined;
        if (!origin) return url;
        if (url.startsWith("http://") || url.startsWith("https://")) return url;
        return origin + url;
    }
</script>

<Lazy keep={true}>
    <img
        src={prefixUrlWithOrigin(data.logo.url, data.origin)}
        alt={data.title + " - Logo"}
        class={`logo logo-bg-${data.logo.background_color}`}
    >
</Lazy>

<style>
    .logo {
        box-sizing: border-box;
        /* filter: drop-shadow(-3px -3px 0 #eee) drop-shadow(3px -3px 0 #eee) drop-shadow(-3px 3px 0 #eee) drop-shadow(3px 3px 0 #eee); */
        /* background: rgb(154, 154, 154); */
        padding: 0.5em;
        border-radius: 0.5em;
        max-height: 100px;
        /* filter: grayscale(100%) contrast(20000%); */
        transition: background-color 0.3s;
    }

    :global(html[data-theme="dark"]) .logo-bg-light {
        background-color: #fff;
    }

    :global(html[data-theme="light"]) .logo-bg-dark {
        background-color: #000;
    }

    .logo-bg-gray {
        background-color: #999;
    }
</style>