<script lang="ts">
	import { localizeHref } from "$src/lib/paraglide/runtime";
	import Loc from "$lib/components/Loc.svelte";
	import PipeList from "../PipeList.svelte";
	import { pathnameMatches, pathnameStartswith } from "$src/lib/util";

</script>

<PipeList>
    <li>
        <a href={localizeHref("/magazines/")} class:active={pathnameMatches("/magazines/")}>
            <Loc
                cs="Databáze časopisů"
                en="Maganizes database"
            />
        </a>
    </li>
    <li>
        <a href={localizeHref("/magazines/catalog")} class:active={pathnameStartswith("/magazines/catalog")}>
            <Loc    
                cs="Přehled časopisů"
                en="Overview of magazines"
            />
        </a>
    </li>
    <li>
        <a href={localizeHref("/magazines/miss-list")} class:active={pathnameStartswith("/magazines/miss-list")}>
            <Loc    
                cs="Chybí nám"
                en="Miss List"
            />
        </a>
    </li>
</PipeList>
