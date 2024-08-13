<script lang="ts">

    export let value: string;
    export let amount;

    let active = false;

    amount.subscribe((amount_value: string) => {
        active = amount_value == value;
    })

</script>
    
<button
    on:click={() => amount.set(value)}
    class={active ? "active" : ""}
>
    {value} Kč
</button>