<script lang="ts">
    import BlogPost from "$lib/BlogPost.svelte";
    import PageLang from "$src/lib/PageLang.svelte";
    import type { AssetData } from "$src/types";
    import { data as asset08077_data } from '$src/routes/assets/asset_08077';
    import { data as asset08107_data } from '$src/routes/assets/asset_08107';
    import AssetBox from "$src/lib/AssetBox.svelte";

    let assets: AssetData[] = [asset08077_data, asset08107_data];
</script>

<PageLang cs />

<BlogPost
    author_name="Herní historie"
    date="2. srpna 2024"
    title="Skeny scénářů k pořadu Videostop"
>

    <p>Jak jsme oznámili v jenom z předchozích příspěvků, tak jsme dělali rozhovor s Vladimírem Bezděkem, s tvůrcem pořadu Videostop. Ten nám po dokončení rozhovoru zapůjčil scénáře ke dvěma dílům tohoto slavného pořadu - přesněji návrh na první díl (který je doplněný o posudek pořadu a ruční poznámky k úpravě scénáře) a pak scénář k dílu pátému. Pokud byste měli zájem si dané scénáře přečíst tak máte jedinečnou možnost, protože jsme oba naskenovali a ve formě PDF nahráli do našeho inventáře:
    {#each assets as data}
        <AssetBox {data} />
    {/each}
</BlogPost>