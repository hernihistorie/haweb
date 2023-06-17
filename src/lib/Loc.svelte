<script>
	import { lang } from '../stores.js'
    export let cs;
    export let en;

    let langValue;
    lang.subscribe(value => {
        langValue = value;
    })
</script>

{#if langValue == 'cs' }
	{ @html cs }
{:else if langValue == 'en' }
    { @html en }
{/if}