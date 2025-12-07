<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import { blogPost43 } from "./blog_post";
	import AssetList from "$src/lib/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost43}>

    <p>Jak jsme psali toto úterý, tak se nám povedlo nedávno nejen sehnat dva kusy počítače Ondra, ale také osm kazet s nezazálohavnými programy pro tento počítač. Díky úžasnému Jan Heřman, kterému tímto hrozně moc děkujeme!, už nezazálohované nejsou! Celkově se povedlo zachránit kolem 40 kusů unikátního softwaru. Nutno podotknou, že se jedná primárně o jednoduché obrázky, ale jde zde taky nalézt vzdělávací programy (jako Mapa Československa, nebo osobní slovníky), kondiciogramy, matematické prográmky a samozřejmě jednoduché (zejména textové) hry. Všechny programy můžete stáhnout z našeho inventáře:
    <AssetList assetTagId={27} />
</BlogPostPage>