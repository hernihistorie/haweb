import { createReadStream } from "fs";
import { stat } from "fs/promises";
import { resolve, sep } from "path";
import { Readable } from "stream";
import { error } from "@sveltejs/kit";
import { CORUSCANT_DIR, CORUSCANT_X_ACCEL_REDIRECT } from "$app/env/private";

/**
 * Files too large to keep in the repository or on the web server, such as the Bulánci maps, live
 * on coruscant (the NAS) in the home of its user `haweb`. On hhbox that home is mounted read-only,
 * and nginx sends its files: haweb only checks a request and answers with an empty response
 * with `X-Accel-Redirect: <CORUSCANT_X_ACCEL_REDIRECT><path>`, so nginx handles Range and
 * conditional requests and the download doesn't go through Node. (The mount and the nginx
 * location are in the hernihistorie/infra repository; see its README.)
 *
 * Without nginx (in development and in tests), the files are sent from `CORUSCANT_DIR`, a local
 * directory laid out like that home (e.g. with `bulanci-maps/`), with support for a single Range.
 * With neither set, there are no files.
 *
 * @param path Path of the file in that home, e.g. `bulanci-maps/edam.eap`. Not checked for
 *   existence when nginx sends the file, so it must come from data, not from the request.
 * @param filename The file name the browser saves the file as
 */
export async function serveCoruscantFile(
    path: string,
    request: Request,
    {
        filename,
        contentType = "application/octet-stream",
    }: { filename: string; contentType?: string },
): Promise<Response> {
    const headers = {
        "Content-Type": contentType,
        "Content-Disposition": contentDisposition(filename),
        // Revalidated with the ETag nginx sends, cheap compared to a stale file
        "Cache-Control": "no-cache",
    };

    const location = CORUSCANT_X_ACCEL_REDIRECT;
    if (location) {
        // nginx decodes the URI, so names can contain characters such as `'`, `?` or `%`
        const encoded = path.split("/").map(percentEncode).join("/");
        return new Response(null, {
            headers: { ...headers, "X-Accel-Redirect": location.replace(/\/?$/, "/") + encoded },
        });
    }

    if (!CORUSCANT_DIR) {
        error(503, "Files on coruscant aren't available here (see src/lib/server/coruscant.ts)");
    }
    const root = resolve(CORUSCANT_DIR);
    const fullPath = resolve(root, path);
    if (!fullPath.startsWith(root + sep)) error(404);
    const info = await stat(fullPath).catch(() => null);
    if (!info?.isFile()) error(404);
    return sendLocalFile(fullPath, info.size, request.headers.get("Range"), headers);
}

/** `Content-Disposition` for `filename`, with an ASCII fallback for old browsers */
function contentDisposition(filename: string): string {
    const ascii = filename
        .normalize("NFKD")
        .replace(/[^\x20-\x7e]|["\\]/g, (c) => (/\p{M}/u.test(c) ? "" : "_"));
    return `attachment; filename="${ascii}"; filename*=UTF-8''${percentEncode(filename)}`;
}

/**
 * Percent-encodes everything but letters, digits and `-._~!`. Unlike encodeURIComponent, this
 * also encodes `'()*`, which RFC 8187 doesn't allow in `filename*`.
 */
const percentEncode = (value: string): string =>
    encodeURIComponent(value).replace(
        /['()*]/g,
        (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase(),
    );

/**
 * The byte range `[start, end]` asked for in a `Range` header, null to send the whole file
 * (no header, or one this doesn't support, like several ranges), or "unsatisfiable"
 */
export function parseRange(
    header: string | null,
    size: number,
): [number, number] | null | "unsatisfiable" {
    const match = header?.match(/^bytes=(\d*)-(\d*)$/);
    if (!match || (!match[1] && !match[2])) return null;
    if (!match[1]) {
        // The last N bytes
        const length = Number(match[2]);
        return length > 0 && size > 0 ? [Math.max(0, size - length), size - 1] : "unsatisfiable";
    }
    const start = Number(match[1]);
    const end = match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
    return start <= end ? [start, end] : "unsatisfiable";
}

function sendLocalFile(
    path: string,
    size: number,
    rangeHeader: string | null,
    headers: Record<string, string>,
): Response {
    const range = parseRange(rangeHeader, size);
    if (range === "unsatisfiable") {
        return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    }
    const [start, end] = range ?? [0, size - 1];
    const body =
        end >= start
            ? (Readable.toWeb(createReadStream(path, { start, end })) as ReadableStream)
            : null;
    return new Response(body, {
        status: range ? 206 : 200,
        headers: {
            ...headers,
            "Accept-Ranges": "bytes",
            "Content-Length": String(end - start + 1),
            ...(range && { "Content-Range": `bytes ${start}-${end}/${size}` }),
        },
    });
}
