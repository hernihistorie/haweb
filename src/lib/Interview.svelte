<script lang="ts">
	import Post from './Post.svelte';
	import InterviewAudio from "./InterviewAudio.svelte";
    export let data: InterviewData;
</script>

<Post title={data.title}>
    <div slot="side">
        { data.narrator.name }
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
    </div>
</Post>

<style>
    h2 {
        margin-bottom: 0;
    }
</style>