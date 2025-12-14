<script lang="ts">
    /* https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit */
	import InterviewPage from "$lib/components/InterviewPage.svelte";
	import Answer from "$lib/components/interviews/Answer.svelte"
	import Question from "$lib/components/interviews/Question.svelte";
	import Chapter from "$lib/components/interviews/Chapter.svelte";
	import { localizeHref } from '$lib/components/paraglide/runtime';

    import { data, RS, LK, VS } from "./interview";
    import PageLang from "$lib/components/PageLang.svelte";

    let A = Answer;
    let Q = Question;
</script>

<style>
    .c2 {
        font-style: italic
    }
    .appendix {
        font-weight: bold;
        text-align: left;
        background-color: #b5a26d;
        margin-top: 0px;
    }
</style>

<PageLang cs />

<InterviewPage data={data}>
    {#snippet content()}
        <div >
            
            <p>
                Tento rozhovor v současnosti není dostupný.  V případě zájmu o obsah rozhovoru z badatelských důvodů nás prosím <a href={localizeHref("/contact")}>kontaktujte</a>.
            </p>
            
        </div>
    {/snippet}
</InterviewPage>