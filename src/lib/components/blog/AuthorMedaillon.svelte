<script lang="ts">
    import Loc from '../Loc.svelte';
    import type { Author } from '$src/types';
	import { localizeHref } from '$src/lib/paraglide/runtime';
    let { author }: { author: Author } = $props();
</script>

<div>
    <a href={localizeHref(`/blog/authors/${author.slug}`)}>
        {#if author.image}
            <img src={author.image.url} alt={author.image.alt ?? "Autor"} class="avatar" />
        {:else}
            <img src="/images/ha_logo_secondary.png" alt="Autor bez obrázku" class="avatar avatar-standin">
        {/if}
        <author>
            <strong>{author.name}</strong>
        </author>
    </a>
</div>

<style>
    .avatar {
        width: 175px;
        height: 175px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 8px;
        border: 4px solid var(--color-secondary);
    }

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
</style>