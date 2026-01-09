<script lang="ts">
    import { getFootnoteContext } from './context';
    const footnotes = getFootnoteContext();
</script>

<ol>
    {#each footnotes.footnotes as fn, i}
        <li id={"fn-" + (i + 1)}>
            <a href={"#fn-ref-" + (i + 1)}>[↩]</a>
            {@render fn()}
        </li>
    {/each}
</ol>

<style>
    a {
        text-decoration: none;
    }
</style>