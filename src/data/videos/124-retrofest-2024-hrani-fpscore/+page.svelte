<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Zahráli jsme si FPSCore, samostatně vydanou modifikaci, včetně mapy s pražským metrem.
        </p>
    {/snippet}
    {#snippet en()}
        <p>We play FPSCore, a standalone modification, including a map set in the Prague metro.</p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
