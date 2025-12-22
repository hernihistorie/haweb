import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import type { InterviewData } from "$src/types";
import { RS, VS } from "../persons";

export { RS, VS };

export const data: InterviewData = {
    slug: "kamila-hurnikova",
    lang: "cs",
    title: {
        cs: "Rozhovor s Kamilou Hurníkovou",
        en: "Interview with Kamila Hurníková"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Kamila Hurníková",
        // birth_year: null,
        gender: "F",
        bio: "Kamila Hurníková se narodila roku 1978. Studovala na Obchodní akademii, kde se potkala svými třemi kolegy, s kterými v následujících letech založila společnost <em>Sleep Team</em> v rámci které se podílela na první hře <em>Polda</em>. Po <em>Poldovi</em> dělala na hře <em>Bulánci</em>, na několika malých hříčkách distribuovaných v rámci platformy IWannaPlay nebo na <em>Buláncích 2</em>. Zároveň stála u založení GDA, České hry roku, GDS apod.",
        photo: {
            url: "/interviews/kamila-hurnikova.jpg",
        }
    },
    interview: {
        date: Temporal.PlainDate.from("2024-03-11"),
        place: "Café Standard, Praha",
        interviewers: [RS, VS],
        length: "3:08:08",
        languages: [czech],
        project: {name: "Porevoluční videoherní scéna – Sleep Team"},
        informed_agreement: true,
        transcriber: {'name': "Matúš Nagy, Rudolf Jan Suchý"},
        // redaction: RS,
        // publication_date: Temporal.PlainDate.from("????-??-??"),
        // verifier: null
    },
    status: "request-only",
    tags: []
}