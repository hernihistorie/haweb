import type { Author } from "$src/types";
import photo from "./photo.jpg?w=300&format=jpg&imagetools";

const author: Author = {
    slug: "andrew-tesla",
    name: "Andrew Tesla",
    nameGenitive: "Andrew Tesly",
    bio: {
        cs: "Youtubový kanál Jana Heřmana o oživování zapomenutého hardwaru – diagnostice a opravách starých počítačů jako Ondra, Didaktik, PMD nebo IQ 151.",
        en: "Jan Heřman's YouTube channel about bringing forgotten hardware back to life – diagnosing, repairing old computers such as the Ondra, Didaktik, PMD or IQ 151.",
    },
    image: {
        url: photo,
        alt: "Logo kanálu Andrew Tesla",
    },
    youtubeChannelURL: "https://www.youtube.com/@Andrew_Tesla",
};

export default author;
