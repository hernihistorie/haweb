import { Temporal } from "@js-temporal/polyfill";

import type { InterviewData } from "$src/types";
import { isDateInPast } from "$src/lib/datetime";

// Auto-discover all interviews using Vite's glob import.
const interviewModules = import.meta.glob<{ data: InterviewData }>("./*/interview.ts", {
    eager: true,
});

const allInterviews: InterviewData[] = Object.values(interviewModules).map((module) => module.data);

// The published set depends on the current time, so it has to be computed per request.
export function getLatestPublishedInterview(): InterviewData | undefined {
    return allInterviews
        .filter((interview) => interview.status === "published")
        .filter((interview) => interview.interview.publication_date)
        .filter((interview) => isDateInPast(interview.interview.publication_date!))
        .sort((a, b) =>
            Temporal.PlainDate.compare(
                b.interview.publication_date!,
                a.interview.publication_date!,
            ),
        )[0];
}
