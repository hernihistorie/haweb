import type { Author } from "$src/types";

// Auto-discover all authors using Vite's glob import.
// Each author lives in its own directory, e.g. `./jiri-bernasek/author.ts`.
// Posts import their author directly, so only code that needs the full list should import this.
const authorModules = import.meta.glob<{ default: Author }>("./*/author.ts", {
    eager: true,
});

export const authorsBySlug: Record<string, Author> = Object.fromEntries(
    Object.entries(authorModules).map(([path, module]) => {
        const author = module.default;
        const directory = path.split("/")[1];
        if (directory !== author.slug) {
            throw new Error(`Author ${path} has slug "${author.slug}" but is in ${directory}/`);
        }
        return [author.slug, author];
    }),
);
