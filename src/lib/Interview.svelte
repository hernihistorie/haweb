<script lang="ts">
	import type { InterviewChapters, InterviewData, Chapters } from '$src/types';
	import Post from './Post.svelte';
	import InterviewAudio from "./InterviewAudio.svelte";
	import TableOfContents from './TableOfContents.svelte';
    export let data: InterviewData;
    export let chapters: Chapters;
</script>

<Post title={data.title}>
    <div slot="side">
        <img src="{ data.narrator.photo.url }" alt="Fotografie narátora" />
        <strong>
            { data.narrator.name }
        </strong>
        <date>
            { data.interview.date.toLocaleDateString("cs-CZ") }
        </date>

        <hr>

        <TableOfContents {chapters} />
    </div>
    <div slot="content" class="content">
        <h2>{ data.title }</h2>
        <InterviewAudio {data} />
        <dl>
            <dt>Jméno { data.narrator.gender == "M" ? "narátora" : "narátorky" }
            <dd>{ data.narrator.name }

            <dt>Ročník narození
            <dd>{ data.narrator.birth_year }

            <dt>Datum rozhovoru
            <dd>{ data.interview.date.toLocaleDateString("cs-CZ") }

            <dt>Místo rozhovoru
            <dd>{ data.interview.place }

            <dt>Jméno tazatele <!-- XXX -->
            <dd>{ data.interview.interviewer }

            <dt>Délka rozhovoru
            <dd>{ data.interview.length }

            <dt>Projekt
            <dd>{ data.interview.project }

        </dl>

        <hr>

        <slot name="content"/>

        <hr>

        {#if data.narrator.photo }
            <h4>Fotografie</h4>
            <a href="{ data.narrator.photo.details_url }">
                { data.narrator.photo.license_text }
            </a>
        {/if}
    </div>
</Post>

<style>
    h2 {
        margin-bottom: 0;
    }

    div[slot="side"] {
        position: sticky;
        top: 2em;
    }

    div[slot="side"] img {
        border-radius: 8px;
    }

    @media only screen and (max-width: 500px) {
        dt, dd {
            width: 100%;
        }
        dd {
            margin-left: 1.75em;
        }
    }

    .content :global(hr) {
        margin-top: 3em;
        margin-bottom: 3em;
    }
</style>