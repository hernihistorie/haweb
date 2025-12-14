<script lang="ts">
    import BlogPostPage from "$lib/components/BlogPostPage.svelte";
    import PageLang from "$lib/components/PageLang.svelte";
    import { blogPost57 } from "./blog_post";
	import AssetList from "$lib/components/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost57}>
    <p>Kromě her se u nás vyvíjel i užitkový software. U mnoha programů postačovaly překlady nebo dokonce jen návody v češtině, ale občas vznikl úplně nový kousek. Několik pro Amigu jsme získali a zdigitalizovali. Velkým tahákem byla podpora češtiny v operačním systému, najdete tu tak překlad pro Workbench. Stejně tak byly populární výukové programy. Pokud neumíte psát všemi deseti, tak teď máte příležitost to dohnat. A pak jsou tu slovníky od známého vydavatele M.K.C.S., snad jednou do sbírky přidáme i jejich herní tvorbu.
    <p>Dumpy těchto disket naleznate zde:
    <AssetList assetTagId={34}/>
</BlogPostPage>