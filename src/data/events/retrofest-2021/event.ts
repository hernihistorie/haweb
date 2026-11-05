import { Temporal } from "@js-temporal/polyfill";

import type { Event } from "../event";

const event: Event = {
    slug: "retrofest-2021",
    name: "RetroFest 2021",
    date: new Temporal.PlainDate(2021, 12, 19),
    place: "Twitch",
};

export default event;
