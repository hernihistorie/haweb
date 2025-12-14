<script lang="ts">
    import BlogPostPage from "$lib/components/BlogPostPage.svelte";
    import PageLang from "$lib/components/PageLang.svelte";
    import { blogPost32 } from "./blog_post";
    import type { AssetData } from "$src/types";
    import { data as asset08502_data } from '$src/routes/assets/asset_08502';
    import AssetBox from "$lib/components/AssetBox.svelte";

    let assets: AssetData[] = [asset08502_data];
</script>

<PageLang cs />

<BlogPostPage post={blogPost32}>

    <p>V rámci akvizice předmětů z bývalého cítovského počítačového klubu jsme získali i mnoho počítačové literatury. Mezi ní byl i jeden Atari zpravodaj, který vznikal přímo v rámci cítovského klubu. V tomto zpravodaji lze kromě článků o počítačích Atari nalézt i zajímavé informace o klubu samotném - o jeho fungování, členstvu apod. Tento zpravodaj jsme oskenovali a zveřejnili v našem inventáři zde:
    {#each assets as data}
        <AssetBox {data} />
    {/each}
</BlogPostPage>