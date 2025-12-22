import { Temporal } from '@js-temporal/polyfill';
import { czech, english } from "$src/data/languages";
import type { InterviewData } from "$src/types";
import { RS, VS } from "../persons";

export { RS, VS };

export const data: InterviewData = {
    slug: "warren-robinett",
    lang: "en",
    title: {
        cs: "Rozhovor s Warennem Robinettem",
        en: "Interview with Warren Robinett"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Warren Robinett",
        birth_year: "1951",
        gender: "M",
        bio: {
            cs: "Warren Robinett se narodil roku 1951 ve Springfield Missouri. Studoval undergraduate na Rice University a graduate na Berkley odkud po dostudování šel pracovat do firmy <em>Atari</em>. Zde udělal tři hry (<em>Slot Racer</em>, <em>BASIC Programming</em>, <em>Adventure</em>) než kvůli neshodám s vedením odešel. Později stál u založení firmy <em>The Learning Company</em>.",
            en: "Warren Robinett was born in 1951 in Springfield, Missouri. He studied undergraduate at Rice University and graduate at Berkeley, from where he went to work for <em>Atari</em> after graduation. There, he made three games (<em>Slot Racer</em>, <em>BASIC Programming</em>, <em>Adventure</em>) before leaving due to disagreements with management. He later co-founded <em>The Learning Company</em>."
        },
        photo: {
            url: "/interviews/warren-robinett.jpg",
        }
    },
    interview: {
        date: Temporal.PlainDate.from("2023-11-10"),
        place: "Brno",
        interviewers: [RS, VS],
        length: "1:43:45",
        languages: [english],
        // project: "",
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // publication_date: Temporal.PlainDate.from("????-??-??"),
        // verifier: null
    },
    status: "in-progress",
    tags: []
}