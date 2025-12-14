<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost58 } from "./blog_post";
	import AssetList from "$src/lib/components/asset/AssetList.svelte";
</script>

<PageLang cs />

<BlogPostPage post={blogPost58}>
    <p>Všichno kdo hráli v 80. letech hry to znali - dostali jste od kamaráda na kazetě nějakou hru ze západu, která byla úplně nesmyslně těžká. Kopie hry kterou jste ale dostali nebyla jen tak ledajaká kopie, ale byla někým cracklá (často nějakým "Fuxoftem") abyste mohli hru dohrát třeba s nekonečnem životů.
    <p>Když jsme od Jana Orny dostali jeho dopisovou komunikaci tak mezi ní byl i návod na to, jak vkládat POKE do her na ZX Spectrum - technika, kterou si hráč mohl nacheatovat nekonečně životů do téměř jakékoliv hry. Sken tohoto návodu naleznete v našem Inventáři.
    <AssetList assetTagId={36}/>
</BlogPostPage>