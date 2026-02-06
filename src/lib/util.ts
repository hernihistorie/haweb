import { page } from "$app/state";

function cleanPathname(path: string): string {
    /* strip locale from path */
    const pathWithoutLocale = path.replace(/^\/[a-z]{2}\//, "/");
    /* remove final / */
    if (pathWithoutLocale.endsWith("/")) {
        return pathWithoutLocale.slice(0, -1);
    }
    return pathWithoutLocale;
}

export function pathnameStartswith(prefix: string): boolean {
    return cleanPathname(page.url.pathname).startsWith(cleanPathname(prefix));

}

export function pathnameMatches(pattern: string): boolean {
    return cleanPathname(page.url.pathname) === cleanPathname(pattern);
}