<script lang="ts">
    import Meta from "../layout/Meta.svelte";
    import { getLocale } from "#lib/paraglide/runtime.js";
    import { loc } from "$src/lib/loc";
    import { postImage } from "$src/lib/posts";
    import type { Post, StreamPost } from "$src/types";

    /** The page title and OpenGraph metadata of a post */
    let { post, stream = null }: { post: Post; stream?: StreamPost | null } = $props();

    // Parts of a stream need its name to make sense on their own, e.g. in search results
    const pageTitle = $derived(
        stream ? `${loc(stream.title)}: ${loc(post.title)}` : loc(post.title),
    );
    const image = $derived(postImage(post));
</script>

{#if post.published}
    <Meta title={pageTitle} />
{:else}
    <Meta title={""} noindex={true} />
{/if}

<svelte:head>
    <meta property="og:title" content={pageTitle} />
    <meta property="og:type" content="article" />
    <meta property="og:article:author" content={loc(post.author.name)} />
    {#if post.date}
        <meta property="og:article:published_time" content={post.date.toString()} />
    {/if}
    {#if post.description_html}
        <meta property="og:description" content={loc(post.description_html)} />
    {/if}
    {#if image}
        <meta property="og:image" content={image} data-pagefind-meta="image[content]" />
    {/if}
    <meta property="og:locale" content={getLocale()} />
</svelte:head>
