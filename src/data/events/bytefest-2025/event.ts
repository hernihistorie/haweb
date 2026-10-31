import { Temporal } from "@js-temporal/polyfill";

import type { Event } from "../event";

const event: Event = {
    slug: "bytefest-2025",
    name: "ByteFEST 2025",
    date: new Temporal.PlainDate(2025, 10, 2),
    endDate: new Temporal.PlainDate(2025, 10, 5),
    place: { cs: "Toulcův dvůr, Praha", en: "Toulcův dvůr, Prague" },
    url: "https://bytefest.cz/rocniky/2025/10/27/bytefest-2025",
};

export default event;
