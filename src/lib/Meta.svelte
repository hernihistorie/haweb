<svelte:head>
   <title>{title ? title + " - Herní archiv" : "Herní archiv"}</title>
</svelte:head>

<script lang="ts">
   interface Props {
      title?: string;
   }

   let { title = "" }: Props = $props();
</script>