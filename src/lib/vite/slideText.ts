import { readFile } from "node:fs/promises";
import type { Plugin } from "vite";

const QUERY = "?text";

/**
 * Lets PDFs be imported with `?text` to get the text of each page as a string array,
 * so the text of a talk's slides can be rendered into the page for search to index.
 * Extracted at build time, so the PDF itself never ends up in the bundle.
 */
export function slideText(): Plugin {
    return {
        name: "slide-text",
        // Before Vite's asset plugin, which would otherwise turn the PDF into a URL
        enforce: "pre",
        async load(id) {
            if (!id.endsWith(".pdf" + QUERY)) return;
            const file = id.slice(0, -QUERY.length);
            this.addWatchFile(file);

            // The legacy build runs in Node without any DOM polyfills
            const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");
            const loadingTask = getDocument({ data: new Uint8Array(await readFile(file)) });
            const doc = await loadingTask.promise;
            const pages: string[] = [];
            for (let i = 1; i <= doc.numPages; i++) {
                const { items } = await (await doc.getPage(i)).getTextContent();
                const text = items
                    .map((item) => ("str" in item ? item.str + (item.hasEOL ? "\n" : "") : ""))
                    .join("");
                pages.push(
                    text
                        // Unfold ligatures such as "ﬁ", so that they match plain search terms
                        .normalize("NFKC")
                        .split("\n")
                        .map((line) => line.replace(/\s+/g, " ").trim())
                        .filter(Boolean)
                        .join("\n"),
                );
            }
            await loadingTask.destroy();

            return `export default ${JSON.stringify(pages)};`;
        },
    };
}
