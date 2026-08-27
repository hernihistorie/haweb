type BulanciMapJSON = {
    Name: string,
    Year: string,
    Author: string,
    "Places of Occurrences": string[]
}

export type BulanciMap = {
    /** Name of the original .eap file (without the extension) */
    filename: string,
    /** Name shown in the game menu */
    name: string,
    year: number | null,
    author: string | null,
    placesOfOccurrence: string[]
}

const mapMetadataModules = import.meta.glob<{ default: BulanciMapJSON }>(
    './bulanci-map-sorter/maps_metadata/*.json',
    { eager: true }
);

// fix stray newlines
const normalizeWhitespace = (value: string): string => value.replace(/\s+/g, ' ').trim();

export const bulanciMaps: BulanciMap[] =
    Object.entries(mapMetadataModules)
    .map(([path, module]) => {
        const metadata = module.default;
        const filename = path.split('/').pop()!.replace(/\.json$/, '');

        return {
            filename,
            name: normalizeWhitespace(metadata.Name) || filename,
            year: parseInt(metadata.Year, 10) || null,
            author: normalizeWhitespace(metadata.Author) || null,
            placesOfOccurrence: metadata["Places of Occurrences"]
        };
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'cs'));

export const bulanciMapsByFilename: Record<string, BulanciMap> =
    bulanciMaps.reduce(
        (acc, map) => {
            acc[map.filename] = map;
            return acc;
        }, {} as Record<string, BulanciMap>
    );

/** Every place a map was found in sorted by frequency */
export const bulanciMapPlaces: string[] =
    [
        ...bulanciMaps
        .flatMap((map) => map.placesOfOccurrence)
        .reduce((counts, place) => counts.set(place, (counts.get(place) ?? 0) + 1), new Map<string, number>())
    ]
    .sort((a, b) => b[1] - a[1])
    .map(([place]) => place);
