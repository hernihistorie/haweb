import type { RequestEvent } from '@sveltejs/kit';
import { encodePath, type EmbeddedApp } from '$src/lib/embedded';

/**
 * Proxies a request for an embedded app's page or file.
 *
 * The app is told where it is served with `X-Forwarded-Prefix`, so it builds its own
 * URLs accordingly, and gets `X-Haweb-Embed: 1` and the visitor's theme in
 * `X-Haweb-Theme`.  See "Embedding" in rhinventory's README.md.
 *
 * @param upstream base URL of the app, ending with a slash
 * @param path requested path relative to `app.framePrefix`, without leading slash
 */
export async function proxyEmbedded(
    app: EmbeddedApp,
    upstream: string,
    { request, url, cookies }: RequestEvent,
    path: string
): Promise<Response> {
    const encodedPath = encodePath(path);
    const target = new URL(`${encodedPath}${url.search}`, upstream);

    const headers = new Headers({
        'x-forwarded-prefix': app.framePrefix,
        'x-haweb-embed': '1'
    });
    for (const name of FORWARDED_REQUEST_HEADERS) {
        const value = request.headers.get(name);
        if (value) headers.set(name, value);
    }
    const theme = cookies.get('theme');
    if (theme === 'light' || theme === 'dark') headers.set('x-haweb-theme', theme);

    let res: Response;
    try {
        res = await fetch(target, { headers, redirect: 'manual', signal: AbortSignal.timeout(30_000) });
    } catch (e) {
        console.error(`Failed to fetch embedded page: ${target.href}`, e);
        return unavailableResponse(theme);
    }

    // A page opened on its own (e.g. in a new tab) rather than in the frame: show it in haweb
    if (request.headers.get('sec-fetch-dest') === 'document' && res.headers.get('content-type')?.startsWith('text/html')) {
        await res.body?.cancel();
        return new Response(null, {
            status: 302,
            headers: { location: `${app.prefix}/${encodedPath}${url.search}`, vary: 'Sec-Fetch-Dest' }
        });
    }

    const responseHeaders = new Headers({ 'content-security-policy': "frame-ancestors 'self'" });
    for (const name of FORWARDED_RESPONSE_HEADERS) {
        const value = res.headers.get(name);
        if (value) responseHeaders.set(name, value);
    }
    responseHeaders.append('vary', 'Sec-Fetch-Dest');
    // The app knows its prefix, but not that it's reached through us
    const location = responseHeaders.get('location');
    if (location) {
        const locationUrl = new URL(location, target);
        if (locationUrl.origin === target.origin) {
            responseHeaders.set('location', locationUrl.pathname + locationUrl.search + locationUrl.hash);
        }
    }

    return new Response(res.body, { status: res.status, headers: responseHeaders });
}

const FORWARDED_REQUEST_HEADERS = ['accept', 'accept-language', 'user-agent', 'if-none-match', 'if-modified-since'];

// Not content-encoding or content-length: fetch has already decompressed the body
const FORWARDED_RESPONSE_HEADERS = ['content-type', 'content-disposition', 'cache-control', 'etag', 'last-modified', 'vary', 'location'];

function unavailableResponse(theme: string | undefined): Response {
    const colorScheme = theme === 'light' || theme === 'dark' ? theme : 'light dark';
    const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="color-scheme" content="${colorScheme}">
    <title>Nedostupné</title>
    <style>
        body { background: transparent; color: CanvasText; font-family: Barlow, sans-serif; font-size: 120%; text-align: center; margin: 4em 1em; }
    </style>
</head>
<body>
    <p>Tato část webu je momentálně nedostupná, zkuste to prosím později.</p>
    <p>This part of the website is currently unavailable, please try again later.</p>
</body>
</html>`;
    return new Response(html, {
        status: 502,
        headers: { 'content-type': 'text/html; charset=utf-8', 'content-security-policy': "frame-ancestors 'self'" }
    });
}
