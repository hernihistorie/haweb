// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
    /** ISO timestamp of when the site was built, see vite.config.ts */
    const __BUILD_TIME__: string;

    namespace App {
        interface PageState {
            /** The original URL of the archived site whose browser window is maximized */
            maximizedArchive?: string;
        }
    }
}

export {};
