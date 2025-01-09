<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import type { InterviewData } from "$src/types";
    import { data as vodak_data } from '$src/routes/interviews/martin-kadlcik/interview';
    import InterviewBox from "$src/lib/InterviewBox.svelte";

    let interviews: InterviewData[] = [vodak_data];
</script>

<BlogPost
    author_name="Herní historie"
    date="27. prosince 2024"
    title="Rozhovor s Martinem Kadlčíkem, autorem hry das ADLERNEST"
>

    <p>Na letošním ByteFestu jsme zdigitalizovali hru das ADLERNEST od Martina Kadlčíka, který nám zároveň odpověděl i na několik otázek k tomu, jak hra vznikala, jak se k její tvorbě, hrám a počítačům vůbec dostal a co dělá v současnosti. Rozhovor naleznete zde:
    <p>Tento rozhovor jsme o týden dříve zveřejnili na našem <a href="https://herohero.co/hernihistorie">HeroHero</a>.
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
</BlogPost>