<script lang="ts">
    import { localizeHref } from "$src/lib/paraglide/runtime";
    import Loc from "#lib/components/Loc.svelte";
    import ProjectMenu from "#lib/components/project/ProjectMenu.svelte";
    import { pathnameMatches, pathnameStartswith } from "$src/lib/util";
    import { projectMagazines } from "$src/routes/magazines/project";
</script>

<ProjectMenu project={projectMagazines}>
    <li>
        <a href={localizeHref("/magazines/")} class:active={pathnameMatches("/magazines/")}>
            <Loc cs="O projektu" en="About project" />
        </a>
    </li>
    <li>
        <a
            href={localizeHref("/magazines/catalog")}
            class:active={pathnameStartswith("/magazines/catalog")}>
            <Loc cs="Katalog" en="Catalog" />
        </a>
    </li>
    <li>
        <a
            href={localizeHref("/magazines/miss-list")}
            class:active={pathnameStartswith("/magazines/miss-list")}>
            <Loc cs="Chybí nám" en="Miss List" />
        </a>
    </li>
</ProjectMenu>
