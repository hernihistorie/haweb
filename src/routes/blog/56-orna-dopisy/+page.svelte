<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost56 } from "./blog_post";
	import AssetList from "$src/lib/components/asset/AssetList.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<PageLang cs />

<BlogPostPage post={blogPost56}>
    <p>Velmi často zdůrazňujeme, že herní historie nejsou jen hry samotné - je to hardware na kterém tyto hry běží, jsou to recenze a časopisy o hrách, jsou to vzpomínky vývojářů i hráčů, ale je to i komunikace ať už mezi vývojáři, tak mezi hráči. Proto jsme byli nadšení, když jsme nedávno od Honzi Orny z Arcade Her dostali (společně s <a href={localizeHref("/blog/47-ceske-arkady/")}>československou arkádou</a>) krabici s jeho dopisovou komunikací. Mezi těmito dopisy jsou dopisy od jeho přítele na dopisování, s kterým si psal o hrách na Amigu, dopisy se seznamy her od různých pirátských distributorů nebo takový poklad, jako je <b>předžalobní výzva od ULTRASOFTU</b> ve věci nelegálního šíření kradeného softwaru. První várku oskenovaných dopisů naleznete v našem inventáři a nebo v tomto postu níže.
    <p>Pokud doma máte náhodou podobnou sbírku - ať už dopisové nebo již digitální komunikace - o kterou byste byli ochotni se podělit tak nám dejte určitě vědět!
    <p><b>DOPISY MOHOU BÝT DLE DOMLUVY JEN ULOŽENY DO ARCHIVU A JEJICH SKENY NEMUSÍ BÝT ZVEŘEJNĚNY</b>
    <AssetList assetTagId={33}/>
</BlogPostPage>