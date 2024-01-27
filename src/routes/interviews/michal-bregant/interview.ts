import type { InterviewData } from "$src/types";

export const data: InterviewData = {
    slug: "michal-bregant",
    lang: "cs",
    title: "Rozhovor s Michalem Bregantem",
    audio_file: "herni-archiv-rozhovor-michal-bregant.m4a",
    audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Michal Bregant",
        birth_year: "1964",
        gender: "M",
        photo: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Michal_Bregant_%282022%29.jpg/614px-Michal_Bregant_%282022%29.jpg",
            details_url: "https://commons.wikimedia.org/wiki/File:Michal_Bregant_(2022).jpg",
            license_text: "Autor fotografie: Jindřich Nosek (NoJin). License: Creative Commons Attribution-Share Alike 4.0 International"
        }
    },
    interview: {
        date: new Date("2023-05-01"),
        place: "Jevany (dům narátora)",
        interviewer: "Rudolf Jan Suchý",
        length: "02:01:06",
        project: "Dějiny Filmových studií",
        informed_agreement: true,
        transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: true,
    tags: []
}