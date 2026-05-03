<script lang="ts">
	import type { Snippet } from 'svelte';
    import IconCamera from "@lucide/svelte/icons/camera";
	import Loc from "$src/lib/components/Loc.svelte";

    let props: {
        children?: Snippet;
    } = $props();
</script>

<p>
    <IconCamera />
    <Loc cs="Foto" en="Photo" />: 
    {@render props.children?.()}
</p>

<style>
</style>