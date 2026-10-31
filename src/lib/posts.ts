// This module is imported by src/params.ts, which SvelteKit loads directly with Node,
// so it must not have runtime imports through aliases like $src or #lib.
import type { Author, Post, PostKind } from "$src/types";
import type { Talk } from "$src/data/talk";
import type { Event } from "$src/data/events/event";

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
    /** Labels for navigating to the adjacent posts from a post page */
    newerTitle: { cs: string; en: string };
    olderTitle: { cs: string; en: string };
}

export const postKinds = {
    news: {
        section: "news",
        title: { cs: "Novinky", en: "News" },
        longTitle: { cs: "Novinky Herního archivu", en: "Czechoslovak Game Archive News" },
        allTitle: { cs: "Všechny novinky", en: "All news" },
        hasYears: true,
        newerTitle: { cs: "Novější novinka", en: "Newer news" },
        olderTitle: { cs: "Starší novinka", en: "Older news" },
    },
    article: {
        section: "articles",
        title: { cs: "Články", en: "Articles" },
        longTitle: { cs: "Články Herního archivu", en: "Czechoslovak Game Archive Articles" },
        allTitle: { cs: "Všechny články", en: "All articles" },
        hasYears: false,
        newerTitle: { cs: "Novější článek", en: "Newer article" },
        olderTitle: { cs: "Starší článek", en: "Older article" },
    },
    video: {
        section: "videos",
        title: { cs: "Videa", en: "Videos" },
        longTitle: { cs: "Videa Herního archivu", en: "Czechoslovak Game Archive Videos" },
        allTitle: { cs: "Všechna videa", en: "All videos" },
        hasYears: false,
        newerTitle: { cs: "Novější video", en: "Newer video" },
        olderTitle: { cs: "Starší video", en: "Older video" },
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

export function authorHref(author: Pick<Author, "slug">): string {
    return `/authors/${author.slug}`;
}

export function eventHref(event: Pick<Event, "slug">): string {
    return `/events/${event.slug}`;
}

export function slidesHref(post: Pick<Post, "id" | "slug" | "kind">): string {
    return `${postHref(post)}/slides`;
}

/** Only PDF slides can be browsed on the site, anything else is just linked */
export function hasSlidesViewer(presentation: Talk | undefined): boolean {
    const path = presentation?.slides?.url.split(/[?#]/)[0];
    return !!path?.toLowerCase().endsWith(".pdf");
}

/** `hqdefault` exists for every video, unlike `maxresdefault` */
export function youtubeThumbnail(youtubeId: string): string {
    return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

/** The post's image, falling back to the video thumbnail */
export function postImage(post: Pick<Post, "image" | "video">): string | undefined {
    return (
        post.image ?? (post.video?.youtubeId ? youtubeThumbnail(post.video.youtubeId) : undefined)
    );
}
