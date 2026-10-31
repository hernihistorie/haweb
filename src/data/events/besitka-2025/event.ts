import { Temporal } from "@js-temporal/polyfill";

import type { Event } from "../event";

const event: Event = {
    slug: "besitka-2025",
    name: "2. BeSÍŤka – Paratexty aneb všechno kolem her",
    shortName: "BeSÍŤka 2025",
    date: new Temporal.PlainDate(2025, 4, 5),
    place: { cs: "Kino Ponrepo, Praha", en: "Ponrepo cinema, Prague" },
    url: "https://www.nfa.cz/cs/o-nas/na-cem-pracujeme/novinky/61895-2-besitka-paratexty-aneb-vsechno-kolem-her",
};

export default event;
