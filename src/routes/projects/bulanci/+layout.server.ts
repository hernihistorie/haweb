import { releaseData } from "#lib/server/release.js";
import { projectBulanci } from "./project";
import type { LayoutServerLoad } from "./$types";

// 'auto' keeps the routes on the server too, e.g. for redirecting outdated slugs
export const prerender = "auto";

export const load: LayoutServerLoad = () => releaseData(projectBulanci);
