<script lang="ts">
	import { localizeHref } from "$src/lib/paraglide/runtime";
	import Loc from "$lib/components/Loc.svelte";

</script>

<ul>
    <li>
        <a href={localizeHref("/magazines/")}>
            <Loc
                cs="Databáze časopisů"
                en="Maganizes database"
            />
        </a>
    </li>
    <li>
        <a href={localizeHref("/magazines/")}>
            <Loc    
                cs="Přehled časopisů"
                en="foo"
            />
        </a>
    </li>
    <li>
        <a href={localizeHref("/magazines/")}>
            <Loc    
                cs="Chybí nám"
                en="foo"
            />
        </a>
    </li>
</ul>

<style>

	ul {
		margin: auto;
		/* margin-right: -27px; */
        padding: 0;
		list-style: none;
		display: flex;
		justify-content: start;
		flex-wrap: wrap;
	}

	li {
		padding: 0 27px 0 27px;
		border-left: 1px solid var(--color-secondary);
    }
	li:first-child {
        padding-left: 0;
		border-left: none;
	}

	a {
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
		user-select: none;
		border: none;
		font-size: inherit;
		padding: 0;
		margin: 0;	
		font-weight: normal;
		font-family: 'Barlow', sans-serif;
	}
</style>