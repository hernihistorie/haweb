<script lang="ts">
	import { lang } from '../stores.js'
    interface Props {
        cs: string;
        en: string;
    }

    let { cs, en }: Props = $props();

    let langValue: "en" | "cs" = $state();
    lang.subscribe(value => {
        langValue = value;
    })
</script>

{#if langValue == 'cs'}
	{@html cs}
{:else if langValue == 'en'}
    {@html en}
{/if}