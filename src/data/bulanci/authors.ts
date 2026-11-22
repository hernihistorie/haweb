import type { InterviewData, LocalizedString } from "$src/types";
import { data as chovanecInterview } from "$src/routes/interviews/jiri-chovanec/interview";
import { data as kukalInterview } from "$src/routes/interviews/tomas-kukal/interview";
import { data as madejewskyInterview } from "$src/routes/interviews/martin-madejewsky/interview";
import { data as pokornyInterview } from "$src/routes/interviews/jan-pokorny/interview";
import { authorMetadata, visibleAliases, type AuthorMetadata } from "./authorNames";
import { bulanciMaps, byPlaces, type BulanciMap } from "./maps";
import { bulanciSlug } from "./slug";
import { bulanciWebsByDomain, type BulanciWebRef } from "./webs";

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
