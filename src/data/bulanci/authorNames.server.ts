/**
 * Parses authors_metadata.yaml and decides which author names may be shown. Kept apart from
 * authors.server.ts, which needs the maps, so that maps.server.ts can use it too.
 */
import { parse } from "yaml";
import authorMetadataRaw from "../bulanci-map-sorter/authors_metadata.yaml?raw";
import { normalizeName, normalizeWhitespace } from "./util";

/** An author's entry in authors_metadata.yaml, parsed */
export type AuthorMetadata = {
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

export const authorMetadata = parseAuthorMetadata(authorMetadataRaw);

const authorAliases = authorMetadata.flatMap((author) => author.aliases);

/** Aliases the curators chose not to show, as they may be real names */
const hiddenAuthorNames = new Set(
    authorAliases.filter((entry) => !entry.visible).map((entry) => normalizeName(entry.alias)),
);

/**
 * Author names that may be shown publicly: canonical names and aliases marked as visible,
 * unless the same name is also a hidden alias. Unlisted names haven't been reviewed.
 * Compared after normalizeName.
 */
export const publicAuthorNames = new Set(
    [
        ...authorMetadata.map((author) => normalizeName(author.name)),
        ...authorAliases
            .filter((entry) => entry.visible)
            .map((entry) => normalizeName(entry.alias)),
    ].filter((name) => !hiddenAuthorNames.has(name)),
);

export function visibleAliases(author: AuthorMetadata): string[] {
    const seen = new Set([normalizeName(author.name)]);
    return author.aliases
        .filter(({ alias, visible }) => visible && !hiddenAuthorNames.has(normalizeName(alias)))
        .map(({ alias }) => alias)
        .filter((alias) => !seen.has(normalizeName(alias)) && seen.add(normalizeName(alias)));
}
