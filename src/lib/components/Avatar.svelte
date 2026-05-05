<script lang="ts">
    interface Img {
        url?: string;
        alt?: string;
    }

    interface Props {
        href?: string;
        img?: Img;
        imgDefault?: Img;
        inline?: boolean;
    }

    const { href, img, imgDefault, inline }: Props = $props();

</script>
<a href={href} class="avatar" class:inline>
    {#if img}
        <img src={img.url} alt={img.alt ?? "Autor"} />
    {:else}
        <img src={imgDefault?.url ?? "/images/ha_logo_secondary.png"} alt={imgDefault?.alt} class="avatar-standin">
    {/if}
</a>

<style>
    a {
        display: block;
    }
    .avatar img {
        display: block;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        /* margin-bottom: 8px; */
        border: 4px solid var(--color-secondary);
        background: var(--color-bg);
    }

    .inline.avatar img {
        border-width: 2px;
        width: 48px;
        height: 48px;
        margin-bottom: 0;
        vertical-align: middle;
        margin-right: 8px;
    }
</style>