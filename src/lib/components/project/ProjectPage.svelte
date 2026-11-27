<script lang="ts">
    import type { Project } from "$src/types";
    import type { Snippet } from "svelte";
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import ImageTitle from "#lib/components/ImageTitle.svelte";
    import { getLocale } from "#lib/paraglide/runtime.js";
    import { loc } from "#lib/loc.js";
    import { absoluteUrl, htmlToText } from "#lib/site.js";

    interface Props {
        project: Project;
        thin?: boolean;
        children: Snippet;
    }

    let { project, thin = true, children }: Props = $props();

    let bannerImage = $derived(project.bannerImage ?? project.image);
    let image = $derived((project.image ?? project.bannerImage)?.img.src);
</script>

<Meta title={project.fullname ?? project.name} />

<svelte:head>
    <meta property="og:title" content={loc(project.fullname ?? project.name)} />
    <meta property="og:type" content="website" />
    {#if project.description}
        <meta property="og:description" content={htmlToText(loc(project.description))} />
    {/if}
    {#if image}
        <meta
            property="og:image"
            content={absoluteUrl(image)}
            data-image={image}
            data-pagefind-meta="image[data-image]" />
    {/if}
    <meta property="og:locale" content={getLocale()} />
</svelte:head>

<article class={thin ? "thin" : ""}>
    {#if bannerImage}
        <div class="banner">
            <ImageTitle
                image={bannerImage}
                level={2}
                aspectRatio={5 / 2}
                uncropped={project.bannerUncropped}
                sizes={[{ width: `min(100vw, ${thin ? "800px" : "1400px"})` }]}>
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
    h2 {
        margin-top: 0.2em;
    }

    .banner {
        margin: 24px 0 32px;
    }
</style>
