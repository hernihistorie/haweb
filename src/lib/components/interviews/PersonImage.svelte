<script lang="ts">
	import type { Image } from "$src/types";
    import type { HTMLImgAttributes } from 'svelte/elements'

    type Props = {
        image: Image;
        sepia?: boolean;
    } & HTMLImgAttributes;

    let { image, sepia=false, ...attrs }: Props = $props();
</script>

{#if image}
    <img src="{ image.url }" alt="{ image.alt ?? '' }" class:sepia={sepia} {...attrs} />
{/if}

<style>
    img {
        border-radius: 8px;
    }
    
    .sepia {
        filter: sepia(1);
    }
</style>