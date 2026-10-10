import { Temporal } from "@js-temporal/polyfill";

import type { Post, PostKind } from "$src/types";
import { isDateInPast, toPlainDateTime } from "$src/lib/datetime";
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
        return post;
    })
    .sort((a, b) => {
        if (!a.date) return -1;
        if (!b.date) return 1;
        return Temporal.PlainDateTime.compare(toPlainDateTime(a.date), toPlainDateTime(b.date));
    });

// The published set depends on the current time, so it has to be computed per request.
export function getPosts(kind?: PostKind): Post[] {
    return allPosts
        .filter((post) => !kind || post.kind === kind)
        .filter((post) => post.published)
        .filter((post) => !post.date || isDateInPast(post.date));
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
