<script lang="ts">
    import { page } from "$app/state";
    import Loc from "#lib/components/Loc.svelte";
    import Meta from "#lib/components/layout/Meta.svelte";
    import ArchivedSite from "#lib/components/archive/ArchivedSite.svelte";
    import type { BulanciWebYear } from "$src/data/bulanci/webs.server";
    import { czechPlural, loc } from "$src/lib/loc";
    import { getLocale } from "$src/lib/paraglide/runtime";
    import IconArchive from "@lucide/svelte/icons/archive";
    import IconCalendar from "@lucide/svelte/icons/calendar";
    import IconCheck from "@lucide/svelte/icons/check";
    import IconLink from "@lucide/svelte/icons/link";
    import IconMap from "@lucide/svelte/icons/map";
    import IconServer from "@lucide/svelte/icons/server";
    import IconUser from "@lucide/svelte/icons/user";
    import IconUsers from "@lucide/svelte/icons/users";
    import BulanciMenu from "../../BulanciMenu.svelte";
    import MapList from "../../maps/MapList.svelte";
    import {
        authorHref,
        formatInlineHtml,
        formatYears,
        mapCountLabel,
    } from "../../authors/authorList";
    import DomainText from "../DomainText.svelte";
    import WebNeighborhood from "../WebNeighborhood.svelte";
    import {
        formatDate,
        WEB_FEATURE_GROUPS,
        webName,
        YEAR_SOURCE_LABELS,
    } from "../webList";

    const { data } = $props();
    const web = $derived(data.web);
    const name = $derived(webName(web));

    const description = $derived(loc(web.description));
    const ogDescription = $derived(description.replace(/<[^>]*>/g, ""));

    const exclusiveLabel = $derived({
        cs: `${web.exclusiveMapCount} ${czechPlural(web.exclusiveMapCount, "nalezena", "nalezeny", "nalezeno")} jen zde`,
        en: `${web.exclusiveMapCount} found nowhere else`,
    });

    /** Only what the website did offer, leaving out groups with nothing in them */
    const offeredFeatureGroups = $derived(
        WEB_FEATURE_GROUPS.map((group) => ({
            ...group,
            features: group.features.filter((feature) => web.features?.[feature.key] === true),
        })).filter((group) => group.features.length),
    );
</script>

<Meta title={{ cs: `${name} – Weby o Buláncích`, en: `${name} – Bulánci fan websites` }} />

