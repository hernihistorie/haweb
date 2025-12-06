import type { InterviewData } from "$src/types";

export const data: InterviewData = {
    slug: "kamila-hurnikova",
    lang: "cs",
    title: {
        cs: "Rozhovor s Kamilou Hurníkovou",
        en: "Interview with Kamila Hurníková"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: {
        name: "Kamila Hurníková",
        birth_year: "TODO TODO TODO TODO",
        gender: "F",
        bio: "Kamila Hurníková se narodila roku 1978. Studovala na Obchodní akademii, kde se potkala svými třemi kolegy, s kterými v následujících letech založila společnost <em>Sleep Team</em> v rámci které se podílela na první hře <em>Polda</em>. Po <em>Poldovi</em> dělala na hře <em>Bulánci</em>, na několika malých hříčkách distribuovaných v rámci platformy IWannaPlay nebo na <em>Buláncích 2</em>. Zároveň stála u založení GDA, České hry roku, GDS apod.",
        photo: {
            url: "/interviews/kamila-hurnikova.jpg",
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