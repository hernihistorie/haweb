import type { InterviewData, Person } from "$src/types";
import { RS, VS } from "../persons";

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

const JH: Person = {
    name: "Josef Havelka",
    shortname: "JH",
    color: "darkblue",
    birth_year: "1948",
    gender: "M",
    bio: "Josef Havelka studoval a následně i pracoval v rámci zemědělství. K prvnímu počítači se dostal, když mu první manželka přivezla z Francie ZX Spectrum. Během svého působení v rámci zemědělství založil Atari klub při místním JZD a začal se věnovat tisku. Klub byl umístěn v budově, které pan Havelka říkal „první škola“ a fungoval od roku 1986 až do revoluce roku 1989.<br>Chtěli bychom poděkovat <a href='https://www.heroclan.cz'>HERO CLANU</a> za spojení s dobrovolnou přepisovatelkou pro tento rozhovor.",
    photo: {
        url: "/interviews/josef-havelka.jpg",
    }
}

export {JH, RS, VS};

export const data: InterviewData = {
    slug: "josef-havelka",
    lang: "cs",
    title: "Rozhovor s Josefem Havelkou",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: JH,
    interview: {
        date: new Date("2024-05-13"),
        place: "Cítov",
        interviewers: [RS, VS],
        length: "2:35:41",
        project: { name: "Atari klub Cítov", url: "/projects/atari-klub-citov/" },
        informed_agreement: true,
        transcriber: {name: 'Sabina Adlerová'},
        redaction: RS,
        publication_date: new Date("2025-01-03"),
        // verifier: null
    },
    complete: true,
    tags: []
}