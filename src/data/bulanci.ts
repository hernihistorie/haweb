import { parse } from "yaml";
import type { InterviewData, LocalizedString } from "$src/types";
import { data as chovanecInterview } from "$src/routes/interviews/jiri-chovanec/interview";
import { data as kukalInterview } from "$src/routes/interviews/tomas-kukal/interview";
import { data as madejewskyInterview } from "$src/routes/interviews/martin-madejewsky/interview";
import { data as pokornyInterview } from "$src/routes/interviews/jan-pokorny/interview";
import webMetadataRaw from "./bulanci-map-sorter/web_metadata.yaml?raw";
import authorMetadataRaw from "./bulanci-map-sorter/authors_metadata.yaml?raw";
import { bulanciPlaceGroup } from "./bulanciPlaces";
import { bulanciSlug } from "./bulanciSlug";

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

/** A fan website documented in bulanci-map-sorter/web_metadata.yaml */
export type BulanciWeb = {
    /** Shortened URL, as used in places of occurrence */
    domain: string;
    id: number;
    shownName: string | null;
    /** Usually a Wayback Machine snapshot */
    canonUrl: string | null;
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

/** An author's entry in authors_metadata.yaml, parsed */
type AuthorMetadata = {
    name: string;
    isClan: boolean;
    descriptionCs: string | null;
    descriptionEn: string | null;
    /** Names of the clans the author was a member of */
    clans: string[];
    webs: string[];
    aliases: { alias: string; visible: boolean }[];
};

/**
 * authors_metadata.yaml maps each canonical author name to null, or to a list of single-key
 * objects (`description_cs`, `description_en`, `clan`, `web`), plus `{ alias, visible }` for
 * other names they used. Anything else is a mistake in the data, so it fails the build.
 */
function parseAuthorMetadata(raw: string): AuthorMetadata[] {
    const yaml = parse(raw) as Record<string, unknown>;
    return Object.entries(yaml).map(([name, entries]) => {
        const fail = (message: string): never => {
            throw new Error(`authors_metadata.yaml: ${name}: ${message}`);
        };
        const author: AuthorMetadata = {
            name,
            isClan: false,
            descriptionCs: null,
            descriptionEn: null,
            clans: [],
            webs: [],
            aliases: [],
        };
        if (entries === null) {
            return author;
        }
        if (!Array.isArray(entries)) {
            return fail(`expected a list or null, got ${JSON.stringify(entries)}`);
        }
        for (const entry of entries as Record<string, unknown>[]) {
            const keys = Object.keys(entry ?? {}).sort().join(",");
            const value = entry?.[Object.keys(entry ?? {})[0]];
            if (keys === "alias,visible") {
                if (typeof entry.visible !== "boolean") fail(`'visible' isn't a boolean`);
                author.aliases.push({
                    alias: normalizeWhitespace(String(entry.alias)),
                    visible: entry.visible as boolean,
                });
            } else if (keys === "clan" && value === true) {
                author.isClan = true;
            } else if (keys === "clan" && typeof value === "string") {
                author.clans.push(value);
            } else if (keys === "web" && typeof value === "string") {
                author.webs.push(value);
            } else if (keys === "description_cs" && typeof value === "string") {
                author.descriptionCs = normalizeWhitespace(value);
            } else if (keys === "description_en" && typeof value === "string") {
                author.descriptionEn = normalizeWhitespace(value);
            } else {
                fail(`unexpected entry ${JSON.stringify(entry)}`);
            }
        }
        return author;
    });
}

const authorMetadata = parseAuthorMetadata(authorMetadataRaw);

const normalizeName = (value: string): string => normalizeWhitespace(value).toLocaleLowerCase("cs");

const authorAliases = authorMetadata.flatMap((author) => author.aliases);

/** Aliases the curators chose not to show, as they may be real names */
const hiddenAuthorNames = new Set(
    authorAliases.filter((entry) => !entry.visible).map((entry) => normalizeName(entry.alias)),
);

/**
 * Author names that may be shown publicly: canonical names and aliases marked as visible,
 * unless the same name is also a hidden alias. Unlisted names haven't been reviewed.
 */
const publicAuthorNames = new Set(
    [
        ...authorMetadata.map((author) => normalizeName(author.name)),
        ...authorAliases.filter((entry) => entry.visible).map((entry) => normalizeName(entry.alias)),
    ].filter((name) => !hiddenAuthorNames.has(name)),
);

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

/**
 * web_metadata.yaml maps each web's domain to a list of single-key objects
 * (some of which carry an extra `source` key)
 */
const websYaml = parse(webMetadataRaw) as Record<string, Record<string, unknown>[]>;

export const bulanciWebsByDomain: Record<string, BulanciWeb> = Object.fromEntries(
    Object.entries(websYaml).map(([domain, entries]) => {
        const fields = Object.assign({}, ...entries) as Record<string, unknown>;
        return [
            domain,
            {
                domain,
                id: fields.id as number,
                shownName: (fields["shown-name"] as string | null) ?? null,
                canonUrl: (fields.canon_url as string | null) ?? null,
            },
        ];
    }),
);

export type BulanciPlace =
    /** A website; `web` is set if it's documented */
    | { kind: "web"; domain: string; web: BulanciWeb | null }
    /** Uploads to a cloud storage service, grouped */
    | { kind: "storage"; service: string; count: number };

/** Resolves places of occurrence: documented webs first, then other webs, then cloud storage */
export function resolveBulanciPlaces(places: string[]): BulanciPlace[] {
    const documentedWebs: BulanciPlace[] = [];
    const otherWebs: BulanciPlace[] = [];
    const storageCounts = new Map<string, number>();
    for (const place of places) {
        const group = bulanciPlaceGroup(place);
        if (group.storage) {
            storageCounts.set(group.name, (storageCounts.get(group.name) ?? 0) + 1);
        } else if (bulanciWebsByDomain[place]) {
            documentedWebs.push({ kind: "web", domain: place, web: bulanciWebsByDomain[place] });
        } else if (place) {
            otherWebs.push({ kind: "web", domain: place, web: null });
        }
    }
    return [
        ...documentedWebs,
        ...otherWebs,
        ...[...storageCounts].map(([service, count]) => ({
            kind: "storage" as const,
            service,
            count,
        })),
    ];
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

/** A map as shown in an author's mosaic */
export type BulanciMapThumbnail = Pick<BulanciMap, "id" | "slug" | "name" | "screenshot">;

export type BulanciAuthorInterview = {
    slug: string;
    title: LocalizedString;
    /** The narrator's real name */
    name: string;
    photo: string | null;
};

export type BulanciAuthorWeb = {
    domain: string;
    shownName: string | null;
    /** Archived version: the documented one, or a Wayback Machine snapshot from around 2010 */
    url: string;
};

/** A map author or a collective (clan) from authors_metadata.yaml */
export type BulanciAuthor = {
    /** Canonical name, as used in maps' `authors` */
    name: string;
    slug: string;
    isClan: boolean;
    /** Other names the author used that may be shown publicly */
    aliases: string[];
    /** May contain <i> tags */
    description: LocalizedString | null;
    /** Websites the author ran */
    webs: BulanciAuthorWeb[];
    /** Names of the clans the author was a member of */
    clans: string[];
    /** Names of a clan's members; empty for people */
    members: string[];
    mapCount: number;
    /** Distinct years in which the author's maps were published, ascending */
    mapYears: number[];
    /** Number of distinct places where any of the author's maps was found */
    reach: number;
    /** A few of the most widespread maps that have a screenshot and are safe for work */
    topMaps: BulanciMapThumbnail[];
    interview: BulanciAuthorInterview | null;
};

/** Authors we have interviewed, by their canonical name */
const authorInterviews: Record<string, InterviewData> = {
    Cronos: chovanecInterview,
    JP3035: pokornyInterview,
    Made: madejewskyInterview,
    "Tomáš Kukal": kukalInterview,
};

const AUTHOR_TOP_MAPS_LIMIT = 4;

const byPlaces = (a: BulanciMap, b: BulanciMap): number =>
    b.placesOfOccurrence.length - a.placesOfOccurrence.length || a.name.localeCompare(b.name, "cs");

/** Maps of each author by the author's canonical name, the most widespread first */
export const bulanciMapsByAuthor: Record<string, BulanciMap[]> = {};
for (const map of bulanciMaps) {
    for (const author of map.authors) {
        (bulanciMapsByAuthor[author] ??= []).push(map);
    }
}
for (const maps of Object.values(bulanciMapsByAuthor)) {
    maps.sort(byPlaces);
}

function localizedDescription(author: AuthorMetadata): LocalizedString | null {
    const { descriptionCs: cs, descriptionEn: en } = author;
    if (cs && en) return { cs, en };
    if (cs) return { cs };
    if (en) return { en };
    return authorInterviews[author.name]?.narrator.bio ?? null;
}

function visibleAliases(author: AuthorMetadata): string[] {
    const seen = new Set([normalizeName(author.name)]);
    return author.aliases
        .filter(({ alias, visible }) => visible && !hiddenAuthorNames.has(normalizeName(alias)))
        .map(({ alias }) => alias)
        .filter((alias) => !seen.has(normalizeName(alias)) && seen.add(normalizeName(alias)));
}

function toAuthor(author: AuthorMetadata): BulanciAuthor {
    const maps = bulanciMapsByAuthor[author.name] ?? [];
    const interview = authorInterviews[author.name];
    return {
        name: author.name,
        slug: bulanciSlug(author.name),
        isClan: author.isClan,
        aliases: visibleAliases(author),
        description: localizedDescription(author),
        webs: author.webs.map((domain) => ({
            domain,
            shownName: bulanciWebsByDomain[domain]?.shownName ?? null,
            url:
                bulanciWebsByDomain[domain]?.canonUrl ??
                `https://web.archive.org/web/2010/http://${domain}`,
        })),
        clans: author.clans,
        members: authorMetadata
            .filter((member) => member.clans.includes(author.name))
            .map((member) => member.name),
        mapCount: maps.length,
        mapYears: [...new Set(maps.map((map) => map.year).filter((year) => year !== null))].sort(
            (a, b) => a - b,
        ),
        reach: new Set(maps.flatMap((map) => map.placesOfOccurrence)).size,
        topMaps: maps
            .filter((map) => map.screenshot && !map.nsfw)
            .slice(0, AUTHOR_TOP_MAPS_LIMIT)
            .map(({ id, slug, name, screenshot }) => ({ id, slug, name, screenshot })),
        interview: interview
            ? {
                  slug: interview.slug,
                  title: interview.title,
                  name: interview.narrator.name,
                  photo: interview.narrator.photo?.url ?? null,
              }
            : null,
    };
}

export const bulanciAuthors: BulanciAuthor[] = authorMetadata
    .map(toAuthor)
    .sort((a, b) => a.name.localeCompare(b.name, "cs"));

export const bulanciAuthorsBySlug: Record<string, BulanciAuthor> = {};
export const bulanciAuthorsByName: Record<string, BulanciAuthor> = {};
for (const author of bulanciAuthors) {
    if (!author.slug) {
        throw new Error(`authors_metadata.yaml: ${author.name}: the name has no usable slug`);
    }
    const other = bulanciAuthorsBySlug[author.slug];
    if (other) {
        throw new Error(
            `authors_metadata.yaml: ${other.name} and ${author.name} have the same slug '${author.slug}'`,
        );
    }
    bulanciAuthorsBySlug[author.slug] = author;
    bulanciAuthorsByName[author.name] = author;
}

for (const author of bulanciAuthors) {
    for (const clan of author.clans) {
        if (!bulanciAuthorsByName[clan]?.isClan) {
            throw new Error(`authors_metadata.yaml: ${author.name}: '${clan}' isn't a clan`);
        }
    }
}

for (const map of bulanciMaps) {
    for (const author of map.authors) {
        if (!bulanciAuthorsByName[author]) {
            throw new Error(
                `${map.filename}.json: the author '${author}' is missing from authors_metadata.yaml`,
            );
        }
    }
}

for (const name of Object.keys(authorInterviews)) {
    if (!bulanciAuthorsByName[name]) {
        throw new Error(`The interviewed author '${name}' is missing from authors_metadata.yaml`);
    }
}
