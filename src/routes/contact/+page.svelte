<script>
	import Meta from "$lib/Meta.svelte";
    import { DONATE_LINKS, SOCIAL_MEDIA_LINKS } from "$src/constants";
</script>

<Meta title="Kontaky" />

<article class="thin">
    <h2>Kontakty</h2>
    <p>
        Kontaktovat nás můžete na následujících místech:
    </p>

    <dl>
        <dt>
            Telefon
        </dt>
        <dd>
            +420 778 726 126<br>(Vojtěch Straka, předseda spolku Herní historie z.s.)
        </dd>
        
        <dt>
            Email
        </dt>
        <dd>
            <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>
        </dd>
    </dl>

    <p>
        Nacházíme se na následujících sociálních sítích:
    </p>

    <dl>
        {#each Object.entries(SOCIAL_MEDIA_LINKS) as [name, url]}
            <dt>
                { name }
            </dt>
            <dd>
                <a href={ url }>{ url }</a>
            </dd>
        {/each}
    </dl>

    <p>
        Finančně nás můžete podpořit na následujících místech:
    </p>

    <dl>
        {#each Object.entries(DONATE_LINKS) as [name, url]}
            <dt>
                { name }
            </dt>
            <dd>
                <a href={ url }>{ url }</a>
            </dd>
        {/each}
    </dl>
</article>