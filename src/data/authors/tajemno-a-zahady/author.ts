import type { Author } from "$src/types";
import photo from "./photo.jpg?w=300&format=jpg&imagetools";

const author: Author = {
    slug: "tajemno-a-zahady",
    name: "Tajemno a záhady",
    nameGenitive: "Tajemna a záhad",
    bio: {
        cs: "Youtubový kanál o temné historii, tajemných místech a původních dokumentech, které jinde neuvidíte.",
        en: "A YouTube channel about dark history, mysterious places and original documents that you won't see anywhere else.",
    },
    image: {
        url: photo,
        alt: "Logo kanálu Tajemno a záhady",
    },
    youtubeChannelURL: "https://www.youtube.com/@Tajemnoazahady",
};

export default author;
