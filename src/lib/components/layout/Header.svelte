<script lang="ts">
    import { slide } from "svelte/transition";

    import Loc from "#lib/components/Loc.svelte";
    import BurgerMenu from "$src/lib/components/layout/BurgerMenu.svelte";
    import LanguageSwitcher from "./LanguageSwitcher.svelte";
    import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks.svelte";
    import ThemeToggle from "./ThemeToggle.svelte";
    import { getLocale, localizeHref } from "#lib/paraglide/runtime.js";
    import { beforeNavigate } from "$app/navigation";
    import SearchLink from "./SearchLink.svelte";
    import { page } from "$app/state";
    import { pathnameStartswith } from "$src/lib/util";
    import { loc } from "$src/lib/loc";
    import type { LocalizedString, Project } from "$src/types";

    type MenuItem = {
        url: string;
        name: LocalizedString;
        submenu?: MenuItem[];
        /** Other pages, not in the submenu, where the item is active */
        alsoActive?: string[];
    };

    interface Props {
        /** Projects in the projects submenu */
        menuProjects: Pick<Project, "name" | "url">[];
    }

    let { menuProjects }: Props = $props();

    let menuItems: MenuItem[] = $derived([
        {
            url: "/about",
            name: { cs: "O nás", en: "About us" },
            submenu: [
                { url: "/about", name: { cs: "<b>O nás</b>", en: "<b>About us</b>" } },
                { url: "/contact", name: { cs: "Kontakty", en: "Contacts" } },
                { url: "/support", name: { cs: "Podpořte nás", en: "Support us" } },
            ],
        },
        { url: "/news", name: { cs: "Novinky", en: "News" } },
        { url: "/articles", name: { cs: "Články", en: "Articles" }, alsoActive: ["/videos"] },
        {
            url: "/projects",
            name: { cs: "Projekty", en: "Projects" },
            submenu: [
                {
                    url: "/projects",
                    name: { cs: "<b>Naše projekty</b>", en: "<b>Our projects</b>" },
                },
                ...menuProjects.map(({ name, url = "" }) => ({ name, url })),
            ],
        },
        {
            url: "/inventory/",
            name: { cs: "Sbírka", en: "Collection" },
        },
        {
            url: "/interviews",
            name: { cs: "Rozhovory", en: "Interviews" },
        },
        {
            url: "/magazines",
            name: { cs: "Časopisy", en: "Magazines" },
        },
    ]);
    let burgerMenuOpen = $state(false);
    let currentExpandedMenu: MenuItem | null = $state(null);

    // A menu item is active on its own page and on any of its submenu pages
    function isActive(menuItem: MenuItem): boolean {
        return [
            menuItem.url,
            ...(menuItem.submenu ?? []).map((item) => item.url),
            ...(menuItem.alsoActive ?? []),
        ].some((url) => url.startsWith("/") && pathnameStartswith(url));
    }

    // Compare by URL, as $state wraps the stored menu item in a proxy
    function isExpanded(menuItem: MenuItem): boolean {
        return currentExpandedMenu?.url === menuItem.url;
    }

    let resetExpandedMenu = () => {
        currentExpandedMenu = null;
    };

    beforeNavigate(({ shallow, type }) => {
        if (shallow && type === "goto") return;

        currentExpandedMenu = null;
        burgerMenuOpen = false;
    });
</script>

