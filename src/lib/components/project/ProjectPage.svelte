<script lang="ts">
    import type { Project } from "$src/types";
    import type { Snippet } from "svelte";
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import ImageTitle from "#lib/components/ImageTitle.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";

    interface Props {
        project: Project;
        thin?: boolean;
        /** Show a link back to the projects listing */
        backLink?: boolean;
        children: Snippet;
    }

    let { project, thin = true, backLink = true, children }: Props = $props();
</script>

<Meta title={project.fullname ?? project.name} />

<article class={thin ? "thin" : ""}>
    {#if backLink}
        <a href={localizeHref("/projects")} style="margin-bottom: -12px;">
            <Loc cs="Projekty Herního archivu" en="Czechoslovak Game Archive Projects" />
        </a>
    {/if}
    {#if project.image}
        <div class="banner">
            <ImageTitle src={project.image} level={2} aspectRatio="5/2">
                <Loc text={project.fullname ?? project.name} />
            </ImageTitle>
        </div>
    {:else}
        <h2>
            <Loc text={project.fullname ?? project.name} />
        </h2>
    {/if}
    {@render children?.()}
    <hr />
    <p>
        <Loc
            cs="V případě otázek či nejasností se nám ozvěte na <a href='mailto:info@herniarchiv.cz'>info@herniarchiv.cz</a>."
            en="If you have any questions, feel free to contact us at <a href='mailto:info@herniarchiv.cz'>info@herniarchiv.cz</a>." />
    </p>
</article>

<style>
    a {
        text-decoration: none;
    }

    h2 {
        margin-top: 0.2em;
    }

    .banner {
        margin: 24px 0 32px;
    }
</style>
