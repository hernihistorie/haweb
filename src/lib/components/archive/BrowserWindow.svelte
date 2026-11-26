<script lang="ts">
    import { loc } from "$src/lib/loc";
    import IconArrowLeft from "@lucide/svelte/icons/arrow-left";
    import IconArrowRight from "@lucide/svelte/icons/arrow-right";
    import IconGlobe from "@lucide/svelte/icons/globe";
    import IconHouse from "@lucide/svelte/icons/house";
    import IconRotateCw from "@lucide/svelte/icons/rotate-cw";
    import IconX from "@lucide/svelte/icons/x";
    import type { Snippet } from "svelte";

    interface Props {
        /** Shown in the title bar */
        title: string;
        /** Shown in the address bar */
        url: string;
        /** Shown in the status bar */
        status: string;
        /** Whether the window fills the whole browser window, covering the page */
        maximized?: boolean;
        /** Makes the window's minimize button work */
        onminimize?: () => void;
        /**
         * Makes the window's maximize (or, when maximized, restore) button work, as well as
         * double-clicking the title bar and, when maximized, pressing Escape
         */
        ontogglemaximized?: () => void;
        /** Makes the window's close button work */
        onclose?: () => void;
        /** The page shown in the window */
        children: Snippet;
    }

    let {
        title,
        url,
        status,
        maximized = false,
        onminimize,
        ontogglemaximized,
        onclose,
        children,
    }: Props = $props();

    /** Widths of the menu items, in pixels: they're only hinted at, as they don't work */
    const MENU_WIDTHS = [30, 34, 38, 44, 36, 32];

    let windowElement: HTMLElement | undefined = $state();

    /** Double-clicking the title bar maximizes, as in Windows, but not on its buttons */
    function onTitleBarDoubleClick(event: MouseEvent) {
        if (!(event.target instanceof Element && event.target.closest("button"))) {
            ontogglemaximized?.();
        }
    }

    function onWindowKeydown(event: KeyboardEvent) {
        if (maximized && event.key === "Escape") {
            event.preventDefault();
            ontogglemaximized?.();
        }
    }

    /**
     * A maximized window covers the page, so the rest of it is made inert: it can't be reached
     * with the keyboard or by assistive technology, until the window is restored
     */
    $effect(() => {
        if (!maximized || !windowElement) return;
        const inerted: HTMLElement[] = [];
        for (let element = windowElement; element !== document.body;) {
            const parent = element.parentElement;
            if (!parent) break;
            for (const sibling of parent.children) {
                if (sibling !== element && sibling instanceof HTMLElement && !sibling.inert) {
                    sibling.inert = true;
                    inerted.push(sibling);
                }
            }
            element = parent;
        }
        return () => inerted.forEach((element) => (element.inert = false));
    });
</script>

<svelte:window onkeydown={onWindowKeydown} />

