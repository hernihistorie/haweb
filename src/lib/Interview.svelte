<script lang="ts">
	import type { InterviewChapters, InterviewData, Chapters } from '$src/types';
    import { tocCrawler } from './TableOfContents/crawler';
	import Post from './Post.svelte';
	import InterviewAudio from "./InterviewAudio.svelte";
	import TableOfContents from './TableOfContents/TableOfContents.svelte';
    export let data: InterviewData;
</script>

<Post title={data.title}>
    <div slot="side">
        {#if data.narrator.photo }
            <img src="{ data.narrator.photo.url }" alt="Fotografie narátora" />
        {/if}
        <div>
            <strong>
                { data.narrator.name }
            </strong>
        </div>
        { data.interview.project }

        <hr>

        <TableOfContents />
    </div>
    <div slot="content" class="content">
        <h2>{ data.title }</h2>
        <InterviewAudio {data} />
        <dl>
            <dt>Jméno { data.narrator.gender == "M" ? "narátora" : "narátorky" }
            <dd>{ data.narrator.name }
                {#if data.interview.narrator_abbrev }
                    ({ data.interview.narrator_abbrev })
                {/if}

            <dt>Ročník narození
            <dd>{ data.narrator.birth_year }

            <dt>Datum rozhovoru
            <dd>{ data.interview.date.toLocaleDateString("cs-CZ") }

            <dt>Místo rozhovoru
            <dd>{ data.interview.place }
            
            <dt>Jméno tazatele
            <dd>{ data.interview.interviewer }
                {#if data.interview.interviewer_abbrev }
                    ({ data.interview.interviewer_abbrev })
                {/if}

            <dt>Délka rozhovoru
            <dd>{ data.interview.length }

            <dt>Projekt
            <dd>{ data.interview.project }

            <dt>Přepis
            <dd>{ data.interview.transcriber }</dd>

            {#if data.interview.redaction }
                <dt>Redakce
                <dd>{ data.interview.redaction }</dd>
            {/if}

        </dl>

        {#if data.narrator.bio }
            <p>{@html data.narrator.bio }</p>
        {/if}

        {#if data.interview.redaction }
            <p>Poznámka: Text níže je upravená verze kompletního přepisu rozhovoru. Pokud máte z výzkumných nebo jiných důvodů zájem o kompletní přepis, napište na <a href="mailto:info@hernihistorie.cz">info@hernihistorie.cz</a> nebo <a href="mailto:sucharmail@gmail.com">sucharmail@gmail.com</a>.
        {/if}

        <hr>
        
        <article id="tocTarget" use:tocCrawler={{ mode: 'generate' }}>
            <slot name="content"/>
        </article>

        <hr>

        {#if data.narrator.photo && data.narrator.photo.license_text }
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