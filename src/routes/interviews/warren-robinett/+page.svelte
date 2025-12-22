<script lang="ts">
	import InterviewPage from "$src/lib/components/interviews/InterviewPage.svelte";
	import Answer from "$lib/components/interviews/Answer.svelte"
	import Question from "$lib/components/interviews/Question.svelte";
	import Chapter from "$lib/components/interviews/Chapter.svelte";

    import { data } from "./interview";
    import PageLang from "$src/lib/components/PageLang.svelte";

    let A = Answer;
    let Q = Question;
</script>

<PageLang cs en />

<InterviewPage data={data}>
</InterviewPage>