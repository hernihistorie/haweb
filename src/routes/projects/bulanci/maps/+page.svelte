<script lang="ts">
	import BulanciMenu from '../BulanciMenu.svelte';
    import Loc from "#lib/components/Loc.svelte";
	import MapList from "./MapList.svelte";

	const { data } = $props();
</script>

<BulanciMenu />
<Loc>
	{#snippet cs()}
		<h2>Fanouškovské mapy</h2>
		<p>Hra <i>Bulánci</i> dostala v roce 2006, tedy pět let po svém vydání, <b>editor map</b>, který umožnil dlouholetým fanouškům vytvářet a sdílet vlastní mapy a zároveň přilákal nové hráče. S rostoucí dostupností nástrojů pro tvorbu vlastních webových stránek se na internetu začaly ve větší míře šířit fanouškovské mapy. <i>Bulánci</i> tak získali druhý dech, který jim vydržel přibližně do roku 2012, kdy začalo množství nově zveřejňovaných map postupně klesat.
		(<a href="https://dspace.cuni.cz/handle/20.500.11956/212593"><i>Hraní, sdílení, vzpomínání</i></a>, Bakaláská práce, Rudolf Jan Suchý, 2026)</p>
		<p>Tento archiv obsahuje přibližně <b>750 map</b> od více než <b>160 autorů</b>, které se šířily po internetu v letech 2006 až 2021. Mapy byly distribuovány především prostřednictvím fanouškovských webů a cloudových úložišť, jako jsou Edisk, Webshare nebo Ulož.to.</p>
	{/snippet}
	{#snippet en()}
		<h2>Fan maps</h2>
		<p>In 2006, five years after its release, <i>Bulánci</i> received a <b>map editor</b> that allowed longtime fans to create and share their own maps while also attracting new players. As tools for creating personal websites became increasingly accessible, fan-made maps began to spread more widely across the internet. This gave <i>Bulánci</i> a second wind, which lasted until around 2012, when the number of newly published maps gradually began to decline.
		(<a href="https://dspace.cuni.cz/handle/20.500.11956/212593"><i>Playing, Sharing, Remembering</i></a>, Bachelor's thesis, Rudolf Jan Suchý, 2026)</p>
		<p>This archive contains approximately <b>750 maps</b> by more than <b>160 authors</b> that circulated online between 2006 and 2021. The maps were distributed primarily through fan websites and cloud storage services such as Edisk, Webshare, and Ulož.to.</p>
	{/snippet}
</Loc>
<MapList maps={data.bulanciMaps} />

<style>
</style>