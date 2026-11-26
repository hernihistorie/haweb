import type { Temporal } from "@js-temporal/polyfill";
import { isDateInPast } from "#lib/datetime.js";
import type { Project } from "$src/types";

/** Whether a project is publicly visible: it has no release date, or the date has passed by `now` */
export function isProjectReleased(
    project: Pick<Project, "releaseDate">,
    now?: Temporal.PlainDateTime,
): boolean {
    return !project.releaseDate || isDateInPast(project.releaseDate, now);
}
