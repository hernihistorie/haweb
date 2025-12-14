<script>
	import Meta from "$src/lib/components/layout/Meta.svelte";
    import { DONATE_LINKS, SOCIAL_MEDIA_LINKS } from "$src/constants";
	import Loc from "$lib/components/Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Meta title={{
    cs: "Kontakty",
    en: "Contacts"
}} />

<article class="thin">
    <h2>
        <Loc
            cs="Kontakty"
            en="Contacts"
        />
    </h2>
    <p>
        <Loc
            cs="Kontaktovat nás můžete následujícími způsoby:"
            en="You can contact us in the following ways:"
        />
    </p>

    <dl>
        <dt>
            <Loc
                cs="Telefon"
                en="Phone"
            />
        </dt>
        <dd>
            +420 778 726 126<br>(Vojtěch Straka, <Loc cs="předseda spolku Herní historie z.s.)"
                                                      en="chairman of the Game History Association)"/>
        </dd>
        
        <dt>
            Email
        </dt>
        <dd>
            <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>
        </dd>
    </dl>

    <p>
        <Loc
            cs="Nacházíme se na následujících sociálních sítích:"
            en="We are on the following social networks:"
        />
    </p>

    <dl>
        {#each Object.entries(SOCIAL_MEDIA_LINKS) as [name, url]}
            <dt>
                { name }
            </dt>
            <dd>
                <a href={ url }>{ url.replace("https://", "") }</a>
            </dd>
        {/each}
    </dl>

    <h3>
        <Loc
            cs="Kde nás najdete"
            en="Where to find us"
        />
    </h3>

    <img src="/images/Kde nás najdete Herní historie-zoom.png" alt="Map of Prague showing the approximate locations of RetroHerna and the Game Archive" />

    <h3>
        <Loc
            cs="Finanční podpora"
            en="Financial support"
        />
    </h3>

    <p>
        <Loc
            cs={`Možnosti podpory naleznete na stránce <a href='${localizeHref('/support/')}'>Podpořte nás</a>.`}
            en={`You can support our activities on <a href='${localizeHref('/support/')}'>Support Us</a> page.`}
        />
    </p>
</article>