import type { Picture } from 'vite-imagetools';

export interface ArticleImage {
    /** Build-time resized thumbnails (avif/webp/fallback, srcset) */
    picture: Picture;
    /** URL of the untouched original */
    original: string;
    /** Dimensions of the original, needed by the lightbox */
    width: number;
    height: number;
}

export function articleImages(
    pictures: Record<string, unknown>,
    originals: Record<string, unknown>,
    sizes: Record<string, unknown>
): Record<string, ArticleImage> {
    const images: Record<string, ArticleImage> = {};
    for (const [path, picture] of Object.entries(pictures)) {
        const filename = path.split('/').pop()!;
        const { width, height } = sizes[path] as { width: number; height: number };
        images[filename] = { picture: picture as Picture, original: originals[path] as string, width, height };
    }
    return images;
}
