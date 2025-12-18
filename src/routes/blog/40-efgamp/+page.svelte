<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost40 } from "./blog_post";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost40}>
    <Loc>
        {#snippet cs()}
            <p>Oficiálně oznamujeme, že jsme se stali členy European Federation of Game Archives, Museums and Preservation Projects (EFGAMP), který reprezentuje a propojuje více než 20 evropských institucí a organizací, jež se zaměřují na záchranu evropské herní kultury. Je nám ctí, že touto cestou můžeme sdílet s i přebýrat od jiných institucí know-how, podílet se na celoevropské snaze profesionalizovat herní prezervaci a také v rámci zbytku Evropy reprezentovat unikátní československou herní historii.</p>
            <p>Oznámení našeho členství také naleznete na stránkách <a href="https://efgamp.eu/2025/02/18/ceskoslovensky-herni-archiv-new-member-of-efgamp/">EFGAMPu</a>.</p>
            <p><img src="/photos/efgamp.jpg" alt="Spolupráce s EFGAMPem"></p>
        {/snippet}
        {#snippet en()}
            <p>We officially announce that we have become a member of the European Federation of Video Game Archives, Museums and Preservation Projects (EFGAMP), which represents and connects more than 20 European institutions and organizations focused on preserving European gaming culture. We are honored to be able to share and learn know-how from other institutions through this membership, contribute to the pan-European effort to professionalize game preservation, and also represent the unique Czechoslovak gaming history within the rest of Europe.</p>
            <p>You can also find the announcement of our membership on the <a href="https://efgamp.eu/2025/02/18/ceskoslovensky-herni-archiv-new-member-of-efgamp/">EFGAMP website</a>.</p>
            <p><img src="/photos/efgamp.jpg" alt="Collaboration with EFGAMP"></p>
        {/snippet}
    </Loc>
</BlogPostPage>