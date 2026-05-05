<script lang="ts">
    import Meta from "$lib/components/layout/Meta.svelte";
    import SocialMediaLink from "$lib/components/layout/SocialMediaLinks/SocialMediaLink.svelte";
    import ProfilePage, { type ProfileData } from "$src/lib/components/ProfilePage.svelte";

    const profile: ProfileData = {
        name: "Sanqui",
        role: "Člen výboru a programátor",
        avatarUrl: "https://sanqui.net/etc/sanqui_owl_racieb_avatar_round_250px.png",
        isMember: true,
        blogHref: "/",
        blogLabel: "Blogové příspěvky od Sanquiho",
    };
</script>

<ProfilePage {profile}>
    <dl>
        <dt>Jméno</dt>
        <dd>David</dd>
        <dt>Oblíbená konzole</dt>
        <dd>Nintendo Game Boy</dd>
        <dt>Email</dt>
        <dd><a href="mailto:me@sanqui.net" class="email">me@sanqui.net</a></dd>
        <dt>Odkazy</dt>
        <dd>
            <div class="social-media-icons">
                <SocialMediaLink href="https://bsky.app/profile/sanqui.net" title="Bluesky" />
                <SocialMediaLink href="https://discord.com/users/83101988983668736" title="Discord" />
                <SocialMediaLink href="https://sanqui.net/" title="Web" />
            </div>
        </dd>
    </dl>
    <hr>
    <p>Byl jsem u toho, když se zakládala jak RetroHerna, tak Herní archiv.  Nejvíce mě baví pracovat na našem <a href="https://inventory.herniarchiv.cz/">inventárním systému</a>, ze kterého bych rád vyvinul aplikaci pro všechny.  Také se specializuji přes digitalizaci disket.</p>
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
