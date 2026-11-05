<script lang="ts">
    import VideoCard from "./VideoCard.svelte";
    import type { Post } from "$src/types";

    /** The numbered videos of a stream */
    interface Props {
        parts: Post[];
        /** The video being watched, highlighted in the list */
        currentId?: number;
        /** Bigger cards with descriptions, for listing the parts in page content */
        large?: boolean;
    }

    let { parts, currentId, large = false }: Props = $props();
</script>

<ol class:large>
    {#each parts as part, index (part.id)}
        <li class:current={part.id === currentId}>
            <span class="number">{index + 1}</span>
            <VideoCard post={part} compact {large} playlist current={part.id === currentId} />
        </li>
    {/each}
</ol>

<style>
    ol {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ol.large {
        gap: 16px;
    }

    li {
        display: grid;
        grid-template-columns: 1.5em minmax(0, 1fr);
        gap: 4px;
        align-items: center;
        padding: 6px 8px 6px 4px;
        border-radius: 12px;
    }

    li.current {
        background: color-mix(in srgb, var(--color-secondary) 20%, transparent);
    }

    .number {
        color: var(--color-text-muted);
        font-size: 0.9em;
        font-weight: bold;
        text-align: center;
    }

    li.current .number {
        color: var(--color-primary);
    }
</style>
