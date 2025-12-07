<script lang="ts">
    import type { Project } from "$src/types";
    import type { Snippet } from "svelte";
	import Meta from "./Meta.svelte";
	import Loc from "./Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';

    interface Props {
        project: Project;
        thin?: boolean;
        children: Snippet;
    }

    let { project, thin = true, children }: Props = $props();
</script>

<Meta title={project.fullname ?? project.name} />

<article class={thin ? "thin" : ""}>
    <a href={localizeHref("/projects")} style="margin-bottom: -12px;">
        <Loc cs="Projekty Herního archivu" en="Czechoslovak Game Archive Projects" />
    </a>
    <h2>
        <Loc text={project.fullname ?? project.name} />
    </h2>
    {@render children?.()}
    <hr>
    <p>
        <Loc
            cs="V případě otázek či nejasností se nám ozvěte na <a href='mailto:info@herniarchiv.cz'>info@herniarchiv.cz</a>."
            en="If you have any questions, feel free to contact us at <a href='mailto:info@herniarchiv.cz'>info@herniarchiv.cz</a>."
        />
    </p>
</article>

<style>
    a {
        text-decoration: none; 
    }

    h2 {
        margin-top: 0.2em;
    }
</style>