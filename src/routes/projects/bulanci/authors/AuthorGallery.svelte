<script lang="ts">
    import type { BulanciAuthor } from "$src/data/bulanci";
    import { loc } from "$src/lib/loc";
    import IconUser from "@lucide/svelte/icons/user";
    import IconUsers from "@lucide/svelte/icons/users";
    import AuthorMosaic from "./AuthorMosaic.svelte";
    import { authorHref, formatYears, mapCountLabel } from "./authorList";

    let { authors }: { authors: BulanciAuthor[] } = $props();
</script>

<!-- Unlike map thumbnails, the cards are taller and have their text over the top of the image -->
<ul class="gallery">
    {#each authors as author (author.slug)}
        <li>
            <a href={authorHref(author.name)}>
                <AuthorMosaic
                    maps={author.topMaps}
                    isClan={author.isClan}
                    width={480}
                    aspectRatio="4 / 3" />
                <span class="overlay">
                    <span class="name">
                        {#if author.isClan}<IconUsers size="0.9em" />{:else}<IconUser
                                size="0.9em" />{/if}
                        {author.name}
                    </span>
                    <span class="meta">
                        {#if author.mapCount}
                            {loc(mapCountLabel(author.mapCount))}
                            {#if author.mapYears.length}· {formatYears(author.mapYears)}{/if}
                        {:else if author.webs.length}
                            {author.webs.map((web) => web.domain).join(", ")}
                        {/if}
                    </span>
                </span>
            </a>
        </li>
    {/each}
</ul>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
        gap: 1em;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    a {
        position: relative;
        display: block;
        color: inherit;
        text-decoration: none;
    }

    .overlay {
        position: absolute;
        inset: 0 0 auto 0;
        display: flex;
        flex-direction: column;
        padding: 10px 12px 2.5em;
        background: linear-gradient(rgb(0 0 0 / 0.85), transparent);
        color: white;
        line-height: 1.2;
    }

    .name {
        font-size: 1.15em;
        font-weight: 700;
        overflow-wrap: anywhere;
    }

    /* Overrides the global icon alignment, which doesn't suit Barlow's low-set letters */
    .name :global(.lucide-icon) {
        margin: 0 0.15em 0 0;
        vertical-align: -0.15em;
    }

    a:hover .name,
    a:focus-visible .name {
        text-decoration: underline;
    }

    .meta {
        font-size: 0.85em;
        opacity: 0.85;
        overflow-wrap: anywhere;
    }
</style>
