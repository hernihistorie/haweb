<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { InterviewData } from "$src/types";
    import { data as kopecky_data } from '$src/routes/interviews/lubor-kopecky/interview';
    import InterviewBox from "$src/lib/InterviewBox.svelte";

    let interviews: InterviewData[] = [kopecky_data];
</script>

<PageLang cs />

<BlogPost
    author_name="Herní historie"
    date="4. února 2025"
    title="Doplňkové otázky k rozhovoru s Luborem Kopeckým, autorem prvních Bulánků"
>

    <p>Když děláte rozhovory s pamětníky, tak se Vám jednou za čas stane, že se chcete zpětně na něco doptat. Taková příležitost se nám nedávno naskytla v případě Lubora Kopeckého, s kterým jsme dělali rozhovor před necelýma dvěma lety a kterého jsme se doptávali zejména na vzpomínky ohledně prvních Bulánků - jak byli propagovaný, jak komunikovali s komunitou a jakým způsobem ji podporovali a jaký (ne)měla hra úspěch v zahraničí. Všechny dodatečné otázky jsou přidané do původního rozhovoru a označené tak, aby bylo poznat že vnikly až později - aby byli všechny informace na jednom místě, ale zároveň aby byla zachovaná transparentnost.
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
</BlogPost>