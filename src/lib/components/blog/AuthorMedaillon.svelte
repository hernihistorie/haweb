<script lang="ts">
    import Loc from '../Loc.svelte';
    import type { Author } from '$src/types';
	import { localizeHref } from '$src/lib/paraglide/runtime';
	import type { Temporal } from '@js-temporal/polyfill';
	import BulletPoint from '../BulletPoint.svelte';
	import Avatar from '../Avatar.svelte';
    let { author, date, inline = false }: { author: Author; date?: Temporal.PlainDate | Temporal.PlainDateTime; inline?: boolean } = $props();
</script>

<div class:inline={inline}>
    <Avatar href={localizeHref(`/blog/authors/${author.slug}`)} img={author.image} imgDefault={{alt: "Autor bez obrázku"}} {inline} />
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

    .inline {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
    }

    .inline author {
        font-size: 1em;
    }
</style>