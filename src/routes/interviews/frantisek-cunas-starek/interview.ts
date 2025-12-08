import { czech } from "$src/data/languages";
import { projectFrantisekCunasStarek } from "$src/routes/projects/frantisek-cunas-starek/project";
import type { InterviewData, Person } from "$src/types";

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

export const JS: Person = {
    name: "Jaroslav Švelch",
    shortname: "JŠ",
    color: "darkred",
}

export const FS: Person = {
    name: "František „Čuňas“ Stárek",
    shortname: "FS",
    color: "darkblue",
    birth_year: "1952",
    gender: "M",
    bio: {
        cs: "František „Čuňas“ Stárek, narozen roku 1952, byl disident, signatář Charty 77 a přední osobnost československého undergroundu. V roce 1979 spoluzaložil kulturní semizdatové periodikum <i>Vokno</i>. Společně s kolegy Pavlem Lašákem a Jiřím Včelákem založili „výzkumný ústav samizdatový“, v rámci kterého experimentovali s novými technologiemi, včetně osmibitových počítačů. Po revoluci pracoval v BIS a v současnosti pracuje v ÚSTR.",
        en: "František „Čuňas“ Stárek, born in 1952, was a dissident, a signatory of Charter 77, and a leading figure of the Czechoslovak underground. In 1979, he co-founded the cultural samizdat periodical <i>Vokno</i>. Together with colleagues Pavel Lašák and Jiří Včelák, they established a 'samizdat research institute', where they experimented with new technologies, including 8-bit microcomputers. After the revolution, he worked at BIS and currently works at ÚSTR."
    },
    photo: {
        url: "/interviews/frantisek-cunas-starek.jpg",
    }
}

export const data: InterviewData = {
    slug: "frantisek-cunas-starek",
    lang: "cs",
    title: {
        cs: "Rozhovor s Františkem „Čuňasem“ Stárkem",
        en: "Interview with František „Čuňas“ Stárek"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: FS,
    interview: {
        date: new Date("2016-01-05"),
        length: "0:51:00",
        place: {cs: "Kancelář ÚSTR, Praha 3", en: "ÚSTR Office, Prague 3"},
        languages: [czech],
        interviewer: JS,
        informed_agreement: true,
        publication_date: new Date("2026-01-01"),
        english_translation_publication_date: new Date("2026-01-01"),
        project: projectFrantisekCunasStarek
        // verifier: null
    },
    complete: true,
    tags: []
}