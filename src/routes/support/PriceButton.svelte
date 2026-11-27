<script lang="ts">
    import type { Writable } from "svelte/store";

    interface Props {
        value: string;
        currencyName: string;
        amount: Writable<string>;
    }

    let { value, currencyName, amount }: Props = $props();

    let active = $derived($amount == value);
</script>

<button onclick={() => amount.set(value)} class={active ? "active" : ""}>
    {value}
    {currencyName}
</button>
