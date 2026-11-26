import { isProjectReleased } from "#lib/projects.js";
import { prerenderForSearch } from "#lib/prerender.server.js";
import type { Project } from "$src/types";

/**
 * `prerender` for the pages of a project with a release date: until then, they're left out of
 * the search index, which is built on deploy, so they're searchable from the first deploy after
 * it. ('auto' keeps the routes on the server too, e.g. for redirecting outdated slugs.)
 */
export function releasePrerender(project: Project): "auto" | false {
    return prerenderForSearch && !isProjectReleased(project) ? false : "auto";
}
