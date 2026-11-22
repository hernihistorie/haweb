<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        /** `large` for the map's own page, `small` for thumbnails in lists */
        size?: "small" | "large";
        /** Usually a MapImage */
        children: Snippet;
    }

    let { size = "small", children }: Props = $props();
</script>

<!-- A subtle monitor bezel around an in-game screenshot, with a thicker chin and a power light -->
<div class="monitor {size}">
    {@render children()}
</div>

<style>
    .monitor {
        position: relative;
        padding: var(--bezel) var(--bezel) var(--chin);
        border-radius: var(--radius);
        background: var(--color-secondary-transparent);
    }

    .small {
        --bezel: 4px;
        --chin: 9px;
        --radius: 6px;
        --light: 3px;
    }

    .large {
        --bezel: 8px;
        --chin: 16px;
        --radius: 10px;
        --light: 4px;
    }

    .monitor::after {
        content: "";
        position: absolute;
        right: calc(var(--bezel) + var(--light));
        bottom: calc((var(--chin) - var(--light)) / 2);
        width: var(--light);
        height: var(--light);
        border-radius: 50%;
        background: var(--color-secondary);
    }

    .monitor :global(.map-image) {
        border-radius: calc(var(--radius) / 3);
        box-shadow: 0 0 0 1px #0002;
    }
</style>
