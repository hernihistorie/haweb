<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
    import slugify from 'slugify';
    import LinkIcon from "@lucide/svelte/icons/link";

    interface Props extends HTMLAttributes<HTMLHeadingElement> {
        text: string;
    }

    const { text, ...restProps }: Props = $props();

    const id = $derived(slugify(text));

    function copyAnchorLink() {
        const url = `${document.URL.split('#')[0]}#${id}`;
        navigator.clipboard.writeText(url);
    }
</script>

<h4 {id} {...restProps}>{text} <a href={`#${id}`} onclick={copyAnchorLink} class="anchor"><LinkIcon /></a></h4>

<style>
    h4 {
        position: relative;
    }

    .anchor {
        opacity: 0;
        position: absolute;
        left: -1.75em;
        padding-right: 0.5em;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.2s;
    }

    h4:hover .anchor {
        opacity: 1;
    }
</style>