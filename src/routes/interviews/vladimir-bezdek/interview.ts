import type { InterviewData } from "$src/types";

export const data: InterviewData = {
    slug: "vladimir-bezdek",
    lang: "cs",
    title: "Rozhovor s Vladimírem Bezděkem",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Vladimír Bezděk",
        birth_year: "1941",
        gender: "M",
        bio: "Vladimír Bezděk se narodil roku 1941 ve Zdíkově u Vimperka. Studoval FEL na ČVUT, odkud pak přešel do ČST kde začal pracovat jako technik. V první polovině 80. let začal nabízet některým dramaturgům ČST námět na pořad <em>Videostop</em>. Ten nakonec zaujal dramaturgyni Oldřišku Cebrovskou, s kterou pořad v roce 1985 začal tvořit. Na <em>Videostopu</em> dělal až do jeho konce v roce 2000.",
        photo: {
            url: "/interviews/vladimir-bezdek.JPG",
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