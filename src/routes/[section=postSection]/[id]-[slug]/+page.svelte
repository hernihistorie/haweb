<script lang="ts">
    import PostPage from "#lib/components/post/PostPage.svelte";
    import PageLang from "#lib/components/PageLang.svelte";

    const { data } = $props();
</script>

<PostPage post={data.post} series={data.series}>
    {#if data.langs}
        <PageLang {...data.langs} />
    {/if}
    <data.postComponent />
</PostPage>
