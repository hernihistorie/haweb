<!-- @migration-task Error while migrating Svelte code: `<p>` is invalid inside `<p>` -->
<script>
    import BlogPost from "$lib/BlogPost.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
</script>

<PageLang cs />

<BlogPost
    author_name="Herní historie"
    date="19. července 2024"
    title="PlayStation2 Oficiální magazín oskenován a doplněn do Databáze časopisů"
>

    <p>Minulý týden jsme doplnili do naší databáze časopisů všechna čísla "PlayStation2 OFICIÁLNÍ MAGAZÍN" a jeho skeny jsme zároveň nahráli na Internet archive, kde si je můžete prohlédnout:
    <ul>
        <li><p><a href="https://archive.org/details/ops2-cz">Skeny časopisů</a>
        </p></li>
        <li><p><a href="https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/9">Databáze časopisů</a>
        </p></li>
    </ul>
 <p>Tento magazín vycházel mezi lety 2002 a 2007 a celkem vyšlo 70 čísel. Magazín se věnoval (jak název napovídá) zejména hrám na PS2, nicméně postupem času dával čím dál více prostoru i softwaru na PSP a PS3.
</BlogPost>