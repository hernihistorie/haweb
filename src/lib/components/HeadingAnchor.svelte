<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
    import slugify from 'slugify';
    import LinkIcon from "@lucide/svelte/icons/link";

    interface Props extends HTMLAttributes<HTMLHeadingElement> {
        text: string;
        tag: string;
    }

    const { text, tag, ...restProps }: Props = $props();

    const id = $derived(slugify(text));

    function copyAnchorLink() {
        const url = `${document.URL.split('#')[0]}#${id}`;
        navigator.clipboard.writeText(url);
    }
</script>

<svelte:element this={tag} {id} {...restProps} class="heading-anchor">{text} <a href={`#${id}`} onclick={copyAnchorLink} class="anchor"><LinkIcon /></a></svelte:element>

<style>
    .heading-anchor {
        position: relative;
    }

    .anchor {
        opacity: 0;
        position: absolute;
        left: calc(-30px - 0.2em);
        padding-right: 0.5em;
        top: 0;
        transition: opacity 0.2s;
    }

    .heading-anchor:hover .anchor {
        opacity: 1;
    }
</style>
