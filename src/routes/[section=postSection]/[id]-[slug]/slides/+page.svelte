<script lang="ts">
    import Loc from "#lib/components/Loc.svelte";
    import Meta from "#lib/components/layout/Meta.svelte";
    import SlidesViewer from "#lib/components/post/SlidesViewer.svelte";
    import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { postHref } from "#lib/posts.js";
    import { loc } from "$src/lib/loc";

    const { data } = $props();
</script>

<Meta
    title={{
        cs: `Slajdy: ${loc(data.post.title)}`,
        en: `Slides: ${loc(data.post.title)}`,
    }}
    noindex={!data.post.published} />

<!-- Indexed for search only for the slide text, the viewer itself has nothing to find -->
<div class="slides-page" data-pagefind-ignore={data.slideText?.some(Boolean) ? undefined : "all"}>
    <a href={localizeHref(postHref(data.post))} class="backlink" data-pagefind-ignore>
        <ArrowLeftIcon size={18} />
        <Loc cs="Zpět na přednášku" en="Back to the talk" />
    </a>
    <h2><Loc text={data.post.title} /></h2>
    <div data-pagefind-ignore>
        <SlidesViewer url={data.slides.url} />
    </div>

    {#if data.slideText?.some(Boolean)}
        <details class="slide-text">
            <summary>
                <h3><Loc cs="Text slajdů" en="Slide text" /></h3>
            </summary>
            <ol>
                {#each data.slideText as text, i (i)}
                    <!-- Skip slides without text, but keep their numbers -->
                    {#if text}
                        <li value={i + 1}>{text}</li>
                    {/if}
                {/each}
            </ol>
        </details>
    {/if}
</div>

<style>
    .slides-page {
        max-width: 1100px;
        margin: 2em auto 0;
    }

    .backlink {
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .backlink :global(.lucide-icon) {
        margin-bottom: 0;
    }

    h2 {
        font-size: 1.4em;
        line-height: 1.2;
        margin: 0.3em 0 0.5em;
    }

    .slide-text {
        margin: 1em 0 2em;
    }

    .slide-text summary {
        cursor: pointer;
    }

    .slide-text summary h3 {
        display: inline;
    }

    .slide-text li {
        margin-bottom: 0.75em;
        white-space: pre-line;
    }
</style>
