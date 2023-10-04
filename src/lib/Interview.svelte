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

        <slot />
    </div>
</Post>

<style>
    h2 {
        margin-bottom: 0;
    }
</style>