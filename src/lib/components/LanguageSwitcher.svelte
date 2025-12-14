<script lang="ts">
	import { setLocale, getLocale } from '$lib/components/paraglide/runtime';
</script>

<div>
    {#if getLocale() == 'cs'}
        <button class="link" onclick={() => setLocale('en')}>EN</button>
    {:else}
        <button class="link" onclick={() => setLocale('cs')}>CS</button>
    {/if}
</div>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
	button {
        user-select: none;
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
        cursor: pointer;
        font-size: 100%;
        min-width: 1.5em;
        text-align: right;
	}

    button:hover {
        text-decoration: underline;
    }
</style>