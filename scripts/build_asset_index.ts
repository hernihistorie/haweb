#!/usr/bin/env node
/**
 * Builds the Pagefind index of the collection from rhinventory's public data.  It's separate
 * from the index of the website so that it can be rebuilt without deploying the website.
 *
 * Usage:
 *   npm run build:asset-index
 *
 * Environment variables:
 *   INVENTORY_ORIGIN  rhinventory to index, e.g. http://127.0.0.1:5000 for a local one
 *   ASSET_INDEX_DIR   where to keep the index, served by src/routes/pagefind-assets
 */

import { mkdir, readdir, rename, rm, symlink, writeFile } from "fs/promises";
import { join, resolve } from "path";
import * as pagefind from "pagefind";

const INVENTORY_ORIGIN = process.env.INVENTORY_ORIGIN || "https://inventory.herniarchiv.cz";
const ASSET_INDEX_DIR = resolve(process.env.ASSET_INDEX_DIR || "asset-index");
const FETCH_TIMEOUT_MS = 5 * 60 * 1000;

type Asset = {
    id: number;
    slug: string;
    name: string;
    code: string;
    product_codes: string[];
    serial: string | null;
    description: string | null;
    note: string | null;
    model: string | null;
    tags: string[];
    companies: string[];
    platforms: string[];
    mediums: string[];
    image: string | null;
};

function escapeHtml(text: string): string {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

function meta(name: string, content: string): string {
    return `<meta data-pagefind-meta="${name}[content]" content="${escapeHtml(content)}">`;
}

/** A piece of text with a Pagefind weight, where 1 is regular body text. */
function section(weight: number, text: string | null | undefined): string {
    if (!text) return "";
    return `<p data-pagefind-weight="${weight}">${escapeHtml(text)}</p>`;
}

/**
 * All the ways an asset can be looked up, such as HH08385, RH8385 and 8385 for asset 8385.
 * The first one is what search results show.
 */
function assetCodes(asset: Asset): string[] {
    const id = String(asset.id);
    const paddedId = id.padStart(5, "0");
    const prefixed = ["HH", "RH"].flatMap((prefix) => [prefix + paddedId, prefix + id]);
    return [
        ...new Set([...prefixed, id, paddedId, asset.code, ...asset.product_codes, asset.serial]),
    ].filter((code) => code !== null);
}

function assetHtml(asset: Asset): string {
    // Metadata is searchable, so keeping the URL there would make every asset with an image
    // match words like "inventory".  Filters are returned with results, but aren't searched.
    const image = asset.image
        ? `<meta data-pagefind-filter="image[content]" content="${escapeHtml(INVENTORY_ORIGIN + asset.image)}">`
        : "";
    // Codes are metadata rather than text so that they don't end up in excerpts
    return `<html><head>${meta("codes", assetCodes(asset).join(" | "))}${image}</head><body>
        <h1 data-pagefind-weight="10">${escapeHtml(asset.name)}</h1>
        ${section(1, asset.description)}
        ${section(0.5, asset.note)}
        ${section(
            0.3,
            [asset.model, ...asset.tags, ...asset.companies, ...asset.platforms, ...asset.mediums]
                .filter(Boolean)
                .join(", "),
        )}
    </body></html>`;
}

function assetUrl(asset: Asset): string {
    return `/inventory/asset/${asset.id}` + (asset.slug ? `-${asset.slug}` : "");
}

async function fetchAssets(): Promise<Asset[]> {
    const url = `${INVENTORY_ORIGIN}/public-search.json`;
    const response = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
    if (!response.ok) throw new Error(`Failed to load ${url}: HTTP ${response.status}`);
    return (await response.json()).assets;
}

function throwOnErrors(result: { errors: string[] }) {
    if (result.errors.length) throw new Error(result.errors.join("\n"));
}

/** Writes the index next to the current one, which is only replaced once it's complete. */
async function buildIndex(assets: Asset[]) {
    const buildName = `build-${Date.now()}`;
    const buildDir = join(ASSET_INDEX_DIR, buildName);

    // Czech is the only language of the collection
    const { errors, index } = await pagefind.createIndex({ forceLanguage: "cs" });
    if (!index) throw new Error(errors.join("\n"));

    for (const asset of assets) {
        throwOnErrors(
            await index.addHTMLFile({
                url: assetUrl(asset),
                content: assetHtml(asset),
            }),
        );
    }

    await mkdir(ASSET_INDEX_DIR, { recursive: true });
    throwOnErrors(await index.writeFiles({ outputPath: buildDir }));
    await pagefind.close();

    await writeFile(
        join(buildDir, "build-info.json"),
        JSON.stringify({ builtAt: new Date(), assetCount: assets.length }),
    );

    // Renaming a symlink over the old one switches to the new index atomically
    const temporaryLink = join(ASSET_INDEX_DIR, "current.tmp");
    await rm(temporaryLink, { force: true });
    await symlink(buildName, temporaryLink);
    await rename(temporaryLink, join(ASSET_INDEX_DIR, "current"));

    for (const entry of await readdir(ASSET_INDEX_DIR)) {
        if (entry.startsWith("build-") && entry !== buildName) {
            await rm(join(ASSET_INDEX_DIR, entry), { recursive: true });
        }
    }
}

const assets = await fetchAssets();
await buildIndex(assets);
console.log(`Indexed ${assets.length} assets in ${ASSET_INDEX_DIR}`);
