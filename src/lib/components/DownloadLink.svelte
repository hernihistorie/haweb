<script lang="ts">
    import type { LocalizedString } from "$src/types";
    import LucideDownload from "@lucide/svelte/icons/download";
    import { formatFileSize } from "../fileSize";
    import Loc from "./Loc.svelte";

    const { title, url, filesize }: { title: LocalizedString; url: string; filesize?: number } =
        $props();
</script>

<a href={url} class="download">
    <LucideDownload style="vertical-align: top;" />
    <Loc>
        {#snippet cs()}
            Stáhnout <Loc text={title} />
        {/snippet}
        {#snippet en()}
            Download <Loc text={title} />
        {/snippet}
    </Loc>
    {#if filesize}
        ({formatFileSize(filesize)})
    {/if}
</a>

<style>
    .download {
        text-decoration: none;
    }

    .download:hover {
        text-decoration: underline;
    }
</style>
