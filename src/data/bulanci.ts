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

/**
 * A fan website documented in bulanci-map-sorter/web_metadata.yaml, with just what's needed to
 * link to it. The rest of its metadata is in BulanciWebDetails.
 */
export type BulanciWeb = {
    /** Shortened URL, as used in places of occurrence */
    domain: string;
    id: number;
    /** Slugified domain, only cosmetic in URLs */
    slug: string;
    shownName: string | null;
    /** A Wayback Machine snapshot */
    canonUrl: string;
};

/** A year of the website's activity and where it was found */
export type BulanciWebYear = {
    year: number;
    /** `wbm` if the year was found on the Wayback Machine, `web` if on the website itself */
    source: "wbm" | "web";
};

/** `null` means unknown */
type Flag = boolean | null;

/** What the website offered, as assessed by the curators */
export type BulanciWebFeatures = {
    /** Official information about the game from bulanci.cz */
    gameInfo: Flag;
    /** Poetry from the game */
    poetry: Flag;
    /** Official lore texts from the game */
    history: Flag;
    /** The game could be downloaded */
    gameDownload: Flag;
    /** The website presented a clan */
    clan: Flag;
    /** The website organized or presented tournaments */
    tournaments: Flag;
    /** A manual or guide to the game */
    manual: Flag;
    /** Maps made by the website's authors */
    ownMaps: Flag;
    /** Maps made by others */
    othersMaps: Flag;
};

/** A free hosting service or blogging platform */
export type BulanciWebService = {
    /** As used in web_metadata.yaml */
    key: string;
    name: string;
};

