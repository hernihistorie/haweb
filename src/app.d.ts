// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
    namespace App {
        interface PageState {
            /** The original URL of the archived site whose browser window is maximized */
            maximizedArchive?: string;
        }
    }
}

export {};
