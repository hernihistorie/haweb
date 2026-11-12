<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/state";
    import Loc from "#lib/components/Loc.svelte";
    import Meta from "#lib/components/layout/Meta.svelte";
    import { loc } from "$src/lib/loc";
    import { getLocale, localizeHref } from "$src/lib/paraglide/runtime";
    import IconArchive from "@lucide/svelte/icons/archive";
    import IconCalendar from "@lucide/svelte/icons/calendar";
    import IconCloud from "@lucide/svelte/icons/cloud";
    import IconGlobe from "@lucide/svelte/icons/globe";
    import IconMusic from "@lucide/svelte/icons/music";
    import IconNotebookPen from "@lucide/svelte/icons/notebook-pen";
    import IconQuote from "@lucide/svelte/icons/quote";
    import IconSignature from "@lucide/svelte/icons/signature";
    import IconUser from "@lucide/svelte/icons/user";
    import IconUsers from "@lucide/svelte/icons/users";
    import BulanciMenu from "../../BulanciMenu.svelte";
    import BulanciWebLink from "../../BulanciWebLink.svelte";
    import MapGallery from "../MapGallery.svelte";
    import MapImage from "../MapImage.svelte";
    import { MAPS_PATH, mapListHref, UNKNOWN } from "../mapList";
    import { authorHref, formatInlineHtml } from "../../authors/authorList";

    const { data } = $props();
    const map = $derived(data.map);

    // Going back to the list restores its search, filters and page if we came from there
    const listPath = localizeHref(MAPS_PATH);
    let backHref = $state(listPath);
    afterNavigate(({ from }) => {
        if (from && from.url.pathname.replace(/\/$/, "") === listPath) {
            backHref = from.url.pathname + from.url.search + "#maps";
        }
    });

    const authorsLabel = $derived(
        map.authors.length > 1 ? { cs: "Autoři", en: "Authors" } : { cs: "Autor", en: "Author" },
    );

    const ogDescription = $derived(
        map.description?.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ") ??
            [
                loc({ cs: "Fanouškovská mapa do hry Bulánci", en: "Fan map for Bulánci" }),
                map.authors.length
                    ? loc({ cs: "od", en: "by" }) + " " + map.authors.join(", ")
                    : "",
                map.year ? `(${map.year})` : "",
            ]
                .filter(Boolean)
                .join(" "),
    );

    /** Matches description sources that are a URL without the scheme */
    const URL_LIKE = /^[\w-]+(\.[\w-]+)+(\/\S*)?$/;

    /** A Wayback Machine link to the source, around the time the map was published */
    const waybackHref = (source: string): string =>
        `https://web.archive.org/web/${map.year ?? 2010}/http://${source}`;

    const formatSource = (source: string): string =>
        source.startsWith("UlozTo_") ? `Ulož.to (${source.slice("UlozTo_".length)})` : source;
</script>

<Meta title={{ cs: `${map.name} – Mapy Bulánků`, en: `${map.name} – Bulánci maps` }} />

