<script lang="ts">
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import PostBoxes from "./PostBoxes.svelte";
    import PostYearNav from "./PostYearNav.svelte";
    import { loc } from "$src/lib/loc";
    import { postKinds } from "$src/lib/posts";
    import type { Post, PostKind } from "$src/types";

    interface Props {
        kind: PostKind;
        posts: Post[];
        /** Years to offer in the navigation, or null if this kind isn't split by year */
        years: number[] | null;
        activeYear?: number | null;
    }

    let { kind, posts, years, activeYear = null }: Props = $props();

    const title = $derived(postKinds[kind].title);
</script>

<PageLang cs notice="Most posts are only available in Czech." />

<Meta title={activeYear ? `${loc(title)} (${activeYear})` : title} />

<h2>
    <Loc text={title} />{#if activeYear}&nbsp;({activeYear}){/if}
</h2>

{#snippet yearNav()}
    {#if years}
        <PostYearNav {kind} {years} {activeYear} />
    {/if}
{/snippet}

{@render yearNav()}

<PostBoxes {posts} />

{@render yearNav()}
