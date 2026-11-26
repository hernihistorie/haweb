import { releaseData } from "#lib/server/release.js";
import { projectBulanci } from "$src/routes/projects/bulanci/project";
import type { PageServerLoad } from "./$types";

// Searchable from the Bulánci release on
export const load: PageServerLoad = () => releaseData(projectBulanci);
