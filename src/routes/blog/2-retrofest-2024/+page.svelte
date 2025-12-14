<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost2 } from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost2}>

    <p><img src="https://retroherna.org/wiki/lib/exe/fetch.php?media=web2:novinky:rf24_banner.jpg"></p>

    <p>S radostí oznamujeme, že v neděli 28. ledna se odehraje další ročník RetroFest streamu! Ať už jste fanoušci retroher, co rádi navštěvují RetroHernu na veřejných akcích, nebo se zajímáte o herní historii v našich kotlinách a chcete vědět na čem pracujeme, doufáme, že vás nalákáme se stavit na našem nepravidelném streamu. Můžete se těšit na přednášku o Československých televizních tenisech, na pařbu Unreal Tournamentu s publikem, na ohlášení několika novinek v rámci našeho projektu Herní archiv, a na hraní více či méně známých her z našich luhů a hájů!

    <div style="text-align: center; font-size: 30px;">
        <p><a href="https://fb.me/e/65LTVgPcH">Událost na Facebooku</a>
        <p><a href="https://www.twitch.tv/retroherna_org">Twitch stream</a>
        <p><a href="https://retroherna.org/ut99">Návod na připojení se k Unreal Tournament hře</a>
    </div>

    <p><img src="https://retroherna.org/wiki/lib/exe/fetch.php?media=web2:novinky:rf24_program.jpg"></p>

</BlogPostPage>