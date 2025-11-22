import type { InterviewData } from "$src/types";

export const data: InterviewData = {
    slug: "tomas-bartovsky",
    lang: "cs",
    title: "Rozhovor s Tomášem Bartovským",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Tomáš Bartovký",
        birth_year: "1938",
        gender: "M",
        bio: "Tomáš Bartovský se narodil roku 1938 v Úpici. Studoval na VŠCHT, kde poté i učil. Skrze modelářský se dostal k Domu pionýrů v Podbabě, kde se seznámil s počítači i programováním. Později se účastnil i aktivit v rámci 602. ZO Svazarmu, v rámci kterého vytvořil i tehdy populární programovací jazyk <i>Karel</i>.",
        photo: {
            url: "/interviews/tomas-bartovsky.jpg",
        }
    },
    interview: {
        date: new Date("2025-11-18"),
        place: "Bistro Andělka",
        interviewer: "Rudolf Jan Suchý, Agáta Trlidová",
        // length: "",
        project: "Programy šířené v rámci vysílání Československého rozhlasu",
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: false,
    tags: []
}