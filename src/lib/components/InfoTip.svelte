<script lang="ts">
    import { loc } from "$src/lib/loc";
    import type { LocalizedString } from "$src/types";
    import IconInfo from "@lucide/svelte/icons/info";

    interface Props {
        /** The explanation shown in the tooltip */
        text: LocalizedString;
    }

    let { text }: Props = $props();

    const id = $props.id();
    let button: HTMLButtonElement;
    let tip: HTMLSpanElement;
    /** Opened by a click or tap, so it stays open after the pointer leaves */
    let pinned = false;

    /**
     * The tooltip is a popover, so it's in the top layer and isn't clipped by scrolling
     * containers such as a table wrapper. It's placed below the button, within the viewport.
     */
    function show() {
        if (tip.matches(":popover-open")) return;
        tip.showPopover();
        const anchor = button.getBoundingClientRect();
        const margin = 8;
        const left = Math.min(
            Math.max(margin, anchor.left + anchor.width / 2 - tip.offsetWidth / 2),
            document.documentElement.clientWidth - tip.offsetWidth - margin,
        );
        tip.style.left = `${left}px`;
        tip.style.top = `${anchor.bottom + 6}px`;
    }

    function hide() {
        pinned = false;
        if (tip.matches(":popover-open")) tip.hidePopover();
    }

    function toggle() {
        if (pinned) {
            hide();
        } else {
            pinned = true;
            show();
        }
    }
</script>

<svelte:window
    onkeydown={(event) => event.key === "Escape" && hide()}
    onscroll={hide}
    onpointerdown={(event) => {
        if (pinned && !button.contains(event.target as Node)) hide();
    }} />

<button
    bind:this={button}
    type="button"
    class="link info-tip"
    aria-label={loc({ cs: "Vysvětlivka", en: "Explanation" })}
    aria-describedby={id}
    onclick={toggle}
    onmouseenter={show}
    onmouseleave={() => pinned || hide()}
    onfocus={show}
    onblur={hide}>
    <IconInfo size="1em" aria-hidden="true" />
</button>
<span bind:this={tip} {id} role="tooltip" popover="manual" class="tip">{loc(text)}</span>

<style>
    .info-tip {
        display: inline-flex;
        vertical-align: -0.1em;
        color: var(--color-text-muted);
    }

    .info-tip:hover,
    .info-tip:focus-visible {
        color: var(--color-primary);
    }

    .tip {
        position: fixed;
        inset: auto;
        max-width: min(20em, calc(100vw - 16px));
        margin: 0;
        padding: 0.4em 0.6em;
        border: none;
        border-radius: 4px;
        background: var(--color-secondary);
        color: var(--color-secondary-contrast);
        font-size: 0.85rem;
        font-weight: normal;
        line-height: 1.3;
        text-align: left;
        white-space: normal;
        box-shadow: 0 2px 6px #0003;
    }
</style>
