<script lang="ts">
    import BlogPostPage from "$lib/components/BlogPostPage.svelte";
    import PageLang from "$lib/components/PageLang.svelte";
    import { blogPost23 } from "./blog_post";
    import type { InterviewData } from "$src/types";
    import { data as vodak_data } from '$src/routes/interviews/zdenek-vodak/interview';
    import InterviewBox from "$lib/components/InterviewBox.svelte";

    let interviews: InterviewData[] = [vodak_data];
</script>

<PageLang cs />

<BlogPostPage post={blogPost23}>

    <p>Jak jsme minulý pátek slíbili, tak jsme tak i učinili: interview se Zdeňkem Vodákem jak v textové tak zvukové podobě najdete v rámci našich přepsaných <a href="https://herniarchiv.cz/interviews/">Rozhovorů</a>.
    <p>V rozhovoru Zdeněk Vodák nemluví jen o tom, jak se podílel na Videostopu, ale také o tom, jak studoval FEL na ČVUT, kde se poprvé dostal k počítačům a programování, o tom kde sehnal své ZX Spectrum, nebo o tom, jak po revoluci dělal na pořadech jako je „Kdo chce být milionářem?", „AZ-kvíz" nebo „Na lovu."
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
</BlogPostPage>