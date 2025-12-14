<script>
	import Meta from "$src/lib/components/layout/Meta.svelte";
	import Loc from "$lib/components/Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
	import PageLang from "$src/lib/components/PageLang.svelte";
	import MagazinesMenu from "$src/lib/components/magazines/MagazinesMenu.svelte";
</script>

<Meta title={{
    cs: "Databáze časopisů",
    en: "Magazines Database"
}} />

<MagazinesMenu />

<PageLang cs />

<article>
    <h2>
        <Loc
            cs="Vítejte v databázi československých herních časopisů!"
            en="Welcome to the Czechoslovak Game Magazines Database!"
        />
    </h2>
    <p>
         Tento projekt vám přináší projekt Herní archiv spolku <a href={localizeHref('/')}>Herní historie</a>. Cílem projektu je vytvořit knihovnu československých herních časopisů, včetně jejich digitalizace. 
    </p>
    <p>
         V současné chvíli máme přibližne 95% procent všech časopisů, o kterých víme, že v Česku a Slovensku vycházeli a jsme v procesu plnění této databáze. Proto, pokud zde nenacházíte nějaký časopis, zatím nepanikařte - možná jsme ho ještě nestihli do databáze přepsat. 
    </p>
    <p>
         Nicméně jsme si jisti, že nemáme úplně vše. Proto zde existuje stránka <a href="">chybí nám</a>, na které lze najít, která čísla kterého časopisu nám zatím chybí. Pokud nějaký takový časopis máte, prosím neváhejte nás kontaktovat na emailu <a href="info@herniarchiv.cz">info@herniarchiv.cz</a>. Budeme velmi vděční, když nám pomůžete zachraňovat československou herní historii! 
    </p>
    <img src="https://casopisy.herniarchiv.cz/static/magdb/library.jpg" alt="Fotografie knihovny s magazíny Level">
</article>