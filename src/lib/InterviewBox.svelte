<script lang="ts">
    import type { InterviewData } from "$src/types";
	import Box from "./Box.svelte";

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
                <a href={data.complete ? "/interviews/" + data.slug : undefined}>{ data.title }</a>
                {#if !data.complete}
                    <br><span class="in-progress">připravujeme</span>
                {/if}
            </h3>
            {#if compact}
                {#if data.narrator.bio_short}
                    <p>{@html data.narrator.bio_short}</p>
                {/if}
            {:else}
                {#if data.narrator.bio}
                    <p>{@html data.narrator.bio}</p>
                {/if}
                {#if data.complete}
                    <p>
                        <strong>Datum:</strong> { data.interview.date ? data.interview.date.toLocaleDateString("cs-CZ") : "???" }
                        &nbsp;&bull;&nbsp;
                        <strong>Délka:</strong> { data.interview.length || "???" }
                    </p>
                {:else}
                    <!-- <p>Redakci tohoto proběhlého rozhovoru pro vás teprve připravujeme.</p> -->
                {/if}
            {/if}
        </div>
        <div class="photopart">
            {#if data.narrator.photo}
                <a href={data.complete ? "/interviews/" + data.slug : undefined}>
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
        color: black;
    }

    .in-progress {
        background-color: var(--color-secondary);
        color: white;
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 0.9em;
        margin-left: 8px;
        font-size: 18px;

        display: inline-block;
        vertical-align: middle;
        margin-bottom: 3px;

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