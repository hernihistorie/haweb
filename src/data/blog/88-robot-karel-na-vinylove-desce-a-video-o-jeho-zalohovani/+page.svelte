<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
	import PhotoCredit from "$src/lib/components/PhotoCredit.svelte";
	import AssetList from "$src/lib/components/asset/AssetList.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
	import Youtube from "svelte-youtube-embed";
</script>

<PageLang cs en />

<section>
    <Loc>
        {#snippet cs()}
            <p>Když Rudolf Jan Suchý a Agáta Trlidová dělali rozhovor s Tomášem Bartovským o Robotu Karlovi, tak od něj dostali i pár dárečků do archivu - specificky dvě vinylové desky a instrukce k jejich používání. Po zevrubné digitalizaci, na které se podílel i Jan Heřman jsme vykřesali několik programů pro ZX Spectrum (včetně nezazálohované verze Karla pro zmíněnou platformu) ale i Karla pro IQ151. O tomto dobrodružství <a href="https://www.youtube.com/watch?v=gccZcTYVXbk">natočil Jan Heřman video</a>, které naleznete na jeho kanále Andrew Tesla. Ve videu je také rozhovor s Rudolfem Janem Suchým, o historii toho, jak a proč se Karel na LPčka vlastně dostal.</p>
        {/snippet}
        {#snippet en()}
            <p>
                When Rudolf Jan Suchý and Agáta Trlidová were making an interview with Tomáš Bartovský about Robot Karel, they also received a few gifts for the archive - specifically two vinyl records and instructions on how to use them. After a thorough digitization process, which also involved Jan Heřman, we managed to resurrect several ZX Spectrum programs (including a previously unpreserved version of Karel for this platform) but also Karel for the Czechoslovak IQ 151 home computer. Jan Heřman recorded <a href="https://www.youtube.com/watch?v=gccZcTYVXbk">a video about this adenture</a>, which you will find on his channel, Andrew Tesla. The video also features an interview with Rudolf Jan Suchý about the history of how and why Karel ended up on vinyl records in the first place.
            </p>
        {/snippet}
    </Loc>
    <Youtube id="gccZcTYVXbk" />
    <AssetList assetTagId={45} withHeading />
    <Figure src="/photos/blog-posts/robot-karel-na-vinylove-desce-a-video-o-jeho-zalohovani/robot-karel-na-vinylove-desce-a-video-o-jeho-zalohovani.jpg" />
    <PhotoCredit>Rudolf Jan Suchý</PhotoCredit>
</section>
