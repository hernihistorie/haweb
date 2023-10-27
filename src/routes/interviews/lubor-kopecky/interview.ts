import type { InterviewData } from "$src/types";

export const data: InterviewData = {
    slug: "lubor-kopecky",
    lang: "cs",
    title: "Rozhovor s Luborem Kopeckým",
    audio_file: "herni-archiv-rozhovor-lubor-kopecky.m4a",
    audio_duration: 7266, // TODO
    narrator: {
        name: "Lubor Kopecký",
        birth_year: "1978",
        gender: "M",
        photo: {
            url: "/interviews/lubor-kopecky.jpg",
            details_url: "",
            license_text: ""
        }
    },
    interview: {
        date: new Date("2023-07-31"),
        place: "Smrčensko (narátorův statek)",
        interviewer: "Rudolf Jan Suchý",
        length: "", // TODO
        project: "Porevoluční videoherní scéna – Sleep Team",
        informed_agreement: true,
        transcriber: "Alžběta Krejčí",
        verifier: null
    },
    tags: []
}