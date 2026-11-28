<!--
    A prominent button for a page's main actions, such as playing or downloading. `filled` is for
    the main one; `outlined` looks like the site's other buttons. A link with `href`, otherwise a
    button.
-->
<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

    type Props = {
        variant?: "filled" | "outlined";
        children: Snippet;
    } & (({ href: string } & HTMLAnchorAttributes) | ({ href?: undefined } & HTMLButtonAttributes));

    let { variant = "outlined", children, class: className, ...rest }: Props = $props();
</script>

{#if rest.href !== undefined}
    <a class={["action-button", variant, className]} {...rest as HTMLAnchorAttributes}>
        {@render children()}
    </a>
{:else}
    <button class={["action-button", variant, className]} {...rest as HTMLButtonAttributes}>
        {@render children()}
    </button>
{/if}

<style>
    .action-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.45em;
        margin: 0;
        padding: 0.45em 1em;
        border: 2px solid var(--color-primary);
        font: inherit;
        font-size: 1.1em;
        font-weight: 600;
        line-height: 1.2;
        text-decoration: none;
        cursor: pointer;
        transition: background 0.15s;
    }

    .filled {
        background: var(--color-primary);
        color: var(--color-primary-contrast);
    }

    .filled:hover,
    .filled:focus-visible {
        background: color-mix(in srgb, var(--color-primary) 82%, #000);
    }

    .outlined {
        background: transparent;
        color: var(--color-text);
    }

    .outlined:hover,
    .outlined:focus-visible {
        background: color-mix(in srgb, var(--color-primary) 12%, transparent);
    }

    .action-button :global(.lucide-icon) {
        flex: none;
        margin: 0;
    }
</style>
