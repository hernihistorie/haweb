<script lang="ts">
	import ProjectPage from "$src/lib/components/project/ProjectPage.svelte";
    import { LightboxGallery, GalleryImage, GalleryThumbnail, i18n } from 'svelte-lightbox';
	import { projectEmilFafek } from "./project";
	import Loc from "$lib/components/Loc.svelte";
	import { getLocale } from "$lib/paraglide/runtime";

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
                return {
                    'cs': `Obrázek ${activeImage + 1} z ${imageCount}`,
                    'en': `Image ${activeImage + 1} of ${imageCount}`
                }[getLocale()]
        }
    });
</script>

<ProjectPage project={projectEmilFafek} thin={false}>
    <h3>
        <Loc cs="Digitalizované fotografie" en="Digitized Photographs" />
    </h3>
    <p>
        <Loc>
            {#snippet cs()}
                Kolekce fotografií s tématikou výpočetní techniky (převážně domácí) zachycených dlouholetým reportérem <a href="https://cs.wikipedia.org/wiki/Emil_Fafek">Emilem Fafkem</a> pro deník <em>Mladá Fronta</em>. Byla pořízena spolkem v říjnu 2023 jako zájmová kolekce z většího objemu jeho fotografické tvorby a v současnosti pracujeme na digitalizaci celé sbírky. Rádi bychom kontaktovali pozůstalé pro vyjednání uvolnění práv na dílo.
            {/snippet}
            {#snippet en()}
                A collection of photographs with the theme of computer technology (mainly home computers) captured by long-time reporter <a href="https://cs.wikipedia.org/wiki/Emil_Fafek">Emil Fafek</a> for the newspaper <em>Mladá Fronta</em>. It was acquired by our association in October 2023 as an interest collection from a larger volume of his photographic work, and we are currently working on digitizing the entirety of it. We would like to contact the heirs to negotiate the release of rights to these works.
            {/snippet}
        </Loc>
    </p>

    <LightboxGallery>
        <!-- Layout-->
        {#snippet thumbnail()}
                <div class="thumbnails">
                    {#each assets as number, index }
                        <GalleryThumbnail id={index}>
                            <img src="/gallery/emil-fafek/thumbs/RH{number}.jpg" alt="" class="thumbnail">
                        </GalleryThumbnail>
                    {/each}
                </div>
            
        {/snippet}
        {#each assets as number, index }
            <GalleryImage id={index}>
                <img src="/gallery/emil-fafek/2mb/RH{number}.jpg" alt="">
                <div class="inventorylink">
                    <a href="https://inventory.herniarchiv.cz/admin/asset/details/?id={number}">
                        <Loc cs="Předmět HH{number} v inventáři" en="Item HH{number} in inventory" />
                    </a>
                </div>
            </GalleryImage>
        {/each}
    </LightboxGallery>
</ProjectPage>

<style>
    :root {
        --svelte-lightbox-arrows-color: var(--color-primary) !important;
    }

    .thumbnails {
        display: flex;
        flex-wrap: wrap;
        gap:  8px 12px;
        justify-content: center;
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

    @media only screen and (max-width: 560px) {
        .thumbnail {
            width: 200px;
            height: 200px;
        }
    }

    @media only screen and (max-width: 470px) {
        .thumbnails {
            display: flex;
            flex-wrap: wrap;
            gap:  2px 4px;
        }
        .thumbnail {
            width: 180px;
            height: 180px;
        }
    }


    @media only screen and (max-width: 420px) {
        .thumbnail {
            width: 150px;
            height: 150px;
        }
    }
</style>