import type { BulanciWebDetails } from "$src/data/bulanci/webDetails.server";
import type { BulanciWeb, BulanciWebFeatures, BulanciWebYear } from "$src/data/bulanci/webs.server";
import { localizeHref } from "$src/lib/paraglide/runtime";
import type { LocalizedString } from "$src/types";
import { compareStrings } from "../maps/mapList";

export const WEBS_PATH = "/projects/bulanci/webs";

/** Localized link to the website's own page */
export const webHref = (web: Pick<BulanciWeb, "id" | "slug">): string =>
    localizeHref(`${WEBS_PATH}/${web.id}-${web.slug}/`);

/** The name the website went by, or its domain if it had none */
export const webName = (web: Pick<BulanciWeb, "domain" | "shownName">): string =>
    web.shownName ?? web.domain;

/** A YYYY-MM-DD date in the given locale, e.g. "15. 2. 2003" or "15 Feb 2003" */
export const formatDate = (date: string, locale: string): string =>
    new Intl.DateTimeFormat(locale === "cs" ? "cs" : "en-GB", {
        day: "numeric",
        month: locale === "cs" ? "numeric" : "short",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));

export const YEAR_SOURCE_LABELS: Record<BulanciWebYear["source"], LocalizedString> = {
    wbm: { cs: "podle Wayback Machine", en: "per the Wayback Machine" },
    web: { cs: "podle údajů na webu", en: "as stated on the site" },
};

export type WebFeatureGroup = {
    label: LocalizedString;
    features: { key: keyof BulanciWebFeatures; label: LocalizedString }[];
};

/** The features in web_metadata.yaml, grouped the same way */
export const WEB_FEATURE_GROUPS: WebFeatureGroup[] = [
    {
        label: { cs: "Převzatý obsah", en: "Borrowed content" },
        features: [
            {
                key: "gameInfo",
                label: { cs: "Oficiální informace o hře", en: "Official game info" },
            },
            { key: "poetry", label: { cs: "Básně ze hry", en: "Poetry from the game" } },
            { key: "history", label: { cs: "Příběh hry", en: "Game lore" } },
            { key: "gameDownload", label: { cs: "Hra ke stažení", en: "Game download" } },
        ],
    },
    {
        label: { cs: "Komunita", en: "Community" },
        features: [
            { key: "clan", label: { cs: "Prezentace klanu", en: "Clan presentation" } },
            { key: "tournaments", label: { cs: "Turnaje", en: "Tournaments" } },
        ],
    },
    {
        label: { cs: "Fanouškovská tvorba", en: "Fan content" },
        features: [
            { key: "manual", label: { cs: "Návod ke hře", en: "Game guide" } },
            { key: "ownMaps", label: { cs: "Vlastní mapy", en: "Own maps" } },
            { key: "othersMaps", label: { cs: "Mapy jiných autorů", en: "Maps by others" } },
        ],
    },
];

/** The first is the default */
export const WEB_VIEWS = ["network", "timeline", "table"] as const;
export type WebView = (typeof WEB_VIEWS)[number];

/** URL parameter value standing for an unknown hosting service */
export const UNKNOWN_HOSTING = "-";

/** What the list of websites needs of each website */
export type BulanciWebListItem = Pick<
    BulanciWebDetails,
    | "id"
    | "slug"
    | "domain"
    | "shownName"
    | "description"
    | "startYear"
    | "endYear"
    | "services"
    | "authors"
    | "mapCount"
    | "screenshot"
>;

/** e.g. "2003–2005", "2003", or "since 2002" for the official website, which is still up */
/** What the years in which a website was active mean */
export const ACTIVE_YEARS_EXPLANATION: LocalizedString = {
    cs: "Léta, ve kterých byl web aktivně upravován a rozšiřován, ne ve kterých byl stále přístupný.",
    en: "The years in which the website was actively updated and expanded, not those in which it was merely still accessible.",
};

export function activeYearsLabel(
    web: Pick<BulanciWebListItem, "startYear" | "endYear">,
): LocalizedString {
    const start = web.startYear.year;
    if (!web.endYear) return { cs: `od ${start}`, en: `since ${start}` };
    const years = start === web.endYear.year ? String(start) : `${start}–${web.endYear.year}`;
    return { cs: years, en: years };
}

const SORT_KEYS = ["year", "name", "maps"] as const;
export type WebSortKey = (typeof SORT_KEYS)[number];
export type WebSort = { key: WebSortKey; desc: boolean };

/** Oldest first, which roughly follows the two periods of fan websites */
export const DEFAULT_WEB_SORT: WebSort = { key: "year", desc: false };

/** Counts are most interesting from the highest, so they're sorted descending first */
export const isDescendingFirst = (key: WebSortKey): boolean => key === "maps";

/** Parses the `sort` URL parameter: the key, prefixed by `-` for descending order */
export function parseWebSort(value: string | null): WebSort {
    const desc = value?.startsWith("-") ?? false;
    const key = SORT_KEYS.find((key) => key === value?.replace(/^-/, ""));
    return key ? { key, desc } : DEFAULT_WEB_SORT;
}

export function formatWebSort(sort: WebSort): string {
    return (sort.desc ? "-" : "") + sort.key;
}

/** Compares websites by the given sort, falling back to their id */
export function compareWebs(a: BulanciWebListItem, b: BulanciWebListItem, sort: WebSort): number {
    const direction = sort.desc ? -1 : 1;
    // Ids roughly follow when the websites were started, and put the official website first
    const byYear = a.startYear.year - b.startYear.year || a.id - b.id;
    switch (sort.key) {
        case "year":
            return direction * byYear;
        case "name":
            return direction * compareStrings(webName(a), webName(b)) || byYear;
        case "maps":
            return direction * (a.mapCount - b.mapCount) || byYear;
    }
}
