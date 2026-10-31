#!/usr/bin/env npx tsx
/**
 * CLI script to convert Buffer Facebook posts into blog post drafts.
 *
 * Usage:
 *   npx tsx scripts/buffer_to_blog.ts
 *
 * On first run it will ask for your Buffer API key and save it to .env.
 */

import { input, select, confirm } from "@inquirer/prompts";
import { existsSync, mkdirSync, writeFileSync, appendFileSync, readdirSync } from "fs";
import { join, extname } from "path";
import { config } from "dotenv";
import { getOrganizations, getChannels, getPosts } from "./buffer/buffer.js";
import type { Organization, Channel } from "./buffer/buffer.js";

// ── Configuration ──────────────────────────────────────────────────────────

const BASE_PATH = join(import.meta.dirname, "..");
const ENV_PATH = join(BASE_PATH, ".env");
// Posts imported from Buffer are news; IDs are shared between all post kinds
const NEWS_DIR = join(BASE_PATH, "src/data/news");
const POST_DIRS = ["news", "articles"].map((dir) => join(BASE_PATH, "src/data", dir));

const NUM_POSTS = 6; // Number of recent posts to fetch from Buffer

function slugify(text: string): string {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function getNextBlogId(): number {
    const dirs = POST_DIRS.flatMap((dir) => readdirSync(dir)).filter((d) => /^\d+-/.test(d));
    const ids = dirs.map((d) => parseInt(d.split("-")[0], 10)).filter((n) => !isNaN(n));
    return Math.max(0, ...ids) + 1;
}

function stripEmoji(text: string): string {
    return text
        .replace(/\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu, "")
        .replace(/\s{2,}/g, " ")
        .trim();
}

async function downloadImage(url: string, destPath: string): Promise<void> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to download image: ${res.status} ${url}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    writeFileSync(destPath, buffer);
}

function extFromMime(mimeType: string): string {
    const map: Record<string, string> = {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/gif": ".gif",
        "image/webp": ".webp",
    };
    return map[mimeType] ?? ".jpg";
}

// ── Authentication ─────────────────────────────────────────────────────────

async function getToken(): Promise<string> {
    config({ path: ENV_PATH });
    let token = process.env.BUFFER_API_TOKEN;

    if (token) {
        console.log("Using saved Buffer API token from .env");
        return token;
    }

    console.log("No Buffer API token found.");
    console.log("Get your API key at: https://publish.buffer.com/settings/api");
    token = await input({ message: "Paste your Buffer API token:" });
    token = token.trim();

    if (!token) {
        console.error("No token provided. Exiting.");
        process.exit(1);
    }

    // Save to .env
    if (existsSync(ENV_PATH)) {
        appendFileSync(ENV_PATH, `\nBUFFER_API_TOKEN=${token}\n`);
    } else {
        writeFileSync(ENV_PATH, `BUFFER_API_TOKEN=${token}\n`);
    }
    console.log("Token saved to .env");

    return token;
}

// ── Blog post generation ───────────────────────────────────────────────────

function generatePostTs(
    id: number,
    slug: string,
    title: string,
    description: string,
    dueAt: string | null,
    bufferPostId: string,
    mainImage?: string,
): string {
    const date = dueAt ? new Date(dueAt) : new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const min = date.getMinutes();
    const imageImport = mainImage
        ? `\nimport img01 from "./img/${mainImage}?w=1200&format=jpg&imagetools";\n`
        : "";
    const imageLine = mainImage ? `\n    image: img01,` : "";

    return `import { Temporal } from '@js-temporal/polyfill';

import type { Post } from '$src/types';
import { authors } from '$src/data/authors';${imageImport}

const post: Post = {
    published: true,
    id: ${id},
    slug: '${slug}',
    kind: 'news',${imageLine}
    title: {
        cs: ${JSON.stringify(title)},
    },
    date: new Temporal.PlainDateTime(${y}, ${m}, ${d}, ${h}, ${min}),
    author: authors.HerniHistorie,
    description_html: ${JSON.stringify(description)},
    bufferPostId: '${bufferPostId}',
};

export default post;
`;
}

