<script>
	import Meta from "$src/lib/components/layout/Meta.svelte";
	import Loc from "$lib/components/Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Meta title={{
    cs: "O nás",
    en: "About Us"
}} />

<article class="thin">
    <h2>
        <Loc
            cs="O nás"
            en="About Us"
        />
    </h2>
    <p>
        <Loc
            cs="Jsme projekt spolku Herní historie, jehož cílem je zachovávat herní kulturu v rámci České a Slovenské republiky. Naší hlavní činností je katalogizace a archivace všech artefaktů spojených s historií her, jako například časopisy, dobová zařízení nebo média týkající se her. Spolupracujeme s řadou mezinárodních organizací a chceme se zasloužit o to, aby u nás existovala oficiální instituce zastřešující lokální stopu v tomto odvětví kultury."
            en="We are a project of the Herní historie association, aimed at preserving gaming culture within the Czech and Slovak Republic. Our main activity is cataloging and archiving all artifacts connected to gaming history, such as magazines, period hardware, or game-related media. We collaborate with numerous international organizations and strive to establish an official institution that would oversee the local footprint in this cultural sector."
        />
    </p>
</article>

<article class="thin">
    <h2>
        <Loc
            cs="Mise a cíle"
            en="Missions and goals"
        />
    </h2>
    <p>
        <Loc
            cs="Interaktivní zábava je pořád velmi mladý obor. Můžeme sledovat, jak se každým dnem prohlubuje naše poznání herní historie a je potřeba, aby začaly vznikat organizované snahy s cílem prezervace této historie. Věříme, že Česká a Slovenská Republika si zaslouží reprezentaci v mezinárodních snahách, na kterých se často podílíme. Toto nadšení nás vedlo ke spuštění projektu, který se bude snažit zachránit co nejvíce z počátků videoherní kultury u nás."
            en="Interactive entertainment is still a very young field. We can observe how our understanding of gaming history deepens every day, and it is necessary to make organized efforts aimed at preserving this history. We believe that the Czech and Slovak Republics deserve representation in the international efforts we often contribute to. This enthusiasm has led us to launch a project that will strive to save as much as possible from the early days of gaming culture in our region."
        />
    </p>

    <p>
        <Loc
            cs="Časem bude potřeba, aby vznikla oficiální instituce zastřešující naší kulturní stopu v rámci herní kultury. Jak bude vypadat je otázkou, ale do té doby se budeme snažit prošlapat jí cestu. Veškeré materiály a informace schraňujeme kvůli tomu, aby byly přístupné dalším snahám v oboru. Náš záběr je velký, krom fyzické i digitální archivace je potřeba mluvit s autory, získávat vývojářské materiály, budovat kontakty s podobnými organizacemi i zajišťovat, aby tato práce byla jednodušší pro nově vznikající hry."
            en="Over time, it will be necessary to establish an official institution to represent our cultural footprint within gaming culture. What it will look like is still a question, but until then, we will strive to pave the way for it. We collect all materials and information to ensure they are accessible for future efforts in the field. Our scope is broad: in addition to physical and digital archiving, it is also necessary to talk to creators, acquire development materials, build connections with similar organizations, and ensure this work becomes easier for newly emerging games."
        />
    </p>

    <p>
        <Loc
            cs="Je jisté, že je to běh na dlouhou trať, ale vidíme v něm smysl. Je vidět, že zájem o hry stále roste a že videohry nabývají na společenské prestiži. Je nám tedy ctí být u tohoto zrodu nového mediálního formátu. Mnoho z nás se hrám věnuje většinu svého života a jsme připraveni věnovat značné usílí tomuto neziskovému projektu. Krom komplexního archivu také zajišťujeme popularizaci historických her a zpřístupňujeme je v autentické podobě v rámci <a href='https://retroherna.org'>RetroHerny</a>."
            en="It is certain that this is a long-term endeavor, but we see its value. It's clear that interest in games continues to grow and that video games are gaining social prestige. We are proud to be at the emergence of this new media format. Many of us have dedicated most of our lives to gaming, and we are ready to put significant effort into this non-profit project. Alongside maintaining a comprehensive archive, we also work to popularize historical games and make them accessible in their authentic form through <a href='https://retroherna.org'>RetroHerna</a>."
        />
    </p>

    <img src="/photos/elektronika.jpg" alt="Fotka časopisů Elektronika">
