import { projects } from "$src/data/projects";
import type { LayoutServerLoad } from "./$types";

// For adapter-static -- see https://kit.svelte.dev/docs/adapter-static
// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;
export const trailingSlash = "always";

// The header is on every page, so send it just what it shows rather than bundling all projects
export const load: LayoutServerLoad = () => ({
    menuProjects: projects
        .filter((project) => project.inMenu)
        .map(({ name, url }) => ({ name, url })),
});
