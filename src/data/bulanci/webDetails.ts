import { bulanciAuthors } from "./authors";
import { bulanciMaps, byPlaces, type BulanciMap } from "./maps";
import {
    bulanciWebsByDomain,
    bulanciWebsById,
    toWeb,
    webMetadata,
    type BulanciWeb,
    type WebMetadata,
} from "./webs";

/** Everything known about a fan website, for its own page and the list of websites */
export type BulanciWebDetails = Omit<WebMetadata, "referencedIds"> & {
    /** Documented websites this one linked to */
    linksTo: BulanciWeb[];
    /** Documented websites that linked to this one */
    linkedFrom: BulanciWeb[];
    /** Canonical names of the authors and clans who ran the website */
    authors: string[];
    /** Number of maps found on the website */
    mapCount: number;
    /** Number of maps found on the website and nowhere else */
    exclusiveMapCount: number;
    /** Distinct years in which the maps found on the website were published, ascending */
    mapYears: number[];
};

/** Maps found on each documented website by its domain, the most widespread first */
export const bulanciMapsByWeb: Record<string, BulanciMap[]> = {};
for (const map of bulanciMaps) {
    for (const place of map.placesOfOccurrence) {
        if (bulanciWebsByDomain[place]) {
            (bulanciMapsByWeb[place] ??= []).push(map);
        }
    }
}
for (const maps of Object.values(bulanciMapsByWeb)) {
    maps.sort(byPlaces);
}

/** Documented fan websites, ordered by id, which roughly follows when they were started */
export const bulanciWebs: BulanciWebDetails[] = webMetadata
    .map(({ referencedIds, ...web }) => {
        const maps = bulanciMapsByWeb[web.domain] ?? [];
        return {
            ...web,
            linksTo: referencedIds.map((id) => bulanciWebsById.get(id)!),
            linkedFrom: webMetadata
                .filter((other) => other.referencedIds.includes(web.id))
                .map(toWeb),
            authors: bulanciAuthors
                .filter((author) => author.webs.some(({ domain }) => domain === web.domain))
                .map((author) => author.name),
            mapCount: maps.length,
            exclusiveMapCount: maps.filter((map) => map.placesOfOccurrence.length === 1).length,
            mapYears: [
                ...new Set(maps.map((map) => map.year).filter((year) => year !== null)),
            ].sort((a, b) => a - b),
        };
    })
    .sort((a, b) => a.id - b.id);

export const bulanciWebsBySlug: Record<string, BulanciWebDetails> = Object.fromEntries(
    bulanciWebs.map((web) => [web.slug, web]),
);
