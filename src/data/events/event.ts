import type { LocalizedString } from "$src/types";
import type { Temporal } from "@js-temporal/polyfill";

export interface Event {
    slug: string;
    name: LocalizedString;
    shortName?: LocalizedString;
    date: Temporal.PlainDate;
    /** Last day of a multi-day event */
    endDate?: Temporal.PlainDate;
    place?: LocalizedString;
    url?: string;
}
