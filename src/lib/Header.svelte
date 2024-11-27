<script lang="ts">
	import { slide } from 'svelte/transition'

    import Loc from '$lib/Loc.svelte';
	import BurgerMenu from '$lib/BurgerMenu.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	type MenuItem = {
		url: string;
		cs: string;
		en: string;
		submenu?: MenuItem[];
	}

	var menuItems: MenuItem[] = [
		{
			url: "/about", cs: "O nás", en: "About us",
		}, {
			url: "/projects", cs: "Projekty", en: "Projects",
			submenu: [
				{ url: "/projects", cs: "Časová osa", en: "Timeline" },
				{ url: "/gallery/emil-fafek", cs: "Fotografie Emila Fafka", en: "Emil Fafek photography" },
				{ url: "/projects/videostop", cs: "Projekt Videostop", en: "Project Videostop" },
			]
		}, {
			url: "/interviews", cs: "Rozhovory", en: "Interviews"
		}, {
			url: "https://inventory.herniarchiv.cz/", cs: "Sbírka", en: "Collection"
		}, {
			url: "https://casopisy.herniarchiv.cz/", cs: "Časopisy", en: "Magazines"
		}, {
			url: "/blog", cs: "Blog", en: "Blog"
		}, {
			url: "/contact", cs: "Kontakty", en: "Contacts"
		}
	];
	let burgerMenuOpen = $state(false);
	let currentExpandedMenu: MenuItem | null = $state(null);

	let resetExpandedMenu = () => {
		currentExpandedMenu = null;
	}
</script>

<header>
	<div class="logo">
		<a href="/" onclick={resetExpandedMenu}>
			<img src="/ico/logo_herni_archiv.svg" alt="Logo Herního archivu" height=62>
		</a>
	</div>
	<div class="menu">
		<div class="burger-menu">
			<BurgerMenu padding={'25px'} bind:open={burgerMenuOpen}>
				<ul class="burger-links">
					<li>
						<LanguageSwitcher />
					</li>
					{#each menuItems as menuItem}
						<li>
							<a href="{menuItem.url}" onclick={() => burgerMenuOpen=false}>
								<Loc cs="{menuItem.cs}" en="{menuItem.en}" />
							</a>
						</li>
					{/each}
				</ul>
			</BurgerMenu>
		</div>
		<div class="language-select">
			<LanguageSwitcher />
		</div>
		<ul class="regular-links">
			{#each menuItems as menuItem, i}
				<!-- XXX this is a temporary hack -->
				{#if menuItem.submenu}
					<li>
						<a
							style="cursor: pointer;"
							onclick={() => currentExpandedMenu = currentExpandedMenu?.url == menuItem.url ? null : menuItem}
						>
							<Loc
								cs="{menuItem.cs} &nbsp;{currentExpandedMenu == menuItem ? '▴' : '▾'}"
								en="{menuItem.en} &nbsp;{currentExpandedMenu == menuItem ? '▴' : '▾'}"
							/>
						</a>
						{#if currentExpandedMenu}
							<ul class="dropdown" transition:slide>
								{#each menuItem.submenu as subMenuItem}
									<li>
										<a href="{subMenuItem.url}" onclick={resetExpandedMenu}>
											<Loc cs="{subMenuItem.cs}" en="{subMenuItem.en}" />
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{:else}
					<li>
						<a href="{menuItem.url}" onclick={resetExpandedMenu}>
							<Loc cs="{menuItem.cs}" en="{menuItem.en}" />
						</a>
					</li>
				{/if}
				{#if i == 3}
					<li class="menu-break"></li>
				{/if}
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
		padding: 0 27px 0 27px;
		border-left: 1px solid var(--color-secondary);
	}

	.dropdown {
		flex-direction: column;
		position: absolute;
		padding: 0;
		flex-wrap: nowrap;
		margin-top: 4px;
		background-color: var(--color-bg);
		border: 1px solid var(--color-secondary);
		z-index: 50;
		margin-left: -12px;
	}

	.dropdown li {
		padding: 0;
		margin: 8px 16px 8px 12px;
		border: 0;
	}

	li:first-child {
		border-left: none;
	}

	a {
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
		user-select: none;
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

	.menu-break { 
		display: none;
	}

	@media screen and (max-width: 1300px) {
		.regular-links > li {
			padding: 0 20px 0 20px;
		}
	}

	@media screen and (max-width: 1200px) {
		.regular-links > li {
			padding: 0 10px 0 10px;
		}
	}

	@media screen and (min-width: 850px) and (max-width: 1100px) {
		.regular-links > li {
			padding: 0 20px 0 20px;
			margin-top: 8px;
			margin-bottom: 8px;
		}
		.menu-break + li {
			border-left: none !important;
		}
		.menu-break {
			display: block;
			flex-basis: 100%;
			height: 0;
			margin: 0 !important;
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
