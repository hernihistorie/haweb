<script lang="ts">
	import Meta from "$lib/Meta.svelte";
    import { LightboxGallery, GalleryImage, GalleryThumbnail, i18n } from 'svelte-lightbox';

    let assets = [
        "07140",
        "07141",
        "07177",
        "07178",
        "07179",
        "07180",
        "07181",
        "07182",
        "07183",
        "07184",
        "07185",
        "07186",
    ]

    i18n.set({
        generateLocalizedGalleryCounter:
            (activeImage: number, imageCount: number): string => {
                return `Obrázek ${activeImage + 1} z ${imageCount}`
        }
    });
</script>

<Meta title="Digitalizované fotografie - Fond Emila Fafka" />

<h2>Digitalizované fotografie</h2>
<h3>Fond Emila Fafka</h3>
<p>
    Kolekce fotografií s tématikou výpočetní techniky (převážně domácí) zachycených dlouholetým reportérem <a href="https://cs.wikipedia.org/wiki/Emil_Fafek">Emilem Fafkem</a> pro deník Mladá Fronta. Byla pořízena spolkem v říjnu 2023 jako zájmová kolekce z většího objemu jeho fotografické tvorby a v současnosti pracujeme na digitalizaci celé sbírky. Rádi bychom kontaktovali pozůstalé pro vyjednání uvolnění práv na dílo.
</p>

<LightboxGallery>
    <!-- Layout-->
    <svelte:fragment slot="thumbnail">
        <div class="thumbnails">
            {#each assets as number, index }
                <GalleryThumbnail id={index}>
                    <img src="/gallery/emil-fafek/thumbs/RH{number}.jpg" alt="" class="thumbnail">
                </GalleryThumbnail>
            {/each}
        </div>
    </svelte:fragment>
    {#each assets as number, index }
        <GalleryImage id={index}>
            <img src="/gallery/emil-fafek/2mb/RH{number}.jpg" alt="">
            <div class="inventorylink">
                <a href="https://inventory.retroherna.org/admin/asset/details/?id={number}">
                    Předmět HH{number} v inventáři
                </a>
            </div>
        </GalleryImage>
    {/each}
</LightboxGallery>

<style>
    :root {
        --svelte-lightbox-arrows-color: var(--color-primary) !important;
    }

    .thumbnails {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }
    .thumbnail {
        width: 250px;
        height: 250px;
        object-fit: cover;
    }

    .inventorylink {
        z-index: 10;
        position: absolute;
        right: 0;
    }
</style>