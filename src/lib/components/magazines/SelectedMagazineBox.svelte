<script lang="ts">
	import Box from "../Box.svelte";
	import MagazineBlock from "./MagazineBlock.svelte";
	import type { MagazineInfo } from "$src/lib/magdb";
	import Loc from "../Loc.svelte";
	import Arrow from "../Arrow.svelte";

    const { magazine }: {magazine: MagazineInfo} = $props();
</script>

<Box decoration={false}>
    <div class="selected-magazine-entry">
        <MagazineBlock {magazine} makeLinkProminent={false} withTitle={false} />
        <div>
            <h4>
                <Loc cs="Časopis" en="Magazine" />
                <em>{magazine.title}</em>
            </h4>
            <p>
                <Loc cs={magazine.description.cs} en={magazine.description.en} />
            </p>
            <Arrow href={`/magazines/catalog/${magazine.slug ?? magazine.id}`} small>
                <Loc cs="Prohlédnout čísla časopisu" en="View magazine issues" />
            </Arrow>
        </div>
    </div>
</Box>

<style>
    .selected-magazine-entry {
        display: grid;
        grid-template-columns: 1fr 4fr;
        margin-top: 0.5em;
    }

    h4 {
        margin-bottom: 0em;
    }

    p {
        margin-top: 0.7em;
    }

     @media (max-width: 620px) {
        .selected-magazine-entry {
            grid-template-columns: 1fr;
            gap: 1em;
        }
    }

    @media (max-width: 620px) {
        .selected-magazine-entry {
            grid-template-columns: 1fr;
            gap: 1em;
        }
    }
</style>