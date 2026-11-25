import { parse } from "yaml";
import { parseWaybackUrl, waybackDate } from "$src/lib/wayback";
import webMetadataRaw from "../bulanci-map-sorter/web_metadata.yaml?raw";
import { bulanciPlaceGroup } from "./places";
import { bulanciSlug } from "./slug";
import { normalizeWhitespace } from "./util";

/**
 * A fan website documented in bulanci-map-sorter/web_metadata.yaml, with just what's needed to
 * link to it. The rest of its metadata is in BulanciWebDetails (webDetails.server.ts).
 */
export type BulanciWeb = {
    /** Shortened URL, as used in places of occurrence */
    domain: string;
    id: number;
    /** Slugified domain, only cosmetic in URLs */
    slug: string;
    shownName: string | null;
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

/** Free webhosting, a blogging platform, or a website builder */
export type BulanciHostingType = "webhosting" | "blog" | "builder";

/** A free hosting service or blogging platform */
export type BulanciWebService = {
    /** As used in web_metadata.yaml */
    key: string;
    name: string;
    type: BulanciHostingType;
};

/** A website's entry in web_metadata.yaml, parsed */
export type WebMetadata = BulanciWeb & {
    /** A Wayback Machine snapshot of the front page */
    canonUrl: string;
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
    /** IDs of the documented websites this one linked to */
    referencedIds: number[];
};

/** Display names and types of the services in web_metadata.yaml */
const webServices: Record<string, Omit<BulanciWebService, "key">> = {
    "blog.cz": { name: "Blog.cz", type: "blog" },
    "Crolink.cz": { name: "Crolink.cz", type: "webhosting" },
    estranky: { name: "eStránky.cz", type: "builder" },
    ic: { name: "IC.cz", type: "webhosting" },
    sblog: { name: "Sblog.cz", type: "blog" },
    sweb: { name: "Sweb.cz", type: "webhosting" },
    webgarden: { name: "Webgarden.cz", type: "builder" },
    webnode: { name: "Webnode", type: "builder" },
    "Webovastranka.sk": { name: "Webovastranka.sk", type: "builder" },
    websnadno: { name: "Websnadno.cz", type: "builder" },
    webzdarma: { name: "Webzdarma", type: "webhosting" },
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
        const snapshot =
            parseWaybackUrl(canonUrl) ??
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
                ? { key, ...webServices[key] }
                : fail(`unknown service '${key}', add it to webServices in webs.server.ts`),
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
            archivedAt: waybackDate(snapshot.timestamp),
            archivedUrl: snapshot.url,
            referencedIds: [...(referenced as Set<number>)].sort((a, b) => a - b),
        };
    });
}

/** Only the fields needed to link to a website */
export const toWeb = ({ domain, id, slug, shownName }: WebMetadata): BulanciWeb => ({
    domain,
    id,
    slug,
    shownName,
});

/** The type of the website's (first) hosting service; null if unknown */
export const hostingType = ({ services }: Pick<WebMetadata, "services">) =>
    services[0]?.type ?? null;

export const webMetadata = parseWebMetadata(webMetadataRaw);

export const bulanciWebsByDomain: Record<string, BulanciWeb> = Object.fromEntries(
    webMetadata.map((web) => [web.domain, toWeb(web)]),
);

export const bulanciWebsById = new Map<number, BulanciWeb>();
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
