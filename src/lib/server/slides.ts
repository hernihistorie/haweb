import { postKinds } from "#lib/posts.js";
import type { Post } from "$src/types";

// Slides colocated with their post as `slides.pdf`, as the text of each slide.
// External slides are only linked, so their text isn't available.
const slideTextModules = import.meta.glob<string[]>("/src/data/*/*/slides.pdf", {
    query: "?text",
    import: "default",
});

export async function loadSlideText(
    post: Pick<Post, "id" | "slug" | "kind">,
): Promise<string[] | null> {
    const path = `/src/data/${postKinds[post.kind].section}/${post.id}-${post.slug}/slides.pdf`;
    return path in slideTextModules ? slideTextModules[path]() : null;
}
