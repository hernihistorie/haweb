import type { InterviewData, Person } from "$src/types";

// https://docs.google.com/document/d/1jym3l5vMQyDJuwkU3bANHMhsfRxdkE8A/edit

export const MK: Person = {
    name: "Martin Kadlčík",
    shortname: "MK",
    birth_year: "1972",
    birth_place: "Uherské Hradiště",
    gender: "M",
    color: "darkblue",
    bio: 'Martin Kadlčík - narozen roku 1972 v Uherském Hradišti - je tvůrce drobné textovky z 80. let jménem <a href="https://inventory.herniarchiv.cz/asset/8411-kazeta-das-adlernest"><em>das ADLERNEST<em></a>, kterou jsme tento rok zdigitalizovali. Mimo svých osobních projektů po revoluci také pracoval na několika nevydaných titulech v Ilusion Softworks a v současnosti pracuje na volné noze pro různá herní studia a v e-shopu sintech.'
}

export const data: InterviewData = {
    slug: "martin-kadlcik",
    lang: "cs",
    title: "Dotazník: Martin Kadlčík",
    narrator: MK,
    interview: {
        type: "questionnaire",
        date: new Date("2024-12-13"),
        project: {name: "Tvůrci z 80. let"},
        // publication_date: new Date(""),
        // verifier: null
    },
    complete: true,
    tags: []
}