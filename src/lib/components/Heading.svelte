<script lang="ts">
    import type {HTMLAttributes} from 'svelte/elements';
    import copy from 'copy-to-clipboard';
    import IconLink from '@lucide/svelte/icons/link';
	import { page } from '$app/state';
    interface Props {
        h: '1' | '2' | '3' | '4' | '5' | '6';
        children?: import('svelte').Snippet;
    };

    let { h: level, children, ...props }: Props & HTMLAttributes<HTMLHeadingElement> = $props();
    let element = $derived(`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');
</script>

<svelte:element class="heading" this={element} {...props}>
    {@render children?.()}
    {#if props.id}
        <a
            href="#{props.id}"
            class="anchor"
            onclick={() => {
                if (props.id) {
                    const url = page.url;
                    url.hash = props.id;
                    copy(url.toString());
                }
            }}
        >
            <IconLink />
        </a>
    {/if}
</svelte:element>

<style>
    .heading .anchor {
        opacity: 0;
        transition: opacity 0.2s;
    }

    .heading:hover .anchor {
        opacity: 1;
    }
</style>