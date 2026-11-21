<script lang="ts">
    import { page } from "$app/state";
    import { deLocalizeUrl, localizeHref } from "#lib/paraglide/runtime.js";
    import Loc from "#lib/components/Loc.svelte";
    import { INVENTORY, appPath, inventoryLoginHref } from "$src/lib/embedded";

    /** Sections of the collection, by their path within rhinventory */
    const items = [
        { path: "/", cs: "Sbírka", en: "Collection" },
        { path: "/asset", cs: "Předměty", en: "Items" },
        { path: "/file", cs: "Soubory", en: "Files" },
    ];

    // Framed pages keep the URL in sync through shallow navigation
    let url = $derived(deLocalizeUrl((page.shallow?.url ?? page.url).href));
    let path = $derived(appPath(INVENTORY, url.pathname));

    function isActive(itemPath: string): boolean {
        if (itemPath === "/") return path === "/";
        return path === itemPath || path.startsWith(`${itemPath}/`);
    }

    // Staff-only pages show the overview instead, with the requested page in `next`
    let loginHref = $derived(inventoryLoginHref(url.searchParams.get("next") || path + url.search));
</script>

<nav data-pagefind-ignore>
    <ul>
        {#each items as item (item.path)}
            <li>
                <a
                    href={localizeHref(`${INVENTORY.prefix}${item.path.replace(/\/?$/, "/")}`)}
                    class:active={isActive(item.path)}
                    aria-current={isActive(item.path) ? "page" : undefined}
                >
                    <Loc cs={item.cs} en={item.en} />
                </a>
            </li>
        {/each}
    </ul>
    <a class="login" href={loginHref}><Loc cs="Přihlásit se" en="Log in" /></a>
</nav>

<style>
    nav {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: 0 1em;
        max-width: 1170px;
        margin: 0 auto 1em auto;
        border-bottom: 2px solid var(--color-secondary);
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0 1.2em;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li > a {
        display: block;
        padding: 0.3em 0;
        /* Overlap the nav's border, so the active item's replaces it */
        margin-bottom: -2px;
        border-bottom: 2px solid transparent;
        color: var(--color-text);
        font-size: 22px;
        text-transform: uppercase;
        text-decoration: none;
    }

    li > a:hover {
        color: var(--color-primary);
    }

    li > a.active {
        color: var(--color-primary);
        border-bottom-color: var(--color-primary);
        font-weight: bold;
    }

    .login {
        text-decoration: none;
    }
</style>
