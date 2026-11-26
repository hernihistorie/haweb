import type { PlaceholderPicture } from "$src/types";

/**
 * Inline style for an `<img>` which shows a blurred version of the image until it loads.
 * The blur is done by an SVG background, so it follows the shape of the `<img>` with no extra
 * elements, and it works without JS.
 */
export function placeholderStyle({ img, placeholder }: PlaceholderPicture): string | undefined {
    if (!placeholder) return undefined;

    const width = 100;
    const height = Math.round((width * img.h) / img.w);
    // The feComponentTransfer undoes the fading towards transparency at the edges
    const svg =
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'>` +
        `<filter id='b' color-interpolation-filters='sRGB'>` +
        `<feGaussianBlur stdDeviation='3'/>` +
        `<feComponentTransfer><feFuncA type='discrete' tableValues='1 1'/></feComponentTransfer>` +
        `</filter>` +
        `<image width='${width}' height='${height}' preserveAspectRatio='none' filter='url(#b)' href='${placeholder}'/>` +
        `</svg>`;
    const url = "data:image/svg+xml," + svg.replace(/[<>#%]/g, encodeURIComponent);

    return `background: url("${url}") center / cover no-repeat`;
}
