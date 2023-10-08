<script lang="ts">
	import { lang } from '../stores.js';
	import { page } from '$app/stores';

    let langValue: "en" | "cs";
    lang.subscribe(value => {
        langValue = value;
    })

	function setLangEn() {
		lang.set('en')
	}

	function setLangCs() {
		lang.set('cs')
	}
</script>

<div>
    <!-- Currently only the homepage is localized -->
    {#if $page.url.pathname == '/' }
        {#if langValue == 'cs'}
            <a on:click={setLangEn} on:keyup={setLangEn}>switch to english</a>
        {:else}
            <a on:click={setLangCs} on:keyup={setLangCs}>přepnout do češtiny</a>
        {/if}
    {/if}
</div>

<style>
    div {
        margin-bottom: -12px;
    }
	a {
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
        cursor: pointer;
	}

    a:hover {
        text-decoration: underline;
    }
</style>