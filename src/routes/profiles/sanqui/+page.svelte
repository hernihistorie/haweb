<script lang="ts">
	import Avatar from "$src/lib/components/Avatar.svelte";
	import SocialMediaLink from "$src/lib/components/layout/SocialMediaLinks/SocialMediaLink.svelte";
</script>

<article class="profile">
    <div class="card">
        <div class="card-header">
            Profil člena spolku Herní Historie
    </div>
        <header>
            <div class="avatar">
                <Avatar img={{url: 'https://sanqui.net/etc/sanqui_owl_racieb_avatar_round_250px.png'}} />
            </div>
            <div>
                <h2>Sanqui</h2>
            </div>
        </header>
        <section>
            <dl>
                <dt>Jméno</dt>
                <dd>David</dd>
                <dt>Role</dt>
                <dd>Člen výboru, programátor</dd>
                <dt>Oblíbená konzole</dt>
                <dd>Game Boy</dd>
                <dt>Odkazy</dt>
                <dd>
                    <div class="social-media-icons">
                        <SocialMediaLink href="https://bsky.app/profile/sanqui.net" title="Bluesky" />
                        <SocialMediaLink href="https://discord.com/users/83101988983668736" title="Discord" />
                        <SocialMediaLink href="https://sanqui.net/" title="Web" />
                    </div>
                </dd>
            </dl>
            <p>Byl jsem u toho, když se zakládala jak RetroHerna, tak Herního archiv.  Nejvíce mě baví pracovat na našem <a href="https://inventory.herniarchiv.cz/">inventárním systému</a>, ze kterého bych rád vyvinul aplikaci pro všechny.  Také se specializuji přes digitalizaci disket.</p>
        </section>
    </div>
    <!-- TODO správný odkaz na stránku až bude -->
    <a href="/" class="backlink">Členové spolku Herní Historie</a>
</article>

<style>
    article.profile {
        max-width: 500px;
        margin: 0 auto;
    }

    .card {
        margin: 1em auto;
        /* padding: 2em; */
        border: 4px solid var(--color-secondary);
    }

    .card-header {
        background: var(--color-secondary);
        color: var(--color-bg);
        font-weight: bold;
        text-align: center;
        padding-top: 0.5em;
        padding-bottom: 0.6em;
    }

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        padding: 1em;
        border-bottom: 4px solid var(--color-secondary);
        /* background: var(--color-secondary); */

        @media (width < 500px) {
            flex-direction: column;
        }
    }

    .avatar {
        flex-shrink: 0;
    }

    header h2 {
        padding: 0.2em 1em;
        margin: 0;
    }

    dl {
        margin: 0;
    }

    section {
        padding: 1em;
    }
</style>