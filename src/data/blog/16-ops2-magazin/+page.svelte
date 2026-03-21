<!-- @migration-task Error while migrating Svelte code: `<p>` is invalid inside `<p>` -->
<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
	import { localizeHref } from "$src/lib/paraglide/runtime";
</script>

<PageLang cs />

<section>

    <p>Minulý týden jsme doplnili do naší databáze časopisů všechna čísla "PlayStation2 OFICIÁLNÍ MAGAZÍN" a jeho skeny jsme zároveň nahráli na Internet archive, kde si je můžete prohlédnout:
    <ul>
        <li><p><a href="https://archive.org/details/ops2-cz">Skeny časopisů</a>
        </p></li>
        <li><p><a href={localizeHref("/magazines/catalog/ops2-cz")}>Databáze časopisů</a>
        </p></li>
    </ul>
 <p>Tento magazín vycházel mezi lety 2002 a 2007 a celkem vyšlo 70 čísel. Magazín se věnoval (jak název napovídá) zejména hrám na PS2, nicméně postupem času dával čím dál více prostoru i softwaru na PSP a PS3.
</section>