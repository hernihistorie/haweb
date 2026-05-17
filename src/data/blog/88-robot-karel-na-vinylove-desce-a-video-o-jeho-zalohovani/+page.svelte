<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
	import PhotoCredit from "$src/lib/components/PhotoCredit.svelte";
	import AssetList from "$src/lib/components/asset/AssetList.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
</script>

<PageLang cs />

<section>
    <Loc>
        {#snippet cs()}
            <p>Když Rudolf Jan Suchý a Agáta Trlidová dělali rozhovor s Tomášem Bartovským o Robotu Karlovi, tak od něj dostali i pár dárečků do archivu - specificky dvě vinylové desky a instrukce k jejich používání. Po zevrubné digitalizaci, na které se podílel i Jan Heřman jsme vykřesali několik programů pro ZX Spectrum (včetně nezazálohované verze Karla pro zmíněnou platformu) ale i Karla pro IQ151. O tomto dobrodružství <a href="https://www.youtube.com/watch?v=gccZcTYVXbk">natočil Jan Heřman video</a>, které naleznete na jeho kanále Andrew Tesla. Ve videu je také rozhovor s Rudolfem Janem Suchým, o historii toho, jak a proč se Karel na LPčka vlastně dostal.</p>
        {/snippet}
    </Loc>
    <AssetList assetTagId={45} withHeading />
    <Figure src="/photos/blog-posts/robot-karel-na-vinylove-desce-a-video-o-jeho-zalohovani/robot-karel-na-vinylove-desce-a-video-o-jeho-zalohovani.jpg" />
    <PhotoCredit>Rudolf Jan Suchý</PhotoCredit>
</section>
