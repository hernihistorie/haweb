<script lang="ts">

    interface Props {
        value: string;
        currencyName: string;
        amount: any;
    }

    let { value, currencyName, amount }: Props = $props();

    let active = $state(false);

    amount.subscribe((amount_value: string) => {
        active = amount_value == value;
    })

</script>
    
<button
    onclick={() => amount.set(value)}
    class={active ? "active" : ""}
>
    {value} {currencyName}
</button>