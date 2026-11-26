import { releasePrerender } from "#lib/server/release.js";
import { projectBulanci } from "./project";

export const prerender = releasePrerender(projectBulanci);
