<script lang="ts">
    import PostPage from "#lib/components/post/PostPage.svelte";
    import PageLang from "#lib/components/PageLang.svelte";

    const { data } = $props();
</script>

{#snippet transcript()}
    {#if data.transcriptComponent}
        <data.transcriptComponent />
    {/if}
{/snippet}

<PostPage
    post={data.post}
    series={data.series}
    newer={data.newer}
    older={data.older}
    related={data.related}
    transcript={data.transcriptComponent ? transcript : undefined}>
    {#if data.langs}
        <PageLang {...data.langs} />
    {/if}
    <data.postComponent />
</PostPage>
