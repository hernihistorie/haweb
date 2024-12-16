import type { InterviewData, Person } from "$src/types";

// https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit

export const MK: Person = {
    name: "Martin Kadlčík",
    shortname: "MK",
    birth_year: "1872",
    birth_place: "Uherské hradiště",
    gender: "M",
    color: "darkblue",
    bio: ""
}

export const data: InterviewData = {
    slug: "martin-kadlcik",
    lang: "cs",
    title: "Vyplněný dotazník: Kadlčík, Martin",
    narrator: MK,
    interview: {
        type: "questionnaire",
        date: new Date("2024-12-13"),
        project: {name: "Tvůrci z 80. let"},
        // publication_date: new Date(""),
        // verifier: null
    },
    complete: true,
    tags: []
}