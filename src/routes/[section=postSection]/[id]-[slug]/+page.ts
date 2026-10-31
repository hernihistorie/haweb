import { postKinds } from "#lib/posts.js";
import { getLocale, locales, type Locale } from "#lib/paraglide/runtime.js";
import type { Component } from "svelte";
import type { PageLoad } from "./$types";

// A post is either a single `+page.svelte` (localized inline with <Loc>), or one
// `article.<locale>.svelte` per available language.
// (Not a `{+page,article.*}` brace pattern: picomatch reads `{+` as an extglob and matches
// nothing in dev.)
const postModules = import.meta.glob<{ default: Component }>([
    "/src/data/*/*/+page.svelte",
    "/src/data/*/*/article.*.svelte",
]);

// Presentations may have a transcript, either a single `transcript.svelte`
// or one `transcript.<locale>.svelte` per available language.
const transcriptModules = import.meta.glob<{ default: Component }>([
    "/src/data/*/*/transcript.svelte",
    "/src/data/*/*/transcript.*.svelte",
]);

async function loadTranscript(dir: string): Promise<Component | null> {
    // Prefer the current locale, then a shared one, then whichever language exists
    const path =
        [`${dir}/transcript.${getLocale()}.svelte`, `${dir}/transcript.svelte`].find(
            (path) => path in transcriptModules,
        ) ?? Object.keys(transcriptModules).find((path) => path.startsWith(`${dir}/transcript.`));
    if (!path) return null;
    return transcriptModules[path]().then((module) => module.default);
}

export const load: PageLoad = async ({ data }) => {
    const { post } = data;
    const dir = `/src/data/${postKinds[post.kind].section}/${post.id}-${post.slug}`;

    const available = locales.filter((locale) => `${dir}/article.${locale}.svelte` in postModules);
    let langs: Record<Locale, boolean> | null = null;
    let path = `${dir}/+page.svelte`;
    if (available.length) {
        const locale = available.includes(getLocale()) ? getLocale() : available[0];
        langs = Object.fromEntries(locales.map((l) => [l, available.includes(l)])) as Record<
            Locale,
            boolean
        >;
        path = `${dir}/article.${locale}.svelte`;
    }

    if (!(path in postModules)) {
        throw new Error(`No post component found at ${path}`);
    }
    const [postComponent, transcriptComponent] = await Promise.all([
        postModules[path]().then((module) => module.default),
        loadTranscript(dir),
    ]);

    return {
        ...data,
        postComponent,
        transcriptComponent,
        langs,
    };
};
