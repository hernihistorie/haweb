<script lang="ts">
    import Loc from "../Loc.svelte";
    import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
    import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { postHref, postKinds } from "$src/lib/posts";
    import type { Post, PostKind } from "$src/types";

    type PostLink = Pick<Post, "id" | "slug" | "kind" | "title">;

    let { kind, newer, older }: { kind: PostKind; newer?: PostLink; older?: PostLink } = $props();
</script>

{#if newer || older}
    <nav class="adjacent" data-pagefind-ignore>
        {#if older}
            <a href={localizeHref(postHref(older))} class="older">
                <span class="label">
                    <ArrowLeftIcon size={18} />
                    <Loc text={postKinds[kind].olderTitle} />
                </span>
                <span class="title"><Loc text={older.title} /></span>
            </a>
        {/if}
        {#if newer}
            <a href={localizeHref(postHref(newer))} class="newer">
                <span class="label">
                    <Loc text={postKinds[kind].newerTitle} />
                    <ArrowRightIcon size={18} />
                </span>
                <span class="title"><Loc text={newer.title} /></span>
            </a>
        {/if}
    </nav>
{/if}

<style>
    .adjacent {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        margin: 2em 0;
    }

    a {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 12px 16px;
        border: 2px solid var(--color-secondary-transparent);
        border-radius: 12px;
        color: var(--color-text);
        text-decoration: none;
    }

    a:hover {
        border-color: var(--color-secondary);
    }

    a:hover .title {
        text-decoration: underline;
        text-decoration-color: var(--color-secondary);
    }

    .newer {
        grid-column: 2;
        text-align: right;
    }

    .newer .label {
        justify-content: end;
    }

    .label {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--color-primary);
        font-size: 0.85em;
    }

    .label :global(.lucide-icon) {
        margin-bottom: 0;
    }

    .title {
        font-weight: bold;
        line-height: 1.3;
    }

    @media only screen and (max-width: 600px) {
        .adjacent {
            grid-template-columns: minmax(0, 1fr);
        }

        .newer {
            grid-column: 1;
            order: -1;
        }
    }
</style>
