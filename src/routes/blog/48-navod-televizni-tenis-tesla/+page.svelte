<script lang="ts">
    import BlogPostPage from "$lib/components/BlogPostPage.svelte";
    import PageLang from "$lib/components/PageLang.svelte";
    import { blogPost48 } from "./blog_post";
	import AssetList from "$lib/components/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost48}>
    <p>Pong byl na počátcích digitálních her defacto synonymem pro videohru - mnoho západních barů a restaurací si pořídilo do svých prostor arkádu a mnozí si pořizovali televizní tenisy do svých domácností. Domácí Pongy se ale nevyráběly jen na Západě, ale i u nás za železnou oponou a to třeba v závodech Tesla Piešťany. Právě tyto televizní tenisy byly prodávány i společně s návody, který jsme získali, oskenovali a zveřejnili na v našem inventáři:
    <AssetList assetTagId={31}/>
</BlogPostPage>