<script>
    import Loc from '$lib/Loc.svelte';
</script>

<!-- TODO make sure a linebreak isn't put in the name -->
<footer>
    <Loc cs="Herní archiv je projektem Herní Historie, z. s." en="Herní archiv is a project of Herní Historie, z. s." />
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