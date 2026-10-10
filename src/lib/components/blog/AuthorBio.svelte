<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import { localizeHref } from "$src/lib/paraglide/runtime";
    import AuthorMedaillon from "$src/lib/components/blog/AuthorMedaillon.svelte";
    import BulletPoint from "$src/lib/components/BulletPoint.svelte";
    import { postKindHref, postKindList, postKinds } from "$src/lib/posts";
    import type { Author, PostKind } from "$src/types";

    let {
        author,
        secondary = false,
        kind,
    }: {
        author: Author;
        secondary?: boolean;
        /** Kind of listing to link back to; links to all kinds if omitted */
        kind?: PostKind;
    } = $props();

    const backlinkKinds = $derived(kind ? [kind] : postKindList);
</script>

<section class="author-header">
    <div class="author-medaillon">
        <AuthorMedaillon {author} />
    </div>
    <div class="bio">
        {#each backlinkKinds as backlinkKind, i (backlinkKind)}
            {#if i > 0}<BulletPoint />{/if}
            <a
                href={localizeHref(postKindHref(backlinkKind))}
                class="backlink"
                data-pagefind-ignore>
                <Loc text={postKinds[backlinkKind].longTitle} />
            </a>
        {/each}
        {#if !secondary}
            <h2>
                <Loc cs={`Příspěvky od ${author.nameGenitive}`} en={`Posts from ${author.name}`} />
            </h2>
        {:else}
            <h3>
                <a
                    href={localizeHref(`/authors/${author.slug}`)}
                    class="backlink"
                    data-pagefind-ignore>
                    <Loc
                        cs={`Příspěvky od ${author.nameGenitive}`}
                        en={`Posts from ${author.name}`} />
                </a>
            </h3>
        {/if}
        <p>
            {#if author.bio}
                <Loc text={author.bio} />
            {/if}
        </p>
    </div>
</section>

<style>
    h2,
    h3 {
        margin-top: 0.2em;
        margin-bottom: 0.4em;
    }

    .author-header {
        display: flex;
        gap: 24px;
        margin-bottom: 32px;
    }
    .author-medaillon {
        flex-shrink: 0;
    }

    @media (max-width: 600px) {
        .author-header {
            flex-direction: column;
            align-items: center;
        }
        .author-medaillon {
            margin-bottom: 16px;
        }
    }
</style>
