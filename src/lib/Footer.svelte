<script>
    import Loc from '$lib/Loc.svelte';
</script>

<!-- TODO make sure a linebreak isn't put in the name -->
<footer>
    <p><Loc
        cs="Herní archiv je projektem <a href='https://hernihistorie.cz/'>Herní Historie, z. s.</a>"
        en="Herní archiv is a project of <a href='https://hernihistorie.cz/'>Herní Historie, z. s.</a>"
    />

    <p>Webdesign: <a href="https://naymi.cz/">Nay Mi</a>
</footer>

<style>
    footer {
        margin: 200px auto 100px auto;
		padding: 0 16px 0 16px;
        max-width: var(--max-width);
        text-align: right;
        font-size: smaller;

		text-transform: uppercase;
    }
</style>