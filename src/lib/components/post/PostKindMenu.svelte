<script lang="ts">
    import Loc from "../Loc.svelte";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import { postKindHref, postKinds } from "$src/lib/posts";
    import type { PostKind } from "$src/types";

    /** Switches between listings of related post kinds, e.g. articles and talks */
    let { kinds, active }: { kinds: PostKind[]; active: PostKind } = $props();
</script>

<ul>
    {#each kinds as kind (kind)}
        <li>
            <a
                href={localizeHref(postKindHref(kind))}
                class:active={kind === active}
                aria-current={kind === active ? "page" : undefined}>
                <Loc text={postKinds[kind].title} />
            </a>
        </li>
    {/each}
</ul>

<style>
    ul {
        padding-left: 0px;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        text-align: left;
        margin-bottom: 29.8px;
    }

    li {
        padding: 0 27px 0 27px;
        border-left: 3px solid var(--color-secondary);
        text-transform: uppercase;
        font-size: 36px;
        font-weight: bold;
    }

    li > a {
        font-weight: normal;
        color: var(--color-text);
        text-decoration: none;
    }
    li > a:hover {
        text-decoration: underline;
    }

    li:first-child {
        padding: 0 27px 0 0;
        border-left: none;
    }
    @media screen and (max-width: 515px) {
        li {
            font-size: 30px;
        }
    }

    .active {
        font-weight: bold;
    }
</style>
