<script lang="ts">
  import MagazineYearNavigation from '../../../../lib/components/magazines/MagazineYearNavigation.svelte';

    import IconQuote from "@lucide/svelte/icons/quote";
    import IconBookOpenText from "@lucide/svelte/icons/book-open-text";
    import IconGlobe from "@lucide/svelte/icons/globe";
	import { page } from '$app/state';
	import Meta from '$src/lib/components/layout/Meta.svelte';
    import Loc from '$src/lib/components/Loc.svelte';
	import MagazineIssueBox from '$src/lib/components/magazines/MagazineIssueBox.svelte';
	import MagazinesMenu from '$src/lib/components/magazines/MagazinesMenu.svelte';
	import type { PageProps } from './$types';
	import BulletPoint from "$src/lib/components/BulletPoint.svelte";
	import { building } from "$app/environment";

	let { data }: PageProps = $props();
    
    let displayedYear: string | null = $derived.by(() => 
        (building ? null : page.url.searchParams.get('year')) ?? (Object.keys(data.issues_by_year).length == 1 ? Object.keys(data.issues_by_year)[0] : null)
    );
</script>

<Meta title={{
    cs: `Časopis ${data.magazine.title}`,
    en: `Magazine ${data.magazine.title}`
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

<MagazineYearNavigation magazine={data.magazine} years={Object.keys(data.issues_by_year)} {displayedYear} />

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
    <MagazineYearNavigation magazine={data.magazine} years={Object.keys(data.issues_by_year)} {displayedYear} />
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
    .issues {
        margin: 4em 0;
    }

    .guide {
        margin: 1em 280px;
        font-size: 1.2em;
        color: var(--color-secondary);
        user-select: none;
        white-space: nowrap;
    }
    .arrow {
        font-size: 1.5em;
        margin-left: 0.5em;
    }

    @media (max-width: 700px) {
        .guide {
            margin: 1em 2em;
        }
    }
</style>