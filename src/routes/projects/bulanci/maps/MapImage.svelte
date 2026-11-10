<script lang="ts">
    import type { BulanciMapImage } from "$src/data/bulanci";
    import { loc } from "$src/lib/loc";
    import IconEyeOff from "@lucide/svelte/icons/eye-off";

    interface Props {
        image: BulanciMapImage | null;
        /** Value of the `sizes` attribute */
        sizes: string;
        nsfw?: boolean;
    }

    let { image, sizes, nsfw = false }: Props = $props();

    let revealed = $state(false);
</script>

<!--
    Screenshots are 800×600, but the bottom ~105px is the game's HUD (or the
    loading indicator on loading screens), so only the top 800×495 is shown.
-->
<div class="map-image" class:blurred={nsfw && !revealed}>
    {#if image}
        <img src={image.src} srcset={image.srcset} {sizes} alt="" loading="lazy" decoding="async" />
    {/if}
    {#if nsfw && !revealed}
        <button class="link reveal" onclick={() => (revealed = true)}>
            <IconEyeOff size="1.25em" />
            <span>{loc({ cs: "Nevhodné pro mladistvé – zobrazit", en: "Not safe for work – show" })}</span>
        </button>
    {/if}
</div>

<style>
    .map-image {
        position: relative;
        aspect-ratio: 800 / 495;
        overflow: hidden;
        background: var(--color-secondary-transparent);
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    .blurred img {
        filter: blur(16px);
        transform: scale(1.1);
    }

    .reveal {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.25em;
        padding: 0.5em;
        color: #fff;
        background: #0006;
        font-size: 0.9em;
        text-align: center;
    }
</style>
