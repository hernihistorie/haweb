import type { BulanciWeb, BulanciWebFeatures, BulanciWebYear } from "$src/data/bulanci/webs.server";
import { localizeHref } from "$src/lib/paraglide/runtime";
import type { LocalizedString } from "$src/types";

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
