<script lang="ts">
	import Meta from './layout/Meta.svelte';
    import type { LocalizedString } from '$src/types';

    interface Props {
        title: LocalizedString;
        side?: import('svelte').Snippet;
        content?: import('svelte').Snippet;
        stickySide?: boolean;
        class?: string;
    }

    let { title, side, content, stickySide=false, class: className }: Props = $props();
</script>

<Meta title={title}/>

<article class={className}>
    <div class="side" class:sticky={stickySide}>
        {@render side?.()}
    </div>
    <div class="content">
        {@render content?.()}
    </div>
</article>

<style>
    article {
        margin: auto;
        display: flex;
        justify-content: center;
        margin-top: 108px;
    }
    .sticky {
        position: sticky;
    }
    .side {
        top: 2em;

        max-height: calc(100vh - 4em);
        padding-right: 8px;
        padding-bottom: 4em;
        overflow-y: scroll;
        
        margin-left: 100px;
        max-width: 260px;
        display: flex;
        flex-direction: column;
        align-items: end;
        text-align: center;
    }

    .side :global(img) {
        margin-bottom: 8px;
    }

    .content {
        margin-left: 24px;
        max-width: 700px;
    }
    
    .content > :global(h2) {
        margin-top: 0;
        text-transform: uppercase;
    }
    
    .content > :global(p:first-of-type) {
        font-size: 120%;
    }
    
    .content :global(img) {
        max-width: 100%;
    }

    .side :global(img), .side :global(author), .side :global(date) {
        display: block;
    }

	@media screen and (max-width: 1200px) {
		article {
            display: block;
            margin-top: 1em;
        }

        .side {
            position: static;
            margin: auto;
            margin-bottom: 0.2em;
            padding-bottom: 2em;
            text-align: center;
            width: 100%;
        }
	}

    @media only screen and (max-width: 800px) {
        .content {
            margin-left: 0;
        }
    }
</style>