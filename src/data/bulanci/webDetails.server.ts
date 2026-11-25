import { bulanciAuthors } from "./authors.server";
import { groupMaps, imagesByFilename, mapYears, type BulanciMapImage } from "./maps.server";
import {
    bulanciWebsByDomain,
    hostingType,
    toWeb,
    webMetadata,
    type BulanciHostingType,
    type BulanciWeb,
    type WebMetadata,
} from "./webs.server";

/** A website linked to or from another one */
export type BulanciLinkedWeb = BulanciWeb & { hostingType: BulanciHostingType | null };

/** Everything known about a fan website, for its own page and the list of websites */
export type BulanciWebDetails = Omit<WebMetadata, "referencedIds"> & {
    /** Documented websites this one linked to */
    linksTo: BulanciLinkedWeb[];
    /** Documented websites that linked to this one */
    linkedFrom: BulanciLinkedWeb[];
    /** Canonical names of the authors and clans who ran the website */
    authors: string[];
    /** Number of maps found on the website */
    mapCount: number;
    /** Number of maps found on the website and nowhere else */
    exclusiveMapCount: number;
    /** Distinct years in which the maps found on the website were published, ascending */
    mapYears: number[];
    /** 800×600 screenshot of the archived front page (`canonUrl`) */
    screenshot: BulanciMapImage | null;
};

const screenshotModules = import.meta.glob<string>("../bulanci-map-sorter/web_images/*.png", {
    eager: true,
    query: "?w=400;800&format=webp&as=srcset",
    import: "default",
});

const screenshots = imagesByFilename(screenshotModules);

/** A hand-made screenshot (`{id}_manual.png`) takes precedence over the automatic one */
const webScreenshot = (id: number): BulanciMapImage | null =>
    screenshots.get(`${id}_manual`) ?? screenshots.get(String(id)) ?? null;

const toLinkedWeb = (web: WebMetadata): BulanciLinkedWeb => ({
    ...toWeb(web),
    hostingType: hostingType(web),
});

/** Maps found on each documented website by its domain, the most widespread first */
export const bulanciMapsByWeb = groupMaps((map) =>
    map.placesOfOccurrence.filter((place) => bulanciWebsByDomain[place]),
);

/** Documented fan websites, ordered by id, which roughly follows when they were started */
export const bulanciWebs: BulanciWebDetails[] = webMetadata
    .map(({ referencedIds, ...web }) => {
        const maps = bulanciMapsByWeb[web.domain] ?? [];
        return {
            ...web,
            linksTo: webMetadata
                .filter((other) => referencedIds.includes(other.id))
                .map(toLinkedWeb)
                .sort((a, b) => a.id - b.id),
            linkedFrom: webMetadata
                .filter((other) => other.referencedIds.includes(web.id))
                .map(toLinkedWeb)
                .sort((a, b) => a.id - b.id),
            authors: bulanciAuthors
                .filter((author) => author.webs.some(({ domain }) => domain === web.domain))
                .map((author) => author.name),
            mapCount: maps.length,
            exclusiveMapCount: maps.filter((map) => map.placesOfOccurrence.length === 1).length,
            mapYears: mapYears(maps),
            screenshot: webScreenshot(web.id),
        };
    })
    .sort((a, b) => a.id - b.id);

/** By id, as a string, the way it appears in URLs */
export const bulanciWebDetailsById: Record<string, BulanciWebDetails> = Object.fromEntries(
    bulanciWebs.map((web) => [String(web.id), web]),
);
