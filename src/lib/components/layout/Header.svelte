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

    type MenuItem = {
        url: string;
        cs: string;
        en: string;
        submenu?: MenuItem[];
    };

    var menuItems: MenuItem[] = [
        {
            url: "/about",
            cs: "O nás",
            en: "About us",
            submenu: [
                { url: "/about", cs: "<b>O nás</b>", en: "<b>About us</b>" },
                { url: "/contact", cs: "Kontakty", en: "Contacts" },
                { url: "/support", cs: "Podpořte nás", en: "Support us" },
            ],
        },
        { url: "/news", cs: "Novinky", en: "News" },
        { url: "/articles", cs: "Články", en: "Articles" },
        {
            url: "/projects",
            cs: "Projekty",
            en: "Projects",
            submenu: [
                {
                    url: "/projects",
                    cs: "<b>Naše projekty</b>",
                    en: "<b>Our projects</b>",
                },

                {
                    url: "/gallery/emil-fafek",
                    cs: "Fotografie Emila Fafka",
                    en: "Emil Fafek photography",
                },
                { url: "/projects/videostop", cs: "Videostop", en: "Videostop" },
                {
                    url: "/projects/atari-klub-citov",
                    cs: "Atari klub Cítov",
                    en: "Atari club Citov",
                },
                {
                    url: "/projects/bewesoft",
                    cs: "Fond Jiřího Bernáška (BeWe Soft)",
                    en: "Jiří Bernášek Collection (BeWe Soft)",
                },
                {
                    url: "/projects/programy-z-cst",
                    cs: "Programy z Československé televize",
                    en: "Programs from Czechoslovak Television",
                },
                {
                    url: "/projects/frantisek-starek-cunas",
                    cs: "Fond Františka Stárka Čuňase",
                    en: "František Stárek Čuňas Collection",
                },
            ],
        },
        {
            url: "https://inventory.herniarchiv.cz/",
            cs: "Sbírka",
            en: "Collection",
        },
        {
            url: "/interviews",
            cs: "Rozhovory",
            en: "Interviews",
        },
        {
            url: "/magazines",
            cs: "Časopisy",
            en: "Magazines",
        },
    ];
    let burgerMenuOpen = $state(false);
    let currentExpandedMenu: MenuItem | null = $state(null);

    // A menu item is active on its own page and on any of its submenu pages
    function isActive(menuItem: MenuItem): boolean {
        return [menuItem, ...(menuItem.submenu ?? [])].some(
            (item) => item.url.startsWith("/") && pathnameStartswith(item.url),
        );
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
                                ><Loc cs={menuItem.cs} en={menuItem.en} /></a
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
                            <Loc
                                cs="{menuItem.cs}  {isExpanded(menuItem) ? '▴' : '▾'}"
                                en="{menuItem.en}  {isExpanded(menuItem) ? '▴' : '▾'}"
                            />
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
                                            <Loc cs={subMenuItem.cs} en={subMenuItem.en} />
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
                            <Loc cs={menuItem.cs} en={menuItem.en} />
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
        background-color: var(--color-bg);
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
