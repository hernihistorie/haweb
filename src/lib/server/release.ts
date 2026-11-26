import { isProjectReleased } from "#lib/projects.js";
import type { Project } from "$src/types";

/**
 * Page data for the pages of a project with a release date: until then, they're left out of
 * the search index (see `hideFromSearch` in src/routes/+layout.svelte).  The index is built on
 * deploy, so they're searchable from the first deploy after the release.
 */
export function releaseData(project: Project): App.PageData {
    return { hideFromSearch: !isProjectReleased(project) };
}
