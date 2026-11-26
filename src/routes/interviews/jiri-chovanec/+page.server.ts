import { releasePrerender } from "#lib/server/release.js";
import { projectBulanci } from "$src/routes/projects/bulanci/project";

// Searchable from the Bulánci release on
export const prerender = releasePrerender(projectBulanci);
