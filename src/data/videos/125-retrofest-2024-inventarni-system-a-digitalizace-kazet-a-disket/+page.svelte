<script lang="ts">
    import Loc from "$src/lib/components/Loc.svelte";
    import PageLang from "$src/lib/components/PageLang.svelte";
</script>

<PageLang cs en />

<Loc>
    {#snippet cs()}
        <p>
            Jak evidujeme předměty ze sbírky v našem inventárním systému a jak digitalizujeme
            kazety, diskety a další média.
        </p>
    {/snippet}
    {#snippet en()}
        <p>
            How we record the items in our collection in our inventory system, and how we digitize
            tapes, floppy disks and other media.
        </p>
        <p><em>The stream is in Czech.</em></p>
    {/snippet}
</Loc>
