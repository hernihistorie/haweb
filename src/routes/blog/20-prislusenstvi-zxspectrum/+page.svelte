<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost}>
    <Loc>
        {#snippet cs()}
            <p>Velmi často se naše sbírka rozšiřuje o věci ke straým mikropočítačům jako je ZX Spectrum  nebo 8-bitové Atari. Typicky jde o kazety s programy nicméně občas se k nám dostanou i velmi roztomilé, po domácku dělané příslušenství, jako je např. ovladač na obrázku. Ty byly svého času vyráběné ze všeho možného - ze starých zásuvek, tlačítek z telefonů, páček od sprch, krabiček od mýdel apod.. Kdyby náhodou někdo měl podobné dobové příslušenství a byl ochoten ho darovat někomu kdo se o něj postará a využije, tak budeme moc rádi, když nás kontaktujete!</p>

            <p><small>(Foto od: Ruda Suchý)</small></p>

            <p><img src="/photos/prislusenstvi_zxspectrum.jpg" alt="Příslušenství k ZX Spectru"></p>
        {/snippet}
        {#snippet en()}
            <p>Our collection very often expands with items for old microcomputers such as the ZX Spectrum or 8-bit Atari platforms. Typically, these are cassettes with programs, but occasionally we also acquire very cute, homemade accessories, like the controller in the picture. These were made at the time from all sorts of materials - old sockets, buttons from phones, shower handles, soap boxes, etc. If anyone happens to have similar period accessories and is willing to donate them to someplace who will take care of and use them, we would be very grateful if you contact us!</p>

            <p><small>(Photo by: Ruda Suchý)</small></p>

            <p><img src="/photos/prislusenstvi_zxspectrum.jpg" alt="Accessories for ZX Spectrum"></p>
        {/snippet}
    </Loc>

</BlogPostPage>