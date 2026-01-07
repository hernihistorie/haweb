<script lang="ts">
    import type { InterviewData } from "$src/types";
    import Box from "$lib/components/Box.svelte";
    import { data as kadlcik_data } from './martin-kadlcik/interview';
    import { data as kopecky_data } from './lubor-kopecky/interview';
    import { data as hrda_data } from './stanislav-hrda/interview';
    import { data as havelka_data } from './josef-havelka/interview';
    import { data as robinett_data } from './warren-robinett/interview';
    import { data as vodak_data } from './zdenek-vodak/interview';
    import { data as bezdek_data } from './vladimir-bezdek/interview';
    import { data as hurnikova_data } from './kamila-hurnikova/interview';
    import { data as tomas_bartovsky } from './tomas-bartovsky/interview';
    import { data as rudolf_pecinovsky } from './rudolf-pecinovsky/interview';
    import { data as stefan_kratochvil } from './stefan-kratochvil/interview';
    import { data as cunas_data } from './frantisek-cunas-starek/interview';
    import InterviewBox from "$src/lib/components/interviews/InterviewBox.svelte";
	import Meta from "$src/lib/components/layout/Meta.svelte";
	import Loc from "$lib/components/Loc.svelte";


    let interviews_public: InterviewData[] = [cunas_data, havelka_data, kadlcik_data, vodak_data];
    let interviews_unpublished: InterviewData[] = [robinett_data, kopecky_data, hrda_data, hurnikova_data, bezdek_data, tomas_bartovsky, rudolf_pecinovsky, stefan_kratochvil];
</script>

<Meta title={{
    cs: "Rozhovory",
    en: "Interviews"
}} />

<div class="thin">
    <h2>
        <Loc
        cs="Rozhovory"
        en="Interviews"
        />
    </h2>
    <p>
        <Loc
        cs="Sbírka rozhovorů je primárně složená z interview užívající metodu orální historie s představitelstvem české a slovenské herní kultury. Tyto rozhovory se zaměřují především na široké životopisné vyprávění, během kterého je snaha dát narátorstvu co nejvíce prostoru pro jejich autentický projev. To znamená, že je jejich projev jen minimálně přerušován a veden samotným tazatelem. Tato svědectví rozšiřují poznání o tuzemské videoherní scéně způsobem, který nemohou jiné historické prameny nabídnout. Tato sbírka také obsahuje rozhovory se zahraničními osobnostmi videoherní kultury, více strukturované rozhovory a záznamy přednášek, konferencí, debat a dalších akcí."
        en="This collection is mainly composed of oral history interviews with representatives of Czech and Slovak gaming culture. These interviews focus primarily on broad biographical narration, during which the aim is to give as much space as possible to the narrators authentic expression. This means the speech of narrator is not much interrupted or guided by the interviewer. These testimonies expand knowledge about the domestic video game scene in a way that other historical sources cannot offer. Collection also includes interviews with foreign figures from the video game culture, more structured interviews, or recordings of lectures, conferences, debates, and other events. <b>Most interviews are transcribed only into Czech.</b>"
        />
    </p>
    <hr>
    <h3>
        <Loc
        cs="Veřejné rozhovory"
        en="Public interviews"/>
    </h3>
    {#each interviews_public as data}
        <InterviewBox {data} />
    {/each}
    <hr>
    <h3>
        <Loc
        cs="Nepřepsané a neveřejné rozhovory"
        en="Untranscribed and unpublished interviews"/>
        </h3>
    {#each interviews_unpublished as data}
        <InterviewBox {data} />
    {/each}
</div>