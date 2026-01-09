import { createContext, type Snippet } from 'svelte';

export class FootnoteHolder {
    footnotes: Snippet[] = [];

    add(footnote: Snippet): number {
        this.footnotes.push(footnote);
        return this.footnotes.length;
    }
}

export const [getFootnoteContext, setFootnoteContext] = createContext<FootnoteHolder>();
// usage:
// setFootnoteContext(new Footnotes());
// const footnotes = getFootnoteContext();
// const number = footnotes.add(footnoteSnippet);