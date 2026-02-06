<script lang="ts">
	import type { Snippet } from "svelte";

    let {
        children
    }: { children: Snippet } = $props();

</script>

<ul>
    {@render children()}
</ul>

<style>

	ul {
		margin: auto;
        margin-left: -27px; /* Offset the padding of first item on each line */
        padding: 0;
		list-style: none;
		display: flex;
		justify-content: start;
		flex-wrap: wrap;
        line-height: 2em;
        overflow: hidden; /* Hide pipes that overflow to new lines */
	}

	ul > :global(li) {
		padding: 0 27px 0 27px;
    }

	ul > :global(li::before) {
        content: "";
		border-left: 1px solid var(--color-secondary);
        padding-right: 27px;
        margin-left: -28px; /* Pull pipe back to overlap with left padding */
        line-height: 1em;
    }

	ul > :global(li:first-child::before) {
        padding-left: 0;
		border-left: none;
	}

    ul > :global(li.active), ul > :global(li a.active)  {
        font-weight: bold;
    }

	ul > :global(li a) {
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
		user-select: none;
	}

	ul > :global(li a:hover) {
		text-decoration: underline;
	}

	ul > :global(li.active a:hover) {
		text-decoration: none;
	}
</style>