<script lang="ts">
	import type { Person } from '$src/types';

    export let person: Person;


</script>

{ person.name }
{#if person.shortname }
    (<span style="color: {person.color || 'default'};">{ person.shortname }</span>)
{/if}