{#snippet windowButton(
    onclick: (() => void) | undefined,
    label: string,
    className: string,
    icon: Snippet,
)}
    {#if onclick}
        <button class="window-button {className}" {onclick} aria-label={label}
            >{@render icon()}</button>
    {:else}
        <span class="window-button {className}" aria-hidden="true">{@render icon()}</span>
    {/if}
{/snippet}

{#snippet minimizeIcon()}<span class="minimize"></span>{/snippet}
{#snippet maximizeIcon()}<span class={maximized ? "restore" : "maximize"}></span>{/snippet}
{#snippet closeIcon()}<IconX size="13" strokeWidth={3} />{/snippet}

<!--
    A symbolic browser window of the early 2000s (Windows XP and Internet Explorer 6), drawn in
    this site's style. Only the window buttons work; the rest is decoration, hidden from
    assistive technology, as a page can't control navigation inside a frame from another site.
-->
<div
    class="window"
    class:maximized
    class:browser-window-maximized={maximized}
    bind:this={windowElement}>
    <!-- Double-clicking is a mouse shortcut for the maximize button, which has the keyboard -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="title-bar" ondblclick={onTitleBarDoubleClick}>
        <IconGlobe size="15" aria-hidden="true" />
        <span class="title" aria-hidden="true">{title}</span>
        {@render windowButton(
            onminimize,
            loc({ cs: "Minimalizovat okno", en: "Minimize the window" }),
            "",
            minimizeIcon,
        )}
        {@render windowButton(
            ontogglemaximized,
            maximized
                ? loc({ cs: "Obnovit velikost okna", en: "Restore the window" })
                : loc({ cs: "Maximalizovat okno", en: "Maximize the window" }),
            "",
            maximizeIcon,
        )}
        {@render windowButton(
            onclose,
            loc({ cs: "Zavřít archivovanou kopii", en: "Close the archived copy" }),
            "close",
            closeIcon,
        )}
    </div>

    <div class="chrome" aria-hidden="true">
        <div class="menu-bar">
            {#each MENU_WIDTHS as width, i (i)}
                <span class="pill" style:width="{width}px"></span>
            {/each}
        </div>
        <div class="toolbar">
            <span class="round"><IconArrowLeft size="14" strokeWidth={2.5} /></span>
            <span class="round"><IconArrowRight size="14" strokeWidth={2.5} /></span>
            <span class="separator extra"></span>
            <span class="tool extra"><IconX size="16" /></span>
            <span class="tool extra"><IconRotateCw size="15" /></span>
            <span class="tool extra"><IconHouse size="15" /></span>
            <span class="address">
                <IconGlobe size="13" />
                <span class="url">{url}</span>
            </span>
            <span class="go"><IconArrowRight size="14" strokeWidth={2.5} /></span>
        </div>
    </div>

    {@render children()}

    <div class="status-bar" aria-hidden="true">
        <span class="status">{status}</span>
        <span class="zone"><IconGlobe size="12" /> Internet</span>
    </div>
</div>

<style>
    .window {
        container-type: inline-size;
        border: 2px solid var(--color-secondary);
        border-radius: 6px 6px 0 0;
        background: var(--color-surface);
        font-size: 13px;
        line-height: 1.2;
        text-align: left;
        user-select: none;
    }

    /* Fills the browser window, above the site's header */
    .window.maximized {
        position: fixed;
        inset: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        border: 0;
        border-radius: 0;
    }

    /* The page behind doesn't scroll while covered */
    :global(html:has(.browser-window-maximized)) {
        overflow: hidden;
    }

    .window :global(.lucide-icon) {
        flex: none;
        margin: 0;
        vertical-align: baseline;
    }

    .title-bar {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 4px 4px 8px;
        color: var(--color-secondary-contrast);
        background: var(--color-secondary);
    }

    .title {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        font-weight: 600;
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .window-button {
        display: inline-flex;
        flex: none;
        align-items: center;
        justify-content: center;
        width: 21px;
        height: 21px;
        margin: 0;
        padding: 0;
        border: 1.5px solid var(--color-secondary-contrast);
        border-radius: 3px;
        color: var(--color-secondary-contrast);
        background: transparent;
        font-size: inherit;
    }

    .minimize {
        width: 8px;
        height: 2px;
        margin-top: 8px;
        background: currentColor;
    }

    .maximize {
        width: 10px;
        height: 9px;
        border: 1.5px solid currentColor;
        border-top-width: 3px;
    }

    /* Two overlapping windows, the back one clipped where the front one covers it */
    .restore {
        position: relative;
        width: 11px;
        height: 10px;
    }

    .restore::before,
    .restore::after {
        content: "";
        position: absolute;
        box-sizing: border-box;
        width: 8px;
        height: 7px;
        border: 1.5px solid currentColor;
        border-top-width: 2.5px;
    }

    .restore::before {
        top: 0;
        right: 0;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 5px 100%, 5px 3px, 0 3px);
    }

    .restore::after {
        bottom: 0;
        left: 0;
    }

    .window-button.close {
        border-color: var(--color-primary-contrast);
        color: var(--color-primary-contrast);
        background: var(--color-primary);
    }

    button.window-button {
        cursor: pointer;
    }

    button.window-button:hover,
    button.window-button:focus-visible {
        background: #fff3;
    }

    button.close:hover,
    button.close:focus-visible {
        background: var(--color-primary);
        filter: brightness(1.15);
    }

    button.window-button:focus-visible {
        outline: 2px solid var(--color-text);
        outline-offset: 1px;
    }

    .menu-bar,
    .toolbar,
    .status-bar {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .menu-bar,
    .toolbar {
        border-bottom: 1px solid var(--color-secondary-transparent);
    }

    .menu-bar {
        gap: 12px;
        height: 18px;
        padding: 0 10px;
        overflow: hidden;
    }

    .pill {
        flex: none;
        height: 6px;
        border-radius: 3px;
        background: var(--color-secondary-transparent);
    }

    .toolbar {
        gap: 8px;
        padding: 4px 8px;
    }

    .tool {
        display: inline-flex;
        color: var(--color-text-muted);
    }

    /* Back and forward, greyed out as there's nowhere to go */
    .round {
        display: inline-flex;
        flex: none;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border: 1.5px solid var(--color-secondary-transparent);
        border-radius: 50%;
        color: var(--color-secondary-transparent);
    }

    /* Like the separators of the site's menus */
    .separator {
        align-self: stretch;
        width: 1px;
        margin: 2px 0;
        background: var(--color-secondary);
    }

    .address {
        display: flex;
        flex: 1;
        align-items: center;
        gap: 5px;
        min-width: 0;
        margin-left: 4px;
        padding: 2px 6px;
        border: 1px solid var(--color-secondary);
        background: var(--color-bg);
    }

    .address :global(.lucide-icon) {
        color: var(--color-text-muted);
    }

    .url {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .go {
        display: inline-flex;
        color: var(--color-primary);
    }

    .status-bar {
        gap: 8px;
        padding: 2px 4px 2px 8px;
        border-top: 1px solid var(--color-secondary-transparent);
        color: var(--color-text-muted);
        font-size: 12px;
    }

    .status {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .zone {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding-left: 8px;
        border-left: 1px solid var(--color-secondary-transparent);
    }

    /* Narrow windows keep just the essentials */
    @container (max-width: 520px) {
        .menu-bar,
        .extra {
            display: none;
        }
    }
</style>
