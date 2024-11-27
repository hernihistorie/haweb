<script lang="ts">

    interface Props {
        value: string;
        amount: any;
    }

    let { value, amount }: Props = $props();

    let active = $state(false);

    amount.subscribe((amount_value: string) => {
        active = amount_value == value;
    })

</script>
    
<button
    onclick={() => amount.set(value)}
    class={active ? "active" : ""}
>
    {value} Kč
</button>