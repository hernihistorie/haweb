<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
	import AssetList from "$src/lib/AssetList.svelte";
</script>

<PageLang cs />

<BlogPost
    author_name="Herní historie"
    date="19. srpna 2025"
    title="Oskenovali jsme návod na crackování her"
>
    <p>Všichno kdo hráli v 80. letech hry to znali - dostali jste od kamaráda na kazetě nějakou hru ze západu, která byla úplně nesmyslně těžká. Kopie hry kterou jste ale dostali nebyla jen tak ledajaká kopie, ale byla někým cracklá (často nějakým "Fuxoftem") abyste mohli hru dohrát třeba s nekonečnem životů.
    <p>Když jsme od Jana Orny dostali jeho dopisovou komunikaci tak mezi ní byl i návod na to, jak vkládat POKE do her na ZX Spectrum - technika, kterou si hráč mohl nacheatovat nekonečně životů do téměř jakékoliv hry. Sken tohoto návodu naleznete v našem Inventáři.
    <AssetList assetTagId={36}/>
</BlogPost>