<script lang="ts">
    import Projects from "#lib/Projects.svelte";
</script>

<svelte:head>
    <title>Herní historie, z.s.</title>
</svelte:head>

<div class="container">
    <h1>Projekty Herní historie, z.s.</h1>
</div>

<Projects />

<div class="container">
    <h2>Impressum</h2>
    <strong>Herní historie, z.s.</strong><br />
    <strong>IČO</strong>: 05823986<br />
    <strong>Transparentní účet</strong>: 8686868686/0600<br />
    <strong>Předseda výboru</strong>: Vojtěch Straka<br />
    <strong>Email</strong>: info@hernihistorie.cz<br />
    <strong>Telefon</strong>: 778726126

    <h2>Účel spolku</h2>
    <ul>
        <li>
            Rozšiřování obecného povědomí o šíři a rozmanitosti herní historie se zaměřením na
            videohry. Vzdělávání zaujatých subjektů a popularizace mezi mládeží.
        </li>
        <li>
            Archivace fyzických objektů spojených s herní historií (datové nosiče, publikace,
            apod.), jejich katalogizace a ustanovení veřejně přístupného archivu.
        </li>
        <li>
            Použití možností digitální archivace za účelem co nejlepší dlouhodobé a organizované
            konzervace informací o herní historii. Používání a popularizace již zavedených metod a
            průzkum dalších možností ve spolupráci s tuzemskými i mezinárodními skupinami příbuzného
            zaměření.
        </li>
        <li>
            Zachování a popis herní kultury (na celosvětové, státní i regionální úrovni), vzpomínek
            a příběhů význačných osobností herní scény a dokumentace herních komunit, herního
            byznysu a vzájemného vlivu mezi dobovým prostředím a herní kulturou.
        </li>
        <li>
            Podpora české herní scény, spolupráce s existujícími platformami pro komunikaci a jejich
            vytváření. Spolupráce se světovou herní komunitou, reprezentace Česka a Slovenska v
            mezinárodních projektech.
        </li>
    </ul>
</div>

<style>
    h1 {
        text-align: center;
    }

    .container {
        max-width: 800px;
        margin: auto;
        padding: 0 8px 0 8px;
    }
</style>
