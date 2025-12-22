import { Temporal } from '@js-temporal/polyfill';
import { czech, english } from "$src/data/languages";
import type { InterviewData } from "$src/types";

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
        bio: "Warren Robinett se narodil roku 1951 ve Springfield Missouri. Studoval undergraduate na Rice University a graduate na Berkley odkud po dostudování šel pracovat do firmy <em>Atari</em>. Zde udělal tři hry (<em>Slot Racer</em>, <em>BASIC Programming</em>, <em>Adventure</em>) než kvůli neshodám s vedením odešel. Později stál u založení firmy <em>The Learning Company</em>.",
        photo: {
            url: "/interviews/warren-robinett.jpg",
        }
    },
    interview: {
        date: Temporal.PlainDate.from("2023-11-10"),
        place: "Brno",
        languages: [english],
        // interviewer: "TODO TODO TODO TODO TODO TODO",
        // length: "",
        // project: "",
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    status: "in-progress",
    tags: []
}