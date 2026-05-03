<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
	import Arrow from "$src/lib/components/Arrow.svelte";
	import PhotoCredit from "$src/lib/components/PhotoCredit.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
</script>

<PageLang cs en />

<section>
    <Loc>
        {#snippet cs()}
            <p>Stejně jako u 8″ disketovek tak i k 3,5″ (tři-a-půl palcovým) disketetám jsme ve spolupráci s <a href="https://www.printables.com/@Birdbrain">Birdbrain</a> vytvořili mechanismus na jejich čištění. Oproti předchozím řešením se vyznačuje podporou pro čištění diskety z obou stran. Mechanismus si můžete vytisknout i vy na své 3D tiskárně.</p>
            <p>Případné dotazy k tisku a modelu směřujte do komentářové sekce na Printables (otázky pište prosím v angličtině).</p>
            
            <Arrow href="https://www.printables.com/model/1695235" text="Stáhnout model čističky 3,5″ disket"/>
        {/snippet}
        {#snippet en()}
            <p>Following the one for 8″ flopies, for 3,5″ (three-and-a-half-inch) floppies too we have made a cleaning mechanism in cooperation with <a href="https://www.printables.com/@Birdbrain">Birdbrain</a>. Compared to previous solutions, it provides capability for cleaning floppy disks from both sides. You can print the mechanism on your own 3D printer.</p>
            <p>For any questions regarding printing and the model, please ask in the comment section on Printables.</p>
            
            <Arrow href="https://www.printables.com/model/1695235" text="Download the 3,5″ floppy disk cleaner model"/>
        {/snippet}
    </Loc>
    
    <Figure src="/photos/blog-posts/vytvorili-jsme-cistici-mechanismus-na-3-5-diskety/vytvorili-jsme-cistici-mechanismus-na-3-5-diskety.jpg" />
    <PhotoCredit>Tomáš "Čápa" Čapek</PhotoCredit>
</section>
