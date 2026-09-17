<script lang="ts">
	import type { LocalizedString } from "$src/types";
	import LucideDownload from "@lucide/svelte/icons/download";
	import Loc from "./Loc.svelte";

	function formatFileSize(bytes?: number | null): string {
		if (!bytes) return 'unknown size';
		const units = ['B', 'KiB', 'MiB', 'GiB'];
		let i = 0;
		while (bytes >= 1024 && i < units.length - 1) {
			bytes /= 1024;
			i++;
		}
		return `${bytes.toFixed(1)} ${units[i]}`;
	}

    const { title, url, filesize }: { title: LocalizedString, url: string, filesize?: number } = $props();
</script>

<a href="{ url }" class="download">
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