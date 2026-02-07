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

<PageLang cs />

<article class="thin">
    <h2>
        <Loc
            cs="Databáze československých<br> herních časopisů"
            en="Czechoslovak Game Magazines Database"
        />
    </h2>
    <p>
         Tento projekt vám přináší projekt Herní archiv spolku <a href={localizeHref('/')}>Herní historie</a>. Cílem projektu je vytvořit knihovnu československých herních časopisů, včetně jejich digitalizace. 
    </p>
    <p>
         V současné chvíli máme přibližne 95% procent všech časopisů, o kterých víme, že v Česku a Slovensku vycházeli a jsme v procesu plnění této databáze. Proto, pokud zde nenacházíte nějaký časopis, zatím nepanikařte - možná jsme ho ještě nestihli do databáze přepsat. 
    </p>
    <p>
         Nicméně jsme si jisti, že nemáme úplně vše. Proto zde existuje stránka <a href={localizeHref('/magazines/miss-list/')}>chybí nám</a>, na které lze najít, která čísla kterého časopisu nám zatím chybí. Pokud nějaký takový časopis máte, prosím neváhejte nás kontaktovat na emailu <a href="mainto:info@herniarchiv.cz">info@herniarchiv.cz</a>. Budeme velmi vděční, když nám pomůžete zachraňovat československou herní historii! 
    </p>
    <h2>Vybrané časopisy</h2>
    <p>
        TODO: třeba 4 vybrané časopisy s drobným komentářem (co je to za časopis, čím je zajímavý, kdy jsme ho oskenovali), a odkaz na zbytek katalogu
        <br>
        TODO<br>
        TODO<br>
        TODO<br>
        TODO<br>
        TODO<br>
    </p>

    {#each data.selectedMagazines as magazine}
        <SelectedMagazineBox {magazine} />
    {/each}

    <Arrow href="/magazines/catalog/">
        <Loc cs="Prohlédnout katalog časopisů" en="View magazine catalog" />
    </Arrow>

    <div style="margin-bottom: 3em;"></div>

    <img src="https://casopisy.herniarchiv.cz/static/magdb/library.jpg" alt="Fotografie knihovny s magazíny Level">
</article>