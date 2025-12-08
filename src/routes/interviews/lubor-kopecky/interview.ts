import { czech } from "$src/data/languages";
import type { InterviewData, Person } from "$src/types";
import { RS, VS } from "../persons";

export { RS, VS };

// https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit

export const LK: Person = {
    name: "Lubor Kopecký",
    shortname: "LK",
    birth_year: "1978",
    gender: "M",
    color: "darkblue",
    photo: {
        url: "/interviews/lubor-kopecky.jpg",
        details_url: "",
        // license_text: ""
    },
    bio: 'Lubor Kopecký se narodil roku 1978. Studoval na Obchodní akademii, kde potkal své tři kolegy, s kterými v následujících letech utvořili uskupení <em>Sleep Team</em> v rámci kterého udělali svou první hru <em>Polda</em>. Dělal také na hře <em>Bulánci</em>, <em>President: Path to Power</em> nebo <em>Bulánci 2</em>. Stál i u založení GDA, České hry roku a Katedry herního designu na FAMU. <br>Rozhovor je v současnosti možné získat <b>pouze pro výzkumné účely</b>. Kontaktujte nás na <a href="mailto:rudolf.suchy@herniarchiv.cz">rudolf.suchy@hernihistorie.cz</a>'
}

export const data: InterviewData = {
    slug: "lubor-kopecky",
    lang: "cs",
    title: {
        cs: "Rozhovor s Luborem Kopeckým",
        en: "Interview with Lubor Kopecký"
    },
    // audio_file: "herni-archiv-rozhovor-lubor-kopecky.m4a",
    audio_duration: 51 + 46*60 + 1*60*60,
    narrator: LK,
    interview: {
        date: new Date("2023-07-31"),
        place: "Dolní Město – Smrčensko (narátorův statek)",
        interviewer: RS,
        length: "1:46:51",
        languages: [czech],
        project: {name: "Porevoluční videoherní scéna – Sleep Team"},
        informed_agreement: true,
        transcriber: {'name': "Alžběta Krejčí"},
        redaction: RS,
        publication_date: new Date("2024-01-20"),
        // verifier: null
    },
    complete: false,
    tags: []
}