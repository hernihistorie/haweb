import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import type { InterviewData } from "$src/types";
import { projectVideostop } from "$src/routes/projects/videostop/project";
import { RS } from '../persons';

export const data: InterviewData = {
    slug: "vladimir-bezdek",
    lang: "cs",
    title: {
        cs: "Rozhovor s Vladimírem Bezděkem",
        en: "Interview with Vladimír Bezděk"
    },
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
        date: Temporal.PlainDate.from("2023-11-10"),
        place: "Kavárna Liberál, Praha",
        interviewer: RS,
        length: "2:16:59",
        languages: [czech],
        project: projectVideostop,
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // redaction: RS,
        // publication_date: Temporal.PlainDate.from("????-??-??"),
        // verifier: null
    },
    status: "in-progress",
    tags: []
}