import type { InterviewData } from "$src/types";

export const data: InterviewData = {
    slug: "stanislav-hrda",
    lang: "cs",
    title: "Rozhovor se Stanislavem Hrdou",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Stanislav Hrda",
        birth_year: "1971",
        gender: "M",
        bio: "Stanislav Hrda se narodil roku 1971. Na střední škole s kamarády založil ,,firmu” <em>Sybilasoft</em> v rámci které až do sametové revoluce dělali hry pro ZX Spectrum. Po pádu železné opony spoluzaložil s Ludovítem Wittekem firmu <em>Ultrasoft</em>, která na území Československa začala distribuovat hry pro ZX Spectrum (a kompatibilní) a zároveň vydávala jeden z prvních místních herních časopisů <em>Bit</em>. V současnosti se věnuje popularizaci normalizační a porevoluční videoherní tvorby na území Česka a Slovenska.",
        photo: {
            url: "/interviews/stanislav-hrda.jpg",
        }
    },
    interview: {
        date: new Date("2023-11-10"),
        place: "Bratislava",
        interviewer: "Rudolf Jan Suchý",
        // length: "",
        // project: "",
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: false,
    tags: []
}