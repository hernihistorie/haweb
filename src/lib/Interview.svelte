<script lang="ts">
	import Post from './Post.svelte';
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
        ((sem přijde přehrávač, kterej se bude skrolovat se stránkou))
        <slot />
    </div>
</Post>