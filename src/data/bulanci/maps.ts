import { publicAuthorNames } from "./authorNames";
import { bulanciSlug } from "./slug";
import { basename, normalizeName, normalizeWhitespace } from "./util";

/** Metadata for a single map as stored in bulanci-map-sorter/maps_metadata/*.json */
type BulanciMapJSON = {
    guid: string;
    name: string;
    privacy: "visible" | "hidden";
    nsfw: boolean;
    /** Usually a number, but may be a string, or "" when unknown */
    year: number | string;
    description: string;
    description_source: string;
    description_note?: string;
    author: string[];
    author_eap: string;
    music: string;
    places_of_occurrences: string[];
    /** Filename of the original map if this is a visual duplicate of it */
    duplicate_of?: string;
};

export type BulanciMapImage = {
    /** Fallback (smallest) URL */
    src: string;
    /** Largest URL, at the original 800×600 resolution */
    large: string;
    srcset: string;
};

export type BulanciMap = {
    /** First 8 hex digits of the GUID, lowercase. Identifies the map in URLs. */
    id: string;
    /** Slugified name, only cosmetic in URLs */
    slug: string;
    /** Name of the original .eap file (without the extension) */
    filename: string;
    /** Name shown in the game menu */
    name: string;
    year: number | null;
    /** Empty if the author is unknown */
    authors: string[];
    music: string | null;
    description: string | null;
    nsfw: boolean;
    placesOfOccurrence: string[];
    /** In-game screenshot. The bottom part contains the game's HUD. */
    screenshot: BulanciMapImage | null;
    /** Loading screen shown before the map starts */
    loadingScreen: BulanciMapImage | null;
};

/** Extra metadata only shown on the map's own page */
export type BulanciMapDetails = BulanciMap & {
    guid: string;
    /**
     * Author name stored in the .eap file, if it differs from the curated `authors`
     * and is known to be public
     */
    authorEap: string | null;
    /** Where the year and description were found: a URL without the scheme, a place, or a note */
    descriptionSource: string | null;
    /** Curator's note on the year or description, in Czech */
    descriptionNote: string | null;
    /** Visual duplicates of this map that were merged into it */
    duplicates: { filename: string; guid: string }[];
};

const mapMetadataModules = import.meta.glob<{ default: BulanciMapJSON }>(
    "../bulanci-map-sorter/maps_metadata/*.json",
    { eager: true },
);

const screenshotModules = import.meta.glob<string>(
    ["../bulanci-map-sorter/maps_images/*.png", "!**/*_load.png"],
    { eager: true, query: "?w=400;800&format=webp&as=srcset", import: "default" },
);

const loadingScreenModules = import.meta.glob<string>(
    "../bulanci-map-sorter/maps_images/*_load.png",
    { eager: true, query: "?w=400;800&format=webp&as=srcset", import: "default" },
);

function imagesByFilename(
    modules: Record<string, string>,
    suffix = "",
): Map<string, BulanciMapImage> {
    return new Map(
        Object.entries(modules).map(([path, srcset]) => [
            basename(path).slice(0, basename(path).length - suffix.length),
            {
                src: srcset.split(" ")[0],
                large: srcset.split(", ").at(-1)!.split(" ")[0],
                srcset,
            },
        ]),
    );
}

const screenshots = imagesByFilename(screenshotModules);
const loadingScreens = imagesByFilename(loadingScreenModules, "_load");

const metadataByFilename = new Map(
    Object.entries(mapMetadataModules).map(([path, module]) => [basename(path), module.default]),
);

/** Places of occurrence of duplicates, merged into the original map */
const duplicatePlaces = new Map<string, string[]>();
for (const metadata of metadataByFilename.values()) {
    if (metadata.duplicate_of) {
        duplicatePlaces.set(metadata.duplicate_of, [
            ...(duplicatePlaces.get(metadata.duplicate_of) ?? []),
            ...metadata.places_of_occurrences,
        ]);
    }
}

