<script lang="ts">
	import SocialMediaLink from "./SocialMediaLink.svelte";
    import { SOCIAL_MEDIA_LINKS, DONATE_LINKS } from "$src/constants";

</script>
<div class="social-media-links">
    {#each Object.entries(SOCIAL_MEDIA_LINKS) as [name, url]}
        <SocialMediaLink href={url} title={name} />
    {/each}
    {#each Object.entries(DONATE_LINKS) as [name, url]}
        <SocialMediaLink href={url} title={name} />
    {/each}
</div>

<style>
    .social-media-links {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        padding-top: 1px;
    }
    .social-media-links a svg {
        height: 24px;
    }
</style>