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

<div class="slides-page" data-pagefind-ignore="all">
    <a href={localizeHref(postHref(data.post))} class="backlink">
        <ArrowLeftIcon size={18} />
        <Loc cs="Zpět na přednášku" en="Back to the talk" />
    </a>
    <h2><Loc text={data.post.title} /></h2>
    <SlidesViewer url={data.slides.url} />
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
</style>
