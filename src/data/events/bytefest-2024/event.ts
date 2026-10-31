import { Temporal } from "@js-temporal/polyfill";

import type { Event } from "../event";

const event: Event = {
    slug: "bytefest-2024",
    name: "ByteFEST 2024",
    date: new Temporal.PlainDate(2024, 10, 25),
    endDate: new Temporal.PlainDate(2024, 10, 28),
    place: { cs: "Toulcův dvůr, Praha", en: "Toulcův dvůr, Prague" },
    url: "https://bytefest.cz/rocniky/2024/11/01/bytefest-2024-podekovani",
};

export default event;
