<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
    import { articleImages } from "$src/lib/articleImages";
	import Arrow from "$src/lib/components/Arrow.svelte";
	import { localizeHref } from "$src/lib/paraglide/runtime";

    const img = articleImages(
        import.meta.glob('./img/*', { eager: true, query: '?w=1600;800&enhanced', import: 'default' }),
        import.meta.glob('./img/*', { eager: true, import: 'default' }),
        import.meta.glob('./img/*', { eager: true, query: '?as=meta:width;height', import: 'default' }),
    );
</script>

<PageLang cs en />

<section>
    <Loc>
        {#snippet cs()}
            <p>
                Petr Tuček - narozen roku 1970 v Praze - je tvůrce několika drobných her pro ZX Spectrum z konce 80. let, které jsme v roce 2026 všechny zazálohovali. Rozhovor i samotné hry jsme zveřejnili na našem webu. Programy můžete také najít již tradičně na webu spřáteleného projektu <a href="https://cs.speccy.cz/">cs.speccy.cz</a>.
            </p>
            <Arrow href="{localizeHref('/interviews/petr-tucek/')}">
                Přečíst rozhovor s Petrem Tučkem
            </Arrow>
        {/snippet}
        {#snippet en()}
            <p>
                Petr Tuček - born in 1970 in Prague - is the creator of several small ZX Spectrum games from the late 1980s, all of which we preserved in 2026. We have published both the interview and the games themselves on our website. As is tradition, you can also find the programs on the website of our friends at <a href="https://cs.speccy.cz/">cs.speccy.cz</a>.
            </p>
            <Arrow href="{localizeHref('/interviews/petr-tucek/')}">
                Read the interview with Petr Tuček
            </Arrow>
        {/snippet}
    </Loc>

    <Figure image={img["01.jpg"]} />
    <Figure image={img["02.jpg"]} />
    <Figure image={img["03.jpg"]} />
    <Figure image={img["04.jpg"]} />
</section>
