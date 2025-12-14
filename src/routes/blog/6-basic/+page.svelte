<script lang="ts">
    import BlogPostPage from "$lib/components/BlogPostPage.svelte";
    import PageLang from "$lib/components/PageLang.svelte";
    import { blogPost6 } from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost6}>

    <p>Kazeta na obrázku níže byla do nedávna plná nezazálohovaných a do češtiny/slovenštiny přeložených programů na kompilaci jazyku BASICu. Všechny programy jsou pro počítač ZX Spectrum/Didaktik/Delta a patří mezi ně: COLT, MCCODER2, TOBOS PF a HiSoft BASIC.
    <p>Dump programu naleznete v našem <a href="https://inventory.herniarchiv.cz/asset/details/?id=4243">Inventáři</a>.

    <p><small>(Foto od: Ruda Suchý)</small>

    <p><img src="/photos/basic_interpreter.jpg" alt="Kazeta Kompilátor BASIC"></p>

</BlogPostPage>