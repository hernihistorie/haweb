<script lang="ts">
	import BulanciMenu from "../BulanciMenu.svelte";
    import Loc from "#lib/components/Loc.svelte";

</script>

<BulanciMenu />
<Loc>
	{#snippet cs()}
        <h2>Autoři a kolektivy</h2>
        <p><i>Bulánci</i> by samozřejmě neměli žádný uživatelský obsah, nebýt jejich oddaných fanoušků. Kolem <i>Bulánků</i>, podobně jako kolem jiných kompetitivních her, vznikala také tzv. <b>klany</b> – organizovaná uskupení hráčů, která často pořádala zápasy, zakládala vlastní weby nebo společně vytvářela mapy do hry. Tato stránka představuje téměř <b>200 fanoušků a fanouškovských uskupení</b>, kteří na internetu vytvářeli mapy nebo provozovali weby věnované hře. Slouží především jako rozcestník k další tvorbě těchto fanoušků.</p>
        <p>TODO: sem nahoru dej profily 4 autorů s ktrými máme rozhovory</p>
        <p>TODO: Sem kolektivy</p>
        <p>TODO: Sem zbytek autorů</p>
    {/snippet}
    {#snippet en()}
        <h2>Creators and Collectives</h2>
        <p>Of course, <i>Bulánci</i> would not have any user-generated content without its dedicated fans. As with other competitive games, <b>clans</b> also emerged around <i>Bulánci</i> – organized groups of players that often held matches, created their own websites, or collaborated on making maps for the game. This page presents nearly 200 fans and fan groups who created maps or ran websites dedicated to the game. It primarily serves as a directory leading to their other work.</p>
    {/snippet}
</Loc>
<style>
</style>