function generatePageSvelte(text: string, imageFilenames: string[]): string {
    // Convert double newlines in the Buffer text to paragraph breaks
    const paragraphs = text
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p) => `            <p>${p.replace(/\n/g, "<br/>")}</p>`)
        .join("\n");

    const figures = imageFilenames.map((f) => `    <Figure image={img["${f}"]} />`).join("\n");

    const needsFigure = imageFilenames.length > 0;
    const imports = [
        '    import PageLang from "$src/lib/components/PageLang.svelte";',
        '    import Loc from "$src/lib/components/Loc.svelte";',
        ...(needsFigure
            ? [
                  '    import Figure from "$src/lib/components/Figure.svelte";',
                  '    import { articleImages } from "$src/lib/articleImages";',
                  "",
                  "    const img = articleImages(",
                  "        import.meta.glob('./img/*', { eager: true, query: '?w=1600;800&enhanced', import: 'default' }),",
                  "        import.meta.glob('./img/*', { eager: true, import: 'default' }),",
                  "        import.meta.glob('./img/*', { eager: true, query: '?as=meta:width;height', import: 'default' }),",
                  "    );",
              ]
            : []),
    ].join("\n");

    return `<script lang="ts">
${imports}
</script>

<PageLang cs />

<section>
    <Loc>
        {#snippet cs()}
${paragraphs}
        {/snippet}
    </Loc>
${figures ? "\n" + figures + "\n" : ""}</section>
`;
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
    const token = await getToken();

    // 1. Get organization
    const orgs = await getOrganizations(token);
    if (orgs.length === 0) {
        console.error("No organizations found.");
        process.exit(1);
    }
    let org: Organization;
    if (orgs.length === 1) {
        org = orgs[0];
        console.log(`Organization: ${org.name}`);
    } else {
        const orgId = await select({
            message: "Select organization:",
            choices: orgs.map((o) => ({ name: o.name, value: o.id })),
        });
        org = orgs.find((o) => o.id === orgId)!;
    }

    // 2. Get Facebook channels
    const channels = await getChannels(token, org.id);
    const fbChannels = channels.filter((c) => c.service === "facebook");
    if (fbChannels.length === 0) {
        console.error("No Facebook channels found. Available channels:");
        channels.forEach((c) => console.error(`  - ${c.name} (${c.service})`));
        process.exit(1);
    }
    let channel: Channel;
    if (fbChannels.length === 1) {
        channel = fbChannels[0];
        console.log(`Facebook channel: ${channel.name}`);
    } else {
        const chId = await select({
            message: "Select Facebook channel:",
            choices: fbChannels.map((c) => ({ name: c.name, value: c.id })),
        });
        channel = fbChannels.find((c) => c.id === chId)!;
    }

    // 3. Fetch latest posts (sent + scheduled)
    console.log("\nFetching latest posts...");
    const posts = await getPosts(token, org.id, channel.id, ["sent", "scheduled"], NUM_POSTS);

    if (posts.length === 0) {
        console.log("No posts found for this channel.");
        process.exit(0);
    }

    // 4. Let user pick a post
    const postId = await select({
        message: "Select a post to convert to a blog post:",
        choices: posts.map((p) => {
            const firstLine = p.text.split("\n")[0].trim();
            const status = p.status === "sent" ? "✓" : "⏳";
            const date = p.dueAt ? new Date(p.dueAt).toLocaleDateString() : "no date";
            return {
                name: `${status} [${date}] ${firstLine}`,
                value: p.id,
            };
        }),
    });

    const post = posts.find((p) => p.id === postId)!;
    const lines = post.text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);

    // 5. Infer title & description
    const title = stripEmoji(lines[0] ?? "");
    console.log(`\nInferred title: ${title}`);

    const slug = slugify(title);
    const nextId = getNextBlogId();
    const dirName = `${nextId}-${slug}`;

    console.log(`\nWill create: src/data/news/${dirName}/`);
    // const proceed = await confirm({ message: 'Create blog post draft?' });
    // if (!proceed) {
    //     console.log('Cancelled.');
    //     process.exit(0);
    // }

    // 6. Create blog post files
    const postDir = join(NEWS_DIR, dirName);
    mkdirSync(postDir, { recursive: true });

    // Download images into img/ next to the blog post
    const imageAssets = post.assets?.filter((a) => a.mimeType?.startsWith("image/")) ?? [];
    const imageDirAbs = join(postDir, "img");
    const downloadedImages: string[] = [];

    if (imageAssets.length > 0) {
        mkdirSync(imageDirAbs, { recursive: true });
        for (let i = 0; i < imageAssets.length; i++) {
            const asset = imageAssets[i];
            const url = asset.source || asset.thumbnail;
            console.log(url);
            if (!url) continue;
            const ext = extFromMime(asset.mimeType);
            const filename = `${String(i + 1).padStart(2, "0")}${ext}`;
            const absPath = join(imageDirAbs, filename);
            console.log(`  Downloading image ${i + 1}/${imageAssets.length}...`);
            try {
                await downloadImage(url, absPath);
                downloadedImages.push(filename);
                console.log(`    → src/data/news/${dirName}/img/${filename}`);
            } catch (e) {
                console.error(`    Failed: ${(e as Error).message}`);
            }
        }
    }

    const mainImage = downloadedImages[0];

    // Description from the first two lines of the post
    const description = lines.slice(0, 2).map(stripEmoji).join(" ").slice(0, 300);

    writeFileSync(
        join(postDir, "blog_post.ts"),
        generatePostTs(nextId, slug, title, description, post.dueAt, post.id, mainImage),
    );

    writeFileSync(join(postDir, "+page.svelte"), generatePageSvelte(post.text, downloadedImages));

    console.log(`\nCreated blog post draft:`);
    console.log(`  src/data/news/${dirName}/blog_post.ts`);
    console.log(`  src/data/news/${dirName}/+page.svelte`);
    if (downloadedImages.length > 0) {
        console.log(
            `  ${downloadedImages.length} image(s) downloaded to src/data/news/${dirName}/img/`,
        );
    }
    console.log(`\nView (if you have a dev server running): http://localhost:5174/news/${dirName}`);
    console.log(`\nNote: The post is created with published: true and the scheduled due date.`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
