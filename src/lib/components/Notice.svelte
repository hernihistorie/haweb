<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLDivElement> {
        children?: Snippet;
    }

    let { children, ...rest }: Props = $props();
</script>

<div class="notice" {...rest}>
    {@render children?.()}
</div>

<style>
    .notice {
        border: 2px solid var(--color-secondary);
        padding: 0 16px;
        margin: 0;
        margin-top: 8px;
    }
</style>