<svelte:head>
    <meta property="og:title" content={name} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={ogDescription} />
    {#if web.screenshot}
        <meta
            property="og:image"
            content={new URL(web.screenshot.large, page.url.origin).href}
            data-pagefind-meta="image[content]" />
    {/if}
    <meta property="og:locale" content={getLocale()} />
</svelte:head>

{#snippet yearSource(year: BulanciWebYear)}
    <span class="muted">({loc(YEAR_SOURCE_LABELS[year.source])})</span>
{/snippet}

{#snippet year(year: BulanciWebYear)}
    {year.year}{" "}{@render yearSource(year)}
{/snippet}

<BulanciMenu />

<article class="web-page">
    {#if web.shownName}
        <h2 lang="cs">{web.shownName}</h2>
    {:else}
        <h2>
            <DomainText domain={web.domain} />
        </h2>
    {/if}
    {#if web.shownName}
        <p class="domain">{web.domain}</p>
    {/if}

    <div class="main">
        <div class="screenshot">
            <ArchivedSite
                url={data.snapshot.url}
                timestamp={data.snapshot.timestamp}
                screenshot={web.screenshot}
                {name}
                eager
                sizes="(max-width: 760px) calc(100vw - 2em), 800px" />
        </div>

        <aside class="side">
            <dl class="meta">
                <dt><IconCalendar size="1em" /> <Loc cs="Aktivní" en="Active" /></dt>
                <dd>
                    {#if !web.endYear}
                        <Loc cs="od" en="since" />
                        {@render year(web.startYear)}
                    {:else if web.startYear.source === web.endYear.source}
                        {formatYears([web.startYear.year, web.endYear.year])}
                        {@render yearSource(web.startYear)}
                    {:else if web.startYear.year === web.endYear.year}
                        <!-- The site's own statement is the stronger evidence -->
                        {@render year(web.startYear.source === "web" ? web.startYear : web.endYear)}
                    {:else}
                        {@render year(web.startYear)} – {@render year(web.endYear)}
                    {/if}
                </dd>

                {#if web.services.length}
                    <dt><IconServer size="1em" /> <Loc cs="Hosting" en="Hosting" /></dt>
                    <dd>{web.services.map((service) => service.name).join(", ")}</dd>
                {/if}

                {#if web.authors.length}
                    <dt>
                        {#if web.authors.length > 1}<IconUsers size="1em" />
                            <Loc cs="Provozovatelé" en="Run by" />
                        {:else}<IconUser size="1em" /> <Loc cs="Provozovatel" en="Run by" />{/if}
                    </dt>
                    <dd>
                        {#each web.authors as author, i (author)}
                            {#if i > 0},{" "}{/if}<a href={authorHref(author)}>{author}</a>
                        {/each}
                    </dd>
                {/if}

                {#if web.mapCount}
                    <dt><IconMap size="1em" /> <Loc cs="Mapy" en="Maps" /></dt>
                    <dd>
                        <a href="#maps">{loc(mapCountLabel(web.mapCount))}</a>
                        {#if web.mapYears.length}
                            <Loc cs="z let" en="from" />
                            {formatYears(web.mapYears)}
                        {/if}
                        {#if web.exclusiveMapCount}
                            <br /><span class="muted">{loc(exclusiveLabel)}</span>
                        {/if}
                    </dd>
                {/if}

                <dt><IconArchive size="1em" /> <Loc cs="Archivováno" en="Archived" /></dt>
                <dd>
                    <a href={web.canonUrl}>{formatDate(web.archivedAt, getLocale())}</a>
                    <br /><span class="muted url">{web.archivedUrl}</span>
                </dd>
            </dl>

            {#if offeredFeatureGroups.length}
                <section class="features">
                    <h3><Loc cs="Co web nabízel" en="What the website offered" /></h3>
                    {#each offeredFeatureGroups as group (group.features[0].key)}
                        <h4><Loc text={group.label} /></h4>
                        <ul>
                            {#each group.features as feature (feature.key)}
                                <li><IconCheck size="1em" /> <Loc text={feature.label} /></li>
                            {/each}
                        </ul>
                    {/each}
                </section>
            {/if}
        </aside>

        <div class="below-screenshot">
            <p class="description">{@html formatInlineHtml(description)}</p>
        </div>
    </div>

    {#if web.linksTo.length || web.linkedFrom.length}
        <section>
            <h3>
                <IconLink size="0.9em" />
                <Loc cs="Propojení s dalšími weby" en="Links with other websites" />
            </h3>
            <WebNeighborhood {web} />
        </section>
    {/if}

    {#if data.maps.length}
        <section id="maps">
            <h3>
                <IconMap size="0.9em" />
                <Loc cs="Mapy nalezené na webu" en="Maps found on the website" />
            </h3>
            <MapList maps={data.maps} />
        </section>
    {/if}
</article>

<style>
    h2 {
        margin: 0.25em 0 0;
        overflow-wrap: anywhere;
    }

    .domain {
        margin: 0;
        color: var(--color-text-muted);
        overflow-wrap: anywhere;
    }

    /*
     * The screenshot sits in the first row, the description and features right below it.
     * The metadata spans both rows, so a long list of links doesn't push the description down.
     */
    .main {
        display: grid;
        grid-template-columns: minmax(0, 800px) minmax(17em, 1fr);
        grid-template-rows: auto 1fr;
        column-gap: 1.5em;
        margin-top: 1em;
        /* Width of the icons before the labels, by which the values are indented too */
        --icon-slot: 1.4rem;
    }

    .screenshot {
        grid-row: 1;
        grid-column: 1;
    }

    .side {
        grid-row: 1 / span 2;
        grid-column: 2;
    }

    .below-screenshot {
        grid-row: 2;
        grid-column: 1;
    }

    @media (max-width: 760px) {
        .main {
            grid-template-columns: minmax(0, 1fr);
            grid-template-rows: none;
            row-gap: 1.5em;
        }

        .screenshot,
        .side,
        .below-screenshot {
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

    .url {
        font-size: 0.8em;
    }

    .muted {
        color: var(--color-text-muted);
        font-size: 0.85em;
    }

    .description {
        max-width: 50em;
        margin: 1em 0 0;
    }

    section {
        margin-top: 2em;
    }

    h3 {
        margin-bottom: 0.5em;
    }

    h3 :global(.lucide-icon) {
        margin: 0;
        vertical-align: -0.15em;
        color: var(--color-text-muted);
    }

    /* Below the metadata, the group labels and features lined up with its labels and values */
    section.features {
        margin-top: 1.5em;
    }

    .features h3 {
        margin-top: 0;
    }

    h4 {
        margin: 0.5em 0 0.1em;
        padding-left: var(--icon-slot);
        color: var(--color-text-muted);
        font-size: 0.85em;
        font-weight: normal;
    }

    .features ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .features li {
        display: grid;
        grid-template-columns: var(--icon-slot) 1fr;
        align-items: baseline;
        margin: 0.1em 0;
    }

    /* Baseline-aligned, an icon's bottom sits on the baseline, so it's moved slightly below */
    .features li :global(.lucide-icon) {
        position: relative;
        top: 0.15em;
        margin: 0;
        color: var(--color-primary);
    }
</style>
