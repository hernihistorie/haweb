import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import { projectBulanci } from "$src/routes/projects/bulanci/project";
import type { InterviewData, Person } from "$src/types";
import { RS, VJ } from '../persons';

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

export const TK: Person = {
    name: "Tomáš Kukal",
    shortname: "TK",
    color: "darkblue",
    birth_year: "1994",
    gender: "M",
    bio: {
        cs: "Tomáš Kukal, známý také pod přezdívkou Bimbis a narozený v roce 1992, byl jedním z prominentních členů bulánčí komunity na internetu. Ke hře se pravděpodobně dostal prostřednictvím školy a později spolu se svými kamarády kolem ní založil Klan svobodných bulánků. V rámci klanu vytvářel mapy, které následně distribuoval prostřednictvím svého osobního i klanového blogu.",
        en: "Tomáš Kukal, also known by the nickname Bimbis and born in 1992, was one of the prominent members of the online <i>Bulánci</i> community. He most likely discovered the game at school and later founded the Klan svobodných bulánků (Clan of Free Bulánci) together with his friends. As a member of the clan, he created maps, which he subsequently distributed through both his personal blog and the clan's blog."
    },
    photo: {
        url: "/static/interviews/tomas-kukal.jpg",
    }
}

export {RS, VJ};

export const data: InterviewData = {
    slug: "tomas-kukal",
    lang: "cs",
    title: {
        cs: "Rozhovor s Tomášem Kukalem",
        en: "Interview with Tomáš Kukal"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: TK,
    interview: {
        date: Temporal.PlainDate.from("2026-07-19"),
        length: "00:21:37",
        place: {cs: "Online", en: "Online"},
        languages: [czech],
        interviewer: RS,
        transcriber: {name: 'Hana Procházková'},
        redaction: VJ,
        informed_agreement: true,
        // publication_date: Temporal.PlainDate.from("2026-01-08"),
        // english_translation_publication_date: Temporal.PlainDate.from("2026-01-08"),
        project: projectBulanci
        // verifier: null
    },
    status: "published",
    tags: []
}