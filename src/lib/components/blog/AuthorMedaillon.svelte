<script lang="ts">
    import type { Author } from "$src/types";
    import { localizeHref } from "$src/lib/paraglide/runtime";
    import { authorHref } from "$src/lib/posts";
    import Avatar from "../Avatar.svelte";
    let { author }: { author: Author } = $props();

    const href = $derived(localizeHref(authorHref(author)));
</script>

<div>
    <Avatar {href} img={author.image} imgDefault={{ alt: "Autor bez obrázku" }} />
    <a {href}>
        <author>
            <strong>{author.name}</strong>
        </author>
    </a>
</div>

<style>
    author {
        display: block;
        font-size: 1.2em;
    }

    a {
        text-decoration: none;
        color: inherit;
        text-align: center;
        display: inline-block;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>
