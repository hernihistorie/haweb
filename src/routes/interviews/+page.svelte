<script lang="ts">
    import type { InterviewData } from "$src/types";
    import Box from "$lib/Box.svelte";
    // import { data as bregant_data } from './michal-bregant/interview';
    import { data as kopecky_data } from './lubor-kopecky/interview';
    import { data as hrda_data } from './stanislav-hrda/interview';
    import { data as havelka_data } from './josef-havelka/interview';
    import { data as robinett_data } from './warren-robinett/interview';
    import { data as vodak_data } from './zdenek-vodak/interview';
    import { data as bezdek_data } from './vladimir-bezdek/interview';
    import { data as hurnikova_data } from './kamila-hurnikova/interview';
    import InterviewBox from "$src/lib/InterviewBox.svelte";
	import Meta from "$src/lib/Meta.svelte";


    let interviews: InterviewData[] = [vodak_data, kopecky_data, hrda_data, robinett_data, havelka_data, bezdek_data, hurnikova_data];
</script>

<Meta title="Rozhovory" />

<div class="thin">
    <h2>Rozhovory</h2>
    <p>
        Sbírka rozhovorů je primárně složená z interview užívající metodu orální historie s představiteli české a slovenské herní kultury. Tyto rozhovory se zaměřují především na široké životopisné vyprávění, během kterého je snaha dát narátorstvu co nejvíce prostoru pro jejich autentický projev. To znamená, že je jejich projev jen minimálně přerušován a veden samotným tazatelem. Tato svědectví rozšiřují poznání o tuzemské videoherní scéně způsobem, který nemohou jiné historické prameny nabídnout. Tato sbírka také obsahuje rozhovory se zahraničními osobnostmi videoherní kultury, více strukturované rozhovory a záznamy přednášek, konferencí, debat a dalších akcí.
    </p>
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}
</div>