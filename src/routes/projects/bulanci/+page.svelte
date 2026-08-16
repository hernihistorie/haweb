<script lang="ts">
	import ProjectPage from "$src/lib/components/project/ProjectPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { projectBulanci } from './project';
	import BulanciMenu from "./BulanciMenu.svelte";
</script>

<BulanciMenu />

<ProjectPage project={projectBulanci}>
    <PageLang cs />
    <p><strong>Název projektu</strong>: Bulánci</p>
    <p><strong>Jména zpracovatelů</strong>: TODO</p>
    <p><strong>Rok dokončení</strong>: 2026</p>

    <hr>
    
    <p>TODO: obrázek</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
</ProjectPage>

<style>
</style>