import type { InterviewData, Person } from "$src/types";
import { RS, VS } from "../persons";

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit

export const ZV: Person = {
    name: "Zdeněk Vodák",
    shortname: "ZV",
    birth_year: "1962",
    gender: "M",
    bio: "Zdeněk Vodák se narodil roku 1962 ve městě Boskovice. Studoval FEL na ČVUT, kde se poprvé dostal k počítačům a programování. Ještě na vysoké škole sehnal ZX Spectrum, na kterém později dělal hru pro pořad ČST <em>Videostop</em>. K této práci se dostal přes svého tatínka (Zdeňka Vodáka st.), který pracoval v ČST jako technolog. Během 80. let ještě dělal pro ČST různé animace nebo titulky a po revoluci dělal na pořadech jako je <em>Kdo chce být milionářem?</em>, <em>AZ-kvíz</em> nebo <em>Na lovu</em>.",
    photo: {
        url: "/interviews/zdenek-vodak.JPG",
    }
}

export const data: InterviewData = {
    slug: "zdenek-vodak",
    lang: "cs",
    title: "Rozhovor se Zdeňkem Vodákem",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: ZV,
    interview: {
        date: new Date("2024-06-27"),
        place: "Café Standard, Praha",
        interviewers: [RS, VS],
        // length: "",
        // project: "",
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: false,
    tags: []
}