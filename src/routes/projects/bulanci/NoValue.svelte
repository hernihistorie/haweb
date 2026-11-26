<script lang="ts">
    import { loc } from "$src/lib/loc";
</script>

<!-- A faded dash for an empty table cell, so it doesn't look like the value failed to load -->
<span class="no-value" title={loc({ cs: "neuvedeno", en: "none" })}>–</span>

<style>
    .no-value {
        color: var(--color-text-muted);
        opacity: 0.6;
    }
</style>
