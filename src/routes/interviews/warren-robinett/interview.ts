import type { InterviewData } from "$src/types";

export const data: InterviewData = {
    slug: "warren-robinett",
    lang: "en",
    title: "Rozhovor s Warennem Robinettem",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Warren Robinett",
        birth_year: "1951",
        gender: "M",
        bio: "Warren Robinett se narodil roku 1951 ve Springfield Missouri. Studoval undergraduate na Rice University a graduate na Berkley odkud po dostudování šel pracovat do firmy Atari. Zde udělal tři hry (<em>Slot Racer</em>, <em>BASIC programmer</em>, <em>Adventure</em>) než kvůli neshodám s vedením odešel. Později byl u založení firmy The Learning Company.",
        photo: {
            url: "/interviews/warren-robinett.jpg",
        }
    },
    interview: {
        date: new Date("2023-11-10"),
        place: "Brno",
        interviewer: "TODO TODO TODO TODO TODO TODO",
        // length: "",
        // project: "",
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: false,
    tags: []
}