import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import { projectBulanci } from "$src/routes/projects/bulanci/project";
import type { InterviewData, Person } from "$src/types";
import { RS, VJ } from '../persons';

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

export const JP: Person = {
    name: "Jan Pokorný",
    shortname: "JP",
    color: "darkgreen",
    birth_year: "1990",
    gender: "M",
    bio: {
        cs: "Jan Pokorný, známý také pod přezdívkou JP3035, narozený v roce 1990, patřil k pozdějším aktivním členům bulánčí komunity. Ke hře <i>Bulánci</i> se dostal prostřednictvím kamarádů ze školy, se kterými ji také hrával. Později založil vlastní web, na němž propojil svůj zájem o <i>Bulánky</i> s hromadnou městskou dopravou. Vydal zde také několik map, které tyto dva zájmy kombinovaly.",
        en: "Jan Pokorný, also known by the nickname JP3035 and born in 1990, was one of the later active members of the <i>Bulánci</i> community. He discovered the game through his school friends, with whom he also played it. He later created his own website, combining his interest in <i>Bulánci</i> with his passion for public transport. He also published several maps that brought these two interests together."
    },
    photo: {
        url: "/static/interviews/jan-pokorny.jpg",
    }
}

export {RS, VJ};

export const data: InterviewData = {
    slug: "jan-pokorny",
    lang: "cs",
    title: {
        cs: "Rozhovor s Janem Pokorným",
        en: "Interview with Jan Pokorný"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: JP,
    interview: {
        date: Temporal.PlainDate.from("2026-07-18"),
        length: "00:40:05",
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