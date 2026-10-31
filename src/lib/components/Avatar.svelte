<script lang="ts">
    interface Img {
        url?: string;
        alt?: string;
    }

    interface Props {
        href?: string;
        img?: Img;
        imgDefault?: Img;
        /** Diameter in pixels */
        size?: number;
    }

    const { href, img, imgDefault, size = 150 }: Props = $props();

    // Small avatars get a thinner border
    const borderWidth = $derived(size < 100 ? 2 : 4);
</script>

<a {href} class="avatar" style:--avatar-size="{size}px" style:--avatar-border="{borderWidth}px">
    {#if img}
        <img src={img.url} alt={img.alt ?? "Autor"} />
    {:else}
        <img
            src={imgDefault?.url ?? "/images/ha_logo_secondary.png"}
            alt={imgDefault?.alt}
            class="avatar-standin" />
    {/if}
</a>

<style>
    a {
        display: block;
        flex-shrink: 0;
    }
    .avatar img {
        display: block;
        box-sizing: content-box;
        width: var(--avatar-size);
        height: var(--avatar-size);
        border-radius: 50%;
        object-fit: cover;
        border: var(--avatar-border) solid var(--color-secondary);
        background: var(--color-bg);
    }
</style>
