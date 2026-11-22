<script lang="ts">
    import type { BulanciWeb } from "$src/data/bulanci/webs.server";
    import { webHref } from "./webs/webList";

    interface Props {
        domain: string;
        /** Set if the website is documented and has its own page */
        web: BulanciWeb | null;
        /** Show the website's name next to the domain */
        showName?: boolean;
    }

    let { domain, web, showName = true }: Props = $props();
</script>

<!--
    A documented website links to its own page. Other websites are only known by their domain.
-->
{#if web}
    <a href={webHref(web)}>{domain}</a>{#if showName && web.shownName}
        <span class="name" lang="cs">{web.shownName}</span>
    {/if}
{:else}
    {domain}
{/if}

<style>
    .name {
        margin-left: 0.3em;
        color: var(--color-text-muted);
        font-size: 0.85em;
    }
</style>
