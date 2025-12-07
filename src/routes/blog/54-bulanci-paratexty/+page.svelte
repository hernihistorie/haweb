<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
	import AssetList from "$src/lib/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage
    author_name="Herní historie"
    date="1. srpna 2025"
    title="Projekt Bulánci: Data o hráčské činnosti od vývojářů Bulánků"
>
    <p>Nedávno jsme dostali od jednoho z tvůrců Bulánků flashku s hromadou dat k této kultovní hře. Na flashce jsou primárně data k aktivitám kolem hry jako statistiky návštěvnosti oficiálního webu, fanouškovské výtvory jako demo fanouškovské mapy, nebo materiály jako zprávy a data pro potenciální sponzory a mnoho dalšího. Podrobný seznam obsahu této flashky a jeho stažitelnou kopii naleznete v našem inventáři.
    <p>Zároveň bychom chtěli připomenout, že budeme moc rádi za vyplnění <a href="https://forms.office.com/e/eihy4J3A6f">dotazníku mapující fanouškovoé aktivity kolem této hry</a>.
    <AssetList assetTagId={32}/>
</BlogPostPage>