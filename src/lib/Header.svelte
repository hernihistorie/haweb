<script lang="ts">
	import { page } from '$app/stores';

	var links = [
		['/', "Mise a cíle"],
		['/projects', "Projekty"],
		['/services', "Služby a technologie"],
		['/collection', "Sbírka"],
		['/blog', "Blog"],
		['/contact', "Kontakty"],
	]
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src="/ico/logo_herni_archiv.svg" alt="Logo Herního archivu" height=62>
		</a>
	</div>
	<div class="menu">
		<ul>
			{#each links as link}
				<li>
					<a sveltekit:prefetch href="{link[0]}">{link[1]}</a>
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

		display: flex;
		justify-content: space-between;
		align-content: middle;
	}

	.menu {
		margin: auto 0 auto 0;
	}

	ul {
		margin: auto;

		list-style: none;
		display: flex;
		justify-content: end;
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
	}

	a:hover {
		text-decoration: underline;
	}
</style>
