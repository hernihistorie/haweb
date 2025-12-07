<script lang="ts">
   import type { LocalizedString } from '$src/types';
   import { lang } from '$src/stores';

   interface Props {
      title?: string | LocalizedString;
   }

   let { title = "" }: Props = $props();

   let langValue: "en" | "cs" = $state("cs");
   lang.subscribe(value => {
      langValue = value as "en" | "cs";
   });

   let localizedTitle = $derived(
      typeof title === 'string' ? title : (title[langValue] ?? title['cs'] ?? title['en'] ?? '')
   );
</script>

<svelte:head>
   <title>{localizedTitle ? localizedTitle + " - Herní archiv" : "Herní archiv"}</title>
   <link
      rel="alternate"
      type="application/atom+xml"
      title={
         langValue === 'en' ? "Czechoslovak Game Archive - Blog" : "Herní archiv - Blog"
      }
      href={langValue === 'en' ? "/en/feed.xml" : "/feed.xml"} />
</svelte:head>