<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import type { InterviewData } from "$src/types";
    import { data as havelka_data } from '$src/routes/interviews/josef-havelka/interview';
    import InterviewBox from "$src/lib/components/interviews/InterviewBox.svelte";

    let interviews: InterviewData[] = [havelka_data];
</script>

<PageLang cs />

<section>

    <p>V rozhovoru s Josef Havelka, zakladatel cítovského Atari klubu, povídá o tom, jak byl klub založen, jak fungoval, kdy a jak skončil a jaké další aktivity kolem něj probíhaly.
    <p>Tento rozhovor jsme o týden dříve zveřejnili na našem <a href="https://herohero.co/hernihistorie">HeroHero</a>.
    <p>Mimojiné bychom chtěli moc poděkovat <a href="https://www.heroclan.cz/">HERO CLANU</a> za spojení s dobrovolnou přepisovatelkou pro tento rozhovor.
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
</section>