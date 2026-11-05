import { Temporal } from "@js-temporal/polyfill";

import type { Post, PostKind, PostOfKind, StreamPost } from "$src/types";
import { isPostPublished, toPlainDateTime } from "$src/lib/datetime";
import { postKinds } from "$src/lib/posts";

// Auto-discover all posts using Vite's glob import.
// Each kind lives in its own directory, e.g. `./news/1-slug/blog_post.ts`.
const postModules = import.meta.glob<{ default: Post }>("./*/*/blog_post.ts", {
    eager: true,
});

// All posts of all kinds, including unpublished and future ones,
// sorted by publication date ascending (oldest first)
const allPosts: Post[] = Object.entries(postModules)
    .map(([path, module]) => {
        const post = module.default;
        const directory = path.split("/")[1];
        if (directory !== postKinds[post.kind].section) {
            throw new Error(`Post ${path} has kind "${post.kind}" but is in ${directory}/`);
        }
        if (post.kind === "video" && !post.video && !post.stream) {
            throw new Error(`Post ${path} has kind "video" but no video or stream`);
        }
        return post;
    })
    .sort((a, b) => {
        if (!a.date) return -1;
        if (!b.date) return 1;
        return Temporal.PlainDateTime.compare(toPlainDateTime(a.date), toPlainDateTime(b.date));
    });

// The stream each stream part belongs to
export const streamByPartId: Record<number, StreamPost> = Object.fromEntries(
    allPosts.flatMap((post) =>
        post.kind === "video" && post.stream
            ? post.stream.parts.map((part) => [part.id, post] as const)
            : [],
    ),
);

// The published set depends on the current time, so it has to be computed per request.
// `includeUnpublished` also returns unpublished and future posts, for dev preview.
export function getPosts<K extends PostKind = PostKind>(
    kind?: K,
    { includeUnpublished = false } = {},
): PostOfKind<K>[] {
    return allPosts
        .filter((post): post is PostOfKind<K> => !kind || post.kind === kind)
        .filter((post) => includeUnpublished || isPostPublished(post));
}

// The posts to show in listings, where stream parts are represented by their stream
export function getListedPosts<K extends PostKind = PostKind>(
    kind?: K,
    options?: { includeUnpublished?: boolean },
): PostOfKind<K>[] {
    return getPosts(kind, options).filter((post) => !streamByPartId[post.id]);
}

// Post IDs are unique across all kinds
export function getPostsById(): Record<number, Post> {
    return getPosts().reduce(
        (acc, post) => {
            acc[post.id] = post;
            return acc;
        },
        {} as Record<number, Post>,
    );
}

// All posts including unpublished/future, for dev preview
export const allPostsById: Record<number, Post> = allPosts.reduce(
    (acc, post) => {
        acc[post.id] = post;
        return acc;
    },
    {} as Record<number, Post>,
);

export function getPostYears(kind: PostKind): number[] {
    return [
        ...new Set(
            getPosts(kind)
                .filter((post) => post.date)
                .map((post) => post.date!.year),
        ),
    ].sort((a, b) => b - a);
}
