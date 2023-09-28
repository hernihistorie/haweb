<script lang="ts">
	import { lang } from '../stores.js'
    export let cs: string;
    export let en: string;

    let langValue: "en" | "cs";
    lang.subscribe(value => {
        langValue = value;
    })
</script>

{#if langValue == 'cs' }
	{ @html cs }
{:else if langValue == 'en' }
    { @html en }
{/if}