/** 32-bit FNV-1a hash as 8 hex digits */
function hash(value: string): string {
    let h = 0x811c9dc5;
    for (const char of value) {
        h = Math.imul(h ^ char.codePointAt(0)!, 0x01000193);
    }
    return (h >>> 0).toString(16).padStart(8, "0");
}

/** A few maps have no GUID, so they're identified by a hash of their filename instead */
const mapId = (filename: string, guid: string): string =>
    (guid ? guid.slice(0, 8) : hash(filename)).toLowerCase();

export const bulanciMaps: BulanciMap[] = [...metadataByFilename]
    .filter(([, metadata]) => metadata.privacy !== "hidden" && !metadata.duplicate_of)
    .map(([filename, metadata]) => ({
        id: mapId(filename, metadata.guid),
        slug: bulanciSlug(metadata.name) || bulanciSlug(filename) || "map",
        filename,
        name: normalizeWhitespace(metadata.name) || filename,
        year: parseInt(String(metadata.year), 10) || null,
        authors: metadata.author.map(normalizeWhitespace).filter(Boolean),
        music: normalizeWhitespace(metadata.music) || null,
        description: normalizeWhitespace(metadata.description) || null,
        nsfw: metadata.nsfw,
        placesOfOccurrence: [
            ...new Set([
                ...metadata.places_of_occurrences,
                ...(duplicatePlaces.get(filename) ?? []),
            ]),
        ].filter(Boolean),
        screenshot: screenshots.get(filename) ?? null,
        loadingScreen: loadingScreens.get(filename) ?? null,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "cs"));

export const bulanciMapsByFilename: Record<string, BulanciMap> = Object.fromEntries(
    bulanciMaps.map((map) => [map.filename, map]),
);

export const bulanciMapsById: Record<string, BulanciMap> = Object.fromEntries(
    bulanciMaps.map((map) => [map.id, map]),
);

/** Duplicates merged into each original map */
const duplicatesByFilename = new Map<string, { filename: string; guid: string }[]>();
for (const [filename, metadata] of metadataByFilename) {
    if (metadata.duplicate_of) {
        duplicatesByFilename.set(metadata.duplicate_of, [
            ...(duplicatesByFilename.get(metadata.duplicate_of) ?? []),
            { filename, guid: metadata.guid },
        ]);
    }
}

/** A note may just name another map's metadata file whose note applies too */
function resolveNote(note: string | undefined): string | null {
    const normalized = normalizeWhitespace(note ?? "");
    if (normalized.endsWith(".json")) {
        return resolveNote(metadataByFilename.get(basename(normalized))?.description_note);
    }
    return normalized || null;
}

export function getBulanciMapDetails(map: BulanciMap): BulanciMapDetails {
    const metadata = metadataByFilename.get(map.filename)!;
    const authorEap = normalizeWhitespace(metadata.author_eap);
    const showAuthorEap =
        authorEap &&
        publicAuthorNames.has(normalizeName(authorEap)) &&
        !map.authors.some((author) => normalizeName(author) === normalizeName(authorEap));
    return {
        ...map,
        guid: metadata.guid,
        authorEap: showAuthorEap ? authorEap : null,
        descriptionSource: normalizeWhitespace(metadata.description_source) || null,
        descriptionNote: resolveNote(metadata.description_note),
        duplicates: duplicatesByFilename.get(map.filename) ?? [],
    };
}

/** Every place a map was found in sorted by frequency */
export const bulanciMapPlaces: string[] = [
    ...bulanciMaps
        .flatMap((map) => map.placesOfOccurrence)
        .reduce(
            (counts, place) => counts.set(place, (counts.get(place) ?? 0) + 1),
            new Map<string, number>(),
        ),
]
    .sort((a, b) => b[1] - a[1])
    .map(([place]) => place);

/** Sorts maps by the number of places they were found in, the most widespread first */
export const byPlaces = (a: BulanciMap, b: BulanciMap): number =>
    b.placesOfOccurrence.length - a.placesOfOccurrence.length || a.name.localeCompare(b.name, "cs");
