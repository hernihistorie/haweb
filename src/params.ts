import { defineParams } from "@sveltejs/kit/params";
// SvelteKit imports this file directly with Node, so aliases can't be used here
import { postKindBySection, type PostSection } from "./lib/posts.ts";

export const params = defineParams({
    postSection: (param): PostSection | undefined =>
        Object.hasOwn(postKindBySection, param) ? (param as PostSection) : undefined,
});
