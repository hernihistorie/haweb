import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import type { InterviewData } from "$src/types";
import { RS, AT } from "../persons";

export {RS, AT};

export const data: InterviewData = {
    slug: "tomas-bartovsky",
    lang: "cs",
    title: {
        cs: "Rozhovor s Tomášem Bartovským",
        en: "Interview with Tomáš Bartovský"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Tomáš Bartovký",
        birth_year: "1938",
        gender: "M",
        bio: "Tomáš Bartovský se narodil roku 1938 v Úpici. Studoval na VŠCHT, kde poté i učil. Skrze modelářský kroužek se dostal k Domu pionýrů v Podbabě, kde se seznámil s počítači i programováním. Později se účastnil i aktivit v rámci 602. ZO Svazarmu, v rámci kterého vytvořil i tehdy populární programovací jazyk <i>Karel</i>.",
        photo: {
            url: "/interviews/tomas-bartovsky.jpg",
        }
    },
    interview: {
        date: Temporal.PlainDate.from("2025-11-18"),
        place: "Bistro Andělka, Praha",
        languages: [czech],
        interviewers: [RS, AT],
        length: "0:54:15",
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