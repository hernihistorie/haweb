<script lang="ts">
    import type { BulanciAuthor } from "$src/data/bulanci";
    import Box from "#lib/components/Box.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import { authorHref, mapCountLabel } from "./authorList";

    let { clan }: { clan: BulanciAuthor } = $props();
</script>

<Box class="no-margin">
    <h3><a href={authorHref(clan.name)}>{clan.name}</a></h3>
    {#if clan.webs.length}
        <p class="webs">
            {#each clan.webs as web, i (web.domain)}
                {#if i > 0},{" "}{/if}<a href={web.url}>{web.domain}</a>
            {/each}
        </p>
    {/if}
    {#if clan.members.length}
        <p>
            <span class="label"><Loc cs="Členové" en="Members" />:</span>
            {#each clan.members as member, i (member)}
                {#if i > 0},{" "}{/if}<a href={authorHref(member)}>{member}</a>
            {/each}
        </p>
    {/if}
    {#if clan.mapCount}
        <p class="label">{loc(mapCountLabel(clan.mapCount))}</p>
    {/if}
</Box>

<style>
    h3 {
        margin: 0 0 0.25em;
        font-size: 1.05em;
        overflow-wrap: anywhere;
    }

    p {
        margin: 0.25em 0;
        overflow-wrap: anywhere;
    }

    .webs {
        font-size: 0.9em;
    }

    .label {
        color: var(--color-text-muted);
        font-size: 0.9em;
    }
</style>
