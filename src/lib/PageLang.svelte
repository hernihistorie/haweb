<script lang="ts">
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	import { lang } from '../stores.js'
	import Arrow from './Arrow.svelte';
    interface Props {
        cs?: boolean;
        en?: boolean;
    }

    let { cs, en }: Props = $props();

    let langValue: "en" | "cs" = $state("cs");
    lang.subscribe(value => {
        langValue = value as "en" | "cs";
    })
</script>

{#if langValue == 'cs' && !cs}
    <div class="page-lang-notice">
        <p>Tato stránka je v současnosti dostupná pouze v angličtině.</p>
    </div>
{:else if langValue == 'en' && !en}
    <div class="page-lang-notice">
        <p>
            🇨🇿 This page is currently only available in Czech.
            <a href="https://herniarchiv-cz.translate.goog{page.url.pathname}?_x_tr_sl=cs&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp">View with Google Translate</a>
        </p>
    </div>
{:else}
    <!-- Content for the page goes here -->
{/if}

<style>
    .page-lang-notice {
        border: 2px solid var(--color-secondary);
        padding: 0 16px;
        margin: 0;
    }
</style>