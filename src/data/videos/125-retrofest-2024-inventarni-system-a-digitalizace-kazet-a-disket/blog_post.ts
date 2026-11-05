import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 125,
    slug: "retrofest-2024-inventarni-system-a-digitalizace-kazet-a-disket",
    kind: "video",
    title: {
        cs: "Inventární systém a digitalizace kazet a disket",
        en: "The Inventory System and Digitizing Tapes and Floppies",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Jak evidujeme předměty ze sbírky v našem inventárním systému a jak digitalizujeme kazety, diskety a další média.
        `,
        en: `
            How we record the items in our collection in our inventory system, and how we digitize tapes, floppy disks and other media.
        `,
    },
    video: {
        youtubeId: "B2X_rZEeF90",
        duration: 1009,
    },
};

export default post;
