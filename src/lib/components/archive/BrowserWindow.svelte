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
        /** Makes the window's close button work */
        onclose?: () => void;
        /** The page shown in the window */
        children: Snippet;
    }

    let { title, url, status, onclose, children }: Props = $props();

    /** Widths of the menu items, in pixels: they're only hinted at, as they don't work */
    const MENU_WIDTHS = [30, 34, 38, 44, 36, 32];
</script>

<!--
    A symbolic browser window of the early 2000s (Windows XP and Internet Explorer 6), drawn in
    this site's style. Only the close button works; the rest is decoration, hidden from
    assistive technology, as a page can't control navigation inside a frame from another site.
-->
<div class="window">
    <div class="title-bar">
        <IconGlobe size="15" aria-hidden="true" />
        <span class="title" aria-hidden="true">{title}</span>
        <span class="window-button" aria-hidden="true"><span class="minimize"></span></span>
        <span class="window-button" aria-hidden="true"><span class="maximize"></span></span>
        {#if onclose}
            <button
                class="window-button close"
                onclick={onclose}
                aria-label={loc({ cs: "Zavřít archivovanou kopii", en: "Close the archived copy" })}
                ><IconX size="13" strokeWidth={3} /></button>
        {:else}
            <span class="window-button close" aria-hidden="true"
                ><IconX size="13" strokeWidth={3} /></span>
        {/if}
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

    .window-button.close {
        border-color: var(--color-primary-contrast);
        color: var(--color-primary-contrast);
        background: var(--color-primary);
    }

    button.close {
        cursor: pointer;
    }

    button.close:hover,
    button.close:focus-visible {
        filter: brightness(1.15);
    }

    button.close:focus-visible {
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
