/**
 * Opens a PhotoSwipe lightbox for a clicked `<a data-pswp-width data-pswp-height href="original">`.
 * All such links on the page form one gallery, in document order.
 * PhotoSwipe itself is only loaded on the first click.
 */
export async function openLightbox(event: MouseEvent) {
    // Let ctrl/middle-click etc. open the original in a new tab
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();

    const clicked = event.currentTarget as HTMLAnchorElement;
    const links = [...document.querySelectorAll<HTMLAnchorElement>('a[data-pswp-width]')];

    const [{ default: PhotoSwipe }] = await Promise.all([
        import('photoswipe'),
        import('photoswipe/style.css'),
        import('./lightbox.css')
    ]);

    const pswp = new PhotoSwipe({
        dataSource: links.map((link) => {
            const img = link.querySelector('img');
            return {
                src: link.href,
                width: Number(link.dataset.pswpWidth),
                height: Number(link.dataset.pswpHeight),
                msrc: img?.currentSrc,
                alt: img?.alt,
                element: link
            };
        }),
        index: links.indexOf(clicked),
        bgOpacity: 0.9
    });

    pswp.on('uiRegister', () => {
        pswp.ui?.registerElement({
            name: 'caption',
            appendTo: 'root',
            onInit: (el) => {
                pswp.on('change', () => {
                    const figure = pswp.currSlide?.data.element?.closest('figure');
                    el.textContent = figure?.querySelector('figcaption')?.textContent?.trim() ?? '';
                    el.hidden = !el.textContent;
                });
            }
        });
    });

    pswp.init();
}
