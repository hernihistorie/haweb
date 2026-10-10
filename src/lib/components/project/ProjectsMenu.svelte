<script lang="ts">
    import { page } from "$app/state";
    import { localizeHref } from "$src/lib/paraglide/runtime";
    import { pathnameMatches } from "$src/lib/util";
    import Loc from "../Loc.svelte";

    let { active }: { active?: "projects" | "timeline" } = $props();
</script>

<ul>
    <li>
        <a
            href={localizeHref("/projects")}
            class:active={active === "projects" || pathnameMatches("/projects/")}>
            <Loc cs="Projekty" en="Projects" />
        </a>
    </li>
    <li>
        <a
            href={localizeHref("/projects/timeline")}
            class:active={active === "timeline" || pathnameMatches("/projects/timeline")}>
            <Loc cs="Časová osa" en="Timeline" />
        </a>
    </li>
</ul>

<style>
    ul {
        padding-left: 0px;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        text-align: left;
        margin-bottom: 29.8px;
    }

    li {
        padding: 0 27px 0 27px;
        border-left: 3px solid var(--color-secondary);
        text-transform: uppercase;
        font-size: 36px;
        font-weight: bold;
    }

    li > a {
        font-weight: normal;
        color: var(--color-black);
        text-decoration: none;
    }
    li > a:hover {
        text-decoration: underline;
    }

    li:first-child {
        padding: 0 27px 0 0;
        border-left: none;
    }
    @media screen and (max-width: 515px) {
        li {
            font-size: 30px;
        }
    }

    .active {
        font-weight: bold;
    }
</style>
