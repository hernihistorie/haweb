import { error } from "@sveltejs/kit";
import { bulanciMapFile, bulanciMapFilePath, bulanciMapsById } from "$src/data/bulanci/maps.server";
import { serveCoruscantFile } from "#lib/server/coruscant.js";

// The files are on coruscant, not in the build
export const prerender = false;
// `<id>.eap`, which the web player and downloads ask for without a trailing slash
export const trailingSlash = "ignore";

/**
 * A published map's .eap file, under its original name. Only maps shown on the website have
 * one: not hidden maps, nor duplicates (whose metadata is merged into the original).
 */
export function GET({ params, request }) {
    const id = params.file.match(/^([0-9a-f]{8})\.eap$/)?.[1];
    const map = id ? bulanciMapsById[id] : undefined;
    if (!map || !bulanciMapFile(map)) error(404, "Map not found");

    return serveCoruscantFile(bulanciMapFilePath(map), request, {
        filename: `${map.filename}.eap`,
    });
}
