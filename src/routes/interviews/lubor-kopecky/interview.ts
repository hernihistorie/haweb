import type { InterviewData } from "$src/types";

// https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit

export const data: InterviewData = {
    slug: "lubor-kopecky",
    lang: "cs",
    title: "Rozhovor s Luborem Kopeckým",
    audio_file: "herni-archiv-rozhovor-lubor-kopecky.m4a",
    audio_duration: 51 + 46*60 + 1*60*60,
    narrator: {
        name: "Lubor Kopecký",
        birth_year: "1978",
        gender: "M",
        photo: {
            url: "/interviews/lubor-kopecky.jpg",
            details_url: "",
            // license_text: ""
        },
        bio: "Lubor Kopecký se narodil roku 1978. Studoval na Obchodní akademii, kde potkal své tři kolegy, s kterými v následujících letech založil společnost <em>Sleep Team</em> v rámci které udělal svou první hru <em>Polda</em>. Po <em>Poldovi</em> dělal na hře <em>Bulánci</em>, <em>President: Path to Power</em> nebo <em>Bulánci 2</em>. Zároveň stál u založení GDA, České hry roku a katedry herního designu na FAMU."
    },
    interview: {
        date: new Date("2023-07-31"),
        place: "Dolní Město – Smrčensko (narátorův statek)",
        interviewer: "Rudolf Jan Suchý",
        length: "1:46:51",
        project: "Porevoluční videoherní scéna – Sleep Team",
        informed_agreement: true,
        transcriber: "Alžběta Krejčí",
        redaction: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: true,
    tags: []
}