<!-- @migration-task Error while migrating Svelte code: Unexpected block closing tag -->
<script lang="ts">
    import ProjectName from '$lib/components/project/ProjectName.svelte';

	import type { InterviewData } from '$src/types';
    import { tocCrawler } from '$lib/components/TableOfContents/crawler';
	import Post from '$lib/components/Post.svelte';
	import InterviewAudio from "$lib/components/interviews/InterviewAudio.svelte";
	import TableOfContents from '$lib/components/TableOfContents/TableOfContents.svelte';
	import NameWithShortname from '$src/lib/components/interviews/NameWithShortname.svelte';
	import Loc from '$lib/components/Loc.svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { loc } from '$lib/loc';
	import BulletPoint from '$lib/components/BulletPoint.svelte';
    export let data: InterviewData;
</script>

<Post title={data.title} class="interview-page">
    {#snippet side()}
        <div class="side">
            {#if data.narrator.photo }
                <img src="{ data.narrator.photo.url }" alt={loc({cs: "Fotografie narátora", en: "Photograph of the narrator"})} />
            {/if}
            <div>
                <strong>
                    { data.narrator.name }
                </strong>
            </div>
            {#if data.interview.project }
                <ProjectName project={data.interview.project} full class="return-link" />
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
            {#if data.interview.project }    
                <BulletPoint />
                <ProjectName project={data.interview.project} full class="return-link" />
            {/if}
            <h2>
                <Loc text={data.title} />
            </h2>
            {#if data.audio_file }
                <InterviewAudio {data} />
            {/if}
            <dl>
                <dt>
                    <Loc>
                        {#snippet cs()}
                            Jméno { data.narrator.gender == "M" ? "narátora" : "narátorky" }
                        {/snippet}
                        {#snippet en()}
                            Narrator's name
                        {/snippet}
                    </Loc>
                </dt>
                <dd><NameWithShortname person={data.narrator} /></dd>

                <dt><Loc cs="Ročník narození" en="Year of birth" /></dt>
                <dd>{ data.narrator.birth_year }</dd>

                {#if data.narrator.birth_place }
                    <dt><Loc cs="Místo narození" en="Place of birth" /></dt>
                    <dd><Loc text={ data.narrator.birth_place } /></dd>
                {/if}

                <dt><Loc cs="Datum rozhovoru" en="Interview date" /></dt>
                <dd>{ data.interview.date.toLocaleString("cs-CZ") }</dd>

                {#if data.interview.place }
                    <dt><Loc cs="Místo rozhovoru" en="Interview place" /></dt>
                    <dd><Loc text={ data.interview.place } /></dd>
                {/if}
                
                {#if data.interview.interviewers }
                    <dt><Loc cs="Jméno tazatelů" en="Interviewers' names" /></dt>
                    <dd>
                        {#each data.interview.interviewers as person, i}
                            {#if i > 0},<br>{/if}
                            <NameWithShortname {person} />
                        {/each}
                    </dd>
                {/if}

                {#if data.interview.interviewer }
                    <dt><Loc cs="Jméno tazatele" en="Interviewer's name" /></dt>
                    <dd><NameWithShortname person={data.interview.interviewer} /></dd>
                {/if}

                {#if data.interview.length }
                    <dt><Loc cs="Délka rozhovoru" en="Interview length" /></dt>
                    <dd>{ data.interview.length }</dd>
                {/if}

                {#if data.interview.languages }
                    {#if getLocale() == 'cs' && data.interview.languages.length == 1 && data.interview.languages[0].code == 'cs' }
                        <!-- Do not show anything if the interview is only in Czech and the page is in Czech -->
                    {:else}
                        <dt>
                            {#if data.interview.languages.length == 1}
                                <Loc cs="Jazyk rozhovoru" en="Interview language" />
                            {:else}
                                <Loc cs="Jazyky rozhovoru" en="Interview languages" />
                            {/if}
                        </dt>
                        <dd>
                            {#each data.interview.languages as language, i}
                                {#if i > 0},{/if}
                                <Loc text={language.name} />
                            {/each}
                        </dd>
                    {/if}
                {/if}

                
                {#if data.interview.project }
                    <dt><Loc cs="Projekt" en="Project" /></dt>
                    <dd>
                        {#if data.interview.project }
                            <ProjectName project={data.interview.project} />
                        {/if}
                    </dd>
                {/if}

                {#if data.interview.transcriber }
                    <dt><Loc cs="Přepis" en="Transcription" /></dt>
                    <dd>{ data.interview.transcriber.name }</dd>
                {/if}

                {#if data.interview.redaction }
                    <dt><Loc cs="Redakce" en="Redaction" /></dt>
                    <dd>{ data.interview.redaction.name }</dd>
                {/if}

                {#if data.interview.publication_date }
                    <dt><Loc cs="Datum uveřejnění" en="Publication date" /></dt>
                    <dd>
                        {
                            data.interview.publication_date.toLocaleString(
                                getLocale() == 'cs' ? "cs-CZ" : "en-GB"
                            ) 
                        }
                    </dd>
                {/if}

                {#if data.interview.english_translation_publication_date && getLocale() == 'en' }
                    <dt><Loc cs="…anglického překladu" en="…of English translation" /></dt>
                    <dd>
                        {
                            data.interview.english_translation_publication_date.toLocaleString(
                                getLocale() == 'cs' ? "cs-CZ" : "en-GB"
                            ) 
                        }
                    </dd>
                {/if}
            </dl>

            {#if data.narrator.bio }
                <p><Loc text={data.narrator.bio} /></p>
            {/if}

            {#if data.interview.redaction }
                <p>
                    <Loc>
                        {#snippet cs()}
                            Poznámka: Text níže je upravená verze kompletního přepisu rozhovoru. Pokud máte z výzkumných nebo jiných důvodů zájem o kompletní přepis, napište na <a href="mailto:info@hernihistorie.cz">info@hernihistorie.cz</a> nebo <a href="mailto:sucharmail@gmail.com">sucharmail@gmail.com</a>.
                        {/snippet}
                        {#snippet en()}
                            Note: The text below is an edited version of the complete interview transcript. If you are interested in the full transcript for research or other purposes, please contact us at <a href="mailto:info@hernihistorie.cz">info@hernihistorie.cz</a> or <a href="mailto:sucharmail@gmail.com">sucharmail@gmail.com</a>.
                        {/snippet}
                    </Loc>
                </p>
            {/if}

            <hr>
            
            <article id="tocTarget" use:tocCrawler={{ mode: 'generate' }}>
                <slot name="content"/>
            </article>

            <hr>

            {#if data.interview.project }
                <Loc cs="Tento rozhovor je součástí projektu" en="This interview is part of the project" />
                <ProjectName project={data.interview.project} />.
            {/if}

            {#if data.narrator.photo && data.narrator.photo.license_text }
                <h4><Loc cs="Fotografie" en="Photograph" /></h4>
                <a href="{ data.narrator.photo.details_url }">
                    { data.narrator.photo.license_text }
                </a>
            {/if}
        </article>
    {/snippet}
</Post>

<style>
    :global(.interview-page) :global(.return-link) {
        text-decoration: none;
    }
    
    h2 {
        margin-top: 0.25em;
        margin-bottom: 0;
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