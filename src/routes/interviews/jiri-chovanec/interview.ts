import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import { projectBulanci } from "$src/routes/projects/bulanci/project";
import type { InterviewData, Person } from "$src/types";
import { RS, VJ } from '../persons';

// https://docs.google.com/document/d/1NszQitd-hCDAidkszwpgGAmKLrdlv8x9/edit
// https://drive.google.com/drive/folders/1_yluW8sETIBgv9y4130_Q2vszjlQm_Zn

export const JCH: Person = {
    name: "Jiří Chovanec",
    shortname: "JCh",
    color: "darkgreen",
    birth_year: "1990",
    gender: "M",
    bio: {
        cs: "Jiří Chovanec, narozen roku 1990, je bývalý fanoušek hry <i>Bulánci</i>. K <i>Bulánkům</i> se dostal zřejmě skrze své starší sourozence a později vytvořil pár map do hry, významný agregační web kde se fanouškovské mapy šířily a také spoluzaložil Klan DrM.",
        en: "Jiří Chovanec, born in 1990, is a former fan of the game <i>Bulánci</i>. He got into <i>Bulánci</i> through his older siblings and later created several maps for the game, a significant aggregation website where fan-made maps were shared, and also co-founded the Klan DrM."
    },
    photo: {
        url: "/static/interviews/jiri-chovanec.jpg",
    }
}

export {RS, VJ};

export const data: InterviewData = {
    slug: "jiri-chovanec",
    lang: "cs",
    title: {
        cs: "Rozhovor s Jiřím Chovanecem",
        en: "Interview with Jiří Chovanec"
    },
    // audio_file: "herni-archiv-rozhovor-stanislav-hrda.m4a",
    // audio_duration: 7266, // duration must be correct
    narrator: JCH,
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