<script lang="ts">
    import type { BulanciAuthor } from "$src/data/bulanci";
    import { loc } from "$src/lib/loc";
    import AuthorMosaic from "./AuthorMosaic.svelte";
    import { authorHref, formatYears, mapCountLabel } from "./authorList";

    let { authors }: { authors: BulanciAuthor[] } = $props();
</script>

<ul class="gallery">
    {#each authors as author (author.slug)}
        <li>
            <a href={authorHref(author.name)}>
                <AuthorMosaic maps={author.topMaps} isClan={author.isClan} width={480} />
                <span class="name">{author.name}</span>
                {#if author.aliases.length}
                    <span class="aliases">
                        {loc({ cs: "též", en: "aka" })}
                        {author.aliases.join(", ")}
                    </span>
                {/if}
                <span class="meta">
                    {#if author.mapCount}
                        {loc(mapCountLabel(author.mapCount))}
                        {#if author.mapYears.length}· {formatYears(author.mapYears)}{/if}
                    {:else if author.webs.length}
                        {author.webs.map((web) => web.domain).join(", ")}
                    {/if}
                </span>
            </a>
        </li>
    {/each}
</ul>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
        gap: 1.25em 1em;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    a {
        display: flex;
        flex-direction: column;
        color: inherit;
        line-height: 1.25;
        text-decoration: none;
    }

    a:hover .name,
    a:focus-visible .name {
        text-decoration: underline;
    }

    .name {
        padding-top: 0.35em;
        font-weight: 600;
        overflow-wrap: anywhere;
    }

    .aliases {
        font-size: 0.85em;
        overflow-wrap: anywhere;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .aliases,
    .meta {
        color: var(--color-text-muted);
    }

    .meta {
        font-size: 0.9em;
        overflow-wrap: anywhere;
    }
</style>
