<script lang="ts">
    import BlogPostPage from "$lib/components/BlogPostPage.svelte";
    import PageLang from "$lib/components/PageLang.svelte";
    import { blogPost63 } from "./blog_post";
	import AssetList from "$lib/components/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost63}>
    <p>Po měsíci pečlivého skenování sdílíme další várku dopisů které přišly Janu Ornovi, či jim byly odeslány. V této várce najdete zejména dopisy od různých pirátských distributorů stejně jako několik seznamů her, které různí piráti nabízeli. Jako vždy najdete skeny písemnictví níže.
    <p>Pokud doma máte náhodou podobnou sbírku - ať už papírové nebo již digitální komunikace - o kterou byste byli ochotni se podělit tak nám dejte určitě vědět na mail <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.
    <p><b>DOPISY MOHOU BÝT DLE DOMLUVY JEN ULOŽENY DO ARCHIVU A JEJICH SKENY NEMUSÍ BÝT ZVEŘEJNĚNY</b>
    <AssetList assetTagId={38}/>
</BlogPostPage>