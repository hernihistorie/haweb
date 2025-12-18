<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost39 } from "./blog_post";
</script>

<PageLang cs en />

<BlogPostPage post={blogPost39}>
    <Loc>
        {#snippet cs()}
            <p>Nedávno se nám do archivu podařilo získat dvě kompletní krabice s operačním systémem OS/2 od IBM. V jedné  z nich je dokonce česká varianta OS/2 Warp 3 - pravděpodobně nejranější lokalizovaná verze, která u nás vyšla. A protože jsme ji nenašli nikde na Internetu, rovnou jsme ji  nasdíleli pro užitek všem. Tak tedy kupředu na Internet Archive ať můžete vyzkoušet ty tucty her, co na tento systém vyšly!</p>
            <p>Dump operačního systému naleznete na <a href="https://archive.org/details/ibm-os-2-warp-3.0-czech">Internet Archivu</a>.</p>
            <p><img src="/photos/os2_warp_3/os2_1.jpg" alt="Krabice OS/2 Warp 3"></p>
        {/snippet}
        {#snippet en()}
            <p>Recently, our archive managed to acquire two complete boxes with the IBM OS/2 operating system. One of them even contains the Czech version of OS/2 Warp 3 - probably the earliest localized version released in our country. And since we couldn't find it anywhere on the Internet, we went ahead and shared it for everyone's benefit. So head over to Internet Archive to try out the dozens of games that were released for this system!</p>
            <p>You can find the dump of the operating system on the <a href="https://archive.org/details/ibm-os-2-warp-3.0-czech">Internet Archive</a>.</p>
            <p><img src="/photos/os2_warp_3/os2_1.jpg" alt="OS/2 Warp 3 box"></p>
        {/snippet}
    </Loc>
    
    <p><img src="/photos/os2_warp_3/os2_3.png" alt="OS/2 Warp 3" width="100%"></p>
    <p><img src="/photos/os2_warp_3/os2_2.jpg" alt="OS/2 Warp 3" width="100%"></p>
</BlogPostPage>