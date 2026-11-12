/** Kept separate from bulanci.ts, so that links can be built client-side without loading all the data */
import slugify from "slugify";

export const bulanciSlug = (value: string): string =>
    slugify(value, { lower: true, strict: true, locale: "cs" });
