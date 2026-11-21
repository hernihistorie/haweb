<script lang="ts">
    import type { Snippet } from "svelte";
    import InventoryNav from "#lib/components/inventory/InventoryNav.svelte";

    let { children }: { children: Snippet } = $props();
</script>

<InventoryNav />

{@render children()}
