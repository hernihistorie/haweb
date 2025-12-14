<script lang="ts">
    import BlogPostPage from "$lib/components/BlogPostPage.svelte";
    import PageLang from "$lib/components/PageLang.svelte";
    import { blogPost34 } from "./blog_post";
    import type { InterviewData } from "$src/types";
    import { data as vodak_data } from '$src/routes/interviews/martin-kadlcik/interview';
    import InterviewBox from "$lib/components/InterviewBox.svelte";

    let interviews: InterviewData[] = [vodak_data];
</script>

<PageLang cs />

<BlogPostPage post={blogPost34}>

    <p>Na letošním ByteFestu jsme zdigitalizovali hru das ADLERNEST od Martina Kadlčíka, který nám zároveň odpověděl i na několik otázek k tomu, jak hra vznikala, jak se k její tvorbě, hrám a počítačům vůbec dostal a co dělá v současnosti. Rozhovor naleznete zde:
    <p>Tento rozhovor jsme o týden dříve zveřejnili na našem <a href="https://herohero.co/hernihistorie">HeroHero</a>.
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
</BlogPostPage>