<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
    import { localizeHref } from "$src/lib/paraglide/runtime";
</script>

<PageLang cs en />

<section>
    <Loc>
        {#snippet cs()}
            <p>Po letní pauze přicházíme s dalším skenem českého herního magazínu, tentokrát časopisu Doupě. Doupě vzniklo v létě 1999 jako internetový herní magazín vydavatelství Computer Press. Od roku 2005 na něj navázalo tištěné Doupě, měsíčník vycházející jedenáctkrát ročně. Poslední číslo 31–32 vyšlo v červenci 2007; celkem za dva a půl roku vyšlo 29 čísel.</p>
            <p>Oskenované časopisy naleznete na <a href="https://archive.org/details/doupe-magazine/">Internet Archive</a></p>
            <p>A časopis naleznete i v naší <a href={localizeHref("/magazines/catalog/doupe/")}>databázi časopisů</a>.</p>
        {/snippet}
        {#snippet en()}
            <p>After a summer break, we're bringing you another scan of a Czech game magazine, this time it's Doupě. Doupě began in the summer of 1999 as an online game magazine published by Computer Press. Starting from 2005, it evolved into a monthly print publication coming out eleven times a year. The last issue, 31–32, came out in July 2007; over the two and a half years, 29 issues were published in total.</p>
            <p>You can find the scanned magazines at the <a href="https://archive.org/details/doupe-magazine/">Internet Archive</a>.</p>
            <p>And you can also find the magazine in our <a href={localizeHref("/magazines/catalog/doupe/")}>magazine database</a>.</p>
        {/snippet}
    </Loc>

    <Figure src="/photos/blog-posts/oskenovali-a-zverejnili-jsme-casopis-doupe/oskenovali-a-zverejnili-jsme-casopis-doupe_1.jpg" />
    <Figure src="/photos/blog-posts/oskenovali-a-zverejnili-jsme-casopis-doupe/oskenovali-a-zverejnili-jsme-casopis-doupe_2.jpg" />
    <Figure src="/photos/blog-posts/oskenovali-a-zverejnili-jsme-casopis-doupe/oskenovali-a-zverejnili-jsme-casopis-doupe_3.jpg" />
    <Figure src="/photos/blog-posts/oskenovali-a-zverejnili-jsme-casopis-doupe/oskenovali-a-zverejnili-jsme-casopis-doupe_4.jpg" />
</section>