</article>

<article class="thin">
    <h2>
        <Loc
            cs="Služby a technologie"
            en="Services and technologies"
        />
    </h2>
    <p>
        <Loc
            cs="V rámci naší archivářské činnosti si klademe za cíl uchovávat materiály a data za pomocí těch nejlepších technologií a nejvyšších současných standardů. Klademe důraz na zálohování nejen dat, ale i metadat, jako je zvolená metoda archivace a další okolnosti. Fyzické materiály skenujeme v nejlepší možné kvalitě a bez ztrátové komprese. Analogová a digitální média zálohujeme pomocí specializovaného hardwaru a dokonce se podílíme na testování a vývoji nových řešení. Kde je to na místě přispíváme výsledky naší činnosti do mezinárodních databází jako je <a href='http://redump.org/'>Redump</a> či <a href='https://no-intro.org/'>No-Intro</a>. Všechny původní kopie a fyzické artefakty uchováváme v inventarizovaném archivu v suchu a za stabilizované teploty."
            en="As part of our archival activities, we aim to preserve materials and data using the best technologies and the highest current standards. We place emphasis on backing up not only data but also metadata, such as the chosen archiving method and other contextual details. Physical materials are scanned at the highest possible quality and without lossy compression. Analog and digital media are backed up using specialized hardware, and we even contribute to testing and developing new solutions. Where appropriate, we share the results of our work with international databases such as <a href='http://redump.org/'>Redump</a> and <a href='https://no-intro.org/'>No-Intro</a>. All original copies and physical artifacts are stored in a inventoried archive, kept dry and at a stabilized temperature."
        />
    </p>

    <p>
        <Loc
            cs="Žádné médium není dlouhodobě udržitelné a vhodné na archivaci. Média jako optické mechaniky a pevné disky v průběhu času ztrácejí data; u dedikovaných zálohovacích technologií jako jsou kazety se ztrácí podpora hardwaru, který jej umí číst; a i v případě zachovalých digitálních nosičů může být obnovení dat ze zastaralých formátů složité. Dnes je ten nejvyšší čas data zdigitalizovat a vytvořit nové kopie."
            en="No medium is sustainable or suitable for long-term archiving. Media such as optical drives and hard disks lose data over time; dedicated backup technologies like tapes lose hardware support for reading them; and even with preserved digital carriers, recovering data from outdated formats can be challenging. Today is the perfect time to digitize the data and create new copies."
        />
    </p>
    <p>
        <Loc
            cs={`Ke každému jednotlivému artiklu přistupujeme s největší pečlivostí, a zároveň se běžně podílíme na <a href='${localizeHref('/projects')}'>rozsáhlých archivačních projektech</a>. Rádi pomůžeme právě Vám zachránit data z obskurních médií, či zorganizovat projekt na digitalizaci celého archivu. Neváhejte a <a href='${localizeHref('/contact')}'>kontaktujte nás</a>.`}
            en={`We approach each individual item with the utmost care and are also regularly involved in <a href='${localizeHref('/projects')}'>extensive archival projects</a>. We are happy to help you rescue data from obscure media or organize a project for digitizing an entire archive. Feel free to <a href='${localizeHref('/contact')}'>contact us</a>.`}
        />
    </p>

    <img src="/photos/diskety.jpg" alt="Fotka disket">
</article>

<article class="thin">
    <h2>
        <Loc
            cs="Kontakty"
            en="Contacts"
        />
    </h2>
    <p>
        <a href={localizeHref("/contact")}>
            <Loc
                cs="Kontaktní informace naleznete zde"
                en="Contact information can be found here"
            />
        </a>
    </p>
</article>