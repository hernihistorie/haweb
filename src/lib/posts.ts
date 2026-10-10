// This module is imported by src/params.ts, which SvelteKit loads directly with Node,
// so it must not have runtime imports through aliases like $src or #lib.
import type { Post, PostKind } from "$src/types";

interface PostKindInfo {
    /** URL path segment, also the directory name under `src/data/` */
    section: string;
    title: { cs: string; en: string };
    /** Used for backlinks from individual posts */
    longTitle: { cs: string; en: string };
    /** Used for links to the listing */
    allTitle: { cs: string; en: string };
    /** Whether the listing is split into per-year pages */
    hasYears: boolean;
}

export const postKinds = {
    news: {
        section: "news",
        title: { cs: "Novinky", en: "News" },
        longTitle: { cs: "Novinky Herního archivu", en: "Czechoslovak Game Archive News" },
        allTitle: { cs: "Všechny novinky", en: "All news" },
        hasYears: true,
    },
    article: {
        section: "articles",
        title: { cs: "Články", en: "Articles" },
        longTitle: { cs: "Články Herního archivu", en: "Czechoslovak Game Archive Articles" },
        allTitle: { cs: "Všechny články", en: "All articles" },
        hasYears: false,
    },
} as const satisfies Record<PostKind, PostKindInfo>;

export type PostSection = (typeof postKinds)[PostKind]["section"];

export const postKindList = Object.keys(postKinds) as PostKind[];

export const postKindBySection = Object.fromEntries(
    postKindList.map((kind) => [postKinds[kind].section, kind]),
) as Record<PostSection, PostKind>;

export function postKindHref(kind: PostKind): string {
    return `/${postKinds[kind].section}`;
}

export function postHref(post: Pick<Post, "id" | "slug" | "kind">): string {
    return `${postKindHref(post.kind)}/${post.id}-${post.slug}`;
}
