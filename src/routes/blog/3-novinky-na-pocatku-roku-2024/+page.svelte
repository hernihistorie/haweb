<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
    import { localizeHref } from '$lib/paraglide/runtime';
</script>

<PageLang cs />

<BlogPostPage post={blogPost}>

    <p>Začátkem tohoto roku jsme vypustili (a na <a href={localizeHref("/blog/2-retrofest-2024")}>streamu</a> oznámili) některé naše projekty, na kterých jsme v rámci našeho spolku a archivu pracovali.

    <p>Prvním takovým projektem bylo zveřejnění našeho <a href="https://inventory.herniarchiv.cz/">inventarizačního systému</a>, jenž slouží k evidenci předmětů které jsou součástí (nejen) naší herně historické sbírky. V současnosti zde vedeme více než 7000 předmětů zahrnující herní konzole a počítače, hry, přepisovatelná média s uživatelskými programy a literaturu (včetně herních časopisů).
        
    <p>Minulý rok jsme také začali s tvorbou metody na digitalizaci počítačových disket a kazet. První (zajímavější) plody z našeho experimentování jsme zároveň zveřejnili i v našem inventarizačním systému, jako např. <a href="https://inventory.herniarchiv.cz/admin/asset/details/?id=6838">tuto uživatelskou kazetu s některými (do nedávna) jinde nezveřejnými hrami na ZX Spectrum</a>.
        
    <p>V rámci digitalizace se samozřejmě neomezujeme jen na paměťová média pro osobní počítače. Dlouho dobu se totiž také zabýváme skenováním a digitalizací různých tiskovin – zejména pak herních časopisů, ale také např. <a href={localizeHref("/gallery/emil-fafek/")}>historických fotografií</a>.
        
    <p>Kromě skenování časopisů jsme také dávali dohromady <a href="https://casopisy.herniarchiv.cz/">jejich databázi</a>.
        
    <p>Posledním projektem, na kterém jsme minulý rok začali dělat, byly historické rozhovory s pamětníky z videoherní a počítačové kultury. První rozhovor, který můžete na stránkách Herního archivu nalézt je <a href={localizeHref("/interviews/lubor-kopecky/")}>rozhovor s Luborem Kopeckým</a> – jedním z tvůrců prvního Poldy nebo prvních Bulánků.
    
    <p>Tyto projekty hodláme v roce 2024 nadále rozvíjet a nemůžeme se dočkat, až vám budeme moci představit více.  Děkujeme za vaši podporu i v tomto roce.

</BlogPostPage>