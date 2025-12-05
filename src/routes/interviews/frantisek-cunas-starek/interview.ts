import type { InterviewData, Person } from "$src/types";
import { RS, VS } from "../persons";

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

export const JS: Person = {
    name: "Jaroslav Švelch",
    shortname: "JS",
    color: "darkred",
}

export const FS: Person = {
    name: "František „Čuňas“ Stárek",
    shortname: "FS",
    color: "darkblue",
    birth_year: "1952",
    gender: "M",
    bio: "TODO",
    photo: {
        url: "/interviews/todo.jpg",
    }
}

export const data: InterviewData = {
    slug: "frantisek-cunas-starek",
    lang: "cs",
    title: "Rozhovor s Františkem „Čuňasem“ Stárkem",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: FS,
    interview: {
        date: new Date("2000-01-01"),
        place: "TODO",
        interviewer: JS,
        informed_agreement: true,
        publication_date: new Date("2000-01-01"),
        // verifier: null
    },
    complete: true,
    tags: []
}