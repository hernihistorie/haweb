import { Temporal } from '@js-temporal/polyfill';
import { czech } from "$src/data/languages";
import type { InterviewData, Person } from "$src/types";
import { projectTvurci80 } from '$src/routes/projects/tvurci-z-80tych-let/project';

// https://docs.google.com/document/d/1gtzvq2Fpla1VqFLjk-sq0cgIeaiB_NNzKLWI2LFjc7g/edit

export const PT: Person = {
    name: "Petr Tuček",
    shortname: "PT",
    birth_year: "1970",
    birth_place: "Praha",
    gender: "M",
    color: "green",
    photo: {
        url: "/static/interviews/petr-tucek.jpg",
        details_url: "",
        // license_text: ""
    },
    bio: 'TODO TODO TODO TODO'
}

export const data: InterviewData = {
    slug: "pets-tucek",
    lang: "cs",
    title: {
        cs: "Dotazník: Petr Tuček",
        en: "Questionnaire: Petr Tuček"
    },
    narrator: PT,
    interview: {
        type: "questionnaire",
        languages: [czech],
        date: Temporal.PlainDate.from("2026-05-04"),
        project: projectTvurci80,
        publication_date: Temporal.PlainDate.from("2026-09-17"),
        // publication_date: Temporal.PlainDate.from(""),
        // verifier: null
    },
    status: "published",
    tags: []
}