<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost38 } from "./blog_post";
    import type { InterviewData } from "$src/types";
    import { data as kopecky_data } from '$src/routes/interviews/lubor-kopecky/interview';
    import InterviewBox from "$src/lib/components/interviews/InterviewBox.svelte";

    let interviews: InterviewData[] = [kopecky_data];
</script>

<PageLang cs />

<BlogPostPage post={blogPost38}>

    <p>Když děláte rozhovory s pamětníky, tak se Vám jednou za čas stane, že se chcete zpětně na něco doptat. Taková příležitost se nám nedávno naskytla v případě Lubora Kopeckého, s kterým jsme dělali rozhovor před necelýma dvěma lety a kterého jsme se doptávali zejména na vzpomínky ohledně prvních Bulánků - jak byli propagovaný, jak komunikovali s komunitou a jakým způsobem ji podporovali a jaký (ne)měla hra úspěch v zahraničí. Všechny dodatečné otázky jsou přidané do původního rozhovoru a označené tak, aby bylo poznat že vnikly až později - aby byli všechny informace na jednom místě, ale zároveň aby byla zachovaná transparentnost.
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
</BlogPostPage>