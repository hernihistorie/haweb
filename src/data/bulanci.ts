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
    srcset: string;
};

export type BulanciMap = {
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

const mapMetadataModules = import.meta.glob<{ default: BulanciMapJSON }>(
    "./bulanci-map-sorter/maps_metadata/*.json",
    { eager: true },
);

const screenshotModules = import.meta.glob<string>(
    ["./bulanci-map-sorter/maps_images/*.png", "!**/*_load.png"],
    { eager: true, query: "?w=400;800&format=webp&as=srcset", import: "default" },
);

const loadingScreenModules = import.meta.glob<string>(
    "./bulanci-map-sorter/maps_images/*_load.png",
    { eager: true, query: "?w=400;800&format=webp&as=srcset", import: "default" },
);

const basename = (path: string): string =>
    path
        .split("/")
        .pop()!
        .replace(/\.[^.]+$/, "");

function imagesByFilename(
    modules: Record<string, string>,
    suffix = "",
): Map<string, BulanciMapImage> {
    return new Map(
        Object.entries(modules).map(([path, srcset]) => [
            basename(path).slice(0, basename(path).length - suffix.length),
            { src: srcset.split(" ")[0], srcset },
        ]),
    );
}

const screenshots = imagesByFilename(screenshotModules);
const loadingScreens = imagesByFilename(loadingScreenModules, "_load");

// fix stray newlines
const normalizeWhitespace = (value: string): string => value.replace(/\s+/g, " ").trim();

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

export const bulanciMaps: BulanciMap[] = [...metadataByFilename]
    .filter(([, metadata]) => metadata.privacy !== "hidden" && !metadata.duplicate_of)
    .map(([filename, metadata]) => ({
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
        ],
        screenshot: screenshots.get(filename) ?? null,
        loadingScreen: loadingScreens.get(filename) ?? null,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "cs"));

export const bulanciMapsByFilename: Record<string, BulanciMap> = Object.fromEntries(
    bulanciMaps.map((map) => [map.filename, map]),
);

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
