<script lang="ts">
	import Meta from "$lib/Meta.svelte";
    import type { InterviewData } from "$src/types";
    import InterviewBox from "$lib/InterviewBox.svelte";
    import { data as havelka_data } from '$src/routes/interviews/josef-havelka/interview';
	import AssetList from "$src/lib/AssetList.svelte";

    let interviews: InterviewData[] = [havelka_data];
</script>

<Meta title="Atari klub Cítov" />

<article class="thin">
    <h2>Projekt Atari klub Cítov</h2>
    <div>
        <p><strong>Název projektu</strong>: Atari klub Cítov
        <p><strong>Jména zpracovatelů</strong>: Vojtěch Straka, Rudolf Jan Suchý,  Ladislav Greiner, Tomáš Nestorovic, Kamil Ševeček, Karel Ondráček
        <p><strong>Rok dokončení projektu</strong>: Projekt stále probíhá

        <p>V případě otázek či nejasností se nám ozvěte na info@herniarchiv.cz.
    
    </div>

    <h3>Úvod</h3>
    <p>
        Během 80. let začali na území Československé socialistické republiky vznikat první počítačové kluby, v rámci kterých se měli děti a mladiství seznámit a naučit s užíváním tehdejších osobních počítačů a programováním. Tyto kluby vznikaly zejména pod Svazem pro spolupráci s armádou (Svazarm), nicméně Okresní klub vědeckotechnické činnosti mládeže v Cítově (neboli Atari klub Cítov) vznikl poněkud netradičně při zdejším JZD.
    </p>
    <p><img src="/photos/citov/citov_stara_skola.jpg" alt="Budova cítovského klubu"></p>
    <p>
        Tento klub se svou činností začal v září roku 1986 v budově, které se říkalo cítovská stará škola. U založení klubu stál Josef Havelka, jeho dcera Kateřina, Jan Nikl, Michal Skůrovec a jeho sestra Jana Skůrovcová ad. Klub se svou činností zaměřoval zejména na vzdělávání dětí, nicméně vydával i vlastní zpravodaj, pořádal různé akce jako Atari bály, v rámci jeho aktivit vznikaly vzdělávací hry a programy pro zemědělství nebo při jeho činnosti začala pomalu vznikat cítovská tiskárna. V roce 1988 se v klubu objevovalo 18 různých počítačů, jenž vesměs patřili členům klubu a mezi kterými bylo vše od ZX Spectra přes 8-bitové a 16-bitové Atari až po počítače československé výroby jako bylo PMD-85. Po revoluci a po rozpadu klubu začali někteří členi prodávat vlastní vzdělávací software nebo si začali vydělávat komerčním tiskem.
    </p>
    <p><img src="/photos/citov/citov_kazety.jpg" alt="Původní kazety z cítovského klubu."></p>
    <p>
        V roce 2023 se dostal do sbírky Herního archivu osobní archiv zakladatele spolku Josefa Havelky, jenž obsahoval několik osobních počítačů které se používaly v klubu (případně které používal sám pan Havelka) případně příslušenství k nim, klubová literatura, dokumenty jako je např. docházková kniha, datové nosiče, drobné předměty jako jsou klubové odznáčky ad. V roce 2024 se pak dostali do sbírky Herního archivu diskety a kazety s výukovými programy nebo osobními daty, které pan Havelka původně věnoval do sbírky Ladislavu Greinerovi. Součástí sbírky je také rozhovor s Josefem Havelkou. Zpracování sbírky probíhá od května 2024.
    </p>

    <h3>Rozhovory</h3>
    {#each interviews as data}
        <InterviewBox {data}/>
    {/each}

    <AssetList withHeading=true assetTagId={16} />

    <!-- <h3>Články</h3>
    <p><em>Sem přijdou případné články.</em> -->

</article>