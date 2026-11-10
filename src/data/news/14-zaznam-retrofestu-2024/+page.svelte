<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import VideoCard from "$src/lib/components/post/VideoCard.svelte";
    import stream from "$src/data/videos/119-retrofest-2024/blog_post";
</script>

<PageLang cs />

<section>
    <p>
        Už skoro před půl rokem (ten čas letí) jsme pořádali náš nepravidelný stream RetroFest, na
        kterém jsme oznamovali novinky ohledně naší činnosti a zároveň jsme si zahráli i nějaké
        RetroHry. Konečně jsme se dostali k sestříhání tohoto stremu, který celý najdete zde:
    </p>
    <VideoCard post={stream} compact large />

    <p><img src="/photos/stream_2024.jpg" alt="RetroFest 2024" /></p>
</section>
