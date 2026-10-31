import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import { projectBulanci } from "$src/routes/projects/bulanci/project";
import type { InterviewData, Person } from "$src/types";
import { RS, VJ } from '../persons';

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

export const MM: Person = {
    name: "Martin Madejewský",
    shortname: "MM",
    color: "darkblue",
    birth_year: "1994",
    gender: "M",
    bio: {
        cs: "Martin Madejewský, narozen roku 1994, je bývalý fanoušek hry <i>Bulánci</i>. K <i>Bulánkům</i> se dostal kolem roku 2006 a později vytvořil celou řadu map do hry a několik blogů dedikovaných této hře.",
        en: "Martin Madejewský, born in 1994, is a former fan of the game <i>Bulánci</i>. He got into <i>Bulánci</i> around 2006 and later created a whole series of maps for the game and several blogs dedicated to this game."
    },
    photo: {
        url: "/static/interviews/martin-madejewsky.jpg",
    }
}

export {RS, VJ};

export const data: InterviewData = {
    slug: "martin-madejewský",
    lang: "cs",
    title: {
        cs: "Rozhovor s Martinem Madejewským",
        en: "Interview with Martin Madejewský"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: MM,
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