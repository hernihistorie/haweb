import type { InterviewData, Person } from "$src/types";
import { RS, VS } from "../persons";

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

const JH: Person = {
    name: "Josef Havelka",
    shortname: "JH",
    color: "darkblue",
    birth_year: "1962",
    gender: "M",
    bio: "Josef Havelka studoval a následně i pracoval v rámci zemědělství. K prvnímu počítači se dostal, když mu první manželka přivezla z Francie počítač značky Sinclair. Během svého působení v rámci zemědělství založil Atari klub při místním JZD a začal se věnovat tisku (ke kterému pak zcela utekl od meliorací půdy). Klub byl umístěn v budově, které pan Havelka říkal ,,první škola“ a fungoval od roku 1986 až do revoluce roku 1989. Kromě obecného fungování v prostorech školy, klub dělal i různé akce jako byl „Atari bál“ nebo akce, kde s počítači seznamoval pedagogy.",
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
        interviewer: RS,
        // length: "",
        project: { name: "Dějiny počítačových klubů –⁠⁠⁠⁠⁠⁠ Počítačový klub Cítov" },
        informed_agreement: true,
        transcriber: {name: 'Sabina Adlerová'},
        redaction: RS,
        // verifier: null
    },
    complete: false,
    tags: []
}