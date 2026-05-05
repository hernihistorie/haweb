<script lang="ts">
	import Arrow from "$src/lib/components/Arrow.svelte";
import Avatar from "$src/lib/components/Avatar.svelte";
	import Meta from "$src/lib/components/layout/Meta.svelte";
	import SocialMediaLink from "$src/lib/components/layout/SocialMediaLinks/SocialMediaLink.svelte";
</script>

<Meta title="Sanqui - Profil" />

<article class="profile">
    <div class="card">
        <div class="card-header">
            Profil člena spolku Herní Historie, z. s.
        </div>
        <header>
            <div class="avatar">
                <Avatar img={{url: 'https://sanqui.net/etc/sanqui_owl_racieb_avatar_round_250px.png'}} />
            </div>
            <div>
                <h2>Sanqui</h2>
                <p class="title">Člen výboru a programátor</p>
            </div>
        </header>
        <section>
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
        </section>
    </div>
    <Arrow href="/">Blogové příspěvky od Sanquiho</Arrow>
    <!-- TODO správný odkaz na stránku až bude -->
    <a href="/" class="backlink">Členové spolku a komunity</a>
</article>

<style>
    article.profile {
        max-width: 540px;
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
        padding-top: 0.4em;
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
        margin: 0;
        margin-top: 1.2em;
    }
    .title {
        font-style: italic;
        margin-top: 0.2em;
    }

     .social-media-icons {
        display: flex;
        gap: 8px;
    }

    dl {
        margin: 0;
    }

    section {
        padding: 1em;
    }
</style>