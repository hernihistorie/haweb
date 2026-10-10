import type { SlideData } from "photoswipe";

/** Size assumed for an image with unknown dimensions until the original loads (A4 portrait) */
const PROVISIONAL_WIDTH = 2000;
const PROVISIONAL_HEIGHT = Math.round(PROVISIONAL_WIDTH * Math.SQRT2);

/**
 * Opens a PhotoSwipe lightbox for a clicked `<a data-pswp href="original">`.
 * All such links on the page form one gallery, in document order.
 * Pass the original's dimensions as `data-pswp-width` and `data-pswp-height` when known;
 * otherwise they're guessed from the thumbnail and corrected once the original loads.
 * PhotoSwipe itself is only loaded on the first click.
 */
export async function openLightbox(event: MouseEvent) {
    // Let ctrl/middle-click etc. open the original in a new tab
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
    event.preventDefault();

    const clicked = event.currentTarget as HTMLAnchorElement;
    const links = [...document.querySelectorAll<HTMLAnchorElement>("a[data-pswp]")];

    const [{ default: PhotoSwipe }] = await Promise.all([
        import("photoswipe"),
        import("photoswipe/style.css"),
        import("./lightbox.css"),
    ]);

    const unsized = new Set<number>();
    const dataSource: SlideData[] = links.map((link, index) => {
        const img = link.querySelector("img");
        let width = Number(link.dataset.pswpWidth);
        let height = Number(link.dataset.pswpHeight);
        if (!width || !height) {
            unsized.add(index);
            width = PROVISIONAL_WIDTH;
            height = img?.naturalWidth
                ? Math.round((PROVISIONAL_WIDTH * img.naturalHeight) / img.naturalWidth)
                : PROVISIONAL_HEIGHT;
        }
        return {
            src: link.href,
            width,
            height,
            msrc: img?.currentSrc,
            alt: img?.alt,
            element: link,
        };
    });

    const pswp = new PhotoSwipe({
        dataSource,
        index: links.indexOf(clicked),
        bgOpacity: 0.9,
    });

    // Replace a guessed size with the real one once the original has loaded
    function fixSize(index: number) {
        const content = pswp.contentLoader.getContentByIndex(index);
        const img = content?.element;
        if (
            !unsized.has(index) ||
            !(img instanceof HTMLImageElement) ||
            !img.complete ||
            !img.naturalWidth
        )
            return;
        unsized.delete(index);
        dataSource[index].width = img.naturalWidth;
        dataSource[index].height = img.naturalHeight;
        pswp.refreshSlideContent(index);
    }
    // Deferred so PhotoSwipe finishes handling the load before the slide is rebuilt
    pswp.on("loadComplete", ({ content, isError }) => {
        if (!isError) setTimeout(() => fixSize(content.index));
    });
    // Neighbouring slides may have finished preloading before they had a slide to report to
    pswp.on("change", () => {
        if (pswp.currSlide) fixSize(pswp.currSlide.index);
    });

    pswp.on("uiRegister", () => {
        pswp.ui?.registerElement({
            name: "caption",
            appendTo: "root",
            onInit: (el) => {
                pswp.on("change", () => {
                    const figure = pswp.currSlide?.data.element?.closest("figure");
                    el.textContent = figure?.querySelector("figcaption")?.textContent?.trim() ?? "";
                    el.hidden = !el.textContent;
                });
            },
        });
    });

    pswp.init();
}
