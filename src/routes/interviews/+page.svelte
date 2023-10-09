<script lang="ts">
    import type { InterviewData } from "$src/types";
    import Box from "$lib/Box.svelte";
    // import {data as bregant_data} from './michal-bregant/+page.svelte';
    import { data as bregant_data } from './michal-bregant/interview';

    let interviews: InterviewData[] = [bregant_data];
</script>

<div class="thin">
    <h2>Seznam rozhovorů</h2>

    {#each interviews as data}
        <Box href="/interviews/{data.slug}">
            <!-- TODO add photo of interviewed person-->
            <h3><a href="/interviews/{data.slug}">{ data.title }</a></h3>
            <p>Sem by měl přijít blurb (1-2 věty) o člověkovi, s kým je tento rozhovor.
            <p>
                <strong>Datum:</strong> { data.interview.date.toLocaleDateString("cs-CZ") }
                &bull;
                <strong>Délka:</strong> { data.interview.length }
        </Box>
    {/each}
</div>

<style>
</style>