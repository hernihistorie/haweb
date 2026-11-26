#!/usr/bin/env node
/**
 * Builds the Pagefind index of the website from the output of `vite build`, so that it doesn't
 * need a build of its own.  It starts the built server and crawls it, like SvelteKit does when
 * prerendering: from the prerendered pages, following every link on the site, so it also covers
 * the pages rendered on demand.  The index is served by src/routes/pagefind.
 *
 * Every page found is indexed, except for content marked with `data-pagefind-ignore`; a page
 * can be left out completely by returning `hideFromSearch` from its load function.
 *
 * Usage:
 *   npm run build:search-index   (after `vite build`, `npm run build` runs both)
 */

import { spawn } from "child_process";
import { readdir, readFile, rm, writeFile } from "fs/promises";
import { join, resolve } from "path";
import * as pagefind from "pagefind";

const BUILD_DIR = resolve("build");
const PRERENDERED_DIR = join(BUILD_DIR, "prerendered");
const OUTPUT_DIR = join(BUILD_DIR, "search-index");
const SERVER_START_TIMEOUT_MS = 30 * 1000;
/** Pages rendered on demand can wait on our APIs, like when prerendering (see vite.config.ts) */
const FETCH_CONCURRENCY = 8;

type Page = { url: string; html: string };

/** Paths of the prerendered pages, e.g. /news/ for news/index.html */
async function prerenderedPaths(): Promise<string[]> {
    const files = await readdir(PRERENDERED_DIR, { recursive: true });
    return files
        .filter((file) => file.endsWith("index.html"))
        .map((file) => "/" + file.slice(0, -"index.html".length));
}

/** Starts the built server, resolving with its origin once it's listening */
async function startServer(): Promise<{ origin: string; stop: () => void }> {
    const server = spawn(process.execPath, [BUILD_DIR], {
        env: { ...process.env, HOST: "127.0.0.1", PORT: "0" },
        stdio: ["ignore", "pipe", "inherit"],
    });
    const stop = () => server.kill();
    const origin = await new Promise<string>((resolve, reject) => {
        const timeout = setTimeout(() => {
            stop();
            reject(new Error("The built server didn't start listening in time"));
        }, SERVER_START_TIMEOUT_MS);
        server.on("exit", (code) => reject(new Error(`The built server exited with code ${code}`)));
        server.stdout.on("data", (chunk: Buffer) => {
            const origin = chunk.toString().match(/Listening on (http:\/\/\S+)/)?.[1];
            if (origin) {
                clearTimeout(timeout);
                resolve(origin);
            }
        });
    });
    return { origin, stop };
}

/** Paths on the site that a page links to, other than files such as images */
function linkedPaths(page: Page): string[] {
    const base = new URL(page.url, "http://site");
    const paths = [];
    for (const [, href] of page.html.matchAll(/<a\s[^>]*?href="([^"]*)"/g)) {
        const url = new URL(href.replaceAll("&amp;", "&"), base);
        if (url.origin === base.origin && !/\.\w+$/.test(url.pathname)) paths.push(url.pathname);
    }
    return paths;
}

/** Fetches a page, following redirects (most links leave out the trailing slash) */
async function fetchPage(origin: string, path: string): Promise<Page | null> {
    const response = await fetch(origin + path);
    const url = new URL(response.url);
    const type = response.headers.get("content-type") ?? "";
    if (url.origin !== origin || response.status !== 200 || !type.startsWith("text/html")) {
        console.warn(`Skipping ${path}: ${response.status} ${type} at ${response.url}`);
        return null;
    }
    return { url: url.pathname, html: await response.text() };
}

/** Fetches the given pages and every page they link to, and so on */
async function crawl(origin: string, paths: string[]): Promise<Page[]> {
    const requested = new Set<string>();
    const pages = new Map<string, Page>();
    while (paths.length) {
        const batch = [...new Set(paths)].filter((path) => !requested.has(path));
        for (const path of batch) requested.add(path);

        const found: Page[] = [];
        for (let i = 0; i < batch.length; i += FETCH_CONCURRENCY) {
            const chunk = batch.slice(i, i + FETCH_CONCURRENCY);
            for (const page of await Promise.all(chunk.map((path) => fetchPage(origin, path)))) {
                // Several links can redirect to the same page
                if (page && !pages.has(page.url)) {
                    pages.set(page.url, page);
                    found.push(page);
                }
            }
        }
        paths = found.flatMap(linkedPaths);
    }
    return [...pages.values()];
}

async function writeIndex(pages: Page[]) {
    const { index } = await pagefind.createIndex();
    if (!index) throw new Error("Couldn't create a Pagefind index");
    for (const { url, html } of pages) {
        const { errors } = await index.addHTMLFile({ url, content: html });
        if (errors.length) throw new Error(`Couldn't index ${url}: ${errors.join(", ")}`);
    }

    await rm(OUTPUT_DIR, { recursive: true, force: true });
    const { errors } = await index.writeFiles({ outputPath: OUTPUT_DIR });
    if (errors.length) throw new Error(`Couldn't write the index: ${errors.join(", ")}`);
    await writeFile(join(OUTPUT_DIR, "build-info.json"), JSON.stringify({ builtAt: new Date() }));
}

const server = await startServer();
let pages: Page[];
try {
    // The home pages aren't prerendered, and pages listed only in `entries` aren't linked
    pages = await crawl(server.origin, ["/", "/en/", ...(await prerenderedPaths())]);
} finally {
    server.stop();
}
console.log(`Crawled ${pages.length} pages`);

try {
    await writeIndex(pages);
} finally {
    // Otherwise Pagefind's service keeps the process running
    await pagefind.close();
}

const entry = JSON.parse(await readFile(join(OUTPUT_DIR, "pagefind-entry.json"), "utf8"));
for (const [language, { page_count }] of Object.entries<{ page_count: number }>(entry.languages)) {
    console.log(`Indexed ${page_count} pages in ${language}`);
}
