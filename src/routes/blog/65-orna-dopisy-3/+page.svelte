<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost65 } from "./blog_post";
	import AssetList from "$src/lib/components/asset/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost65}>
    <p>Po měsíci usilovného skenování je naše práce u konce - všechny dopisy od Jana Orny jsou zdigitalizovány. V poslední části najdete další seznamy her a nabídkových listů, dopisy od řady tuzemských pirátů a dokonce dopisovou komunikaci obohacenou i o fotografie mezi Janem Ornou a jeho kamarádem, s kterým si začal psát nazákladě inzerátu v časopisu Excalibur. Jako vždy najdete skeny písemnictví níže.
    <p>Pokud doma máte náhodou podobnou sbírku - ať už papírové nebo již digitální komunikace - o kterou byste byli ochotni se podělit, tak nám dejte určitě vědět na mail <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.
    <p><b>DOPISY MOHOU BÝT DLE DOMLUVY JEN ULOŽENY DO ARCHIVU A JEJICH SKENY NEMUSÍ BÝT ZVEŘEJNĚNY</b>
    <AssetList assetTagId={39}/>
</BlogPostPage>