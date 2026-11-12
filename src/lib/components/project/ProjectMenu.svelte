<script lang="ts">
    import type { Project } from "$src/types";
    import type { Snippet } from "svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import Loc from "#lib/components/Loc.svelte";
    import PipeList from "#lib/components/PipeList.svelte";

    interface Props {
        project: Project;
        /** Menu items (`<li>` elements) shown after the project's name */
        children: Snippet;
    }

    let { project, children }: Props = $props();

    let image = $derived(project.bannerImage ?? project.image);
    let href = $derived(
        project.url?.startsWith("/") ? localizeHref(project.url) : project.url,
    );
</script>

<nav class="project-menu" data-pagefind-ignore>
    <a {href} class="name" style:background-image={image ? `url("${image}")` : undefined}>
        <span><Loc text={project.name} /></span>
    </a>
    <div class="items">
        <PipeList>
            {@render children()}
        </PipeList>
    </div>
</nav>

<style>
    .project-menu {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 0;
        margin-bottom: 1em;
        line-height: 2em;
    }

    .name {
        /* Sit above the menu, which is pulled left under it by PipeList */
        position: relative;
        z-index: 1;
        flex: none;
        margin-right: 24px;
        padding: 0 4em 0 12px;
        background-color: var(--color-secondary);
        background-size: cover;
        background-position: center;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
    }

    .name::before {
        content: "";
        position: absolute;
        inset: 0;
        /* Keep the text on a dark background, then reveal the image in the right padding */
        background: linear-gradient(
            to right,
            rgb(0 0 0 / 0.85),
            rgb(0 0 0 / 0.6) calc(100% - 4em),
            transparent
        );
    }

    .name span {
        position: relative;
        text-shadow: 0 0 4px rgb(0 0 0 / 0.6);
    }

    .name:hover span {
        text-decoration: underline;
    }

    /* Wraps under the name as a whole when it doesn't fit beside it */
    .items {
        flex: 1 1 auto;
    }
</style>
