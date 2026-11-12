<script lang="ts">
    import { page } from "$app/state";
    import Loc from "#lib/components/Loc.svelte";
    import Meta from "#lib/components/layout/Meta.svelte";
    import { englishPlural, loc } from "$src/lib/loc";
    import { getLocale, localizeHref } from "$src/lib/paraglide/runtime";
    import IconArchive from "@lucide/svelte/icons/archive";
    import IconCalendar from "@lucide/svelte/icons/calendar";
    import IconCloud from "@lucide/svelte/icons/cloud";
    import IconGlobe from "@lucide/svelte/icons/globe";
    import IconMap from "@lucide/svelte/icons/map";
    import IconMic from "@lucide/svelte/icons/mic";
    import IconShare from "@lucide/svelte/icons/share-2";
    import IconUser from "@lucide/svelte/icons/user";
    import IconUsers from "@lucide/svelte/icons/users";
    import BulanciMenu from "../../BulanciMenu.svelte";
    import MapList from "../../maps/MapList.svelte";
    import {
        AUTHORS_PATH,
        authorHref,
        formatInlineHtml,
        formatYears,
        mapCountLabel,
        REACH_EXPLANATION,
        reachLabel,
    } from "../authorList";

    const { data } = $props();
    const author = $derived(data.author);

    const ogDescription = $derived(
        author.description
            ? loc(author.description).replace(/<[^>]*>/g, "")
            : loc(
                  author.isClan
                      ? { cs: "Klan hráčů hry Bulánci", en: "A clan of Bulánci players" }
                      : {
                            cs: "Autor fanouškovského obsahu do hry Bulánci",
                            en: "Bulánci fan creator",
                        },
              ),
    );

    const ogImage = $derived(author.interview?.photo ?? author.topMaps[0]?.screenshot?.large);

    const uploadsLabel = (count: number): string =>
        loc({
            cs: `${count} nahrání`,
            en: `${count} ${englishPlural(count, "upload", "uploads")}`,
        });
</script>

<Meta title={{ cs: `${author.name} – Bulánci`, en: `${author.name} – Bulánci` }} />

