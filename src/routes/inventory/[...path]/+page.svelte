<script lang="ts">
    import { page } from "$app/state";
    import { deLocalizeUrl } from "#lib/paraglide/runtime.js";
    import EmbeddedFrame from "$src/lib/components/EmbeddedFrame.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import { INVENTORY, INVENTORY_ORIGIN } from "$src/lib/embedded";

    const TITLE_SUFFIX = " - Sbírka Herní Archiv";

    let { data } = $props();

    let frameTitle = $state("");
    let title = $derived(frameTitle.replace(TITLE_SUFFIX, "") || "Sbírka");

    /** rhinventory's login, which then returns to the page shown in the frame */
    let loginHref = $derived.by(() => {
        // The frame keeps the URL in sync through shallow navigation
        const url = page.shallow?.url ?? page.url;
        // Staff-only pages show the index instead, with the requested page in `next`
        let next = url.searchParams.get("next");
        if (!next) {
            const { pathname, search } = deLocalizeUrl(url.href);
            next = (pathname.slice(INVENTORY.prefix.length) || "/") + search;
        }
        return `${INVENTORY_ORIGIN}/login/github?${new URLSearchParams({ next })}`;
    });
</script>

<Meta {title} />

<div class="login">
    <a href={loginHref}><Loc cs="Přihlásit se" en="Log in" /></a>
</div>

<EmbeddedFrame app={INVENTORY} src={data.src} bind:title={frameTitle} />

<style>
    .login {
        text-align: right;
        margin: auto;
        margin-bottom: -1.5em;
        z-index: 1;
        position: relative;
        max-width: 1160px;
        /* Overlaps the frame's menu, which must stay clickable around the link */
        pointer-events: none;
    }

    .login a {
        text-decoration: none;
        pointer-events: auto;
    }
</style>
