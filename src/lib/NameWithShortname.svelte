<script lang="ts">
	import type { Person } from '$src/types';

    interface Props {
        person: Person;
    }

    let { person }: Props = $props();


</script>

{ person.name }
{#if person.shortname}
    (<span style="color: {person.color || 'default'};">{ person.shortname }</span>)
{/if}