<script lang="ts">
	import Interview from "$lib/Interview.svelte";
	import Answer from "$lib/interviews/Answer.svelte";
	import Question from "$lib/interviews/Question.svelte";
	import Chapter from "$lib/interviews/Chapter.svelte";

    import { data } from "./interview";

    let A = Answer;
    let Q = Question;
</script>

<Interview data={data}>
    <div slot="content">
        <Chapter title="Úvod">
            <Q speaker="RS">Super. Takže dneska je 31. července 2023, rozhovor probíhá v Dolním Městě ve Smrčensku, je s Luborem Kopeckým na téma v jeho... v jeho činnosti v rámci studia Sleep Team a jiné videoherní činnosti a rozhovor je veden Rudolfem Janem Suchým a já se zeptám na první otázku, ještě než se dostaneme k tvojí videoherní tvorbě, tak mi asi něco pověz předtím vlastně odkud pocházíš, jaké je tvoje rodinný zázemí, co jsi dělal předtím, než jste založili Sleepteam obecně.</Q>
            <A speaker="LK">Já jsem se narodil v Lounech. V říjnu 78. A… mým prvním počítačem byl Didaktik M. No a v podstatě jako od první chvíle, kdy jsem si zahrál první hry, tak jsem věděl, že je chci dělat. Takže to to byl jako docela… docela jednoduchý a jasný. A… pak v roce devadesát tři jsem… jsem šel studovat na obchodní akademii do… do sousedního města do Žatce. No a tam jsem vlastně potkal všechny ostatní členy týmu.</A>
            <Q speaker="RS">A, OK.</Q>
            <A speaker="LK">Tam jsme se dali dohromady. Se mnou v ročníku byl Jarda Wagner, úplně jako totálně naprosto talentovanej designér a výtvarník, Kamila, která byla supr produkční, a je, a o ročník vejš byl Radek Matějka. Naprosto úplně jako geniální programátor. Takže my spolu jsme takhle, jako jsme se dohodli, že budem dělat hry a… no.</A>
            <Q speaker="RS">Jenom můžu se zeptat na celý jméno, Kamily…?</Q>
            <A speaker="LK">Kamila Horníková, Jarda Wagner, a Radek Matějka. A to byl… to byl prostě jakoby základ týmu pro, pro, pro další hry. No a... No, takže to, tam, tam jsme vlastně začali, a pak už dál už jsme pokračovali vlastně po škole, no.</A>
            <Q speaker="RS"> Jo jo. Já se jenom ještě doptám. Když jsi mluvil vo tom Didaktiku M, tak co jste třeba, co, co se k jakým hrám ses jako dostal? Máš třeba nějaký velmi specifický, co tě třeba inspirovaly vlastně v tý tvorbě?</Q>
            <A speaker="LK">No tak na tom Didaktiku jako moc ne, tam... Já jsem jako vždycky měl rád jako strategický hry. Teprve vlastně až na střední škole jsem si pořídil první PCčko, to byla tři osm šestka. A tam jsem teprv začal hrát hry který mě fakt jako pak inspirovaly dál. To byly hlavně právě adventury.</A>
            <Q speaker="RS">Jasně.</Q>
            <A speaker="LK">Takže tak, takový to jako… Klasický, klasický první adventury a... I jakoby z hlediska vývoje ty adventury byly vlastně takový jako, nej… nejjednodušší. Jako nej… nejlíp… nejlíp jako vyvíjitelný. No a tehdy už jsme měli PCčka všichni, potkávali jsme se v počítačovejch učebnách a už jsme prostě jako… úplně jako strašně rychle a s… s… snadno jsme se jsme se takhle dali dohromady. No, takže tak.</A>
            <Q speaker="RS">Jenom kdyby sis třeba vzpomněl na nějaký specifický… hry, který byly na tom, na tom dosu. Nějaký třeba specifický adventury cos jako hrál. A co tě v tý době jako zaujaly a třeba tě inspirovali při tvorbě Poldy.</Q>
            <A speaker="LK">Jo, to je těžký. Tak jako třeba rozhodně jako Goblinds. Simon the sorcerer, Šimon kouzelníkem (smích)zněl českej překlad. A... samozřejmě jako Monkey island. Prostě takovýhle jako fakt jako klasiky, no.</A>
        </Chapter>
        <Chapter title="První hra">
            <Q speaker="RS">Jasan. Jo, tak asi se přesunem teda k tomu, tak jste se potkali s Jardou a Radkem a Kamilou a začali jste teda vyvíjet hru. Asi začni jak, jak to vlastně celý probíhalo.</Q>
            <A speaker="LK">No, tak…</A>
            <Q speaker="RS">Já vim že si mi vo tom několikrát… nebo několikráts vo tom jako vyprávěl a vim že jste měli hromadu jako zajímavých historek.</Q>
            <A speaker="LK">Jo. No, to… to bylo jako hodně divoký. My jsme se ve chvíli, kdy jsme se proto rozhodli, tak jsme chtěli udělat prostě jenom malinkou hříčku. Spíš, spíš vlastně jenom takový jako demo, ale pak se nám to úplně jako vymklo a… A právě jakoby výsledkem, byl Polda. S tim, že… To bylo jakoby strašně… strašně složitý. My jsme se potkávali jenom ve škole a tam samozřejmě jakoby nebyl čas jako společně něco vyvíjet. Takže jsme to... dělali tak, že jsme to vlastně jakoby dělali ve volnym čase, o víkendech, o prázdninách, a… to… probíhalo tak, že… I když jsme si chtěli vyměnit nějaký data, což bylo potřeba, což bylo nutný, jako bez toho by to nešlo. No tak jsme prostě na disketu tři a půlku nahráli data, sedli jsme na kolo a jeli jsme do vedlejšího města třeba jako dvacet kilometrů, abysme tu disketou předali, když jsme si potřebovali zavolat, tak jsme samozřejmě museli jít do telefonní budky, protože nikdo z nás tehdy jako ještě doma neměl jako… ani jako… ani klasickej telefon. Mobilní telefony tedy ještě vůbec nebyly. A... A bylo to teda fakt jako hodně, hodně dobr… jako dobrodružný, no. S tim, že samozřejmě, že pokud jsme něco nehráli na disketu, a cestou se ten záznam nějak porušil, když se ta disketa zmáčkla, no tak jsme měli smůlu. Pak už, pak už jsme jako vozili jako radši dvě diskety, no. (smích) A… No, takže, takže jako to, tak takhle to probíhalo, s tim, že… Tehdy vopravdu jakoby každej jsme měli kartu do telefonní budky, a… A prostě jsme si takhle jakoby zavolali, když bylo něco nutnýho, a jinak jsme se jenom v krátkosti viděli ve škole, kde jsme si prostě řekli jako takový ty důležitý věci, předali jsme si, co šlo, no. A... Já nevim co co co… co říct ještě za, za nějaký jako zajímavý, jako…</A>
            <Q speaker="RS">Jo, jasně. Já se asi spíš zeptám, mám vlastně dvě otázky, začnu asi tím, že vlastně jak vás vůbec napadlo dělat příběh o policajtu Pankrácovi, že to je vlastně velmi specifický téma, že asi jako z těch her, co jsi vyjmenovával, tak tam vidím mírný inspirace minimálně třeba v tónu těch her, ale...</Q>
            <A speaker="LK">No tak…</A>
            <Q speaker="RS">…jak se to vyvinulo z toho dema, do…</Q>
            <A speaker="LK">…ono se to jakoby nabízelo, s tim jakože… Pro adventuru je ideální žánr prostě nějaká detektivka. A v tý samozřejmě musí (smích) musí účinkovat jako policajt. A... Jo... Ono se to vůbec jako nemělo jmenovat Polda. My jsme, my jsme pro to měli… název, nebo takhle. My jsme to vyvíjeli pod pracovním názvem Chaloupka. Protože to je jako... Že, že se to… to… perníkový chaloupce. A… Tehdy jako v devadesátejch letech prostě... Jako policajti byli úplně proslulí tím, že byli... Ne… nechci, aby to znělo jako nekorektně, jo, ale byly jednak jako trochu natvrdlý,…</A>
            <Q speaker="RS">OK. (smích)</Q>
            <A speaker="LK">…a všichni byli totálně zkorumpovaný. Takže to byla prostě jako ideální jako…</A>
            <Q speaker="RS">Devádesádky, no.</Q>
            <A speaker="LK">No jasný, no. Ideální postava pro… pro takovouhle adventuru. </A>
        </Chapter>
    </div>
</Interview>