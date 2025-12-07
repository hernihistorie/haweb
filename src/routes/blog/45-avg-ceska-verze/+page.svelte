<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
	import AssetList from "$src/lib/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage
    author_name="Herní historie"
    date="11. dubna 2025"
    title="Zdigitalizovali jsme Antivirus AVG v 1.62"
>
    <p>Není nic horšího, než když si na počítači chcete zahrát letní olympiádu a místo ní na vás vybafne virus, který chce sušenku.
    <p>A proto jsme do archivu pořídili prvotřídní ochranu od AVG - tedy vlastně Anti-Virus Guard, jak se program tehdy jmenoval. Verze 1.62 z listopadu 1991 je nově v našem inventáři a její dump si můžete stáhnout i vy a ochránit své 386ky od pravěkých breberek:
    <AssetList assetTagId={28}/>
</BlogPostPage>