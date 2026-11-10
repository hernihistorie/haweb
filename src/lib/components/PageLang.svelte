<script lang="ts">
    import { page } from "$app/state";
    import { PersistedState } from "runed";
    import {
        getLocale,
        localizeHref,
        deLocalizeHref,
        extractLocaleFromNavigator,
        type Locale,
    } from "#lib/paraglide/runtime.js";
    import { slide } from "svelte/transition";
    import Notice from "$src/lib/components/Notice.svelte";
    interface Props {
        cs?: boolean;
        en?: boolean;
        notice?: string;
    }

    let { cs, en, notice }: Props = $props();

    const dismissed = new PersistedState("pageLangSwitchDimsissed", false);

    // Pages are prerendered, so the browser's language can only be checked after hydration.
    let preferredLocale: Locale | undefined = $state();
    $effect(() => {
        const locale = extractLocaleFromNavigator();
        if (locale && locale !== getLocale()) {
            preferredLocale = locale;
        }
    });

    function dismiss() {
        dismissed.current = true;
    }

    const switchLocale = $derived(
        (preferredLocale === "cs" && cs) || (preferredLocale === "en" && en)
            ? preferredLocale
            : undefined,
    );
    const switchHref = $derived(
        switchLocale
            ? localizeHref(deLocalizeHref(page.url.pathname), { locale: switchLocale })
            : undefined,
    );
</script>

{#if switchLocale && !dismissed.current}
    <div class="page-lang-slide" transition:slide>
        <Notice lang={switchLocale}>
            <div class="page-lang-switch">
                {#if switchLocale == "cs"}
                    <p>
                        🇨🇿 Tato stránka je dostupná v češtině.
                        <a href={switchHref} data-sveltekit-reload>Přepnout do češtiny</a>
                    </p>
                    <button class="link" onclick={dismiss} aria-label="Zavřít" title="Zavřít"
                        >×</button>
                {:else}
                    <p>
                        This page is available in English.
                        <a href={switchHref} data-sveltekit-reload>Switch to English</a>
                    </p>
                    <button class="link" onclick={dismiss} aria-label="Dismiss" title="Dismiss"
                        >×</button>
                {/if}
            </div>
        </Notice>
    </div>
{/if}

{#if getLocale() == "cs" && !cs}
    <Notice>
        <p>
            {notice ?? "Tato stránka je v současnosti dostupná pouze v angličtině."}
        </p>
    </Notice>
{:else if getLocale() == "en" && !en}
    <Notice>
        <p>
            🇨🇿
            {notice ?? "This page is currently only available in Czech."}
            <a
                href="https://herniarchiv-cz.translate.goog{page.url
                    .pathname}?_x_tr_sl=cs&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp"
                >View with Google Translate</a>
        </p>
    </Notice>
{:else}
    <!-- Content for the page goes here -->
{/if}

<style>
    /* Contain the Notice's margin so slide measures the same height it animates */
    .page-lang-slide {
        display: flow-root;
    }

    .page-lang-switch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    }

    .page-lang-switch button {
        color: inherit;
        font-size: 150%;
        line-height: 1;
        cursor: pointer;
    }
    .page-lang-switch button:hover {
        text-decoration: none;
    }
</style>
