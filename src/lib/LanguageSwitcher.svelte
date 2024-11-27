<script lang="ts">
	import { lang } from '../stores.js';
	import { page } from '$app/stores';

    let langValue: "en" | "cs" = $state("cs");
    lang.subscribe(value => {
        langValue = value as "en" | "cs";
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
    {#if $page.url.pathname == '/'}
        {#if langValue == 'cs'}
            <button class="link" onclick={setLangEn} onkeyup={setLangEn}>switch to english</button>
        {:else}
            <button class="link" onclick={setLangCs} onkeyup={setLangCs}>přepnout do češtiny</button>
        {/if}
    {/if}
</div>

<style>
    div {
        margin-bottom: -12px;
    }
	button {
        user-select: none;
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
        cursor: pointer;
        font-size: 90%;
	}

    button:hover {
        text-decoration: underline;
    }
</style>