<svelte:head>
    <meta property="og:title" content={author.name} />
    <meta property="og:type" content="profile" />
    <meta property="og:description" content={ogDescription} />
    {#if ogImage}
        <meta
            property="og:image"
            content={new URL(ogImage, page.url.origin).href}
            data-pagefind-meta="image[content]" />
    {/if}
    <meta property="og:locale" content={getLocale()} />
</svelte:head>

<BulanciMenu />

<article class="author-page">
    <a href={localizeHref(`${AUTHORS_PATH}/`)} class="back">
        <Loc cs="Autoři a kolektivy" en="Creators and Collectives" />
    </a>

    <div class="header" class:with-photo={author.interview?.photo}>
        {#if author.interview?.photo}
            <img class="photo" src={author.interview.photo} alt={author.interview.name} />
        {/if}
        <div>
            <h2>
                {author.name}
                {#if author.isClan}<span class="kind"><Loc cs="klan" en="clan" /></span>{/if}
            </h2>
            {#if author.aliases.length}
                <p class="aliases">
                    <Loc cs="Též" en="Also known as" />
                    {author.aliases.join(", ")}
                </p>
            {/if}

            <dl class="meta">
                {#if author.mapCount}
                    <dt><IconMap size="1em" /> <Loc cs="Mapy" en="Maps" /></dt>
                    <dd>
                        <a href="#maps">{loc(mapCountLabel(author.mapCount))}</a>
                        {#if author.reach}
                            · <span title={loc(REACH_EXPLANATION)} class="help"
                                >{loc(reachLabel(author.reach))}</span>
                        {/if}
                    </dd>
                {/if}

                {#if author.mapYears.length}
                    <dt><IconCalendar size="1em" /> <Loc cs="Aktivní" en="Active" /></dt>
                    <dd>{formatYears(author.mapYears)}</dd>
                {/if}

                {#if author.webs.length}
                    <dt>
                        <IconGlobe size="1em" />
                        {#if author.webs.length > 1}<Loc cs="Weby" en="Websites" />{:else}<Loc
                                cs="Web"
                                en="Website" />{/if}
                    </dt>
                    <dd>
                        <ul>
                            {#each author.webs as web (web.domain)}
                                <li>
                                    <a href={web.url} class="archive-link">
                                        {web.domain}
                                        <IconArchive size="0.9em" aria-label="Wayback Machine" />
                                    </a>
                                    {#if web.shownName}
                                        <span class="muted" lang="cs">{web.shownName}</span>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </dd>
                {/if}

                {#if author.clans.length}
                    <dt>
                        <IconUsers size="1em" />
                        {#if author.clans.length > 1}<Loc cs="Klany" en="Clans" />{:else}<Loc
                                cs="Klan"
                                en="Clan" />{/if}
                    </dt>
                    <dd>
                        {#each author.clans as clan, i (clan)}
                            {#if i > 0},{" "}{/if}<a href={authorHref(clan)}>{clan}</a>
                        {/each}
                    </dd>
                {/if}

                {#if author.isClan && author.members.length}
                    <dt><IconUser size="1em" /> <Loc cs="Členové" en="Members" /></dt>
                    <dd>
                        {#each author.members as member, i (member)}
                            {#if i > 0},{" "}{/if}<a href={authorHref(member)}>{member}</a>
                        {/each}
                    </dd>
                {/if}

                {#if author.interview}
                    <dt><IconMic size="1em" /> <Loc cs="Rozhovor" en="Interview" /></dt>
                    <dd>
                        <a href={localizeHref("/interviews/" + author.interview.slug)}>
                            <Loc text={author.interview.title} />
                        </a>
                    </dd>
                {/if}
            </dl>
        </div>
    </div>

    {#if author.description}
        <section>
            <p class="bio">{@html formatInlineHtml(loc(author.description))}</p>
        </section>
    {/if}

    {#if data.places.length}
        <section>
            <h3>
                <IconShare size="0.9em" />
                <Loc cs="Kde se mapy šířily" en="Where the maps were shared" />
            </h3>
            <ul class="places">
                {#each data.places as place (place.kind === "web" ? place.domain : place.service)}
                    <li>
                        {#if place.kind === "storage"}
                            <IconCloud size="1em" class="place-icon" />
                            {place.service}
                            <span class="muted">({uploadsLabel(place.count)})</span>
                        {:else}
                            <IconGlobe size="1em" class="place-icon" />
                            {#if place.web?.canonUrl}
                                <a href={place.web.canonUrl} class="archive-link">
                                    {place.domain}
                                    <IconArchive size="0.9em" aria-label="Wayback Machine" />
                                </a>
                            {:else}
                                {place.domain}
                            {/if}
                            {#if place.web?.shownName}
                                <span class="muted" lang="cs">{place.web.shownName}</span>
                            {/if}
                        {/if}
                        <span class="map-count">{loc(mapCountLabel(place.mapCount))}</span>
                    </li>
                {/each}
            </ul>
        </section>
    {/if}

    {#if data.maps.length}
        <section>
            <h3>
                <IconMap size="0.9em" />
                {#if author.isClan}
                    <Loc cs="Mapy klanu" en="Maps by the clan" />
                {:else}
                    <Loc cs="Mapy autora" en="Maps by the author" />
                {/if}
            </h3>
            <MapList maps={data.maps} authorFilter={false} />
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
        margin: 0.25em 0 0.1em;
        overflow-wrap: anywhere;
    }

    .kind {
        margin-left: 0.25em;
        color: var(--color-text-muted);
        font-size: 0.6em;
        font-weight: normal;
        vertical-align: middle;
    }

    .header.with-photo {
        display: grid;
        grid-template-columns: 200px minmax(0, 1fr);
        gap: 1.5em;
        align-items: start;
        margin-top: 0.5em;
    }

    .photo {
        display: block;
        width: 100%;
        border-radius: 8px;
    }

    @media (max-width: 600px) {
        .header.with-photo {
            grid-template-columns: 110px minmax(0, 1fr);
            gap: 1em;
        }
    }

    .aliases {
        margin: 0 0 1em;
        color: var(--color-text-muted);
        overflow-wrap: anywhere;
    }

    /* Overrides the global side-by-side definition list style: values go below their labels */
    .meta {
        --icon-slot: 1.4rem;
        display: block;
        margin: 1em 0 0;
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

    .meta dd {
        margin: 0 0 0.75em;
        padding-left: var(--icon-slot);
        overflow-wrap: anywhere;
    }

    .meta ul,
    .places {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .help {
        cursor: help;
    }

    section {
        margin-top: 2em;
    }

    .bio {
        max-width: 50em;
    }

    h3 {
        margin-bottom: 0.5em;
    }

    h3 :global(svg),
    .places :global(.place-icon) {
        vertical-align: -0.125em;
        color: var(--color-text-muted);
    }

    .places li {
        margin: 0.2em 0;
        overflow-wrap: anywhere;
    }

    .archive-link {
        display: inline-flex;
        align-items: center;
        gap: 0.25em;
    }

    .muted,
    .map-count {
        color: var(--color-text-muted);
        font-size: 0.85em;
    }

    .map-count::before {
        content: "· ";
    }
</style>
