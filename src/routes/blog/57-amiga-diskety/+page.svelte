<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
	import AssetList from "$src/lib/AssetList.svelte";
</script>

<PageLang cs />

<BlogPost
    author_name="Herní historie"
    date="15. srpna 2025"
    title="Zazálohovali jsme diskety s programy pro počítač Amiga"
>
    <p>Kromě her se u nás vyvíjel i užitkový software. U mnoha programů postačovaly překlady nebo dokonce jen návody v češtině, ale občas vznikl úplně nový kousek. Několik pro Amigu jsme získali a zdigitalizovali. Velkým tahákem byla podpora češtiny v operačním systému, najdete tu tak překlad pro Workbench. Stejně tak byly populární výukové programy. Pokud neumíte psát všemi deseti, tak teď máte příležitost to dohnat. A pak jsou tu slovníky od známého vydavatele M.K.C.S., snad jednou do sbírky přidáme i jejich herní tvorbu.
    <p>Dumpy těchto disket naleznate zde:
    <AssetList assetTagId={34}/>
</BlogPost>