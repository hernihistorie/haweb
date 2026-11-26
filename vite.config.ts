import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { pagefindBuild } from "vite-plugin-pagefind";
import { defineConfig } from "vite";
import { imagePlaceholder } from "./src/lib/vite/imagePlaceholder.ts";
import { slideText } from "./src/lib/vite/slideText.ts";

export default defineConfig({
    define: {
        // Lets prerendered pages and the browser agree on what was released when they were built
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
    plugins: [
        imagePlaceholder(),
        enhancedImages(),
        slideText(),
        sveltekit({
            // Consult https://kit.svelte.dev/docs/integrations#preprocessors
            // for more information about preprocessors
            preprocess: vitePreprocess(),
            adapter: adapter({ out: "build", precompress: false }),
            alias: { $src: "./src" },
            prerender: {
                // Many pages wait on our APIs, so render several at a time (the default is 1)
                concurrency: 8,
                handleMissingId: "warn",
                handleHttpError: "warn",
            },
        }),

        paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/lib/paraglide",
            strategy: ["url", "cookie", "baseLocale"],
            urlPatterns: [
                {
                    pattern: "/:path(.*)?",
                    localized: [
                        ["en", "/en/:path(.*)?"],
                        ["cs", "/:path(.*)?"],
                    ],
                },
            ],
        }),
        pagefindBuild({}),
    ],
});
