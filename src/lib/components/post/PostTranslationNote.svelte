<script lang="ts">
    import BulletPoint from "../BulletPoint.svelte";
    import { getLocale } from "#lib/paraglide/runtime.js";
    import { formatPostDate } from "$src/lib/datetime";
    import type { Post } from "$src/types";

    /** When the post was translated, for readers of the English version */
    let { post }: { post: Post } = $props();

    const translationDate = $derived(
        getLocale() === "en" ? post.english_translation_date : undefined,
    );
</script>

{#if translationDate}
    <BulletPoint />
    Translation:
    <time datetime={translationDate.toString()}>{formatPostDate(translationDate)}</time>
{/if}
