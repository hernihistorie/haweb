import type { BulanciAuthor } from "$src/data/bulanci";
import { bulanciSlug } from "$src/data/bulanciSlug";
import { czechPlural, englishPlural } from "$src/lib/loc";
import { localizeHref } from "$src/lib/paraglide/runtime";
import type { LocalizedString } from "$src/types";
import { compareStrings } from "../maps/mapList";

export const AUTHORS_PATH = "/projects/bulanci/authors";

/** Localized link to the page of an author or a clan, by their canonical name */
export const authorHref = (name: string): string =>
    localizeHref(`${AUTHORS_PATH}/${bulanciSlug(name)}/`);

const SORT_KEYS = ["reach", "maps", "name", "year"] as const;
/** `reach` sorts by the number of distinct places where the author's maps were found */
export type AuthorSortKey = (typeof SORT_KEYS)[number];
export type AuthorSort = { key: AuthorSortKey; desc: boolean };

export const DEFAULT_AUTHOR_SORT: AuthorSort = { key: "reach", desc: true };

/** Counts are most interesting from the highest, so they're sorted descending first */
export const isDescendingFirst = (key: AuthorSortKey): boolean => key === "reach" || key === "maps";

/** Parses the `sort` URL parameter: the key, prefixed by `-` for descending order */
export function parseAuthorSort(value: string | null): AuthorSort {
    const desc = value?.startsWith("-") ?? false;
    const key = SORT_KEYS.find((key) => key === value?.replace(/^-/, ""));
    return key ? { key, desc } : DEFAULT_AUTHOR_SORT;
}

export function formatAuthorSort(sort: AuthorSort): string {
    return (sort.desc ? "-" : "") + sort.key;
}

/** Compares authors by the given sort. Authors without dated maps always go last by year. */
export function compareAuthors(a: BulanciAuthor, b: BulanciAuthor, sort: AuthorSort): number {
    const direction = sort.desc ? -1 : 1;
    const byName = compareStrings(a.name, b.name);
    switch (sort.key) {
        case "reach":
            return (
                direction * (a.reach - b.reach) || direction * (a.mapCount - b.mapCount) || byName
            );
        case "maps":
            return (
                direction * (a.mapCount - b.mapCount) || direction * (a.reach - b.reach) || byName
            );
        case "name":
            return direction * byName;
        case "year": {
            const yearA = a.mapYears[0];
            const yearB = b.mapYears[0];
            if (yearA === yearB) return byName;
            if (yearA === undefined) return 1;
            if (yearB === undefined) return -1;
            return direction * (yearA - yearB) || byName;
        }
    }
}

/** e.g. "2007–2010", or "" if no map is dated */
export function formatYears(years: number[]): string {
    if (!years.length) return "";
    const first = years[0];
    const last = years[years.length - 1];
    return first === last ? String(first) : `${first}–${last}`;
}

export const mapCountLabel = (count: number): LocalizedString => ({
    cs: `${count} ${czechPlural(count, "mapa", "mapy", "map")}`,
    en: `${count} ${englishPlural(count, "map", "maps")}`,
});

export const reachLabel = (count: number): LocalizedString => ({
    cs: `${count} ${czechPlural(count, "místo", "místa", "míst")} výskytu`,
    en: `found in ${count} ${englishPlural(count, "place", "places")}`,
});

export const REACH_EXPLANATION: LocalizedString = {
    cs: "Počet různých míst (webů a nahrání na úložiště), kde se objevila některá z map autora",
    en: "The number of distinct places (websites and file hosting uploads) where any of the author's maps appeared",
};

/** Escapes the text as HTML, except for the few tags descriptions use: <i> and <br> */
export const formatInlineHtml = (text: string): string =>
    text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replace(/&lt;(\/?i|br\s*\/?)&gt;/gi, "<$1>");
