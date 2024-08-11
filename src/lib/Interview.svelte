<script lang="ts">
	import type { InterviewData } from '$src/types';
    import { tocCrawler } from './TableOfContents/crawler';
	import Post from './Post.svelte';
	import InterviewAudio from "./InterviewAudio.svelte";
	import TableOfContents from './TableOfContents/TableOfContents.svelte';
	import NameWithShortname from './NameWithShortname.svelte';
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
        {#if data.interview.project }
            { data.interview.project.name }
        {/if}

        <hr>

        <TableOfContents />
    </div>
    <div slot="content" class="content">
        <h2>{ data.title }</h2>
        <InterviewAudio {data} />
        <dl>
            <dt>Jméno { data.narrator.gender == "M" ? "narátora" : "narátorky" }</dt>
            <dd><NameWithShortname person={data.narrator} /></dd>

            <dt>Ročník narození</dt>
            <dd>{ data.narrator.birth_year }</dd>

            <dt>Datum rozhovoru</dt>
            <dd>{ data.interview.date.toLocaleDateString("cs-CZ") }</dd>

            <dt>Místo rozhovoru</dt>
            <dd>{ data.interview.place }</dd>
            
            {#if data.interview.interviewers }
                <dt>Jméno tazatelů</dt>
                <dd>
                    {#each data.interview.interviewers as person, i}
                        {#if i > 0},<br>{/if}
                        <NameWithShortname {person} />
                    {/each}
                </dd>
            {/if}

            {#if data.interview.interviewer }
                <dt>Jméno tazatele</dt>
                <dd><NameWithShortname person={data.interview.interviewer} /></dd>
            {/if}

            <dt>Délka rozhovoru</dt>
            <dd>{ data.interview.length }</dd>

            
            {#if data.interview.project }
                <dt>Projekt</dt>
                <dd>
                    {#if data.interview.project.url}
                        <a href={data.interview.project.url}>{ data.interview.project.name }</a>
                    {:else}
                        { data.interview.project.name }
                    {/if}
                </dd>
            {/if}

            {#if data.interview.transcriber }
                <dt>Přepis</dt>
                <dd>{ data.interview.transcriber.name }</dd>
            {/if}

            {#if data.interview.redaction }
                <dt>Redakce</dt>
                <dd>{ data.interview.redaction.name }</dd>
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

        max-height: calc(100vh - 4em);
        padding-right: 8px;
        padding-bottom: 4em;
        overflow-y: scroll;
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