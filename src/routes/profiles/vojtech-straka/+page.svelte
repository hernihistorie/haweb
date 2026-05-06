<script lang="ts">
    import SocialMediaLink from "$lib/components/layout/SocialMediaLinks/SocialMediaLink.svelte";
	import Arrow from "$src/lib/components/Arrow.svelte";
	import SocialMediaLinks from "$src/lib/components/layout/SocialMediaLinks/SocialMediaLinks.svelte";
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
        <dd><a href="mailto:vojstraka@gmail.com" class="email">vojstraka@gmail.com</a></dd>
        <dt>Odkazy</dt>
        <dd>
            <SocialMediaLinks>
                <SocialMediaLink href="https://bsky.app/profile/sczther.bsky.social" title="Bluesky" />
            </SocialMediaLinks>
        </dd>
    </dl>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    {#snippet trailer()}
        <Arrow href="/">Přečíst životopis (TODO)</Arrow>
    {/snippet}
</ProfilePage>
