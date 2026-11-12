import {
    bulanciAuthors,
    bulanciAuthorsBySlug,
    bulanciMapsByAuthor,
    getBulanciAuthorPlaces,
} from "$src/data/bulanci";
import { error } from "@sveltejs/kit";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () => bulanciAuthors.map(({ slug }) => ({ slug }));

export const load: PageServerLoad = async ({ params }) => {
    const author = bulanciAuthorsBySlug[params.slug];
    if (!author) {
        error(404, "Author not found");
    }
    const maps = bulanciMapsByAuthor[author.name] ?? [];
    return {
        author,
        maps,
        places: getBulanciAuthorPlaces(maps),
    };
};
