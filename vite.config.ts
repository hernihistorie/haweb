import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { pagefindBuild } from "vite-plugin-pagefind";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit({
            // Consult https://kit.svelte.dev/docs/integrations#preprocessors
            // for more information about preprocessors
            preprocess: vitePreprocess(),
            adapter: adapter({ out: process.env.BUILD_OUT || "build", precompress: false }),
            alias: { $src: "./src" },
            prerender: { handleMissingId: "warn", handleHttpError: "warn" },
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
