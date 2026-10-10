/**
 * Apps whose pages are embedded into haweb through an iframe (see EmbeddedFrame.svelte
 * and $lib/server/embed.ts).
 */
export interface EmbeddedApp {
    /** Path of the haweb pages showing the app, e.g. `/inventory` */
    prefix: string;
    /** Path the app itself is proxied at, loaded inside the iframe */
    framePrefix: string;
}

export const INVENTORY: EmbeddedApp = {
    prefix: "/inventory",
    framePrefix: "/inventory/_frame",
};

/** Encodes a decoded route parameter path for use in a URL. */
export function encodePath(path: string): string {
    return path.split("/").map(encodeURIComponent).join("/");
}
