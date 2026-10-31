<script lang="ts">
    import Loc from "#lib/components/Loc.svelte";
    import BulletPoint from "#lib/components/BulletPoint.svelte";
    import Meta from "#lib/components/layout/Meta.svelte";
    import PostBoxes from "#lib/components/post/PostBoxes.svelte";
    import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
    import { formatPostDate } from "$src/lib/datetime";

    const { data } = $props();
    const event = $derived(data.event);
</script>

<Meta title={event.name} />

<header>
    <div class="label"><Loc cs="Událost" en="Event" /></div>
    <h2><Loc text={event.name} /></h2>
    <div class="when-where">
        <time datetime={event.date.toString()}>{formatPostDate(event.date)}</time>
        {#if event.endDate}
            –
            <time datetime={event.endDate.toString()}>{formatPostDate(event.endDate)}</time>
        {/if}
        {#if event.place}
            <BulletPoint />
            <Loc text={event.place} />
        {/if}
    </div>
    {#if event.url}
        <a href={event.url} class="external">
            <ExternalLinkIcon size={18} />
            <Loc cs="Stránka události" en="Event website" />
        </a>
    {/if}
</header>

{#if data.eventPosts.length}
    <h3><Loc cs="Záznamy přednášek" en="Talk recordings" /></h3>
    <PostBoxes posts={data.eventPosts} />
{/if}

<style>
    header {
        margin: 2em 0;
    }

    .label {
        color: var(--color-primary);
        font-size: 0.8em;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    h2 {
        line-height: 1.15;
        margin: 0.2em 0 0.3em;
    }

    .when-where {
        color: var(--color-text-muted);
        margin-bottom: 0.5em;
    }

    .external {
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .external :global(.lucide-icon) {
        margin-bottom: 0;
    }
</style>
