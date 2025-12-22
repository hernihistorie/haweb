import { Temporal } from '@js-temporal/polyfill';
import { czech, slovak } from "$src/data/languages";
import type { InterviewData } from "$src/types";
import { RS } from '../persons';

export const data: InterviewData = {
    slug: "stanislav-hrda",
    lang: "cs",
    title: {
        cs: "Rozhovor se Stanislavem Hrdou",
        en: "Interview with Stanislav Hrda"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Stanislav Hrda",
        birth_year: "1971",
        gender: "M",
        bio: "Stanislav Hrda se narodil roku 1971. Na střední škole s kamarády založil „firmu” <em>Sybilasoft</em> v rámci které až do sametové revoluce dělali hry pro ZX Spectrum. Po pádu železné opony spoluzaložil s Ľudovítem Wittekem firmu <em>Ultrasoft</em>, která na území Československa začala distribuovat hry pro ZX Spectrum (a kompatibilní) a zároveň vydávala jeden z prvních místních herních časopisů <em>Bit</em>. V současnosti se věnuje popularizaci normalizační a porevoluční videoherní tvorby na území Česka a Slovenska.",
        photo: {
            url: "/interviews/stanislav-hrda.jpg",
        }
    },
    interview: {
        date: Temporal.PlainDate.from("2023-11-10"),
        place: "Red Café, Bratislava",
        interviewer: RS,
        length: "2:06:08",
        languages: [czech, slovak],
        // project: "",
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // redaction: RS,
        // publication_date: Temporal.PlainDate.from("????-??-??"),
        // verifier: null
    },
    status: "in-progress",
    tags: []
}