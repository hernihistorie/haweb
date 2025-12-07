<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import { blogPost59 } from "./blog_post";
	import AssetList from "$src/lib/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost59}>
    <p>Nedávno se nám dostaly do rukou dvě kazety s výukovými hrami na ZX Spectrum Orbis Pictus 1 a Orbis Pictus 2. Bohužel obě kazety byly poškozené a i přes značnou snahu data opravit se nám všechny programy na kazetách nepovedlo zcela sprovoznit. Proto moc děkujeme Danielovi Szarázovi že nám poslal kopie svých kazet z kterých jsme následně celý program zkompletovali. Dump obou kazet a skeny přebalů naleznete již brzy na <a href="https://cs.speccy.cz/">cs.speccy.cz</a> a v našem Inventáři.
    <AssetList assetTagId={37}/>
</BlogPostPage>