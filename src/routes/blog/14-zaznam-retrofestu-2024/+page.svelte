<!-- @migration-task Error while migrating Svelte code: `<p>` is invalid inside `<p>` -->
<script lang="ts">
    import BlogPostPage from "$src/lib/components/blog/BlogPostPage.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
    import { blogPost14 } from "./blog_post";
</script>

<PageLang cs />

<BlogPostPage post={blogPost14}>

    <p>Už skoro před půl rokem (ten čas letí) jsme pořádali náš nepravidelný stream RetroFest, na kterém jsme oznamovali novinky ohledně naší činnosti a zároveň jsme si zahráli i nějaké RetroHry. Konečně jsme se dostali k sestříhání tohoto stremu, který celý najdete zde:
    
    <ul>
        <li><p><a href="https://www.youtube.com/playlist?list=PLkP4nImCbtQdmr0I8Qay_Yom8zWSRIvmM">Celý stream</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=_Tw5BTebPq8">Úvod</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=MIFdfWnWwCU">Orální historie a Fotografie</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=AhDkeZb1E7o">Hraní Bulánků</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=Ru1WALY0kkI">Skenování a katalogizace časopisů</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=EhB4-9pIbWg">Hraní FPSCore</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=B2X_rZEeF90">Digitalizace kazet a disket</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=wQEHMgwcGCw">Hraní na ZX Spectru</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=okUjqIcDBQY">Přednáška o místních televizních tenisech</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=nqpgn2SkMqw">Hraní UT99</a>
        </p></li>
        <li><p><a href="https://www.youtube.com/watch?v=O6tK0DVflfw">Hraní Diabla</a>
        </p></li>
    </ul>

    <p><img src="/photos/stream_2024.jpg" alt="RetroFest 2024"></p>
</BlogPostPage>