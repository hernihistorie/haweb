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
        url: "/images/petr-tucek/petr-tucek-predit.png",
        details_url: "",
        // license_text: ""
    },
    bio: {
        cs: "Petr Tuček - narozen roku 1970 v Praze - je tvůrce několika drobných her pro ZX Spectrum z konce 80. let, které jsme v roce 2026 zdigitalizovali. V současnosti narátor pracuje jako softwarový analytik. Rozhovor je doplněn o screenshoty narátorových her.",
        en: "Petr Tuček - born in 1970 in Prague - is the creator of several small games for the ZX Spectrum from the late 1980s, which we digitized in 2026. Currently, the narrator works as a software analyst. The interview is accompanied by screenshots of the narrator's games."
    }
}

export const data: InterviewData = {
    slug: "petr-tucek",
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
        english_translation_publication_date: Temporal.PlainDate.from("2026-09-17"),
        // verifier: null
    },
    status: "published",
    tags: []
}