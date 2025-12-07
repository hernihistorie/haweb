<!-- @migration-task Error while migrating Svelte code: Unexpected block closing tag -->
<script lang="ts">
  import ProjectName from './ProjectName.svelte';

	import type { InterviewData } from '$src/types';
    import { tocCrawler } from './TableOfContents/crawler';
	import Post from './Post.svelte';
	import InterviewAudio from "./InterviewAudio.svelte";
	import TableOfContents from './TableOfContents/TableOfContents.svelte';
	import NameWithShortname from './NameWithShortname.svelte';
	import Loc from './Loc.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
    export let data: InterviewData;
</script>

<Post title={data.title}>
    {#snippet side()}
        <div class="side">
            {#if data.narrator.photo }
                <img src="{ data.narrator.photo.url }" alt="Fotografie narátora" />
            {/if}
            <div>
                <strong>
                    { data.narrator.name }
                </strong>
            </div>
            {#if data.interview.project }
                <ProjectName project={data.interview.project} />
            {/if}

            <hr>

            <TableOfContents />
        </div>
    {/snippet}
    {#snippet content()}
        <article>
            <a href={localizeHref("/interviews")} class="return-link">
                <Loc cs="Rozhovory Herního archivu" en="Czechoslovak Game Archive Interviews" />
            </a>
            <h2>
                <Loc text={data.title} />
            </h2>
            {#if data.audio_file }
                <InterviewAudio {data} />
            {/if}
            <dl>
                <dt>Jméno { data.narrator.gender == "M" ? "narátora" : "narátorky" }</dt>
                <dd><NameWithShortname person={data.narrator} /></dd>

                <dt>Ročník narození</dt>
                <dd>{ data.narrator.birth_year }</dd>

                {#if data.narrator.birth_place }
                    <dt>Místo narození</dt>
                    <dd>{ data.narrator.birth_place }</dd>
                {/if}

                <dt>Datum rozhovoru</dt>
                <dd>{ data.interview.date.toLocaleDateString("cs-CZ") }</dd>

                {#if data.interview.place }
                    <dt>Místo rozhovoru</dt>
                    <dd>{ data.interview.place }</dd>
                {/if}
                
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

                {#if data.interview.length }
                    <dt>Délka rozhovoru</dt>
                    <dd>{ data.interview.length }</dd>
                {/if}

                
                {#if data.interview.project }
                    <dt>Projekt</dt>
                    <dd>
                        {#if data.interview.project }
                            <ProjectName project={data.interview.project} />
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

                {#if data.interview.publication_date }
                    <dt>Datum uveřejnění</dt>
                    <dd>{ data.interview.publication_date.toLocaleDateString("cs-CZ") }</dd>
                {/if}
            </dl>

            {#if data.narrator.bio }
                <p>{@html data.narrator.bio }</p>
            {/if}

            {#if data.interview.redaction }
                <p>Poznámka: Text níže je upravená verze kompletního přepisu rozhovoru. Pokud máte z výzkumných nebo jiných důvodů zájem o kompletní přepis, napište na <a href="mailto:info@hernihistorie.cz">info@hernihistorie.cz</a> nebo <a href="mailto:sucharmail@gmail.com">sucharmail@gmail.com</a>.
                </p>
            {/if}

            <hr>
            
            <article id="tocTarget" use:tocCrawler={{ mode: 'generate' }}>
                <slot name="content"/>
            </article>

            <hr>

            {#if data.interview.project }
                Tento rozhovor je součástí projektu
                <ProjectName project={data.interview.project} />.
            {/if}

            {#if data.narrator.photo && data.narrator.photo.license_text }
                <h4>Fotografie</h4>
                <a href="{ data.narrator.photo.details_url }">
                    { data.narrator.photo.license_text }
                </a>
            {/if}
        </article>
    {/snippet}
</Post>

<style>
    .return-link {
        text-decoration: none;
    }
    
    h2 {
        margin-top: 0.25em;
        margin-bottom: 0;
    }

    div.side {
        position: sticky;
        top: 2em;

        max-height: calc(100vh - 4em);
        padding-right: 8px;
        padding-bottom: 4em;
        overflow-y: scroll;
    }

    div.side img {
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

    article :global(hr) {
        margin-top: 3em;
        margin-bottom: 3em;
    }
</style>