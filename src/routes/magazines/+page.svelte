<script lang="ts">
	import type { PageProps } from './$types';
	import Meta from "$src/lib/components/layout/Meta.svelte";
	import Loc from "$lib/components/Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
	import PageLang from "$src/lib/components/PageLang.svelte";
	import MagazinesMenu from "$src/lib/components/magazines/MagazinesMenu.svelte";
	import SelectedMagazineBox from "$src/lib/components/magazines/SelectedMagazineBox.svelte";
	import Arrow from '$src/lib/components/Arrow.svelte';

	let { data }: PageProps = $props();
</script>

<Meta title={{
    cs: "Databáze časopisů",
    en: "Magazines Database"
}} />

<MagazinesMenu />

<article class="thin">
    <h2>
        <Loc
            cs="Databáze českých a slovenských<br> herních časopisů"
            en="Czech and Slovak Game Magazines Database"
        />
    </h2>
    <Loc>
        {#snippet cs()}
            <p>
                Časopisy o hrách nabízí unikátní okno do minulosti: dozvíme se z nich na čem se hrálo, jaké hry byly oblíbené a nejvíce očekávané, a více o dalších technologických trendech a fenoménech doby.  Jejich zlatá éra začala v 90tých letech a množství publikací vzrostlo s příchodem doby multimediální, kdy díky technologii CD začalo být možné distribuovat poměrně velké objemy dat do rukou hráčů a uživatelů, kteří si tak mohli spolu s počtením užít plných her, vyzkoušet dema, nebo díky aplikacím vyždímat ze svých strojů maximum.  Rychlejší internetová připojení a nárůst online služeb jako jsou Steam a Youtube způsobily, že pro hráče už není běžné kupovat si zájmové magazíny u novinového stánku, ačkoliv pro fanoušky čtení jsou stále dostupné kvalitní české herní časopisy za předplatné, což je ve světě poměrně výjimečné.
            </p>
            <p>
                Časopisy jsou cenným zdrojem pro historiky a proto je mít kompletní knihovnu v <a href={localizeHref("/about")}>Herním archivu</a> je jedním z hlavních cílů spolku.  V současnosti se nám podařilo zajistit kopii skoro všech vydání časopisů, o kterých víme, že v Česku a na Slovensku vycházely.  Projekt <strong>databáze časopisů</strong> jsme spustili v roce 2023 a jedná se o snahu veřejně katalogizovat všechna jednotlivá vydání časopisů v našem archivu.  Můžete si všimnout, že některé časopisy jsou označené za chybějící.  Plný seznam publikací, které do archivu stále hledáme, naleznete na seznamu <a href={localizeHref('/magazines/miss-list/')}>Chybí nám</a>.  Budeme vděční, pokud nám pomůžete naši kolekci doplnit.
            </p>
            <p>
                Soustavně s touto databází usilovně pracujeme na skenování a digitalizaci časopisů v naší sbírce.  V rámci možností zajišťujeme přístup ke skenům veřejnosti to skrze projekt <strong>Internet Archive</strong>, na nějž naleznete odkazy na stránkách jednotlivých časopisů.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                Game magazines offer a unique window into the past: we can learn from them what was being played, which games were popular and most anticipated, and more about other technological trends and phenomena of the era. Their golden age began in the 90s, and the number of publications grew with the advent of the multimedia era, when CD technology made it possible to distribute relatively large volumes of data to players and users, who could alongside a pleasant read enjoy full games, try out demos, or get the most out of their machines thanks to various applications. Faster internet connections and the rise of online services like Steam and YouTube meant that it is no longer common for players to buy specialty magazines at newsstands, although quality Czech gaming magazines are still available by subscription for reading enthusiasts, which is quite exceptional in the world.
            </p>
            <p>
                Magazines are a valuable resource for historians, and having a complete library at the <a href={localizeHref("/about")}>Game Archive</a> is one of the main goals of our association. We have currently managed to secure a copy of almost all magazine issues that we know were published in Czechia and Slovakia. We launched the <strong>magazine database</strong> project in 2023 as an effort to publicly catalog all individual magazine issues in our archive. You may notice that some magazines are marked as missing. The full list of publications we are still looking for can be found on the <a href={localizeHref('/magazines/miss-list/')}>Missing list</a> page. We would be grateful if you could help us complete our collection.
            </p>
            <p>
                Alongside this database, we are diligently working on scanning and digitizing the magazines in our collection. Where possible, we provide public access to scans through the <strong>Internet Archive</strong> project, with links available on individual magazine pages.
            </p>
        {/snippet}
    </Loc>
    <Arrow href="/magazines/catalog/">
        <Loc cs="Prohlédnout katalog časopisů" en="View magazine catalog" />
    </Arrow>
    <h2><Loc cs="Vybrané časopisy" en="Selected magazines" /></h2>
    {#each data.selectedMagazines as magazine}
        <SelectedMagazineBox {magazine} />
    {/each}

    <Arrow href="/magazines/catalog/">
        <Loc cs="Prohlédnout katalog časopisů" en="View magazine catalog" />
    </Arrow>

    <div style="margin-bottom: 3em;"></div>

    <img src="https://casopisy.herniarchiv.cz/static/magdb/library.jpg" alt="Fotografie knihovny s magazíny Level">
</article>