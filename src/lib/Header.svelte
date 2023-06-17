<script lang="ts">
	import { lang } from '../stores.js';
    import Loc from '$lib/Loc.svelte';
	import { page } from '$app/stores';
	import BurgerMenu from '$lib/BurgerMenu.svelte';

	var links = [
		['/mission', "Mise a cíle", "Missions and goals"],
		['/projects', "Projekty", "Projects"],
		['/services', "Služby a technologie", "Services and technologies"],
		['/collection', "Sbírka", "Collection"],
		['/blog', "Blog", "Blog"],
		['/contact', "Kontakty", "Contacts"],
	]
    let langValue;
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

<header>
	<div class="logo">
		<a href="/">
			<img src="/ico/logo_herni_archiv.svg" alt="Logo Herního archivu" height=62>
		</a>
	</div>
	<div class="menu">
		<div class="burger-menu">
			<BurgerMenu padding={'25px'}>
				<ul class="burger-links">
					<li>
						{#if $page.path == '/' }
							{#if langValue == 'cs'}
								<a on:click={setLangEn} href="#">switch to english</a>
							{:else}
								<a on:click={setLangCs} href="#">přepnout do češtiny</a>
							{/if}
						{/if}
					</li>
					{#each links as link}
						<li>
							<a sveltekit:prefetch href="{link[0]}">
								<Loc cs="{link[1]}" en="{link[2]}" />
							</a>
						</li>
					{/each}
				</ul>
			</BurgerMenu>
		</div>
		<div class="language-select">
			<!-- Currently only the homepage is localized -->
			{#if $page.path == '/' }
				{#if langValue == 'cs'}
					<a on:click={setLangEn} href="#">switch to english</a>
				{:else}
					<a on:click={setLangCs} href="#">přepnout do češtiny</a>
				{/if}
			{/if}
		</div>
		<ul class="regular-links">
			{#each links as link}
				<li>
					<a sveltekit:prefetch href="{link[0]}">
						<Loc cs="{link[1]}" en="{link[2]}" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</header>

<style>
	header {
		max-width: var(--max-width);
		margin: auto;
		margin-bottom: 64px;
		padding: 0 16px 0 16px;

		display: flex;
		justify-content: space-between;
		align-content: middle;
	}

	.menu {
		margin: auto 0 auto 0;
	}

	.language-select {
		text-align: right;
		margin-right: 28px;
		position: relative;
		top: -32px;
	}

	ul {
		margin: auto;

		list-style: none;
		display: flex;
		justify-content: end;
		flex-wrap: wrap;
	}

	li {
		padding: 0 29px 0 29px;
		border-right: 1px solid var(--color-secondary);
	}

	li:last-child {
		border-right: none;
	}

	a {
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
	}

	a:hover {
		text-decoration: underline;
	}

	.burger-menu {
		display: none;
	}

	.burger-links {
		flex-direction: column;
		padding-left: 0;
		margin-right: 64px;
	}

	.burger-links li {
		padding-left: 0;
		padding-bottom: 32px;
	}

	.burger-links a {
		white-space: normal;
		font-size: 120%;
	}

	@media screen and (max-width: 1300px) {
		li {
			padding: 0 20px 0 20px;
		}
	}

	@media screen and (max-width: 1200px) {
		li {
			padding: 0 10px 0 10px;
		}
	}

	@media screen and (min-width: 850px) and (max-width: 1100px) {
		li {
			padding: 0 20px 0 20px;
			margin-top: 8px;
			margin-bottom: 8px;
		}
		li:nth-child(3) {
			border-right: 0;
		}
		li:nth-child(4) {
			padding-left: 40%;
		}
	}

	@media screen and (max-width: 850px) {
		.menu ul.regular-links {
			display: none;
		}
		
		.language-select {display: none;}

		.burger-menu {
			display: block;
		}
	}
</style>
