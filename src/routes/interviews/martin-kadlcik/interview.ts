import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import type { InterviewData, Person } from "$src/types";

// https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit

export const MK: Person = {
    name: "Martin Kadlčík",
    shortname: "MK",
    birth_year: "1972",
    birth_place: "Uherské Hradiště",
    gender: "M",
    color: "darkblue",
    photo: {
        url: "/interviews/martin-kadlcik.JPG",
        details_url: "",
        // license_text: ""
    },
    bio: 'Martin Kadlčík - narozen roku 1972 v Uherském Hradišti - je tvůrce drobné textovky z 80. let jménem <a href="https://inventory.herniarchiv.cz/asset/8411-kazeta-das-adlernest"><em>das ADLERNEST</em></a>, kterou jsme tento rok zdigitalizovali. Mimo svých osobních projektů po revoluci také pracoval na několika nevydaných titulech v Ilusion Softworks a v současnosti pracuje na volné noze pro různá herní studia a v e-shopu sintech. Rozhovor je doplněn o <b>fotky ze zápisníku narátora.</b>'
}

export const data: InterviewData = {
    slug: "martin-kadlcik",
    lang: "cs",
    title: {
        cs: "Dotazník: Martin Kadlčík",
        en: "Questionnaire: Martin Kadlčík"
    },
    narrator: MK,
    interview: {
        length: "N/A",
        type: "questionnaire",
        languages: [czech],
        date: Temporal.PlainDate.from("2024-12-13"),
        project: {name: "Tvůrci z 80. let"},
        publication_date: Temporal.PlainDate.from("2024-12-18"),
        // publication_date: Temporal.PlainDate.from(""),
        // verifier: null
    },
    status: "published",
    tags: []
}