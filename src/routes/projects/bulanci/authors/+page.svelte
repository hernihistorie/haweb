<script lang="ts">
    import BulanciMenu from "../BulanciMenu.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import Meta from "#lib/components/layout/Meta.svelte";
    import AuthorList from "./AuthorList.svelte";
    import ClanCard from "./ClanCard.svelte";
    import FeaturedAuthor from "./FeaturedAuthor.svelte";

    const { data } = $props();
</script>

<Meta
    title={{
        cs: "Autoři a kolektivy - Bulánci",
        en: "Creators and Collectives - Bulánci",
    }} />

<BulanciMenu />
<Loc>
    {#snippet cs()}
        <h2>Autoři a kolektivy</h2>
        <p>
            <i>Bulánci</i> by samozřejmě neměli žádný uživatelský obsah, nebýt jejich oddaných
            fanoušků. Kolem <i>Bulánků</i>, podobně jako kolem jiných kompetitivních her, vznikala
            také tzv. <b>klany</b> – organizovaná uskupení hráčů, která často pořádala zápasy,
            zakládala vlastní weby nebo společně vytvářela mapy do hry. Tato stránka představuje
            téměř <b>200 fanoušků a fanouškovských uskupení</b>, kteří na internetu vytvářeli mapy
            nebo provozovali weby věnované hře. Slouží především jako rozcestník k další tvorbě
            těchto fanoušků.
        </p>
    {/snippet}
    {#snippet en()}
        <h2>Creators and Collectives</h2>
        <p>
            Of course, <i>Bulánci</i> would not have any user-generated content without its
            dedicated fans. As with other competitive games, <b>clans</b> also emerged around
            <i>Bulánci</i> – organized groups of players that often held matches, created their own websites,
            or collaborated on making maps for the game. This page presents nearly 200 fans and fan groups
            who created maps or ran websites dedicated to the game. It primarily serves as a directory
            leading to their other work.
        </p>
    {/snippet}
</Loc>

<section>
    <h2><Loc cs="Autoři, se kterými jsme mluvili" en="Creators we interviewed" /></h2>
    <div class="featured">
        {#each data.interviewees as author (author.slug)}
            <FeaturedAuthor {author} />
        {/each}
    </div>
</section>

<section>
    <h2><Loc cs="Klany" en="Clans" /></h2>
    <div class="clans">
        {#each data.clans as clan (clan.slug)}
            <ClanCard {clan} />
        {/each}
    </div>
</section>

<section>
    <h2><Loc cs="Všichni autoři" en="All creators" /></h2>
    <AuthorList authors={data.authors} clans={data.clans} />
</section>

<style>
    section {
        margin-top: 2.5em;
    }

    .featured {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(26em, 100%), 1fr));
        gap: 2em 2.5em;
    }

    .clans {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(17em, 100%), 1fr));
        gap: 1em;
    }
</style>
