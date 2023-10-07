<script lang="ts">
	import Post from './Post.svelte';
	import InterviewAudio from "./InterviewAudio.svelte";
    export let data: InterviewData;
</script>

<Post title={data.title}>
    <div slot="side">
        <img src="{ data.narrator.photo.url }" alt="Fotografie nrátora" />
        <strong>
            { data.narrator.name }
        </strong>
        <date>
            { data.interview.date.toLocaleDateString("cs-CZ") }
        </date>
    </div>
    <div slot="content">
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

            <dt>Jméno a příjmení tazatele <!-- XXX -->
            <dd>{ data.interview.interviewer }

            <dt>Délka rozhovoru
            <dd>{ data.interview.length }

            <dt>Projekt
            <dd>{ data.interview.project }

        </dl>

        <hr>

        <slot />

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
</style>