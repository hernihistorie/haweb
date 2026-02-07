<script lang="ts">
    import { localizeHref } from '$src/lib/paraglide/runtime';
import IconSearch from '@lucide/svelte/icons/search';
</script>

<a href={localizeHref("/search")}>
	<IconSearch class="icon" />
</a>

<style>
	a {
		color: var(--color-text);
		display: block;
		margin-top: 0.2em;
	}
	a :global(.lucide-icon) {
		vertical-align: top;
	}
</style>