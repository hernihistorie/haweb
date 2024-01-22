<script lang="ts">
    import type { InterviewData } from "$src/types";
    import Box from "$lib/Box.svelte";
    // import { data as bregant_data } from './michal-bregant/interview';
    import { data as kopecky_data } from './lubor-kopecky/interview';

    let interviews: InterviewData[] = [kopecky_data];
</script>

<div class="thin">
    <h2>Seznam rozhovorů</h2>

    {#each interviews as data}
        <Box >
            <div class="interview">
                <div>
                    {#if data.narrator.photo }
                        <a href="/interviews/{data.slug}">
                            <img src="{ data.narrator.photo.url }" class="narrator-img" alt="">
                        </a>
                    {/if}
                </div>
                <div>
                    <h3><a href="/interviews/{data.slug}">{ data.title }</a></h3>
                    <p>Sem by měl přijít blurb (1-2 věty) o člověkovi, s kým je tento rozhovor.
                    <p>
                        <strong>Datum:</strong> { data.interview.date.toLocaleDateString("cs-CZ") }
                        &bull;
                        <strong>Délka:</strong> { data.interview.length }
                    </p>
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

    .narrator-img {
        float: left;
        max-height: 160px;
        margin-left: 16px;
        margin-bottom: 12px;
        border-radius: 8px;
    }
</style>