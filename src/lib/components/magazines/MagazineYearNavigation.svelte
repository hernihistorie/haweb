<script lang="ts">
    import Loc from '$src/lib/components/Loc.svelte';
	import MagazineLogo from '$src/lib/components/magazines/MagazineLogo.svelte';
	import PipeList from '$src/lib/components/PipeList.svelte';
	import type { MagazineInfo } from '$src/lib/magdb';

	let { magazine, years, displayedYear }: { magazine: MagazineInfo, years: string[] | null, displayedYear: string | null } = $props();
    
</script>

<div class="logo-years">
    <div class="magazine-logo-wrapper">
        {#if magazine.logos && magazine.logos.length > 0}
            <MagazineLogo logo={magazine.logos[0]} magazine={magazine} />
        {/if}
    </div>
    <div class="years {displayedYear ? 'with-selected' : ''}">
        {#if years && years.length > 0}
            <div class="year-text">
                <Loc cs="ročník" en="year" />
            </div>
            <PipeList>
                {#each years as year}
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

    @media (max-width: 700px) {
        .logo-years {
            flex-direction: column;
            align-items: center;
        }
    }
</style>

