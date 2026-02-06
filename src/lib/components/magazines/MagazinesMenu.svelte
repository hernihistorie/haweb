<script lang="ts">
	import { localizeHref } from "$src/lib/paraglide/runtime";
	import Loc from "$lib/components/Loc.svelte";
	import PipeList from "../PipeList.svelte";

</script>

<PipeList>
    <li>
        <a href={localizeHref("/magazines/")}>
			<strong>
				<Loc
					cs="Databáze časopisů"
					en="Maganizes database"
				/>
			</strong>
        </a>
    </li>
    <li>
        <a href={localizeHref("/magazines/catalog")}>
            <Loc    
                cs="Přehled časopisů"
                en="Overview of magazines"
            />
        </a>
    </li>
    <li>
        <a href={localizeHref("/magazines/miss-list")}>
            <Loc    
                cs="Chybí nám"
                en="Miss List"
            />
        </a>
    </li>
</PipeList>
