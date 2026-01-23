<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
	import Figure from "$src/lib/components/Figure.svelte";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost}>
    <Loc>
        {#snippet cs()}
            <p>Dostali jsme příležitost podílet se na výstavě <strong>Disk nelze načíst</strong> - výstava od týmu Vašulka Kitchen zaměřující se na historii analogových, (před) digitálních technologií, nosičů a uměleckých experimentů zhruba od začátku 90. let. My jsme do výstavy přispěli našimi počítači se hrou Myst a Samorost.</p>
            <p>Výstava probíhá ve Domě umění města Brna od 10. 12. 2025 do 8. 2. 2026</p>
            <p>Webové stránky výstavy: <a href="https://www.dum-umeni.cz/disk-nelze-nacist/t9978">Disk nelze načíst</a></p>
        {/snippet}
        {#snippet en()}
            <p>We have received the opportunity to participate in the exhibition <strong>Disc Cannot Be Read</strong> (in Czech: <em>Disk nelze načíst</em>) - an exhibition by the Vašulka Kitchen team focusing on the history of analog, (pre) digital technologies, media, and artistic experiments from around the early 1990s. We have contributed our computers with the games Myst and Samorost to the exhibition.</p>
            <p>The exhibition takes place at the House of Arts in Brno from December 10, 2025 to February 8, 2026.</p>
            <p>Web pages of the exhibition: <a href="https://www.dum-umeni.cz/en/disc-cannot-be-read/t9978">Disc Cannot Be Read</a></p>
        {/snippet}
    </Loc>
    <Figure src="/images/blog/80-vystava-disk-nelze-nacist/photo1.jpg" />
    <Figure src="/images/blog/80-vystava-disk-nelze-nacist/photo2.jpg" />
    <Figure src="/images/blog/80-vystava-disk-nelze-nacist/photo3.jpg" />
    <Figure src="/images/blog/80-vystava-disk-nelze-nacist/photo4.jpg" />
</BlogPostPage>