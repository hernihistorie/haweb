<script lang="ts">
    import type { BulanciWeb } from "$src/data/bulanci";
    import { loc } from "$src/lib/loc";
    import { localizeHref } from "$src/lib/paraglide/runtime";
    import IconArchive from "@lucide/svelte/icons/archive";

    interface Props {
        domain: string;
        /** Set if the website is documented on the webs page */
        web: BulanciWeb | null;
        /** Show the website's name next to the domain */
        showName?: boolean;
    }

    let { domain, web, showName = true }: Props = $props();
</script>

<!--
    A documented website links to its entry on the webs page, plus its archived version.
    Other websites are only known by their domain.
-->
{#if web}
    <a href={localizeHref(`/projects/bulanci/webs#web-${web.id}`)}>{domain}</a>{#if web.canonUrl}<a
            href={web.canonUrl}
            class="archive-link"
            title={loc({ cs: "Archivovaná verze", en: "Archived version" })}
            ><IconArchive size="0.9em" aria-label="Wayback Machine" /></a
        >{/if}{#if showName && web.shownName}
        <span class="name" lang="cs">{web.shownName}</span>
    {/if}
{:else}
    {domain}
{/if}

<style>
    .archive-link {
        margin-left: 0.25em;
    }

    /* Overrides the global icon alignment, which doesn't suit Barlow's low-set letters */
    .archive-link :global(.lucide-icon) {
        margin: 0;
        vertical-align: -0.15em;
    }

    .name {
        margin-left: 0.3em;
        color: var(--color-text-muted);
        font-size: 0.85em;
    }
</style>
