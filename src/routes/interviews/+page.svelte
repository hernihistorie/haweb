<script lang="ts">
    import type { InterviewData } from "$src/types";
    import Box from "$lib/Box.svelte";
    // import { data as bregant_data } from './michal-bregant/interview';
    import { data as kopecky_data } from './lubor-kopecky/interview';
    import { data as hrda_data } from './stanislav-hrda/interview';
    import { data as havelka_data } from './jozef-havelka/interview';
    import { data as robinett_data } from './warren-robinett/interview';

    let interviews: InterviewData[] = [kopecky_data, hrda_data, robinett_data, havelka_data];
</script>

<div class="thin">
    <h2>Seznam rozhovorů - orální historie</h2>

    {#each interviews as data}
        <Box>
            <div class="interview { data.complete ? 'complete' : 'incomplete' }">
                <div>
                    <h3>
                        <a href={data.complete ? "/interviews/" + data.slug : undefined}>{ data.title }</a>
                        {#if !data.complete }
                            <br><span class="in-progress">připravujeme</span>
                        {/if}
                    </h3>
                    {#if data.narrator.bio }
                        <p>{@html data.narrator.bio }</p>
                    {/if}
                    {#if data.complete }
                        <p>
                            <strong>Datum:</strong> { data.interview.date.toLocaleDateString("cs-CZ") }
                            &nbsp;&bull;&nbsp;
                            <strong>Délka:</strong> { data.interview.length }
                        </p>
                    {:else}
                        <!-- <p>Redakci tohoto proběhlého rozhovoru pro vás teprve připravujeme.</p> -->
                    {/if}
                </div>
                <div class="photopart">
                    {#if data.narrator.photo }
                        <a href={data.complete ? "/interviews/" + data.slug : undefined}>
                            <img src="{ data.narrator.photo.url }" class="narrator-img" alt="">
                        </a>
                    {/if}
                </div>
            </div>
        </Box>
    {/each}
</div>

<style>
    .interview {
        display: flex;
        justify-content: center;
        gap: 12px;
    }

    .photopart {
        width: 200px;
        margin-right: 4px;
        margin-left: 16px;
        flex-shrink: 0;
    }
    .photopart a {
        display: block;
    }

    .narrator-img {
        margin-left: 16px;
        margin-bottom: 12px;
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
</style>