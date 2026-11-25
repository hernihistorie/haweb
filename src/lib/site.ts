import { Parser } from "htmlparser2";

export const SITE_URL = "https://herniarchiv.cz";

/** For metadata read outside of the site, where links can't be relative */
export function absoluteUrl(url: string): string {
    return new URL(url, SITE_URL).href;
}

function textOnServer(html: string): string {
    let text = "";
    const parser = new Parser({
        ontext: (data) => (text += data),
        onopentagname: (name) => {
            if (name === "br") text += " ";
        },
    });
    parser.end(html);
    return text;
}

function textInBrowser(html: string): string {
    const { body } = new DOMParser().parseFromString(html, "text/html");
    body.querySelectorAll("br").forEach((br) => br.replaceWith(" "));
    return body.textContent ?? "";
}

/** The text of an HTML snippet, for metadata which can only be plain text */
export function htmlToText(html: string): string {
    // Browsers come with a parser, so keep htmlparser2 out of the client bundle
    const text = import.meta.env.SSR ? textOnServer(html) : textInBrowser(html);
    // Not \s, which would also collapse non-breaking spaces
    return text.replace(/[ \t\r\n]+/g, " ").trim();
}
