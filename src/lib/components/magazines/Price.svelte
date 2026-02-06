<script lang="ts">
	import type { Price } from "$src/lib/magdb";
	import { getLocale } from "$src/lib/paraglide/runtime";
	import Loc from "../Loc.svelte";

    const { price }: {price: Price} = $props();
</script>

<span class="price">
    {price.value}
    {#if getLocale() === 'cs'}
        {#if price.currency.toLowerCase() === 'czk'}
            Kč
        {:else if price.currency.toLowerCase() === 'sk'}
            Sk
        {:else if price.currency.toLowerCase() === 'csk'}
            Kčs
        {:else}
            {price.currency}
        {/if}
    {:else}
        {price.currency}
    {/if}
</span>

<style>
    .price {
        white-space: nowrap;
    }
</style>