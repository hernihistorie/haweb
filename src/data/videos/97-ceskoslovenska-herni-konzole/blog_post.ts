import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import TajemnoAZahady from "$src/data/authors/tajemno-a-zahady/author";

const post: Post = {
    published: true,
    id: 97,
    slug: "ceskoslovenska-herni-konzole",
    kind: "video",
    title: {
        cs: "Československá herní konzole",
        en: "A Czechoslovak Game Console",
    },
    // Date the video was published
    date: new Temporal.PlainDate(2026, 9, 23),
    author: TajemnoAZahady,
    description_html: {
        cs: `
            Kanál Tajemno a záhady natočil s naší pomocí díl o konzoli Tesla XD-8001, jejíž součásti včetně čipů byly vyvinuty a vyrobeny v Československu.
        `,
        en: `
            The Tajemno a záhady channel made an episode, with our help, about the Tesla XD-8001 console, whose parts, chips included, were developed and made in Czechoslovakia.
        `,
    },
    video: {
        youtubeId: "JrThogDnSr4",
        channel: { name: "Tajemno a záhady", url: "https://www.youtube.com/@Tajemnoazahady" },
    },
};

export default post;
