<script lang="ts">
    import { page } from "$app/state";
    import { building } from "$app/env";
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import { getLocale, localizeHref } from "#lib/paraglide/runtime.js";
    import { loc } from "$src/lib/loc";
    import { inventoryLoginHref } from "$src/lib/embedded";

    let { data } = $props();

    // Rounded down, as the text says "more than"
    let roundedAssetCount = $derived(
        (data.assetCount ? Math.floor(data.assetCount / 1000) * 1000 : 9000).toLocaleString(
            getLocale(),
        ),
    );

    // rhinventory sends visitors here from staff-only pages, with the page in `next`
    let next = $derived(building ? null : page.url.searchParams.get("next"));
</script>

<Meta title={{ cs: "Sbírka", en: "Collection" }} />

<article class="thin">
    {#if next}
        <p class="notice">
            <Loc
                cs="Tato stránka sbírky je přístupná jen správcům."
                en="This page of the collection is only accessible to staff."
            />
            <a href={inventoryLoginHref(next)}><Loc cs="Přihlásit se" en="Log in" /></a>
        </p>
    {/if}

    <h1><Loc cs="O naší sbírce" en="About our collection" /></h1>
    <Loc>
        {#snippet cs()}
            <p>
                Na tomto webu naleznete předměty, které jsou vedené v rámci evidence Herní historie,
                z.s. Spolek zastřešuje dva projekty: <a href="https://retroherna.org/">RetroHerna</a
                >
                a <a href={localizeHref("/")}>Československý herní archiv</a>. Předměty se využívají
                k výstavním, výukovým, archivářským, a badatelským účelům v závislosti na
                charakteru. V evidenci vedeme v současnosti více než {roundedAssetCount} předmětů zahrnující
                herní konzole a počítače, periferie, hry na původních nosičích, přepisovatelná média s
                uživatelskými programy, a literaturu, včetně časopisů a knih souvisejících s hrami či
                počítači.
            </p>
            <p>
                V rámci transparentnosti umožňujeme od roku 2024 široké veřejnosti nahlédnout do
                databáze, negarantujeme ovšem korektnost či úplnost informací. Na inventarizaci naší
                sbírky se neustále pracuje a ne všechny předměty zatím mají položku v databázi. V
                případě, že máte zájem o specifický předmět, či kategorii předmětů, a nenaleznete
                požadované informace v databázi, neváhejte nás
                <a href={localizeHref("/contact")}>kontaktovat</a> a rádi vám pomůžeme.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                Here you will find the items kept in the inventory of Herní historie, z.s. The
                association runs two projects: <a href="https://retroherna.org/">RetroHerna</a>
                and the <a href={localizeHref("/")}>Czechoslovak Game Archive</a>. Depending on
                their nature, the items are used for exhibitions, education, archiving, and
                research. We currently keep records of more than {roundedAssetCount} items, including
                game consoles and computers, peripherals, games on their original media, rewritable media
                with user programs, and literature, including magazines and books related to games or
                computers.
            </p>
            <p>
                For the sake of transparency, we have been opening the database to the general
                public since 2024, though we cannot guarantee that its information is correct or
                complete. Inventorying our collection is ongoing work, and not every item has an
                entry in the database yet. If you are interested in a specific item or category of
                items and can't find what you're looking for in the database, don't hesitate to
                <a href={localizeHref("/contact")}>contact us</a> and we will be happy to help.
            </p>
        {/snippet}
    </Loc>

    <h2><Loc cs="Psané materiály" en="Written materials" /></h2>
    <img
        src="/photos/pocitac_pritel_cloveka.jpg"
        alt={loc({
            cs: "Fotka časopisů Počítač přítel člověka",
            en: "Photo of Počítač přítel člověka magazines",
        })}
    />
    <Loc>
        {#snippet cs()}
            <p>
                Literatura je ověřený zdroj předávání informací po generace. V rámci naší sbírky se
                soustředíme na knihy související s herní historií u nás či ve světě. Stejně tak
                důležité jsou dobové časopisy, které umožňují jedinečný vhled do historického
                kontextu her a techniky. V současnosti naše sbírka herních časopisů pokrývá přes
                1500 čísel více jak 50 různých herních magazínů z Česka a Slovenska. Nechybí zde ani
                malonákladové a samizdatové produkce. V neposlední řadě se jedná o jedinečné
                materiály od samotných herních vývojářů, jako náčrtky z koncepčních fází.
            </p>
            <p>
                Psané materiály bezpečně uchováváme a soustavně pracujeme na jejich digitalizaci a
                zpřístupnění. Tvoříme také
                <a href={localizeHref("/magazines")}>databázi časopisů s herní tématikou u nás</a>.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                Literature is a time-tested way of passing information down through generations. In
                our collection, we focus on books related to the history of games, both here and
                around the world. Just as important are period magazines, which offer a unique
                insight into the historical context of games and technology. Our collection of
                gaming magazines currently covers over 1,500 issues of more than 50 different gaming
                magazines from the Czech Republic and Slovakia, not leaving out small-circulation
                and samizdat publications. Last but not least, there are unique materials from game
                developers themselves, such as sketches from the concept phase.
            </p>
            <p>
                We keep written materials safe and continuously work on digitizing them and making
                them accessible. We are also building a
                <a href={localizeHref("/magazines")}
                    >database of Czech and Slovak gaming magazines</a
                >.
            </p>
        {/snippet}
    </Loc>

    <h2><Loc cs="Hry" en="Games" /></h2>
    <img
        src="/photos/tajemstvi_osliho_ostrova.jpg"
        alt={loc({
            cs: "Fotka krabicové hry Tajemství oslího ostrova, včetně diskety",
            en: "Photo of the boxed game Tajemství oslího ostrova, including its floppy disk",
        })}
    />
    <Loc>
        {#snippet cs()}
            <p>
                Samozřejmě nemohou chybět hry samotné, kterých máme ve sbírce více jak 3 500. Jde o
                videohry jak od českých a slovenských tvůrců, tak o zahraniční v lokalizované
                distribuci. Sbíráme hry na původních nosičích a všechna média zálohujeme, neboť
                např. diskety a optické disky mohou podléhat zkáze a ztrácet data (tzv. bit rot).
                Součástí herní prezentace jsou i manuály a krabice. Neopomenutelnou stránkou herní
                kultury jsou i nelicencované kopie zahraničních her, zejména z doby před pádem
                železné opony.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                Of course, the games themselves can't be missing, and our collection holds more than
                3,500 of them. These are video games both by Czech and Slovak creators and foreign
                ones in localized distribution. We collect games on their original media and back up
                all of the media, as floppy disks and optical discs, for example, can deteriorate
                and lose data (so-called bit rot). Manuals and boxes are part of how a game is
                presented, too. Unlicensed copies of foreign games, especially from before the fall
                of the Iron Curtain, are another aspect of gaming culture that can't be overlooked.
            </p>
        {/snippet}
    </Loc>

    <h2><Loc cs="Stroje" en="Machines" /></h2>
    <img
        src="/photos/tesla_xd_8001.jpg"
        alt={loc({
            cs: "Stroj TV Hra XD 8001 od Tesly včetně analogových ovladačů na Pong",
            en: "The TV Hra XD 8001 machine by Tesla, including analog Pong controllers",
        })}
    />
    <Loc>
        {#snippet cs()}
            <p>
                Všechny hry jsou navrženy pro technologii své doby. Pokrok ovšem nelze zastavit, a
                tak jsou časem stroje nahrazeny. Podpora se časem vytratí a staré hry nelze na
                moderních zařízeních jednoduše přehrát. A i pokud to možné je, jedná se o odlišný
                zážitek. Staré stroje chátrají a jejich správa vyžaduje určité know-how. V naší
                sbírce najdete přes 300 strojů, včetně těch československé výroby. Také
                zakomponováváme zajímavé a vzácné periferie i moderní doplňky.
            </p>
            <p>
                Sbírka Československého herního archivu zahrnuje také zahraniční hry a stroje. Ty
                jsou využívané mimo jiné v rámci projektu
                <a href="https://retroherna.cz/">RetroHerna</a>, který zpřístupňuje herní historii
                veřejnosti.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                Every game is designed for the technology of its time. Progress can't be stopped,
                though, and machines get replaced over time. Support fades away, and old games can't
                simply be played on modern devices. Even where that is possible, it is a different
                experience. Old machines deteriorate, and looking after them takes some know-how.
                Our collection includes over 300 machines, including ones made in Czechoslovakia. We
                also include interesting and rare peripherals as well as modern accessories.
            </p>
            <p>
                The collection of the Czechoslovak Game Archive also includes foreign games and
                machines. Among other things, they are used by the
                <a href="https://retroherna.cz/">RetroHerna</a> project, which brings gaming history to
                the public.
            </p>
        {/snippet}
    </Loc>
</article>

<style>
    .notice {
        padding: 0.5em 1em;
        border-left: 4px solid var(--color-warning);
        background: var(--color-surface);
    }
</style>
