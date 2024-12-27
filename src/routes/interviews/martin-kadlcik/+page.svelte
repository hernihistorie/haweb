<script lang="ts">
    /* https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit */
	import Interview from "$lib/Interview.svelte";
	import Answer from "$lib/interviews/Answer.svelte"
	import Question from "$lib/interviews/Question.svelte";
	import Chapter from "$lib/interviews/Chapter.svelte";

    import { data, MK } from "./interview";

    let A = Answer;
    let Q = Question;
</script>

<style>
    .column {
        float: left;
        width: 48%;
        padding-right: 8px;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 17px;
        font-style: italic;
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    } 
</style>

<Interview {data}>
    {#snippet content()}
            <div style="padding-bottom: 20px;">
                <img src="/photos/martin-kadlcik/UMBK.jpg" alt="Basicový kód" style="width:100%">
                <figcaption style="font-size: 17px;"><i>Skica loga "společnosti" Martina Kadlčíka</i></figcaption>
            </div>
            <Q>Jaké je Vaše rodinné zázemí? Kam jste chodil do školy? Co jste dělal jako mladý ve svém volném čase?</Q>
            <A speaker={MK}>Pocházím z obyčejné rodiny tehdejšího socialismu. Bydleli jsme v Uherském Brodě, malebném městečku na hranici Bílých Karpat nedaleko Slovenska, kde ostatně žiji dodnes. Vyrůstali jsme s bratrem v paneláku na sídlišti. Rodiče, jenž měli vystudovanou střední školu, pracovali na technických pozicích v místních strojírenských firmách. Díky tomu jsem se vlastně postupně dostal k věcem, o kterých je řeč níže. Po základní škole jsem chodil na zdejší gymnázium a poté jsem nějakou dobu studovat na VUT v Brně. Nicméně díky revoluci jsem studia nakonec nedokončil, jelikož padla totalita, svoboda byla nekonečná a já jsem neměl na školu čas. Zároveň jsem zjistil, že se dá živit i bez ní. Do školy jsem později chodil co nejdéle hlavně abych se vyhnul vojně, což se mi nakonec tak úplně nepodařilo. Sice jsem se paradoxně ve volném čase věnoval vojenské historii – byl jsem jednu dobu v devadesátkách i členem reenact skupin, dokonce jsme s bráchou byli u jejich počátků – jen jsem nebyl ve fyzické kondici na to, abych se cítil býti pravým vojákem. To i navzdory tomu, že jsem chtěl být od mala policistou, k čemuž nakonec nedošlo právě díky omezením mého zdravotního stavu. Také jsem rád kreslil a stavěl modely letadel. Tohle všechno byly asi předpoklady k mému dalšímu směrování.</A>
            <Q>Jak jste se dostal k prvnímu počítači? Co to bylo za počítač?</Q>
            <A speaker={MK}>Počítač jsem poprvé viděl u známého mého otce, který vlastnil ,,gumáka” (tzn. ZX Spectrum). První počítač nám s bratrem pak koupili samozřejmě rodiče, za což jsme jim do dnešních dní velmi vděčný. Bylo to ZX Spectrum+, tehdy prodávané pod značkou Delta. Myslím, že se to vyrábělo v Maďarsku, ale znalci budou jistě vědět lépe. Nicméně po pořízení prvního počítače se mnou byl konec. Byl jsem ztracen. Poté následovaly stroje jako Spectrum +2, Amiga 500, Amiga 1200 no a pak už nějaká PCčka na vysoké škole.</A>
            <Q>K čemu všemu jste tento počítač používal? Hrál jste na svém prvním počítači videohry? Jaké? Jak jste se k nim dostával?</Q>
            <A speaker={MK}>Počítač jsem používal, jak jinak, především k hraní her. Ty jsme si vyměňovali mezi známými a kamarády. Her začalo postupně přibývat a všechny jsme je ukládali na kazetách. Originální kopie byly v té době samozřejmě neznámým pojmem. Stále se ještě bavíme o 80. letech a hlubokém socialismu. Tohle pirátské kopírování her pokračovalo pak dále i v devadesátkách, kde se zase kopírovaly na disketách atd., ale to si asi nebudeme povídat – každý, kdo tu dobu zažil, to ví.</A>
            <Q>Znal jste někoho jiného kdo měl v té době počítač? Chodil jste do počítačového klubu? Pokud ano, do jakého?</Q>
            <A speaker={MK}>Jistě, byli jsme pár kamarádů, kteří se znali přes počítače nebo rodiče. Měli jsme i svou vlastní „společnost“, B.A.G. Consultants, kde jsme byli (myslím) 4 hlavní společníci. Také ve škole začínaly první počítačové kroužky, které jsem v té době navštěvoval. Tam jsme pro změnu na počítačích IQ 151 programovali třeba v <em>Karlovi</em> a jiné nesmysly, což bylo velmi přínosné pro budoucí směrování. Do oficiálních počítačových klubů jsem nechodil.</A>
            <Q>Dělal jste na svém počítači nějaké programy (ať už videohry nebo jiné)? Pokud ano, tak jaké? Co bylo inspirací pro tyto programy? Šířil jste tyto programy posléze nějak (mezi blízkými přáteli v rámci klubů apod.)?</Q>
            <A speaker={MK}>Mimo hraní mě samozřejmě začalo i zajímat, jak ty programy vlastně fungují, oproti mému bratrovi, kterého programování vlastně nikdy moc neoslovilo. Díky obsáhlému návodu k zakoupenému ZX Spectru jsem se i docela dobře naučil základy v BASICu. Zkoušel jsem programovat, postupně jsem se zdokonaloval. Později mi přišli pod ruku první kreslící programy, takže jsem navázal na své výtvarné začátky v lidové škole umění a začal jsem takto tvořit i na počítači. Protože jsem nikdy moc nepochopil strojový kód tak jsem nakonec stvořil svou první hru v BASICu.
                            <div class="row">
                                <div class="column">
                                    <img src="/photos/martin-kadlcik/basic_code.jpg" alt="Basicový kód" style="width:100%">
                                    <figcaption>Basicový kód</figcaption>
                                </div>
                                <div class="column">
                                    <img src="/photos/martin-kadlcik/pixelart.jpg" alt="Pixelart autora" style="width:100%">
                                    <figcaption>Pixelart Martina Kadlčíka</figcaption>
                                </div>
                            </div>
                            Nic moc z mé tehdejší tvorby se bohužel nedochovalo. Byl jsem proto velmi šťastný, že jsem po dlouhých letech našel mou ztracenou hru <a href="https://inventory.herniarchiv.cz/asset/8411-kazeta-das-adlernest"><em>das Adlernest</em></a> a podařilo se ji zachovat budoucím generacím. Inspirací pro tuto hru byl můj koníček vojenské historie a tehdejší časté návštěvy těžkého opevnění v Orlických horách, kde jsme s přáteli jezdili pomáhat na tvrz Bouda, kde jsme si také občas zaválčili. Na <em>das Adlernest</em> jsme dělali společně s bratrem – konkrétně mi pomáhal s designem lokací a vymýšlením příběhu. Hudbu pak dělal můj spolužák ze základky – napsal mi noty a já je pak přepisoval do pípáku.
                            <div class="row">
                                <div class="column">
                                    <img src="/photos/martin-kadlcik/hudba.jpg" alt="Kód hudby" style="width:100%">
                                    <figcaption>Přepis hudby to basicového kódu</figcaption>
                                </div>
                                <div class="column">
                                    <img src="/photos/martin-kadlcik/raketa.jpg" alt="Kresba rakety" style="width:100%">
                                    <figcaption>Pixelart Martina Kadlčíka</figcaption>
                                </div>
                            </div>
                            Své výtvory jsem skoro nikam nešířil – jen mezi kamarády a kdo ví, kde je všemu konec. Pamatuji si, že jsem např. tu hru zálohoval tak, že jsem si celý její kod vytisknul na jednojehličkové tiskárně na roli papíru, který mi nosila mamka z práce (že to byla činnost na několik týdnů tištění, je asi jasné každému). Netuším, proč jsem si neudělal třeba více kopií nebo proč se jinde tyto programy nedochovaly. Našel jsem i jeden zápisník, kde mám různé návrhy grafiky, nějaké programování, seznamy her na kazetách, návody k hraní her, co jsem si dělal poznámky atd. Na Amigu jsme také stvořili v rámci naší skupiny B.A.G. např. demo <em>Return of the Rats</em>, což se opět nedochovalo. Zajímala nás i hudba, video, filmy, prostě vše co se točilo kolem techniky, počítačů atd. Nějaký hudební demo program jsem měl udělaný i na ZX Spectrum, ale ten z kazety nešel zachránit. Ostatně hru <em>das Adlernest</em> jsem plánoval předělat i na Amigu jako druhé pokračování, vše v grafice stylu Dungeon Mastera – to jsem si mimojiné poprvé a naposledy zahrál na manažera, najmul jsem si programátora a jeli jsme. Tak nějak to, jako skoro vše dalšího v budoucnu, nevyšlo – programátor to nezvládl a já se na to vykašlal a začal jsem dělat zakázky pro jiné. Až jsem skončil jako zaměstnanec ve studiu Illusion Softworks…</A>
            <Q>Co děláte v současnosti?</Q>
            <A speaker={MK}>…kde jsem pár let dělal grafika ve Zlíně na dvou tajných projektech paralelně při vývoji Mafia II. Bohužel ani jeden z našich projektů se nakonec nedostal na světlo světa, což je velká škoda. Pracovali jsme na vojenském simulátoru s volným pohybem na velké mapě. Bylo už skoro vše téměř dokončeno, ale po převzetí Illusionu američany (Take-Two) a po oznámení Operace Flashpoint se projekt zastavil, stejně jako ještě jeden další, na který jsme přešli. Zlínské studio bylo pak uzavřeno – pár lidí odešlo do Brna, někteří do USA apod. Já měl v té době již dvě malé děti – syna a dceru, kteří jsou dnes již v pubertálním věku – a do světa jsem nechtěl, tak jsem zůstal na volné noze. S kolegy jsme se dali dohromady a od té doby děláme externě na různých herních projektech, případně občas i na svých. K tomu ještě jsem se starým kamarádem z dob ZX Spectra a Amigy, současným švagrem, naskočil do provozování e-shopu www.sintech-shop.cz, kde se starám hlavně o technické, marketingové a grafické záležitosti. Jednu dobu jsem zde byl i obchodní ředitel, neboli holka pro všechno.</A>
            
            <p></p>
            <p><em>Věnováno bratrovi Petrovi (1969-2022)</em>
            </p>

    {/snippet}
</Interview>