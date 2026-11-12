import { bulanciAuthors } from "$src/data/bulanci";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        interviewees: bulanciAuthors.filter((author) => author.interview),
        clans: bulanciAuthors.filter((author) => author.isClan),
        authors: bulanciAuthors.filter((author) => !author.isClan),
    };
};
