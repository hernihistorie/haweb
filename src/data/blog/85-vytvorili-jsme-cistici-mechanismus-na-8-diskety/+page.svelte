<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
	import Arrow from "$src/lib/components/Arrow.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
</script>

<PageLang cs en />

<section>
    <p>
        <Loc>
            {#snippet cs()}
                Nedávno jsme ve spolupráci s <a href="https://www.printables.com/@Birdbrain">Birdbrain</a> vytvořili mechanismus na čištění 8″ (osmipalcových) disket. Mechanismus si můžete vytisknout i vy na své 3D tiskárně.
            {/snippet}
            {#snippet en()}
                Recently, in collaboration with <a href="https://www.printables.com/@Birdbrain">Birdbrain</a>, we have created a cleaning mechanism for 8″ (eight-inch) floppy disks. You too can print this mechanism on your 3D printer.
            {/snippet}
        </Loc>
    </p>
    
    <Arrow href="https://www.printables.com/model/1646926" text={{cs: "Stáhnout model čističky 8″ disket", en: "Download 8″ Floppy Disk Cleaner Model"}} />
    
    <p>
        <Loc>
            {#snippet cs()}
                Případné dotazy k tisku a modelu směřujte do komentářové sekce na Printables.
            {/snippet}
            {#snippet en()}
                Please direct any questions about printing and the model to the comments section on Printables.
            {/snippet}
        </Loc>
    </p>
    
    <p>
        <Loc>
            {#snippet cs()}
                <strong>📸 Foto</strong>: Tomáš "Čápa" Čapek
            {/snippet}
            {#snippet en()}
                <strong>📸 Photos</strong>: Tomáš "Čápa" Čapek
            {/snippet}
        </Loc>
    </p>

    <Figure src="/photos/blog-posts/vytvorili-jsme-cistici-mechanismus-na-8-diskety/vytvorili-jsme-cistici-mechanismus-na-8-diskety_1.jpg" />
    <Figure src="/photos/blog-posts/vytvorili-jsme-cistici-mechanismus-na-8-diskety/vytvorili-jsme-cistici-mechanismus-na-8-diskety_2.jpg" />
    <Figure src="/photos/blog-posts/vytvorili-jsme-cistici-mechanismus-na-8-diskety/vytvorili-jsme-cistici-mechanismus-na-8-diskety_3.jpg" />
    <Figure src="/photos/blog-posts/vytvorili-jsme-cistici-mechanismus-na-8-diskety/vytvorili-jsme-cistici-mechanismus-na-8-diskety_4.jpg" />
</section>
