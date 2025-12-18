<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost61 } from "./blog_post";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost61}>
    <Loc>
        {#snippet cs()}
            <p>Včera a dnes spolupořádáme workshop na půdě FSV věnovaný metodám orální historie. Na něm vystoupilo odbornictvo na Apple II a vývojáře Sierra On-Line Laine Nooney. Workshop vzniknul v rámci projektu <a href="https://costgrade.eu/">Grassroots of Digital Europe</a> na vědecké platformě COST.</p>
            <p>(Foto od: Ladislav Huttl)</p>
        {/snippet}
        {#snippet en()}
            <p>Yesterday and today we are co-organizing a workshop at the Faculty of Social Studies dedicated to oral history methods. The event features Laine Nooney, expert on Apple II and Sierra On-Line developers. The workshop was created within the project <a href="https://costgrade.eu/">Grassroots of Digital Europe</a> on the scientific platform COST.</p>
            <p>(Photos by: Ladislav Huttl)</p>
        {/snippet}
    </Loc>
    <p><img src="/photos/blog-posts/cost_1.jpg"></p>
    <p><img src="/photos/blog-posts/cost_2.jpg"></p>
    <p><img src="/photos/blog-posts/cost_3.jpg"></p>
    <p><img src="/photos/blog-posts/cost_4.jpg"></p>
</BlogPostPage>