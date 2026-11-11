import type { BulanciMap } from "$src/data/bulanci";
import { localizeHref } from "$src/lib/paraglide/runtime";

export const MAPS_PATH = "/projects/bulanci/maps";

/** Localized link to the map's own page */
export const mapHref = (map: Pick<BulanciMap, "id" | "slug">): string =>
    localizeHref(`${MAPS_PATH}/${map.id}-${map.slug}/`);

/** Localized link to the map list with the given filters */
export function mapListHref(filters: Record<string, string>): string {
    const query = new URLSearchParams(filters).toString();
    return localizeHref(`${MAPS_PATH}/`) + (query ? `?${query}` : "");
}

export type View = "gallery" | "table";

export const PAGE_SIZE: Record<View, number> = { gallery: 24, table: 50 };

/** URL parameter value standing for an unknown author or year */
export const UNKNOWN = "-";

export type SortKey = "name" | "year" | "author";
export type Sort = { key: SortKey; desc: boolean };

export const DEFAULT_SORT: Sort = { key: "name", desc: false };

/** Parses the `sort` URL parameter: the key, prefixed by `-` for descending order */
export function parseSort(value: string | null): Sort {
    const desc = value?.startsWith("-") ?? false;
    const key = value?.replace(/^-/, "");
    if (key === "name" || key === "year" || key === "author") {
        return { key, desc };
    }
    return DEFAULT_SORT;
}

export function formatSort(sort: Sort): string {
    return (sort.desc ? "-" : "") + sort.key;
}

const collator = new Intl.Collator("cs");

/** Compares maps by the given sort. Unknown years and authors always go last. */
export function compareMaps(a: BulanciMap, b: BulanciMap, sort: Sort): number {
    const direction = sort.desc ? -1 : 1;
    switch (sort.key) {
        case "name":
            return direction * collator.compare(a.name, b.name);
        case "year":
            if (a.year === b.year) return collator.compare(a.name, b.name);
            if (a.year === null) return 1;
            if (b.year === null) return -1;
            return direction * (a.year - b.year);
        case "author": {
            const authorA = a.authors[0];
            const authorB = b.authors[0];
            if (authorA === authorB) return collator.compare(a.name, b.name);
            if (authorA === undefined) return 1;
            if (authorB === undefined) return -1;
            return direction * collator.compare(authorA, authorB) || collator.compare(a.name, b.name);
        }
    }
}

export function compareStrings(a: string, b: string): number {
    return collator.compare(a, b);
}

/** Lowercase and without diacritics, for searching */
export function normalizeForSearch(value: string): string {
    return value
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase();
}
