import { dev } from "$app/env";
import { BUILD_TIME } from "#lib/datetime.js";
import { isProjectReleased } from "#lib/projects.js";
import type { Project } from "$src/types";

import { projectBulanci } from "$src/routes/projects/bulanci/project";
import { projectFrantisekStarekCunas } from "$src/routes/projects/frantisek-starek-cunas/project";
import { projectProgramyZCST } from "$src/routes/projects/programy-z-cst/project";
import { projectBewesoft } from "$src/routes/projects/bewesoft/project";
import { projectAtariKlubCitov } from "$src/routes/projects/atari-klub-citov/project";
import { projectVideostop } from "$src/routes/projects/videostop/project";
import { projectSbirka } from "$src/routes/projects/sbirka/project";
import { projectMagazines } from "$src/routes/magazines/project";
import { projectInterviews } from "$src/routes/interviews/project";
import { projectEmilFafek } from "$src/routes/gallery/emil-fafek/project";
import { projectOuya } from "$src/routes/projects/ouya/project";

// All listed projects, in the order they're shown in. Drives the project boxes (the homepage
// shows the first few), the header menu (`inMenu`) and the timeline (`year`).
// Projects not yet released when the site was built are left out, except in dev. Going by the
// build time rather than the current time keeps prerendered pages and the browser in agreement,
// so a project shows up in these lists with the first deploy after its release date.
// Importing this pulls in every project's description and image URLs, so the header gets its
// items from the root layout's server load instead.
export const projects: Project[] = [
    projectBulanci,
    projectFrantisekStarekCunas,
    projectProgramyZCST,
    projectBewesoft,
    projectAtariKlubCitov,
    projectVideostop,
    projectSbirka,
    projectMagazines,
    projectInterviews,
    projectEmilFafek,
    projectOuya,
].filter((project) => dev || isProjectReleased(project, BUILD_TIME));
