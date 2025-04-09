<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
	import AssetList from "$src/lib/AssetList.svelte";
</script>

<BlogPost
    author_name="Herní historie"
    date="14. března 2025"
    title="Zachráněný software pro Ondra SPO 186"
>

    <p>Jak jsme psali toto úterý, tak se nám povedlo nedávno nejen sehnat dva kusy počítače Ondra, ale také osm kazet s nezazálohavnými programy pro tento počítač. Díky úžasnému Jan Heřman, kterému tímto hrozně moc děkujeme!, už nezazálohované nejsou! Celkově se povedlo zachránit kolem 40 kusů unikátního softwaru. Nutno podotknou, že se jedná primárně o jednoduché obrázky, ale jde zde taky nalézt vzdělávací programy (jako Mapa Československa, nebo osobní slovníky), kondiciogramy, matematické prográmky a samozřejmě jednoduché (zejména textové) hry. Všechny programy můžete stáhnout z našeho inventáře:
    <AssetList assetTagId={27} />
</BlogPost>