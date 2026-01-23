<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost}>
    <p>Kluci z Retro Hráče si nás, Vojtěcha Straku a Martina Štochla, odchytili na letošním Game Accessu a vyptali se jak se nám daří s RetroHernou i zbytkem projektů. Poprvé jsme se lépe poznali už před mnoha lety na námi spoluorganizovaném ReTripu a od té doby na sebe čas od času narazíme. Dan je skvělý expert na konzolové retro tituly a vrací se teď ke starší sérii Retro Pokec a nám je ctí být součástí nového dílu, kde shrneme nedávnou historii našeho projektu i jaké hry bychom doporučili. Je skvělé, že zájem o historii her je u nás vidět a dokazuje to i existence projektů jako právě Retro Hráč!
    <p>Rozhovor najdete <a href="https://www.youtube.com/watch?v=O6DZSGkZ5Ck">ZDE</a>.
    <p><img src="/photos/blog-posts/rozhovor-retro-hrac.jpg">
    <p>(Obrázek je screenshot z videa)
</BlogPostPage>