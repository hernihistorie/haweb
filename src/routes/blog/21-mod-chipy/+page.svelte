<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost21 } from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost21}>

    <Loc>
        {#snippet cs()}
            <p>Dějiny herního média nejsou jen dějinami velkých společností, AAA her a oficiálně distribuovaných titulů - dějiny videoher jsou i dějinami pirátění, ilegálního šíření ale i modování herních konzolí. Takové modchipy umožňovali hráčstvu (které si jej pečlivě napájelo do své konzole), nejen hrát oficiální hry nepříliš oficiální cestou, ale také jim otevřeli možnost pro danou platformu vytvářet hry nové. Proto jsme moc rádi, že máme několik těchto chipů různých tvarů a velikostí v naší sbírce.</p>

            <p><small>(Foto od: Ruda Suchý)</small></p>

            <p><img src="/photos/modchipy_ps.jpg" alt="Modchipy k PS1 a PS2"></p>
        {/snippet}
        {#snippet en()}
            <p>The history of the game medium is not only the history of big companies, AAA games, and officially distributed titles - the history of video games also includes piracy, illegal distribution, and console modding too. Such modchips allowed gamers (who carefully soldered them into their consoles) not only to play official games through unofficial means but also opened up the possibility of creating new games for the given platform. Therefore, we are very pleased to have several of these chips of various shapes and sizes in our collection.</p>

            <p><small>(Photo by: Ruda Suchý)</small></p>

            <p><img src="/photos/modchipy_ps.jpg" alt="Modchips for PS1 and PS2"></p>
        {/snippet}
    </Loc>

</BlogPostPage>