<script lang="ts">
    import type { InterviewData } from "$src/types";
	import Box from "$lib/components/Box.svelte";
	import Capsule from "$lib/components/Capsule.svelte";
	import Loc from "$lib/components/Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
	import BulletPoint from "$lib/components/BulletPoint.svelte";
    interface Props {
        data: InterviewData;
        compact?: boolean;
    }

    let { data, compact=false }: Props = $props();
</script>

<Box decoration={!compact}>
    <div class="interview { data.complete ? 'complete' : 'incomplete' } { compact ? 'compact' : '' }">
        <div>
            <h3>
                <a href={data.complete ? localizeHref("/interviews/" + data.slug) : undefined}>
                    <Loc text={ data.title } />
                </a>
                {#if !data.complete}
                    <br>
                    <Capsule>
                        <Loc cs="připravujeme" en="in progress" />
                    </Capsule>
                {/if}
            </h3>
            {#if compact}
                {#if data.narrator.bio_short}
                    <p><Loc text={data.narrator.bio_short} /></p>
                {/if}
            {:else}
                {#if data.narrator.bio}
                    <p><Loc text={data.narrator.bio} /></p>
                {/if}
                {#if data.complete}
                    <p>
                        <strong>
                            <Loc cs="Datum" en="Date" />:
                        </strong> 
                        { data.interview.date ? data.interview.date.toLocaleString("cs-CZ") : "???" }
                        <BulletPoint />
                        <strong>
                            <Loc cs="Délka" en="Length" />:
                        </strong> { data.interview.length || "???" }
                    </p>
                {:else}
                    <!-- <p>Redakci tohoto proběhlého rozhovoru pro vás teprve připravujeme.</p> -->
                {/if}
            {/if}
        </div>
        <div class="photopart">
            {#if data.narrator.photo}
                <a href={data.complete ? localizeHref("/interviews/" + data.slug) : undefined}>
                    <img src="{ data.narrator.photo.url }" class="narrator-img" alt="">
                </a>
            {/if}
        </div>
    </div>
</Box>

<style>
    .interview {
        display: flex;
        justify-content: center;
        gap: 12px;
    }

    .compact.interview {
        flex-direction: row-reverse;
    }

    .photopart {
        width: 200px;
        flex-shrink: 0;
    }
    .compact .photopart {
        width: 100px;
    }
    .photopart a {
        display: block;
    }

    .narrator-img {
        /* margin-left: 16px;
        margin-bottom: 12px; */
        border-radius: 8px;
    }
    .incomplete .narrator-img {
        filter: sepia(1);
    }
    .incomplete a {
        color: var(--color-black);
    }

    .compact h3 {
        font-size: 1.2em;
    }


    @media only screen and (max-width: 600px) {
        .interview {
            flex-direction: column-reverse;
        }
        .photopart {
            margin-left: 0;
            margin-bottom: 16px;
        }
    }
</style>