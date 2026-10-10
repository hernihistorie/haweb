<script lang="ts">
    import { page } from "$app/state";
    import { PersistedState } from "runed";
    import {
        getLocale,
        localizeHref,
        deLocalizeHref,
        extractLocaleFromNavigator,
        type Locale,
    } from "$lib/paraglide/runtime";
    import { slide } from "svelte/transition";
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
    <div class="page-lang-notice page-lang-switch" lang={switchLocale} transition:slide>
        {#if switchLocale == "cs"}
            <p>
                🇨🇿 Tato stránka je dostupná v češtině.
                <a href={switchHref} data-sveltekit-reload>Přepnout do češtiny</a>
            </p>
            <button class="link" onclick={dismiss} aria-label="Zavřít" title="Zavřít">×</button>
        {:else}
            <p>
                This page is available in English.
                <a href={switchHref} data-sveltekit-reload>Switch to English</a>
            </p>
            <button class="link" onclick={dismiss} aria-label="Dismiss" title="Dismiss">×</button>
        {/if}
    </div>
{/if}

{#if getLocale() == "cs" && !cs}
    <div class="page-lang-notice">
        <p>
            {notice ?? "Tato stránka je v současnosti dostupná pouze v angličtině."}
        </p>
    </div>
{:else if getLocale() == "en" && !en}
    <div class="page-lang-notice">
        <p>
            🇨🇿
            {notice ?? "This page is currently only available in Czech."}
            <a
                href="https://herniarchiv-cz.translate.goog{page.url
                    .pathname}?_x_tr_sl=cs&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp"
                >View with Google Translate</a>
        </p>
    </div>
{:else}
    <!-- Content for the page goes here -->
{/if}

<style>
    .page-lang-notice {
        border: 2px solid var(--color-secondary);
        padding: 0 16px;
        margin: 0;
    }

    .page-lang-notice + .page-lang-notice {
        margin-top: 8px;
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
