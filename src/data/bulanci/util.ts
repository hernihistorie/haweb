// fix stray newlines
export const normalizeWhitespace = (value: string): string => value.replace(/\s+/g, " ").trim();

export const normalizeName = (value: string): string =>
    normalizeWhitespace(value).toLocaleLowerCase("cs");

export const basename = (path: string): string =>
    path
        .split("/")
        .pop()!
        .replace(/\.[^.]+$/, "");
