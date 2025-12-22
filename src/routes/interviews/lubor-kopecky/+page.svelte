<script lang="ts">
    /* https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit */
	import InterviewPage from "$src/lib/components/interviews/InterviewPage.svelte";
	import Answer from "$lib/components/interviews/Answer.svelte"
	import Question from "$lib/components/interviews/Question.svelte";
	import Chapter from "$lib/components/interviews/Chapter.svelte";

    import { data, RS, LK, VS } from "./interview";

    let A = Answer;
    let Q = Question;
</script>

<InterviewPage data={data}>
</InterviewPage>