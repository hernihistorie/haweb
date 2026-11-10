import { Temporal } from "@js-temporal/polyfill";

import type { Event } from "../event";

const event: Event = {
    slug: "retrofest-2024",
    name: "RetroFest 2024",
    date: new Temporal.PlainDate(2024, 1, 28),
    place: "Twitch",
};

export default event;
