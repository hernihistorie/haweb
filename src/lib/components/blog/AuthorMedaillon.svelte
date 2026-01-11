<script lang="ts">
    import Loc from '../Loc.svelte';
    import type { Author } from '$src/types';
	import { localizeHref } from '$src/lib/paraglide/runtime';
	import type { Temporal } from '@js-temporal/polyfill';
	import BulletPoint from '../BulletPoint.svelte';
    let { author, date, inline = false }: { author: Author; date?: Temporal.PlainDate; inline?: boolean } = $props();
</script>

<div class:inline={inline}>
    <a href={localizeHref(`/blog/authors/${author.slug}`)}>
        {#if author.image}
            <img src={author.image.url} alt={author.image.alt ?? "Autor"} class="avatar" />
        {:else}
            <img src="/images/ha_logo_secondary.png" alt="Autor bez obrázku" class="avatar avatar-standin">
        {/if}
    </a>
    <a href={localizeHref(`/blog/authors/${author.slug}`)}>
        <author>
            <strong>{author.name}</strong>
        </author>
    </a>
    {#if date}
        <BulletPoint />
        <date>
            {date.day}.&nbsp;{date.month}.&nbsp;{date.year}
        </date>
    {/if}
</div>

<style>
    .avatar {
        width: 150px;
        height: 150px;
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

    div {
        display: flex;
        flex-direction: column;
    }

    .inline {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
    }

    .inline .avatar {
        border-width: 2px;
        width: 48px;
        height: 48px;
        margin-bottom: 0;
        vertical-align: middle;
        margin-right: 8px;
    }

    .inline author {
        font-size: 1em;
    }
</style>