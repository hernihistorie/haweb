<script lang="ts">
	import Meta from "$lib/Meta.svelte";
    import type { InterviewData } from "$src/types";
    import InterviewBox from "$lib/InterviewBox.svelte";
    import { data as vodak_data } from '$src/routes/interviews/zdenek-vodak/interview';
    import { data as bezdek_data } from '$src/routes/interviews/vladimir-bezdek/interview';
	import AssetList from "$src/lib/AssetList.svelte";

    let interviews: InterviewData[] = [vodak_data, bezdek_data];
</script>

<Meta title='Fond Františka "Čuňase" Stárka' />

<article class="thin">
    <h2>Fond Františka "Čuňase" Stárka</h2>
    <div>
        <p><strong>Název projektu</strong>: František "Čuňas" Stárek
        <p><strong>Jména zpracovatelů</strong>: Rudolf Jan Suchý
        <p><strong>Rok dokončení projektu</strong>: 2025

        <p>V případě otázek či nejasností se nám ozvěte na <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>
        <hr>
    </div>
    <p>
        TODO
    </p>

    <!--<h3 id="Navody">Návody</h3>-->

    <!-- <h3>Články</h3>
    <p><em>Sem přijdou případné články.</em> -->
    
    <!--<h3>Rozhovory</h3>
    {#each interviews as data}
        <InterviewBox {data} />
    {/each}-->
    
    <h3 id="Predmety">Předměty</h3>
    <AssetList assetTagId={22} />

</article>
