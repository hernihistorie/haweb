import type { InterviewData } from "$src/types";
import { RS, AT } from "../persons";

export {RS, AT};

export const data: InterviewData = {
    slug: "rudolf-pecinovsky",
    lang: "cs",
    title: "Rozhovor s Rudolfem Pecinovským",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Rudolf Pecinovský",
        birth_year: "1954",
        gender: "M",
        bio: "Rudolf Pecinovský se narodil roku 1954 v Praze. Prvně studoval na Fakultě jaderné a fyzikálně inženýrské ČVUT, z které přešel na Fakultu elektrotechnickou ČVUT, kde pokračoval ve studiu teoretické kybernetiky. Po vojně začal chodit do Domu pionýrů v Podbabě, kde vedl kroužky programování. Později se účastnil i aktivit 602. ZO Svazarmu, v rámci kterého vytvořil vzdělávací metodiku pro program <i>Karel</i>. Také psal vzdělávací seriály pro časopisy jako <i>VTM</i>, <i>ABC</i> ad.",
        photo: {
            url: "/interviews/rudolf-pecinovsky.jpg",
        }
    },
    interview: {
        date: new Date("2025-11-28"),
        place: "Kancelář VŠE",
        interviewers: [RS, AT],
        // length: "",
        project: {name:"Programy šířené v rámci vysílání Československého rozhlasu"},
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: false,
    tags: []
}