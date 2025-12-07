<script lang="ts">
	import SocialMediaLink from "./SocialMediaLink.svelte";
    import { SOCIAL_MEDIA_LINKS, DONATE_LINKS } from "$src/constants";

</script>
<div class="social-media-links">
    {#each ["Facebook", "Instagram", "Bluesky", "YouTube", "Discord"] as title}
        <SocialMediaLink href={SOCIAL_MEDIA_LINKS[title]} title={title} />
    {/each}
    <!-- {#each Object.entries(DONATE_LINKS) as [name, url]}
        <SocialMediaLink href={url} title={name} />
    {/each} -->
</div>

<style>
    .social-media-links {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        padding-top: 1px;
    }
</style>