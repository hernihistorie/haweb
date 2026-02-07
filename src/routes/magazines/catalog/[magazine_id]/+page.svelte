<script lang="ts">
    import IconQuote from "@lucide/svelte/icons/quote";
    import IconBookOpenText from "@lucide/svelte/icons/book-open-text";
    import IconGlobe from "@lucide/svelte/icons/globe";
	import { page } from '$app/state';
	import Meta from '$src/lib/components/layout/Meta.svelte';
    import Loc from '$src/lib/components/Loc.svelte';
	import MagazineIssueBox from '$src/lib/components/magazines/MagazineIssueBox.svelte';
	import MagazineLogo from '$src/lib/components/magazines/MagazineLogo.svelte';
	import MagazinesMenu from '$src/lib/components/magazines/MagazinesMenu.svelte';
	import PipeList from '$src/lib/components/PipeList.svelte';
	import type { PageProps } from './$types';
	import BulletPoint from "$src/lib/components/BulletPoint.svelte";

	let { data }: PageProps = $props();

	let displayedYear: string | null = $derived(page.url.searchParams.get('year'));

    if (Object.keys(data.issues_by_year).length == 1) {
        displayedYear = Object.keys(data.issues_by_year)[0];
    }
</script>

<Meta title={{
    cs: `${data.magazine.title} - Databáze časopisů`,
    en: `${data.magazine.title} - Magazines Database`
}} />

<MagazinesMenu />

<h2>
    <Loc cs="Časopis" en="Magazine" /> <em>{data.magazine.title}</em>
</h2>

{#if data.magazine.blurb.cs || data.magazine.blurb.en}
    <blockquote class="blurb">
        <IconQuote class="text-secondary" />
        <Loc cs={data.magazine.blurb.cs} en={data.magazine.blurb.en} />
    </blockquote>
{/if}

<p>
    <Loc cs={data.magazine.description.cs} en={data.magazine.description.en} />
</p>

{#if data.magazine.links.archive_org && data.magazine.links.archive_org.trim() !== ''}
    <p>
        <IconBookOpenText class="text-secondary" />
        <Loc>
            {#snippet cs()}
                Skeny tohoto časopisu jsou dostupné na <a href="{data.magazine.links.archive_org}">Internet Archive</a>.
            {/snippet}
            {#snippet en()}
                Scans of this magazine are available on <a href="{data.magazine.links.archive_org}">Internet Archive</a>.
            {/snippet}
        </Loc>
    </p>
{/if}

{#if Object.entries(data.magazine.links).some(([key, link]) => key != 'archive_org' && link && link.trim() !== '')}
    <p>
        <IconGlobe class="text-secondary" />
        <Loc cs="Další informace:" en="More information:" />
        {#each Object.entries(data.magazine.links).filter(([key, link]) => key != 'archive_org' && link && link.trim() !== '') as [key, link], i}
            {#if i > 0}
                &nbsp;<BulletPoint class="text-secondary" />
            {/if}
            <a href={link}>
                {#if key === 'wikipedia_cs'}
                    <Loc cs="Wikipedie" en="Czech Wikipedia" />
                {:else if key === 'wikipedia_en'}
                    <Loc cs="Anglická Wikipedie" en="English Wikipedia" />
                {:else if key === 'oldgames_sk'}
                    OldGames.sk
                {:else if key === 'ndk_cz'}
                    <Loc cs="Národní digitální knihovna" en="Czech National Digital Library" />
                {:else if key === 'dikda_sk'}
                    <Loc cs="Digitálna knižnica a digitálny archív" en="Slovak Digital Library and Digital Archive" />
                {:else if key === 'level_archiv'}
                    <Loc cs="Level Archiv" en="Level Archiv" />
                {:else}
                    {key}
                {/if}
            </a>
        {/each}
    </p>
{/if}

{#snippet magazineNavigation()}
    <div class="logo-years">
        <div class="magazine-logo-wrapper">
            {#if data.magazine.logos && data.magazine.logos.length > 0}
                <MagazineLogo logo={data.magazine.logos[0]} magazine={data.magazine} />
            {/if}
        </div>
        <div class="years {displayedYear ? 'with-selected' : ''}">
            {#if data.issues_by_year}
                <div class="year-text">
                    <Loc cs="ročník" en="year" />
                </div>
                <PipeList>
                    {#each Object.keys(data.issues_by_year) as year}
                        <li class="year" class:active={displayedYear === year}>
                            <a href={displayedYear === year ? `?` : `?year=${year}`}>
                                {#if year === 'None'}
                                    <Loc cs="zbytek" en="the rest" />
                                {:else if year === 'Speciály'}
                                    <Loc cs="speciály" en="specials" />
                                {:else}
                                    {year}
                                {/if}
                            </a>
                        </li>
                    {/each}
                </PipeList>
            {/if}
        </div>
    </div>
{/snippet}

{@render magazineNavigation() }

{#if displayedYear}
    <section class="thin">
        <ul class="issues unstyled">
            {#each data.issues_by_year[displayedYear] as issue}
                <li>
                    <MagazineIssueBox {issue} />
                </li>
            {/each}
        </ul>
    </section>
    {@render magazineNavigation() }
{:else}
    <div class="guide">
        <small>
            <Loc
                cs="zvolte ročník"
                en="select a year"
            />
        </small>
        <span class="arrow">⤴</span>
    </div>
{/if}

<style>
    .logo-years {
        display: flex;
        gap: 2em;
        align-items: center;
    }

    .year-text {
        /* color: var(--color-secondary); */
        /* font-weight: bold; */
        user-select: none;
        display: flex;
        align-items: center;
    }

    .magazine-logo-wrapper {
        width: 300px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .years {
        display: flex;
        gap: 1.5em;
    }

    .years.with-selected .year:not(.active) a {
        color: var(--color-secondary);
    }

    .issues {
        margin: 4em 0;
    }

    .guide {
        margin: 1em 280px;
        font-size: 1.2em;
        color: var(--color-secondary);
        user-select: none;
    }
    .arrow {
        font-size: 1.5em;
        margin-left: 0.5em;
    }
</style>