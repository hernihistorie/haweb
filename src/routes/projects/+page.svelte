<script>
	import Meta from "$src/lib/components/layout/Meta.svelte";
	import ProjectBoxes from './ProjectBoxes.svelte';
	import ProjectsMenu from "$src/lib/components/project/ProjectsMenu.svelte";
</script>

<Meta title={{cs: "Projekty", en: "Projects"}} />
<!--<h2>PROJEKTY</h2>
<p>Zde naleznete všechny krátkodobé archivářské projekty a osobní fondy, které jsme sami zpracovávali, nebo na jejichž zpracování jsme se podíleli. Tyto projekty jsou zaměřeny na úzce vymezená témata z naší nebo světové videoherní historie, která se snažíme za pomocí námi dostupných technologií a historiografických metod co nejhlouběji prozkoumat, zmapovat a zachránit co možná nejvíce materiálů co se těchto fenoménu týkají.</p>-->
<!-- <h2>PROJEKTY <a href="timeline" style="float: right">ČASOVÁ OSA</a></h2> -->

<ProjectsMenu />

<ProjectBoxes all={true}/>
