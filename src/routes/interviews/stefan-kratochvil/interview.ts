import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import type { InterviewData } from "$src/types";
import { RS, AT } from "../persons";

export {RS, AT};

export const data: InterviewData = {
    slug: "stefan-kratochvil",
    lang: "cs",
    title: {
        cs: "Rozhovor se Štefanem Kratochvílem",
        en: "Interview with Štefan Kratochvíl"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Štefan Kratochvíl",
        birth_year: "1956",
        gender: "M",
        bio: {
            cs: "Štefan Kratochvíl se narodil roku 1956. Díky svému zájmu o elektroniku se na začátku 80. let dostal ke Stanici mladých techniků v Podbabě. Později se účastnil i aktivit v rámci 602. ZO Svazarmu, 666. ZO Svazarmu, nebo Střediska pro mládež a elektrotechniku.",
            en: "Štefan Kratochvíl was born in 1956. Thanks to his interest in electronics, he got involved with the Young Technicians Station in Podbaba in the early 1980s. Later, he also participated in activities within the 602nd and 666th ZO Svazarm, as well as the Center for Youth and Electrical Engineering."
        },
        photo: {
            url: "/interviews/stefan-kratochvil.jpg",
        }
    },
    interview: {
        date: Temporal.PlainDate.from("2025-12-17"),
        place: {cs: "Kancelář narátora, Praha", en: "Narrator's office, Prague"},
        languages: [czech],
        interviewers: [RS, AT],
        length: "1:43:58",
        project: {name:"Programy z Československého rozhlasu"},
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // redaction: RS,
        // publication_date: Temporal.PlainDate.from("????-??-??"),
        // verifier: null
    },
    status: "in-progress",
    tags: []
}