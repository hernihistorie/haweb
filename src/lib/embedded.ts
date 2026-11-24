/**
 * Apps whose pages are embedded into haweb through an iframe (see EmbeddedFrame.svelte
 * and $lib/server/embed.ts).
 */
export interface EmbeddedApp {
    /** Path of the haweb pages showing the app, e.g. `/inventory` */
    prefix: string;
    /** Path the app itself is proxied at, loaded inside the iframe */
    framePrefix: string;
    /**
     * Paths of the app, relative to `prefix`, that haweb renders natively instead of
     * framing them.  When the frame navigates to one, haweb shows its own page instead.
     */
    nativePaths: string[];
    /**
     * Path prefixes, relative to `framePrefix`, that visitors are redirected to get from
     * the app itself.  Meant for files, which may be too large to pass through haweb.
     */
    directPaths: string[];
}

export const INVENTORY: EmbeddedApp = {
    prefix: "/inventory",
    framePrefix: "/inventory/_frame",
    nativePaths: ["/"],
    directPaths: ["/files/"],
};

/** rhinventory itself, which staff use directly */
export const INVENTORY_ORIGIN = "https://inventory.herniarchiv.cz";

/** Encodes a decoded route parameter path for use in a URL. */
export function encodePath(path: string): string {
    return path.split("/").map(encodeURIComponent).join("/");
}

/**
 * Path of a page within an embedded app, e.g. `/asset/123-foo`, from its
 * delocalized haweb pathname.
 */
export function appPath(app: EmbeddedApp, pathname: string): string {
    return pathname.slice(app.prefix.length) || "/";
}

/**
 * rhinventory's login, which then returns to the given page in rhinventory.
 *
 * @param path path within rhinventory, with the query string
 */
export function inventoryLoginHref(path: string): string {
    return `${INVENTORY_ORIGIN}/login/github?${new URLSearchParams({ next: path })}`;
}
