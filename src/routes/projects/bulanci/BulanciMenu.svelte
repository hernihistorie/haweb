<script lang="ts">
    import { localizeHref } from "$src/lib/paraglide/runtime";
    import Loc from "#lib/components/Loc.svelte";
    import { pathnameMatches, pathnameStartswith } from "$src/lib/util";
    import ProjectMenu from "#lib/components/project/ProjectMenu.svelte";
    import { projectBulanci } from "./project";
</script>

{#snippet link(data: { url: string; match?: boolean; cs: string; en: string })}
    <li>
        <a
            href={localizeHref(data.url)}
            class:active={data.match ? pathnameMatches(data.url) : pathnameStartswith(data.url)}
        >
            <Loc cs={data.cs} en={data.en} />
        </a>
    </li>
{/snippet}

<ProjectMenu project={projectBulanci}>
    {@render link({ url: "/projects/bulanci/maps", cs: "Mapy", en: "Maps" })}
    {@render link({ url: "/projects/bulanci/webs", cs: "Weby", en: "Webs" })}
    {@render link({
        url: "/projects/bulanci/fans",
        cs: "Autoři a kolektivy",
        en: "Creators and Collectives",
    })}
</ProjectMenu>
