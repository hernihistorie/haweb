<script lang="ts">
	import type { Snippet } from 'svelte';
    import { getFootnoteContext } from './context';
    const footnotes = getFootnoteContext();

    let {
        children
    }: {
        children: Snippet
    } = $props();

    // svelte-ignore state_referenced_locally
    const index = footnotes.add(children);
</script>

<a class="footnote-ref" href={"#fn-" + index} id={"fn-ref-" + index}>[{index}]</a>

<style>
    .footnote-ref {
        text-decoration: none;
        font-size: smaller;
        vertical-align: super;
        line-height: 0.5;
    }
</style>