<!--
    We're using an intersection observer to detect when the element
    gets pinned so we can add a shadow.
-->

<script lang="ts">
    import IntersectionObserver from "svelte-intersection-observer";
	import AudioPlayer from './AudioPlayer.svelte';
    export let data: InterviewData;

    let element: HTMLElement;
    let intersecting: boolean;
    let threshold: number = 1;
</script>


<IntersectionObserver threshold={threshold} {element} bind:intersecting>
    <div bind:this={element} class="audio-container" class:intersecting>
        <AudioPlayer src="/interviews/{data.audio_file}" duration={data.audio_duration} title={data.title} />
    </div>
</IntersectionObserver>

<style>
    .audio-container {
        width: calc(100% + 16px);
        margin-left: -8px;
        position: sticky;
        top: -1px;
        padding-top: 40px;
        margin-bottom: 40px;
        background-color: var(--color-bg);
        border-radius: 16px;
        transition: padding 0.3s ease-in-out;
    }

    /* trick to make animating a shadow faster:
       https://tobiasahlin.com/blog/how-to-animate-box-shadow/ */
    .audio-container::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        background: var(--color-bg);
        box-shadow: 0px 40px 40px 20px var(--color-bg);
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

    .audio-container.intersecting::before {
        opacity: 0;
    }

    @media only screen and (max-width: 350px) {
        .audio-container {
            padding-top: 24px;
        }
    }
</style>