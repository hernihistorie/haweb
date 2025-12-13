<script lang="ts">
	import type { Person } from '$src/types';
	import Speaker from './interviews/Speaker.svelte';

    interface Props {
        person: Person;
    }

    let { person }: Props = $props();


</script>

{ person.name }
{#if person.shortname}
    (<Speaker speaker={person} withColon={false} />)
{/if}