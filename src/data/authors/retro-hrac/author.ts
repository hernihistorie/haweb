import type { Author } from "$src/types";
import photo from "./photo.jpg?w=300&format=jpg&imagetools";

const author: Author = {
    slug: "retro-hrac",
    name: "Retro Hráč",
    nameGenitive: "Retro Hráče",
    bio: {
        cs: "Český projekt o retro hrách a konzolích, který od roku 2015 vede Daniel „Bouncer“ Kučera. Na YouTube vydává recenze, rozhovory a pořad Retro Pokec.",
        en: "A Czech project about retro games and consoles, run by Daniel “Bouncer” Kučera since 2015. On YouTube, it publishes reviews, interviews and the Retro Pokec show.",
    },
    image: {
        url: photo,
        alt: "Logo kanálu Retro Hráč",
    },
    youtubeChannelURL: "https://www.youtube.com/@retrohrac",
};

export default author;
