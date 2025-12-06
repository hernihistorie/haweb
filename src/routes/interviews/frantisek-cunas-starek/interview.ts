import type { InterviewData, Person } from "$src/types";

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
    bio: "František „Čuňas“ Stárek, narozen roku 1952, byl disident, signatář Charty 77 a přední osobností československého undergroundu. V roce 1979 spoluzaložil kulturní semizdatové periodikum <i>Vokno</i>. Společně s kolegy Pavlem Lašákem a Jiřím Včelákem založili „výzkumný ústav samizdatový“, v rámci kterého experimentovali s novými technologiemi, včetně osmibitových počítačů. Po revoluci pracoval v BIS a v současnosti pracuje v ÚSTR.",
    photo: {
        url: "/interviews/frantisek-cunas-starek.jpg",
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
        date: new Date("2016-01-05"),
        length: "N/A",
        place: "TODO",
        interviewer: JS,
        informed_agreement: true,
        publication_date: new Date("2026-01-01"),
        project: {
            "name": "Fond Františka „Čuňase“ Stárka",
            "url": "/projects/frantisek-cunas-starek/"
        },
        // verifier: null
    },
    complete: true,
    tags: []
}