<svelte:head>
    <meta property="og:title" content={map.name} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={ogDescription} />
    {#if map.screenshot && !map.nsfw}
        <meta
            property="og:image"
            content={new URL(map.screenshot.large, page.url.origin).href}
            data-pagefind-meta="image[content]"
        />
    {/if}
    <meta property="og:locale" content={getLocale()} />
</svelte:head>

{#snippet inCzech()}
    {#if getLocale() !== "cs"}<span class="in-czech">(in Czech)</span>{/if}
{/snippet}

{#snippet source(source: string)}
    {#if URL_LIKE.test(source)}
        <a href={waybackHref(source)} class="archive-link">
            {source}
            <IconArchive size="0.9em" aria-label="Wayback Machine" />
        </a>
    {:else}
        <span lang="cs">{formatSource(source)}</span>
    {/if}
{/snippet}

<BulanciMenu />

<article class="map-page">
    <a href={backHref} class="back">
        <Loc cs="Fanouškovské mapy do Bulánků" en="Bulánci fan maps" />
    </a>

    <h2>{map.name}</h2>

    <div class="main">
        <div class="screenshot">
            <MapImage
                image={map.screenshot}
                nsfw={map.nsfw}
                crop={false}
                zoomable
                eager
                alt={loc({ cs: "Snímek mapy ze hry", en: "In-game screenshot of the map" })}
                sizes="(max-width: 760px) calc(100vw - 2em), 800px"
            />
        </div>

        <aside class="side">
            <dl class="meta">
                <dt>
                    {#if map.authors.length > 1}<IconUsers size="1em" />{:else}<IconUser
                            size="1em"
                        />{/if}
                    <Loc text={authorsLabel} />
                </dt>
                <dd>
                    {#each map.authors as author, i (author)}
                        {#if i > 0},{" "}{/if}<a href={authorHref(author)}>{author}</a>
                    {:else}
                        <a href={mapListHref({ author: UNKNOWN })} class="unknown">
                            <Loc cs="neznámý" en="unknown" />
                        </a>
                    {/each}
                </dd>

                {#if map.authorEap}
                    <dt>
                        <IconSignature size="1em" />
                        <Loc cs="Autor uvedený v souboru" en="Author stored in the file" />
                    </dt>
                    <dd>{map.authorEap}</dd>
                {/if}

                <dt><IconCalendar size="1em" /> <Loc cs="Rok" en="Year" /></dt>
                <dd>
                    {#if map.year}
                        <a href={mapListHref({ year: String(map.year) })}>{map.year}</a>
                    {:else}
                        <a href={mapListHref({ year: UNKNOWN })} class="unknown">
                            <Loc cs="neznámý" en="unknown" />
                        </a>
                    {/if}
                </dd>

                {#if map.music}
                    <dt><IconMusic size="1em" /> <Loc cs="Hudba" en="Music" /></dt>
                    <dd>{map.music}</dd>
                {/if}
                <!-- TODO: a download button for the .eap file goes here, once the files are published -->
                <a href="#">Download (TODO)</a>
            </dl>

            {#if map.loadingScreen}
                <!-- Fills the space left below the metadata, flush with the bottom of the screenshot -->
                <figure class="loading-screen">
                    <figcaption><Loc cs="Načítací obrazovka" en="Loading screen" /></figcaption>
                    <div class="loading-screen-image">
                        <MapImage
                            image={map.loadingScreen}
                            nsfw={map.nsfw}
                            crop={false}
                            zoomable
                            alt={loc({
                                cs: "Načítací obrazovka mapy",
                                en: "Loading screen of the map",
                            })}
                            sizes="(max-width: 760px) calc(100vw - 2em), 400px"
                        />
                    </div>
                </figure>
            {/if}
        </aside>

        {#if data.places.length}
            <section class="places-section">
                <h3>
                    <IconGlobe size="0.9em" />
                    <Loc cs="Kde se mapa šířila" en="Where the map was shared" />
                </h3>
                <ul class="places">
                    {#each data.places as place (place.kind === "web" ? place.domain : place.service)}
                        <li>
                            {#if place.kind === "storage"}
                                <IconCloud size="1em" class="place-icon" />
                                {place.service}
                                {#if place.count > 1}<span class="muted">({place.count}×)</span
                                    >{/if}
                            {:else}
                                <IconGlobe size="1em" class="place-icon" />
                                <BulanciWebLink domain={place.domain} web={place.web} />
                            {/if}
                        </li>
                    {/each}
                </ul>
            </section>
        {/if}

        <aside class="technical">
            <h3><Loc cs="Technické údaje" en="Technical details" /></h3>
            <dl class="meta">
                <dt><Loc cs="Soubor" en="File" /></dt>
                <dd><code>{map.filename}.eap</code></dd>
                {#if map.guid}
                    <dt>GUID</dt>
                    <dd><code>{map.guid}</code></dd>
                {/if}
                {#if map.descriptionSource && !map.description}
                    <dt><Loc cs="Zdroj datace" en="Source of the year" /></dt>
                    <dd>{@render source(map.descriptionSource)}</dd>
                {/if}
                {#if map.duplicates.length}
                    <dt><Loc cs="Šířila se také jako" en="Also shared as" /></dt>
                    <dd>
                        <ul>
                            {#each map.duplicates as duplicate (duplicate.filename)}
                                <li>
                                    <code>{duplicate.filename}.eap</code>
                                    {#if duplicate.guid}
                                        <br /><code class="muted">{duplicate.guid}</code>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </dd>
                {/if}
            </dl>
        </aside>
    </div>

    {#if map.descriptionNote}
        <section>
            <h3>
                <IconNotebookPen size="0.9em" />
                <Loc cs="Poznámka kurátora" en="Curator's note" />
                {@render inCzech()}
            </h3>
            <p lang="cs">{map.descriptionNote}</p>
        </section>
    {/if}

    {#if data.moreByAuthor.length}
        <section>
            <h3>
                <Loc cs="Další mapy od autora" en="More by" />
                {map.authors.join(", ")}
            </h3>
            <MapGallery maps={data.moreByAuthor} />
            {#if data.moreByAuthorCount > data.moreByAuthor.length}
                <p class="show-all">
                    <a href={authorHref(map.authors[0]) + "#maps"}>
                        <Loc cs="Zobrazit všech" en="Show all" />
                        {data.moreByAuthorCount}
                    </a>
                </p>
            {/if}
        </section>
    {/if}

    {#if data.sameName.length}
        <section>
            <h3><Loc cs="Další mapy se jménem" en="Other maps called" /> „{map.name}“</h3>
            <MapGallery maps={data.sameName} />
        </section>
    {/if}
</article>

<style>
    .back {
        text-decoration: none;
    }

    .back:hover,
    .back:focus-visible {
        text-decoration: underline;
    }

    h2 {
        margin-top: 0.25em;
        overflow-wrap: anywhere;
    }

    /*
     * The screenshot sits in the first row only, next to the metadata and loading screen.
     * The technical details continue below them in the second row.
     */
    .main {
        display: grid;
        grid-template-columns: minmax(0, 800px) minmax(17em, 1fr);
        column-gap: 1.5em;
        /* Width of the icons before the labels, by which the values are indented too */
        --icon-slot: 1.4rem;
    }

    .screenshot {
        grid-row: 1;
    }

    .places-section {
        grid-row: 2;
        grid-column: 1;
        margin-top: 0;
    }

    /* Stretched to the screenshot's height, so the loading screen can line up with its bottom */
    aside {
        grid-column: 2;
    }

    /*
     * Doesn't contribute to the row's height, so the row is as tall as the screenshot
     * and this stretches to match it. The loading screen gets the space left over.
     */
    .side {
        display: grid;
        grid-template-rows: auto minmax(0, 1fr);
        contain: size;
    }

    @media (max-width: 760px) {
        .main {
            grid-template-columns: minmax(0, 1fr);
            row-gap: 1.5em;
        }

        .screenshot,
        .places-section,
        aside {
            grid-row: auto;
            grid-column: 1;
        }
    }

    /* Overrides the global side-by-side definition list style: values go below their labels */
    .meta {
        display: block;
        margin: 0;
    }

    .meta dt,
    .meta dd {
        width: auto;
    }

    .meta dt {
        display: grid;
        grid-template-columns: var(--icon-slot) 1fr;
        align-items: center;
        color: var(--color-text-muted);
        font-size: 0.85em;
        font-weight: normal;
    }

    .meta dt :global(svg) {
        display: block;
    }

    .meta a {
        text-decoration: none;
    }

    .meta a:hover,
    .meta a:focus-visible {
        text-decoration: underline;
    }

    .meta dd {
        margin: 0 0 0.75em;
        padding-left: var(--icon-slot);
        overflow-wrap: anywhere;
    }

    /* No icons, so the labels are indented instead */
    .technical dt {
        display: block;
        padding-left: var(--icon-slot);
    }

    .technical code {
        font-size: 0.85em;
    }

    .technical ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Side by side with the places' heading, so they share their margins */
    .main h3 {
        margin: 1.25rem 0 0.5em;
    }

    .unknown {
        color: var(--color-text-muted);
    }

    /* The caption and image sit at the bottom of the space left over */
    .loading-screen {
        --caption-height: 1.6rem;
        container-type: size;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin: 0;
        border-top: 0.5em solid transparent;
    }

    .loading-screen figcaption {
        height: var(--caption-height);
        padding: 0 0 0 var(--icon-slot);
        color: var(--color-text-muted);
        font-size: 0.85em;
        font-style: normal;
        line-height: 1.25rem;
        text-align: left;
    }

    /* As large as fits below the caption while keeping the 4:3 aspect ratio */
    .loading-screen-image :global(.map-image) {
        width: min(100cqw, (100cqh - var(--caption-height)) * 4 / 3);
    }

    /* Narrow layouts with a lot of metadata leave room only for a useless thumbnail */
    @container (max-height: 6rem) {
        .loading-screen > * {
            display: none;
        }
    }

    @media (max-width: 760px) {
        .side {
            display: block;
            contain: none;
        }

        .loading-screen {
            container-type: normal;
            display: block;
        }

        .loading-screen-image :global(.map-image) {
            width: auto;
        }
    }

    section {
        margin-top: 2em;
    }

    h3 {
        margin-bottom: 0.5em;
    }

    .in-czech,
    .muted {
        color: var(--color-text-muted);
        font-size: 0.85em;
        font-weight: normal;
    }

    blockquote {
        max-width: 50em;
        margin: 0;
        padding-left: 1em;
        border-left: 3px solid var(--color-secondary);
        font-style: italic;
    }

    .citation {
        margin-top: 0.5em;
        font-size: 0.9em;
        color: var(--color-text-muted);
    }

    .archive-link {
        display: inline-flex;
        align-items: center;
        gap: 0.25em;
    }

    .places {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .places li {
        margin: 0.2em 0;
    }

    /* Overrides the global icon alignment, which doesn't suit Barlow's low-set letters */
    .places :global(.place-icon),
    h3 :global(.lucide-icon) {
        margin: 0;
        vertical-align: -0.15em;
        color: var(--color-text-muted);
    }

    .show-all {
        margin-top: 0.75em;
    }
</style>