<header data-pagefind-ignore>
    <div class="logo">
        <a href={localizeHref("/")} onclick={resetExpandedMenu}>
            <img
                src={getLocale() == "cs"
                    ? "/ico/logo_herni_archiv.svg"
                    : "/ico/logo_czechoslovak_game_archive.svg"}
                alt={loc({ cs: "Herní archiv", en: "Czechoslovak Game Archive" })}
                height="62"
            />
        </a>
        {#if page.url.hostname === "localhost" || page.url.hostname === "127.0.0.1"}
            <div class="localhost">LOCALHOST</div>
        {/if}
    </div>
    <div class="menu">
        <div class="burger-menu">
            <BurgerMenu padding={"25px"} bind:open={burgerMenuOpen}>
                <ul class="burger-links">
                    <li class="burger-top-row">
                        <SearchLink />
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </li>
                    {#each menuItems as menuItem}
                        <li>
                            <a
                                href={menuItem.url.startsWith("/")
                                    ? localizeHref(menuItem.url)
                                    : menuItem.url}
                                onclick={() => (burgerMenuOpen = false)}
                                class:active={isActive(menuItem)}
                                ><Loc text={menuItem.name} /></a
                            >
                        </li>
                    {/each}
                </ul>
            </BurgerMenu>
        </div>
        <ul class="language-select">
            <li class="social-media-links">
                <SocialMediaLinks />
            </li>
            <li>
                <SearchLink />
            </li>
            <li>
                <ThemeToggle />
            </li>
            <li>
                <LanguageSwitcher />
            </li>
        </ul>
        <ul class="regular-links">
            {#each menuItems as menuItem, i}
                <!-- XXX this is a temporary hack -->
                {#if menuItem.submenu}
                    <li>
                        <button
                            class="link"
                            class:active={isActive(menuItem)}
                            onclick={() =>
                                (currentExpandedMenu =
                                    currentExpandedMenu?.url == menuItem.url ? null : menuItem)}
                            onkeyup={() =>
                                (currentExpandedMenu =
                                    currentExpandedMenu?.url == menuItem.url ? null : menuItem)}
                            tabindex="0"
                        >
                            <Loc text="{loc(menuItem.name)}  {isExpanded(menuItem) ? '▴' : '▾'}" />
                        </button>
                        {#if isExpanded(menuItem)}
                            <ul class="dropdown" transition:slide>
                                {#each menuItem.submenu as subMenuItem}
                                    <li>
                                        <a
                                            href={subMenuItem.url.startsWith("/")
                                                ? localizeHref(subMenuItem.url)
                                                : subMenuItem.url}
                                            onclick={resetExpandedMenu}
                                        >
                                            <Loc text={subMenuItem.name} />
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </li>
                {:else}
                    <li>
                        <a
                            href={menuItem.url.startsWith("/")
                                ? localizeHref(menuItem.url)
                                : menuItem.url}
                            onclick={resetExpandedMenu}
                            class:active={isActive(menuItem)}
                        >
                            <Loc text={menuItem.name} />
                        </a>
                    </li>
                {/if}
                {#if i == 3}
                    <li class="menu-break"></li>
                {/if}
            {/each}
        </ul>
    </div>
</header>

<style>
    header {
        max-width: var(--max-width);
        margin: auto;
        margin-bottom: 64px;
        padding: 0 16px 0 16px;

        display: flex;
        justify-content: space-between;
        align-content: middle;
    }

    .menu {
        margin: auto 0 auto 0;
    }

    .language-select {
        text-align: right;
        margin-right: 1px;
        position: relative;
        top: -32px;
    }

    ul {
        margin: auto;
        margin-right: -27px;
        list-style: none;
        display: flex;
        justify-content: end;
        flex-wrap: wrap;
    }

    li {
        padding: 0 27px 0 27px;
        border-left: 1px solid var(--color-secondary);
    }

    .social-media-links {
        padding-top: 0.4em;
    }

    .active {
        font-weight: bold;
    }

    .dropdown {
        flex-direction: column;
        position: absolute;
        padding: 0;
        flex-wrap: nowrap;
        margin-top: 4px;
        background-color: var(--color-surface);
        border: 1px solid var(--color-secondary);
        z-index: 50;
        margin-left: -12px;
    }

    .dropdown li {
        padding: 0;
        margin: 8px 16px 8px 12px;
        border: 0;
    }

    li:first-child {
        border-left: none;
    }
    .language-select li:last-child {
        padding-right: 0;
    }

    a,
    button {
        color: inherit;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
        user-select: none;
        border: none;
        font-size: inherit;
        padding: 0;
        margin: 0;
        font-weight: normal;
        font-family: "Barlow", sans-serif;
    }

    a:hover,
    button:hover {
        text-decoration: underline;
    }

    .burger-menu {
        display: none;
    }

    .burger-links {
        flex-direction: column;
        padding-left: 0;
        margin-right: 64px;
    }

    .burger-links li {
        padding-left: 0;
        padding-bottom: 32px;
    }

    .burger-links li.burger-top-row {
        display: flex;
        align-items: center;

        gap: 16px;
    }

    .burger-links a {
        white-space: normal;
        font-size: 120%;
    }

    .menu-break {
        display: none;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 16px;
        position: relative;
    }

    .localhost {
        color: var(--color-secondary);
        font-weight: bold;
        position: absolute;
        left: 240px;
    }

    @media screen and (max-width: 1300px) {
        .regular-links > li {
            padding: 0 20px 0 20px;
        }
    }

    @media screen and (max-width: 1200px) {
        .regular-links > li {
            padding: 0 10px 0 10px;
        }
    }

    @media screen and (min-width: 850px) and (max-width: 1100px) {
        .regular-links > li {
            padding: 0 20px 0 20px;
            margin-top: 8px;
            margin-bottom: 8px;
        }
        .menu-break + li {
            border-left: none !important;
        }
        .menu-break {
            display: block;
            flex-basis: 100%;
            height: 0;
            margin: 0 !important;
        }
    }

    @media screen and (max-width: 850px) {
        .menu ul.regular-links {
            display: none;
        }

        .language-select {
            display: none;
        }

        .burger-menu {
            display: block;
        }
    }
</style>
