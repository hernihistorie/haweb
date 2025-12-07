<script>
    import Loc from '$lib/Loc.svelte';
    import { localizeHref } from '$lib/paraglide/runtime';
</script>

<!-- TODO make sure a linebreak isn't put in the name -->
<footer>
    <div>
        <a href={localizeHref("/contact")}>Kontaktujte nás</a>
    </div>
    <div>
        <p><Loc
            cs="Herní archiv je projektem <a href='https://hernihistorie.cz/'>Herní Historie, z. s.</a>"
            en="Herní archiv is a project of <a href='https://hernihistorie.cz/'>Herní Historie, z. s.</a>"
        />

        <p>Webdesign: <a href="https://naymi.cz/">Nay Mi</a>
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
		padding: 0 16px 0 16px;
    }

    footer {
        margin: 200px auto 100px auto;
        max-width: var(--max-width);
        text-align: right;
        font-size: smaller;

		text-transform: uppercase;
    }

    @media screen and (max-width: 800px) {
        footer {
            flex-direction: column;
            text-align: center;
        }
    }
</style>