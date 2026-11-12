<script lang="ts">
    import type { BulanciAuthor } from "$src/data/bulanci";
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import { localizeHref } from "$src/lib/paraglide/runtime";
    import IconMic from "@lucide/svelte/icons/mic";
    import IconMap from "@lucide/svelte/icons/map";
    import {
        authorHref,
        formatInlineHtml,
        formatYears,
        mapCountLabel,
        REACH_EXPLANATION,
        reachLabel,
    } from "./authorList";

    interface Props {
        /** An author with an interview */
        author: BulanciAuthor;
        /** Without the bio, websites and clans */
        compact?: boolean;
    }

    let { author, compact = false }: Props = $props();

    const interview = $derived(author.interview!);
    /** The real name is shown next to the nickname, unless it is the canonical name */
    const otherNames = $derived(author.aliases.filter((alias) => alias !== interview.name));
</script>

<article class="featured-author" class:compact>
    {#if interview.photo}
        <a href={authorHref(author.name)} class="photo" tabindex="-1" aria-hidden="true">
            <img src={interview.photo} alt="" loading="lazy" />
        </a>
    {/if}
    <div class="text">
        <h3>
            <a href={authorHref(author.name)}>{author.name}</a>
            {#if interview.name !== author.name}
                <span class="real-name">({interview.name})</span>
            {/if}
        </h3>
        {#if !compact && otherNames.length}
            <p class="aliases">
                <Loc cs="Též" en="Also known as" />
                {otherNames.join(", ")}
            </p>
        {/if}
        <p class="stats">
            {loc(mapCountLabel(author.mapCount))}
            {#if author.mapYears.length}· {formatYears(author.mapYears)}{/if}
            {#if author.reach}
                · <span title={loc(REACH_EXPLANATION)}>{loc(reachLabel(author.reach))}</span>
            {/if}
        </p>
        {#if !compact}
            {#if author.webs.length}
                <p class="webs">
                    <Loc cs="Weby" en="Websites" />:
                    {#each author.webs as web, i (web.domain)}
                        {#if i > 0},{" "}{/if}<a href={web.url}>{web.domain}</a>
                    {/each}
                </p>
            {/if}
            {#if author.clans.length}
                <p class="clans">
                    <Loc cs="Klany" en="Clans" />:
                    {#each author.clans as clan, i (clan)}
                        {#if i > 0},{" "}{/if}<a href={authorHref(clan)}>{clan}</a>
                    {/each}
                </p>
            {/if}
            {#if author.description}
                <p class="bio">{@html formatInlineHtml(loc(author.description))}</p>
            {/if}
        {/if}
        <p class="links">
            <a href={localizeHref("/interviews/" + interview.slug)}>
                <IconMic size="1em" />
                <Loc cs="Rozhovor" en="Interview" />
            </a>
            <a href={authorHref(author.name)}>
                <IconMap size="1em" />
                <Loc cs="Mapy a weby" en="Maps and websites" />
            </a>
        </p>
    </div>
</article>

<style>
    .featured-author {
        display: grid;
        grid-template-columns: 140px minmax(0, 1fr);
        gap: 1em;
        align-items: start;
    }

    .compact {
        grid-template-columns: 80px minmax(0, 1fr);
        gap: 0.75em;
    }

    .photo img {
        display: block;
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 8px;
    }

    h3 {
        margin: 0 0 0.25em;
        overflow-wrap: anywhere;
    }

    .compact h3 {
        font-size: 1.05em;
    }

    .real-name {
        color: var(--color-text-muted);
        font-weight: normal;
        font-size: 0.85em;
    }

    p {
        margin: 0.25em 0;
    }

    .aliases,
    .stats {
        color: var(--color-text-muted);
        font-size: 0.9em;
    }

    .stats [title] {
        cursor: help;
    }

    .webs,
    .clans {
        font-size: 0.9em;
        overflow-wrap: anywhere;
    }

    .bio {
        margin-top: 0.5em;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25em 1em;
        margin-top: 0.5em;
    }

    .links a {
        display: inline-flex;
        align-items: center;
        gap: 0.3em;
    }

    @media (max-width: 480px) {
        .featured-author:not(.compact) {
            grid-template-columns: 90px minmax(0, 1fr);
        }
    }
</style>
