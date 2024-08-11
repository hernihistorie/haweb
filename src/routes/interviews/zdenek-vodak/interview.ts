import type { InterviewData, Person } from "$src/types";
import { RS, VS } from "../persons";

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

const ZV: Person = {
    name: "Zdeněk Vodák",
    shortname: "ZV",
    color: "darkblue",
    birth_year: "1962",
    gender: "M",
    bio: "Zdeněk Vodák se narodil roku 1962 ve městě Boskovice. Studoval FEL na ČVUT, kde se poprvé dostal k počítačům a programování. Ještě na vysoké škole sehnal ZX Spectrum, na kterém později dělal hru pro pořad ČST <em>Videostop</em>. K této práci se dostal přes svého tatínka (Zdeňka Vodáka st.), který pracoval v ČST jako technolog. Během 80. let ještě dělal pro ČST různé animace nebo titulky a po revoluci dělal na pořadech jako je <em>Kdo chce být milionářem?</em>, <em>AZ-kvíz</em> nebo <em>Na lovu</em>.",
    photo: {
        url: "/interviews/zdenek-vodak.JPG",
    }
}

export {ZV, RS, VS};

export const data: InterviewData = {
    slug: "zdenek-vodak",
    lang: "cs",
    title: "Rozhovor se Zdeňkem Vodákem",
    audio_file: "herni-archiv-rozhovor-zdenek-vodak.m4a",
    audio_duration: 6532,
    narrator: ZV,
    interview: {
        date: new Date("2024-06-27"),
        place: "Café Standard, Praha",
        interviewers: [RS, VS],
        length: "1:48:52",
        project: {
            "name": "Projekt Videostop",
            "url": "/projects/videostop/"
        },
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: true,
    tags: []
}