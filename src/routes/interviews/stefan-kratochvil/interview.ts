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
        bio: "Štefan Kratochvíl se narodil roku 1956. Díky jeho zájmu o elektroniku se na začátku 80. let dostal ke Stanici mladých techniků v Podbabě. Později se účastnil i aktivit v rámci 602. ZO Svazarmu, 666. ZO Svazarmu, nebo Střediska pro mládež a elektrotechniku.",
        photo: {
            url: "/interviews/stefan-kratochvil.jpg",
        }
    },
    interview: {
        date: Temporal.PlainDate.from("2025-12-17"),
        place: "Kancelář narátora, Praha",
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