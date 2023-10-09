<script lang="ts">
    import type { Chapters } from "$src/types";
    import slugify from 'slugify';
    export let chapters: Chapters;
</script>

<div class="table-of-contents">
    <div style="text-align: center;"><strong>Obsah</strong></div>
    <ul>
        {#each Object.entries(chapters) as [key, chapter]}
            <li><a href="#chapter-{chapter.slug}">{chapter.name}</a>
        {/each}
    </ul>
</div>

<style>

    .table-of-contents {
        text-align: left;
    }
    .table-of-contents :global(ul) {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .table-of-contents :global(li) {
        margin-bottom: 0.2em;
        padding-left: 1em;
        text-indent: -1em;
    }
    .table-of-contents :global(a) {
        text-decoration: none;
    }
    .table-of-contents :global(a:hover) {
        text-decoration: underline;
    }
</style>