<script>
	import Meta from "$lib/Meta.svelte";
	import ProjectBoxes from './ProjectBoxes.svelte';
    import Loc from "$src/lib/Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Meta title="Projekty"/>
<!--<h2>PROJEKTY</h2>
<p>Zde naleznete všechny krátkodobé archivářské projekty a osobní fondy, které jsme sami zpracovávali, nebo na jejichž zpracování jsme se podíleli. Tyto projekty jsou zaměřeny na úzce vymezená témata z naší nebo světové videoherní historie, která se snažíme za pomocí námi dostupných technologií a historiografických metod co nejhlouběji prozkoumat, zmapovat a zachránit co možná nejvíce materiálů co se těchto fenoménu týkají.</p>-->
<!-- <h2>PROJEKTY <a href="timeline" style="float: right">ČASOVÁ OSA</a></h2> -->
<ul>
    <li><Loc
        cs="Projekty"
        en="Projects"
        />
    <li><a href={localizeHref("/projects/timeline")}>
            <Loc    
            cs="Časová osa"
            en="Timeline"
            />
        </a>
</ul>
<ProjectBoxes all={true}/>

<style>
    ul {
		padding-left: 0px;
        list-style: none;
		display: flex;
		flex-wrap: wrap;
        text-align: left;
        margin-bottom: 29.8px;
	}

	li {
		padding: 0 27px 0 27px;
		border-left: 3px solid var(--color-secondary);
        text-transform: uppercase;
        font-size: 36px;
        font-weight: bold;
	}
    
    li > a { 
    /* font-weight: normal; */
    color: var(--color-black);
    /* text-decoration: none; */
    text-decoration-color: var(--color-secondary);
    text-decoration-thickness: 3px;
    }

    li:first-child {
		padding: 0 27px 0 0;
        border-left: none;
	}
    @media screen and (max-width: 500px) {
		li {font-size: 31px;}
    }
</style>