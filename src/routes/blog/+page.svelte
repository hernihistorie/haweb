<script lang="ts">
	import Meta from '$lib/Meta.svelte';
	import BlogBox from '$lib/BlogBox.svelte';
</script>

<Meta title="Blog" />

<h2>Blog</h2>
<div class="blogboxes">
    <BlogBox href="/blog/2-retrofest-2024"
        title="RetroFest 2024 streamuje do vašich obýváků"
    >
        S radostí oznamujeme, že v neděli 28. ledna se odehraje další ročník RetroFest streamu! Ať už jste fanoušci retroher, co rádi navštěvují RetroHernu na veřejných akcích, nebo se zajímáte o herní historii v našich kotlinách a chcete vědět na čem pracujeme, doufáme, že vás nalákáme se stavit na našem nepravidelném streamu. Můžete se těšit na přednášku o Československých televizních tenisech, na pařbu Unreal Tournamentu s publikem, na ohlášení několika novinek v rámci našeho projektu Herní archiv, a na hraní více či méně známých her z našich luhů a hájů! 
    </BlogBox>

    <BlogBox href="/blog/1-svycarske-dobrodruzstvi"
        title="Švýcarské dobrodružství"
    >
        Krátce po té, co jsem se oficiálně zapojil do činnosti spolku Herní historie, stala se věc. Už si bohužel napamatuji, kdo s ní přišel, ale protože pro mě každá věc co smrdí dobrodružstvím, je věcí šíleně neodolatelnou, okamžitě jsem se přihlásil a dokonce jsem nabídl i svá rychlá kola. O jakou věc, že se jedná? Výlet do Švýcarska.
    </BlogBox>
</div>

<style>
    .blogboxes {
        display: flex;
        flex-wrap: wrap;
        gap: 64px;
    }
</style>