/** Everything known about a fan website, for its own page and the list of websites */
export type BulanciWebDetails = BulanciWeb & {
    /** May contain <i> tags */
    description: { cs: string; en: string };
    /** First known year of activity */
    startYear: BulanciWebYear;
    /** Last known year of activity; null for the official website */
    endYear: BulanciWebYear | null;
    /** Usually one; empty if unknown */
    services: BulanciWebService[];
    /** Null for the official website, which wasn't assessed */
    features: BulanciWebFeatures | null;
    /** When `canonUrl` was captured, as YYYY-MM-DD */
    archivedAt: string;
    /** The original URL of the page in `canonUrl` */
    archivedUrl: string;
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

/** Display names of the services in web_metadata.yaml */
const webServices: Record<string, string> = {
    "blog.cz": "Blog.cz",
    "Crolink.cz": "Crolink.cz",
    estranky: "eStránky.cz",
    ic: "IC.cz",
    sblog: "Sblog.cz",
    sweb: "Sweb.cz",
    webgarden: "Webgarden.cz",
    webnode: "Webnode",
    "Webovastranka.sk": "Webovastranka.sk",
    websnadno: "Websnadno.cz",
    webzdarma: "Webzdarma",
};

/** Keys of the feature groups in web_metadata.yaml and of the features within them */
const webFeatureGroups: Record<string, Record<string, keyof BulanciWebFeatures>> = {
    "borrowed-info": {
        "game-info": "gameInfo",
        poetry: "poetry",
        history: "history",
        "game-download": "gameDownload",
    },
    community: { clan: "clan", tournaments: "tournaments" },
    "user-generated-content": {
        manual: "manual",
        "own-levels": "ownMaps",
        "levels-of-other": "othersMaps",
    },
};

const requiredWebFields = [
    "id",
    "shown-name",
    "canon_url",
    "description_cs",
    "description_en",
    "startYear",
    "referenced-web",
];
const optionalWebFields = ["endYear", "service", ...Object.keys(webFeatureGroups)];

/** A Wayback Machine snapshot: its timestamp and the original URL */
const WAYBACK_URL = /^https:\/\/web\.archive\.org\/web\/(\d{4})(\d\d)(\d\d)\d{6}\/(https?:\/\/.+)$/;

/**
 * Keeps the dots of the domain, which slugify would drop, and turns slashes into dashes:
 * `sweb.cz/pisinger` becomes `sweb.cz-pisinger`
 */
const webSlug = (domain: string): string =>
    domain
        .split("/")
        .filter(Boolean)
        .map((segment) => segment.split(".").map(bulanciSlug).filter(Boolean).join("."))
        .join("-");

/** A website's entry in web_metadata.yaml, parsed */
type WebMetadata = Omit<
    BulanciWebDetails,
    "linksTo" | "linkedFrom" | "authors" | "mapCount" | "exclusiveMapCount" | "mapYears"
> & { referencedIds: number[] };

/**
 * web_metadata.yaml maps each website's domain to a list of single-key objects, except for
 * `startYear` and `endYear`, which come with a `source`. Feature groups are lists of single-key
 * objects too. Anything else is a mistake in the data, so it fails the build.
 */
function parseWebMetadata(raw: string): WebMetadata[] {
    const yaml = parse(raw) as Record<string, unknown>;
    return Object.entries(yaml).map(([domain, entries]) => {
        const fail = (message: string): never => {
            throw new Error(`web_metadata.yaml: ${domain}: ${message}`);
        };
        if (!Array.isArray(entries)) {
            return fail(`expected a list, got ${JSON.stringify(entries)}`);
        }

        const fields = new Map<string, Record<string, unknown>>();
        for (const entry of entries as Record<string, unknown>[]) {
            const keys = Object.keys(entry ?? {});
            const key = keys.find((k) => k !== "source") ?? fail(`empty entry`);
            const expected = key === "startYear" || key === "endYear" ? [key, "source"] : [key];
            if (keys.sort().join() !== expected.sort().join()) {
                fail(`unexpected entry ${JSON.stringify(entry)}`);
            }
            if (![...requiredWebFields, ...optionalWebFields].includes(key)) {
                fail(`unknown field '${key}'`);
            }
            if (fields.has(key)) fail(`'${key}' is given twice`);
            fields.set(key, entry);
        }
        for (const key of requiredWebFields) {
            if (!fields.has(key)) fail(`'${key}' is missing`);
        }
        const value = (key: string): unknown => fields.get(key)?.[key];

        const string = (key: string): string => {
            const v = value(key);
            return typeof v === "string" && v.trim()
                ? normalizeWhitespace(v)
                : fail(`'${key}' isn't a string`);
        };

        const year = (key: string): BulanciWebYear | null => {
            const entry = fields.get(key);
            if (!entry) return null;
            if (!Number.isInteger(entry[key])) fail(`'${key}' isn't a year`);
            if (entry.source !== "wbm" && entry.source !== "web") {
                fail(`the source of '${key}' isn't 'wbm' or 'web'`);
            }
            return { year: entry[key] as number, source: entry.source as "wbm" | "web" };
        };

        const id = value("id");
        if (!Number.isInteger(id)) fail(`'id' isn't a number`);

        const shownName = value("shown-name");
        if (shownName !== null && typeof shownName !== "string") {
            fail(`'shown-name' isn't a string or null`);
        }

        const canonUrl = string("canon_url");
        const wayback =
            WAYBACK_URL.exec(canonUrl) ??
            fail(`'canon_url' isn't a Wayback Machine snapshot with a timestamp: ${canonUrl}`);

        const startYear = year("startYear")!;
        const endYear = year("endYear");
        if (endYear && endYear.year < startYear.year) fail(`'endYear' is before 'startYear'`);

        const service = value("service") ?? null;
        const serviceKeys =
            service === null
                ? []
                : typeof service === "string"
                  ? [service]
                  : service instanceof Set
                    ? [...service]
                    : fail(`'service' isn't a string, a set or null`);
        const services = serviceKeys.map((key) =>
            key in webServices
                ? { key, name: webServices[key] }
                : fail(`unknown service '${key}', add it to webServices in bulanci.ts`),
        );

        const referenced = value("referenced-web");
        if (!(referenced instanceof Set) || ![...referenced].every(Number.isInteger)) {
            fail(`'referenced-web' isn't a set of IDs`);
        }

        const groups = Object.keys(webFeatureGroups).filter((group) => fields.has(group));
        let features: BulanciWebFeatures | null = null;
        if (groups.length === Object.keys(webFeatureGroups).length) {
            features = {} as BulanciWebFeatures;
            for (const [group, names] of Object.entries(webFeatureGroups)) {
                const list = value(group);
                if (!Array.isArray(list)) fail(`'${group}' isn't a list`);
                const flags = Object.assign({}, ...(list as object[])) as Record<string, unknown>;
                const keys = Object.keys(flags);
                if (
                    (list as object[]).some((entry) => Object.keys(entry ?? {}).length !== 1) ||
                    keys.length !== Object.keys(names).length ||
                    !keys.every((key) => key in names)
                ) {
                    fail(`'${group}' must list exactly ${Object.keys(names).join(", ")}`);
                }
                for (const [key, name] of Object.entries(names)) {
                    const flag = flags[key];
                    if (flag !== true && flag !== false && flag !== null) {
                        fail(`'${group}.${key}' isn't true, false or null`);
                    }
                    features[name] = flag as Flag;
                }
            }
        } else if (groups.length) {
            fail(`either all or none of ${Object.keys(webFeatureGroups).join(", ")} must be given`);
        }

        return {
            domain,
            id: id as number,
            slug: webSlug(domain),
            shownName: shownName as string | null,
            canonUrl,
            description: { cs: string("description_cs"), en: string("description_en") },
            startYear,
            endYear,
            services,
            features,
            archivedAt: `${wayback[1]}-${wayback[2]}-${wayback[3]}`,
            archivedUrl: wayback[4],
            referencedIds: [...(referenced as Set<number>)].sort((a, b) => a - b),
        };
    });
}

/** Only the fields needed to link to a website */
const toWeb = ({ domain, id, slug, shownName, canonUrl }: WebMetadata): BulanciWeb => ({
    domain,
    id,
    slug,
    shownName,
    canonUrl,
});

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
            const keys = Object.keys(entry ?? {})
                .sort()
                .join(",");
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
        ...authorAliases
            .filter((entry) => entry.visible)
            .map((entry) => normalizeName(entry.alias)),
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

const webMetadata = parseWebMetadata(webMetadataRaw);

export const bulanciWebsByDomain: Record<string, BulanciWeb> = Object.fromEntries(
    webMetadata.map((web) => [web.domain, toWeb(web)]),
);

const bulanciWebsById = new Map<number, BulanciWeb>();
const webSlugs = new Map<string, string>();
for (const web of webMetadata) {
    const other = bulanciWebsById.get(web.id);
    if (other) {
        throw new Error(`web_metadata.yaml: ${other.domain} and ${web.domain} have the same id`);
    }
    if (!web.slug) {
        throw new Error(`web_metadata.yaml: ${web.domain}: the domain has no usable slug`);
    }
    if (webSlugs.has(web.slug)) {
        throw new Error(
            `web_metadata.yaml: ${webSlugs.get(web.slug)} and ${web.domain} have the same slug '${web.slug}'`,
        );
    }
    bulanciWebsById.set(web.id, toWeb(web));
    webSlugs.set(web.slug, web.domain);
}

for (const web of webMetadata) {
    for (const id of web.referencedIds) {
        if (!bulanciWebsById.has(id) || id === web.id) {
            throw new Error(
                `web_metadata.yaml: ${web.domain}: 'referenced-web' contains ${id === web.id ? "its own" : "an unknown"} id ${id}`,
            );
        }
    }
}

/** A website by its domain; `web` is set if it's documented */
export type BulanciWebRef = { domain: string; web: BulanciWeb | null };

export type BulanciPlace =
    | ({ kind: "web" } & BulanciWebRef)
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
    webs: BulanciWebRef[];
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
        webs: author.webs.map((domain) => {
            const web = bulanciWebsByDomain[domain];
            if (!web) {
                throw new Error(
                    `authors_metadata.yaml: ${author.name}: the web '${domain}' is missing from web_metadata.yaml`,
                );
            }
            return { domain, web };
        }),
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
