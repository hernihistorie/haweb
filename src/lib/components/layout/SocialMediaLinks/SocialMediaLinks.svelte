<script lang="ts">
	import SocialMediaLink from "./SocialMediaLink.svelte";
    import { SOCIAL_MEDIA_LINKS, DONATE_LINKS } from "$src/constants";
	import type { Snippet } from "svelte";
    let { children }: { children?: Snippet } = $props();

</script>
<div class="social-media-links">
    {#if children}
        {@render children()}
    {:else}
        {#each ["Facebook", "Instagram", "Bluesky", "YouTube", "Discord"] as title}
            <SocialMediaLink href={SOCIAL_MEDIA_LINKS[title]} title={title} />
        {/each}
    {/if}
</div>

<style>
    .social-media-links {
        display: flex;
        gap: 8px;
        align-items: bottom;
    }
</style>