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
    const postComponent = await postModules[path]().then((module) => module.default);

    return {
        ...data,
        postComponent,
        langs,
    };
};
