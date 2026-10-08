<script lang="ts">
    import EmbeddedFrame from '$src/lib/components/EmbeddedFrame.svelte';
    import Meta from '$src/lib/components/layout/Meta.svelte';
    import { INVENTORY } from '$src/lib/embedded';

    const TITLE_SUFFIX = ' - Sbírka Herní Archiv';

    let { data } = $props();

    let frameTitle = $state('');
    let title = $derived(frameTitle.replace(TITLE_SUFFIX, '') || 'Sbírka');
</script>

<Meta {title} />

<EmbeddedFrame app={INVENTORY} src={data.src} bind:title={frameTitle} />
