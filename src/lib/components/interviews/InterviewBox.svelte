<script lang="ts">
    import Lazy from 'svelte-lazy';
    import type { InterviewData } from "$src/types";
	import Box from "$lib/components/Box.svelte";
	import Loc from "$lib/components/Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
	import BulletPoint from "$lib/components/BulletPoint.svelte";
	import InterviewStatusCapsule from "./InterviewStatusCapsule.svelte";
	import PersonImage from "./PersonImage.svelte";
    interface Props {
        data: InterviewData;
        compact?: boolean;
    }

    let { data, compact=false }: Props = $props();
</script>

<Box decoration={!compact}>
    <div class="interview interview-status-{ data.status } { compact ? 'compact' : '' }">
        <div>
            <h3>
                <a href={localizeHref("/interviews/" + data.slug)}>
                    <Loc text={ data.title } />
                </a>
                <br>
                <InterviewStatusCapsule status={data.status} />
            </h3>
            {#if compact}
                {#if data.narrator.bio_short}
                    <p><Loc text={data.narrator.bio_short} /></p>
                {/if}
            {:else}
                {#if data.narrator.bio}
                    <p><Loc text={data.narrator.bio} /></p>
                {/if}
                <p>
                    {#if data.interview.date}
                        <strong>
                            <Loc cs="Datum" en="Date" />:
                        </strong> 
                        <date>
                            { data.interview.date.toLocaleString("cs-CZ") }
                        </date>
                    {/if}
                    {#if data.interview.length}
                        <BulletPoint />
                        <strong>
                            <Loc cs="Délka" en="Length" />:
                        </strong> { data.interview.length || "???" }
                    {/if}
                </p>
            {/if}
        </div>
        <div class="photopart">
            {#if data.narrator.photo}
                <a href={localizeHref("/interviews/" + data.slug)}>
                    <Lazy keep>
                        <PersonImage
                            image={data.narrator.photo}
                            sepia={data.status !== "published"}
                            alt={data.narrator.name}
                        />
                    </Lazy>
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

    .interview:not(.interview-status-published) a {
        color: var(--color-secondary);
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