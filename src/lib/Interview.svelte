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
        
        <div class="audio-container">
            <audio controls></audio>
        </div>

        <slot />
    </div>
</Post>

<style>
    h2 {
        margin-bottom: 0;
    }
    .audio-container {
        width: calc(100% + 16px);
        margin-left: -8px;
        position: sticky;
        top: 0px;
        padding-top: 40px;
        padding-bottom: 20px;
        margin-bottom: 60px;
        background-color: var(--color-bg);
        box-shadow: 0px 40px 40px 20px var(--color-bg);
    }

    audio {
        display: block;
        width: 100%;
    }
</style>