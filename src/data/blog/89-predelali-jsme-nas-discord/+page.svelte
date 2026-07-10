<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
</script>

<PageLang cs />

<section>
    <Loc>
        {#snippet cs()}
            <p>V rámci hledání nových dobrovolníků jsme předělali náš Discord, který je teď přehlednější a doplněn o nové komunitní funkce!<br/>Takže ať už se chcete zapojit do aktivit spolku, nebo jste sběratel, akademik, kutil, či nadšenec do her, který chce být součástí komunity lidí, které baví to co jeho, tak se na <a href="https://discord.gg/9AwRUfShX5">náš Discord určitě připojte!</a></p>
        {/snippet}
    </Loc>

    <Figure src="/photos/blog-posts/predelali-jsme-nas-discord/predelali-jsme-nas-discord.jpg" />
</section>
