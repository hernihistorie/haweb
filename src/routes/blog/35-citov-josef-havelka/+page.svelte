<script lang="ts">
    import BlogPostPage from "$src/lib/BlogPostPage.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { InterviewData } from "$src/types";
    import { data as havelka_data } from '$src/routes/interviews/josef-havelka/interview';
    import InterviewBox from "$src/lib/InterviewBox.svelte";

    let interviews: InterviewData[] = [havelka_data];
</script>

<PageLang cs />

<BlogPostPage
    author_name="Herní historie"
    date="10. ledna 2025"
    title="PROJEKT CÍTOV - Rozhovor s Josefem Havelkou, zakladatelem klubu"
>

    <p>V rozhovoru s Josef Havelka, zakladatel cítovského Atari klubu, povídá o tom, jak byl klub založen, jak fungoval, kdy a jak skončil a jaké další aktivity kolem něj probíhaly.
    <p>Tento rozhovor jsme o týden dříve zveřejnili na našem <a href="https://herohero.co/hernihistorie">HeroHero</a>.
    <p>Mimojiné bychom chtěli moc poděkovat <a href="https://www.heroclan.cz/">HERO CLANU</a> za spojení s dobrovolnou přepisovatelkou pro tento rozhovor.
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
</BlogPostPage>