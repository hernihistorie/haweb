import type { Picture } from 'vite-imagetools';

export interface ArticleImage {
    /** Build-time resized thumbnails (avif/webp/fallback, srcset) */
    picture: Picture;
    /** URL of the untouched original */
    original: string;
}

export function articleImages(
    pictures: Record<string, unknown>,
    originals: Record<string, unknown>
): Record<string, ArticleImage> {
    const images: Record<string, ArticleImage> = {};
    for (const [path, picture] of Object.entries(pictures)) {
        const filename = path.split('/').pop()!;
        images[filename] = { picture: picture as Picture, original: originals[path] as string };
    }
    return images;
}
