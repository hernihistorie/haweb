import type { InterviewData } from "$src/types";

export const data: InterviewData = {
    slug: "josef-havelka",
    lang: "cs",
    title: "Rozhovor s Josefem Havelkou",
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Josef Havelka",
        birth_year: "TODO TODO TODO TODO",
        gender: "M",
        bio: "Josef Havelka studoval a následně i pracoval v rámci zemědělství. K prvnímu počítači se dostal, když mu první manželka přivezla z Francie počítač značky Sinclair. Během svého působení v rámci zemědělství založil Atari klub při místním JZD a začal se věnovat tisku (ke kterému pak zcela utekl od meliorací půdy). Klub byl umístěn v budově, které pan Havelka říkal ,,první škola“ a fungoval od roku 1986 až do revoluce roku 1989. Kromě obecného fungování v prostorech školy, klub dělal i různé akce jako byl „Atari bál“ nebo akce, kde s počítači seznamoval pedagogy.",
        photo: {
            url: "/interviews/josef-havelka.jpg",
        }
    },
    interview: {
        date: new Date("2023-05-03"),
        place: "TODO TODO TODO TODO",
        interviewer: "Rudolf Jan Suchý",
        // length: "",
        project: "Počítačové kluby v ČSR",
        informed_agreement: true,
        // transcriber: "Rudolf Jan Suchý",
        // verifier: null
    },
    complete: false,
    tags: []
}