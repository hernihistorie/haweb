<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import blogPost from "./blog_post";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost}>
    <Loc>
        {#snippet cs()}
            <p>Z rané éry herního průmyslu asi většina lidí zná zejména Atari VCS, nicméně VCS nebylo jedinou konzolí, která se na americkém trhu tehdy prodávala. Další bylo třeba ColecoVision které se nám po mnoha výjezdech rozbilo. Nakonec ho opravil Lukáš Nevařil takže nyní se na něj můžete těšit na dalších výjezdech!</p>
            <p>(Foto od: Rudolf Jan Suchý)</p>
        {/snippet}
        {#snippet en()}
            <p>From the early era of the game industry, most people probably know mainly about the Atari VCS, but the VCS was not the only console sold on the American market at that time. Another was the ColecoVision, and ours broke down after many exhibitions. Now, it was repaired by Lukáš Nevařil, so you can now look forward to it at future outings!</p>
            <p>(Photo by: Rudolf Jan Suchý)</p>
        {/snippet}
    </Loc>
    <p><img src="/photos/blog-posts/coleco-vision_1.jpg" alt="ColecoVision"></p>
    <p><img src="/photos/blog-posts/coleco-vision_2.jpg" alt="ColecoVision"></p>
    <p><img src="/photos/blog-posts/coleco-vision_3.jpg" alt="ColecoVision"></p>
</BlogPostPage>