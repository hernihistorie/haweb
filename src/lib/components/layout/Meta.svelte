<script lang="ts">
   import type { LocalizedString } from '$src/types';
	import { getLocale } from '$lib/paraglide/runtime';

   interface Props {
      title?: string | LocalizedString;
      noindex?: boolean;
   }

   let { title = "", noindex = false }: Props = $props();

   let localizedTitle = $derived(
      typeof title === 'string' ? title : (title[getLocale()] ?? title['cs'] ?? title['en'] ?? '')
   );

   let localizedSuffix = $derived(
      getLocale() === 'en' ? "Czechoslovak Game Archive" : "Herní archiv"
   );
</script>

<svelte:head>
   <title>{localizedTitle ? localizedTitle + " - " + localizedSuffix : localizedSuffix}</title>
   <link
      rel="alternate"
      type="application/atom+xml"
      title={
         getLocale() === 'en' ? "Czechoslovak Game Archive - Blog" : "Herní archiv - Blog"
      }
      href={getLocale() === 'en' ? "/en/feed.xml" : "/feed.xml"} />
   {#if noindex}
      <meta name="robots" content="noindex" />
   {/if}
</svelte:head>