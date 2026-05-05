<script lang="ts">
    import Meta from "$lib/components/layout/Meta.svelte";
    import SocialMediaLink from "$lib/components/layout/SocialMediaLinks/SocialMediaLink.svelte";
	import Arrow from "$src/lib/components/Arrow.svelte";
    import ProfilePage, { type ProfileData } from "$src/lib/components/ProfilePage.svelte";

    const profile: ProfileData = {
        name: "Vojtěch Straka",
        role: "Zakladatel a předseda spolku",
        avatarUrl: "/photos/vojtech-straka.jpg",
        isMember: true,
    };
</script>

<ProfilePage {profile}>
    <dl>
        <dt>Nick</dt>
        <dd>sCZther</dd>
        <dt>Email</dt>
        <dd><a href="mailto:me@sanqui.net" class="email">vojstraka@gmail.com</a></dd>
        <dt>Odkazy</dt>
        <dd>
            <div class="social-media-icons">
                <SocialMediaLink href="https://bsky.app/profile/sczther.bsky.social" title="Bluesky" />
            </div>
        </dd>
    </dl>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    {#snippet trailer()}
        <Arrow href="/">Přečíst životopis (TODO)</Arrow>
    {/snippet}
</ProfilePage>


<style>
    .social-media-icons {
        display: flex;
        gap: 8px;
    }

    dl {
        margin: 0;
    }
</style>
